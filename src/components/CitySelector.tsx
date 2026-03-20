import type { City } from "../types";
interface CitySelectorProps {
    cities: {
        id: number;
        city: string;
        img_dark: string;
        img_light: string;
        timezone: string;
        class_card: string;
        class_id: string;
    }[];
    onSelect: (city: City) => void;
}

export function CitySelector({ cities, onSelect }: CitySelectorProps) {
    return (
        <div className="relative hidden lg:block">
            <img src="/images/cities-people/4.png" alt="" className="dark:hidden block h-screen object-cover mx-auto" />
            <img src="/images/cities-people/1.png" alt="" className="hidden dark:block h-screen object-cover mx-auto" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 grid grid-cols-5 justify-around gap-x-6 xl:gap-x-2 h-screen xl:w-150 2xl:w-2/3  mx-auto" >
                {cities.map((city) => {
                    console.log(city)
                    return (

                        <div key={city.id} className={city.class_card ? city.class_card : "bg-red-500"}>
                            <div
                                className="relative  group  h-full "
                                onClick={() => onSelect(city)}
                            >


                                {/* <div className={city.class_id}>
                                    {city.id}
                                </div> */}
                                {/* <img
                                src={`/images/cities-people/${city.img_dark}`}
                                alt={`person image ${city.city}`}
                                className={`h-40 mx-auto dark:inline-block hidden ${city.id === 6
                                    ? "relative left-1/5"
                                    : city.id === 14 || city.id === 3
                                        ? "relative left-1/12"
                                        : ""
                                    }`}
                            />

                            <img
                                src={`/images/cities-people/${city.img_light}`}
                                alt={`person image ${city.city}`}
                                className={`h-40 mx-auto dark:hidden inline-block ${city.id === 6
                                    ? "relative left-1/5"
                                    : city.id === 14 || city.id === 3
                                        ? "relative left-1/12"
                                        : ""
                                    }`}
                            /> */}

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
