const colorPalette = [
  "#3A75A8",
  "#3795D1",
  "#6E7BB9",
  "#7F9278",
  "#8FCFA9",
  "#A2E4D4",
  "#E5D78C",
  "#FFBCA5",
  "#67614C",
  "#E89ABF",
  "#D891B0",
  "#8C80BC",
  "#FFA8A6",
  "#6B5365",
  "#79E9C8",
  "#F6D768",
  "#A8DC68",
  "#A6EBA2",
  "#525BA3",
  "#7EA5D7",
  "#AEC2E6",
  "#B2C9A9",
  "#C6D1C4",
  "#B2A680",
  "#D1B880",
  "#E8A9B8",
  "#B9A4C9",
  "#A496A1",
  "#D9CEC7",
  "#F0E6A4",
  "#CDD9A6",
  "#AACFDD",
  "#BFD0D9",
  "#90A295",
  "#7F9482",
  "#A89D8F",
  "#C8A69D",
  "#D9A880",
  "#E0D7CA",
  "#F2B495",
  "#D2C299",
  "#E8D9B6",
  "#B0C8BA",
  "#6F7F91",
  "#A6A3C4",
  "#DAB3E0",
  "#D5E8D4",
  "#B0A79E",
  "#E1BFB2",
  "#F3DBC7",
];

document.getElementById("addStoreBtn").addEventListener("click", function () {
  // var stores = document.getElementById('gridContainer').children;
  const gridContainer = document.getElementById("gridContainer");
  let columnCount =
    getComputedStyle(gridContainer).gridTemplateColumns.split(" ").length;

  if (columnCount < 5) {
    // Ensure there's less than 5 columns
    gridContainer.style.gridTemplateColumns = `repeat(${columnCount + 1}, 1fr)`;

    const newItem = document.createElement("div");
    newItem.className = "store";
    newItem.innerHTML = `
                        <div class='storeTitleBar' style="background-color: #945d5e;">
                        <button class="delete-store-btn">&times;</button>
                        <img src="./assets/images/walmart-icon.png" alt="Walmart Logo" class="store-image">
                        <button class="store-title">Walmart</button>
                        <div class="store-dropdown">
                            <!-- <label for="store-select">Change Store:</label> -->
                            <select id="store-select" class="store-select">
                                <option value="walmart">Walmart</option>
                                <option value="ralphs">Ralphs</option>
                                <option value="costco">Costco</option>
                                <option value="target">Target</option>
                            </select>
                        </div>
                    </div>

                    <div class='storeItems'>
                        <div class='item'>
                            <span class='item-name'>Grapes</span>
                            <span class='item-price'>$4.70</span>
                        </div>
                        <div class='item'>
                            <span class='item-name'>Oreo</span>
                            <span class='item-price'>$5.98</span>
                        </div>
                        <div class='item'>
                            <span class='item-name'>Chicken Breast</span>
                            <span class='item-price'>$12.19</span>
                        </div>
                        <div class='item'>
                            <span class='item-name'>Penne Pasta</span>
                            <span class='item-price'>$1.18</span>
                        </div>
                        <div class='item'>
                            <span class='item-name'>1 Tomato</span>
                            <span class='item-price'>$0.27</span>
                        </div>
                        <div class='item'>
                            <span class='item-name'>Bacon</span>
                            <span class='item-price'>$3.44</span>
                        </div>
                        <div class='item'>
                            <span class='item-name'>Eggs</span>
                            <span class='item-price'>$3.28</span>
                        </div>
                        <div class='item'>
                            <span class='item-name'>Milk</span>
                            <span class='item-price'>$3.78</span>
                        </div>
                    </div>

                    <div class='subtotal'>
                        <span style="color:white">Subtotal:</span>
                        <span class='subtotal-price'>$8.47</span>
                    </div>

                    <div class='total'>
                        <span style="color:white">Total:</span>
                        <span class='total-price'>$8.47</span>
                    </div>
        `;
    // newItem.getElementsByClassName("storeTitleBar")[0].style.backgroundColor =
    //   "#" + Math.floor(Math.random() * 16777215).toString(16);
    // calculateSubtotal(newItem);
    // calculateTotal(newItem);
    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    newItem.getElementsByClassName("store-title")[0].style.backgroundColor = color;
    newItem.getElementsByClassName("storeTitleBar")[0].style.backgroundColor = color;
    // newItem.textContent = `Item ${gridContainer.children.length + 1}`;
    gridContainer.appendChild(newItem);
    const newSelect = newItem.querySelector(".store-select");
    newSelect.addEventListener("change", function () {
      updateStore(newSelect);
    });
  } else {
    alert("You have reached the max amount of store comparisons!");
  }
});

function updateStore(selectElement) {
  const store = selectElement.closest(".store");
  const selectedValue = selectElement.value;
  const storeTitle = store.querySelector(".store-title");
  const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

  // Change the title to the selected store
  storeTitle.textContent =
    selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1);

  // Change the image based on selection
  const storeImage = store
    .getElementsByClassName("storeTitleBar")[0]
    .querySelector("img");
  storeImage.src = `./assets/images/${selectedValue}-icon.png`; // Ensure the images are named accordingly
  storeImage.alt = `${
    selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)
  } Logo`;
  store.getElementsByClassName("storeTitleBar")[0].style.backgroundColor =
    color;
    store.getElementsByClassName("store-title")[0].style.backgroundColor = color;
  //   store.getElementsByClassName("storeTitleBar")[0].style.backgroundColor =
  //     "#" + Math.floor(Math.random() * 16777215).toString(16);
}

document.querySelectorAll(".store-select").forEach((select) => {
  select.addEventListener("change", function () {
    updateStore(select);
  });
});

document
  .getElementById("gridContainer")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-store-btn")) {
      const store = e.target.closest(".store");
      const gridContainer = document.getElementById("gridContainer");
      let columnCount =
        getComputedStyle(gridContainer).gridTemplateColumns.split(" ").length;

      if (columnCount > 1) {
        // Ensure there's at least 1 column left after deletion
        store.remove();
        gridContainer.style.gridTemplateColumns = `repeat(${
          columnCount - 1
        }, 1fr)`;
      } else {
        alert("You must have at least one store!");
      }
    }
  });

function calculateSubtotal(storeElement) {
  const items = storeElement.querySelectorAll(".item-price");
  let subtotal = 0;

  items.forEach((item) => {
    subtotal += parseFloat(item.textContent.replace("$", ""));
  });

  storeElement.querySelector(
    ".subtotal-price"
  ).textContent = `$${subtotal.toFixed(2)}`;
}

function calculateTotal(storeElement) {
  const subtotal = parseFloat(
    storeElement.querySelector(".subtotal-price").textContent.replace("$", "")
  );
  const tax = subtotal * 0.0725;
  const total = subtotal + tax;

  storeElement.querySelector(".total-price").textContent = `$${total.toFixed(
    2
  )}`;
}

document.querySelectorAll(".store").forEach((store) => {
  calculateSubtotal(store);
  calculateTotal(store);
  const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  store.getElementsByClassName("store-title")[0].style.backgroundColor = color;
  store.getElementsByClassName("storeTitleBar")[0].style.backgroundColor = color;
  //   store.getElementsByClassName("storeTitleBar")[0].style.backgroundColor =
  //     "#" + Math.floor(Math.random() * 16777215).toString(16);
});

document.getElementById("editListBtn").addEventListener("click", function () {
  document.getElementById("listHeading").contentEditable = true;
});

document.getElementById("addItemBtn").addEventListener("click", function () {
  window.location.href = "item-price.html";
});

window.addEventListener("load", () => init());

function init() {
  document.getElementById("editListBtn").addEventListener("click", function () {
    document.getElementById("listHeading").contentEditable = true;
    document.getElementById("listHeading").style.backgroundColor = "#e8e3d2";
  });

  document
    .getElementById("listHeading")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        document.getElementById("listHeading").contentEditable = false;
        document.getElementById("listHeading").style.backgroundColor =
          "#FFFFFF";
      }
    });
}
