import ContactInput from "./ContactInput";
import LogoSections from "./LogoSections";
import ContactList from "./ContactList";
import ShowlessAction from "./ShowLessAction";

type AboutUsProps = {
    isInProject: boolean;
    onExitProject: () => void;
};

export default function AboutUs({ isInProject, onExitProject }: AboutUsProps) {


    const ricognictions = [
        {
            "label": "",
            "value": "Latin American Design Awards - Winner"
        },
        {
            "label": "",
            "value": "Fondazione Francesco Morelli - Winner"
        },
        {
            "label": "",
            "value": "BASE Milano - Exhibitor, YAWP Festival"
        },
        {
            "label": "",
            "value": "Lugano, Switzerland - Visual Installation"
        },
        {
            "label": "",
            "value": "Milano Digital Week - Featured Project on Innovation"
        },
        {
            "label": "",
            "value": "IED Milano - Talk at Design Inclusivo Conference"
        },
        {
            "label": "",
            "value": "New York City SVA - Residency (Scholarship Recipient)"
        },
        {
            "label": "",
            "value": "Utrecht, Netherlands - Exhibition at Centraal Museum"
        }
    ]

    return (
        <div className=" lg:overflow-y-scroll scrollbar-none h-auto min-h-screen lg:h-screen lg:pt-2.5" >
            <div className="lg:hidden sticky top-3 left-0 w-full h-0 z-[100] pointer-events-none">
                <div className="absolute top-2.5 right-3 pointer-events-auto">
                    <ShowlessAction
                        visible={true}
                        isInProject={isInProject}
                        onExitProject={onExitProject}
                    />
                </div>
            </div>

            {/* nuovo */}
            <div className="grid gap-2.5 grid-cols-1 lg:grid-cols-2 mb-2" >
                <div className="flex flex-col col-span-2 ">
                    <ContactInput className="hidden lg:block" />
                    {/* primo box */}
                    <div className="relative dark:bg-black-custom bg-gray-lighter mb-2 rounded-10 font-medium text-sm card-project-text font-satoshi lg:pb-1.5">
                        <h3 className=" pb-11-custom font-13 font-medium lh-custom-119">Studio Ora Solare</h3>
                        <p className="text-gray-darker text-sm lh-custom-108 pb-3 whitespace-pre-line font-13">
                            <span>
                                One spot, multiple aims.
                            </span><br />
                            <span>

                                Creative studio? Independent Art? Community?
                            </span><br />
                            <span>

                                You choose.
                            </span>
                        </p>

                        <p className="pb-2.5 text-gray-darker font-13 lh-custom-108">We are a multidisciplinary creative studio based in Milan, Italy. Our work spans across art direction, graphic design, marketing and visual communication. We collaborate with brands, institutions and artists to develop clear, thoughtful and visually consistent projects across digital and physical formats.
                        </p>
                    </div>
                    <ContactInput className="lg:hidden block" />
                    {/* immagine */}
                    <img src="/images/articles-images/sos1.png" alt="" className="rounded-10 mb-2 w-full grow" />
                    {/* box con logo */}

                    <LogoSections />
                    {/* contatti */}


                    <ContactList />
                    {/* riconoscimenti */}
                    <div className="dark:bg-black-custom mb-2 bg-gray-lighter rounded-10 font-medium text-sm card-project-text    font-satoshi lg:pb-1.5">
                        <h3 className=" pb-11-custom font-13 font-medium lh-custom-119">Recognition & Collaborations</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-4 pb-4 pt-2 -mt-2">
                            {/* colonna sinistra */}
                            <div className="lg:col-span-5 flex flex-col tracking-wide lg:tracking-normal gap-y-0.2">
                                {ricognictions
                                    ?.slice(0, Math.ceil(ricognictions.length / 2))
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
                                {ricognictions
                                    ?.slice(Math.ceil(ricognictions.length / 2))
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
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                        <div>

                            {/* jose */}
                            <div className="dark:bg-black-custom bg-gray-lighter rounded-10 font-medium text-sm card-project-text pr-2 mb-2  font-satoshi lg:pb-1.5">
                                <h3 className=" pb-11-custom font-13 font-medium lh-custom-119">Josefina Kunz</h3>
                                <p className="pb-2.5 text-gray-darker font-13 lh-custom-108">Founder & Creative Director. <br /> Born and raised in Santiago, Chile, and now <br className="hidden lg:block" /> based in Milan, she is a creative director with a background grounded in both art and design.<br className="hidden lg:block" /> Her work prioritizes authenticity and connection crafting inclusive spaces where creativity serves a deeper purpose.
                                </p><p className="pb-2.5 text-gray-darker font-13 lh-custom-108">With a strong focus on the intersection of visual<br className="hidden lg:block" /> culture and social impact, her practice spans<br className="hidden lg:block" /> across brand identity, digital experiences, and<br className="hidden lg:block" /> visual communication. She has led projects for<br className="hidden lg:block" /> global brands including Luxottica, Versace,<br className="hidden lg:block" /> Chanel, Ray-Ban, Nestlé, and Sky, merging<br className="hidden lg:block" /> cultural relevance with strategic clarity.<br className="hidden lg:block" />
                                </p><p className="pb-2.5 text-gray-darker font-13 lh-custom-108">She studied at the School of Visual Arts in New<br className="hidden lg:block" /> York and the Istituto Europeo di Design in Milan,<br className="hidden lg:block" /> shaping a perspective that is both globally<br className="hidden lg:block" /> informed and socially engaged.
                                </p>

                            </div>
                            {/* immagine 2 */}
                            <img src="/images/articles-images/sos2.jpg" alt="" className="rounded-10 lg:rounded-2xl w-full " />
                        </div>
                        <div>
                            {/* elisa */}
                            <div className="dark:bg-black-custom bg-gray-lighter rounded-10 font-medium text-sm card-project-text   mb-2 font-satoshi lg:pb-1.5">
                                <h3 className=" pb-11-custom font-13 font-medium lh-custom-119">Elisa Romano</h3>
                                <p className="pb-2.5 text-gray-darker font-13 lh-custom-108">Founder & Graphic Designer.<br />Born and based in Milan, she is a<br className="hidden lg:block" /> multidisciplinary designer with a parallel life in<br className="hidden lg:block" /> music. Her approach to design is intuitive and<br className="hidden lg:block" /> expressive, shaped by a lifelong relationship with<br className="hidden lg:block" /> sound and instruments.
                                </p><p className="pb-2.5 text-gray-darker font-13 lh-custom-108">She studied at the Istituto Europeo di Design in<br className="hidden lg:block" /> Milan, where she also began a Master’s in Design<br className="hidden lg:block" /> della Comunicazione. Her work spans across<br className="hidden lg:block" /> branding, editorial, and digital design, with<br className="hidden lg:block" /> collaborations for major clients including<br className="hidden lg:block" /> Mercedes-Benz, Lamborghini, BPER, and more—<br className="hidden lg:block" />always driven by the belief that creativity is a tool<br className="hidden lg:block" /> for meaningful connection.

                                </p>
                            </div>
                            {/* immagine 3 */}
                            <img src="/images/articles-images/sos3.jpg" alt="" className="rounded-10  w-full " />

                        </div>

                    </div>
                    <div className="text-center text-gray-darker lh-custom-108 text-[9px] mt-2 mb-2 pb-2.5 tracking-wide lg:hidden">
                        Copyright © All rights reserved - Studio Ora Solare
                    </div>
                </div>
            </div>
        </div>
    );
}
