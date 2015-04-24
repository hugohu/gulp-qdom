gulp-qdom
===============

可以在gulp中已jquery的语法来操作dom 最后输出结果.
相关语法说明请参考:
**cheerio**

https://github.com/cheeriojs/cheerio

打包说明
```js
var gulp = require('gulp');
var qdom = require("gulp-qdom");
//打包用    
gulp.task('build', function() {
  return gulp.src('./*.html')
    .pipe(qdom(function($) {
      //这里可以用jquery语法来操作.
      //$("link").attr("href", "1111");

    }))
    .pipe(gulp.dest('./dist'));
});
```

比如替换链接什么的操作 输出修改过后的html.