const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cssmin = require("gulp-cssmin");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const del = require("del");
const webserver = require('gulp-webserver');
const htmlHandler = () => {
    return gulp.src("./src/views/*.html")
        .pipe(htmlmin({
            removeAttributeQuotes: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
        }))
        .pipe(gulp.dest("./dist/views"));
}

// const sass = require('gulp-sass');
const cssHandler = () => {
    return gulp.src("./src/css/*.css")
        // .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/css"));

}


const jsHandler = () => {
    return gulp.src("./src/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"));
}


const imgHandler = () => {
    return gulp.src("./src/img/**")
        .pipe(gulp.dest("./dist/img"));
}
const jsonHandler = () => {
    return gulp.src("./src/json/**")
        .pipe(gulp.dest("./dist/json"));
}

const libHandler = () => {
    return gulp.src("./src/lib/**")
        .pipe(gulp.dest("./dist/lib"));
}


const delHandler = () => {
    return del(["./dist"]);
}


const serverHandler = () => {
    return gulp.src('./dist')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            open: './views/login.html',
            livereload: true,
            proxies: [{
                    source: '/gx',
                    target: 'http://localhost:80/register.php'
                },
                {
                    source: '/gx2',
                    target: 'http://localhost:80/login.php'
                }
            ]
        }))
}


const watchHandler = () => {
    gulp.watch("./src/css/*.css", cssHandler);
    gulp.watch("./src/views/*.html", htmlHandler);
    gulp.watch("./src/js/*.js", jsHandler);
    gulp.watch("./src/img/**", imgHandler);
    gulp.watch("./src/lib/**", libHandler);
}

module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(cssHandler, jsHandler, htmlHandler, imgHandler, libHandler, jsonHandler),
    serverHandler,
    watchHandler
)