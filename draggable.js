const draggables = document.querySelectorAll('.draggable');

draggables.forEach((draggable) => {
    draggable.addEventListener('mousedown', (event) => {
        event.preventDefault();
        const shiftX = event.clientX - draggable.getBoundingClientRect().left;
        const shiftY = event.clientY - draggable.getBoundingClientRect().top;

        function onMouseMove(event) {
            draggable.style.left = event.clientX - shiftX + 'px';
            draggable.style.top = event.clientY - shiftY + 'px';
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    draggable.addEventListener('touchstart', (event) => {
        event.preventDefault();
        const touch = event.touches[0];
        const shiftX = touch.clientX - draggable.getBoundingClientRect().left;
        const shiftY = touch.clientY - draggable.getBoundingClientRect().top;

        function onTouchMove(event) {
            const touch = event.touches[0];
            draggable.style.left = touch.clientX - shiftX + 'px';
            draggable.style.top = touch.clientY - shiftY + 'px';
        }

        function onTouchEnd() {
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        }

        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
    });
});

const random = document.querySelectorAll('.draggable');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function shuffleDraggables() {
//     random.forEach((draggable) => {
//         const screenWidth = window.innerWidth;
//         const screenHeight = window.innerHeight;

//         // Calculate the frame boundaries
//         let frameWidth = Math.min(screenWidth * 0.8, screenHeight * 0.8);
//         let frameHeight = frameWidth;
//         let frameX = (screenWidth - frameWidth) / 2;
//         let frameY = (screenHeight - frameHeight) / 2;
//         const draggableWidth = frameX;
//         const draggableHeight = frameY;

//         const x = getRandomInt(0, screenWidth - draggableWidth);
//         const y = getRandomInt(0, screenHeight - draggableHeight);

//         draggable.style.left = x + 'px';
//         draggable.style.top = y + 'px';

//         console.log("screen Width:", screenWidth, "screen height:", screenHeight, "frameX:", frameX, "frameY:", frameY)
//     });
// }
function shuffleDraggables() {
    random.forEach((draggable) => {
        const screenWidth = window.innerWidth; // Get the screen width
        const screenHeight = window.innerHeight; // Get the screen height

        // Calculate the frame boundaries
        let frameWidth = Math.min(screenWidth * 0.8, screenHeight * 0.8);
        let frameHeight = frameWidth;
        let frameX = (screenWidth - frameWidth) / 2;
        let frameY = (screenHeight - frameHeight) / 2;

        // Calculate the draggable element's width and height
        const draggableWidth = draggable.offsetWidth;
        const draggableHeight = draggable.offsetHeight;

        const x = getRandomInt(frameX, screenWidth - draggableWidth);
        const y = getRandomInt(frameY, screenHeight - draggableHeight);

        draggable.style.left = x + 'px';
        draggable.style.top = y + 'px';

        console.log("screen Width:", screenWidth, "screen height:", screenHeight, "frameX:", frameX, "frameY:", frameY)
    });
}
window.addEventListener('load', shuffleDraggables);