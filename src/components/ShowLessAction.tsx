import { X } from "lucide-react";
type Props = {
    visible: boolean;
    isInProject: boolean;
    onExitProject: () => void;
};

export default function ShowlessAction({
    visible,
    isInProject,
    onExitProject,
}: Props) {
    const handleClick = () => {
        if (isInProject) {

            onExitProject();
        } else {

            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="lg:hidden absolute top-0 right-0 pointer-events-none z-100" >
            <button onClick={handleClick} className={`
             text-custom-white
              hover:text-custom-white
              dark:text-custom-white font-medium 
              dark:hover:text-black-custom 
              lh-custom-119 right-0 p-2
               rounded-[48px]
                bg-glass/10
                hover:bg-gray-lighter/10
               dark:bg-glass/10
               dark:hover:bg-gray-lighter/20 
                dark:shadow-[inset_-0.5px_-0.5px_0.5px_rgba(233,233,233,0.3),inset_0.5px_0.5px_0.5px_rgba(233,233,233,0.3)] 
                dark:hover:shadow-[inset_-0.5px_-0.5px_0.5px_rgba(247,247,247,0.3),inset_0.5px_0.5px_0.5px_rgba(247,247,247,0.3)]
                shadow-[inset_-0.5px_-0.5px_0.5px_rgba(247,247,247,0.3),inset_0.5px_0.5px_0.5px_rgba(247,247,247,0.3)]
                hover:shadow-[inset_-0.5px_-0.5px_0.5px_rgba(233,233,233,0.3),inset_0.5px_0.5px_0.5px_rgba(233,233,233,0.3)]
                 backdrop-blur-xs flex items-center gap-1 cursor-pointer pointer-events-auto transition-all duration-300 ease-out ${visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6 pointer-events-none"}
             `}>
                <X className="w-3.5 h-3.5 font-bold" strokeWidth={3} />
            </button>
        </div>
    )
}