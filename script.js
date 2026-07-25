alert("SCRIPT CHARGÉ");
const plantData = {
  5:  { indoor: 25, outdoor: 10, mixed: "17 / 4" },
  10: { indoor: 49, outdoor: 20, mixed: "33 / 8" },
  15: { indoor: 73, outdoor: 29, mixed: "49 / 12" },
  20: { indoor: 98, outdoor: 39, mixed: "65 / 16" },
  25: { indoor: 123, outdoor: 49, mixed: "82 / 20" }
};

const indoorPlants = document.getElementById("indoorPlants");
const outdoorPlants = document.getElementById("outdoorPlants");
const mixedPlants = document.getElementById("mixedPlants");

const buttons = document.querySelectorAll(".gram-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const grams = button.dataset.g;

        const data = plantData[grams];

        indoorPlants.textContent = data.indoor;
        outdoorPlants.textContent = data.outdoor;
        mixedPlants.textContent = data.mixed;

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        document.querySelectorAll(".result-number").forEach(card => {

            card.animate(
                [
                    {opacity:0.3, transform:"scale(.96)"},
                    {opacity:1, transform:"scale(1)"}
                ],
                {
                    duration:250,
                    easing:"ease-out"
                }
            );

        });

    });

});
