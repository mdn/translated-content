---
title: 閉包
slug: Web/JavaScript/Guide/Closures
---

閉包（Closure）是函式以及該函式被宣告時所在的作用域環境（lexical environment）的組合。

## 語法作用域（Lexical scoping）

思考這個例子：

```js
function init() {
  var name = "Mozilla"; // name 是個由 init 建立的局部變數
  function displayName() {
    // displayName() 是內部函式，一個閉包
    alert(name); // 使用了父函式宣告的變數
  }
  displayName();
}
init();
```

`init()` 建立了局部變數 `name` 與 `displayName()` 函式。`displayName()` 是個在 `init()` 內定義的內部函式，且只在該函式內做動。`displayName()` 自己並沒有局部變數，不過它可以訪問外面函式的變數、因而能取用在父函式宣告的變數 `name`。

{{JSFiddleEmbed("https://jsfiddle.net/78dg25ax/", "js,result", 250)}}

[運行](https://jsfiddle.net/xAFs9/3/)這個程式碼並注意 `displayName()` 裡面的 `alert()` 宣告，它能顯示位於上一層的 `name` 變數。這實例在描述*語法作用域*碰上巢狀函式時，解析器（parser）會如何解讀（resolve）變數。「作用域」一詞，指的正是作用域環境在程式碼指定變數時，使用 location 來決定該變數用在哪裡的事情。巢狀函式的內部函式，能訪問在該函式作用域之外的變數。

## 閉包

再思考這個例子：

```js
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

若你執行這個程式碼，它會與前例 `init()` 有相同結果：字串 Mozilla 會以 JavaScript alert 提示顯示出來。但箇中不同、且頗具趣味處，乃內部函式 `displayName()` 竟在外部函式執行前，從其回傳。

乍看之下，這段程式碼看來不大直覺：在某些程式語言，函式內的局部變數，只會在函式的執行期間存在。當 `makeFunc()` 執行完，你可能會預期 name 變數再也無法使用。但這段能照舊運行的程式碼表明了，在 JavaScript 並不是這樣做。

箇中理由和 JavaScript 函式的閉包有關。*閉包*為函式的組合、還有該宣告函式的作用域環境。這個環境包含閉包建立時，所有位於該作用域的區域變數。在這個例子中，`myFunc` 是 `displayName` 在 `makeFunc` 運行時所建立的實例（instance）參照。`displayName` 的實例保有了其作用域環境的參照，作用域裡則內含 `name` 變數。因此，在調用 `myFunc` 時，`name` 變數被保存、並能作它用。「Mozilla」一詞也因此傳給了 `alert`。

這裡有個更有趣的例子：`makeAdder` 函式：

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

在此，我們定義一個帶有單一參數 `x` 並回傳新函式的函式 `makeAdder(x)`。該新函式又帶有 `y` 參數並回傳了 `x` 與 `y` 的總和。

本質上 `makeAdder` 乃為函式工廠：它是個建立給定值、並與其參數求和之函式。上例中我們的函式工廠建立了兩個新函式：一個給參數加 5，另一個則是 10。

`add5` 與 `add10` 都是閉包。他們共享函式的定義，卻保有不同的環境：在 `add5` 的作用域環境，`x` 是 5。而在 `add10` 的作用域環境， `x` 則是 10。

## 實用的閉包

閉包實用之處，在於能讓你把一些資料（透過作用域環境）與操控這些資料的函式相關聯。很明顯地，這與把一些資料（物件屬性）與一些方法的相關聯的物件導向程式設計（object-oriented programming）相似。

因此，在使用只含一個方法的物件之處，通常也可以使用閉包。

在 Web 中，試圖做這種事的情況還蠻普遍的。我們寫的大多數前端 JavaScript 程式碼屬於 event-based 的：我們定義了一些行為，接著把它與用戶觸發事件（例如點擊或按鍵）連結起來。程式碼通常會以 callback 的形式連結：也就是一個處理事件回應的函式。

例如，假設我們想在網頁上，加個能調整文字大小的按鈕。其中一個方法是用像素指定 `body` 元素的 font-size，接著透過相對的 em 單位，設置其他頁面的其他元素（如 headers）個大小：

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

我們的互動式文字大小按鈕，可以改變 `body` 元素的 `font-size` 屬性（property）並藉由相對單位令頁面其他元素接受相應調整。

以下是 JavaScript：

```js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
```

`size12`、`size14`、`size16` 現在變成能調整字體大小到 12、14、與 16 像素的函式。而我們能如下例一般，把他們附加到按鈕上（本例為連結）：

```js
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

```html
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```

{{JSFiddleEmbed("https://jsfiddle.net/vnkuZ/7726/","","200")}}

## 使用閉包模擬私有方法

諸如 Java 之類的程式語言，提供了私有方法宣告的能力，意味著它們只能被同一個 class 的其他方法呼叫。

JavaScript 並沒有的提供原生的方法完成這種事，不過它藉由閉包來模擬私有方法。私有方法不只能限制程式碼的存取，它還提供了強而有力的方式來管理全域命名空間，避免非必要的方法弄亂公開介面。

以下展示如何使用閉包來定義一個能夠訪問私有函式與變數的公開函式。這種閉包的用法稱為模組設計模式([module pattern](https://www.google.com/search?q=javascript+module+pattern))。

```js
var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
```

上例的每個閉包，都有各自的環境。即使如此，我們依舊建立了一個，被三個函式共享的環境：`counter.increment`、`counter.decrement`、`counter.value`。

該作用域環境由匿名函式的 body 建立，之後立刻執行。作用域環境還包括兩個私有項（private item）：變數 `privateCounter` 與函式 `changeBy`。這些私有項，都不會在匿名函式外直接訪問。相反地，它們要透過由匿名包裝器（anonymous wrapper）回傳的公有函式訪問。

這三個公有函式，皆為共享同一個環境的閉包。由於 JavaScript 的語法作用域，它們都能訪問 `privateCounter` 變數與 `changeBy` 函式。

> [!NOTE]
> 你應該也發現到我們定義了建立 counter 的匿名函式、而我們接著呼叫它，並給`counter` 變數指派了回傳值。我們也能在分離的變數 `makeCounter` 儲存函式並用其建立數個 counter。

```js
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */
```

請注意 `counter1` 與 `counter2` 這兩個計數器是如何維護其獨立性的。每個閉包都以各自的閉包，在參照不同版本的 `privateCounter` 變數。每當呼叫其中一個計數器時，它會透過該變數的數值變更，改變語法作用域的環境。不過，在其中一個閉包的變數值改時，其他閉包的數值並不會受到影響。

> [!NOTE]
> 使用這種方法的閉包，提供了一些與物件導向程式設計的益處，尤其是資料隱藏與封裝。

## 在迴圈建立閉包：一個常見錯誤

在 ECMAScript 2015 導入 [`let`](/zh-TW/docs/Web/JavaScript/Reference/Statements/let) 前，迴圈內建立的閉包，常會發生問題。請思考以下的範例：

```html
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email" /></p>
<p>Name: <input type="text" id="name" name="name" /></p>
<p>Age: <input type="text" id="age" name="age" /></p>
```

```js
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

{{JSFiddleEmbed("https://jsfiddle.net/v7gjv/", "", 200)}}

`helpText` 陣列定義了三個有用的提示，每個提示都和文件內的輸入字段 ID 相關連。迴圈透過這三個定義，依序針對相對應的幫助方法（help method）添加了 `onfocus` 事件。

若試著運行這段程式碼，你會發現它不若預期般運行：無論聚焦哪一段，訊息都是在顯示你的年齡。

之所以如此，是因為指派到 `onfocus` 的函式為閉包，他們組成函式的定義、並從 `setupHelp` 的作用域捕抓函式的環境。三個閉包都被建立起來，但他們共享同一個能改變數值變數（`item.help`）的作用域環境。`item.help` 值早在執行 `onfocus` 回呼時，就已經被決定了。也由於 course 裡面的迴圈在那時已經執行了，給三個閉包共享的變數物件 `item` 早已離開 `helpText` 清單的 pointing to the last entry。

其中一個解法是使用更多閉包，尤其要使用前述的函式工廠：

```js
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function makeHelpCallback(help) {
  return function () {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

{{JSFiddleEmbed("https://jsfiddle.net/v7gjv/9573/", "", 200)}}

這次就如同預期般的運作了。與所有回調共享作用域環境相比，`makeHelpCallback` 給每個回調建立新的作用域環境，該環境的 `help` 參照到 `helpText` 陣列的對應字串。

用匿名閉包來實做的另一種方法是：

```js
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function () {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}

setupHelp();
```

如果你不想用更多閉包的話，你可以使用 ES2015 的 [`let`](/zh-TW/docs/Web/JavaScript/Reference/Statements/let) 關鍵字：

```js
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

在這裡，我們用了 `let` 而不是 `var`，所以每個閉包都會與每個 block-scoped 變數綁定，因而能在不用更多閉包的情況下完美運行。

## 性能考量

如果指定的任務無須使用閉包的話，在其他函式內建立不必要的函式並不明智，因為從速度和記憶體角度而言，它都會影響腳本性能。

例如說，當我們建立了新的 object/class 時候，方法通常要和物件的原型（prototype）相關聯，而不是定義到物件的建構子（constructor）── 這是因為每當建構子被呼叫的時候，方法都會重新分配（也就是說，它每次都在建立物件）。

思考一下這個例子：

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };

  this.getMessage = function () {
    return this.message;
  };
}
```

上面的程式碼並未利用閉包的益處，所以，可以改成這個樣子：

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function () {
    return this.name;
  },
  getMessage: function () {
    return this.message;
  },
};
```

但我們不建議重新定義原型，因此這個附加到現有原型的例子更佳：

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
```

以上的程式碼，可以寫得如同下例般簡潔：

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
(function () {
  this.getName = function () {
    return this.name;
  };
  this.getMessage = function () {
    return this.message;
  };
}).call(MyObject.prototype);
```

在前例中，所有物件可共享繼承的原型，物件創立時也無須每次都定義方法。詳細資料請參見[深入了解物件模型](/zh-TW/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)。
