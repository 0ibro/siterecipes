console.log("Base JS подключен");

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".food-card");

// ФИЛЬТР КАК НА FOOD.RU
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach(card => {
            const types = card.dataset.type.split(' '); 
            if (filter === "all" || types.includes(filter)) {
                card.style.display = "flex";
                setTimeout(() => card.style.opacity = "1", 50);
            } else {
                card.style.opacity = "0";
                setTimeout(() => card.style.display = "none", 200);
            }
        });
    });
});
