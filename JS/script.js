const mode = document.getElementById('mode_icon');
const html = document.querySelector('html');
const img = document.getElementById('sales')
const icon = document.getElementById('icon')

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-sun')){
       mode.classList.remove('fa-sun');
       mode.classList.add('fa-moon');
       html.classList.add('dark-mode');
       img.setAttribute("src", "assets/jam_dark_mode.png")
       icon.setAttribute("href", "assets/icon_dark_mode.png" )

       return
    }

    mode.classList.add('fa-sun');
    mode.classList.remove('fa-moon');
    html.classList.remove('dark-mode');
    img.setAttribute("src", "assets/jamile .png")
    icon.setAttribute("href", "assets/icon_jam.png" )

});