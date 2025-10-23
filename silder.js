const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    let index = 0;

    // Create dots dynamically
    testimonials.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function showSlide(i) {
      testimonials.forEach((item, idx) => {
        item.classList.toggle('active', idx === i);
        dots[idx].classList.toggle('active', idx === i);
      });
      index = i;
    }

    function nextSlide() {
      index = (index + 1) % testimonials.length;
      showSlide(index);
    }

    function prevSlide() {
      index = (index - 1 + testimonials.length) % testimonials.length;
      showSlide(index);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide every 4s
    let autoSlide = setInterval(nextSlide, 4000);

    // Pause on hover
    document.querySelector('.testimonial-container').addEventListener('mouseenter', () => clearInterval(autoSlide));
    document.querySelector('.testimonial-container').addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 4000));
  