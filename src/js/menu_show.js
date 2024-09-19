// Here is to show menu
// Capture the btn-menu
const menu = document.getElementsByClassName('menu')[0];

menu.addEventListener('click', function(){
    const menu_items = document.getElementById('menu_items');

    if (menu_items.style.display === 'flex') { return close_menu(menu_items) };
        return open_menu(menu_items);
});





// Open Menu Function
function open_menu(menu_items){
    menu_items.style.display = 'flex';
    requestAnimationFrame(() => {
        menu_animate_open()
    })
    return true;
}

// Close Menu Function
function close_menu(menu_items){
    requestAnimationFrame(() => {
        menu_animate_close()
    })

    setTimeout(() => {
        menu_items.style.display = 'none';
    }, 300)
    return false;
}


function menu_animate_open(){
    const menu_animation = document.querySelector('nav#menu_items')

    menu_animation.style.transition = "transform 0.3s ease"
    menu_animation.style.transform = "translateY(0px)"
}

function menu_animate_close(){
    const menu_animation = document.querySelector('nav#menu_items')

    menu_animation.style.transition = "transform 0.3s ease"
    menu_animation.style.transform = "translateY(-1000px)"
}