import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
    "/images/stikers/stiker1.png",
    "/images/stikers/stiker2.png",
    "/images/stikers/stiker3.png",
    "/images/stikers/stiker4.png",
    "/images/stikers/stiker5.png",
    "/images/stikers/stiker6.png",
    "/images/stikers/stiker7.png",
    "/images/stikers/stiker8.png",
    "/images/stikers/stiker9.png",
    "/images/stikers/stiker10.png",
    "/images/stikers/stiker11.png",
    "/images/stikers/stiker12.png",
    "/images/stikers/stiker13.png",
    "/images/stikers/stiker14.png",
    "/images/stikers/stiker15.png",
    "/images/stikers/stiker16.png",
    "/images/stikers/stiker17.png",
    "/images/stikers/stiker18.png",
    "/images/stikers/stiker19.png",
    "/images/stikers/stiker20.png",
    "/images/stikers/stiker21.png",
    "/images/stikers/stiker22.png",
];

interface FlyingImage {
    id: number;
    src: string;
}

export default function HeartExplosion() {
    const [active, setActive] = useState(false);
    const [images, setImages] = useState<FlyingImage[]>([]);

    useEffect(() => {
        if (active) {
            const interval = setInterval(() => {
                // 👇 ora solo 2-3 immagini per ciclo
                const newImages = Array.from(
                    { length: Math.floor(Math.random() * 2) + 2 },
                    (_, i) => ({
                        id: Date.now() + i,
                        src: IMAGES[Math.floor(Math.random() * IMAGES.length)],
                    })
                );

                setImages((prev) => [...prev, ...newImages]);

                newImages.forEach((img) => {
                    setTimeout(() => {
                        setImages((prev) => prev.filter((i) => i.id !== img.id));
                    }, 2000);
                });
            }, 600);

            return () => clearInterval(interval);
        } else {
            setImages([]);
        }
    }, [active]);

    return (
        <div className="relative ">
            <button
                className={`text-start dark:bg-black-custom  block w-full cursor-pointer bg-gray-lighter rounded-lg font-medium lh-custom-119 text-medium p-18-custom lg:mb-3 font-arial`}
                onClick={() => setActive(!active)}
            >
                {active ? "</3" : "<3"}
            </button>

            <AnimatePresence>
                {images.map((img) => (
                    <AnimatedImage key={img.id} src={img.src} />
                ))}
            </AnimatePresence>
        </div>
    );
}

function AnimatedImage({ src }: { src: string }) {
    const directions = ["left", "right", "up", "down", "diagonal"];
    const dir = directions[Math.floor(Math.random() * directions.length)];
    const startX = Math.random() * 80 + 10;
    const startY = Math.random() * 80 + 10;

    const moveX =
        dir === "left" ? -400 : dir === "right" ? 400 : dir === "diagonal" ? (Math.random() > 0.5 ? 350 : -350) : 0;
    const moveY =
        dir === "up" ? -400 : dir === "down" ? 400 : dir === "diagonal" ? (Math.random() > 0.5 ? -400 : 400) : 0;

    return (
        <motion.img
            src={src}
            className="fixed w-34 h-34 object-contain pointer-events-none z-9999"
            style={{
                top: `${startY}%`,
                left: `${startX}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.2, x: moveX, y: moveY, rotate: 360 }}
            exit={{ opacity: 0, scale: 0, x: moveX * 1.5, y: moveY * 1.5 }}
            transition={{ duration: 2, ease: "easeInOut" }}
        />
    );
}

