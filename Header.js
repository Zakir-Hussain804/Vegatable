 const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');
  const menu = document.querySelector('.menu');

  openMenu.addEventListener('click', () => {
    menu.classList.add('open');
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
  });