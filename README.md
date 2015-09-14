gulp-qdom
===============

Gulp plugin to preprocess HTML. use jquery grammar.

Description please refer to the related grammar:
**<a href="https://github.com/cheeriojs/cheerio">cheerio</a> **

https://github.com/cheeriojs/cheerio

## Usage

### Install

```
npm install gulp-qdom
```


## Examples

#### Gulpfile
```js
var gulp = require('gulp');
var qdom = require("gulp-qdom");
//打包用    
gulp.task('build', function() {
  return gulp.src('./*.html')
    .pipe(qdom(function($) {
      //这里可以用jquery语法来操作.
      //$("link").attr("href", "test");

    }))
    .pipe(gulp.dest('./dist'));
});
```

## LICENSE

The MIT License (MIT)

Copyright (c) 2014 Jason Sandmeyer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.