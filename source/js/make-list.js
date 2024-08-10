/**
 * @file
 * This file handles functionality for the make-list page including:
 * - Loading current list items
 * - Searching for list names in localStorage
 * - Displaying images for currently selected item
 * - Loading a description for currently selected item
 * - Loading nutrition facts for currently selected item
 */

window.addEventListener("load", () => init());

//export let grocery_lists = [];

/**
 * Initializes the page
 */
function init(){

    const current_list = document.getElementById("item-list"); //use later when we have multiple lists.

    //get text displayed in 3rd column
    const displayed_text = document.getElementById("displayed-text");

    //button to change text displayed to description of item
    const description_button = document.getElementById("description-button");
    description_button.addEventListener("click", () => change_to_description(description_button, nutrition_button, displayed_text));

    //button to change text displayed to item's nutrition facts
    const nutrition_button = document.getElementById("nutrition-button");
    nutrition_button.addEventListener("click", () => change_to_nutrition(nutrition_button, description_button, displayed_text));


}

/**
 * Changing displayed text to nutrition facts
 * @param {*} nutrition_button to change background color to 'selected' value
 * @param {*} description_button to change background color to 'deselected' value
 * @param {*} displayed_text text to change.
 */
function change_to_nutrition(nutrition_button, description_button, displayed_text){
    displayed_text.innerHTML = "Nutrition Text";

    nutrition_button.style.backgroundColor = 'rgb(173, 175, 161)';

    description_button.style.backgroundColor = 'rgb(206, 208, 192)';

}

/**
 * Change displayed text to description of item
 * @param {*} description_button to change background color to 'selected' value
 * @param {*} nutrition_button to change background color to 'deselected' value
 * @param {*} displayed_text text to change.
 */
function change_to_description(description_button, nutrition_button, displayed_text){
    displayed_text.innerHTML = "Description Text";

    description_button.style.backgroundColor = 'rgb(173, 175, 161)';

    nutrition_button.style.backgroundColor = 'rgb(206, 208, 192)';
}
