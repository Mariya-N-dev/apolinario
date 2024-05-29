// const slideshowTemplate = null;

// fetch('slideshow-template.html')
//     .then(response => response.text())
//     .then(template => {
//         const slideshowTemplate = document.getElementById('slideshow-template');
//         slideshowTemplate.innerHTML = template;
//         const slideshowContainter1 = document.getElementById('slideshow-container-1')
//         slideshowContainter1.innerHTML = slideshowTemplate.innerHTML;
//         slideshowContainter1.appendChild(slideshowTemplate)
//         slideshowContainter1.insertAdjacentHTML('beforeend', slideshowTemplate)

//     });


// const slideshowContainer1 = document.getElementById('slideshow-container-1');
// const slideshowContainer2 = document.getElementById('slideshow-container-2')
// const slideshowTemplate = document.getElementById('slideshow-template').content;
// const slideshowClone = slideshowTemplate.cloneNode(true);
// slideshowContainer1.appendChild(slideshowClone);
// slideshowContainer2.appendChild(slideshowClone);

// fetch('slideshow.json')
//     .then(response => response.json())
//     .then(data => {
//         data.collections.forEach((collection, index) => {
//             const slideshowContainer = document.querySelector(`#slideshow-container-${collection.id}`);
//             slideshowContainer.dataset.id = collection.id;
//             const slides = slideshowContainer.querySelectorAll('.mySlides');
//             collection.slides.forEach((slide, slideIndex) => {
//                 const slideClone = slides[slideIndex].cloneNode(true);
//                 const image = slideClone.querySelector('img');
//                 image.src = slide.imageSrc;
//                 image.dataset.src = slide.dataSrc;
//                 image.classList.add(slide.imageClass);
//                 const captionText = slideClone.querySelector('.text');
//                 captionText.textContent = slide.captionText;
//                 const numberText = slideClone.querySelector('.numbertext');
//                 numberText.textContent = slide.numberText;
//                 slides[slideIndex].parentNode.replaceChild(slideClone, slides[slideIndex]);
//             });

//             // document.body.appendChild(slideshowContainer);
//         });
//     });

// const containers = Array.from(document.querySelectorAll('[id^="slideshow-container-"]'));
// const slideshowTemplate = document.getElementById('slideshow-template').content;

// containers.forEach(container => {
//     const slideshowClone = slideshowTemplate.cloneNode(true);
//     slideshowClone.dataset.id = container.dataset.id;
//     container.appendChild(slideshowClone);
// });


///WORKING START
// const containers = Array.from(document.querySelectorAll('[id^="slideshow-container-"]'));
// const slideshowTemplate = document.getElementById('slideshow-template');

// containers.forEach(container => {
//     const slideshowClone = slideshowTemplate.content.cloneNode(true);
//     const slideshowDiv = slideshowClone.querySelector('.slideshow-container');
//     slideshowDiv.dataset.id = container.dataset.id;
//     container.appendChild(slideshowClone);
// });


///Almost GETTING SOMEWHERE CANNOT REACH SLIDES OBJECT AND POPULATE THE TEMPLATE
// const containers = Array.from(document.querySelectorAll('[id^="slideshow-container-"]'));
// const slideshowTemplate = document.getElementById('slideshow-template');

// containers.forEach(container => {
//     const slideshowClone = slideshowTemplate.content.cloneNode(true);
//     const slideshowDiv = slideshowClone.querySelector('.slideshow-container');
//     slideshowDiv.dataset.id = container.dataset.id;

//     // Fetch the JSON data
//     fetch('slideshow.json')
//         .then(response => response.json())
//         .then(data => {
//             // Find the slideshow with the matching ID
//             const slideshow = data.collections.find(c => c.id === slideshowDiv.dataset.id);
//             console.log(" Find the slideshow with the matching ID", slideshow)
//             if (slideshow) {
//                 // Populate the slideshow with the data from the JSON file
//                 const mySlides = slideshowClone.querySelector('.mySlides');


//                 // Append the slideshowClone to its parent
//                 container.appendChild(slideshowClone);
//             }
//         })
//         .catch(error => console.error('Error7777:', error));
// });






// fetch('slideshow.json')
//     .then(response => response.json())
//     .then(data => {

//         data.collections.forEach((collection, index) => {

//             const slideshowContainer = document.querySelector(`#slideshow-container-${collection.id}`);
//             slideshowContainer.dataset.id = collection.id;
//             const slides = slideshowContainer.querySelectorAll('.mySlides');
//             collection.slides.forEach((slide, slideIndex) => {
//                 const slideClone = slides[slideIndex].cloneNode(true);
//                 const image = slideClone.querySelector('img');
//                 image.src = slide.imageSrc;
//                 image.dataset.src = slide.dataSrc;
//                 image.classList.add(slide.imageClass);
//                 const captionText = slideClone.querySelector('.text');
//                 captionText.textContent = slide.captionText;
//                 const numberText = slideClone.querySelector('.numbertext');
//                 numberText.textContent = slide.numberText;
//                 slides[slideIndex].parentNode.replaceChild(slideClone, slides[slideIndex]);
//             });

//             // document.body.appendChild(slideshowContainer);
//         });
//     });

const containers = Array.from(document.querySelectorAll('[id^="slideshow-container-"]'));
const slideshowTemplate = document.getElementById('slideshow-template');
containers.forEach(container => {
    const slideshowClone = document.importNode(slideshowTemplate.content, true);
    const slideshowDiv = slideshowClone.querySelector('.slideshow-container');
    slideshowDiv.dataset.id = container.dataset.id;


    // Fetch the JSON data
    fetch('slideshow.json')
        .then(response => response.json())
        .then(data => {
            // Find the slideshow with the matching ID
            const slideshow = data.collections.find(c => c.id === slideshowDiv.dataset.id);
            console.log(" Find the slideshow with the matching ID", slideshow)
            if (slideshow && slideshow.slides) {
                // Populate the slideshow with the data from the JSON file

                const mySlides = slideshowClone.querySelector('.mySlides');

                slideshow.slides.forEach((slide, index) => {

                    // Clone the mySlides element for each slide
                    const slideElement = mySlides.cloneNode(true);
                    console.log("slide elem", slideElement)
                    // Set the src and data-src attributes of the img element
                    slideElement.querySelector('img').src = slide.imageSrc;
                    slideElement.querySelector('img').dataset.src = slide.dataSrc;
                    // Set the textContent of the numbertext and text elements
                    slideElement.querySelector('.numbertext').textContent = slide.numberText;
                    slideElement.querySelector('.text').textContent = slide.captionText;
                    // Append the slideElement to the mySlides parent element

                    mySlides.parentNode.appendChild(slideElement);
                });
                // Show the first slide
                // showSlides(0);

                // Append the slideshowClone to its parent
                container.appendChild(slideshowClone);
            }
        })
        .catch(error => console.error('Error:', error));

    // function showSlides(index) {
    //     const slides = slideElement;
    //     if (slides.length > 0) {
    //         for (let i = 0; i < slides.length; i++) {
    //             slides[i].style.display = 'none';
    //         }
    //         slides[index].style.display = 'block';
    //     }
    // }
});