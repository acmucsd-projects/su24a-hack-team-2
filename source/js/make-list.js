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

    const item_name = document.getElementById("item-name");

    const item_main_image = document.getElementById("main-image");

    //get text displayed in 3rd column
    const displayed_text = document.getElementById("displayed-text");

    //button to change text displayed to description of item
    const description_button = document.getElementById("description-button");
    description_button.addEventListener("click", () => change_to_description(description_button, nutrition_button, displayed_text));

    //button to change text displayed to item's nutrition facts
    const nutrition_button = document.getElementById("nutrition-button");
    nutrition_button.addEventListener("click", () => change_to_nutrition(nutrition_button, description_button, displayed_text));


    document.querySelectorAll(".groceryItem").forEach(function(item){
        item.addEventListener("click", () => displayGroceryInformation(item, item_name));
    });

    //document.write(grocery_lists[0].textContent);


    /*const grocery_item = document.getElementById("groceryItem");
    
    grocery_item.addEventListener("click", () => displayGroceryInformation(grocery_item, item_name));*/

    document.getElementById('editListBtn').addEventListener('click', function() {
        document.getElementById('listHeading').contentEditable = true;
        document.getElementById('listHeading').style.backgroundColor = '#e8e3d2';
    });


    document.getElementById('listHeading').addEventListener('keydown', (event) => {
        if(event.key === 'Enter'){
            document.getElementById('listHeading').contentEditable = false;
            document.getElementById('listHeading').style.backgroundColor = '#f8f2e1';
        }
    });

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

function displayGroceryInformation(grocery_item, item_name){


    const rest_list = document.querySelectorAll('.groceryItem');
    for(var i = 0; i < rest_list.length; i++){
        rest_list[i].style.backgroundColor = 'rgb(225, 228, 207)';
        rest_list[i].style.color = 'black';
    }

    grocery_item.style.backgroundColor = '#7c9e57';
    grocery_item.style.color = '#372d1f'

    var newName = grocery_item.textContent;
    item_name.textContent = newName;

    var imageName = newName.toLowerCase();

    var main_image = document.getElementById('main-image');

    //tryImages(main_image, imageName);
    main_image.src="./assets/images/" + imageName + "-icon.png";

    var displayed_text = document.getElementById('displayed-text');

    displayed_text.textContent = newName;

    var extra_imgs = document.querySelectorAll("[id='extra-images']");
    for(var i = 0; i < extra_imgs.length; i++){
        let file = "./assets/images/extra-" + imageName + (i+1) + "-icon.png";

        extra_imgs[i].src = file;
        
        /*extra_imgs[i].src="./assets/images/" + imageName + "-icon.png";
        extra_imgs[i].onerror = function(){
            extra_imgs[i].src="./assets/images/" + imageName + '-icon.jpg';
        };*/
    }

}

function tryImages(img, name){
    img.src = "./assets/images/" + name + ".jpg";
    img.onerror = function() {
        img.src = "./assets/images/" + name + ".png";
    };
}