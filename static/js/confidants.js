const confidants = {};

function onStarClick(e) {
    const arcana = e.currentTarget.getAttribute("data-arcana");
    const level = e.currentTarget.getAttribute("data-value");
    const confidant = confidants[arcana];

    if(confidant.level === level) {
        confidant.level = 0;
    } else {
        confidant.level = level;
    }

    localStorage.setItem(`confidant-${arcana}`, confidant.level);

    confidant.container.querySelectorAll("svg").forEach((svg, i) => {
        if(i < confidant.level) svg.classList.add("done");
        else svg.classList.remove("done");
    });
}

document.querySelector("#container").childNodes.forEach(item => {
    const arcana = item.getAttribute("data-arcana");
    const level = parseInt(localStorage.getItem(`confidant-${arcana}`)) || 0;
    confidants[arcana] = {
        container: item,
        level
    };
    item.querySelectorAll("svg").forEach((svg, i) => {
        if(i < level) svg.classList.add("done");
        svg.onclick = onStarClick;
    });
})
