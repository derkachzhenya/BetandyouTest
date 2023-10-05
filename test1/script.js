document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    const buttons = document.querySelectorAll("button");
    let currentIndex = 0;

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            function updateSlide() {
                const currentData = data[currentIndex];
                slider.innerHTML = currentData.content;

                if (currentData.image) {
                    const imgElement = document.createElement("img");
                    imgElement.src = currentData.image;

                    slider.innerHTML = "";
                    slider.appendChild(imgElement);
                }
            }

            updateSlide();

            buttons.forEach((button, index) => {
                button.addEventListener("click", function() {
                    currentIndex = index;
                    updateSlide();
                });
            });
        })
        .catch(error => console.error("Error loading data:", error));
});





