---
title: 箭頭函式
slug: Web/JavaScript/Reference/Functions/Arrow_functions
---

{{jsSidebar("Functions")}}

**箭頭函式運算式**（arrow function expression）擁有比[函式運算式](/zh-TW/docs/Web/JavaScript/Reference/Operators/function)還簡短的語法。它沒有自己的 [`this`](/zh-TW/docs/Web/JavaScript/Reference/Operators/this)、[arguments](/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments)、[super](/zh-TW/docs/Web/JavaScript/Reference/Operators/super)、[new.target](/zh-TW/docs/Web/JavaScript/Reference/Operators/new.target) 等語法。本函式運算式適用於非方法的函式，但不能被用作建構式（constructor）。

{{InteractiveExample("JavaScript Demo: Functions =>")}}

```js interactive-example
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]
```

## 基本語法

```plain
(參數1, 參數2, …, 參數N) => { 陳述式; }

(參數1, 參數2, …, 參數N) => 表示式;
// 等相同(參數1, 參數2, …, 參數N) => { return 表示式; }

// 只有一個參數時,括號才能不加:
(單一參數) => { 陳述式; }
單一參數 => { 陳述式; }

//若無參數，就一定要加括號:
() => { statements }
```

## 進階語法

```plain
// 用大括號將內容括起來，返回一個物件字面值表示法：
params => ({foo: bar})

// 支援其餘參數與預設參數
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => {
statements }

// 也支援 parameter list 的解構
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c; f(); // 6
```

## 說明

也可參閱 ["ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)。

箭頭函式有兩個重要的特性：更短的函式寫法與 `this` 變數的非綁定。

### 更短的函式寫法

```js
var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// 這段函式會輸出[8, 6, 7, 9]這個陣列
elements.map(function (element) {
  return element.length;
});

// 上方這種一般的函式，可以被改寫成下方的箭頭函式
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// 如果輸入的參數只有一個，我們可以移除掉外面的括號
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// 當箭頭函式裡的內容只有'return'的時候，我們可以拿掉return和外面的大括號
elements.map((element) => element.length); // [8, 6, 7, 9]

// 在這個範例中，因為我們只需要length這個屬性，所以也可以使用解構賦值：
// 下方的'length'對應到我們想取得的屬性，而'lengthFooBArX'只是很普通的變數名稱,
// 可以被任意修改成你想要的名字
elements.map(({ length: lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// 上面這種解構賦值之後的參數也可以被改寫為下面這樣。但要注意的是，在這個範例中，
// 我們不是要指定'length'這個值給一個虛構的屬性，而是這個變數的名稱'length'本身就是
// 用來當成我們想從物件上取得的屬性
elements.map(({ length }) => length); // [8, 6, 7, 9]
```

### `this` 不分家

在有箭頭函數之前，每個新函式是依據如何被呼叫來定義自己的 [`this`](/zh-TW/docs/Web/JavaScript/Reference/Operators/this) 變數
例如:

- 在建構子時是一個新物件
- 在呼叫[嚴格模式](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode)函數時是 undefined
- 以物件方法呼叫時則為基礎物件
- 等等....

事實證明這對物件導向程式設計來說並不理想。

```js
function Person() {
  // Person() 建構式將 this 定義為它自己的一個實體
  this.age = 0;

  setInterval(function growUp() {
    // 在非嚴格模式下, growUp() 函式把 this 定義為全域物件
    // (因為那是 growUp()執行的所在)，
    // 與 Person() 建構式所定義的 this 有所不同
    this.age++;
  }, 1000);
}

var p = new Person();
```

在 ECMAScript 3/5 裡面，有關 `this` 的問題，可以透過指派 `this` 值給可以關閉的變數解決。

```js
function Person() {
  var self = this; // 有些人喜歡 `that` 而不是 `self`.
  // 選好一種取法後始終如一
  self.age = 0;

  setInterval(function growUp() {
    // 這個 callback 參考 `self` 變數，為預期中的物件。
    self.age++;
  }, 1000);
}
```

或者透過 [bind](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 函式來綁定 `this` 變數到指定函式（以上面為例，就是 `growUp()` 函式）。

箭頭函式並不擁有自己的 `this 變`數`；`使用的 this `值來自`封閉的文本上下文，也就是說，箭頭函式遵循常規變量查找規則。因此，如果在當前範圍中搜索不到 this 變量時，他們最終會尋找其封閉範圍。

因此，在以下程式碼內，傳遞給 `setInterval` 的 箭頭函式中的`this` ，會與封閉函式的 `this` 值相同：

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| 適切的參考了Person建構式所建立的物件
  }, 1000);
}

var p = new Person();
```

#### 和嚴格模式的關係

由於 `this` 變數具有詞彙上綁定意義，所以[嚴格模式](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode)的宣告對 `this` 的作用將被忽略。

```js
var f = () => {
  "use strict";
  return this;
};
f() === window; // 或是 global 物件
```

但嚴格模式的其他作用依舊存在。

#### 由 call 與 apply 函式呼叫

由於箭頭函式並沒有自己的 `this`，所以透過 `call()` 或 `apply()` 呼叫箭頭函式只能傳入參數。`thisArg` 將會被忽略。

```js
var adder = {
  base: 1,
  add: function (a) {
    var f = (v) => v + this.base;
    return f(a);
  },
  addThruCall: function (a) {
    var f = (v) => v + this.base;
    var b = {
      base: 2,
    };
    return f.call(b, a);
  },
};
console.log(adder.add(1)); // 顯示 2
console.log(adder.addThruCall(1)); // 依舊顯示 2
```

### 不綁定 `arguments`

箭頭函式並沒有自己的 [`arguments` 物件](/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments)。所以在此例中，`arguments` 只是參考到 enclosing 作用域裡面的相同變數：

```js
var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(1); // 2
```

大多時候，使用[其餘參數](/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters) 是取代 `arguments` 物件的較好方式。

```js
function foo(n) {
  var f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### 將箭頭函式撰寫為方法

如同前述，箭頭函式運算式最適合用在非方法的函式。來看看如果要把它們當成方法來用，會發生什麼事：

```js
"use strict";
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};
obj.b(); // 印出 undefined, Window {...} (or the global object)
obj.c(); // 印出 10, Object {...}
```

箭頭函式並沒有自己的 `this`。另一個例子與 {{jsxref("Object.defineProperty()")}} 有關：

```js
"use strict";

var obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined, 'undefined', Window {...} (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  },
});
```

### 使用 `new` 運算子

箭頭函式不可作為建構式使用；若使用於建構式，會在使用 `new` 時候拋出錯誤。

```js
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```

### 使用 `prototype` 屬性

箭頭函式並沒有原型（`prototype`）屬性。

```js
var Foo = () => {};
console.log(Foo.prototype); // undefined
```

### 使用關鍵字 `yield`

[`yield`](/zh-TW/docs/Web/JavaScript/Reference/Operators/yield) 關鍵字無法用於箭頭函式的 body（except when permitted within functions further nested within it）。因此，箭頭函式無法使用 generator。

## 函式主體（Function body）

箭頭函式可以變成 concise body 或者平常使用的 block body。

在 concise body 裡面只需要輸入運算式，就會附上內建的回傳。在 block body 裡面就必須附上明確的 `return` 宣告。

```js
var func = (x) => x * x; // concise 語法會內建 "return"
var func = (x, y) => {
  return x + y;
}; // block body 需要明確的 "return"
```

## 回傳物件字面值

請注意只使用 `params => {object:literal}` 並不會按照期望般回傳物件字面值（object literal）。

```js
var func = () => { foo: 1 };               // Calling func() returns undefined!
var func = () => { foo: function() {} };   // SyntaxError: Unexpected token (
```

因為在大括弧（`{}`）裡面的文字會被解析為有序宣告（例如 `foo` 會被當作標記（label）、而不是物件的 key ）

要記得把物件字面值包在圓括弧內。

```js
var func = () => ({ foo: 1 });
var func = () => ({ foo: function () {} });
```

## 換行

箭頭函式不可以在參數及箭頭間包含換行。

```js
var func = ()
           => 1; // SyntaxError: expected expression, got '=>'
```

## Parsing order

箭頭函式的箭頭儘管不是操作符，但藉著[運算子優先等級](/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_precedence)，箭頭函式有著和普通函式不相同的特殊解析規則。

```js
let callback;

callback = callback || function() {}; // ok
callback = callback || () => {};      // SyntaxError: invalid arrow-function arguments
callback = callback || (() => {});    // ok
```

## 更多範例

```js
// 回傳 undefined 的箭頭函式
let empty = () => {};

(() => "foobar")(); // 回傳 "foobar"

var simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

let max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b); // 66
var even = arr.filter((v) => v % 2 == 0); // [6, 0, 18]
var double = arr.map((v) => v * 2); // [10, 12, 26, 0, 2, 36, 46]
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- ["ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)
