import "./styles.css"
import aboutDOM from "./about.js";
import {menuDOM} from "./menu.js";

//darkest green: #016171
//dark green: #009494
//light green: #00e0c6
//gray: #f4f4f4



(()=>{
    let contentDOM = document.querySelector("#content");
    let menuButton = document.querySelector("#menu-button");

    menuButton.addEventListener("click", function(){
        contentDOM.innerHTML = '';
        contentDOM.appendChild(menuDOM);

    });


})();