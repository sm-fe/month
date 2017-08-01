const gulp = require("gulp");
const deploy = require("gulp-gh-pages");

gulp.task('deploy', function () {
	return gulp.src("_book/**/*.*")
		.pipe(deploy({
			remoteUrl: "https://github.com/sm-fe/month"
		}))
		.on("error", function(err){
	    	console.log(err)
	    });
});
