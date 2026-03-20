import { useEffect } from "react";
import type { ContentElement, ProjectSideProps } from "../types";
import ContactInput from "./ContactInput";
import ShowlessAction from "./ShowLessAction";
import ProjectImage from "./ProjectImage";



export default function ProjectSide({ article, layouts, isInProject, onExitProject }: ProjectSideProps) {


    useEffect(() => {
        article.content.forEach((el) => {
            if (el.type === "image" && el.src) {
                const img = new Image();
                img.src = el.src;
            }

        });
    }, [article.id]);


    type Section = { layout: string; cols: { [col: number]: ContentElement[] } };
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const currentDevice = isMobile ? "mobile" : "desktop";

    function filterByDevice(
        el: { device?: "desktop" | "mobile" | "both" },
        currentDevice: "desktop" | "mobile"
    ) {
        return !el.device || el.device === "both" || el.device === currentDevice;
    }
    const sections: Section[] = [];


    const filteredContent = article.content
        .filter(block => filterByDevice(block, currentDevice))
        .map(el => {
            if (el.type === "contentBlock") {
                return {
                    ...el,
                    children: el.children?.filter(child =>
                        filterByDevice(child, currentDevice)
                    )
                };
            }
            return el;
        });


    filteredContent.forEach((el) => {
        const layoutCols = layouts[el.layout]?.columns || 1;
        const col = el.column && el.column <= layoutCols ? el.column : 1;

        // prendo l’ultima sezione se ha lo stesso layout,
        // altrimenti ne creo una nuova
        let currentSection = sections[sections.length - 1];
        if (!currentSection || currentSection.layout !== el.layout) {
            currentSection = { layout: el.layout, cols: {} };
            sections.push(currentSection);
        }

        if (!currentSection.cols[col]) currentSection.cols[col] = [];
        currentSection.cols[col].push(el);
    });
    return (
        <>
            <div className="lg:hidden sticky top-3 left-0 w-full h-0 z-[100] pointer-events-none">
                <div className="absolute top-2.5 right-3 pointer-events-auto">
                    <ShowlessAction
                        visible={true}
                        isInProject={isInProject}
                        onExitProject={onExitProject}
                    />
                </div>
            </div>
            <div className=" lg:overflow-y-scroll scrollbar-none h-auto min-h-screen lg:h-screen lg:pt-2.5" >

                {/* {(article.id === 18 || article.id === 19) && <ContactInput />} */}
                {/* {article.id === 1 && (
                <div className="lg:hidden">
                    <ContactInput />
                </div>
            )} */}
                {sections.map((section, layoutIdx) => {
                    const columns = Object.keys(section.cols).length;
                    const gridColsClass =
                        columns === 1 ? "grid-cols-1" :
                            columns === 2 ? "grid-cols-2" :
                                columns === 3 ? "grid-cols-3" :
                                    "grid-cols-1";

                    return (
                        <div key={layoutIdx} className={`grid gap-2 ${gridColsClass} mb-2 `} >

                            {Object.values(section.cols).map((colElements, colIdx) => (
                                <div key={colIdx} className="flex flex-col gap-2">
                                    {colElements.map((el, idx) => {
                                        // const isFirstElementAbs = layoutIdx === 0 && colIdx === 0 && idx === 0;
                                        if (el.type === "image") {
                                            return (
                                                <>
                                                    <div key={`img-wrap-${idx}`} className="relative grow">
                                                        {/* Se è il primo elemento assoluto ed è un'immagine */}
                                                        {/* {isFirstElementAbs && (
                                                            <div className="lg:hidden absolute top-3 right-3 z-50">
                                                                <ShowlessAction
                                                                    visible={true}
                                                                    isInProject={isInProject}
                                                                    onExitProject={onExitProject}
                                                                />
                                                            </div>
                                                        )} */}
                                                        <ProjectImage
                                                            src={el.src || ""}
                                                            alt=""
                                                            className="rounded-10 w-full h-full block object-cover"
                                                        />
                                                        {/* <img src={el.src} alt="" className="rounded-10 w-full grow" /> */}
                                                    </div>
                                                    {article.id === 1 &&
                                                        el.src === "/images/articles-images/events1mobile.jpg" && (

                                                            <ContactInput className="mb-auto" />

                                                        )}



                                                </>
                                            );
                                        }




                                        // if (el.type === "image") return <img key={idx} src={el.src} alt="" className="rounded-10 w-full  grow" />;
                                        if (el.type === "contentBlock") {
                                            return (
                                                <div key={idx} className="dark:bg-black-custom bg-gray-lighter rounded-lg font-medium text-sm card-project-text font-satoshi lg:pb-1.5">
                                                    {/* {isFirstElementAbs && (
                                                    <div className="lg:hidden sticky top-3 right-3 z-50">
                                                        <ShowlessAction
                                                            visible={true}
                                                            isInProject={isInProject}
                                                            onExitProject={onExitProject}
                                                        />
                                                    </div>
                                                )} */}
                                                    {el.children?.map((child, cidx) => {
                                                        if (child.type === "h3") return <h3 key={cidx} className=" pb-11-custom font-13 font-medium lh-custom-119">{child.content}</h3>;
                                                        if (child.type === "p") return <p key={cidx} className=" pb-2.5  text-gray-darker font-13 lh-custom-108">{child.content}</p>;
                                                        if (child.type === "ul")
                                                            return (
                                                                <ul key={cidx}>
                                                                    {child.items?.map((item, iidx) => (
                                                                        <li key={iidx}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            );
                                                        if (child.type === "p-multiline")
                                                            return (
                                                                <p key={cidx} className="text-gray-darker text-sm lh-custom-108 pb-3 whitespace-pre-line font-13">
                                                                    {child.items?.join("\n")}
                                                                </p>
                                                            );
                                                        if (child.type === "logos")
                                                            return (
                                                                <div
                                                                    key={cidx}
                                                                    className="flex flex-wrap justify-center items-center gap-y-0.5 py-2"
                                                                >
                                                                    {child.items?.map((src, iidx) => (
                                                                        <div
                                                                            key={iidx}
                                                                            className="flex justify-center items-center basis-1/3 lg:basis-1/7 grow"
                                                                        >
                                                                            <img
                                                                                src={src}
                                                                                alt={`logo-${iidx}`}
                                                                                className=" object-cover"
                                                                            />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            );
                                                        if (child.type === "contacts")
                                                            return (
                                                                <div
                                                                    key={cidx}
                                                                    className=" grid grid-cols-12 -mt-2 pb-4 pt-2"
                                                                >
                                                                    {child.items?.map((item, iidx) => (
                                                                        <div key={iidx} className="flex col-span-12 lg:col-span-6 grow  mx-0.5  ">
                                                                            <span className=" font-medium font-13 lh-custom-119 pr-1">
                                                                                {item.label}
                                                                            </span>
                                                                            <span className="text-gray-darker font-13 text-sm ">{item.value}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            );
                                                        if (child.type === "recognition")
                                                            return (
                                                                <div key={cidx} className="grid grid-cols-1 lg:grid-cols-12 gap-x-4 pb-4 pt-2 -mt-2">
                                                                    {/* colonna sinistra */}
                                                                    <div className="lg:col-span-5 flex flex-col gap-y-0.2">
                                                                        {child.items
                                                                            ?.slice(0, Math.ceil(child.items.length / 2))
                                                                            .map((item, iidx) => (
                                                                                <div key={iidx} className="flex flex-col">
                                                                                    <span className=" font-13 lh-custom-119 ">
                                                                                        {item.label}
                                                                                    </span>
                                                                                    <span className="text-gray-darker lh-custom-119 font-13 ">
                                                                                        {item.value}
                                                                                    </span>
                                                                                </div>
                                                                            ))}
                                                                    </div>

                                                                    {/* colonna destra */}
                                                                    <div className="lg:col-span-7 flex flex-col gap-y-0.2">
                                                                        {child.items
                                                                            ?.slice(Math.ceil(child.items.length / 2))
                                                                            .map((item, iidx) => (
                                                                                <div key={iidx} className="flex flex-col">
                                                                                    <span className=" font-13 lh-custom-119 ">
                                                                                        {item.label}
                                                                                    </span>
                                                                                    <span className="text-gray-darker lh-custom-119 font-13 ">
                                                                                        {item.value}
                                                                                    </span>
                                                                                </div>
                                                                            ))}
                                                                    </div>
                                                                </div>
                                                            );



                                                        return null;
                                                    })}
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            ))}
                        </div>
                    );
                })}
                <div className="text-center text-gray-darker lh-custom-108 tracking-wide text-[9px] mt-4 pb-4 lg:hidden">
                    Copyright © All rights reserved - Studio Ora Solare
                </div>
            </div>
        </>
    );
}
