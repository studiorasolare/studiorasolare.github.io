import ContactInput from "./ContactInput";
import ContactList from "./ContactList";
import LogoSections from "./LogoSections";
import ShowlessAction from "./ShowLessAction";

type OurServicesProps = {
    isInProject: boolean;
    onExitProject: () => void;
};

export default function OurServices({ isInProject, onExitProject }: OurServicesProps) {


    return (
        <div className=" lg:overflow-y-scroll scrollbar-none h-full lg:h-screen lg:pt-2.5" >
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

                    <div className="relative">

                        <LogoSections />
                    </div>
                    {/* primo box */}
                    <ContactInput className="lg:hidden block" />


                    {/* contatti */}
                    <ContactList />


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-2 lg:gap-y-0">
                        <div className="flex flex-col grow gap-y-2">


                            <div className="dark:bg-black-custom bg-gray-lighter rounded-lg font-medium text-sm card-project-text font-satoshi lg:pb-1">
                                <h3 className=" pb-11-custom font-13 font-medium lh-custom-119">Art direction and Production</h3>
                                <p className="pb-17-custom text-gray-darker font-13 lh-custom-108">Recognizing the pivotal role of web and social platforms, Studio Ora Solare consistently explores new trends and communication channels. We maintain a fresh and innovative approach to media, specializing in the production and art direction of impactful shootings, videos, and campaigns designed for strong digital engagement. Our goal is to meet both our clients needs and the expectations of our audience.
                                </p>

                            </div>
                            <div className="dark:bg-black-custom bg-gray-lighter rounded-lg font-medium text-sm card-project-text font-satoshi lg:pb-1">
                                <h3 className=" pb-11-custom font-13 font-medium lh-custom-119">Digital and Social</h3>
                                <p className="pb-17-custom text-gray-darker font-13 lh-custom-108">We specialize in creating dynamic and innovative designs tailored for the digital landscape and social media platforms. From eye-catching graphics to interactive web design, our team combines artistic vision with strategic insight to ensure your brand stands out in the digital sphere. Whether you're launching a new product or seeking to revamp your online identity, we're here to transform your vision into impactful visuals that resonate with your audience. Let Digital and Social be your partner in driving digital success.
                                </p>

                            </div>
                            <div className="dark:bg-black-custom bg-gray-lighter rounded-lg font-medium text-sm card-project-text font-satoshi lg:pb-1">
                                <h3 className=" pb-11-custom font-13 font-medium lh-custom-119">Visual Installations and Set Design</h3>
                                <p className="pb-17-custom text-gray-darker font-13 lh-custom-108">We bring concepts to life through immersive visual installations and set design tailored for events, spaces, exhibitions, and brand activations. From sculptural elements to spatial storytelling, we create environments that elevate your brand’s presence and transform any location into a meaningful visual experience.
                                </p>

                            </div>


                        </div>
                        <div className="flex flex-col grow gap-y-2">
                            <div className="dark:bg-black-custom bg-gray-lighter rounded-lg font-medium text-sm card-project-text font-satoshi lg:pb-1">
                                <h3 className=" pb-11-custom font-13 font-medium lh-custom-119">Branding and Consulting</h3>
                                <p className="pb-17-custom text-gray-darker font-13 lh-custom-108">At the core of Studio Ora Solare lies a deep understanding of the branding landscape and the essential strategies for brand growth. This expertise is cultivated through our involvement in diverse merch and capsule collections, where we oversee the entire creative process from concept ideation to online store management. We navigate this journey comprehensively, utilizing platforms tailored specifically for our clients.
                                </p>

                            </div>
                            <div className="dark:bg-black-custom bg-gray-lighter rounded-lg font-medium text-sm card-project-text font-satoshi lg:pb-1">
                                <h3 className=" pb-11-custom font-13 font-medium lh-custom-119">Web Design and Ecommerce</h3>
                                <p className="pb-17-custom text-gray-darker font-13 lh-custom-108">At the heart of Studio Ora Solare strategy lies the emphasis on the web, stemming from its core strength: an in-house development team proficient in creating web applications, websites and e-commerce platforms. We craft every project with precision in UI/UX design, innovative technological solutions, and creative coding, bringing websites to life. Every detail reflects your brand’s unique story, creating immersive and engaging digital experiences.
                                </p>

                            </div>
                            <div className="dark:bg-black-custom bg-gray-lighter rounded-lg font-medium text-sm card-project-text font-satoshi lg:pb-1">
                                <h3 className=" pb-11-custom font-13 font-medium lh-custom-119">Event Design</h3>
                                <p className="pb-17-custom text-gray-darker font-13 lh-custom-108">We specialize in creating and producing impactful events in Milan that elevate and showcase your brand. We design custom event concepts, develop creative strategies, and manage the full event production process, from entertainment curation, location scouting, and set design to on-site setup and execution. Our approach ensures your brand’s identity is reflected in every detail across all touchpoints.
                                </p>

                            </div>


                        </div>

                    </div>
                    <div className="text-center text-gray-darker lh-custom-108 text-[9px] mt-3.5 mb-2.5 pb-2.5 tracking-wide lg:hidden">
                        Copyright © All rights reserved - Studio Ora Solare
                    </div>
                </div>
            </div>


        </div>
    );
}
