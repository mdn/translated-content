---
title: 웹 워커 사용하기
slug: Web/API/Web_Workers_API/Using_web_workers
---

웹 워커는 웹 컨텐츠를 위해서 백그라운드 스레드에서 스크립트를 실행할 간편한 방법을 제공합니다. 워커 스레드는 사용자 인터페이스(UI)를 방해하지 않고 작업을 수행할 수 있습니다. 또한 워커는 ( `responseXML` 과 `channel`속성이 언제나 null이지만) [`XMLHttpRequest`](/en/nsIXMLHttpRequest) 를 사용하여 I/O작업을 수행할 수도 있습니다. 워커는 생성이 된 후에 생성자가 명시한 이벤트 핸들러로 메세지를 올려서 자신의 하위 작업(spawning task)에 메세지를 전달할 수 도 있습니다. 본 글에서 전용 워커와 공유 워커에 대하여 소개합니다.

## Web Workers API

Worker는 생성자(예를 들면 {{domxref("Worker.Worker", "Worker()")}})를 사용하여 생성된 객체이며 이름있는 자바스크립트 파일(이 파일은 Worker 스레드에서 실행하는 코드를 가집니다)을 실행합니다. 또한 Worker는 현재의 {{domxref("window")}}와는 다른 글로벌 컨텍스트에서 실행됩니다. 따라서 {{domxref("Worker")}} 내에서 현재의 글로벌 스코프를 접근하기 위해 ({{domxref("window.self","self")}} 대신에) {{domxref("window")}}를 사용해도 오류가 돌아옵니다.

Worker의 콘텍스트는 Dedicated Workers(한 개의 스크립트가 이용하는 표준적인 Workers)일 경우{{domxref("DedicatedWorkerGlobalScope")}} 객체로 제공됩니다. (Shared Workers의 경우는 {{domxref("SharedWorkerGlobalScope")}}). Dedicated Worker 는 Worker 를 처음에 생성한 스크립트만 액세스 할 수 있습니다. 반면에 Shared Worker는, 복수의 스크립트에서 액세스 할 수 있습니다.

> **참고:** **메모**: Worker 의 레퍼런스 문서나 추가적인 가이드에 대해서는 [The Web Workers API landing page](/ko/docs/Web/API/Web_Workers_API)를 봐 주세요.

Worker Thread에서는 몇 가지 제한 하에서 어떤 코드라도 실행할 수 있습니다. 예를 들어, Worker내에서는 직접 DOM 를 조작할 수 없습니다. 그리고 {{domxref("window")}} 객체의 기본 메서드나 속성에서 사용할 수 없는 것들이 있습니다. 그럼에도 [WebSockets](/ko/docs/Web/API/WebSockets_API)과 [IndexedDB](/ko/docs/Web/API/IndexedDB_API), [Data Store API](/ko/docs/Web/API/Data_Store_API)(Firefox OS 한정)와 같은 데이터 스토리지 메커니즘 등, `window`에 있는 다수의 아이템을 사용할 수 있습니다.자세한 것은 [Functions and classes available to workers](/ko/docs/Web/API/Worker/Functions_and_classes_available_to_workers)를 봐 주세요.

Worker와 메인 스레드 사이에서는 메시지 시스템을 통해 데이터를 발송합니다. 양쪽 모두 `postMessage()` 메서드를 사용하여 메시지를 발송하고, `onmessage`이벤트 핸들러에 의해 메시지에 응답합니다(메시지는 {{event("Message")}}이벤트의 data 속성에 들어갑니다). 데이터는 공유되지 않고 복사됩니다.

Worker 는 새로운 Worker 를 작성할 수 있습니다만, 생성된 Worker는 같은 부모 페이지일 경우에 한합니다. 추가적으로 Worker는 네트워크 I/O를 위한 [`XMLHttpRequest`](/ko/docs/Web/API/XMLHttpRequest)를 사용할 수 있으나, `responseXML`의 exception과 `channel`속성의 `XMLHttpRequest`는 항상 null을 반환합니다.

## Dedicated workers

As mentioned above, a dedicated worker is only accessible by the script that called it. In this section we'll discuss the JavaScript found in our [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](https://mdn.github.io/simple-web-worker/)): This allows you to enter two numbers to be multiplied together. The numbers are sent to a dedicated worker, multiplied together, and the result is returned to the page and displayed.

This example is rather trivial, but we decided to keep it simple while introducing you to basic worker concepts. More advanced details are covered later on in the article.

### Worker feature detection

For slightly more controlled error handling and backwards compatibility, it is a good idea to wrap your worker accessing code in the following ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)):

```js
if (window.Worker) {

  ...

}
```

### Spawning a dedicated worker

Creating a new worker is simple. All you need to do is call the {{domxref("Worker.Worker", "Worker()")}} constructor, specifying the URI of a script to execute in the worker thread ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)):

```js
var myWorker = new Worker("worker.js");
```

### Sending messages to and from a dedicated worker

The magic of workers happens via the {{domxref("Worker.postMessage", "postMessage()")}} method and the {{domxref("Worker.onmessage", "onmessage")}} event handler. When you want to send a message to the worker, you post messages to it like this ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)):

```js
first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

So here we have two {{htmlelement("input")}} elements represented by the variables `first` and `second`; when the value of either is changed, `myWorker.postMessage([first.value,second.value])` is used to send the value inside both to the worker, as an array. You can send pretty much anything you like in the message.

In the worker, we can respond when the message is received by writing an event handler block like this ([worker.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/worker.js)):

```js
onmessage = function (e) {
  console.log("Message received from main script");
  var workerResult = "Result: " + e.data[0] * e.data[1];
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

The `onmessage` handler allows us to run some code whenever a message is received, with the message itself being available in the `message` event's `data` attribute. Here we simply multiply together the two numbers then use `postMessage()` again, to post the result back to the main thread.

Back in the main thread, we use `onmessage` again, to respond to the message sent back from the worker:

```js
myWorker.onmessage = function (e) {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

Here we grab the message event data and set it as the `textContent` of the result paragraph, so the user can see the result of the calculation.

> **참고:** Notice that `onmessage` and `postMessage()` need to be hung off the `Worker` object when used in the main script thread, but not when used in the worker. This is because, inside the worker, the worker is effectively the global scope.

> **참고:** When a message is passed between the main thread and worker, it is copied or "transferred" (moved), not shared. Read [Transferring data to and from workers: further details](#transferring_data_to_and_from_workers_further_details) for a much more thorough explanation.

### Terminating a worker

If you need to immediately terminate a running worker from the main thread, you can do so by calling the worker's {{domxref("Worker", "terminate")}} method:

```js
myWorker.terminate();
```

The worker thread is killed immediately without an opportunity to complete its operations or clean up after itself.

In the worker thread, workers may close themselves by calling their own {{domxref("WorkerGlobalScope", "close")}} method:

```js
close();
```

### Handling errors

When a runtime error occurs in the worker, its `onerror` event handler is called. It receives an event named `error` which implements the `ErrorEvent` interface.

The event doesn't bubble and is cancelable; to prevent the default action from taking place, the worker can call the error event's [`preventDefault()`](/ko/docs/Web/API/Event/preventDefault) method.

The error event has the following three fields that are of interest:

- `message`
  - : A human-readable error message.
- `filename`
  - : The name of the script file in which the error occurred.
- `lineno`
  - : The line number of the script file on which the error occurred.

### Spawning subworkers

Workers may spawn more workers if they wish. So-called sub-workers must be hosted within the same origin as the parent page. Also, the URIs for subworkers are resolved relative to the parent worker's location rather than that of the owning page. This makes it easier for workers to keep track of where their dependencies are.

### Importing scripts and libraries

Worker threads have access to a global function, `importScripts()`, which lets them import scripts. It accepts zero or more URIs as parameters to resources to import; all of the following examples are valid:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
importScripts(
  "//example.com/hello.js",
); /* You can import scripts from other origins */
```

The browser loads each listed script and executes it. Any global objects from each script may then be used by the worker. If the script can't be loaded, `NETWORK_ERROR` is thrown, and subsequent code will not be executed. Previously executed code (including code deferred using {{domxref("window.setTimeout()")}}) will still be functional though. Function declarations **after** the `importScripts()`method are also kept, since these are always evaluated before the rest of the code.

> **참고:** Scripts may be downloaded in any order, but will be executed in the order in which you pass the filenames into `importScripts()` . This is done synchronously; `importScripts()` does not return until all the scripts have been loaded and executed.

## Shared workers

A shared worker is accessible by multiple scripts — even if they are being accessed by different windows, iframes or even workers. In this section we'll discuss the JavaScript found in our [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](https://mdn.github.io/simple-shared-worker/)): This is very similar to the basic dedicated worker example, except that it has two functions available handled by different script files: _multiplying two numbers_, or _squaring a number_. Both scripts use the same worker to do the actual calculation required.

Here we'll concentrate on the differences between dedicated and shared workers. Note that in this example we have two HTML pages, each with JavaScript applied that uses the same single worker file.

> **참고:** If SharedWorker can be accessed from several browsing contexts, all those browsing contexts must share the exact same origin (same protocol, host, and port).

> **참고:** In Firefox, shared workers cannot be shared between documents loaded in private and non-private windows ([Firefox bug 1177621](https://bugzil.la/1177621)).

### Spawning a shared worker

Spawning a new worker is pretty much the same as with a dedicated worker, but with a different constructor name (see [index.html](https://github.com/mdn/simple-shared-worker/blob/gh-pages/index.html) and [index2.html](https://mdn.github.io/simple-shared-worker/index2.html)) — each one has to spin up the worker using code like the following:

```js
var myWorker = new SharedWorker("worker.js");
```

One big difference is that with a shared worker you have to communicate via a `port` object — an explicit port is opened that the scripts can use to communicate with the worker (this is done implicitly in the case of dedicated workers).

The port connection needs to be started either implicitly by use of the `onmessage` event handler or explicitly with the `start()`method before any messages can be posted. Although the [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) and [worker.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/worker.js) files in the demo currently call the `start()`method, those calls are not necessary since the `onmessage` event handler is being used. Calling `start()` is only needed if the `message` event is wired up via the `addEventListener()` method.

When using the `start()` method to open the port connection, it needs to be called from both the parent thread and the worker thread if two-way communication is needed.

```js
myWorker.port.start(); // called in parent thread
```

```js
port.start(); // called in worker thread, assuming the port variable references a port
```

### Sending messages to and from a shared worker

Now messages can be sent to the worker as before, but the `postMessage()` method has to be invoked through the port object (again, you'll see similar constructs in both [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) and [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js)):

```js
squareNumber.onchange = function () {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

Now, on to the worker. There is a bit more complexity here as well ([worker.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/worker.js)):

```js
onconnect = function (e) {
  var port = e.ports[0];

  port.onmessage = function (e) {
    var workerResult = "Result: " + e.data[0] * e.data[1];
    port.postMessage(workerResult);
  };
};
```

First, we use an `onconnect` handler to fire code when a connection to the port happens (i.e. when the `onmessage` event handler in the parent thread is setup, or when the `start()` method is explicitly called in the parent thread).

We use the `ports` attribute of this event object to grab the port and store it in a variable.

Next, we add a `message` handler on the port to do the calculation and return the result to the main thread. Setting up this `message`handler in the worker thread also implicitly opens the port connection back to the parent thread, so the call to `port.start()` is not actually needed, as noted above.

Finally, back in the main script, we deal with the message (again, you'll see similar constructs in both [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) and [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js)):

```js
myWorker.port.onmessage = function (e) {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

When a message comes back through the port from the worker, we check what result type it is, then insert the calculation result inside the appropriate result paragraph.

## About thread safety

The {{domxref("Worker")}} interface spawns real OS-level threads, and mindful programmers may be concerned that concurrency can cause "interesting" effects in your code if you aren't careful.

However, since web workers have carefully controlled communication points with other threads, it's actually very hard to cause concurrency problems. There's no access to non-threadsafe components or the DOM. And you have to pass specific data in and out of a thread through serialized objects. So you have to work really hard to cause problems in your code.

## Content security policy

Workers are considered to have their own execution context, distinct from the document that created them. For this reasons they are, in general, not governed by the [content security policy](/ko/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) of the document (or parent worker) that created them. So for example, suppose a document is served with the following header:

```
Content-Security-Policy: script-src 'self'
```

Among other things, this will prevent any scripts it includes from using [`eval()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/eval). However, if the script constructs a worker, code running in the worker's context _will_ be allowed to use `eval()`.

To specify a content security policy for the worker, set a [Content-Security-Policy](/ko/docs/Web/HTTP/Headers/Content-Security-Policy) response header for the request which delivered the worker script itself.

The exception to this is if the worker script's origin is a globally unique identifier (for example, if its URL has a scheme of data or blob). In this case, the worker does inherit the CSP of the document or worker than created it.

## Transferring data to and from workers: further details

Data passed between the main page and workers is **copied**, not shared. Objects are serialized as they're handed to the worker, and subsequently, de-serialized on the other end. The page and worker **do not share the same instance**, so the end result is that **a duplicate** is created on each end. Most browsers implement this feature as [structured cloning](/ko/docs/Web/Guide/API/DOM/The_structured_clone_algorithm).

To illustrate this, let's create for didactical purpose a function named `emulateMessage()`, which will simulate the behavior of a value that is _cloned and not shared_ during the passage from a `worker` to the main page or vice versa:

```js
function emulateMessage(vVal) {
  return eval("(" + JSON.stringify(vVal) + ")");
}

// Tests

// test #1
var example1 = new Number(3);
console.log(typeof example1); // object
console.log(typeof emulateMessage(example1)); // number

// test #2
var example2 = true;
console.log(typeof example2); // boolean
console.log(typeof emulateMessage(example2)); // boolean

// test #3
var example3 = new String("Hello World");
console.log(typeof example3); // object
console.log(typeof emulateMessage(example3)); // string

// test #4
var example4 = {
  name: "John Smith",
  age: 43,
};
console.log(typeof example4); // object
console.log(typeof emulateMessage(example4)); // object

// test #5
function Animal(sType, nAge) {
  this.type = sType;
  this.age = nAge;
}
var example5 = new Animal("Cat", 3);
alert(example5.constructor); // Animal
alert(emulateMessage(example5).constructor); // Object
```

A value that is cloned and not shared is called _message_. As you will probably know by now, _messages_ can be sent to and from the main thread by using `postMessage()`, and the `message` event's {{domxref("MessageEvent.data", "data")}} attribute contains data passed back from the worker.

**example.html**: (the main page):

```js
var myWorker = new Worker("my_task.js");

myWorker.onmessage = function (oEvent) {
  console.log("Worker said : " + oEvent.data);
};

myWorker.postMessage("ali");
```

**my_task.js** (the worker):

```js
postMessage("I'm working before postMessage('ali').");

onmessage = function (oEvent) {
  postMessage("Hi " + oEvent.data);
};
```

The [structured cloning](/ko/docs/Web/Guide/API/DOM/The_structured_clone_algorithm) algorithm can accept JSON and a few things that JSON can't — like circular references.

### Passing data examples

#### Example #1: Create a generic "asynchronous `eval()`"

The following example shows how to use a worker in order to **asynchronously** execute any JavaScript code allowed in a worker, through [`eval()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/eval) within the worker:

```js
// Syntax: asyncEval(code[, listener])

var asyncEval = (function () {
  var aListeners = [],
    oParser = new Worker(
      "data:text/javascript;charset=US-ASCII,onmessage%20%3D%20function%20%28oEvent%29%20%7B%0A%09postMessage%28%7B%0A%09%09%22id%22%3A%20oEvent.data.id%2C%0A%09%09%22evaluated%22%3A%20eval%28oEvent.data.code%29%0A%09%7D%29%3B%0A%7D",
    );

  oParser.onmessage = function (oEvent) {
    if (aListeners[oEvent.data.id]) {
      aListeners[oEvent.data.id](oEvent.data.evaluated);
    }
    delete aListeners[oEvent.data.id];
  };

  return function (sCode, fListener) {
    aListeners.push(fListener || null);
    oParser.postMessage({
      id: aListeners.length - 1,
      code: sCode,
    });
  };
})();
```

The [data URL](/ko/docs/Web/HTTP/data_URIs) is equivalent to a network request, with the following response:

```js
onmessage = function (oEvent) {
  postMessage({
    id: oEvent.data.id,
    evaluated: eval(oEvent.data.code),
  });
};
```

Sample usage:

```js
// asynchronous alert message...
asyncEval("3 + 2", function (sMessage) {
  alert("3 + 2 = " + sMessage);
});

// asynchronous print message...
asyncEval('"Hello World!!!"', function (sHTML) {
  document.body.appendChild(document.createTextNode(sHTML));
});

// asynchronous void...
asyncEval(
  '(function () {\n\tvar oReq = new XMLHttpRequest();\n\toReq.open("get", "http://www.mozilla.org/", false);\n\toReq.send(null);\n\treturn oReq.responseText;\n})()',
);
```

#### Example #2: Advanced passing JSON Data and creating a switching system

If you have to pass some complex data and have to call many different functions both on the main page and in the Worker, you can create a system which groups everything together.

First, we create a QueryableWorker class that takes the url of the worker, a default listener, and an error handler, and this class is gonna keep track of a list of listeners and help us communicate wirh the worker:

```js
function QueryableWorker(url, defaultListener, onError) {
  var instance = this,
    worker = new Worker(url),
    listeners = {};

  this.defaultListener = defaultListener || function () {};

  if (onError) {
    worker.onerror = onError;
  }

  this.postMessage = function (message) {
    worker.postMessage(message);
  };

  this.terminate = function () {
    worker.terminate();
  };
}
```

Then we add the methods of adding/removing listeners:

```js
this.addListeners = function (name, listener) {
  listeners[name] = listener;
};

this.removeListeners = function (name) {
  delete listeners[name];
};
```

Here we let the worker handle two simple operations for illuatration: getting the difference of two numbers and making an alert after three seconds. In order to acheieve that we first implement a sendQuery method which queries if the worker actually has the corresponding methods to do what we want.

```js
/*
  This functions takes at least one argument, the method name we want to query.
  Then we can pass in the arguments that the method needs.
 */
this.sendQuery = function () {
  if (arguments.length < 1) {
    throw new TypeError(
      "QueryableWorker.sendQuery takes at least one argument",
    );
    return;
  }
  worker.postMessage({
    queryMethod: arguments[0],
    queryArguments: Array.prototype.slice.call(arguments, 1),
  });
};
```

We finish QueryableWorker with the `onmessage` method. If the worker has the corresponding methods we queried, it should return the name of the corresponding listener and the arguments it needs, we just need to find it in `listeners`.:

```js
worker.onmessage = function (event) {
  if (
    event.data instanceof Object &&
    event.data.hasOwnProperty("queryMethodListener") &&
    event.data.hasOwnProperty("queryMethodArguments")
  ) {
    listeners[event.data.queryMethodListener].apply(
      instance,
      event.data.queryMethodArguments,
    );
  } else {
    this.defaultListener.call(instance, event.data);
  }
};
```

Now onto the worker. First we need to have the methods to handle the two simple operations:

```js
var queryableFunctions = {
  getDifference: function (a, b) {
    reply("printStuff", a - b);
  },
  waitSomeTime: function () {
    setTimeout(function () {
      reply("doAlert", 3, "seconds");
    }, 3000);
  },
};

function reply() {
  if (arguments.length < 1) {
    throw new TypeError("reply - takes at least one argument");
    return;
  }
  postMessage({
    queryMethodListener: arguments[0],
    queryMethodArguments: Array.prototype.slice.call(arguments, 1),
  });
}

/* This method is called when main page calls QueryWorker's postMessage method directly*/
function defaultReply(message) {
  // do something
}
```

And the `onmessage` method is now trivial:

```js
onmessage = function (event) {
  if (
    event.data instanceof Object &&
    event.data.hasOwnProperty("queryMethod") &&
    event.data.hasOwnProperty("queryMethodArguments")
  ) {
    queryableFunctions[event.data.queryMethod].apply(
      self,
      event.data.queryMethodArguments,
    );
  } else {
    defaultReply(event.data);
  }
};
```

Here are the full implementation:

**example.html** (the main page):

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>MDN Example - Queryable worker</title>
    <script type="text/javascript">
      /*
      QueryableWorker instances methods:
        * sendQuery(queryable function name, argument to pass 1, argument to pass 2, etc. etc): calls a Worker's queryable function
        * postMessage(string or JSON Data): see Worker.prototype.postMessage()
        * terminate(): terminates the Worker
        * addListener(name, function): adds a listener
        * removeListener(name): removes a listener
      QueryableWorker instances properties:
        * defaultListener: the default listener executed only when the Worker calls the postMessage() function directly
     */
      function QueryableWorker(url, defaultListener, onError) {
        var instance = this,
          worker = new Worker(url),
          listeners = {};

        this.defaultListener = defaultListener || function () {};

        if (onError) {
          worker.onerror = onError;
        }

        this.postMessage = function (message) {
          worker.postMessage(message);
        };

        this.terminate = function () {
          worker.terminate();
        };

        this.addListeners = function (name, listener) {
          listeners[name] = listener;
        };

        this.removeListeners = function (name) {
          delete listeners[name];
        };

        worker.onmessage = function (event) {
          if (
            event.data instanceof Object &&
            event.data.hasOwnProperty("queryMethodListener") &&
            event.data.hasOwnProperty("queryMethodArguments")
          ) {
            listeners[event.data.queryMethodListener].apply(
              instance,
              event.data.queryMethodArguments,
            );
          } else {
            this.defaultListener.call(instance, event.data);
          }
        };
      }

      // your custom "queryable" worker
      var myTask = new QueryableWorker("my_task.js");

      // your custom "listeners"
      myTask.addListener("printStuff", function (result) {
        document
          .getElementById("firstLink")
          .parentNode.appendChild(
            document.createTextNode(" The difference is " + result + "!"),
          );
      });

      myTask.addListener("doAlert", function (time, unit) {
        alert("Worker waited for " + time + " " + unit + " :-)");
      });
    </script>
  </head>
  <body>
    <ul>
      <li>
        <a
          id="firstLink"
          href="javascript:myTask.sendQuery('getDifference', 5, 3);"
          >What is the difference between 5 and 3?</a
        >
      </li>
      <li>
        <a href="javascript:myTask.sendQuery('waitSomeTime');"
          >Wait 3 seconds</a
        >
      </li>
      <li>
        <a href="javascript:myTask.terminate();">terminate() the Worker</a>
      </li>
    </ul>
  </body>
</html>
```

**my_task.js** (the worker):

```js
var queryableFunctions = {
  // example #1: get the difference between two numbers:
  getDifference: function (nMinuend, nSubtrahend) {
    reply("printSomething", nMinuend - nSubtrahend);
  },
  // example #2: wait three seconds
  waitSomeTime: function () {
    setTimeout(function () {
      reply("doAlert", 3, "seconds");
    }, 3000);
  },
};

// system functions

function defaultReply(message) {
  // your default PUBLIC function executed only when main page calls the queryableWorker.postMessage() method directly
  // do something
}

function reply() {
  if (arguments.length < 1) {
    throw new TypeError("reply - not enough arguments");
    return;
  }
  postMessage({
    queryMethodListener: arguments[0],
    queryMethodArguments: Array.prototype.slice.call(arguments, 1),
  });
}

onmessage = function (oEvent) {
  if (
    oEvent.data instanceof Object &&
    oEvent.data.hasOwnProperty("queryMethod") &&
    oEvent.data.hasOwnProperty("queryMethodArguments")
  ) {
    queryableFunctions[oEvent.data.queryMethod].apply(
      self,
      oEvent.data.queryMethodArguments,
    );
  } else {
    defaultReply(oEvent.data);
  }
};
```

It is possible to switch the content of each mainpage -> worker and worker -> mainpage message. And the property names "queryMethod", "queryMethodListeners", "queryMethodArguments" can be anything as long as they are consistent in `QueryableWorker` and the `worker`.

### Passing data by transferring ownership (transferable objects)

Google Chrome 17+ and Firefox 18+ contain an additional way to pass certain types of objects (transferable objects, that is objects implementing the {{domxref("Transferable")}} interface) to or from a worker with high performance. Transferable objects are transferred from one context to another with a zero-copy operation, which results in a vast performance improvement when sending large data sets. Think of it as pass-by-reference if you're from the C/C++ world. However, unlike pass-by-reference, the 'version' from the calling context is no longer available once transferred. Its ownership is transferred to the new context. For example, when transferring an {{domxref("ArrayBuffer")}} from your main app to a worker script, the original {{domxref("ArrayBuffer")}} is cleared and no longer usable. Its content is (quite literally) transferred to the worker context.

```js
// Create a 32MB "file" and fill it.
var uInt8Array = new Uint8Array(1024 * 1024 * 32); // 32MB
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i;
}

worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

> **참고:** For more information on transferable objects, performance, and feature-detection for this method, read [Transferable Objects: Lightning Fast!](http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast) on HTML5 Rocks.

## Embedded workers

There is not an "official" way to embed the code of a worker within a web page, like {{HTMLElement("script")}} elements do for normal scripts. But a {{HTMLElement("script")}} element that does not have a `src` attribute and has a `type` attribute that does not identify an executable MIME type can be considered a data block element that JavaScript could use. "Data blocks" is a more general feature of HTML5 that can carry almost any textual data. So, a worker could be embedded in this way:

```js
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>MDN Example - Embedded worker</title>
<script type="text/js-worker">
  // This script WON'T be parsed by JS engines because its MIME type is text/js-worker.
  var myVar = "Hello World!";
  // Rest of your worker code goes here.
</script>
<script type="text/javascript">
  // This script WILL be parsed by JS engines because its MIME type is text/javascript.
  function pageLog (sMsg) {
    // Use a fragment: browser will only render/reflow once.
    var oFragm = document.createDocumentFragment();
    oFragm.appendChild(document.createTextNode(sMsg));
    oFragm.appendChild(document.createElement("br"));
    document.querySelector("#logDisplay").appendChild(oFragm);
  }
</script>
<script type="text/js-worker">
  // This script WON'T be parsed by JS engines because its MIME type is text/js-worker.
  onmessage = function (oEvent) {
    postMessage(myVar);
  };
  // Rest of your worker code goes here.
</script>
<script type="text/javascript">
  // This script WILL be parsed by JS engines because its MIME type is text/javascript.

  // In the past...:
  // blob builder existed
  // ...but now we use Blob...:
  var blob = new Blob(Array.prototype.map.call(document.querySelectorAll("script[type=\"text\/js-worker\"]"), function (oScript) { return oScript.textContent; }),{type: "text/javascript"});

  // Creating a new document.worker property containing all our "text/js-worker" scripts.
  document.worker = new Worker(window.URL.createObjectURL(blob));

  document.worker.onmessage = function (oEvent) {
    pageLog("Received: " + oEvent.data);
  };

  // Start the worker.
  window.onload = function() { document.worker.postMessage(""); };
</script>
</head>
<body><div id="logDisplay"></div></body>
</html>
```

The embedded worker is now nested into a new custom `document.worker` property.

It is also worth noting that you can also convert a function into a Blob, then generate an object URL from that blob. For example:

```js
function fn2workerURL(fn) {
  var blob = new Blob(["(" + fn.toString() + ")()"], {
    type: "application/javascript",
  });
  return URL.createObjectURL(blob);
}
```

## Further examples

This section provides further examples of how to use web workers.

### Performing computations in the background

Workers are mainly useful for allowing your code to perform processor-intensive calculations without blocking the user interface thread. In this example, a worker is used to calculate Fibonacci numbers.

#### The JavaScript code

The following JavaScript code is stored in the "fibonacci.js" file referenced by the HTML in the next section.

```js
var results = [];

function resultReceiver(event) {
  results.push(parseInt(event.data));
  if (results.length == 2) {
    postMessage(results[0] + results[1]);
  }
}

function errorReceiver(event) {
  throw event.data;
}

onmessage = function (event) {
  var n = parseInt(event.data);

  if (n == 0 || n == 1) {
    postMessage(n);
    return;
  }

  for (var i = 1; i <= 2; i++) {
    var worker = new Worker("fibonacci.js");
    worker.onmessage = resultReceiver;
    worker.onerror = errorReceiver;
    worker.postMessage(n - i);
  }
};
```

The worker sets the property `onmessage` to a function which will receive messages sent when the worker object's `postMessage()` is called (note that this differs from defining a global _variable_ of that name, or defining a _function_ with that name. `var onmessage` and `function onmessage` will define global properties with those names, but they will not register the function to receive messages sent by the web page that created the worker). This starts the recursion, spawning new copies of itself to handle each iteration of the calculation.

#### The HTML code

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Test threads fibonacci</title>
  </head>
  <body>
    <div id="result"></div>

    <script language="javascript">
      var worker = new Worker("fibonacci.js");

      worker.onmessage = function (event) {
        document.getElementById("result").textContent = event.data;
        dump("Got: " + event.data + "\n");
      };

      worker.onerror = function (error) {
        dump("Worker error: " + error.message + "\n");
        throw error;
      };

      worker.postMessage("5");
    </script>
  </body>
</html>
```

The web page creates a `div` element with the ID `result` , which gets used to display the result, then spawns the worker. After spawning the worker, the `onmessage` handler is configured to display the results by setting the contents of the `div` element, and the `onerror` handler is set to [dump](/ko/docs/Debugging_JavaScript#dump.28.29) the error message.

Finally, a message is sent to the worker to start it.

[Try this example](/samples/workers/fibonacci).

### Performing web I/O in the background

You can find an example of this in the article [Using workers in extensions](/ko/docs/Using_workers_in_extensions) .

### Dividing tasks among multiple workers

As multi-core computers become increasingly common, it's often useful to divide computationally complex tasks among multiple workers, which may then perform those tasks on multiple-processor cores.

## Other types of worker

In addition to dedicated and shared web workers, there are other types of worker available:

- [ServiceWorkers](/ko/docs/Web/API/ServiceWorker_API) essentially act as proxy servers that sit between web applications, and the browser and network (when available). They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. They will also allow access to push notifications and background sync APIs.
- Chrome Workers are a Firefox-only type of worker that you can use if you are developing add-ons and want to use workers in extensions and have access to [js-ctypes](/en/js-ctypes) in your worker. See {{domxref("ChromeWorker")}} for more details.
- [Audio Workers](/ko/docs/Web/API/Web_Audio_API#Audio_Workers) provide the ability for direct scripted audio processing to be done in a web worker context.

## Functions and interfaces available in workers

You can use most standard JavaScript features inside a web worker, including:

- {{domxref("Navigator")}}
- {{domxref("XMLHttpRequest")}}
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, and {{jsxref("Global_Objects/String", "String")}}
- {{domxref("Window.requestAnimationFrame")}}, {{domxref("WindowTimers.setTimeout")}}, and {{domxref("WindowTimers.setInterval")}}

The main thing you _can't_ do in a Worker is directly affect the parent page. This includes manipulating the DOM and using that page's objects. You have to do it indirectly, by sending a message back to the main script via {{domxref("DedicatedWorkerGlobalScope.postMessage")}}, then actioning the changes from there.

> **참고:** For a complete list of functions available to workers, see [Functions and interfaces available to workers](/ko/docs/Web/Reference/Functions_and_classes_available_to_workers).

## 명세서

{{Specifications}}

## See also

- [`Worker`](/ko/docs/Web/API/Worker) interface
- [`SharedWorker`](/ko/docs/Web/API/SharedWorker) interface
- [Functions available to workers](/ko/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- [Advanced concepts and examples](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)
