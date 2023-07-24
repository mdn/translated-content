---
title: 使用 Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
---

Web Workers 提供簡單的方法讓網頁在背景執行緒 (Thread) 中執行程式，而不干擾使用者介面運行，另外，Worker 也可以利用 [XMLHttpRequest](/zh-TW/nsIXMLHttpRequest) 執行輸出/輸入(但是 responseXML 和 channel 這兩個屬性為 null)；一個 worker 可以藉由事件處理器來和 web worker 創造端互相傳送訊息，接下來本文會提供使用 web worker 的詳細說明。

## Web Workers API

透過 worker 建構子 (如 {{domxref("Worker.Worker", "Worker()")}}) 便可以產生 worker 物件，並且執行 JavaScript 檔案。在 worker 中的 JavaScript 運行在不同於 {{domxref("window")}} 的執行緒環境，所以在 worker 中存取全域物件應該要透過 {{domxref("window.self","self")}}，如果透過 {{domxref("window")}} 會導致錯誤發生。

Dedicated worker (專有 worker) 是一般 worker，只能被產生它的檔案存取，{{domxref("DedicatedWorkerGlobalScope")}} 物件代表其執行環境；而 Shared worker (共享 worker) 則能夠被不同檔案存取，{{domxref("SharedWorkerGlobalScope")}}) 物件代表其執行環境。

> **備註：** worker 其他文件說明請見 [The Web Workers API landing page](/zh-TW/docs/Web/API/Web_Workers_API) 。

基本上 worker 能夠執行任何事情，比如說 [WebSockets](/zh-TW/docs/Web/API/WebSockets_API)、[IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API)、和 Firefox OS 特有的 [Data Store API](/zh-TW/docs/Web/API/Data_Store_API) ，然而直接存取 DOM 或是 {{domxref("window")}} 物件的一些方法和屬性則不被允許，更多細節請見 [worker 可存取知函數和類別](/zh-TW/docs/Web/API/Worker/Functions_and_classes_available_to_workers)。

主執行緒和 worker 執行緒之間用 postMessage() 方法發送訊息，然後透過 `onmessage` 事件接受訊息 (訊息存在 {{domxref("Worker/message_event", "message")}} 事件的 data 屬性之中)，其中被傳送的資料並非共享而是複製一份後傳送。

worker 可以產生新 worker，只要新 worker 的來源 (origin) 和父頁面相同，也可以利用 [XMLHttpRequest](/zh-TW/nsIXMLHttpRequest) 執行輸出/輸入(但是 responseXML 和 channel 這兩個屬性為 null)。

## Dedicated workers

dedicated worker 只能被產生它的檔案存取，下面我們先介紹簡單的 [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)) 範例。這個範例會將兩個數字送入 worker 相乘，然後再於前端頁面顯示相乘結果。

### 偵測 Worker 功能

為了向下相容、避免錯誤，最好是確保 worker 存在後再取用之 ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)):

```js
if (window.Worker) {

  ...

}
```

### 產生 dedicated worker

只要呼叫 {{domxref("Worker.Worker", "Worker()")}} 建構子，傳入 JS 檔案的 URI，便可以生成一個 worker 執行緒 ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)):

```js hidden
var myWorker = new Worker("worker.js");
```

### 和 dedicated worker 發送訊息

{{domxref("Worker.postMessage", "postMessage()")}} 方法以及 {{domxref("Worker.onmessage", "onmessage")}} 事件處理器就是和 worker 發送訊息的關鍵 ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)):

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

範例中有兩個 {{htmlelement("input")}} 元素，first 和 second，當元素值改變時，我們會利用 postMessage() 方法告訴 worker 改變的值 (這邊用陣列，也可以用其他類別)。

然後在 worker 裡我們從 `onmessage` 接收訊息 ([worker.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/worker.js)):

```js
onmessage = function (e) {
  console.log("Message received from main script");
  var workerResult = "Result: " + e.data[0] * e.data[1];
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

`onmessage` 事件物件的 data 屬性存有傳送過來的訊息資料，也就是 input 值；worker 收到後將傳過來的兩個值相乘，再 postMessage 傳回去。

回到主執行，同樣透過 `onmessage` 事件，收到 worker 回傳還來的計算值 :

```js
myWorker.onmessage = function (e) {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

拿到存在事件 data 中的計算值後，我們接著將值以 `textContent` 顯示出來。

> **備註：** `建構 Worker` 的 URI 必須遵從[same-origin policy](/zh-TW/docs/Web/Security/Same-origin_policy)。目前各家瀏覽器在這方面存有歧異，Gecko 10.0 以後允許 data URI 而 Internet Explorer 10 不允許 Blob URI。

> **備註：** 在主執行緒中存取 `onmessage` `與 postMessage` 需要主動掛在 worker 物件上，在 worker 執行緒則不用，這是因為 worker 執行緒的全域物件便是 worker 物件。

> **備註：** 和 worker 傳送的資料並非共享而是複製一份後傳送，詳細請參照 [和 workers 傳遞資料：更多細節](#和_workers_傳遞資料：更多細節)。

### 結束 worker

`在主執行緒裡呼叫` {{domxref("Worker", "terminate")}} 就可結束 worker :

```js
myWorker.terminate();
```

請注意不論 worker 正在執行的運算完成與否，一但呼叫後 worker 便會立刻被終止。

而在 worker 執行緒裡，worker 可以呼叫自己的 {{domxref("WorkerGlobalScope", "close")}} 方法來結束 :

```js
close();
```

### 錯誤處理

當執行時期錯誤發生時，onerror 事件處理器會被呼叫，onerror 事件處理器會收到一名為 error 的事件物件 (實作 ErrorEvent Interface)，該事件不會 bubble 且可取消，如果要避免事件預設行為，可以呼叫 [`preventDefault()`](/zh-TW/docs/Web/API/Event/preventDefault)。

以下三個部分是錯誤事件較關鍵的地方:

- `message`
  - : 供人閱讀的錯誤訊息
- `filename`
  - : 錯誤發生所在的檔案名稱
- `lineno`
  - : 錯誤發生所在的行數

### 產生 subworker

worker 可以產生其他 worker (subworker)，subworker 的來源也必須和主頁相同，另外，subworker 的 URI 的解析是相對於父 worker 的位置而非所在頁面，這項特色有助於追蹤 worker 間的相依性。

### 引入程式腳本與函式庫 (library)

Worker 執行緒能存取一個全域函數 (global function), importScripts()。importScripts() 可以讓 worker 端引入相同網域的程式碼腳本與 libraries，importScripts()可接收零到數個要被輸入資源的 URI，底下為幾個範例:

```js
importScripts(); /* imports nothing */
importScripts("foo.js"); /* imports just "foo.js" */
importScripts("foo.js", "bar.js"); /* imports two scripts */
```

瀏覽器會載入並執行每個程式碼腳本，然後 worker 能夠存取程式碼腳本內定義的全域變數，若是腳本無法載入，會產生一個 NETWORK_ERROR，後續的程式碼不會被執行，但是先前執行過的程式碼或用 [window.setTimeout()](/zh-TW/docs/Web/API/window.setTimeout) 延遲執行的程式碼依然有效，而 importScripts() 之後宣告的函數也一樣存在，因為這些程式碼總是在其他程式碼之前就解析過了。

> **備註：** 雖然程式碼腳本的下載順序不一定，但執行順序會遵照傳入 importScripts()的順序，這是同步完成的，importScripts()不會回傳直到所有的程式碼都下載並執行完。

## Shared workers

shared worker 能夠被多個程式腳本存取，縱使跨越不同 window、iframe 或 worker。這邊的 [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](http://mdn.github.io/simple-shared-worker/)) 範例和 dedicated worker 範例類似，但多了兩個可以讓多個檔案存取的函數：_數字相乘以及數字平方_。

請注意 dedicated worker 與 shared worker 間的差異處，範例裡會有兩份 HTML 頁面，各自都利用同一個 worker 處理運算。

> **備註：** 所有的瀏覽環境都必需共享相同的來源（相同 protocol, host 和 port），shared worker 才能讓不同瀏覽環境存取。

> **備註：** 在 Firefox，shared worker 無法在一般和隱私模式間共享（[Firefox bug 1177621](https://bugzil.la/1177621)）。

### 產生 shared worker

和 dedicated worker 做法差不多，只是用另一個 SharedWorker 建構子來產生 shared worker，見 [index.html](https://github.com/mdn/simple-shared-worker/blob/gh-pages/index.html) 和 [index2.html](http://mdn.github.io/simple-shared-worker/index2.html):

```js
var myWorker = new SharedWorker("worker.js");
```

相當不 一樣的是和 shared worker 溝通必須要透過 port 物件，其實 dedicated worker 也是如此，只不過一切是在背景後自動完成。

開啟 port 連線一是在 onmessage 事件下背景完成，二是藉由主動呼叫 start() 好開始傳送訊息。範例 [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) 以及 [worker.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/worker.js) 因為註冊了 onmessage 事件，所以其實可以省略呼叫 start()，然而若是 message 事件是經由 `addEventListener()註冊，那麼便需要呼叫 start() 了。`

當使用 start() 開啟 port 連線，那麼雙向溝通便需要主執行緒和 worker 兩端都呼叫 start()。

```js
myWorker.port.start(); // called in parent thread
```

```js
port.start(); // called in worker thread, assuming the port variable references a port
```

### 和 shared worker 發送訊息

如同前面，現在可以呼叫 `postMessage()` 發送訊息，只不過這次需要透過 port 物件 (一樣請參考 [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) 和 [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js)):

```js
squareNumber.onchange = function () {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

worker 方面也增加了一些程式碼 ([worker.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/worker.js)):

```js
onconnect = function (e) {
  var port = e.ports[0];
  port.onmessage = function (e) {
    var workerResult = "Result: " + e.data[0] * e.data[1];
    port.postMessage(workerResult);
  };
  port.start(); // not necessary since onmessage event handler is being used
};
```

首先，先監聽連線建立的 onconnect 事件，例如當主執行緒建立 onmessage 事件或呼叫 `start()`。

然後從 onconnect 事件物件，我們可以取得 port 物件使用之。

取得 port 之後，我們註冊 port 上的 onmessage 事件，當有訊息進來便取回資料進行運算後回傳回去；註冊 onmessage 事件的同時也自動建立連線，所以說不需要呼叫 start() 了。

最後在主執行緒端，我們同樣由 onmessage 事件取回回傳過來的訊息 (一樣請參考 [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) 和 [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js)):

```js
myWorker.port.onmessage = function (e) {
  result2.textContent = e.data[0];
  console.log("Message received from worker");
};
```

## 執行緒 (Thread) 安全

{{domxref("Worker")}} 會產生真正 OS 層級的執行緒，細心的開發者或許會擔心同步問題。

不過 worker 會十分注意和其他執行緒溝通的狀況，不會去存取非執行緒安全的元件，如 DOM ，而且資料的傳遞也都序列化 (serialized) ，所以說很難會發生同步問題。

## 和 workers 傳遞資料：更多細節

和 workers 傳遞的資料會先被複製一份，而非共享；經過序列化後 (serialized) 傳輸，然後在另一端反序列化 (de-serialized) 取出，大部份的瀏覽器都是以 [結構化複製 (structured cloning)](/zh-TW/docs/Web/Guide/API/DOM/The_structured_clone_algorithm) 實作這項特色.

下面的 `emulateMessage() 會模擬和 worker 傳遞訊息時，複製資料的行為。`

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

所謂的訊息就是經過複製、非共享的資料，到這邊你應該已經知道 `postMessage()` 負責發送訊息，然後 `message` 事件 {{domxref("MessageEvent.data", "data")}} 的 attribute 則存有傳送的訊息資料。

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

[結構化複製（structured cloning）](/zh-TW/docs/Web/Guide/API/DOM/The_structured_clone_algorithm) 演算法支援 JSON 以及迴圈參照（circular references）。

### 資料傳遞範例

#### 範例 1: 非同步 `eval()`

下面透過 [data URL](/zh-TW/docs/Web/HTTP/data_URIs) 和 `eval()，`示範如何在 worker 非同步執行允許的程式碼：

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

[data URL](/zh-TW/docs/Web/HTTP/data_URIs) 相當於網路請求，範例中的 data URL 會在 worker 執行下列程式碼回應訊息：

```js
onmessage = function (oEvent) {
  postMessage({
    id: oEvent.data.id,
    evaluated: eval(oEvent.data.code),
  });
};
```

應用範例:

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

#### 範例 2: JSON 資料進階傳遞與呼叫系統

下面的範例系統適合需要在主頁面和 worker 傳遞複雜資料和呼叫多個函數的情境。

**example.html** (主頁面):

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
      function QueryableWorker(sURL, fDefListener, fOnError) {
        var oInstance = this,
          oWorker = new Worker(sURL),
          oListeners = {};
        this.defaultListener = fDefListener || function () {};
        oWorker.onmessage = function (oEvent) {
          if (
            oEvent.data instanceof Object &&
            oEvent.data.hasOwnProperty("vo42t30") &&
            oEvent.data.hasOwnProperty("rnb93qh")
          ) {
            oListeners[oEvent.data.vo42t30].apply(
              oInstance,
              oEvent.data.rnb93qh,
            );
          } else {
            this.defaultListener.call(oInstance, oEvent.data);
          }
        };
        if (fOnError) {
          oWorker.onerror = fOnError;
        }
        this.sendQuery =
          function (/* queryable function name, argument to pass 1, argument to pass 2, etc. etc */) {
            if (arguments.length < 1) {
              throw new TypeError(
                "QueryableWorker.sendQuery - not enough arguments",
              );
              return;
            }
            oWorker.postMessage({
              bk4e1h0: arguments[0],
              ktp3fm1: Array.prototype.slice.call(arguments, 1),
            });
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
      }

      // your custom "queryable" worker
      var oMyTask = new QueryableWorker(
        "my_task.js" /* , yourDefaultMessageListenerHere [optional], yourErrorListenerHere [optional] */,
      );

      // your custom "listeners"

      oMyTask.addListener("printSomething", function (nResult) {
        document
          .getElementById("firstLink")
          .parentNode.appendChild(
            document.createTextNode(" The difference is " + nResult + "!"),
          );
      });

      oMyTask.addListener("alertSomething", function (nDeltaT, sUnit) {
        alert("Worker waited for " + nDeltaT + " " + sUnit + " :-)");
      });
    </script>
  </head>
  <body>
    <ul>
      <li>
        <a
          id="firstLink"
          href="javascript:oMyTask.sendQuery('getDifference', 5, 3);"
          >What is the difference between 5 and 3?</a
        >
      </li>
      <li>
        <a href="javascript:oMyTask.sendQuery('waitSomething');"
          >Wait 3 seconds</a
        >
      </li>
      <li>
        <a href="javascript:oMyTask.terminate();">terminate() the Worker</a>
      </li>
    </ul>
  </body>
</html>
```

**my_task.js** (worker):

```js
// your custom PRIVATE functions

function myPrivateFunc1() {
  // do something
}

function myPrivateFunc2() {
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
    setTimeout(function () {
      reply("alertSomething", 3, "seconds");
    }, 3000);
  },
};

// system functions

function defaultQuery(vMsg) {
  // your default PUBLIC function executed only when main page calls the queryableWorker.postMessage() method directly
  // do something
}

function reply(/* listener name, argument to pass 1, argument to pass 2, etc. etc */) {
  if (arguments.length < 1) {
    throw new TypeError("reply - not enough arguments");
    return;
  }
  postMessage({
    vo42t30: arguments[0],
    rnb93qh: Array.prototype.slice.call(arguments, 1),
  });
}

onmessage = function (oEvent) {
  if (
    oEvent.data instanceof Object &&
    oEvent.data.hasOwnProperty("bk4e1h0") &&
    oEvent.data.hasOwnProperty("ktp3fm1")
  ) {
    queryableFunctions[oEvent.data.bk4e1h0].apply(self, oEvent.data.ktp3fm1);
  } else {
    defaultQuery(oEvent.data);
  }
};
```

### 移轉資料所有權 - 可移轉物件 (transferable objects)

Google Chrome 17+ 以及 Firefox 18+ 能夠和 worker 高效能地傳送另外一種特定型態物件 (可移轉物件, transferable objects，這種物件實作了 {{domxref("Transferable")}} 介面)，可移轉物件當被傳送到另一端時並不需要複製，因此可以大大提升傳送大型資料物件的效能；這好比像是 C/C++ 的 pass-by-reference，但是不同的是，一旦移轉後原先的環境便失去了持有資料，例如當主頁面傳送 {{domxref("ArrayBuffer")}} 後，主頁面便不再能夠使用這筆資料物件了，這筆資料物件的存取連結已經靜靜地移轉到 worker 端了。

```js
// Create a 32MB "file" and fill it.
var uInt8Array = new Uint8Array(1024 * 1024 * 32); // 32MB
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i;
}

worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

> **備註：** 關於更多可移轉物件的資訊, 效能和功能偵測，請參考 HTML5 Rocks 上 [Transferable Objects: Lightning Fast!](http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast) 一文。

## Embedded workers

不像 {{HTMLElement("script")}}，並沒有一套正式標準的方法將 worker 的程式碼嵌入到頁面之中，不過沒有 src 屬性而且 mime-type 不屬於可執行程式碼的 {{HTMLElement("script")}} 元素會被視為 javascript 可以取用的資料區塊（data block），資料區塊是一項 HTML5 可用於攜帶文字資料的特色功能，利用資料區塊我們就有辦法嵌入 worker 的程式碼到頁面中：

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>MDN Example - Embedded worker</title>
    <script type="text/js-worker">
      // This script WON'T be parsed by JS engines because its mime-type is text/js-worker.
      var myVar = "Hello World!";
      // Rest of your worker code goes here.
    </script>
    <script type="text/javascript">
      // This script WILL be parsed by JS engines because its mime-type is text/javascript.
      function pageLog(sMsg) {
        // Use a fragment: browser will only render/reflow once.
        var oFragm = document.createDocumentFragment();
        oFragm.appendChild(document.createTextNode(sMsg));
        oFragm.appendChild(document.createElement("br"));
        document.querySelector("#logDisplay").appendChild(oFragm);
      }
    </script>
    <script type="text/js-worker">
      // This script WON'T be parsed by JS engines because its mime-type is text/js-worker.
      onmessage = function (oEvent) {
        postMessage(myVar);
      };
      // Rest of your worker code goes here.
    </script>
    <script type="text/javascript">
      // This script WILL be parsed by JS engines because its mime-type is text/javascript.

      // In the past...:
      // blob builder existed
      // ...but now we use Blob...:
      var blob = new Blob(
        Array.prototype.map.call(
          document.querySelectorAll('script[type="text\/js-worker"]'),
          function (oScript) {
            return oScript.textContent;
          },
        ),
        { type: "text/javascript" },
      );

      // Creating a new document.worker property containing all our "text/js-worker" scripts.
      document.worker = new Worker(window.URL.createObjectURL(blob));

      document.worker.onmessage = function (oEvent) {
        pageLog("Received: " + oEvent.data);
      };

      // Start the worker.
      window.onload = function () {
        document.worker.postMessage("");
      };
    </script>
  </head>
  <body>
    <div id="logDisplay"></div>
  </body>
</html>
```

Embedded worker 在 `document.worker` 之中。

## 其他範例

下面介紹其他使用 worker 的範例。

### 在背景中執行運算

worker 主要的用處在避免重度 CPU 運算的任務阻礙到 UI 執行緒運行；這邊我們用 worker 來跑 Fibonacci 數列運算。

#### JavaScript

fibonacci.js 中的程式碼會被另一份 HTML 引用。

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

worker 程式碼中註冊了一個 `onmessage` 事件處理器用來接收另一端 `postMessage 過來的訊息` (請注意這並非定義一個全域變數或函數，`var onmessage` 或 `function onmessage` 會定義全域變數，但不會註冊事件處理器)，然後開始進行遞迴運算。

#### HTML

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

onmessage 事件處理器會接收 worker 回傳的運算結果，然後顯示在頁面上，如果有問題， onerror 事件處理器會 [輸出](/zh-TW/docs/Debugging_JavaScript#dump.28.29) 錯誤訊息。

和 worker 溝通則是利用 postMessage。

[範例測試](/samples/workers/fibonacci)。

### 在背景中執行 web I/O

範例請見 [Using workers in extensions](/zh-TW/docs/Using_workers_in_extensions) 。

### 分割任務到多個 workers

基於多核 cpu 的普及，分割複雜任務到多個 workers 將可能有助於利用多核心 cpu 的優勢。

## 其他類型的 worker

除了 dedicated 和 shared web workers，還有其他種類：

- [ServiceWorkers](/zh-TW/docs/Web/API/ServiceWorker_API) 基本上如同介於 web app 和瀏覽器以及網路之間的代理伺服器 (proxy server)，這類 worker 重點在實現離線服務，service worker 會攔截網路請求，然後依據網路連線和資源狀態做出反應，他們可以存取推播和背景同步 APIs。
- Chrome Workers 是 Firefox 唯一的 worker 類型，他們可以用在開發 add-ons，或是想要使用 [js-ctypes](/zh-TW/js-ctypes)。詳情請見 {{domxref("ChromeWorker")}}。
- [Audio Workers](/zh-TW/docs/Web/API/Web_Audio_API#Audio_Workers) 主要用於音效處理部分。

## Worker 可存取之函數與介面

大多數 Javascript 的功能 worker 皆可以使用，包含：

- {{domxref("Navigator")}}
- {{domxref("XMLHttpRequest")}}
- {{jsxref("Global_Objects/Array", "Array")}}, {{jsxref("Global_Objects/Date", "Date")}}, {{jsxref("Global_Objects/Math", "Math")}}, 與 {{jsxref("Global_Objects/String", "String")}}
- {{domxref("Window.requestAnimationFrame")}}, {{domxref("WindowTimers.setTimeout")}}, 與 {{domxref("WindowTimers.setInterval")}}

worker 無法操作主頁面的物件與 DOM，如有相關需求，必須要間接透過 {{domxref("DedicatedWorkerGlobalScope.postMessage")}} 通知主頁面，讓主頁面執行需求。

> **備註：** 所有 worker 可存取功能一覽表，請見 [Functions and interfaces available to workers](/zh-TW/docs/Web/Reference/Functions_and_classes_available_to_workers).

## 標準規範

{{Specifications}}

## 延伸閱讀

- [`Worker`](/zh-TW/docs/Web/API/Worker) interface
- [`SharedWorker`](/zh-TW/docs/Web/API/SharedWorker) interface
- [Functions available to workers](/zh-TW/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- [Advanced concepts and examples](/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers)
