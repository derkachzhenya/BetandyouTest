const airplane = document.querySelector('.airplane');

let x = 50; // Initial position of the aircraft (off screen)
let y = -50; // Initial altitude of the aircraft

function moveAirplane() {
    if (x > window.innerWidth + 15) {
        x = - 15; // We return the plane to the beginning
    }
    
    // Move the plane to the right and up to simulate a twisted trajectory
    x += 2; // Shift to the right
    y += Math.sin(x / 50) ; // Shift up (height change)
    
    airplane.style.transform = `translateX(${x}px) translateY(${y}px)`;
    
    requestAnimationFrame(moveAirplane);
}

moveAirplane(); // We start the animation
