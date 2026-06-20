function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                YaVoy
            </div>

            <ul className="menu">
                <li>Inicio</li>
                <li>Servicios</li>
                <li>Conductores</li>
                <li>Contacto</li>
            </ul>

            <button className="loginBtn">
                Iniciar sesión
            </button>

        </nav>
    );
}

export default Navbar;