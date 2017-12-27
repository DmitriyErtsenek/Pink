var gulp       = require('gulp'), 
  less         = require('gulp-less'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	mozjpeg      = require('imagemin-mozjpeg'),
	cache        = require('gulp-cache'),
  autoprefixer = require('gulp-autoprefixer'),
  plumber      = require('gulp-plumber'),
  svgstore     = require('gulp-svgstore'),
  svgmin       = require('gulp-svgmin'),
  debug        = require('gulp-debug');
	

gulp.task('symbols', function() {
	return gulp.src('app/svg/*.svg')
		.pipe(svgmin())
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename('symbols.svg'))
		.pipe(gulp.dest('app/img/sprite'));
});


gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/owl.carousel/dist/owl.carousel.min.js',
        'app/libs/jRange/jquery.range-min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});


gulp.task('css-libs', ['less'], function() {
    return gulp.src('app/css/libs.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'));
});

gulp.task('less', function() {
	return gulp.src('app/less/main.less')
	.pipe(plumber(function(error)
	{
		console.log(error);
		this.emit('end');
	}))	
	.pipe(less())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8'], { cascade: true }))
	.pipe(cssnano())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});


gulp.task('clean', function() {
    return del.sync('dist');
});


gulp.task('clear', function() {
    return cache.clear.clearAll();
});


gulp.task('img', function() {
    return gulp.src('app/img/*.*')
    		.pipe(debug({title: 'unicorn:'}))
        .pipe(imagemin([
            pngquant({
      						quality: '95'
            }),
            mozjpeg({
            			progressive: true,
            			quality: '85'
            })
        ],{
            verbose: true
        }))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/less/**/*.less', ['less']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'less', 'scripts'], function() {

    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css'
    ])
    .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});