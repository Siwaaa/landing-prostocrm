const {src, dest, series, parallel, watch} = require('gulp')
const sass = require('gulp-sass')
const postCss = require('gulp-postcss')
const autoPrefixer = require('autoprefixer')
const ccsnano = require('cssnano')
// const csso = require('gulp-csso')
const pug = require('gulp-pug')
const htmlmin = require('gulp-htmlmin')
const include = require('gulp-file-include')
const babel = require('gulp-babel')
const replace = require('gulp-replace')
const del = require('del')
const sync = require('browser-sync')
const imagemin = require('gulp-imagemin')
const nested = require('postcss-nested')
const postcssCustomMedia = require('postcss-custom-media');


// HTML

function html() {
  return src('src/*.html') 
    .pipe(include({
      prefix: '@'
    }))
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true
    }))
    .pipe(dest('build'))
    .pipe(sync.stream())
}
function htmlPug() {
  return src(['src/index.pug', 'src/thanks.pug'])
    .pipe(pug())
    .pipe(dest('./build'));
}

// STYLES
const plagins = [nested, postcssCustomMedia, autoPrefixer({overrideBrowserslist: ['last 3 version']}), ccsnano]

function styles() {
  return src('src/css/*.css')
    .pipe(postCss(plagins))
    .pipe(dest('build/css/'))
    .pipe(sync.stream())
}

// SCRIPTS

function scripts() {
  return src('src/js/*.js')
    .pipe(babel())
    .pipe(dest('build/js/'))
    .pipe(sync.stream())
}

// IMG MIN

function imgmin() {
  return src('src/img/*')
    .pipe(imagemin())
    .pipe(dest('build/img/'))
}

// FONTS

function fonts() {
  return src('src/fonts/*')
    .pipe(dest('build/fonts/'))
}

// ASSETS 
function assets() {
  return src('src/assets/*')
  .pipe(dest('build/'))
}


function clean() {
  return del('build')
}

function serve() {
  sync.init({
    server: './build'
  })

  // watch(['src/*.html', 'src/blocks/*.html'], html)
  watch(['src/*.pug'], htmlPug)
  watch('src/css/*.css', styles)
  watch('src/js/*.js', scripts)
}

// ** EXPORTS **
exports.build = series(
  clean,
  parallel(htmlPug, styles, scripts, imgmin, fonts, assets)
)

exports.serve = series(
  clean,
  parallel(htmlPug, styles, scripts, imgmin, fonts, assets),
  serve
)