---
title: 使用 Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker 为 Web 内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。此外，他们可以使用[`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest)执行 I/O (尽管`responseXML`和`channel`属性总是为空)。一旦创建，一个 worker 可以将消息发送到创建它的 JavaScript 代码，通过将消息发布到该代码指定的事件处理程序（反之亦然）。本文提供了有关使用 Web Worker 的详细介绍。

## Web Workers API

一个 worker 是使用一个构造函数创建的一个对象 (e.g. {{domxref("Worker.Worker", "Worker()")}}) 运行一个命名的 JavaScript 文件 - 这个文件包含将在工作线程中运行的代码; workers 运行在另一个全局上下文中，不同于当前的{{domxref("window")}}. 因此，在 {{domxref("Worker")}} 内通过 {{domxref("window")}}获取全局作用域 (而不是{{domxref("window.self","self")}}) 将返回错误。

在专用 workers 的情况下，{{domxref("DedicatedWorkerGlobalScope")}} 对象代表了 worker 的上下文（专用 workers 是指标准 worker 仅在单一脚本中被使用；共享 worker 的上下文是{{domxref("SharedWorkerGlobalScope")}}对象）。一个专用 worker 仅仅能被首次生成它的脚本使用，而共享 worker 可以同时被多个脚本使用。

> **备注：** 参照 [The Web Workers API landing page](/zh-CN/docs/Web/API/Web_Workers_API) 获取 workers 的参考文档和更多指引。

在 worker 线程中你可以运行任何你喜欢的代码，不过有一些例外情况。比如：在 worker 内，不能直接操作 DOM 节点，也不能使用{{domxref("window")}}对象的默认方法和属性。然而你可以使用大量 window 对象之下的东西，包括 WebSockets，IndexedDB 以及 FireFox OS 专用的 Data Store API 等数据存储机制。查看[Functions and classes available to workers](/zh-CN/docs/Web/API/Worker/Functions_and_classes_available_to_workers)获取详情。

workers 和主线程间的数据传递通过这样的消息机制进行——双方都使用 postMessage() 方法发送各自的消息，使用 onmessage 事件处理函数来响应消息（消息被包含在[`message`](/zh-CN/docs/Web/API/BroadcastChannel/message_event)事件的 data 属性中）。这个过程中数据并不是被共享而是被复制。

只要运行在同源的父页面中，workers 可以依次生成新的 workers；并且可以使用[`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 进行网络 I/O，但是 XMLHttpRequest 的 responseXML 和 channel 属性总会返回 null。

## 专用 worker

如前文所述，一个专用 worker 仅仅能被生成它的脚本所使用。这一部分将探讨 [专用 worker 基础示例](https://github.com/mdn/simple-web-worker) ([运行专用 worker](https://mdn.github.io/simple-web-worker/)) 中的 JavaScript 代码：将你输入的 2 个数字作乘法。输入的数字会发送给一个专用 worker，由专用 worker 作乘法后，再返回给页面进行展示。

这个例子很小，但是我们决定在保持简单的同时向你介绍基础的 worker 概念。更多的细节会在之后的文章中进行讲解。

### worker 特性检测

为了更好的错误处理控制以及向下兼容，将你的 worker 运行代码包裹在以下代码中是一个很好的想法 (main.js)：

```js
if (window.Worker) {

  ...

}
```

### 生成一个专用 worker

创建一个新的 worker 很简单。你需要做的是调用{{domxref("Worker.Worker", "Worker()")}} 的构造器，指定一个脚本的 URI 来执行 worker 线程（main.js）：

```js
var myWorker = new Worker('worker.js');
```

### 专用 worker 中消息的接收和发送

你可以通过{{domxref("Worker.postMessage", "postMessage()")}} 方法和{{domxref("Worker.onmessage", "onmessage")}}事件处理函数触发 workers 的方法。当你想要向一个 worker 发送消息时，你只需要这样做（main.js）：

```js
first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}
```

这段代码中变量 first 和 second 代表 2 个{{htmlelement("input")}}元素；它们当中任意一个的值发生改变时，myWorker.postMessage(\[first.value,second.value]) 会将这 2 个值组成数组发送给 worker。你可以在消息中发送许多你想发送的东西。

在 worker 中接收到消息后，我们可以写这样一个事件处理函数代码作为响应（worker.js）：

```js
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}
```

onmessage 处理函数允许我们在任何时刻，一旦接收到消息就可以执行一些代码，代码中消息本身作为事件的 data 属性进行使用。这里我们简单的对这 2 个数字作乘法处理并再次使用 postMessage() 方法，将结果回传给主线程。

回到主线程，我们再次使用 onmessage 以响应 worker 回传的消息：

```js
myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
}
```

在这里我们获取消息事件的 data，并且将它设置为 result 的 textContent，所以用户可以直接看到运算的结果。

> **备注：** 在主线程中使用时，`onmessage`和`postMessage()` 必须挂在 worker 对象上，而在 worker 中使用时不用这样做。原因是，在 worker 内部，worker 是有效的全局作用域。

> **备注：** 当一个消息在主线程和 worker 之间传递时，它被复制或者转移了，而不是共享。请参阅[worker 中数据的接收与发送：详细介绍](#worker中数据的接收与发送：详细介绍) 获取更详尽的解释。

### 终止 worker

如果你需要从主线程中立刻终止一个运行中的 worker，可以调用 worker 的{{domxref("Worker", "terminate")}} 方法：

```js
myWorker.terminate();
```

worker 线程会被立即杀死，不会有任何机会让它完成自己的操作或清理工作。

而在 worker 线程中，workers 也可以调用自己的 {{domxref("WorkerGlobalScope", "close")}} 方法进行关闭：

```js
close();
```

### 处理错误

当 worker 出现运行中错误时，它的 `onerror` 事件处理函数会被调用。它会收到一个扩展了 `ErrorEvent` 接口的名为 `error`的事件。

该事件不会冒泡并且可以被取消；为了防止触发默认动作，worker 可以调用错误事件的 [`preventDefault()`](/zh-CN/docs/Web/API/Event/preventDefault)方法。

错误事件有以下三个用户关心的字段：

- `message`
  - : 可读性良好的错误消息。
- `filename`
  - : 发生错误的脚本文件名。
- `lineno`
  - : 发生错误时所在脚本文件的行号。

### 生成 subworker

如果需要的话 worker 能够生成更多的 worker。这就是所谓的 subworker，它们必须托管在同源的父页面内。而且，subworker 解析 URI 时会相对于父 worker 的地址而不是自身页面的地址。这使得 worker 更容易记录它们之间的依赖关系。

### 引入脚本与库

Worker 线程能够访问一个全局函数`importScripts()`来引入脚本，该函数接受 0 个或者多个 URI 作为参数来引入资源；以下例子都是合法的：

```js
importScripts();                        /* 什么都不引入 */
importScripts('foo.js');                /* 只引入 "foo.js" */
importScripts('foo.js', 'bar.js');      /* 引入两个脚本 */
```

浏览器加载并运行每一个列出的脚本。每个脚本中的全局对象都能够被 worker 使用。如果脚本无法加载，将抛出 `NETWORK_ERROR` 异常，接下来的代码也无法执行。而之前执行的代码 (包括使用 {{ domxref("window.setTimeout()") }} 异步执行的代码) 依然能够运行。`importScripts()` **之后**的函数声明依然会被保留，因为它们始终会在其他代码之前运行。

> **备注：** 脚本的下载顺序不固定，但执行时会按照传入 `importScripts()` 中的文件名顺序进行。这个过程是同步完成的；直到所有脚本都下载并运行完毕，`importScripts()` 才会返回。

## 共享 worker

一个共享 worker 可以被多个脚本使用——即使这些脚本正在被不同的 window、iframe 或者 worker 访问。这一部分，我们会讨论[共享 worker 基础示例](https://github.com/mdn/simple-shared-worker)（[运行共享 worker](https://mdn.github.io/simple-shared-worker/)）中的 javascript 代码：该示例与专用 worker 基础示例非常相像，只是有 2 个可用函数被存放在不同脚本文件中：两数相乘函数，以及求平方函数。这两个脚本用同一个 worker 来完成实际需要的运算。

这里，我们关注一下专用 worker 和共享 worker 之间的区别。在这个示例中有 2 个 HTML 页面，每个页面所包含的 javascript 代码使用的是同一个 worker。

> **备注：** 如果共享 worker 可以被多个浏览上下文调用，所有这些浏览上下文必须属于同源（相同的协议，主机和端口号）。

> **备注：** 在 Firefox 中，共享 worker 不能被私有和非私有 window 对象的 document 所共享（[Firefox bug 1177621](https://bugzil.la/1177621)）。

### 生成一个共享 worker

生成一个新的共享 worker 与生成一个专用 worker 非常相似，只是构造器的名字不同（查看 [index.html](https://github.com/mdn/simple-shared-worker/blob/gh-pages/index.html) 和 [index2.html](https://mdn.github.io/simple-shared-worker/index2.html)）——生成共享 worker 的代码如下：

```js
var myWorker = new SharedWorker('worker.js');
```

一个非常大的区别在于，与一个共享 worker 通信必须通过端口对象——一个确切的打开的端口供脚本与 worker 通信（在专用 worker 中这一部分是隐式进行的）。

在传递消息之前，端口连接必须被显式的打开，打开方式是使用 onmessage 事件处理函数或者 start() 方法。示例中的 [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) 和 [worker.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/worker.js) 文件没有调用了 start() 方法，这些调用并不那么重要是因为 onmessage 事件处理函数正在被使用。start() 方法的调用只在一种情况下需要，那就是消息事件被 addEventListener() 方法使用。

在使用 start() 方法打开端口连接时，如果父级线程和 worker 线程需要双向通信，那么它们都需要调用 start() 方法。

```js
myWorker.port.start();  // 父级线程中的调用
```

```js
port.start(); // worker 线程中的调用，假设 port 变量代表一个端口
```

### 共享 worker 中消息的接收和发送

现在，消息可以像之前那样发送到 worker 了，但是`postMessage()` 方法必须被端口对象调用（你会再一次看到 [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) 和 [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js)中相似的结构）：

```js
squareNumber.onchange = function() {
  myWorker.port.postMessage([squareNumber.value,squareNumber.value]);
  console.log('Message posted to worker');
}
```

回到 worker 中，这里也有一些些复杂（[worker.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/worker.js)）:

```js
onconnect = function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  }
}
```

首先，当一个端口连接被创建时（例如：在父级线程中，设置 onmessage 事件处理函数，或者显式调用 start() 方法时），使用 onconnect 事件处理函数来执行代码。

使用事件的 ports 属性来获取端口并存储在变量中。

然后，为端口添加一个消息处理函数用来做运算并回传结果给主线程。在 worker 线程中设置此消息处理函数也会隐式的打开与主线程的端口连接，因此这里跟前文一样，对 port.start() 的调用也是不必要的。

最后，回到主脚本，我们处理消息（你会又一次看到 [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) 和 [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js)中相似的结构）：

```js
myWorker.port.onmessage = function(e) {
  result2.textContent = e.data;
  console.log('Message received from worker');
}
```

当一条消息通过端口回到 worker，我们检查结果的类型，然后将运算结果放入结果段落中合适的地方。

## 关于线程安全

{{domxref("Worker")}}接口会生成真正的操作系统级别的线程，如果你不太小心，那么并发会对你的代码产生有趣的影响。然而，对于 web worker 来说，与其他线程的通信点会被很小心的控制，这意味着你很难引起并发问题。你没有办法去访问非线程安全的组件或者是 DOM，此外你还需要通过序列化对象来与线程交互特定的数据。所以你要是不费点劲儿，还真搞不出错误来。

## 内容安全策略

有别于创建它的 document 对象，worker 有它自己的执行上下文。因此普遍来说，worker 并不受限于创建它的 document（或者父级 worker）的内容安全策略。我们来举个例子，假设一个 document 有如下头部声明：

```
Content-Security-Policy: script-src 'self'
```

这个声明有一部分作用在于，禁止它内部包含的脚本代码使用 eval() 方法。然而，如果脚本代码创建了一个 worker，在 worker 上下文中执行的代码却是可以使用 eval() 的。

为了给 worker 指定内容安全策略，必须为发送 worker 代码的请求本身加上一个 [内容安全策略](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy)。

有一个例外情况，即 worker 脚本的源如果是一个全局性的唯一的标识符（例如，它的 URL 指定了数据模式或者 blob），worker 则会继承创建它的 document 或者 worker 的 CSP（Content security policy 内容安全策略）。

## worker 中数据的接收与发送：详细介绍

在主页面与 worker 之间传递的数据是通过**拷贝**，而不是共享来完成的。传递给 `worker` 的对象需要经过序列化，接下来在另一端还需要反序列化。页面与 `worker` **不会共享同一个实例**，最终的结果就是在每次通信结束时生成了数据的**一个副本**。大部分浏览器使用[结构化克隆](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)来实现该特性。

在往下进行之前，出于教学的目的，让我们创建一个名为 `emulateMessage()` 的函数，它将模拟在从 `worker` 到主页面 (反之亦然) 的通信过程中，变量的「_拷贝而非共享_」行为：

```js
function emulateMessage (vVal) {
    return eval("(" + JSON.stringify(vVal) + ")");
}

// Tests

// test #1
var example1 = new Number(3);
alert(typeof example1); // object
alert(typeof emulateMessage(example1)); // number

// test #2
var example2 = true;
alert(typeof example2); // boolean
alert(typeof emulateMessage(example2)); // boolean

// test #3
var example3 = new String("Hello World");
alert(typeof example3); // object
alert(typeof emulateMessage(example3)); // string

// test #4
var example4 = {
    "name": "John Smith",
    "age": 43
};
alert(typeof example4); // object
alert(typeof emulateMessage(example4)); // object

// test #5
function Animal (sType, nAge) {
    this.type = sType;
    this.age = nAge;
}
var example5 = new Animal("Cat", 3);
alert(example5.constructor); // Animal
alert(emulateMessage(example5).constructor); // Object
```

拷贝而并非共享的那个值称为 _消息_。再来谈谈 `worker`，你可以使用 `postMessage()` 将消息传递给主线程或从主线程传送回来。`message` 事件的 `data` 属性就包含了从 worker 传回来的数据。

**example.html**: (主页面):

```js
var myWorker = new Worker("my_task.js");

myWorker.onmessage = function (oEvent) {
  console.log("Worker said : " + oEvent.data);
};

myWorker.postMessage("ali");
```

**my_task.js** (worker):

```js
postMessage("I\'m working before postMessage(\'ali\').");

onmessage = function (oEvent) {
  postMessage("Hi " + oEvent.data);
};
```

[结构化拷贝](/zh-CN/docs/Web/Guide/API/DOM/The_structured_clone_algorithm)算法可以接收 JSON 数据以及一些 JSON 不能表示的数据——比如循环引用。

### 传递数据的例子

#### 例子 #1：创建一个通用的「异步 [`eval()`](/zh-CN/docs/JavaScript/Reference/Global_Objects/eval)」

下面这个例子介绍了，如何在 worker 内使用 `eval()` 来按顺序执行**异步的**任何种类的 JavaScript 代码：

```js
// Syntax: asyncEval(code[, listener])

var asyncEval = (function () {

  var aListeners = [], oParser = new Worker("data:text/javascript;charset=US-ASCII,onmessage%20%3D%20function%20%28oEvent%29%20%7B%0A%09postMessage%28%7B%0A%09%09%22id%22%3A%20oEvent.data.id%2C%0A%09%09%22evaluated%22%3A%20eval%28oEvent.data.code%29%0A%09%7D%29%3B%0A%7D");

  oParser.onmessage = function (oEvent) {
    if (aListeners[oEvent.data.id]) { aListeners[oEvent.data.id](oEvent.data.evaluated); }
    delete aListeners[oEvent.data.id];
  };


  return function (sCode, fListener) {
    aListeners.push(fListener || null);
    oParser.postMessage({
      "id": aListeners.length - 1,
      "code": sCode
    });
  };

})();
```

[data URL](/zh-CN/docs/Web/HTTP/data_URIs) 相当于一个网络请求，它有如下返回：

```
onmessage = function(oEvent) {
  postMessage({
    'id': oEvent.data.id,
    'evaluated': eval(oEvent.data.code)
  });
}
```

示例使用：

```js
// asynchronous alert message...
asyncEval("3 + 2", function (sMessage) {
    alert("3 + 2 = " + sMessage);
});

// asynchronous print message...
asyncEval("\"Hello World!!!\"", function (sHTML) {
    document.body.appendChild(document.createTextNode(sHTML));
});

// asynchronous void...
asyncEval("(function () {\n\tvar oReq = new XMLHttpRequest();\n\toReq.open(\"get\", \"http://www.mozilla.org/\", false);\n\toReq.send(null);\n\treturn oReq.responseText;\n})()");
```

#### 例子 #2：传输 JSON 的高级方式和创建一个交换系统

如果你需要传输非常复杂的数据，还要同时在主页与 Worker 内调用多个方法，那么可以考虑创建一个类似下面的系统。

首先，我们创建一个 QueryableWorker 的类，它接收 worker 的 url、一个默认侦听函数、和一个错误处理函数作为参数，这个类将会记录所有的侦听的列表并且帮助我们与 worker 进行通信。

```
function QueryableWorker(url, defaultListener, onError) {
    var instance = this,
        worker = new Worker(url),
        listeners = {};

    this.defaultListener = defaultListener || function() {};

    if (onError) {worker.onerror = onError;}

    this.postMessage = function(message) {
        worker.postMessage(message);
    }

    this.terminate = function() {
        worker.terminate();
    }
}
```

紧接着，我们写出新增和删除侦听的方法。

```
this.addListeners = function(name, listener) {
    listeners[name] = listener;
}

this.removeListeners = function(name) {
    delete listeners[name];
}
```

这里我们让 worker 处理 2 个这样的简单操作：区别 2 个数字并在 3 秒后弹框提示。为了完成这个操作，我们首先实现一个 sendQuery 方法，该方法可以查询 worker 是否真正有我们所需要的对应方法。

```
/*
  This functions takes at least one argument, the method name we want to query.
  Then we can pass in the arguments that the method needs.
 */
this.sendQuery = function() {
    if (arguments.length < 1) {
         throw new TypeError('QueryableWorker.sendQuery takes at least one argument');
         return;
    }
    worker.postMessage({
        'queryMethod': arguments[0],
        'queryArguments': Array.prototype.slice.call(arguments, 1)
    });
}
```

我们以`onmessage 方法作为`QueryableWorker 的结尾。如果 worker 有我们所需要的对应的方法，它就会返回相对应的侦听方法的名字以及所需要的参数，我们只需要在侦听列表`listeners 中找到它：`

```
worker.onmessage = function(event) {
    if (event.data instanceof Object &&
        event.data.hasOwnProperty('queryMethodListener') &&
        event.data.hasOwnProperty('queryMethodArguments')) {
        listeners[event.data.queryMethodListener].apply(instance, event.data.queryMethodArguments);
    } else {
        this.defaultListener.call(instance, event.data);
    }
}
```

现在回到 worker 中。首先我们需要一个能够完成这 2 个操作的方法：

```
var queryableFunctions = {
    getDifference: function(a, b) {
        reply('printStuff', a - b);
    },
    waitSomeTime: function() {
        setTimeout(function() {
            reply('doAlert', 3, 'seconds');
        }, 3000);
    }
}

function reply() {
    if (arguments.length < 1) {
        throw new TypeError('reply - takes at least one argument');
        return;
    }
    postMessage({
        queryMethodListener: arguments[0],
        queryMethodArguments: Array.prototype.slice.call(arguments, 1)
    });
}

/* This method is called when main page calls QueryWorker's postMessage method directly*/
function defaultReply(message) {
    // do something
}
```

`onmessage 方法也就很简单了：`

```
onmessage = function(event) {
    if (event.data instanceof Object &&
        event.data.hasOwnProperty('queryMethod') &&
        event.data.hasOwnProperty('queryMethodArguments')) {
        queryableFunctions[event.data.queryMethod]
            .apply(self, event.data.queryMethodArguments);
    } else {
        defaultReply(event.data);
    }
}
```

接下来给出一个完整的实现：

**example.html** (the main page):

```html
<!doctype html>
<html>
<head>
<meta charset="UTF-8"  />
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
  function QueryableWorker (sURL, fDefListener, fOnError) {
    var oInstance = this, oWorker = new Worker(sURL), oListeners = {};
    this.defaultListener = fDefListener || function () {};
    oWorker.onmessage = function (oEvent) {
      if (oEvent.data instanceof Object && oEvent.data.hasOwnProperty("vo42t30") && oEvent.data.hasOwnProperty("rnb93qh")) {
        oListeners[oEvent.data.vo42t30].apply(oInstance, oEvent.data.rnb93qh);
      } else {
        this.defaultListener.call(oInstance, oEvent.data);
      }
    };
    if (fOnError) { oWorker.onerror = fOnError; }
    this.sendQuery = function (/* queryable function name, argument to pass 1, argument to pass 2, etc. etc */) {
      if (arguments.length < 1) { throw new TypeError("QueryableWorker.sendQuery - not enough arguments"); return; }
      oWorker.postMessage({ "bk4e1h0": arguments[0], "ktp3fm1": Array.prototype.slice.call(arguments, 1) });
    };
    this.postMessage = function (vMsg) {
      //I just think there is no need to use call() method
      //how about just oWorker.postMessage(vMsg);
      //the same situation with terminate
      //well,just a little faster,no search up the prototye chain
      Worker.prototype.postMessage.call(oWorker, vMsg);
    };
    this.terminate = function () {
      Worker.prototype.terminate.call(oWorker);
    };
    this.addListener = function (sName, fListener) {
      oListeners[sName] = fListener;
    };
    this.removeListener = function (sName) {
      delete oListeners[sName];
    };
  };

  // your custom "queryable" worker
  var oMyTask = new QueryableWorker("my_task.js" /* , yourDefaultMessageListenerHere [optional], yourErrorListenerHere [optional] */);

  // your custom "listeners"

  oMyTask.addListener("printSomething", function (nResult) {
    document.getElementById("firstLink").parentNode.appendChild(document.createTextNode(" The difference is " + nResult + "!"));
  });

  oMyTask.addListener("alertSomething", function (nDeltaT, sUnit) {
    alert("Worker waited for " + nDeltaT + " " + sUnit + " :-)");
  });
</script>
</head>
<body>
  <ul>
    <li><a id="firstLink" href="javascript:oMyTask.sendQuery('getDifference', 5, 3);">What is the difference between 5 and 3?</a></li>
    <li><a href="javascript:oMyTask.sendQuery('waitSomething');">Wait 3 seconds</a></li>
    <li><a href="javascript:oMyTask.terminate();">terminate() the Worker</a></li>
  </ul>
</body>
</html>
```

**my_task.js** (the worker):

```js
// your custom PRIVATE functions

function myPrivateFunc1 () {
  // do something
}

function myPrivateFunc2 () {
  // do something
}

// etc. etc.

// your custom PUBLIC functions (i.e. queryable from the main page)

var queryableFunctions = {
  // example #1: get the difference between two numbers:
  getDifference: function (nMinuend, nSubtrahend) {
      reply("printSomething", nMinuend - nSubtrahend);
  },
  // example #2: wait three seconds
  waitSomething: function () {
      setTimeout(function() { reply("alertSomething", 3, "seconds"); }, 3000);
  }
};

// system functions

function defaultQuery (vMsg) {
  // your default PUBLIC function executed only when main page calls the queryableWorker.postMessage() method directly
  // do something
}

function reply (/* listener name, argument to pass 1, argument to pass 2, etc. etc */) {
  if (arguments.length < 1) { throw new TypeError("reply - not enough arguments"); return; }
  postMessage({ "vo42t30": arguments[0], "rnb93qh": Array.prototype.slice.call(arguments, 1) });
}

onmessage = function (oEvent) {
  if (oEvent.data instanceof Object && oEvent.data.hasOwnProperty("bk4e1h0") && oEvent.data.hasOwnProperty("ktp3fm1")) {
    queryableFunctions[oEvent.data.bk4e1h0].apply(self, oEvent.data.ktp3fm1);
  } else {
    defaultQuery(oEvent.data);
  }
};
```

这个实例中，可以对从主页面到 worker、以及 worker 到主页面之间传递的消息内容进行切换。而且属性名"queryMethod", "queryMethodListeners","queryMethodArguments"可以是任何东西，只要它们在`QueryableWorker 和 worker`中保持一致。

### 通过转让所有权 (可转让对象) 来传递数据

Google Chrome 17 与 Firefox 18 包含另一种性能更高的方法来将特定类型的对象 ([可转让对象](http://w3c.github.io/html/infrastructure.html#transferable-objects)) 传递给一个 worker/从 worker 传回。可转让对象从一个上下文转移到另一个上下文而不会经过任何拷贝操作。这意味着当传递大数据时会获得极大的性能提升。如果你从 C/C++ 世界来，那么把它想象成按照引用传递。然而与按照引用传递不同的是，一旦对象转让，那么它在原来上下文的那个版本将不复存在。该对象的所有权被转让到新的上下文内。例如，当你将一个 [ArrayBuffer](/zh-CN/JavaScript_typed_arrays/ArrayBuffer) 对象从主应用转让到 Worker 中，原始的 `ArrayBuffer` 被清除并且无法使用。它包含的内容会 (完整无差的) 传递给 Worker 上下文。

```js
// Create a 32MB "file" and fill it.
var uInt8Array = new Uint8Array(1024*1024*32); // 32MB
for (var i = 0; i < uInt8Array .length; ++i) {
  uInt8Array[i] = i;
}

worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

> **备注：** 获取更多该方法相关的可转让对象、性能及特性检测等方法，请参阅 HTML5 Rocks 中的[Transferable Objects: Lightning Fast!](http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast) 。

## 嵌入式 worker

目前没有一种「官方」的方法能够像 {{ HTMLElement("script") }} 元素一样将 worker 的代码嵌入的网页中。但是如果一个 {{ HTMLElement("script") }} 元素没有 `src` 特性，并且它的 `type` 特性没有指定成一个可运行的 `mime-type`，那么它就会被认为是一个数据块元素，并且能够被 JavaScript 使用。「数据块」是 HTML5 中一个十分常见的特性，它可以携带几乎任何文本类型的数据。所以，你能够以如下方式嵌入一个 worker：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>MDN Example - Embedded worker</title>
<script type="text/js-worker">
  // 该脚本不会被 JS 引擎解析，因为它的 mime-type 是 text/js-worker。
  var myVar = "Hello World!";
  // 剩下的 worker 代码写到这里。
</script>
<script type="text/javascript">
  // 该脚本会被 JS 引擎解析，因为它的 mime-type 是 text/javascript。
  function pageLog (sMsg) {
    // 使用 fragment：这样浏览器只会进行一次渲染/重排。
    var oFragm = document.createDocumentFragment();
    oFragm.appendChild(document.createTextNode(sMsg));
    oFragm.appendChild(document.createElement("br"));
    document.querySelector("#logDisplay").appendChild(oFragm);
  }
</script>
<script type="text/js-worker">
  // 该脚本不会被 JS 引擎解析，因为它的 mime-type 是 text/js-worker。
  onmessage = function (oEvent) {
    postMessage(myVar);
  };
  // 剩下的 worker 代码写到这里。
</script>
<script type="text/javascript">
  // 该脚本会被 JS 引擎解析，因为它的 mime-type 是 text/javascript。

  // 在过去...：
  // 我们使用 blob builder
  // ...但是现在我们使用 Blob...:
  var blob = new Blob(Array.prototype.map.call(document.querySelectorAll("script[type=\"text\/js-worker\"]"), function (oScript) { return oScript.textContent; }),{type: "text/javascript"});

  // 创建一个新的 document.worker 属性，包含所有 "text/js-worker" 脚本。
  document.worker = new Worker(window.URL.createObjectURL(blob));

  document.worker.onmessage = function (oEvent) {
    pageLog("Received: " + oEvent.data);
  };

  // 启动 worker.
  window.onload = function() { document.worker.postMessage(""); };
</script>
</head>
<body><div id="logDisplay"></div></body>
</html>
```

现在，嵌入式 worker 已经嵌套进了一个自定义的 `document.worker` 属性中。

这样也不足为奇，你仍然可以将一个函数转换为 blob，然后为这个 blob 生成 URL 对象。比如：

```
function fn2workerURL(fn) {
  var blob = new Blob(['('+fn.toString()+')()'], {type: 'application/javascript'})
  return URL.createObjectURL(blob)
}
```

## 更多示例

本节提供了几个如何使用 DOM worker 的例子。

### 在后台执行运算

worker 的一个优势在于能够执行处理器密集型的运算而不会阻塞 UI 线程。在下面的例子中，worker 用于计算斐波那契数。

#### JavaScript 代码

下面的 JavaScript 代码保存在「fibonacci.js」文件中，与下一节的 HTML 文件关联。

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

onmessage = function(event) {
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

worker 将属性 `onmessage` 设置为一个函数，当 worker 对象调用 `postMessage() 时该函数会接收到发送过来的信息。`(注意，这么使用并不等同于定义一个同名的全局*变量* ，或是定义一个同名的*函数*。`var onmessage` 与 `function onmessage` 将会定义与该名字相同的全局属性，但是它们不会注册能够接收从创建 worker 的网页发送过来的消息的函数。) 这会启用递归，生成自己的新拷贝来处理计算的每一个循环。

#### HTML 代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"  />
    <title>Test threads fibonacci</title>
  </head>
  <body>

  <div id="result"></div>

  <script language="javascript">

    var worker = new Worker("fibonacci.js");

    worker.onmessage = function(event) {
      document.getElementById("result").textContent = event.data;
      dump("Got: " + event.data + "\n");
    };

    worker.onerror = function(error) {
      dump("Worker error: " + error.message + "\n");
      throw error;
    };

    worker.postMessage("5");

  </script>
  </body>
</html>
```

网页创建了一个 `div` 元素，ID 为 `result` ，用它来显示运算结果，然后生成 worker。在生成 worker 后，`onmessage` 处理函数配置为通过设置 `div` 元素的内容来显示运算结果，然后 `onerror` 处理函数被设置为 [转储](</en/Debugging_JavaScript#dump()>) 错误信息。

最后，向 worker 发送一条信息来启动它。

[运行这个例子](/samples/workers/fibonacci)。

### 在后台运行 web I/O

你可以在 [在扩展中使用 worker](/En/Using_workers_in_extensions) 这篇文章中找到相关例子。

### 划分任务给多个 worker

当多核系统流行开来，将复杂的运算任务分配给多个 worker 来运行已经变得十分有用，这些 worker 会在多处理器内核上运行这些任务。

## 其它类型的 worker

除了专用和共享的 web worker，还有一些其它类型的 worker：

- [ServiceWorkers](/zh-CN/docs/Web/API/ServiceWorker_API) （服务 worker）一般作为 web 应用程序、浏览器和网络（如果可用）之前的代理服务器。它们旨在（除开其他方面）创建有效的离线体验，拦截网络请求，以及根据网络是否可用采取合适的行动并更新驻留在服务器上的资源。他们还将允许访问推送通知和后台同步 API。
- Chrome Workers 是一种仅适用于 firefox 的 worker。如果您正在开发附加组件，希望在扩展程序中使用 worker 且有在你的 worker 中访问 [js-ctypes](/zh-CN/js-ctypes) 的权限，你可以使用 Chrome Workers。详情请参阅{{domxref("ChromeWorker")}}。
- [Audio Workers](/zh-CN/docs/Web/API/Web_Audio_API#Audio_Workers) （音频 worker）使得在 web worker 上下文中直接完成脚本化音频处理成为可能。

## worker 中可用的函数和接口

你可以在 web worker 中使用大多数的标准 javascript 特性，包括

- {{domxref("Navigator")}}
- {{domxref("XMLHttpRequest")}}
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, and {{jsxref("Global_Objects/String", "String")}}
- {{domxref("WindowTimers.setTimeout")}} and {{domxref("WindowTimers.setInterval")}}

在一个 worker 中最主要的你不能做的事情就是直接影响父页面。包括操作父页面的节点以及使用页面中的对象。你只能间接地实现，通过{{domxref("DedicatedWorkerGlobalScope.postMessage")}}回传消息给主脚本，然后从主脚本那里执行操作或变化。

> **备注：** 获取 worker 中完整的方法列表，请参阅[Functions and interfaces available to workers](/zh-CN/docs/Web/Reference/Functions_and_classes_available_to_workers)。

## 规范

{{Specifications}}

## 相关链接

- [`Worker`](/zh-CN/docs/Web/API/Worker) 接口
- [`SharedWorker`](/zh-CN/docs/Web/API/SharedWorker) 接口
- [worker 提供的方法](/zh-CN/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
