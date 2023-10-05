document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll("button");
    let currentIndex = 0;

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            function updateSlide() {
                const currentData = data[currentIndex];
                slides[0].innerHTML = currentData.content;
                if (currentData.image) {
                    const imgElement = document.createElement("img");
                    imgElement.src = currentData.image;
                    slides[0].innerHTML = '';
                    slides[0].appendChild(imgElement);
                }

                const nextIndex = (currentIndex + 1) % data.length;
                const nextData = data[nextIndex];
                slides[1].innerHTML = nextData.content;
                if (nextData.image) {
                    const imgElement = document.createElement("img");
                    imgElement.src = nextData.image;
                    slides[1].innerHTML = '';
                    slides[1].appendChild(imgElement);
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


