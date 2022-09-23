---
title: Synchronous and asynchronous requests
slug: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
---

`XMLHttpRequest 支持同步和非同步請求，一般來說，建議使用非同步請求。`

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

> **備註：** Support for `timeout` was added in {{Gecko("12.0")}}.

## Synchronous request

> **備註：** Starting with Gecko 30.0 {{ geckoRelease("30.0") }}, synchronous requests on the main thread have been deprecated due to the negative effects to the user experience.

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

### Example: Synchronous HTTP request from a `Worker`

One of the few cases in which a synchronous request does not usually block execution is the use of `XMLHttpRequest` within a [`Worker`](/zh-TW/DOM/Worker).

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

**`myFile.txt`** (the target of the synchronous [`XMLHttpRequest`](/zh-TW/DOM/XMLHttpRequest) invocation):

```plain
Hello World!!
```

**`myTask.js`** (the [`Worker`](/zh-TW/DOM/Worker)):

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

> **備註：** The effect, because of the use of the `Worker`, is however asynchronous.

It could be useful in order to interact in background with the server or to preload some content. See [Using web workers](/En/DOM/Using_web_workers) for examples and details.

### Irreplaceability of the synchronous use

There are some few cases in which the synchronous usage of XMLHttpRequest is not replaceable. This happens for example during the [`window.onunload`](/zh-TW/DOM/window.onunload) and [`window.onbeforeunload`](/zh-TW/DOM/window.onbeforeunload) events ([see also below](#XMLHttpRequests_being_stopped)).

Sending the usual XMLHttpRequest when the page unloaded poses a problem with the asynchronous response from the server: by the time the response comes back, the page has unloaded and the callback function won’t exist anymore. This generates a JavaScript “function is not defined” error.

![](/@api/deki/files/6227/=AsyncUnload.jpg)

A possible solution is to make sure that any AJAX requests that you make on unload are make synchronously instead of asynchronously. This will ensure that the page doesn’t finish unloading before the server response comes back.

#### Example #1: Automatic logout before exit

```js
window.onbeforeunload = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "logout.php?nick=" + escape(myName), false);  // synchronous request
  xhr.send(null);
  if (xhr.responseText.trim() !== "logout done"); {  // "logout done" is the expected response text
    return "Logout has failed. Do you want to complete it manually?";
  }
};
```

#### Example #2: Noting if a user abandon the site without clicking any link and registering the boring page

```js
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>MDN Example</title>
<script type="text/javascript">
(function () {

  function dontPanic () {
    bForsake = false;
    return true;
  }

  onload = function () {
    for (
      var aLinks = document.links, nLen = aLinks.length, nIdx = 0;
      nIdx < nLen;
      aLinks[nIdx++].onclick = dontPanic
    );
  };

  onbeforeunload = function () {
    if (bForsake) {
      /* silent synchronous request */
      var oReq = new XMLHttpRequest();
      oReq.open("GET", "exit.php?leave=" + escape(location.href), false);
      oReq.send(null);
    }
  };

  var bForsake = true;

})();
</script>
</head>

<body>

<p><a href="https://developer.mozilla.org/">Example link</a></p>

</body>
</html>
```

## See also

- [`XMLHttpRequest`](/zh-TW/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [AJAX](/zh-TW/docs/AJAX)
