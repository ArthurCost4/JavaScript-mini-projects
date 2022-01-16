const btnmenu = document.getElementById("btn-mobile");

btnmenu.addEventListener("click", ()=> {
    const navmobile = document.getElementById("navegation-menu");
    navmobile.classList.toggle('active')
})