```
$ npm run test
```

```

> @ test /Users/freewind/workspace/javascript-karma-browserify-demo
> karma start karma.conf.js

04 09 2018 15:06:51.974:INFO [framework.browserify]: registering rebuild (autoWatch=true)
04 09 2018 15:06:53.363:INFO [framework.browserify]: 1400070 bytes written (0.64 seconds)
04 09 2018 15:06:53.385:INFO [framework.browserify]: bundle built
04 09 2018 15:06:53.394:WARN [karma]: No captured browser, open http://localhost:9876/
04 09 2018 15:06:53.397:INFO [karma]: Karma v3.0.0 server started at http://0.0.0.0:9876/
04 09 2018 15:06:53.398:INFO [launcher]: Launching browser Chrome with unlimited concurrency
04 09 2018 15:06:53.405:INFO [launcher]: Starting browser Chrome
04 09 2018 15:06:54.245:INFO [Chrome 68.0.3440 (Mac OS X 10.13.3)]: Connected on socket _F5m1CF_IlXGzPEcAAAA with id 97126419
Chrome 68.0.3440 (Mac OS X 10.13.3) hello should return hello words for a given name FAILED
        Expected 'Hello, Karma!' to be 'Hello, javascript!'.
            at <Jasmine>
            at UserContext.<anonymous> (/var/folders/3m/36g2fppj1s5g96jymg7hh9n40000gn/T/src/hello-test.js:6 <- /var/folders/3m/36g2fppj1s5g96jymg7hh9n40000gn/T/6b2cf564e8daa9b893685cddc80792b0.browserify:17117:32)
            at <Jasmine>
Chrome 68.0.3440 (Mac OS X 10.13.3): Executed 1 of 1 (1 FAILED) ERROR (0.049 secs / 0.005 secs)

```