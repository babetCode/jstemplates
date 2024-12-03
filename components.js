const components = {
    navbar: `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `,
    footer: `
        <footer>
            <p>© 2024 My Website</p>
        </footer>
    `
};

function loadComponents() {
    document.getElementById('navbar').innerHTML = components.navbar;
    document.getElementById('footer').innerHTML = components.footer;
}

document.addEventListener("DOMContentLoaded", loadComponents);