const modal = document.querySelector('.modal.container')
const openModal = document.querySelector('.open-button')
const closeModal = document.querySelector('.close-button')

openModal.addEventListener('click', (event) => {
    console.log("click modal")
    console.log('Event target:', event.target);
    modal.style.display = "flex"
    event.stopPropagation();
})

closeModal.addEventListener('click', (event) => {
    console.log("button close")
    event.stopPropagation();
    modal.style.display = "none";


})

// // ////Mobile
// // openModal.addEventListener('touchstart', (event) => {
// //     console.log("touch modal")
// //     event.stopPropagation();
// //     modal.showModal();
// // });

// // closeModal.addEventListener('touchstart', (event) => {
// //     console.log("button close")
// //     event.stopPropagation();
// //     modal.close();

// // })


// // // Add this code to center the modal window on the screen in smartphones
// // if (window.matchMedia('(max-width: 600px)').matches) {
// //     console.log("match")
// //     modal.style.position = 'fixed';
// //     modal.style.top = '50%';
// // modal.style.left = '50%';
// //     modal.style.transform = 'translate(-50%, -50%)';
// // }


// // /////////conteudos modal exerimental///////// WORKING:
// // // const openItem = document.querySelector('.open');
// // // const hiddenDiv = document.querySelector('.hidden');
// // // openItem.addEventListener('click', (event) => {

// // //     event.preventDefault();
// // //     event.stopPropagation();
// // //     console.log("list click")

// // //     hiddenDiv.classList.remove('hidden');
// // //     hiddenDiv.classList.add('show');
// // // })



// // // Select all elements with the class 'openItem' and 'hiddenDiv'
// // const openItems = document.querySelectorAll('.open');
// // const hiddenDivs = document.querySelectorAll('.hidden');

// // // Function to open a hidden div
// // function openHiddenDiv(index) {
// //     // Hide the currently visible div, if any
// //     hiddenDivs.forEach(div => {
// //         console.log("removig show 1st")
// //         div.classList.remove('show');
// //         div.classList.add('hidden')
// //     });

// //     // Remove the 'hidden' class from the clicked openItem's associated hiddenDiv
// //     hiddenDivs[index].classList.remove('hidden');

// //     // Show the hiddenDiv associated with the clicked openItem
// //     hiddenDivs[index].classList.add('show');
// // }

// // // Add a click event listener to each openItem
// // openItems.forEach((openItem, index) => {
// //     openItem.addEventListener('click', () => {
// //         openHiddenDiv(index);
// //     });
// // });

// // ///same for mobile
// // // openItem.addEventListener('touchstart', (event) => {
// // //     console.log("list touch")
// // //     event.stopPropagation();
// // //     event.preventDefault()
// // //     hiddenDiv.classList.remove('hidden');
// // //     hiddenDiv.classList.add('show');
// // // })

// // // another working option 4 mobile:
// // let modalOpen = false;

// // openItems[1].addEventListener('touchstart', (event) => {
// //     event.preventDefault();
// //     event.stopPropagation();

// //     if (!modalOpen) {
// //         modalOpen = true;
// //         hiddenDivs.classList.remove('hidden');
// //         hiddenDivs.classList.add('show');
// //     }
// // });

///modal interior-collabs experiment
document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll('.column-1 li');

    listItems.forEach((item) => {
        item.addEventListener('click', () => {
            const target = item.dataset.target;
            const infoContainers = document.querySelectorAll(`.column-2 [data-id]`);
            const slideshowContainers = document.querySelectorAll(`.column-3 [data-id]`);
            console.log("info cont", infoContainers)

            infoContainers.forEach((container) => {
                if (container.dataset.id === target) {
                    container.classList.add('active');
                } else {
                    container.classList.remove('active');
                }
            });

            slideshowContainers.forEach((container) => {
                if (container.dataset.id === target) {
                    container.classList.add('active');
                } else {
                    container.classList.remove('active');
                }
            });
        });
    });
});