var link = document.querySelector(".search_btn_motel");
var popup = document.querySelector(".layout_container_center_modal");
var date_in_out = popup.querySelector("[name = date_in]");
var link_close = document.querySelector(".search_btn_motel");
var js_of = document.documentElement;

js_of.className = js_of.className.replace("no-js", "js");

link.addEventListener("click", function (event) {
    event.preventDefault();
    if (popup.classList.contains("layout_container_center_modal_show") ) {

       popup.classList.remove("layout_container_center_modal_show"); }

    else {

       popup.classList.add("layout_container_center_modal_show");

        }

      date_in_out.focus();
        } );

window.addEventListener("keydown", function (event) {

    if (event.keyCode==27) {

      if (popup.classList.contains("layout_container_center_modal_show") ) {

          popup.classList.remove("layout_container_center_modal_show");}
            
        }
        });
