import heroImg from "../../assets/images/hero.jpg";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <span className="badge">
                    Disponible en Tepexi de Rodríguez
                </span>

                <h1>
                    Muévete con <span>YaVoy</span>
                </h1>

                <p>
                    Solicita viajes seguros y rápidos para Tepexi de Rodríguez,
                    comunidades cercanas y todo el estado de Puebla.
                </p>

                <div className="hero-buttons">

                    <button className="primary">
                        Solicitar viaje
                    </button>

                    <button className="secondary">
                        Conducir con YaVoy
                    </button>

                </div>

            </div>

            <div className="hero-image">

                <img src={heroImg} alt="YaVoy" />

            </div>

        </section>
    );
}

export default Hero;