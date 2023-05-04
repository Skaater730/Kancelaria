document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')
    const cookieBox = document.querySelector('.cookie-box')
    const cookieBtn = document.querySelector('.cookie-btn')

  
    const showCookie = () => {
        const cookieEaten = localStorage.getItem('cookie')
        
        if (cookieEaten) {
            cookieBox.classList.add('hide')
        }
    }

    const handleCookieBox = () => {
        localStorage.setItem('cookie', 'true')
        cookieBox.classList.add('hide')
    }


    cookieBtn.addEventListener('click', handleCookieBox)
    showCookie()
    
    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

    window.addEventListener('scroll', addShadow)

})