---
title: getter
slug: Web/JavaScript/Reference/Functions/get
---

{{jsSidebar("Functions")}}

**`get`** 語法會將物件屬性，綁定到屬性被檢索時，所呼叫的函式。

{{EmbedInteractiveExample("pages/js/functions-getter.html")}}

## 語法

```plain
{get prop() { ... } }
{get [expression]() { ... } }
```

### 參數

- `prop`
  - : 要綁定到給定函式的名稱。
- expression
  - : 自 ECMAScript 2015 開始，可以用計算屬性名稱（computed property name），綁定到給定函式。

## 敘述

有時候，物件的屬性可能需要回傳動態數值、或要在不使用明確的方法呼叫下，反映出內部變數的狀態。在 JavaScript 可以用 _getter_ 達到這個目的。儘管可以用 getter 與 setter 的關聯建立虛擬屬性的類型，但 getter 無法被綁定到同時擁有實際數值的屬性。

使用 `get` 語法時，請注意以下情況：

- 可以擁有一個以數字或字串為代表的標示符；
- 最少要有零個參數（請參見 [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) 的詳細資料）
- 不能以有另一個 `get` 的 object literal、或相同屬性入口（data entry）的 data 形式出現（不能使用 `{ get x() { }, get x() { } }` and `{ x: ..., get x() { } }`）。

getter 可以用 [`delete`](/zh-TW/docs/Web/JavaScript/Reference/Operators/delete) 操作符移除。

## 示例

### 在物件初始器（object initializers）內定義新物件的 getter

這程式碼將給 `obj` 物件建立虛擬屬性 `latest`，它會回傳 `log` 陣列的最後一個單元。

```js
var obj = {
  log: ["example", "test"],
  get latest() {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1];
  },
};
console.log(obj.latest); // "test".
```

請注意 `latest` 不會因為數值被指派而改變。

### 使用 `delete` 操作符移除 getter

如果想移除 getter，可以使用 [`delete`](/zh-TW/docs/Web/JavaScript/Reference/Operators/delete) 完成之：

```js
delete obj.latest;
```

### 使用 `defineProperty` 給現有物件定義 getter

若想在任何時候給現有物件添增 getter，請使用 {{jsxref("Object.defineProperty()")}}。

```js
var o = { a: 0 };

Object.defineProperty(o, "b", {
  get: function () {
    return this.a + 1;
  },
});

console.log(o.b); // Runs the getter, which yields a + 1 (which is 1)
```

### 使用計算屬性名

```js
var expr = "foo";

var obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar"
```

### Smart / self-overwriting / lazy getters

Getter 提供了定義物件屬性的方法，但它本身並不會去自動計算，直到想訪問它。除非需要用 getter，否則數值計算會被延緩；如果不需要用到 getter，那就永遠無須支付計算的開銷。

針對屬性值 lazy 或 delay、並暫存以留作未來訪問的最佳化技巧稱作 **smart 或 [memoized](https://en.wikipedia.org/wiki/Memoization) getter**：初次計算時會呼叫 getter、接著被暫存以便在不重算的情況下做後續訪問。這種技巧在以下情況會派上用場：

- 如果數值開銷很昂貴（例如需要大量 RAM 或 CPU 時間、產生 worker 執行緒、檢索遠端文件等）
- 如果現在並不需要數值：可能是現在用不到、或在某些情況下完全用不到。
- 如果使用的話，該數值會被訪問數次、且該數值永遠不會更改、或不應該更改。

也就是說，出於 getter 不會重新計算的理由，不要針對數值預期會改變的屬性，使用 lazy getter。

下例的物件擁有作為自己的屬性的 getter。在取得該屬性後，它會從物件被移除、並以隱式數值屬性重新增加、最後回傳之。

```js
get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById('bookmarked-notification-anchor');
},
```

針對 Firefox 程式碼，另請參見定義 [`defineLazyGetter()`](</zh-TW/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.jsm#defineLazyGetter()>) 函式的 XPCOMUtils.jsm 程式模塊。

### `get` 與 `defineProperty`

在使用 {{jsxref("classes")}} 時，儘管 `get` 關鍵字與 {{jsxref("Object.defineProperty()")}} 會出現相同結果，但其中有微妙的差異。

在使用 `get` 時，屬性會在物件的原型被定義；而在使用 {{jsxref("Object.defineProperty()")}} 時，屬性會在被套用的實例內定義。

```js
class Example {
  get hello() {
    return "world";
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"
console.log(Object.getOwnPropertyDescriptor(obj, "hello"));
// undefined
console.log(
  Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), "hello"),
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [setter](/zh-TW/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- JavaScript 教學的[定義 Getter 與 Setter](/zh-TW/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
