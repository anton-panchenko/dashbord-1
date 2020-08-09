// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');

// Подключаем Browsersync
const browserSync = require('browser-sync').create();

// Подключаем модули gulp-sass
const sass = require('gulp-sass');

// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');

// Подключаем gulp-imagemin для работы с изображениями
const imagemin = require('gulp-imagemin');

// Подключаем модуль gulp-newer
const newer = require('gulp-newer');

// Подключаем модуль del
const del = require('del');

// Определяем логику работы Browsersync
function browsersync() {
    browserSync.init({ // Инициализация Browsersync
        server: { baseDir: 'app/' }, // Указываем папку сервера
        notify: false, // Отключаем уведомления
        online: true // Режим работы: true или false
    })
}

function styles() {
    return src('app/sass/main.scss') // Выбираем источник: "app/sass/main.scss"
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
        .pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
        .pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function images() {
    return src('app/img/src/**/*') // Берём все изображения из папки источника
        .pipe(newer('app/img/dest/')) // Проверяем, было ли изменено (сжато) изображение ранее
        .pipe(imagemin()) // Сжимаем и оптимизируем изображеня
        .pipe(dest('app/img/dest/')) // Выгружаем оптимизированные изображения в папку назначения
}

function cleanimg() {
    return del('app/img/dest/**/*', { force: true }) // Удаляем всё содержимое папки "app/img/dest/"
}

function startwatch() {

    // Выбираем все файлы JS в проекте
    watch('app/**/*.js').on('change', browserSync.reload);

    // Мониторим файлы препроцессора на изменения
    watch('app/**/sass/**/*', styles);

    // Мониторим файлы HTML на изменения
    watch('app/**/*.html').on('change', browserSync.reload);

    // Мониторим папку-источник изображений и выполняем images(), если есть изменения
    watch('app/img/src/**/*', images);

}

// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
exports.browsersync = browsersync;

// Экспортируем функцию styles() в таск styles
exports.styles = styles;

// Экспорт функции images() в таск images
exports.images = images;

// Экспортируем функцию cleanimg() как таск cleanimg
exports.cleanimg = cleanimg;

// Экспортируем дефолтный таск с нужным набором функций
exports.default = parallel(styles, browsersync, startwatch);