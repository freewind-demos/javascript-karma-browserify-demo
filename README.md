JavaScript Karma Browserify Demo
================================

如果JS代码中使用了CommonJS规范，那么需要在Karma中使用`browserify`插件才能正常运行。

在跑测试前，`browserify`会自动将测试文件进行转换。

```
npm install
npm run demo
```

注意
---

当使用`browserify`插件时，`karma.conf.js`中的`files`不应该再包含功能文件，只需要包含测试文件即可，因为`browserify`插件会自动对代码进行转换和打包。

如果包含了功能文件，一是完全没有必要，二是因为如果没有处理好（比如没有使用`browserify`进行预处理），还会产生其它的错误，比如require的module不存在，等等。