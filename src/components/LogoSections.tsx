
export default function LogoSections() {


    return (

        <div className="dark:bg-black-custom mb-2 bg-gray-lighter rounded-lg font-medium text-sm card-project-text    font-satoshi grow">
            <h3 className=" pb-11-custom mb-2 pt-1 lg:m-auto font-13 font-medium lh-custom-119">Clients our team has worked with</h3>
            <div className="pb-2.5">
                <img className="hidden px-7 pt-3 pb-3 lg:block" src="/images/logosPartners/logos-desktop.png" alt="" />
                <div className="px-5 pt-2  lg:hidden">

                    <img className=" dark:hidden block" src="/images/logosPartners/logos-mobile.png" alt="" />
                    <img className=" hidden dark:block" src="/images/logosPartners/logos-mobile-dark.png" alt="" />
                </div>
            </div>
            {/* <div className="grid grid-cols-3 lg:grid-cols-7 justify-center items-center gap-4 lg:gap-2 py-2">
                {logos.map((sortedLogos, index) => {
                    return (
                        <div key={index} className="flex justify-center items-center px-2 ">
                            <div className=" w-80 flex items-center justify-center">


                                <img src={sortedLogos.img} alt={`logo-${sortedLogos.img}`} className="object-cover  max-h-[47px]" />
                            </div>
                        </div>
                    );
                })}

            </div> */}
        </div>
    );
}
