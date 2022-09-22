const plusThree = document.querySelectorAll(".plus-three");
const plusOne = document.querySelectorAll(".plus-one");
const minusThree = document.querySelectorAll(".minus-three");
const minusOne = document.querySelectorAll(".minus-one");

gridBtns.forEach((gridBtn, index) => {
    gridBtn.textContent = index + 1;

    let centerBtn = gridBtns[4];
    centerBtn.addEventListener("click", () => {
        gridBtn.textContent = index + 2;
    })
})

function gridRotator() {
    for (let i = 0; i < gridBtns.length; i++) {
        const gridBtn = gridBtns[i];
        gridBtn.textContent = Number(gridBtn.textContent);

    }
}

for (let i = 0; i < gridBtns.length; i++) {
    const gridBtn = gridBtns[i];
    // gridBtn.textContent = Number(gridBtn.textContent);
    let btnArray = [];
    let btnContent = gridBtn.textContent;
    console.log(btnArray.push(btnContent));
}

centerBtn.addEventListener("click", () => {
    plusOne.forEach((btn) => {
        btn.textContent = Number(btn.textContent) + 1;
    });
    plusThree.forEach((btn) => {
        btn.textContent = Number(btn.textContent) + 3;
    });
    minusOne.forEach((btn) => {
        btn.textContent = Number(btn.textContent) - 1;
    });
    minusThree.forEach((btn) => {
        btn.textContent = Number(btn.textContent) - 3;
    });
})
gridRotator();