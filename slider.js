const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const container = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0;
let slideInterval;
const intervalTime = 4000; // 4 seconds per slide

// 1. Dynamically generate dot elements based on number of slides
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        
        // Let users click specific dot to jump to that slide
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
            resetAutoSlide(); 
        });
        dotsContainer.appendChild(dot);
    });
}

// 2. Refresh active positions on track display and dots array
function updateSlider() {
    // Slide the track horizontally
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active dot layout
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// 3. Move functions
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

// 4. Timer automation configuration
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Restarts timer if manual navigation interrupts the automatic loop
function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// 5. Wire up Event Listeners
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

// Pause slide automation window upon cursor hover entry
container.addEventListener('mouseenter', stopAutoSlide);
container.addEventListener('mouseleave', startAutoSlide);

// Initialize slider UI components
createDots();
startAutoSlide();
