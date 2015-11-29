var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	reactify = require('reactify');

gulp.task('scripts', function(){
	gulp.src('client/gulp-react/src/app.js')
		.pipe(browserify({
			insertGlobals: false,
			debug: true,
			transform: [reactify]
		}))
		.pipe(gulp.dest('./client/gulp-react/dist/js'))
});

gulp.task('watch', function(){
	console.log('watch');
	gulp.watch(['client/gulp-react/src/**/*.js','client/gulp-react/components/**/*.jsx'], ['scripts']).on('change', function(event){
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('default', ['scripts', 'watch']);