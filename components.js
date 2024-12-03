const components = {
    navbar: `
        <a href="#">
            <img src="images/logo2-1.png" alt="logo" id="mainheaderlogo">
        </a>
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
    `,
    pagenavbar: `
        <a href="../index.html">
            <img src="../images/logo2-1.png" alt="logo" id="mainheaderlogo">
        </a>
        <ul>
            <li>
                <a href="aboutpage.html">About</a>
            </li>
            <li>
                <a href="menupage.html">Menu</a>
            </li>
            <li>
                <a href="locationspage.html">Locations</a>
            </li>
            <li>
                <a href="employmentpage.html">Employment</a>
            </li>
            <li>
                <a href="contactpage.html" class="active">Contact</a>
            </li>
            <li>
                <a href="storypage.html">Our Story</a>
            </li>
        </ul>
        <div id="socials">
            <a href="https://www.facebook.com" target="_blank">
                <img src="../images/fb.png" alt="facebook">
            </a>
            <a href="https://www.instagram.com" target="_blank">
                <img src="../images/instagram.png" alt="instagram">
            </a>
            <a href="https://www.twitter.com" target="_blank">
                <img src="../images/twitterx.png" alt="twitterx">
            </a>
        </div>
    `
};


function loadComponents() {
    // Check and load the navbar
    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
        navbarElement.innerHTML = components.navbar;
    } else {
        console.warn("Navbar element with id 'navbar' not found.");
    }

    // Check and load the navbar
    const pagenavbarElement = document.getElementById('pagenavbar');
    if (pagenavbarElement) {
        pagenavbarElement.innerHTML = components.pagenavbar;
    } else {
        console.warn("Navbar element with id 'pagenavbar' not found.");
    }

    // Check and load the footer
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = components.footer;
    } else {
        console.warn("Footer element with id 'footer' not found.");
    }
}

document.addEventListener("DOMContentLoaded", loadComponents);