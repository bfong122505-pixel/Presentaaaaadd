window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const startBtn = document.getElementById('start-presentation-btn');

    if (mainContent) {
        mainContent.classList.add('hidden');
    }

    setTimeout(() => {
        if (loader) {
            loader.classList.add('fade-out');
        }
        if (mainContent) {
            mainContent.classList.remove('hidden');
        }
        document.body.style.overflow = 'auto';

        if (loader) {
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1000);
        }
    }, 3000);

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            switchSection('beijing-culture-section');
        });
    }
});

function switchSection(targetSectionId) {
    const sections = document.querySelectorAll('.presentation-section');
    sections.forEach(sec => sec.classList.add('hidden-slide'));

    const target = document.getElementById(targetSectionId);
    if (target) {
        target.classList.remove('hidden-slide');
    }
    window.scrollTo(0, 0);
}

function nextSubSlide(slideNumber) {
    const slides = [
        document.getElementById('bj-slide-1'),
        document.getElementById('bj-slide-2')
    ];
    slides.forEach(slide => {
        if (slide) {
            slide.classList.remove('active-inner-slide');
        }
    });

    if (slideNumber > 2) {
        switchSection('ethnic-groups-detail-section');
    } else {
        const target = document.getElementById(`bj-slide-${slideNumber}`);
        if (target) {
            target.classList.add('active-inner-slide');
        }
        window.scrollTo(0, 0);
    }
}

function goToMainMenuFromAny() {
    nextSubSlide(1);
    switchSection('table-of-contents');
}

function changeDeckSlide(targetSlideId) {
    const slides = document.querySelectorAll('.deck-slide');
    slides.forEach(slide => slide.classList.remove('active-deck-slide'));

    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    const target = document.getElementById(targetSlideId);
    if (target) {
        target.classList.add('active-deck-slide');
    }

    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active-tab');
    }
}

function nextLangSlide(slideNumber) {
    const subSlides = document.querySelectorAll('.lang-sub-slide');
    subSlides.forEach(slide => slide.classList.remove('active-lang-slide'));

    const target = document.getElementById(`lang-slide-${slideNumber}`);
    if (target) {
        target.classList.add('active-lang-slide');
    }
    window.scrollTo(0, 0);
}

function nextCultureSlide(slideNumber) {
    const subSlides = document.querySelectorAll('.culture-sub-slide');
    subSlides.forEach(slide => slide.classList.remove('active-culture-slide'));

    const target = document.getElementById(`culture-slide-${slideNumber}`);
    if (target) {
        target.classList.add('active-culture-slide');
    }
    window.scrollTo(0, 0);
}