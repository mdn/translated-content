---
title: Synchronous and asynchronous requests
slug: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
---
`XMLHttpRequest` 는 동기적 통신과 비동기적 통신을 모두 지원합니다. 하지만, 일반적으로는 성능상의 이유로 인하여 비동기적 요청이 동기적 요청보다 우선시 되어야 합니다.

동기 요청은 코드 실행을 차단하여 화면에 “얼어붙어” 버리고 응답하지 없는 사용자 경험을 만듭니다.

## Asynchronous request

만약 `XMLHttpRequest`을 비동기적으로 사용한다면, 데이터가 도착했을때 콜백을 받게 될겁니다. 이렇게하면 요청이 처리되는 동안 브라우저는 여전히 정상적으로 동작 할 수 있습니다.

### Example: send a file to the console log

다음은 비동기적 `XMLHttpRequest`의 간단한 사용법입니다.

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
```

두번째 줄에서 세번째 파라미터가 `true` 로 지정되면 요청이 비동기적으로 처리 된다는 선언입니다.

Line 3 creates an event handler function object and assigns it to the request's `onload` attribute. This handler looks at the request's `readyState` to see if the transaction is complete in line 4 and if it is, and the HTTP status is 200, dumps the received content. If an error occurred, an error message is displayed.

15번째 줄에서 실제 요청이 시작됩니다. 콜백 루틴은 이 요청의 상태가 변경 될 때 마다 호출됩니다.

### Example: creating a standard function to read external files

In some cases, you must read many external files. This is a standard function which uses the `XMLHttpRequest` object asynchronously in order to switch the content of the read file to a specified listener.

```js
function xhrSuccess() {
    this.callback.apply(this, this.arguments);
}

function xhrError() {
    console.error(this.statusText);
}

function loadFile(url, callback /*, opt_arg1, opt_arg2, ... */) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
    xhr.arguments = Array.prototype.slice.call(arguments, 2);
    xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
    xhr.send(null);
}
```

Usage:

```js
function showMessage(message) {
    console.log(message + this.responseText);
}

loadFile("message.txt", showMessage, "New message!\n\n");
```

The signature of the utility function _**loadFile**_ declares (i) a target URL to read (via HTTP GET), (ii) a function to execute on successful completion of the XHR operation, and (iii) an arbitrary list of additional arguments that are "passed through" the XHR object to the success callback function.

Line 1 declares a function invoked when the XHR operation completes successfully. It, in turn, invokes the callback function specified in the invocation of the loadFile function (in this case, the function showMessage) which has been assigned to a property of the XHR object (Line 11). The additional arguments (if any) supplied to the invocation of function loadFile are "applied" to the running of the callback function.

Line 5 declares a function invoked when the XHR operation fails to complete successfully.

Line 11 stores on the XHR object the success callback function is given as the second argument to loadFile.

Line 12 slices the arguments array given to the invocation of _loadFile_. Starting with the third argument, all remaining arguments are collected, assigned to the arguments property of the variable _xhr_, passed to the success callback function _xhrSuccess_., and ultimately supplied to the callback function (in this case, _showMessage_) which is invoked by function _xhrSuccess_.

Line 15 specifies _true_ for its third parameter to indicate that the request should be handled asynchronously.

Line 16 actually initiates the request.

### Example: using a timeout

You can use a timeout to prevent hanging your code forever while waiting for a read to occur. This is done by setting the value of the `timeout` property on the `XMLHttpRequest` object, as shown in the code below:

```js
function loadFile(url, timeout, callback) {
    var args = Array.prototype.slice.call(arguments, 3);
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {
        console.error("The request for " + url + " timed out.");
    };
    xhr.onload = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback.apply(xhr, args);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.timeout = timeout;
    xhr.send(null);
}
```

Notice the addition of code to handle the "timeout" event by setting the `ontimeout` handler.

Usage:

```js
function showMessage (message) {
    console.log(message + this.responseText);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
```

Here, we're specifying a timeout of 2000 ms.

> **참고:** Support for `timeout` was added in Gecko 12.0.

## Synchronous request

> **참고:** Starting with Gecko 30.0, Blink 39.0, and Edge 13, synchronous requests on the main thread have been deprecated due to the negative effects to the user experience.

Synchronous XHR often causes hangs on the web. But developers typically don't notice the problem because the hang only manifests during poor network conditions or slow server response. Synchronous XHR is now in deprecation state. Developers are recommended to move away from the API.

All new XHR features such as `timeout` or `abort` aren't allowed for synchronous XHR. Doing so would invoke `InvalidAccessError`.

### Example: HTTP synchronous request

This example demonstrates how to make a simple synchronous request.

```js
var request = new XMLHttpRequest();
request.open('GET', '/bar/foo.txt', false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```

Line 3 sends the request. The `null` parameter indicates that no body content is needed for the `GET` request.

Line 5 checks the status code after the transaction is completed. If the result is 200 -- HTTP's "OK" result -- the document's text content is output to the console.

### Example: Synchronous HTTP request from a `Worker`

One of the few cases in which a synchronous request does not usually block execution is the use of `XMLHttpRequest` within a [`Worker`](/en-US/docs/Web/API/Worker).

**`example.html`** (the main page):

```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>MDN Example</title>
<script type="text/javascript">
  var worker = new Worker("myTask.js");
  worker.onmessage = function(event) {
    alert("Worker said: " + event.data);
  };

  worker.postMessage("Hello");
</script>
</head>
<body></body>
</html>
```

**`myFile.txt`** (the target of the synchronous [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) invocation):

```
Hello World!!
```

**`myTask.js`** (the [`Worker`](/en-US/docs/Web/API/Worker)):

```js
self.onmessage = function (event) {
  if (event.data === "Hello") {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "myFile.txt", false);  // synchronous request
    xhr.send(null);
    self.postMessage(xhr.responseText);
  }
};
```

> **참고:** The effect, because of the use of the `Worker`, is however asynchronous.

It could be useful in order to interact in the background with the server or to preload some content. See [Using web workers](/ko/docs/Web/API/Web_Workers_API/Using_web_workers) for examples and details.

### Adapting Sync XHR usecases to the Beacon API

There are some cases in which the synchronous usage of XMLHttpRequest was not replaceable, like during the [`window.onunload`](/ko/docs/Web/API/WindowEventHandlers/onunload) and [`window.onbeforeunload`](/ko/docs/Web/API/WindowEventHandlers/onbeforeunload) events. You should consider using the `fetch` API with `keepalive` flag. When `fetch` with `keepalive` isn't available, you can consider using the [navigator.sendBeacon](/ko/docs/Web/API/Navigator/sendBeacon) API can support these use cases typically while delivering a good UX.

The following example (from the [sendBeacon docs](/ko/docs/Web/API/Navigator/sendBeacon)) shows a theoretical analytics code that attempts to submit data to a server by using a synchronous XMLHttpRequest in an unload handler. This results in the unloading of the page to be delayed.

```js
window.addEventListener('unload', logData, false);

function logData() {
    var client = new XMLHttpRequest();
    client.open("POST", "/log", false); // third parameter indicates sync xhr. :(
    client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    client.send(analyticsData);
}
```

Using the **`sendBeacon()`** method, the data will be transmitted asynchronously to the web server when the User Agent has had an opportunity to do so, **without delaying the unload or affecting the performance of the next navigation.**

The following example shows a theoretical analytics code pattern that submits data to a server by using the **`sendBeacon()`** method.

```js
window.addEventListener('unload', logData, false);

function logData() {
    navigator.sendBeacon("/log", analyticsData);
}
```

## See also

- [`XMLHttpRequest`](/ko/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [AJAX](/ko/docs/Web/Guide/AJAX)
- [`navigator.sendBeacon`](/en-US/docs/Web/API/Navigator/sendBeacon)
