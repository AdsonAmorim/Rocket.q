const checkbox = document.querySelector('.dark-mode input')
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

if (storedTheme == 'dark')
    checkbox.checked = true

checkbox.addEventListener('change', () => {
    let currentTheme = document.documentElement.getAttribute("data-theme")
    let targetTheme = "light"

    if (currentTheme === "light") {
        targetTheme = "dark"
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme)
})

