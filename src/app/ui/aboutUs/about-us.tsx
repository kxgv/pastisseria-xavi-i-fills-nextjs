import Image from "next/image";

export default function AboutUs() {
    return (
        <section
            className="text-center"
            style={{ backgroundColor: "#f7eae1" }}
        >
            <h1 className="text-[#a52a2a]">Sobre nosotros</h1>
            <h2 className="text-[#ab6b56]">Descubre la historia de nuestra pastelería, donde la tradición encuentra la creatividad.</h2>
            <div className="relative w-full max-w-4xl mx-auto">
                <h2 className="text-[#a52a2a]">Nuestra historia</h2>
                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                    <img
                        src="/about-us/local.jpg"
                        alt="File icon"
                        className="w-full h-64 object-cover"
                    />
                </div>
                <p className="text-[gray] m-2">Somos una pequeña pastelería donde trabajamos para preservar la elaboración tradicional de cada producto que creamos.</p>
            </div>
            <div>
                <h2 className="text-[#a52a2a]">Nuestros valores</h2>
                <ul className="text-[gray]">
                    <li>🍰 <strong>Calidad artesanal:</strong> Seguimos elaboraciones tradicionales.</li>
                    <li>🌱 <strong>Productos frescos:</strong> Nuestros productos son frescos y de alta calidad.</li>
                    <li>💖 <strong>Pasión:</strong> Cada detalle conlleva experiencia y pasión por lo que hacemos.</li>
                </ul>
                <div className="overflow-hidden rounded-xl">
                    <img
                        src="/about-us/about-us-values.jpg"
                        alt="File icon"
                        className="w-full h-64 object-cover"
                    />
                </div>
            </div>
        </section>
    );
}