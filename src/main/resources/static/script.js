document.addEventListener('DOMContentLoaded', function() {

    try {
        const units = {
            length: ["mm", "cm", "m", "km", "inch", "ft", "yd", "mile"],
            weight: ["mg", "g", "kg", "ounce", "pd", "ton"],
            temperature: ["c", "f", "k"],
        };
        const unitsContent = {
                    length: ["millimeter", "centimeter", "meter", "kilometer", "inch", "foot", "yard", "mile"],
                    weight: ["milligram", "gram", "kilogram", "ounce", "pound", "ton"],
                    temperature: ["Celsius", "fahrenheit", "kelvin"],
                };

        const fromSelect = document.getElementById("from");
        const toSelect = document.getElementById("to");
        const tabs = document.querySelectorAll(".tab");
        const result = document.getElementById("result");
        const convertBtn = document.getElementById("convertBtn");
        const inputValue = document.getElementById("inputValue");

        let currentType = "length";

        function populateDropdowns(type) {
            fromSelect.innerHTML = "";
            toSelect.innerHTML = "";
            units[type].forEach((unit,index) => {
                const option1 = document.createElement("option");
                const option2 = document.createElement("option");
                option1.value = option2.value = unit.toLowerCase();
                option1.textContent = option2.textContent = unitsContent[type][index];
                fromSelect.appendChild(option1);
                toSelect.appendChild(option2);
            });
        }

        populateDropdowns(currentType);
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                tabs.forEach((t) => t.classList.remove("active"));
                tab.classList.add("active");
                currentType = tab.dataset.type;
                populateDropdowns(currentType);
                result.textContent = "Click convert to show the result";
            });
        });

        convertBtn.addEventListener("click", function() {
            performConversion();
        });

        window.performConversion = async function() {

            const value = parseFloat(inputValue.value);
            const from = fromSelect.value;
            const to = toSelect.value;

            if (isNaN(value)) {
                result.textContent = "Please enter a valid number.";
                return;
            }

            try {
                const url = `/convert?type=${currentType}&value=${value}&from=${from}&to=${to}`;
                const response = await fetch(url);
                const resultData = await response.json();
                result.textContent = `Result: ${resultData.result.toFixed(3)}${currentType=="temperature" ? `°${to.toUpperCase()}` : to.toUpperCase()}`;
            } catch (error) {
                console.error("Error:", error);
                result.textContent = "Conversion failed.";
            }
        };

    } catch (error) {
        console.error("Error in script.js:", error);
    }
});