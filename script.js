const flex = document.getElementById('flex');
const flow_root = document.getElementById('flow-root');
const grid = document.getElementById('grid');

const changeDisplay = (att) => {
    const change = document.getElementById('change');
    change.style.display = att;
    
    change.style.animation = "OpacityEffect";
    // change.style.animation = "none";
}

flex.addEventListener("click", () => {
    changeDisplay("flex");
});

flow_root.addEventListener("click", () => {
    changeDisplay("flow-root");
});

grid.addEventListener("click", () => {
    changeDisplay("grid");
});