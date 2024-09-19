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

    return true;
}

// Close Menu Function
function close_menu(menu_items){
    menu_items.style.display = 'none';
    
    return false;
}
