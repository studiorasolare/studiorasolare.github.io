
export default function ContactList() {

    return (

        <div className="dark:bg-black-custom mb-2 bg-gray-lighter rounded-lg font-medium text-sm card-project-text    font-satoshi grow">
            <h3 className=" pb-11-custom font-13 font-medium lh-custom-119">Contact</h3>

            <div className=" grid grid-cols-12 -mt-2 pb-4 pt-2">
                <div className="col-span-12 lg:col-span-6">

                    <div className="flex col-span-12 items-center lg:col-span-6 grow  mx-0.5 ">
                        <span className=" font-medium font-13 lh-custom-119 pr-1">
                            Email
                        </span>
                        <a
                            href="mailto:studiorasolare@gmail.com?subject=Richiesta Contatto"
                            className="text-gray-darker font-13 text-sm transition-all duration-200 hover:text-gray-hover-light dark:hover:text-gray-hover-dark"
                        >
                            studiorasolare@gmail.com
                        </a>
                    </div>
                    <div className="flex col-span-12 items-center lg:col-span-6 grow  mx-0.5 ">
                        <span className=" font-medium font-13 lh-custom-119 pr-1">
                            Community Instagram
                        </span>
                        <a href="https://www.instagram.com/studiorasolarehub/" target="_blank"
                            rel="noopener noreferrer" className="text-gray-darker font-13 text-sm transition-all duration-200 hover:text-gray-hover-light dark:hover:text-gray-hover-dark">@studioasolarehub</a>



                    </div>
                    <div className="flex col-span-12 items-center lg:col-span-6 grow  mx-0.5 ">
                        <span className=" font-medium font-13 lh-custom-119 pr-1">
                            Studio Instagram
                        </span>

                        <a href="https://www.instagram.com/studiorasolarelab/" target="_blank"
                            rel="noopener noreferrer" className="text-gray-darker font-13 text-sm transition-all duration-200 hover:text-gray-hover-light dark:hover:text-gray-hover-dark">@studioasolarelab</a>


                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">

                    <div className="flex col-span-12 items-center lg:col-span-6 grow  mx-0.5 ">
                        <span className=" font-medium font-13 lh-custom-119 pr-1">
                            Youtube
                        </span>

                        <a href="https://www.youtube.com/@studiorasolare" target="_blank"
                            rel="noopener noreferrer" className="text-gray-darker font-13 text-sm transition-all duration-200 hover:text-gray-hover-light dark:hover:text-gray-hover-dark">@studioasolare</a>


                    </div>


                    <div className="flex col-span-12 items-center lg:col-span-6 grow  mx-0.5 ">
                        <span className=" font-medium font-13 lh-custom-119 pr-1">
                            TikTok
                        </span>

                        <a href="https://www.tiktok.com/@studiorasolare" target="_blank"
                            rel="noopener noreferrer" className="text-gray-darker font-13 text-sm transition-all duration-200 hover:text-gray-hover-light dark:hover:text-gray-hover-dark">@studioasolare</a>


                    </div>



                    <div className="flex col-span-12 items-center lg:col-span-6 grow  mx-0.5 ">
                        <span className=" font-medium font-13 lh-custom-119 pr-1">
                            Location
                        </span>
                        <a
                            href="https://www.google.com/maps?q=Via+Tucidide+56+Milano"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-darker font-13 text-sm transition-all duration-200 hover:text-gray-hover-light dark:hover:text-gray-hover-dark text-nowrap"
                        >
                            Via Tucidide 56, Right, Left, Right, Milano
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
}
