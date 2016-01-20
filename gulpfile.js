var gulp = require('gulp'), //Gulp
    less = require('gulp-less'), //Less
    cssmin = require('gulp-minify-css'); //压缩

//less编译任务
gulp.task('Less', function(){
    gulp.src('src/less/*.less')
        .pipe(less())
        // .pipe(cssmin())
        .pipe(gulp.dest('src/css'));
});

//监听任务
gulp.task('Watch', function(){
    console.log('hahahah');
    gulp.watch('src/**/*.less', ['Less']);
});

// 默认的任务
gulp.task('default', ['Less'], function(){
    console.log('Gulp end！');
});