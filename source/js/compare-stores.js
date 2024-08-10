// const costcoColor = '#71677c';
// const walmartColor = '#945d5e';
// const targetColor = '#8de969';
// const ralphsColor = '#337357';

document.getElementById('addColumnBtn').addEventListener('click', function() {
    const gridContainer = document.getElementById('gridContainer');
    let columnCount = getComputedStyle(gridContainer).gridTemplateColumns.split(' ').length;
    gridContainer.style.gridTemplateColumns = `repeat(${columnCount + 1}, 1fr)`;

    const newItem = document.createElement('div');
    newItem.className = 'store';
    newItem.textContent = `Item ${gridContainer.children.length + 1}`;
    gridContainer.appendChild(newItem);
});

document.getElementById('removeColumnBtn').addEventListener('click', function() {
    const gridContainer = document.getElementById('gridContainer');
    let columnCount = getComputedStyle(gridContainer).gridTemplateColumns.split(' ').length;

    if (columnCount > 1) { // Ensure there's at least 1 column
        gridContainer.style.gridTemplateColumns = `repeat(${columnCount - 1}, 1fr)`;

        // Remove the last item in the grid
        if (gridContainer.children.length > 0) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
    } else {
        alert('You must have at least one store!');
    }
});


document.querySelectorAll('.store-select').forEach(select => {
    select.addEventListener('change', function() {
        const store = this.closest('.store');
        const selectedValue = this.value;
        const storeTitle = store.querySelector('.store-title');

        // Change the title to the selected store
        storeTitle.textContent = selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1);

        // Change the image based on selection
        const storeImage = store.querySelector('img');
        storeImage.src = `./assets/images/${selectedValue}-icon.png`; // Ensure the images are named accordingly
        storeImage.alt = `${selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)} Logo`;
        store.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        // store.style.backgroundColor = selectedValue === 'costco' ? costcoColor : selectedValue === 'walmart' ? walmartColor : selectedValue === 'target' ? targetColor : ralphsColor;
    });
});
