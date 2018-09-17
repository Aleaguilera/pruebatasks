const gulp = require ('gulp'),
  sass = require ('gulp-sass'),
  pug = require ('gulp-pug'),
  autoprefixer = require ('gulp-autoprefixer');

// TASKS

gulp.task ('sass', ()=>
  gulp.src('./scss/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./css'))
);

gulp.task('pug', ()=>
  gulp.src('./dev/views/!(_)*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'))
);

gulp.task('watch', function () {
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./dev/views/**/*.pug', ['pug']);
});

gulp.task('default', ['sass','pug', 'watch']);


// ./filename busca en el primer directorio
// ./filename/*.scss/ busca cualquier archivos que estén en filename con la extesión
// ./filename/**/*.scss busco en todas las subcarpetas los archivos con esa extension
