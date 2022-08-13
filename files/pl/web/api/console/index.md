---
title: Console
slug: Web/API/Console
translation_of: Web/API/Console
---
{{APIRef}}{{Non-standard_header}}

The `console` object provides access to the browser's debugging console (e.g. the [Web Console](/pl/docs/Tools/Web_Console) in Firefox). The specifics of how it works vary from browser to browser, but there is a _de facto_ set of features that are typically provided.

The `console` can be accessed from any global object, {{domxref("Window")}} on browsing scopes, {{domxref("WorkerGlobalScope")}} and its specific variants in workers.

This page documents the [Methods](#methods) available on the `console` object and gives a few [Usage](#usage) examples.

## Methods

- {{domxref("Console.assert()")}}
  - : Log a message and stack trace to console if first argument is `false`.
- {{domxref("Console.count()")}}
  - : Log the number of times this line has been called with the given label.
- {{domxref("Console.debug()")}} {{deprecated_inline}}
  - : An alias for `log()`; this was added to improve compatibility with existing sites already using `debug()`. However, you should use {{domxref("console.log()")}} instead.
- {{domxref("Console.dir()")}}
  - : Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.
- {{domxref("Console.error()")}}
  - : Outputs an error message. You may use [string substitution](/pl/docs/Web/API/console#Using_string_substitutions) and additional arguments with this method.
- {{domxref("Console._exception()")}}
  - : An alias for `error();`
- {{domxref("Console.group()")}}
  - : Creates a new inline [group](/pl/docs/Web/API/console#Using_groups_in_the_console), indenting all following output by another level. To move back out a level, call `groupEnd()`.
- {{domxref("Console.groupCollapsed()")}}
  - : Creates a new inline [group](/pl/docs/Web/API/console#Using_groups_in_the_console), indenting all following output by another level; unlike `group()`, this starts with the inline group collapsed, requiring the use of a disclosure button to expand it. To move back out a level, call `groupEnd()`.
- {{domxref("Console.groupEnd()")}}
  - : Exits the current inline [group](/pl/docs/Web/API/console#Using_groups_in_the_console).
- {{domxref("Console.info()")}}
  - : Informative logging information. You may use [string substitution](/pl/docs/Web/API/console#Using_string_substitutions) and additional arguments with this method.
- {{domxref("Console.log()")}}
  - : For general output of logging information. You may use [string substitution](/pl/docs/Web/API/console#Using_string_substitutions) and additional arguments with this method.
- {{domxref("Console.profile()")}}
  - : Starts the [JavaScript profiler](/pl/docs/Tools/Profiler). You can specify an optional label for the profile.
- {{domxref("Console.profileEnd()")}}
  - : Stops the profiler. You can see the resulting profile in the [JavaScript profiler](/pl/docs/Tools/Profiler).
- {{domxref("Console.table()")}}
  - : Displays tabular data as a table.
- {{domxref("Console.time()")}}
  - : Starts a [timer](/pl/docs/Web/API/console#Timers) with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.
- {{domxref("Console.timeEnd()")}}
  - : Stops the specified [timer](/pl/docs/Web/API/console#Timers) and logs the elapsed time in seconds since its start.
- {{domxref("Console.trace()")}}
  - : Outputs a [stack trace](/pl/docs/Web/API/console#Stack_traces).
- {{domxref("Console.warn()")}}
  - : Outputs a warning message. You may use [string substitution](/pl/docs/Web/API/console#Using_string_substitutions) and additional arguments with this method.

## Usage

### Outputting text to the console

The most frequently-used feature of the console is logging of text and other data. There are four categories of output you can generate, using the {{domxref("console.log()")}}, {{domxref("console.info()")}}, {{domxref("console.warn()")}}, and {{domxref("console.error()")}} methods. Each of these results in output that's styled differently in the log, and you can use the filtering controls provided by your browser to only view the kinds of output that interest you.

There are two ways to use each of the output methods; you can simply pass in a list of objects whose string representations get concatenated into one string then output to the console, or you can pass in a string containing zero or more substitution strings followed by a list of the objects with which to replace them.

#### Outputting a single object

The simplest way to use the logging methods is to output a single object:

```js
var someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

The output looks something like this:

    [09:27:13.475] ({str:"Some text", id:5})

#### Outputting multiple objects

You can also output multiple objects by simply listing them when calling the logging method, like this:

```js
var car = "Dodge Charger";
var someObject = {str:"Some text", id:5};
console.info("My first car was a", car, ". The object is: ", someObject);
```

This output will look like this:

    [09:28:22.711] My first car was a Dodge Charger . The object is:  ({str:"Some text", id:5})

#### Using string substitutions

Gecko 9.0 {{geckoRelease("9.0")}} introduced support for string substitutions. When passing a string to one of the console object's methods that accepts a string, you may use these substitution strings:

| Substitution string | Description                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| %o                  | Outputs a hyperlink to a JavaScript object. Clicking the link opens an inspector. |
| %d or %i            | Outputs an integer. Formatting is not yet supported.                              |
| %s                  | Outputs a string.                                                                 |
| %f                  | Outputs a floating-point value. Formatting is not yet supported.                  |

Each of these pulls the next argument after the format string off the parameter list. For example:

    for (var i=0; i<5; i++) {
      console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
    }

The output looks like this:

    [13:14:13.481] Hello, Bob. You've called me 1 times.
    [13:14:13.483] Hello, Bob. You've called me 2 times.
    [13:14:13.485] Hello, Bob. You've called me 3 times.
    [13:14:13.487] Hello, Bob. You've called me 4 times.
    [13:14:13.488] Hello, Bob. You've called me 5 times.

#### Styling console output

You can use the `"%c"` directive to apply a CSS style to console output:

```js
console.log("%cMy stylish message", "color: red; font-style: italic");
```

![](https://mdn.mozillademos.org/files/7739/console-style.png)

You can use nested groups to help organize your output by visually combining related material. To create a new nested block, call `console.group()`. The `console.groupCollapsed()` method is similar, but creates the new block collapsed, requiring the use of a disclosure button to open it for reading.

> **Note:** Collapsed groups are not supported yet in Gecko; the `groupCollapsed()` method is the same as `group()` at this time.

> **Note:** To exit the current group, simply call `console.groupEnd()`.

> **Note:** For example, given this code:

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level");
```

The output looks like this:

![nesting.png](/@api/deki/files/6082/=nesting.png)

In order to calculate the duration of a specific operation, Gecko 10 introduced the support of timers in the `console` object. To start a timer, call the ` console.time``() ` method, giving it a name as only parameter. To stop the timer, and to get the elapsed time in miliseconds, just call the `console.timeEnd()` method, again passing the timer's name as the parameter. Up to 10,000 timers can run simultaneously on a given page.

For example, given this code:

```js
console.time("answer time");
alert("Click to continue");
console.timeEnd("answer time");
```

will log the time needed by the user to discard the alert box:

![timerresult.png](/@api/deki/files/6084/=timerresult.png)

Notice that the timer's name is displayed both when the timer is started and when it's stopped.

> **Note:** It's important to note that if you're using this to log the timing for network traffic, the timer will report the total time for the transaction, while the time listed in the network panel is just the amount of time required for the header. If you have response body logging enabled, the time listed for the response header and body combined should match what you see in the console output.

### Stack traces

The console object also supports outputting a stack trace; this will show you the call path taken to reach the point at which you call {{domxref("console.trace()")}}. Given code like this:

    foo();

    function foo() {
      function bar() {
        console.trace();
      }
      bar();
    }

The output in the console looks something like this:

![](https://mdn.mozillademos.org/files/7167/api-trace2.png)

## Notes

- At least in Firefox, if a page defines a console object, that object overrides the one built into Firefox.
- Prior to {{Gecko("12.0")}}, the console object's methods only work when the Web Console is open. Starting with {{Gecko("12.0")}}, output is cached until the Web Console is opened, then displayed at that time.
- It's worth noting that the Firefox's built-in `console` object is compatible with the one provided by [Firebug](http://getfirebug.com/).

## See also

- [Tools](/pl/docs/Tools "Tools")
- [Web Console](/pl/docs/Tools/Web_Console "Web Console") - how the Web Console in Firefox handles console API calls
- [Remote debugging](/pl/docs/Tools/Remote_Debugging) - how to see console output when the debugging target is a mobile device
- [Debugging apps on Firefox OS](/en-US/Firefox_OS/Using_the_App_Manager) - using the App Manager to debug apps running on Firefox OS
- [On-device console logging](/pl/docs/Mozilla/Firefox_OS/Debugging/On-device_console_logging) - how to do logging on Firefox OS devices

### Other implementations



- [Google Chrome DevTools](https://developers.google.com/chrome-developer-tools/docs/console-api);
- [Firebug](http://getfirebug.com/wiki/index.php/Console_API);
- [Internet Explorer](<http://msdn.microsoft.com/en-us/library/hh772173(v=vs.85).aspx>);
- [Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html).
