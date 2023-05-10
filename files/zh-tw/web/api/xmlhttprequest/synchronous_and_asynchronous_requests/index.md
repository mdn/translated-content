---
title: Synchronous and asynchronous requests
slug: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
---

`XMLHttpRequest` 支持同步和非同步請求，一般來說，建議使用非同步請求。

In short, synchronous requests block the execution of code which creates "freezing" on the screen and an unresponsive user experience.

## 非同步請求

If you use `XMLHttpRequest` from an extension, you should use it asynchronously. In this case, you receive a callback when the data has been received, which lets the browser continue to work as normal while your request is being handled.

### 範例: send a file to the console log

這是使用非同步 XMLHttpRequest 的基本方式

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

Line 2 第 3 個參數為布林值，true 表示非同步請求。

Line 3 creates an event handler function object and assigns it to the request's `onload` attribute. This handler looks at the request's `readyState` to see if the transaction is complete in line 4, and if it is, and the HTTP status is 200, dumps the received content. If an error occurred, an error message is displayed.

Line 15 actually initiates the request. The callback routine is called whenever the state of the request changes.

### Example: creating a standard function to read external files

In some cases you must read many external files. This is a standard function which uses the `XMLHttpRequest` object asynchronously in order to switch the content of the read file to a specified listener.

```js
function xhrSuccess () { this.callback.apply(this, this.arguments); }

function xhrError () { console.error(this.statusText); }

function loadFile (sURL, fCallback /*, argumentToPass1, argumentToPass2, etc. */) {
  var oReq = new XMLHttpRequest();
  oReq.callback = fCallback;
  oReq.arguments = Array.prototype.slice.call(arguments, 2);
  oReq.onload = xhrSuccess;
  oReq.onerror = xhrError;
  oReq.open("get", sURL, true);
  oReq.send(null);
}
```

Usage:

```js
function showMessage (sMsg) {
  alert(sMsg + this.responseText);
}

loadFile("message.txt", showMessage, "New message!\n\n");
```

Line 1 declares a function which will pass all arguments after the third to the callback function when the file has been loaded.

Line 4 creates an event handler function object and assigns it to the request's `onload` attribute. This handler looks at the request's `readyState` to see if the transaction is complete in line 5, and if it is, and the HTTP status is 200, calls the callback function. If an error occurred, an error message is displayed.

Line 13 specifies `true` for its third parameter to indicate that the request should be handled asynchronously.

Line 14 actually initiates the request.

### Example: using a timeout

You can use a timeout to prevent hanging your code forever while waiting for a read to occur. This is done by setting the value of the `timeout` property on the `XMLHttpRequest` object, as shown in the code below:

```js
  var args = arguments.slice(2);
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
function showMessage (sMsg) {
  alert(sMsg + this.responseText);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
```

Here, we're specifying a timeout of 2000 ms.

> **備註：** Support for `timeout` was added in Gecko 12.0.

## Synchronous request

> **備註：** Starting with Gecko 30.0, synchronous requests on the main thread have been deprecated due to the negative effects to the user experience.

In rare cases, the use of a synchronous method is preferable to an asynchronous one.

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

### Example: Synchronous HTTP request from a Worker

One of the few cases in which a synchronous request does not usually block execution is the use of {{domxref('XMLHttpRequest')}} within a [`Worker`](/zh-TW/docs/Web/API/Worker).

**`example.html`** (the main page):

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Example</title>
    <script>
      const worker = new Worker("myTask.js");
      worker.onmessage = (event) => {
        alert(`Worker said: ${event.data}`);
      };

      worker.postMessage("Hello");
    </script>
  </head>
  <body>
    …
  </body>
</html>
```

**`myFile.txt`** (the target of the synchronous {{domxref('XMLHttpRequest')}} invocation):

```
Hello World!!
```

**`myTask.js`** (the [`Worker`](/zh-TW/docs/Web/API/Worker)):

```js
self.onmessage = (event) => {
  if (event.data === "Hello") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "myFile.txt", false);  // synchronous request
    xhr.send(null);
    self.postMessage(xhr.responseText);
  }
};
```

> **備註：** The effect is asynchronous, because of the use of the `Worker`.

This pattern can be useful, for example in order to interact with the server in the background, or to preload content. See [Using web workers](/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers) for examples and details.

### Adapting Sync XHR use cases to the Beacon API

There are some cases in which the synchronous usage of {{domxref('XMLHttpRequest')}} is not replaceable, like during the {{domxref("Window.unload_event", "unload")}}, {{domxref("Window.beforeunload_event", "beforeunload")}}, and {{domxref("Window.pagehide_event", "pagehide")}} events. You should consider using the `fetch()` API with the `keepalive` flag. When `fetch` with `keepalive` isn't available, you can consider using the {{domxref("navigator.sendBeacon()")}} API, which can support these use cases while typically delivering a good UX.

The following example shows theoretical analytics code that attempts to submit data to a server by using a synchronous {{domxref('XMLHttpRequest')}} in an unload handler. This results in the unloading of the page to be delayed.

```js
window.addEventListener('unload', logData, false);

function logData() {
  const client = new XMLHttpRequest();
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

- [`XMLHttpRequest`](/zh-TW/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [AJAX](/zh-TW/docs/AJAX)
