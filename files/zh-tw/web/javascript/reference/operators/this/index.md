---
title: this
slug: Web/JavaScript/Reference/Operators/this
---

JavaScript **函式內的 `this` 關鍵字**表現，和其他語言相比略有差異。在[嚴格模式](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode)與非嚴格模式下也有所不同。

通常，`this` 值由被呼叫的函式來決定。它不能在執行期間被指派，每次函式呼叫調用的值也可能不同。ES5 引入了 [`bind`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 方法去[設置函式的 `this` 值，而不管它怎麼被呼叫。](#the_bind_method)ECMAScript 2015 也導入了定義 `this` 詞法範圍的[箭頭函式](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)（它的 `this` 值會維持在詞法作用域）。

{{InteractiveExample("JavaScript Demo: Expressions - this")}}

```js interactive-example
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// Expected output: 42
```

## 語法

```js-nolint
this
```

## 全域環境下

`this` 值在所有函式以外的全域執行環境下，會被當作全域物件，無論是否處於嚴格模式。

```js
console.log(this.document === document); // true

// 在網路瀏覽器中，window 物件也是全域物件。
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
```

## 函式環境下

在函式內的 `this` 值取決於該函式如何被呼叫。

### 簡易呼叫

因為以下程式碼並不處於[嚴謹模式](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode)下、而 `this` 值也沒被呼叫（call）設定，`this` 會變成全域物件，在瀏覽器之下則會變成 `window`。

```js
function f1() {
  return this;
}

//在瀏覽器中：
f1() === window; // true

//Node中:
f1() === global; // true
```

然而，在嚴格模式下，`this` 值會在進入執行環境時建立並維持該狀態。因此，下例的 `this` 預設值是 `undefined`：

```js
function f2() {
  "use strict"; // 嚴格模式
  return this;
}

f2() === undefined; //true
```

所以在嚴格模式下，如果 `this` 沒有定義到執行環境內，其預設值就會是 `undefined`。

> [!NOTE]
> 在第二個例子裡面，`this` 應為 [`undefined`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/undefined)，因為 `f2` 是直接被呼叫，而不是在其為某個物件的方法或屬性的情況下（例如 `window.f2()`）被直接呼叫。某些瀏覽器首次支援[嚴格模式](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode)時沒導入這個特徵，它們會因此錯誤的回傳 `window` 物件。

要從某個語境訪問另一個 `this` 語境的值，請使用 [call](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [apply](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/apply):

```js
// 物件可以被當作call或apply的第一個參數，而this會綁定該物件
var obj = { a: "Custom" };

// 此屬性a為全域物件
var a = "Global";

function whatsThis(arg) {
  return this.a; // this 值取決於此函數如何被呼叫
}

whatsThis(); // 'Global'
whatsThis.call(obj); // 'Custom'
whatsThis.apply(obj); // 'Custom'
```

當函式內部調用 `this` 關鍵字時，其值會和所有繼承自 `Function.prototype` 並使用 [`call`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 或 [`apply`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 方法呼叫的特定物件綁定。

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// 第一個參數（parameter）是調用了 this 的物件，
// 後續參數（parameters）會作為函式呼叫內的參數（arguments）而通過
add.call(o, 5, 7); // 16

// 第一個參數（parameter）是調用了 this 的物件，
// 第二個參數的陣列作為函式呼叫內的參數（arguments）之構件
add.apply(o, [10, 20]); // 34
```

使用 `call` 和 `apply` 時，如果被輸入作為 `this` 的值不是物件，JavaScript 內建的 `ToObject` 運算符會試著把被輸入的值轉變為物件。如果被輸入的值是一個原始型別，例如 `7`或是 `'foo'`，它們會自動被相關的建構方法轉變為物件。因此，原始數值`7`會轉變成類似用`new Number(7)`產生的物件，而字串`'foo'`會轉變成類似用`new String('foo')`產生的物件。

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call("foo"); // [Object String]
```

### `bind` 方法

ECMAScript 5 導入了 [`Function.prototype.bind`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)。呼叫 `f.bind(someObject)` 會建立和 `f` 的主體與作用域相同之新函式；但無論函數怎麼被調用，原始函數的 `this` 在新函數將永遠與 `bind` 的第一個參數綁定起來。

```js
function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var h = g.bind({ a: "yoo" }); // bind 只能使用一次！
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.f(), o.g(), o.h()); // 37, azerty, azerty
```

### 箭頭函式

在[箭頭函式](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)下，`this` 值保留了其在詞法作用域 的 `this` 值。在全域程式碼內，則設為全域物件：

```js
var globalObject = this;
var foo = () => this;
console.log(foo() === globalObject); // true
```

> [!NOTE]
> 如果這參數被傳遞給箭頭函式的 call, bind, apply 調用，該參數會被忽略。你仍然可以將參數預先調用到 call，但第一個參數(thisArg)必須設置為空。

```js
// 作為物件的方法呼叫
var obj = { foo: foo };
console.log(obj.foo() === globalObject); // true

// 使用呼叫以嘗試設置 this
console.log(foo.call(obj) === globalObject); // true

// 使用 bind 以嘗試設置 this
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

無論以上哪種，`foo` 的 `this` 在建立的時候，都會設為原本的樣子（以上面的例子來說，就是全域物件）。這同樣適用於在其他函式內創建的箭頭函式：它們的 `this` 是設置為外部執行上下文。

```js
// 建立一個物件，其方法 bar 含有回傳自己的 this 函式。回傳函式作為箭頭函數而建立，
// 因此該函式的 this 將永遠與外圍函式（enclosing function）的 this 綁定。
// bar 的值可在呼叫內設立，which in turn sets the value of the returned function.
var obj = {
  bar: function () {
    var x = () => this;
    return x;
  },
};

// 將 bar 作為物件的方法呼叫，把它的 this 設為物件
// 指派 fn 作為回傳函數的參照（reference）
var fn = obj.bar();

// 在不設置 this 情況下呼叫的 fn，通常默認為全域物件，在嚴格模式下則是 undefined
console.log(fn() === obj); // true
```

以上面的程式碼為例，稱作匿名函數（anonymous function）A 的函數被指定為 `obj.bar`，它回傳的函數（稱作匿名函數 B）作為箭頭函數而建立。因而，函數 B 的 `this` 在呼叫時，將永遠設為 `obj.bar` （函數 A）的 `this`。呼叫被回傳的函數（函數 B）時，它的 `this` 將一直是原本的樣子。

再以上面的程式碼為例，函數 B 的 `this` 被設為函數 A 的 `this`，而它屬於物件，所以它依然會設為 `obj`，就算在 `this` 設為 `undefined` 或全域物件的呼叫方式下（或在全域執行環境下，上例的任何方法）

### 作為物件方法

如果一個函式是以物件的方法呼叫，它的 `this` 會設為該呼叫函式的物件。

以下面的程式碼為例，呼叫 `o.f()` 的時候，函式內的 `this` 會和 `o` 物件綁定。

```js
var o = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};

console.log(o.f()); // logs 37
```

請注意這個行為，不會受函式如何或何處定義所影響。以上面為例，在我們定義 `o` 時，也定義了行內函式 `f` 作為構件（member）。不過，我們也能先定義函式，接著讓它附屬到 `o.f`。這麼做會得出相同的效果：

```js
var o = { prop: 37 };

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // 37
```

這表明了 `this` 只和 `f` 作為 `o` 的構件呼叫有所關聯。

同樣的，`this` 綁定只會受最直接的構件引用（most immediate member reference）所影響。在下面的例子，我們將物件 `o.b` 的方法 `g` 作為函式呼叫。在執行的期間，函式內的 `this` 會參照 `o.b`。物件是否為 `o` 的構件無關緊要，最直接的引用才是最緊要的。

```js
o.b = { g: independent, prop: 42 };
console.log(o.b.g()); // logs 42
```

#### 物件原型鏈上的 `this`

相同概念也能套用定義物件原型鏈的方法。如果方法放在物件的原型鏈上，`this` 會指向方法所呼叫的物件，如同該方法在物件上的樣子。

```js
var o = {
  f: function () {
    return this.a + this.b;
  },
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

在這個示例中，分配給變數 `p` 的物件沒有自己的 `f` 屬性，`p` 繼承了 `o` 的原型。但是查找 `f` 最終在 `o`上找到它的成員名為 f 並不重要。查找開始作為 `p.f` 的引用，所以 `this` 在函式內部物件的值被當作是`p`的引用。也就是說，`f` 作為 `p`的調用方法以來，它的 `this` 指的就是 `p`。這是一個非常有趣的 JavaScript 原型繼承特性。

#### 帶著 getter 或 setter 的 `this`

當函式從 getter 或 setter 被調用的時候，同樣的概念也成立。用作 getter 或 setter 的函式將自己的 `this` 綁定到從中設置或獲取的物件上。

```js
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  },
};

Object.defineProperty(o, "sum", {
  get: sum,
  enumerable: true,
  configurable: true,
});

console.log(o.average, o.sum); // logs 2, 6
```

### 作為建構子

若函式以建構子的身份呼叫（使用 [`new`](/zh-TW/docs/Web/JavaScript/Reference/Operators/new) 關鍵字） `this` 會和被建構的新物件綁定。

> [!NOTE]
> 建構子預設透過 `this` 回傳該物件的參照，但它其實能回傳其他物件。如果回傳值不是物件的話，就會回傳 `this` 這個物件。

```js
/*
 * 建構子會如此做動：
 *
 * function MyConstructor(){
 *   // 實際的函式主體碼在這裡
 *   // 在|this| 上創建屬性
 *   // 希望通過分配給他們，如：
 *   this.fum = "nom";
 *   // et cetera...
 *
 *   // 如果函式有返回狀態它將返回一個物件
 *   // 那個物件將是新表達式的結果。
 *   // 換句話來說，表達式的結果是現在綁定 |this| 的物件
 *   // (例如，最常見的常見情況).
 * }
 */

function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // logs 38
```

在上例的 `C2`，由於物件在建構的時候被呼叫，新的物件 `this` was bound to simply gets discarded。這也實質上令 `this.a = 37;` 宣告死亡：不是真的死亡（因為已經執行了），但它在毫無 outside effects 的情況下遭到消滅。

### 作為 DOM 事件處理器

當一個函式用作事件處理器的話，`this` 值會設在觸發事件的元素（某些瀏覽器如果不用 `addEventListener` 方法的話，在動態添加監聽器時，就不會遵循這個常規）

```js
// 當監聽器被調用，相關元素變為藍色
function bluify(e) {
  // 永遠是真
  console.log(this === e.currentTarget);
  // 當當前目標和目標為相同物件為真
  console.log(this === e.target);
  this.style.backgroundColor = "#A5D9F3";
}

// 取得文件內所有的元素
var elements = document.getElementsByTagName("*");

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", bluify, false);
}
```

### 作為行內事件處理器

當程式碼從行內的 [on 事件處理器](/zh-TW/docs/Web/API/Document_Object_Model/Events)呼叫的話，`this` 就會設在監聽器所置的 DOM 元素：

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

上方的 alert 會秀出 `button`。但請注意只有外層程式碼的 `this` 要這樣設定：

```html
<button onclick="alert((function(){return this})());">Show inner this</button>
```

在這裡，內部函式的並沒有設立 `this`，所以它會回傳全域／window 物件（例如在非嚴格模式下，呼叫函數沒設定 `this` 的預設物件）

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [嚴格模式](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode)
- [All this](http://bjorn.tipling.com/all-this)，一篇關於 `this` 上下文不同的相關文章
- [親和地解釋 JavaScript 的「this」關鍵字](http://rainsoft.io/gentle-explanation-of-this-in-javascript/)
