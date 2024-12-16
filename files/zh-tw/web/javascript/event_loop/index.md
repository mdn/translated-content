---
title: 並行模型和事件循環
slug: Web/JavaScript/Event_loop
---

{{JsSidebar("Advanced")}}

JavaScript 的並行模型（concurrency model）是基於「事件循環（event loop）」，其在運作上跟 C 或是 Java 有很大的不同。

## 執行環境概念（Runtime concepts）

下面的內容解釋了一個理論模型，現代 JavaScript 引擎實作了及很大程度地最佳化了該圖所描述的語意。

### 視覺化呈現（Visual representation）

![Stack, heap, queue](the_javascript_runtime_environment_example.svg)

### 堆疊（Stack）

呼叫函式（Function）會形成一個 _frame_ 的堆疊。

```js
function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7));
```

當呼叫 `bar` 時，會產生一個含有 `bar` 的參數及區域變數的 frame，而在 `bar` 呼叫了 `foo` 時，含有 `foo` 參數及變數的第二個 frame 就會被置於堆疊的最上面。當 `foo` 回傳後，最上面的 frame 會被抽離堆疊（僅留下 `bar` 的呼叫 frame）。然後當 bar 返回之後，堆疊就會清空。

### 堆積（Heap）

物件被分配在一個堆積中，一個只表示記憶體中的一個無結構的大區域。

### 佇列（Queue）

JavaScript 執行環境包含一個訊息佇列，裡面是待處理的訊息，其中每個訊息都與一個 function 相關聯。當堆疊中有足夠空間時，會從訊息佇列拿取一個訊息進行處理，處理過程包含了呼叫相關聯的 function。只有當堆疊清空時，該訊息才算是完成處理。

## 事件循環（Event loop）

之所以被稱為事件循環，是因為經常被以如下的方式實作：

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

當沒有任何訊息時，`queue.waitForMessage` 會同步地等待新訊息到來。

### 執行到完成（Run-to-completion）

每一個訊息處理完成之後才會執行下一個。當分析你的程式的時候，上述提供了優秀的特性，像是當一個函式開始執行時，他不會被取代且其他程式碼執行前先完成（而且可以修改這個函式操作的資料）。這特性與 C 不同，在 C 當中，當一個函式在執行緒中執行時，隨時可以被其他執行緒中的程式碼中止。

這模型的缺點是：若是一個訊息要執行很久才完成，網頁應用程式會無法執行一些使用者的基本操作，如點擊按鈕或是捲動頁面。瀏覽器為了要緩解這問題，會跳出視窗「該動作回應時間過久（a script taking too long to run）」。良好的實作方式是縮短執行訊息，若可能的話，將一個訊息切成數個訊息執行。

### 添加訊息（Adding message）

瀏覽器中，會添加訊息是由於事件的觸動，以及伴隨著事件的監聽者。若是沒有事件監聽者，則該事件的觸動就不會形成訊息，例如說一個點擊的動作伴隨著點擊事件監聽者就會形成一個新的訊息，其他類事件亦然。

呼叫 [`setTimeout`](/zh-TW/docs/Web/API/Window/setTimeout) 時有兩個參數：第一個是會被加入到佇列中的訊息，第二個參數為延遲時間（預設為`0`）。若無其他訊息在佇列中，則這個訊息會在設定的延遲後立刻被處理。但若佇列內有其他訊息，`setTimeout` 的訊息必須等到其他訊息處理完。因此第二個時間參數只能表示為最少時間，而不是一個精準的時間。

這裡有個示範此概念的例子（`setTimeout`在其計時器到期後不會立刻執行）：

```js
const s = new Date().getSeconds();

setTimeout(function () {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
```

### 零延遲（Zero delay）

「零延遲」並非意味著回呼函式（callback function）會在 0 毫秒之後立刻執行。當使用延遲 0 毫秒參數來呼叫 [`setTimeout`](/zh-TW/docs/Web/API/Window/setTimeout) 函式並非是程式會過了該段時間就會執行，而是會參考佇列中等待的訊息數量。
在下面範例中，「this is just a message」會寫在 setTimeout 的回呼訊息被執行之前，因為該時間段參數是要求執行環境處理所需的最少等待時間，而非一個保證時間。

```js
(function () {
  console.log("this is the start");

  setTimeout(function cb() {
    console.log("this is a msg from call back");
  });

  console.log("this is just a message");

  setTimeout(function cb1() {
    console.log("this is a msg from call back1");
  }, 0);

  console.log("this is the end");
})();

// "this is the start"
// "this is just a message"
// "this is the end"
// "this is a msg from call back"
// "this is a msg from call back1"
```

### 多個執行環境的互相溝通（Several Runtime communicating together）

Web worker 或是跨來源網域（cross-origin）的 `iframe` 都會有各自的堆疊、堆積及訊息佇列。兩個特定的執行環境只能透過 [`postMessage`](/zh-TW/docs/Web/API/Window/postMessage) 這個方法來溝通。如果一個執行環境有監聽 `message` 事件時，另一個執行環境便可透過這個方法來新增一個訊息到該執行環境中。

## 絕不阻塞（Never blocking）

事件循環這個模型有一個非常有趣的特色就是永不阻塞，這與其他語言不一樣。I/O 的處理通常會經由事件以及回呼函式實作，因此當一個程式正在等待 [IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API) 的查詢結果或是回傳 [XHR](/zh-TW/docs/Web/API/XMLHttpRequest) 請求時，依舊可以執行其他像是使用者輸入的動作。

例外（exceptions）永遠存在，像是 `alert` 或是同步的 XHR，但好的實作方式就是避開他們。另外要注意個是，[例外的例外一直是存在的](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311)（但通常為實作時的錯誤而非其他情況）。
