---
title: Function.prototype.call
slug: Web/JavaScript/Reference/Global_Objects/Function/call
---

{{JSRef}}

使用給定的 `this` 參數以及分別給定的參數來呼叫某個函數

> **備註：** 此函數的所有語法大致上與 [`apply()`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Function/apply) 相同，他們基本上不同處只有 `call()` 接受一連串的參數，而 `apply()` 單一的 array 作為參數

<table class="standard-table">
  <thead>
    <tr>
      <th colspan="2">
        <a href="/zh-TW/docs/JavaScript/Reference/Global_Objects/Function"
          >Function </a
        >物件的方法
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>被實作於</td>
      <td>JavaScript 1.3</td>
    </tr>
    <tr>
      <td>ECMAScript 版本</td>
      <td>ECMAScript 第三版</td>
    </tr>
  </tbody>
</table>

## 語法

```js-nolint
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

### 參數

- `thisArg`
  - : 呼叫*`fun`*時提供的`this`值。 注意，它可能是一個無法在函數內看到的值：若這個函數是在非嚴苛模式( [non-strict mode](/zh-TW/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode) ), `null` `、undefined` 將會被置換成全域變數，而原生型態的值將會被封裝
- `arg1, arg2, ...`
  - : 其他參數

## 描述

你可以在呼叫一個現存的函數時，使用不一樣的 `this` 物件。`this` 會參照到目前的物件，呼叫的物件上

使用 `call`，你可以實作函數一次，然後在其他的物件上直接繼承它，而不用在新的物件上重寫該函數

## 範例

### 使用 `call` 來串接物件上的建構子

你可以使用 `call` 來串接其他物件的建構子，就像 Java。下面的例子中，`Product` 物件的建構子定義了兩個參數 `name` 以及 `price`。其他函數 `Food` 及 `Toy` 引用了 `Product` 並傳入 `this`、`name` 和 `price`。Product 初始化它的屬性 `name` 和 `price`，而兩個子函數則定義了 `category`。

```js
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0)
    throw RangeError(
      'Cannot create product "' + name + '" with a negative price',
    );
  return this;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}
Food.prototype = new Product();

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}
Toy.prototype = new Product();

var cheese = new Food("feta", 5);
var fun = new Toy("robot", 40);
```

### 使用 `call` 來呼叫匿名的函數

下面這個簡易的例子中，我們做了一個匿名的函數，並用 `call` 來讓它應用在每個在串列中的物件中. 這個匿名函數的主要用途是加入一個 print 函數到每個物件上，這個函數可以印出每個物件的 index 指標。 傳入物件作為 `this` 的值並不是必要的，但他有解釋的用途。

```js
var animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Fail" },
];

for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log("#" + i + " " + this.species + ": " + this.name);
    };
    this.print();
  }).call(animals[i], i);
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [apply](/zh-TW/docs/JavaScript/Reference/Global_Objects/Function/apply)
