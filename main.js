const gridBtns = document.querySelectorAll(".grid-btn");
const edgeNumbers = document.querySelectorAll(".edge-number")
let centerBtn = document.getElementById("centerBtn");

centerBtn.addEventListener("click", () => {
    for (const gridBtn of gridBtns) {
        if (gridBtn.textContent === "9" || gridBtn.textContent === "6") {
            gridBtn.textContent = Number(gridBtn.textContent) - 3;
        } else if (gridBtn.textContent === "8" || gridBtn.textContent === "7") {
            gridBtn.textContent = Number(gridBtn.textContent) + 1;
        } else if (gridBtn.textContent === "4" || gridBtn.textContent === "1") {
            gridBtn.textContent = Number(gridBtn.textContent) + 3;
        } else if (gridBtn.textContent === "2" || gridBtn.textContent === "3") {
            gridBtn.textContent = Number(gridBtn.textContent) - 1;
        }
    }
});


function rotateEdgeNumbers() {
    for (const edgeNumber of edgeNumbers) {
        if (edgeNumber.textContent === "1" || edgeNumber.textContent === "2") {
            edgeNumber.textContent = Number(edgeNumber.textContent) + 1;
        } else if (edgeNumber.textContent === "3" || edgeNumber.textContent === "6") {
            edgeNumber.textContent = Number(edgeNumber.textContent) + 3;
        } else if (edgeNumber.textContent === "4" || edgeNumber.textContent === "7") {
            edgeNumber.textContent = Number(edgeNumber.textContent) - 3;
        } else if (edgeNumber.textContent === "8" || edgeNumber.textContent === "9") {
            edgeNumber.textContent = Number(edgeNumber.textContent) - 1;
        }
    }
}

edgeNumbers.forEach((edgeNumber) => {
    edgeNumber.addEventListener("click", rotateEdgeNumbers);
})

