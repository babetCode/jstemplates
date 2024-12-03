const components = {
    navbar: `
        <a href="#">
            <img src="images/logo2-1.png" alt="logo" id="mainheaderlogo">
        </a>
        <div id="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div id="dropdown-menu">
            <a href="html/aboutpage.html">About</a>
            <a href="html/menupage.html">Menu</a>
            <a href="html/locationspage.html">Locations</a>
            <a href="html/employmentpage.html">Employment</a>
            <a href="html/contactpage.html">Contact</a>
            <a href="html/storypage.html">Our Story</a>
        </div>
        <ul>
            <li>
                <a href="html/aboutpage.html">About</a>
            </li>
            <li>
                <a href="html/menupage.html">Menu</a>
            </li>
            <li>
                <a href="html/locationspage.html">Locations</a>
            </li>
            <li>
                <a href="html/employmentpage.html">Employment</a>
            </li>
            <li>
                <a href="html/contactpage.html">Contact</a>
            </li>
            <li>
                <a href="html/storypage.html">Our Story</a>
            </li>
        </ul>
        <div id="socials">
            <a href="https://www.facebook.com" target="_blank">
                <img src="images/fb.png" alt="facebook">
            </a>
            <a href="https://www.instagram.com" target="_blank">
                <img src="images/instagram.png" alt="instagram">
            </a>
            <a href="https://www.twitter.com" target="_blank">
                <img src="images/twitterx.png" alt="twitterx">
            </a>
        </div>
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