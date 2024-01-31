import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/button/text-button.js';
import '@material/web/switch/switch.js';
import '@material/web/menu/menu.js';
import '@material/web/divider/divider.js';



// This example uses MdMenu.prototype.anchorElement to set the anchor as an
    // HTMLElement reference.
    const anchorEl = document.body.querySelector('#usage-anchor-2');
    const menuEl = document.body.querySelector('#usage-menu-2');
    menuEl.anchorElement = anchorEl;
  
    anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });


    