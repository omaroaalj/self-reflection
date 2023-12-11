// code based on MDN Web Docs, results from ChatGPT, and Web Development Udemy class by Angela Yu

const blocks = document.querySelectorAll(".block");
const exitButtons = document.querySelectorAll(".exit-description");

for (const block of blocks) {
    block.addEventListener("click", toggleDescription);    
}
for (const exitButton of exitButtons) {
    exitButton.addEventListener("click", toggleDescription);
}

function toggleDescription(e) {
    const buttonClickedId = e.target.id;
    console.log(buttonClickedId);
    for (const block of blocks) {
        block.classList.toggle("hidden");
    }
    if (buttonClickedId.includes('exit')) {
        console.log('hiding...')
        const newId = buttonClickedId.substring(buttonClickedId.indexOf('-')+1);
        const descriptionToHide = document.querySelector(`#${newId}-desc`);
        console.log("description to Hide: ");
        console.log(descriptionToHide);
        descriptionToHide.classList.toggle("hidden");
    }
    else {
        console.log('displaying...');
        const descriptionToDisplay = document.querySelector(`#${buttonClickedId}-desc`);
        console.log("description to Display: ");
        console.log(descriptionToDisplay);
        descriptionToDisplay.classList.toggle("hidden");
    }
}