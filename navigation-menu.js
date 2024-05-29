class NavigationMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>        
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#zancudo">Zancudo Berraco</a></li>
                    <li><a href="#releases">Releases</a></li>
                    <li><a href="#contact">Direcção Musical</a></li>
                    <li><a href="#collab">Colaborações</a></li>
                    <li><a href="#shows">Future / Past SHOWS</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define('navigation-menu', NavigationMenu);