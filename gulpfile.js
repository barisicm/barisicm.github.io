var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir:'./'
        }
    });
    //gledaj na promjene po svim poddirektorijima za sve html, js i css file-ove
    gulp.watch('**/*.html').on('change', reload);
    gulp.watch('**/*.js').on('change', reload);
    gulp.watch('**/*.css').on('change', reload);
});

