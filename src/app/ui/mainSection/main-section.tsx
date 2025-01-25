import CarouselImages from "./carousel-images";
export default function MainSection() {
    return (
        <section className="text-center">
            <h1 className="text-[38px]">Pasteles artesanales</h1>
            <p className='description'>"Endulzamos tus momentos con la magia de lo artesanal."</p>

            <CarouselImages />

            <p className='timetable'>Horario: de lunes a domingo de 7:00 a 21:00</p>
            <p className="address">
                <a
                    href="https://maps.app.goo.gl/pMofkD97Pmh1AGtQ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#333" }}
                >
                    Carrer de Carreras i Candi, 34, 36 Barcelona 08028
                    <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                        style={{ fontSize: "1.5rem", color: "#d9534f", marginRight: "10px" }}
                    ></i>
                </a>
            </p>

        </section>
    );
}