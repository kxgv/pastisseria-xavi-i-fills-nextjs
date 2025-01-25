import { useState, useEffect } from "react";

const images = [
    "/carousel-images/pass-1.jpg",
    "/carousel-images/pass-2.jpg",
    "/carousel-images/pass-3.jpg",
];

export default function CarouselImages() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // Cambiar la imagen cada 2 segundos automáticamente
    useEffect(() => {
        const intervalId = setInterval(goToNext, 2000); // 2000ms = 2 segundos
        return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
    }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente


    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Images */}
            <div className="overflow-hidden rounded-xl">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 ease-in-out"
                />
            </div>

            {/* Buttons */}
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
                &#9664; {/* Icono de flecha izquierda */}
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
                &#9654; {/* Icono de flecha derecha */}
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentIndex === index ? "bg-blue-500" : "bg-gray-400"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
