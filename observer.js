
class LazyLoader {
    constructor() {
        this.observer = new IntersectionObserver(this.onIntersection.bind(this), {
            root: null,
            threshold: 1.0,
        });

        const images = document.querySelectorAll('dialog img.lazy');
        images.forEach((img) => {
            this.observer.observe(img);
        });
    }

    onIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                this.observer.unobserve(img);
            }
        });
    }

    observe(target) {
        this.observer.observe(target);
    }
}

const lazyLoader = new LazyLoader();

const images = document.querySelectorAll('dialog img.lazy');
images.forEach((img) => {
    lazyLoader.observe(img);
});

// Set the src attribute of the images to the absolute URL
const baseUrl = new URL(document.baseURI);
images.forEach((img) => {
    const src = new URL(img.dataset.src, baseUrl).toString();
    img.src = src;
});