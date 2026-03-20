import { useEffect, useMemo, useRef, useState } from 'react'
import cities from '../data/cities-people.json';
import menu from '../data/menu-homepage.json';
import articles from '../data/articles.json';
import layouts from '../data/layouts.json';
import './App.css'
import HeartExplosion from './components/HeartExplosion';
import FloatingBackground from './components/FloatingBackground';
// import ShowlessAction from './components/ShowLessAction';
import { CitySelector } from './components/CitySelector';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import ProjectSide from './components/ProjectSide';
import type { Article, City } from './types';

function App() {

  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localCity = cities.find((c) => c.timezone === localTimezone);
  //    darkmode
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };



  //clodymode
  const [isCloudy, setIsCloudy] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);
  // gestione rari e città
  const [selectedCity, setSelectedCity] = useState<City>(
    localCity || {
      id: -1,
      city: "Milan",
      img_dark: "",
      img_light: "",
      timezone: localTimezone,
      class_card: "",
      class_id: "",
    });
  const [cityTime, setCityTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", {
      timeZone: selectedCity.timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    })
  );

  const [cityDate, setCityDate] = useState("");

  const timeFormatter = useMemo(() => (
    new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: selectedCity.timezone,
    })
  ), [selectedCity.timezone]);

  const dateFormatter = useMemo(() => (
    new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
      timeZone: selectedCity.timezone,
    })
  ), [selectedCity.timezone]);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCityTime(timeFormatter.format(now));
      setCityDate(dateFormatter.format(now));
    };

    update();

    const interval = setInterval(update, 500);
    return () => clearInterval(interval);
  }, [timeFormatter, dateFormatter]);

  const firstFour = cities.slice(0, 4);

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(false);
  const projectContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedProject) return;

    if (window.innerWidth < 1024 && projectContainerRef.current) {
      setTimeout(() => {
        const element = projectContainerRef.current;
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - 8,
            behavior: "auto"
          });
        }
      }, 0);
    } else {
      projectContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedProject]);
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <>

      <main className="relative  lg:overflow-hidden font-satoshi flex flex-col px-2.5 font-13 lh-custom" >

        <div className="text-gray-darker dark:text-gray-lighter">

          <FloatingBackground active={isCloudy} />
        </div>
        <section className="grid grid-cols-12 gap-2 lg:gap-2.5">
          <div className="col-span-12 lg:col-span-3 pt-2.5">
            <div >
              <div onClick={() => setSelectedProject(null)} className={`dark:bg-black-custom lg:col-span-3 bg-gray-lighter rounded-lg font-medium text-lg p-18-custom mb-2 lh-custom-119 font-13 ${selectedProject ? 'lg:cursor-pointer lg:pointer-events-auto pointer-events-none' : ''}`}>{selectedCity.city} </div>


            </div>
            <div onClick={() => setSelectedProject(null)}
              className={`dark:bg-black-custom  bg-gray-lighter rounded-lg font-medium text-lg p-18-custom mb-2 lh-custom-119 ${selectedProject ? 'lg:cursor-pointer lg:pointer-events-auto pointer-events-none' : ''}  font-13`}>
              <p>
                {cityTime}, {cityDate}
              </p>

            </div>
            <div className="relative lg:hidden h-66.75 md:h-137.5 md:mb-2 w-screen -ml-2.5 -mt-2 lg:m-0 lg:w-auto flex flex-nowrap ">
              <div className="absolute h-full w-full grid grid-cols-4">
                {firstFour.map((city) => (
                  <div
                    key={city.id}
                    className=" cursor-pointer"
                    onClick={() => {
                      setSelectedCity(city);
                      setCityTime(
                        new Date().toLocaleTimeString("en-US", {
                          timeZone: city.timezone,
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false
                        })
                      );
                      setCityDate(
                        new Date().toLocaleDateString("en-US", {
                          timeZone: city.timezone,
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })
                      );
                    }}
                  ></div>
                ))}


              </div>
              <img src="images/cities-people/PeopleM-dark.png" alt="image-persona-3"
                className=" object-cover w-full   pointer-events-none dark:hidden inline-block" />
              <img src="images/cities-people/PeopleM-light.png" alt="image-persona-3"
                className=" object-cover w-full  pointer-events-none hidden dark:inline-block" />

            </div>
            <button
              onClick={toggleTheme}
              className={`rounded-lg  font-medium text-lg p-18-custom mb-2 w-full text-start lh-custom-119 font-13 cursor-pointer ${isDark ? "bg-custom-white text-black" : "bg-black-custom text-custom-white"
                }`}
            >
              {isDark ? "Day" : "Night"}
            </button>
            <button
              onClick={() => setIsCloudy(!isCloudy)}
              className="dark:bg-black-custom bg-gray-lighter  rounded-lg font-medium text-lg p-18-custom mb-2 w-full text-start cursor-pointer font-13"
            >
              {isCloudy ? "Clear" : "Cloudy"}
            </button>


            <HeartExplosion />
          </div>

          <div className={`col-span-12 lg:col-span-3 lg:h-screen  lg:overflow-y-scroll scrollbar-none h-auto  lg:pt-2.5
    ${isMobileMenuHidden ? "hidden lg:block" : "block"}`}>
            {menu.map(project => (

              <div
                key={project.id}
                id={`project-item-${project.id}`}
                onClick={() => {
                  setScrollPosition(window.scrollY);



                  setSelectedProject(project.id);
                  if (window.innerWidth < 1024) setIsMobileMenuHidden(true);
                }}
                className="rounded-lg font-medium text-sm p-18-custom mb-2 cursor-pointer group
                                         bg-gray-lighter dark:bg-black-custom hover:bg-light-hover  dark:hover:bg-dark-hover"
              >
                <span
                  className={`
                                            font-medium block mb-2 lh-custom-119 font-13
                                            ${selectedProject === project.id
                      ? "text-black-custom dark:text-custom-white "
                      : "text-black-custom dark:text-custom-white dark:group-hover:text-custom-white"}
                                        `}
                >
                  {project.title}
                </span>
                <p className="text-gray-darker lh-custom-108 font-13">{project.description}</p>
              </div>

            ))}
            <div className="text-center text-gray-darker lh-custom-108 text-[9px] mt-4 pb-2.5 tracking-wide lg:hidden">
              Copyright © All rights reserved - Studio Ora Solare
            </div>
          </div>
          <div ref={projectContainerRef} className={`col-span-12  lg:col-span-6  ${isMobileMenuHidden ? "min-h-screen" : ""}  lg:overflow-y-scroll scrollbar-none`}>
            {!selectedProject && (
              <CitySelector
                cities={cities}
                onSelect={(city) => {
                  setSelectedCity(city);
                  setCityTime(
                    new Date().toLocaleTimeString("en-US", {
                      timeZone: city.timezone,
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false
                    })
                  );
                  setCityDate(
                    new Date().toLocaleDateString("en-US", {
                      timeZone: city.timezone,
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })
                  );
                }}
              />
            )}

            {/* {selectedProject && isProjectLoading && (
              <div className="flex flex-col items-center justify-center h-full min-h-100 bg-gray-lighter dark:bg-black-custom rounded-lg transition-all duration-300">
                <p className="mt-4 text-xs text-gray-darker animate-pulse">
                  <img src="/favicon1.png" alt="" />
                </p>
              </div>
            )} */}

            {/* {!isProjectLoading && selectedProject && (() => { */}
            {selectedProject && (() => {
              const project = menu.find(p => p.id == selectedProject);
              const article = articles.find(a => a.id == project?.article_id);
              if (!article) return <p>No article linked.</p>;
              if (article?.id === 18) return <AboutUs
                isInProject={true}
                onExitProject={() => {
                  setSelectedProject(null);
                  setIsMobileMenuHidden(false);
                  setTimeout(() => {
                    window.scrollTo({ top: scrollPosition, behavior: "auto" });
                  }, 0);
                }}
              />;
              if (article?.id === 19) return (
                <OurServices
                  isInProject={true}
                  onExitProject={() => {
                    setSelectedProject(null);
                    setIsMobileMenuHidden(false);
                    setTimeout(() => {
                      // Usa lo scrollPosition salvato per tornare indietro istantaneamente
                      window.scrollTo({ top: scrollPosition, behavior: "auto" });
                    }, 0);
                  }}
                />
              );;

              return (
                <>
                  <ProjectSide
                    key={article.id}
                    article={article as unknown as Article}
                    layouts={layouts}
                    isInProject={true}
                    onExitProject={() => {
                      setSelectedProject(null);
                      setIsMobileMenuHidden(false);
                      setTimeout(() => {
                        window.scrollTo({
                          top: scrollPosition,
                          behavior: "auto"
                        });
                      }, 0);
                    }}
                  />
                </>
              );
            })()}

          </div>

        </section>
      </main>

    </>
  )
}

export default App
