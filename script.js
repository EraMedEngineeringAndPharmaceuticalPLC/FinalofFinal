
//1.Head and nav section_ Slider Functionality -by de-(እደ-ኤልዳ)eldahcreatives

document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentIndex = 0;
    const slideCount = slides.length;


    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }, 3000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
});



// Search Functionality - by de-(እደ-ኤልዳ)eldahcreatives

document.addEventListener('DOMContentLoaded', function () {
    const searchBox = document.querySelector('.search-box');
    const searchInput = searchBox.querySelector('input');
    const searchButton = searchBox.querySelector('button');
    let searchTimeout;

    searchInput.addEventListener('focus', () => {
        searchBox.classList.add('focused');
    });

    searchInput.addEventListener('blur', () => {
        searchBox.classList.remove('focused');
    });

    searchButton.addEventListener('click', executeSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') executeSearch();
    });

    function executeSearch() {
        clearTimeout(searchTimeout);

        const query = searchInput.value.trim();
        if (!query) {
            showSearchError();
            return;
        }

        searchBox.classList.add('loading');
        searchButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

        searchTimeout = setTimeout(() => {
            processSearchResults(query);
        }, 800);
    }

    function processSearchResults(query) {
        const allSections = document.querySelectorAll('section');
        let foundMatch = false;

        allSections.forEach(section => {
            const content = section.textContent.toLowerCase();
            const isMatch = content.includes(query.toLowerCase());

            if (isMatch) {
                section.style.display = 'block';
                foundMatch = true;
            } else {
                section.style.display = 'none';
            }
        });

        document.getElementById('nav').style.display = 'block';
        document.getElementById('contact').style.display = 'block';

        if (!foundMatch) {
            alert("No section matched your search.");
        }
    }

    function searchContent() {
        const query = document.getElementById("searchInput").value.toLowerCase();
        const sections = document.querySelectorAll("section, div");

        let found = false;

        sections.forEach(section => {
            if (section.textContent.toLowerCase().includes(query)) {
                section.style.display = "block";
                found = true;
            } else {
                section.style.display = "none";
            }
        });

        if (!found) {
            alert("No results found for: " + query);
        }
    }
    const sections = document.querySelectorAll(".content-section");

    function showSearchError() {
        searchBox.classList.add('error');
        setTimeout(() => {
            searchBox.classList.remove('error');
        }, 1500);
    }

    searchInput.addEventListener('input', debounce(function () {
        if (searchInput.value.length > 2) {
            function fetchAutocompleteSuggestions(query) {
                const suggestions = ["face mask", "gloves", "gown", "sanitizer"];
                const matches = suggestions.filter(item => item.includes(query.toLowerCase()));

                console.log("Suggestions:", matches);
            }

        }
    }, 300));

    function debounce(func, delay) {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(func, delay);
        };
    }
});

function searchFunction() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('#contentList li');
    items.forEach(item => {
        item.classList.toggle('hidden', !item.textContent.toLowerCase().includes(input));
    });
}



// Nav for home Functionality - by de-(እደ-ኤልዳ)eldahcreatives

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.rg-carousel');
    const cards = document.querySelectorAll('.rg-card');
    const prevBtn = document.querySelector('.rg-nav-btn.prev');
    const nextBtn = document.querySelector('.rg-nav-btn.next');
    const pagination = document.querySelector('.rg-pagination');

    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            scrollToCard(index);
        });
        pagination.appendChild(dot);
    });

    const dots = document.querySelectorAll('.rg-pagination .dot');

    carousel.addEventListener('scroll', () => {
        const cardIndex = Math.round(carousel.scrollLeft / (cards[0].offsetWidth + 32));
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === cardIndex);
        });
    });

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -cards[0].offsetWidth - 32, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: cards[0].offsetWidth + 32, behavior: 'smooth' });
    });

    function scrollToCard(index) {
        const card = cards[index];
        carousel.scrollTo({
            left: card.offsetLeft - 32,
            behavior: 'smooth'
        });
    }

    let autoScrollInterval = setInterval(() => {
        const isLastCard = carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 10;
        if (isLastCard) {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            carousel.scrollBy({ left: cards[0].offsetWidth + 32, behavior: 'smooth' });
        }
    }, 5000);

    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(() => {
            const isLastCard = carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 10;
            if (isLastCard) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: cards[0].offsetWidth + 32, behavior: 'smooth' });
            }
        }, 5000);
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('medical-anim-1');
    if (!container) {
        console.error("Container not found!");
        return;
    }

    const wrapper = container.querySelector('.med-scroll-wrapper');
    const group = container.querySelector('.med-particle-group');

    container.style.display = 'block';
    const groupWidth = group.offsetWidth;
    wrapper.style.width = (groupWidth * 2) + 'px';

    console.log('Green medical animation ready');
});



// Showsection Functionality - by de-(እደ-ኤልዳ)eldahcreatives

const alwaysVisible = ['nav', 'contact', 'locations'];

const homeOnly = ['home', 'about', 'locations'];

const optionalSections = [
    'timeline-section', 'mission-values', 'team', 'recognition',
    'products', 'all-products', 'manufacturing', 'clients-partners',
    'why-choose-era', 'resources', 'news-blog', 'careers', 'value-content',
    'quote', 'sister-companies', 'book-appointment', 'faq',
];

const allSections = [...alwaysVisible, ...homeOnly, ...optionalSections];

function showSection(sectionId) {
    allSections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        if (alwaysVisible.includes(id)) {
            el.style.display = 'block';

        } else if (sectionId === 'home' && homeOnly.includes(id)) {
            el.style.display = 'block';

        } else if (id === sectionId) {
            el.style.display = 'block';

        } else {
            el.style.display = 'none';
        }
    });
}

window.onload = () => showSection('home');

document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('show');
});




// About sec script - by de-(እደ-ኤልዳ)eldahcreatives

document.addEventListener('DOMContentLoaded', function () {

    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#005f73" },
                shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
                opacity: { value: 0.3, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#005f73", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 2, direction: "none" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    } else {
        console.warn("particlesJS not loaded - skipping animation");
    }

    const animateStats = () => {
        const statItems = document.querySelectorAll('.stat-item');

        statItems.forEach(item => {
            const target = parseInt(item.getAttribute('data-target')) || 0;
            const numberEl = item.querySelector('.stat-number1') || item.querySelector('.stat-number');
            if (!numberEl) return;

            const currentText = numberEl.textContent;
            const hasPlus = currentText.includes('+');
            const hasM = currentText.includes('M');
            const current = parseInt(currentText.replace(/[+M]/g, '')) || 0;

            if (current >= target) return;

            const duration = 2000;
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const value = Math.floor(progress * target);

                let displayValue = value.toString();
                if (hasPlus) displayValue += '+';
                if (hasM) displayValue += 'M';

                numberEl.textContent = displayValue;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('interactive-stats')) {
                    animateStats();
                }
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.interactive-stats, .about-card, .mv-grid, .timeline-container, .values-carousel')
        .forEach(el => observer.observe(el));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });


                setTimeout(() => {
                    window.location.hash = this.getAttribute('href');
                }, 1000);
            }
        });
    });

    const initMedicalAnimation = () => {
        const container = document.getElementById('medical-anim-1');
        if (!container) return;

        const wrapper = container.querySelector('.med-scroll-wrapper');
        const groups = container.querySelectorAll('.med-particle-group');

        setTimeout(() => {
            const groupWidth = groups[0]?.offsetWidth || 0;
            wrapper.style.width = `${groupWidth * 2}px`;
            container.style.opacity = '1';
        }, 100);
    };
    initMedicalAnimation();

    console.log('All animations initialized successfully');
});






// 3. Product Section Functionality - by de-(እደ-ኤልዳ)eldahcreatives

document.addEventListener('DOMContentLoaded', function () {

    const slider = document.querySelector('.product-grid');
    const prevBtn = document.querySelector('.slider-nav.prev');
    const nextBtn = document.querySelector('.slider-nav.next');
    const productItems = document.querySelectorAll('.product-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const quickViewBtns = document.querySelectorAll('.quick-view');


    let currentIndex = 0;
    const itemWidth = productItems[0].offsetWidth + parseInt(getComputedStyle(productItems[0]).marginRight);
    const visibleItems = Math.min(3, productItems.length); // 


    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {

            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            productItems.forEach((item, index) => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';

                    setTimeout(() => {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    }, index * 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });

            currentIndex = 0;
            setTimeout(updateSliderPosition, 350);
        });
    });

    nextBtn.addEventListener('click', function () {
        const maxIndex = productItems.length - visibleItems;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSliderPosition();
        }
        updateNavButtons();
    });

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
        updateNavButtons();
    });

    function updateNavButtons() {
        const maxIndex = productItems.length - visibleItems;
        prevBtn.style.opacity = currentIndex > 0 ? '1' : '0.5';
        nextBtn.style.opacity = currentIndex < maxIndex ? '1' : '0.5';
    }

    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const productCard = this.closest('.product-item');
            const productName = productCard.querySelector('h3').textContent;

            console.log(`Quick view requested for: ${productName}`);
            alert(`Showing details for: ${productName}`);
        });
    });

    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {

            nextBtn.click();
        } else if (touchEndX > touchStartX + threshold) {
            prevBtn.click();
        }
    }

    updateNavButtons();
});

document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.process-step');

    steps.forEach((step, index) => {

        step.style.transitionDelay = `${index * 0.1}s`;

        step.addEventListener('click', function () {
            this.querySelector('.step-content').classList.toggle('active');
        });
    });

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function () {
            const productName = this.querySelector('h3').textContent;
            console.log(`Selected product: ${productName}`);
        });
    });
});


// Why u chose EraMed Functionality - by de-(እደ-ኤልዳ)eldahcreatives

document.addEventListener('DOMContentLoaded', function () {
    const counterSection = document.querySelector('.why-choose-era');
    const statCircles = document.querySelectorAll('.stat-circle');
    let animationStarted = false;

    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    const animateCounters = () => {
        if (animationStarted) return;

        statCircles.forEach(circle => {
            const counter = circle.querySelector('.stat-number');
            const target = +circle.getAttribute('data-target');
            const duration = 2200;
            const startTime = performance.now();

            const updateCounter = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const easedProgress = easeOutQuart(progress);
                const value = Math.floor(easedProgress * target);

                counter.textContent = value === target ? `${value}+` : value;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    circle.style.transform = 'translateY(-10px) scale(1.05)';
                    setTimeout(() => {
                        circle.style.transform = 'translateY(-15px) scale(1.05)';
                    }, 100);
                }
            };

            requestAnimationFrame(updateCounter);
        });

        animationStarted = true;
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateCounters, 300);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    observer.observe(counterSection);

    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('i');
            icon.style.transform = 'rotate(15deg) scale(1.15)';
            card.style.boxShadow = '0 25px 60px rgba(98, 218, 74, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('i');
            icon.style.transform = '';
            card.style.boxShadow = '0 15px 40px rgba(52, 207, 47, 0.1)';
        });
    });

    const shapes = document.querySelectorAll('.floating-shape');
    shapes.forEach((shape, index) => {
        const duration = 15000 + (index * 3000);
        const delay = index * 2000;

        function floatAnimation() {
            shape.animate([
                { transform: 'translateY(0) rotate(0deg)' },
                { transform: 'translateY(-50px) rotate(5deg)' },
                { transform: 'translateY(0) rotate(0deg)' }
            ], {
                duration: duration,
                iterations: Infinity,
                delay: delay,
                easing: 'ease-in-out'
            });
        }

        floatAnimation();
    });
});




// Clients&Partners - by de-(እደ-ኤልዳ)eldahcreatives

document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelector('.carousel-track').style.animationPlayState = 'paused';
    });
    item.addEventListener('mouseleave', () => {
        document.querySelector('.carousel-track').style.animationPlayState = 'running';
    });
});



// Recoginition - by de-(እደ-ኤልዳ)eldahcreatives

document.addEventListener('DOMContentLoaded', function () {

    const orbit = document.querySelector('.orbit');
    const items = document.querySelectorAll('.orbital-item');
    const radius = 180;
    const angle = (2 * Math.PI) / items.length;

    items.forEach((item, index) => {
        const x = radius * Math.cos(angle * index);
        const z = radius * Math.sin(angle * index);
        item.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${angle * index * -1}rad)`;
    });

    let currentIndex = 0;
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    const separator = document.querySelector('.particles-separator');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        separator.appendChild(particle);
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    const partnerItems = document.querySelectorAll('.diamond-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            partnerItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

document.querySelectorAll('.content-card').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.content-card')) {
        document.querySelectorAll('.content-card.flipped').forEach(card => {
            card.classList.remove('flipped');
        });
    }
});

let rotationInterval;
const rotationSpeed = 5000;

function startRotation() {
    const cards = document.querySelectorAll('.recognition-card');
    let currentIndex = 0;

    rotationInterval = setInterval(() => {
        cards.forEach(card => card.classList.remove('featured'));
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].classList.add('featured');
    }, rotationSpeed);
}

function pauseRotation() {
    clearInterval(rotationInterval);
    document.getElementById('pause-rotation').style.display = 'none';
    document.getElementById('play-rotation').style.display = 'block';
}

function resumeRotation() {
    startRotation();
    document.getElementById('pause-rotation').style.display = 'block';
    document.getElementById('play-rotation').style.display = 'none';
}

function setupCarousel() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.recognition-card');
    const dotsContainer = document.querySelector('.carousel-dots');

    cards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.classList.remove('featured');
        track.appendChild(clone);
    });

    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => slideTo(index));
        dotsContainer.appendChild(dot);
    });

    let currentSlide = 0;
    const slideWidth = cards[0].offsetWidth;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide % cards.length);
        });
    }

    function slideTo(index) {
        currentSlide = index;
        updateCarousel();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % cards.length;
        updateCarousel();
    }

    document.querySelector('.carousel-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    setInterval(nextSlide, 3000);
}


document.querySelector('.modal-download').addEventListener('click', function () {
    const imgSrc = document.querySelector('.modal-image').src;
    const fileName = document.querySelector('.modal-caption').textContent.toLowerCase().replace(/\s+/g, '-') + '.jpg';

    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


document.addEventListener('DOMContentLoaded', function () {
    startRotation();
    if (window.innerWidth <= 768) setupCarousel();

    document.getElementById('pause-rotation').addEventListener('click', pauseRotation);
    document.getElementById('play-rotation').addEventListener('click', resumeRotation);
});

window.addEventListener('resize', function () {
    if (window.innerWidth <= 768 && !document.querySelector('.carousel-track').children.length) {
        setupCarousel();
    }
});



document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const category = this.dataset.category;
        document.querySelectorAll('.news-card').forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const article = this.closest('.news-card');
        const title = article.querySelector('h3').textContent;
        const url = window.location.href;

        if (this.querySelector('svg path').getAttribute('d').includes('M5.026 15')) {

            window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
        } else {

            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        }
    });
});






// Appointment - by de-(እደ-ኤልዳ)eldahcreatives

document.addEventListener('DOMContentLoaded', function () {

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthYearElement = document.querySelector('.month-year');
    const calendarGrid = document.querySelector('.calendar-grid');
    const prevMonthBtn = document.querySelector('.prev-month');
    const nextMonthBtn = document.querySelector('.next-month');
    const timeSlotContainer = document.querySelector('.slot-container');
    const selectedDateElement = document.getElementById('selectedDate');
    const selectedTimeElement = document.getElementById('selectedTime');
    const confirmNameElement = document.getElementById('confirmName');
    const confirmDateElement = document.getElementById('confirmDate');
    const confirmTimeElement = document.getElementById('confirmTime');
    const confirmDeptElement = document.getElementById('confirmDept');
    const confirmEmailElement = document.getElementById('confirmEmail');
    const form = document.getElementById('appointmentForm');
    const steps = document.querySelectorAll('.form-step');
    const nextBtn = document.querySelector('.btn-next');
    const prevBtn = document.querySelector('.btn-prev');
    const confirmationModal = document.querySelector('.confirmation-modal');
    const closeModalBtn = document.querySelector('.btn-close-modal');

    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];

    function initCalendar() {
        renderCalendar(currentMonth, currentYear);
        renderTimeSlots();
    }

    function renderCalendar(month, year) {

        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        monthYearElement.textContent = `${monthNames[month]} ${year}`;

        calendarGrid.innerHTML = '';

        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'day-header';
            dayElement.textContent = day;
            calendarGrid.appendChild(dayElement);
        });

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'day-cell empty';
            calendarGrid.appendChild(emptyCell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'day-cell';
            dayCell.textContent = day;

            if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                dayCell.classList.add('current-day');
            }

            const cellDate = new Date(year, month, day);
            if (cellDate < new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) {
                dayCell.classList.add('disabled');
            } else {
                dayCell.addEventListener('click', () => selectDate(day, month, year));
            }

            calendarGrid.appendChild(dayCell);
        }
    }

    function renderTimeSlots() {
        timeSlotContainer.innerHTML = '';
        timeSlots.forEach(slot => {
            const slotElement = document.createElement('div');
            slotElement.className = 'time-slot';
            slotElement.textContent = slot;
            slotElement.addEventListener('click', () => selectTimeSlot(slot));
            timeSlotContainer.appendChild(slotElement);
        });
    }

    function selectDate(day, month, year) {
        const selectedCells = document.querySelectorAll('.day-cell.selected');
        selectedCells.forEach(cell => cell.classList.remove('selected'));

        const selectedDate = new Date(year, month, day);
        const formattedDate = selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

        selectedDateElement.textContent = formattedDate;

        const dayCells = document.querySelectorAll('.day-cell:not(.empty):not(.disabled)');
        dayCells.forEach(cell => {
            if (parseInt(cell.textContent) === day) {
                cell.classList.add('selected');
            }
        });

        selectedTimeElement.textContent = 'Not selected';
        const selectedSlots = document.querySelectorAll('.time-slot.selected');
        selectedSlots.forEach(slot => slot.classList.remove('selected'));
    }

    function selectTimeSlot(time) {

        const selectedSlots = document.querySelectorAll('.time-slot.selected');
        selectedSlots.forEach(slot => slot.classList.remove('selected'));

        const slotElements = document.querySelectorAll('.time-slot');
        slotElements.forEach(slot => {
            if (slot.textContent === time) {
                slot.classList.add('selected');
                selectedTimeElement.textContent = time;
            }
        });
    }

    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextBtn.addEventListener('click', () => {

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (!name || !email || !phone) {
            alert('Please fill in all personal information fields');
            return;
        }

        if (selectedDateElement.textContent === 'Not selected' ||
            selectedTimeElement.textContent === 'Not selected') {
            alert('Please select a date and time for your appointment');
            return;
        }

        steps[0].classList.remove('active');
        steps[1].classList.add('active');
    });

    prevBtn.addEventListener('click', () => {
        steps[1].classList.remove('active');
        steps[0].classList.add('active');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const department = document.getElementById('department').value;
        const notes = document.getElementById('notes').value;
        const date = selectedDateElement.textContent;
        const time = selectedTimeElement.textContent;

        confirmNameElement.textContent = name;
        confirmDateElement.textContent = date;
        confirmTimeElement.textContent = time;
        confirmDeptElement.textContent = document.getElementById('department').options[document.getElementById('department').selectedIndex].text;
        confirmEmailElement.textContent = email;

        confirmationModal.classList.add('active');

        form.reset();
        selectedDateElement.textContent = 'Not selected';
        selectedTimeElement.textContent = 'Not selected';
        steps[1].classList.remove('active');
        steps[0].classList.add('active');

        const selectedCells = document.querySelectorAll('.day-cell.selected');
        selectedCells.forEach(cell => cell.classList.remove('selected'));

        const selectedSlots = document.querySelectorAll('.time-slot.selected');
        selectedSlots.forEach(slot => slot.classList.remove('selected'));
    });

    closeModalBtn.addEventListener('click', () => {
        confirmationModal.classList.remove('active');
    });

    initCalendar();
});



document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Filter button clicked:', button.dataset.filter);

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        const filter = button.dataset.filter;
        const jobCards = document.querySelectorAll('.job-card');

        jobCards.forEach(card => {
            console.log('Job card category:', card.dataset.category);
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});



// FAQ - by de-(እደ-ኤልዳ)eldahcreatives

document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const plusIcon = item.querySelector('.plus');
        const minusIcon = item.querySelector('.minus');

        if (!question || !answer || !plusIcon || !minusIcon) {
            console.warn("FAQ item missing essential elements:", item);
            return;
        }

        question.addEventListener('click', () => {
            const isCurrentlyActive = item.classList.contains('active');

            if (!isCurrentlyActive) {
                document.querySelectorAll('.faq-item.active').forEach(openItem => {
                    if (openItem !== item) {
                        openItem.classList.remove('active');
                        const openAnswer = openItem.querySelector('.faq-answer');
                        const openPlus = openItem.querySelector('.plus');
                        const openMinus = openItem.querySelector('.minus');

                        if (openAnswer) openAnswer.style.maxHeight = '0';
                        if (openPlus) openPlus.style.display = 'block';
                        if (openMinus) openMinus.style.display = 'none';
                    }
                });
            }

            item.classList.toggle('active');

            if (item.classList.contains('active')) {

                answer.style.maxHeight = answer.scrollHeight + 'px';
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'block';
            } else {

                answer.style.maxHeight = '0';
                plusIcon.style.display = 'block';
                minusIcon.style.display = 'none';
            }
        });

        question.setAttribute('tabindex', '0');
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const questionBtn = item.querySelector(".faq-question");
        questionBtn.addEventListener("click", () => {

            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });
});




// Appointement - by de-(እደ-ኤልዳ)eldahcreatives


document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const confirmation = document.getElementById('confirmationMessage');
    confirmation.textContent = 'Thank you for your appointment request. We will contact you shortly to confirm.';
    confirmation.style.display = 'block';
    confirmation.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
    confirmation.style.color = 'rgb(40, 167, 69)';
    confirmation.style.border = '1px solid rgb(40, 167, 69)';

    this.reset();

    confirmation.scrollIntoView({ behavior: 'smooth' });
});


// QOUETE SECTION _ Form Submission Handling
document.getElementById('inquiryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    console.log('Form submitted:', formData);

    alert('Thank you for your message! We will contact you soon.');
    this.reset();
});

document.querySelectorAll('.social-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.querySelector('img').style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', function () {
        this.querySelector('img').style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('quoteForm');
    const steps = document.querySelectorAll('.form-step');
    const nextBtns = document.querySelectorAll('.btn-next');
    const prevBtns = document.querySelectorAll('.btn-prev');
    const progressBar = document.querySelector('.progress-bar');
    const stepCircles = document.querySelectorAll('.step-circle');
    const confirmationModal = document.querySelector('.confirmation-modal');
    const closeModalBtn = document.querySelector('.modal-close-btn');
    const confirmEmail = document.getElementById('confirm-email');


    const reviewName = document.getElementById('review-name');
    const reviewEmail = document.getElementById('review-email');
    const reviewPhone = document.getElementById('review-phone');
    const reviewCompany = document.getElementById('review-company');
    const reviewProducts = document.getElementById('review-products');
    const reviewRequest = document.getElementById('review-request');


    let currentStep = 1;


    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep === 1) {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;

                if (!name || !email || !phone) {
                    alert('Please fill in all required fields');
                    return;
                }
            } else if (currentStep === 2) {
                const products = document.querySelectorAll('input[name="products[]"]:checked');
                const request = document.getElementById('request').value;

                if (products.length === 0 || !request) {
                    alert('Please select at least one product and describe your requirements');
                    return;
                }
            }

            if (currentStep === 2) {
                updateReviewSummary();
            }

            steps[currentStep - 1].classList.remove('active');
            steps[currentStep].classList.add('active');
            currentStep++;

            updateProgress();
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            steps[currentStep - 1].classList.remove('active');
            steps[currentStep - 2].classList.add('active');
            currentStep--;
            updateProgress();
        });
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        confirmEmail.textContent = document.getElementById('email').value;

        confirmationModal.classList.add('active');

    });

    closeModalBtn.addEventListener('click', () => {
        confirmationModal.classList.remove('active');
    });

    function updateProgress() {
        const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;
        progressBar.style.width = `${progressPercent}%`;

        stepCircles.forEach((circle, index) => {
            if (index < currentStep) {
                circle.style.backgroundColor = '#005b96';
                circle.style.color = 'white';
            } else {
                circle.style.backgroundColor = '#e2e8f0';
                circle.style.color = '#64748b';
            }
        });
    }

    function updateReviewSummary() {

        reviewName.textContent = document.getElementById('name').value;
        reviewEmail.textContent = document.getElementById('email').value;
        reviewPhone.textContent = document.getElementById('phone').value;
        reviewCompany.textContent = document.getElementById('company').value || 'Not provided';


        reviewProducts.innerHTML = '';
        const products = document.querySelectorAll('input[name="products[]"]:checked');
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product.value;
            reviewProducts.appendChild(li);
        });

        reviewRequest.textContent = document.getElementById('request').value;
    }
});




// Vacancy  - by de-(እደ-ኤልዳ)eldahcreatives

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {

        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;
        document.querySelectorAll('.job-card').forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});




// Certification - by de-(እደ-ኤልዳ)eldahcreatives

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

showTestimonial(0);

function toggleChat() {
    var chatWindow = document.getElementById("chat-window");
    if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
        chatWindow.style.display = "flex";
    } else {
        chatWindow.style.display = "none";
    }
}



// Chatbox section - by de-(እደ-ኤልዳ)eldahcreatives

function submitChat(event) {
    event.preventDefault();
    var name = document.getElementById("chat-name").value;
    var email = document.getElementById("chat-email").value;
    var message = document.getElementById("chat-message").value;

    var chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML += `
        <div class="bot-message">
            ✅ Thank you, ${name}! We have received your message. The Eramed team will get back to you soon.
        </div>
    `;

    document.getElementById("chat-form").reset();
}


document.addEventListener("DOMContentLoaded", function () {
    const text = "We import, manufacture, and supply top-tier medical equipment and pharmaceuticals.";
    const target = document.getElementById("typed-text");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    typeText();
});



// Sister companies  - by de-(እደ-ኤልዳ)eldahcreatives

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    showSection('home');
});



function handleSisterCompanyClick() {
    console.log("Navigating to sister company page");

    return true;

}

const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
let currentIndex = Number(localStorage.getItem('slideIndex')) || 0;

function updateSliderPosition() {
    const slideWidth = slides[0].offsetWidth;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    localStorage.setItem('slideIndex', currentIndex);
}

window.addEventListener('load', () => {
    updateSliderPosition();
});


function goToSlide(index) {
    currentIndex = index;
    updateSliderPosition();
}



