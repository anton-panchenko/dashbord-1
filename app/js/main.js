// Указатель на активный пункт меню

document.querySelectorAll('.sidebar_nav__item')
    .forEach(e => {
        e.addEventListener('click', function () {
            document.querySelectorAll('.sidebar_nav__item')
                .forEach(every => {
                    every.classList.remove('active');
                });
            e.classList.add('active');
            document.querySelector('h1')
                .innerText = e.getAttribute('data-title');
        });
    });