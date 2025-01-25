import Image from "next/image";

export default function AboutUs() {
    return (
        <section
            className="text-center"
            style={{ backgroundColor: "#f7eae1" }}
        >
            <h1 className="text-[#a52a2a]">Sobre nosotros</h1>
            <h2 className="text-[#ab6b56]">Descubre la historia de nuestra pastelería, donde la tradición encuentra la creatividad.</h2>
            <div>
                <h2 className="text-[#a52a2a]">Nuestra historia</h2>
                <p className="text-[gray]">Somos una pequeña pastelería donde trabajamos para preservar la elaboración tradicional de cada producto que creamos.</p>
                {/* <Image
                    aria-hidden
                    src="/carousel-images/pass-1.jpg"
                    alt="File icon"
                    width={80}
                    height={60}
                /> */}
            </div>

        </section>
    );
}