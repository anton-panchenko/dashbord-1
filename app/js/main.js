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

// Кнопки выбора режима для диаграмм

document.querySelectorAll('.controls_singleBtn')
    .forEach(e => {
        e.addEventListener('click', function (event) {
            event.preventDefault();
            this.nextElementSibling.querySelectorAll('i')
                .forEach(every => {
                    every.classList.remove('i-active');
                });
            if (this.firstElementChild.innerHTML === 'Daily'){
                this.nextElementSibling.childNodes[1].childNodes[1].classList.add('i-active');
            }
            if (this.firstElementChild.innerHTML === 'Monthly'){
                this.nextElementSibling.childNodes[3].childNodes[1].classList.add('i-active');
            }
            if (this.firstElementChild.innerHTML === 'Yearly'){
                this.nextElementSibling.childNodes[5].childNodes[1].classList.add('i-active');
            }
            this.classList.remove('active');
            this.nextElementSibling.classList.add('shown');
        });
    });

document.querySelectorAll('.controls_chooseBtns__btn')
    .forEach(e => {
        e.addEventListener('click', function (event) {
            event.preventDefault();
            this.parentNode.previousElementSibling.firstElementChild.innerHTML = this.getAttribute('data-mode');
            this.parentNode.classList.remove('shown');
            this.parentNode.previousElementSibling.classList.add('active');
        });
    });