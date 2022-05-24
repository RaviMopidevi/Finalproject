import {addToCart} from "../../server/models/itemlist";

const itemsForm = document.getElementById("itemsAddToCart-form");
if(itemsForm) itemsForm.addEventListener('submit', addToCart);