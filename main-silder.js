  // slider

  const slider = document.querySelector('.slider');
  const items = document.querySelectorAll('.slide');
  const totalItems = items.length;

  let currentIndex = 0;
  const slideIntervalTime = 3000;
  let slideInterval;

  function updateSlide() {
    const itemWidth = items[0].offsetWidth; // You can add margin here if needed
    const offset = -currentIndex * itemWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlide();
  }

  // Start auto sliding
  slideInterval = setInterval(nextSlide, slideIntervalTime);

  // Update slide position on window resize
  window.addEventListener('resize', updateSlide);

  // Optional: pause on hover
  slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
  slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, slideIntervalTime);
  });

  // time 
  const countdown = () => {
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;
      if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById('days').innerHTML = '00d';
        document.getElementById('hours').innerHTML = '00h';
        document.getElementById('minutes').innerHTML = '00m';
        document.getElementById('seconds').innerHTML = '00s';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').innerHTML = days.toString().padStart(2, '0') + 'd';
      document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0') + 'h';
      document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0') + 'm';
      document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0') + 's';
    }, 1000);
  };
  countdown();