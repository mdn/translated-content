---
title: 回呼函式
slug: Glossary/Callback_function
---

回呼函式（callback function）是指能藉由參數（argument）通往另一個函式的函式。它會在外部函式內調用、以完成某些事情。

以下是簡單的範例：

```js
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("輸入你的名字：");
  callback(name);
}

processUserInput(greeting);
```

這是個{{glossary("synchronous","同步")}}回呼的例子，因為它是立即執行的。

但請注意，回呼常用來延續{{glossary("asynchronous","非同步")}}行動完成後的程式執行：這就叫做非同步回呼（asynchronous callbacks）。例如說我們的 [maps-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/maps-example.html) 範例（[也請參見這個](https://mdn.github.io/learning-area/javascript/apis/introduction/maps-example.html)）用了 Google Maps API 與 Geolocation API 來把你設備的位置，顯示到地圖上。

因為我們透過非同步取得 GPS 的設備坐標（我們不知道數據何時會被回傳），{{domxref("Geolocation.getCurrentPosition()")}} 方法把一個匿名回呼函式作為參數,它會回傳一個坐標數據以充當參數。該函式會在回傳坐標數據後執行。

## 深入理解

### 一般常識

- 維基百科的 [回呼函式](https://zh.wikipedia.org/wiki/回呼函式)
- [Understand JavaScript Callback Functions and Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
