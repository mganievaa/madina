document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector(".burger")
    const menu = document.getElementById("mobileMenu")
    const links = document.querySelectorAll(".mobile-menu a")

    if (!burger || !menu) return

    burger.addEventListener("click", () => {

        burger.classList.toggle("active")
        menu.classList.toggle("show")
        document.body.classList.toggle("menu-open")

    })

    links.forEach(link => {
        link.addEventListener("click", () => {

            burger.classList.remove("active")
            menu.classList.remove("show")
            document.body.classList.remove("menu-open")

        })
    })

})