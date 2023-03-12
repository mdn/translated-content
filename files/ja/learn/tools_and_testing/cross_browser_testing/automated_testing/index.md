---
title: 自動テストのイントロダクション
slug: Learn/Tools_and_testing/Cross_browser_testing/Automated_testing
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

1 日に数回、複数のブラウザーやデバイスで手動でテストを実行すると、面倒で時間がかかる場合があります。これを効率的に処理するには、自動化ツールに慣れておく必要があります。この記事では、利用可能なもの、タスクランナーの使い方、そして Sauce Labs や Browser Stack などの市販のブラウザーテスト自動化アプリケーションの基本的な使い方を見ていきます。

| 前提条件: | 主要な [HTML](/ja/docs/Learn/HTML)、[CSS](/ja/docs/Learn/CSS)、および [JavaScript](/ja/docs/Learn/JavaScript) 言語に精通していること。[クロスブラウザーテストの原則](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)の高水準のアイデア。 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目標:     | 自動テストにはどのようなものが含まれているのか、それがどのようにあなたの生活を楽にすることができるのか、そして物事を楽にするいくつかの商用製品をどのように利用するかの理解を提供する。                                                                      |

## Automation makes things easy

Throughout this module we have detailed loads of different ways in which you can test your websites and apps, and explained the sort of scope your cross-browser testing efforts should have in terms of what browsers to test, accessibility considerations, and more. Sounds like a lot of work, doesn't it?

We agree — testing all the things we've looked at in previous articles manually can be a real pain. Fortunately, there are tools to help us automate some of this pain away. There are two main ways in which we can automate the tests we've been talking about in this module:

1. Use a task runner such as [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/), or [npm scripts](https://docs.npmjs.com/misc/scripts) to run tests and clean up code during your build process. This is a great way to perform tasks like linting and minifying code, adding in CSS prefixes or transpiling nascent JavaScript features for maximum cross-browser reach, and so on.
2. Use a browser automation system like [Selenium](http://www.seleniumhq.org/) to run specific tests on installed browsers and return results, alerting you to failures in browsers as they crop up. Commercial cross-browser testing apps like [Sauce Labs](https://saucelabs.com/) and [Browser Stack](https://www.browserstack.com/) are based on Selenium, but allow you to access their set up remotely using a simple interface, saving you the hassle of setting up your own testing system.

We will look at how to set up your own Selenium-based testing system in the next article. In this article, we'll look at how to set up a task runner, and use the basic functionality of commercial systems like the ones mentioned above.

> **メモ:** the above two categories are not mutually exclusive. It is possible to set up a task runner to access a service like Sauce Labs via an API, run cross browser tests, and return results. We will look at this below as well.

## Using a task runner to automate testing tools

As we said above, you can drastically speed up common tasks such as linting and minifying code by using a task runner to run everything you need to run automatically at a certain point in your build process. For example, this could be every time you save a file, or at some other point. Inside this section we'll look at how to automate task running with Node and Gulp, a beginner-friendly option.

### Setting up Node and npm

Most tools these days are based on {{Glossary("Node.js")}}, so you'll need to install it from [nodejs.org](https://nodejs.org/):

1. Download the installer for your system from the above site. (If you already have Node and npm installed, jump to point 4)
2. Install it like you would any other program. Note that Node comes with [Node Package Manager](https://www.npmjs.com/) (npm), which allows you to easily install packages, share your own packages with others, and run useful scripts on your projects.
3. Once the install completes, test that node is installed by typing the following into the terminal, which returns the installed versions of Node and npm:

    ```bash
    node -v
    npm -v
    ```

4. If you've got Node/npm already installed, you should update them to their latest versions. To update Node, the most reliable way is to download and install an updated installer package from their website (see link above). To update npm, use the following command in your terminal:

    ```bash
    npm install npm@latest -g
    ```

> **メモ:** If the above command fails with permissions errors, [Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) should sort you out.

To start using Node/npm-based packages on your projects, you need to set up your project directories as npm projects. This is easy to do.

For example, let's first create a test directory to allow us to play without fear of breaking anything.

1. Create a new directory somewhere sensible with using your file manager UI, or by navigating to the location you want and running the following command:

    ```bash
    mkdir node-test
    ```

2. To make this directory an npm project, you just need to go inside your test directory and initialize it, with the following:

    ```bash
    cd node-test
    npm init
    ```

3. This second command will ask you many questions to find out the information required to set up the project; you can just select the defaults for now.
4. Once all the questions have been asked, it will ask you if the information entered is OK. type `yes` and press Enter/Return and npm will generate a `package.json` file in your directory.

This file is basically a config file for the project. You can customize it later, but for now it'll look something like this:

```json
{
  "name": "node-test",
  "version": "1.0.0",
  "description": "Test for npm projects",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "author": "Chris Mills",
  "license": "MIT"
}
```

With this, you are ready to move on.

### Setting up Gulp automation

Let's look at setting up Gulp and using it to automate some testing tools.

1. To begin with, create a test npm project using the procedure detailed at the bottom of the previous section.
2. Next, you'll need some sample HTML, CSS and JavaScript content to test your system on — make copies of our sample [index.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/automation/main.js), and [style.css](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/automation/style.css) files in a subfolder with the name `src` inside your project folder. You can try your own test content if you like, but bear in mind that such tools won't work on internal JS/CSS — you need external files.
3. First, install gulp globally (meaning, it will be available across all projects) using the following command:

    ```bash
    npm install --global gulp-cli
    ```

4. Next, run the following command inside your npm project directory root to set up gulp as a dependency of your project:

    ```bash
    npm install --save-dev gulp
    ```

5. Now create a new file inside your project directory called `gulpfile.js`. This is the file that will run all our tasks. Inside this file, put the following:

    ```js
    var gulp = require('gulp');

    gulp.task('default', function() {
      console.log('Gulp running');
    });
    ```

    This requires the `gulp` module we installed earlier, and then runs a basic task that does nothing except for printing a message to the terminal — this is useful for letting us know that Gulp is working. Each gulp task is written in the same basic format — `gulp`'s `task()` method is run, and given two parameters — the name of the task, and a callback function containing the actual code to run to complete the task.

6. You can run your gulp task with the following commands — try this now:

    ```bash
    gulp
    ```

### Adding some real tasks to Gulp

To add some real tasks to Gulp, we need to think about what we want to do. A reasonable set of basic functionalities to run on our project is as follows:

- html-tidy, css-lint, and js-hint to lint and report/fix common HTML/CSS/JS errors (see [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy/), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint/), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint/)).
- Autoprefixer to scan our CSS and add vendor prefixes only where needed (see [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer/)).
- babel to transpile any new JavaScript syntax features to traditional syntax that works in older browsers (see [gulp-babel](https://www.npmjs.com/package/gulp-babel/)).

See the links above for full instructions on the different gulp packages we are using.

To use each plugin, you need to first install it via npm, then require any dependencies at the top of the `gulpfile.js` file, then add your test(s) to the bottom of it, and finally add the name of your task inside the `default` task.

Before you go any further, update the default task to this:

```js
gulp.task('default', [ ]);
```

Inside the array goes the names of all the tasks you want Gulp to run, once you run the `gulp` command on the command line.

#### html-tidy

1. Install using the following line:

    ```bash
    npm install --save-dev gulp-htmltidy
    ```

    > **メモ:** `--save-dev` adds the package as a dependency to your project. If you look in your project's `package.json` file, you'll see an entry for it as, it has been added to the `devDependencies` property.

2. Add the following dependencies to `gulpfile.js`:

    ```js
    var htmltidy = require('gulp-htmltidy');
    ```

3. Add the following test to the bottom of `gulpfile.js`:

    ```js
    gulp.task('html', function() {
      return gulp.src('src/index.html')
            .pipe(htmltidy())
            .pipe(gulp.dest('build'));
    });
    ```

4. Add `'html'` as an item inside the array in the `default` task.

Here we are grabbing our development `index.html` file — `gulp.src()` which allows us to grab a source file to do something with.

We next use the `pipe()` function to pass that source to another command to do something else with. We can chain as many of these together as we want. We first run `htmltidy()` on the source, which goes through and fixes errors in our file. The second `pipe()` function writes the output HTML file to the `build` directory.

In the input version of the file, you may have noticed that we put an empty {{htmlelement("p")}} element; htmltidy has removed this by the time the output file has been created.

#### Autoprefixer and css-lint

1. Install using the following lines:

    ```bash
    npm install --save-dev gulp-autoprefixer
    npm install --save-dev gulp-csslint
    ```

2. Add the following dependencies to `gulpfile.js`:

    ```js
    var autoprefixer = require('gulp-autoprefixer');
    var csslint = require('gulp-csslint');
    ```

3. Add the following test to the bottom of `gulpfile.js`:

    ```js
    gulp.task('css', function() {
        return gulp.src('src/style.css')
            .pipe(csslint())
            .pipe(csslint.formatter('compact'))
            .pipe(autoprefixer({
                browsers: ['last 5 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('build'));
    });
    ```

4. Add `'css'` as an item inside the array in the `default` task.

Here we grab our `style.css` file, run csslint on it (which outputs a list of any errors in your CSS to the terminal), then runs it through autoprefixer to add any prefixes needed to make nascent CSS features run in older browsers. At the end of the pipe chain, we output our modified prefixed CSS to the `build`directory. Note that this only works if csslint doesn't find any errors — try removing a curly brace from your CSS file and re-running gulp to see what output you get!

#### js-hint and babel

1. Install using the following lines:

    ```
    npm install --save-dev gulp-babel @babel/preset-env
    npm install --save-dev @babel/core
    npm install jshint gulp-jshint --save-dev
    ```

2. Add the following dependencies to `gulpfile.js`:

    ```
    var babel = require('gulp-babel');
    var jshint = require('gulp-jshint');
    ```

3. Add the following test to the bottom of `gulpfile.js`:

    ```js
    gulp.task('js', function() {
        return gulp.src('src/main.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(gulp.dest('build'));
    });
    ```

4. Add `'js'` as an item inside the array in the `default` task.

Here we grab our `main.js` file, run `jshint` on it and output the results to the terminal using `jshint.reporter`; we then pass the file to babel, which converts it to old style syntax and outputs the result into the `build` directory. Our original code included a [fat arrow function](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions), which babel has modified into an old style function.

#### Further ideas

Once all this is all set up, you can run the `gulp` command inside your project directory, and you should get an output like this:

![](gulp-output.png)

You can then try out the files output by your automated tasks by looking at them inside the `build` directory, and loading `build/index.html` in your web browser.

If you get errors, check that you've added all the dependencies and the tests as shown above; also try commenting out the HTML/CSS/JavaScript code sections and then rerunning gulp to see if you can isolate what the problem is.

Gulp comes with a `watch()` function that you can use to watch your files and run tests whenever you save a file. For example, try adding the following to the bottom of your `gulpfile.js`:

```js
gulp.task('watch', function(){
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/*.css', ['css']);
  gulp.watch('src/*.js', ['js']);
});
```

Now try entering the `gulp watch` command into your terminal. Gulp will now watch your directory, and run the appropriate tasks whenever you save a change to an HTML, CSS, or JavaScript file.

> **メモ:** The `*` character is a wildcard character — here we're saying "run these tasks when any files of these types are saved. You could also use wildcards in your main tasks, for example `gulp.src('src/*.css')` would grab all your CSS files and then run piped tasks on them.

> **メモ:** One problem with our watch command above is that our CSSLint/Autoprefixer combination throws full-blown errors when a CSS error is encountered, which stops the watch working. You'll have to restart the watch once a CSS error is encountered, or find another way to do this.

There's a lot more you can do with Gulp. The [Gulp plugin directory](http://gulpjs.com/plugins/) has literally thousands of plugins to search through.

### Other task runners

There are many other task runners available. We certainly aren't trying to say that Gulp is the best solution out there, but it works for us and it is fairly accessible to beginners. You could also try using other solutions:

- Grunt works in a very similar way to Gulp, except that it relies on tasks specified in a config file, rather than using written JavaScript. See [Getting started with Grunt for more details.](http://gruntjs.com/getting-started)
- You can also run tasks directly using npm scripts located inside your `package.json` file, without needing to install any kind of extra task runner system. This works on the premise that things like Gulp plugins are basically wrappers around command line tools. So, if you can work out how to run the tools using the command line, you can then run them using npm scripts. It is a bit trickier to work with, but can be rewarding for those who are strong with their command line skills.[Why npm scripts?](https://css-tricks.com/why-npm-scripts/) provides a good introduction with a good deal of further information.

## Using commercial testing services to speed up browser testing

Now let's look at commercial 3rd party browser testing services and what they can do for us.

The basic premise with such applications is that the company that runs each one has a huge server farm that can run many different tests. When you use this service, you provide a URL of the page you want to test along with information, such as what browsers you want it tested in. The app then configures a new VM with the OS and browser you specified, and returns the test results in the form of screenshots, videos, logfiles, text, etc.

You can then step up a gear, using an API to access functionality programmatically, which means that such apps can be combined with task runners, such as your own local Selenium environments and others, to create automated tests.

> **メモ:** There are other commercial browser testing systems available but in this article, we'll focus on Sauce Labs and BrowserStack. We're not saying that these are necessarily the best tools available, but they are good ones that are simple for beginners to get up and running with.

### Sauce Labs

#### Getting started with Sauce Labs

Let's get started with a Sauce Labs Trial.

1. Create a [Sauce Labs trial account](https://saucelabs.com/signup/trial).
2. Sign in. This should happen automatically after you verify your e-mail address.

#### The basics: Manual tests

The [Sauce Labs dashboard](https://saucelabs.com/beta/dashboard/manual) has a lot of options available on it. For now, make sure you are on the _Manual Tests_ tab.

1. Click _Start a new manual session_.
2. In the next screen, type in the URL of a page you want to test (use <http://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>, for example), then choose a browser/OS combination you want to test by using the different buttons and lists. There is a lot of choice, as you'll see! ![](sauce-manual-session.png)
3. When you click Start session, a loading screen will then appear, which spins up a virtual machine running the combination you chose.
4. When loading has finished, you can then start to remotely test the web site running in the chosen browser. ![](sauce-test-running.png)
5. From here you can see the layout as it would look in the browser you are testing, move the mouse around and try clicking buttons, etc. The top menu allows you to:

    - Stop the session
    - Give someone else a URL so they can observe the test remotely.
    - Copy text/notes to a remote clipboard.
    - Take a screenshot.
    - Test in full screen mode.

Once you stop the session, you'll return to the Manual Tests tab, where you'll see an entry for each of the previous manual sessions you started. Clicking on one of these entries shows more data for the session. In here you can download any screenshots you took , watch a video of the session, and view data logs for the session for example.

> **メモ:** This is already very useful, and way more convenient than having to set up all these emulators and virtual machines by yourself.

#### Advanced: The Sauce Labs API

Sauce Labs has a [restful API](https://wiki.saucelabs.com/display/DOCS/The+Sauce+Labs+REST+API) that allows you to programmatically retrieve details of your account and existing tests, and annotate tests with further details, such as their pass/fail state which isn't recordable by manual testing alone. For example, you might want to run one of your own Selenium tests remotely using Sauce Labs, to test a certain browser/OS combination, and then pass the test results back to Sauce Labs.

It has several clients available to allow you to make calls to the API using your favourite environment, be it PHP, Java, Node.js, etc.

Let's have a brief look at how we'd access the API using Node.js and [node-saucelabs](https://github.com/saucelabs/node-saucelabs).

1. First, set up a new npm project to test this out, as detailed in [Setting up Node and npm](#setting_up_node_and_npm). Use a different directory name than before, like `sauce-test` for example.
2. Install the Node Sauce Labs wrapper using the following command:

    ```
    npm install saucelabs
    ```

3. Create a new file inside your project root called `call_sauce.js`. give it the following contents:

    ```js
    var SauceLabs = require('saucelabs');

    var myAccount = new SauceLabs({
      username: "your-sauce-username",
      password: "your-sauce-api-key"
    });

    myAccount.getAccountDetails(function (err, res) {
      console.log(res);
      myAccount.getServiceStatus(function (err, res) {
        // Status of the Sauce Labs services
        console.log(res);
        myAccount.getJobs(function (err, jobs) {
          // Get a list of all your jobs
          for (var k in jobs) {
            if ( jobs.hasOwnProperty( k )) {
              myAccount.showJob(jobs[k].id, function (err, res) {
                var str = res.id + ": Status: " + res.status;
                if (res.error) {
                  str += "\033[31m Error: " + res.error + " \033[0m";
                }
                console.log(str);
              });
            }
          }
        });
      });
    });
    ```

4. You'll need to fill in your Sauce Labs username and API key in the indicated places. These can be retrieved from your [User Settings](https://saucelabs.com/beta/user-settings) page. Fill these in now.
5. Make sure everything is saved, and run your file like so:

    ```bash
    node call_sauce
    ```

#### Advanced: Automated tests

We'll cover actually running automated Sauce Lab tests in the next article.

### BrowserStack

#### Getting started with BrowserStack

Let's get started with a BrowserStack Trial.

1. Create a [BrowserStack trial account](https://www.browserstack.com/users/sign_up).
2. Sign in. This should happen automatically after you verify your e-mail address.
3. When you first sign in, you should be on the Live testing page; if not, click the _Live_ link in the top nav menu.
4. If you are on Firefox or Chrome, you'll be prompted to Install a browser extension in a dialog titled "Enable Local Testing" — click the _Install_ button to proceed. If you are on other browsers you'll still be able to use some of the features (generally via Flash), but you won't get the full experience.

#### The basics: Manual tests

The BrowserStack Live dashboard allows you to choose what device and browser you want to test on — Platforms in the left column, devices on the right. When you mouse over or click on each device, you get a choice of browsers available on that device.

![](browserstack-test-choices-sized.png)

Clicking on one of those browser icons will load up your choice of platform/device/browser — choose one now, and give it a try.

![](browserstack-test-device-sized.png)

> **メモ:** The blue device icon next to some of the mobile device choices signals that you will be testing on a real device; choices without that icon will be run on an emulator.

You'll find that you can enter URLs into the address bar, and use the other controls like you'd expect on a real device. You can even do things like copy and paste from the device to your clipboard, scroll up and down by dragging with the mouse, or use appropriate gestures (e.g. pinch/zoom, two fingers to scroll) on the touchpads of supporting devices (e.g. Macbook). Note that not all features are available on all devices.

You'll also see a menu that allows you to control the session.

![](browserstack-test-menu-sized.png)

The features here are as follows:

- _Switch_ — Change to another platform/device/browser combination.
- Orientation (looks like a Reload icon) — Switch orientation between portrait and landscape.
- Fit to screen (looks like a full screen icon) — Fill the testing areas as much as possible with the device.
- Capture a bug (looks like a camera) — Takes a screenshot, then allows you to annotate and save it.
- Issue tracker (looks like a deck of cards) — View previously captured bugs/screenshots.
- Settings (cog icon) — Allows you to alter general settings for the session.
- Help (question mark) — Accesses help/support functions.
- _Devtools_ — Allows you to use your browser's devtools to directly debug or manipulate the page being shown in the test browser. This currently only works when testing the Safari browser on iOS devices.
- _Device info_ — Displays information about the testing device.
- _Features_ — Shows you what features the current configuration supports, e.g. copy to clipboard, gesture support, etc.
- _Stop_ — Ends the session.

> **メモ:** This is already very useful, and way more convenient than having to set up all these emulators and virtual machines by yourself.

#### Other basic features

If you go back to the main BrowserStack page, you'll find a couple of other useful basic features under the _More_ menu option:

- _Responsive_: Enter a URL and press _Generate_, and BrowserStack will load that URL on multiple devices with different viewport sizes. Within each device you can further adjust settings like monitor size, to get a good idea of how your site's layout works across different form factors.
- _Screenshots_: Enter a URL, choose the browsers/devices/platforms you are interested in, then press _Generate screenshots_ — Browserstack will take screenshots of your site in all those different browsers then make them available to you to view and download.

#### Advanced: The BrowserStack API

BrowserStack also has a [restful API](https://www.browserstack.com/automate/rest-api) that allows you to programmatically retrieve details of your account plan, sessions, builds, etc.

It has several clients available to allow you to make calls to the API using your favourite environment, be it PHP, Java, Node.js, etc.

Let's have a brief look at how we'd access the API using Node.js.

1. First, set up a new npm project to test this out, as detailed in [Setting up Node and npm](#setting_up_node_and_npm). Use a different directory name than before, like `bstack-test` for example.
2. Create a new file inside your project root called `call_bstack.js`. give it the following contents:

    ```js
    var request = require("request");

    var bsUser = "BROWSERSTACK_USERNAME";
    var bsKey = "BROWSERSTACK_ACCESS_KEY";
    var baseUrl = "https://" + bsUser + ":" + bsKey + "@www.browserstack.com/automate/";

    function getPlanDetails(){
        request({uri: baseUrl + "plan.json"}, function(err, res, body){
            console.log(JSON.parse(body));
        });
        /* Response:
        {
            automate_plan: <string>,
            parallel_sessions_running: <int>,
            team_parallel_sessions_max_allowed: <int>,
            parallel_sessions_max_allowed: <int>,
            queued_sessions: <int>,
            queued_sessions_max_allowed: <int>
        }
        */
    }

    getPlanDetails();
    ```

3. You'll need to fill in your BrowserStack username and API key in the indicated places. These can be retrieved from your [BrowserStack automation dashboard](https://www.browserstack.com/automate). Fill these in now.
4. Make sure everything is saved, and run your file like so:

    ```bash
    node call_bstack
    ```

Below we've also provided some other ready-made functions you might find useful when working with the BrowserStack restful API.

```js
function getBuilds(){
  request({uri: baseUrl + "builds.json"}, function(err, res, body){
    console.log(JSON.parse(body));
  });
  /* Response:
  [
    {
      automation_build: {
        name: <string>,
        duration: <int>,
        status: <string>,
        hashed_id: <string>
      }
    },
    {
      automation_build: {
        name: <string>,
        duration: <int>,
        status: <string>,
        hashed_id: <string>
      }
    },
    ...
  ]
  */
};

function getSessionsInBuild(build){
  var buildId = build.automation_build.hashed_id;
  request({uri: baseUrl + "builds/" + buildId + "/sessions.json"}, function(err, res, body){
    console.log(JSON.parse(body));
  });
  /* Response:
  [
    {
      automation_session: {
        name: <string>,
        duration: <int>,
        os: <string>,
        os_version: <string>,
        browser_version: <string>,
        browser: <string>,
        device: <string>,
        status: <string>,
        hashed_id: <string>,
        reason: <string>,
        build_name: <string>,
        project_name: <string>,
        logs: <string>,
        browser_url: <string>,
        public_url: <string>,
        video_url: <string>,
        browser_console_logs_url: <string>,
        har_logs_url: <string>
      }
    },
    {
      automation_session: {
        name: <string>,
        duration: <int>,
        os: <string>,
        os_version: <string>,
        browser_version: <string>,
        browser: <string>,
        device: <string>,
        status: <string>,
        hashed_id: <string>,
        reason: <string>,
        build_name: <string>,
        project_name: <string>,
        logs: <string>,
        browser_url: <string>,
        public_url: <string>,
        video_url: <string>,
        browser_console_logs_url: <string>,
        har_logs_url: <string>
      }
    },
    ...
  ]
  */
}

function getSessionDetails(session){
  var sessionId = session.automation_session.hashed_id;
  request({uri: baseUrl + "sessions/" + sessionId + ".json"}, function(err, res, body){
    console.log(JSON.parse(body));
  });
  /* Response:
  {
    automation_session: {
      name: <string>,
      duration: <int>,
      os: <string>,
      os_version: <string>,
      browser_version: <string>,
      browser: <string>,
      device: <string>,
      status: <string>,
      hashed_id: <string>,
      reason: <string>,
      build_name: <string>,
      project_name: <string>,
      logs: <string>,
      browser_url: <string>,
      public_url: <string>,
      video_url: <string>,
      browser_console_logs_url: <string>,
      har_logs_url: <string>
    }
  }
  */
}
```

#### Advanced: Automated tests

We'll cover actually running automated BrowserStack tests in the next article.

## Summary

This was quite a ride, but I'm sure you can start to see the benefit in having automation tools do a lot of the heavy lifting for you in terms of testing.

In the next article, we'll look at setting up our own local automation system using Selenium, and how to combine that with services such as Sauce Labs and BrowserStack

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

## In this module

- [Introduction to cross browser testing](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
- [Strategies for carrying out testing](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
- [Handling common HTML and CSS problems](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [Handling common JavaScript problems](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
- [Handling common accessibility problems](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
- [Implementing feature detection](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- [Introduction to automated testing](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
- [Setting up your own test automation environment](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
