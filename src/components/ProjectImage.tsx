import { useState, useEffect, useRef } from "react";

export default function ProjectImage({ src, alt, className }: { src: string; alt: string; className: string }) {
    const [shouldShowImage, setShouldShowImage] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;

        if (img.complete) {
            // Se è in cache, mostriamo tutto subito
            setIsLoaded(true);
            setShouldShowImage(true);
        } else {
            // Se NON è in cache, facciamo partire il timer di 2 secondi
            const timer = setTimeout(() => {
                setShouldShowImage(true);
            }, 2000);

            img.onload = () => {
                setIsLoaded(true);
            };

            return () => clearTimeout(timer);
        }
    }, [src]);

    const showRealImage = shouldShowImage || isLoaded;

    return (
        <div className="relative w-full h-full overflow-hidden rounded-10 dark:bg-black-custom bg-gray-lighter" style={{ minHeight: '140px' }}>
            {/* Il placeholder sparisce SOLO quando l'immagine è effettivamente caricata nel DOM */}
            {!isLoaded && (
                <div
                    className={`absolute inset-0 dark:bg-black-custom bg-gray-lighter animate-pulse-custom z-10 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
                />
            )}

            {/* Renderizziamo il tag img solo se showRealImage è true */}
            {showRealImage && (
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setIsLoaded(true)}
                />
            )}
        </div>
    );
}