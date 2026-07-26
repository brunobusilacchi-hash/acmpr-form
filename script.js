const plantData = { 
  5: {
    indoor: 25,
    outdoor: 10,
    mixed: "19 / 5"
  },

  10: {
    indoor: 49,
    outdoor: 19,
    mixed: "37 / 10"
  },

  15: {
    indoor: 73,
    outdoor: 29,
    mixed: "55 / 15"
  },

  20: {
    indoor: 98,
    outdoor: 38,
    mixed: "73 / 19"
  },

  25: {
    indoor: 122,
    outdoor: 48,
    mixed: "92 / 24"
  }
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
