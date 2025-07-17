---
title: 繼承與原型鏈
slug: Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
---

JavaScript 是個沒有實做 `class` 關鍵字的動態語言，所以會對那些基於類別（class-based）語言（如 Java 或 C++）背景出身的開發者來說會有點困惑。（在 ES2015 有提供 `class` 關鍵字，但那只是個語法糖，JavaScript 仍然是基於原型（prototype-based）的語言）。

講到繼承，JavaScript 就只有一個建構子：物件。每個物件都有一個連著其他**原型**（prototype）的私有屬性（private property）物件。原型物件也有著自己的原型，於是原型物件就這樣鏈結，直到撞見 `null` 為止：`null` 在定義裡沒有原型、也是**原型鏈**（prototype chain）的最後一個鏈結。

幾乎所有 JavaScript 的物件，都是在原型鏈最頂端的 {{jsxref("Object")}} 實例。

雖然這常被認為是 JavaScript 的一個缺陷，但原型繼承模型實際上，比傳統的 classic 模型更強大。舉例來說，使用原型繼承模型建構一個 classic 模型是相當容易的。

## 使用原型鍊繼承

### 繼承屬性

JavaScript 物件是一「包」動態的屬性（也就是**它自己**的屬性）並擁有一個原型物件的鏈結，當物件試圖存取一個物件的屬性時，其不僅會尋找該物件，也會尋找該物件的原型、原型的原型……直到找到相符合的屬性，或是到達原型鏈的尾端。

> [!NOTE]
> 遵照 ECMAScript 標準的 `someObject.[[Prototype]]` 標記，用於指派 `someObject` 的原型。從 ECMAScript 2015 開始， `[[Prototype]]` 使用 {{jsxref("Object.getPrototypeOf()")}} 與 {{jsxref("Object.setPrototypeOf()")}} 這兩個訪問器（accessors）訪問，等同於非標準，但各大瀏覽器已實做的 `__proto__` 屬性。
>
> 不要把 `someObject.[[Prototype]]` 與函式屬性 `func.prototype` 混淆了。它在函式被用作建構子的時候，指定 `[[Prototype]]` 要分派到所有由給定函式建立的物件實例（instance）。**`Object.prototype`** 屬性代表了原型屬性 {{jsxref("Object")}}。

以下是嘗試存取屬性時會發生的事：

```js
// 利用含有 a 與 b 屬性的 f 函式，建立一個 o 物件：
let f = function () {
  this.a = 1;
  this.b = 2;
};
let o = new f(); // {a: 1, b: 2}

// 接著針對 f 函式的原型添加屬性
f.prototype.b = 3;
f.prototype.c = 4;

// 不要寫 f.prototype = {b:3,c:4}; 因為它會破壞原型鏈
// o.[[Prototype]] 有 b 與 c 的屬性：{b: 3, c: 4}
// o.[[Prototype]].[[Prototype]] 是 Object.prototype.
// 最後 o.[[Prototype]].[[Prototype]].[[Prototype]] 成了 null
// 這是原型鏈的結末，因為 null 按照定義並沒有 [[Prototype]]。
// 因此，整個原型鏈看起來就像：
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// o 有屬性「a」嗎？有，該數值為 1。

console.log(o.b); // 2
// o 有屬性「b」嗎？有，該數值為 2。
// o 還有個原型屬性「b」，但這裡沒有被訪問到。
// 這稱作「property shadowing」。

console.log(o.c); // 4
// o 有屬性「c」嗎？沒有，那就找 o 的原型看看。
// o 在「o.[[Prototype]]」有屬性「c」嗎？有，該數值為 4。

console.log(o.d); // undefined
// o 有屬性「d」嗎？沒有，那就找 o 的原型看看。
// o 在「o.[[Prototype]]」有屬性「d」嗎？沒有，那就找 o.[[Prototype]] 的原型看看。
// o.[[Prototype]].[[Prototype]] 是 Object.prototype，預設並沒有屬性「d」，那再找他的原型看看。
// o 在「o.[[Prototype]].[[Prototype]].[[Prototype]]」是 null，停止搜尋。
// 找不到任何屬性，回傳 undefined。
```

給物件設定屬性，會令其建立自有的屬性。這個行為規則的唯一例外，就是碰上以 [getter 或 setter](/zh-TW/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) 繼承的屬性時。

### 繼承方法

Javascript 並沒有其他基於類別語言那般定義的方法。在 Javascript 裡，任何函式都能以屬性的方式加到物件中。一個被繼承的函式的行為就像是其他屬性一樣，其中也包含了上述的 property shadowing（在這種情況下叫做 method overriding）。

當繼承函式執行時，[`this`](/zh-TW/docs/Web/JavaScript/Reference/Operators/this) 值指向繼承的物件，而不是在函式內擁有屬性的原型物件。

```js
var o = {
  a: 2,
  m: function () {
    return this.a + 1;
  },
};

console.log(o.m()); // 3
// 在這裡呼叫 o.m 時「this」指的是 o

var p = Object.create(o);
// p 是個從 o 繼承的物件

p.a = 4; // 在 p 建立屬性「a」
console.log(p.m()); // 5
// 呼叫 p.m 時「this」指的是 p
// 因此在 p 繼承 o 的函式 m 時，
// 「this.a」指的是 p.a：也就是 p 的自有屬性「a」
```

## 產生物件和原型鏈的幾種方法

### 含有語法結構的物件

```js
var o = { a: 1 };

// 新建的 o 有個自己的 [[Prototype]] 稱為 Object.prototype
// o 自己並沒有稱為「hasOwnProperty」的屬性
// 而 hasOwnProperty 是 Object.prototype 的自有屬性。
// 因此 o 從 Object.prototype 繼承了 hasOwnProperty
// Object.prototype 作為其原型多了個 null
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// 從 Array.prototype 繼承的陣列，含有諸如 indexOf、forEach……之類的方法
// 原型鏈看起來就像：
// a ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// 從 Function.prototype 繼承的函式，含有諸如 call、bind……之類的方法
// f ---> Function.prototype ---> Object.prototype ---> null
```

### 透過建構子

JavaScript 建構子，就、只、是、個、被 [new 運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/new)呼叫的函式。

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function (v) {
    this.vertices.push(v);
  },
};

var g = new Graph();
// g 是個有著「vertices」與「edges」屬性的物件。
// 在執行 new Graph() 時 g.[[Prototype]] 是 Graph.prototype 的值。
```

### 用 `Object.create`

ECMAScript 5 引入了新方法：{{jsxref("Object.create()")}}。呼叫這個方法就可以建立新的物件。這個物件的原型，為函式的第一個參數。

```js
var a = { a: 1 };
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype
```

### 使用關鍵字 `class`

ECMAScript 2015 引入了新的[類別](/zh-TW/docs/Web/JavaScript/Reference/Classes)實做。儘管對那些基於類別的開發者來說，這種結構體令他們感到熟悉，它們依舊不一樣。JavaScript 依舊是基於原型的。新的關鍵字包括 {{jsxref("Statements/class", "class")}}、{{jsxref("Classes/constructor", "constructor")}}、{{jsxref("Classes/static", "static")}}、{{jsxref("Classes/extends", "extends")}}、{{jsxref("Operators/super", "super")}}。

```js
"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
```

### 效能

原型鏈上的屬性的查詢時間，可能會對效能有負面影響，對程式碼也因而產生明顯問題。另外，試圖尋找不存在的屬性，就一定會遍歷整個原型鏈。

接著，在迭代物件屬性時，**每個**原型鏈的枚舉屬性都會抓出來。

要檢查物件*本身*有沒有指定的屬性、也不需要查找整個原型鏈時，你必須使用由 `Object.prototype` 繼承的 [`hasOwnProperty`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 方法。

```js
console.log(g.hasOwnProperty("vertices"));
// true

console.log(g.hasOwnProperty("nope"));
// false

console.log(g.hasOwnProperty("addVertex"));
// false

console.log(g.__proto__.hasOwnProperty("addVertex"));
// true
```

在 JavaScript 裡面 [`hasOwnProperty`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 是唯一能處理、且**不**遍歷整個原型鏈的方法。

註：如果只有檢查屬性是否為 [`undefined`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/undefined) **是不夠的**。該屬性可能存在，只是數值被設定為 `undefined`。

### 壞實做：擴充原生的原型

一個常見的誤用，是擴充 `Object.prototype` 或其他內建的原型。

這種技巧稱為猴子補丁（monkey patching），它會破壞*封裝*（encapsulation）。儘管有些受歡迎的框架如 Prototype.js 會這麼做，但它們並不是以額外的*非標準*功能，打亂內建類型的好理由。

擴充內建原型的**唯一**合理理由，就是反向移植新版 JavaScript 引擎的功能，例如 `Array.forEach`。

## 示例

`B` 要繼承自 `A`：

```js
function A(a) {
  this.varA = a;
}

// 在 A.prototype.varA 會永遠被 this.varA 鬼隱（shadowed）的情況下，
// 把 varA 包在給定函式的原型內，其意義為何？
A.prototype = {
  varA: null, // 難道不能因為原型啥都沒作，就把 varA 打斷嗎？
  // 也許他打算要分配隱藏類別的空間，以便實行最佳化？
  // https://developers.google.com/speed/articles/optimizing-javascript#Initializing instance variables
  // 如果 varA 沒有針對每個實例作單一初始化，那麼不就要變有效的？
  doSomething: function () {
    // ...
  },
};

function B(a, b) {
  A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype, {
  varB: {
    value: null,
    enumerable: true,
    configurable: true,
    writable: true,
  },
  doSomething: {
    value: function () {
      // override
      A.prototype.doSomething.apply(this, arguments); // call super
      // ...
    },
    enumerable: true,
    configurable: true,
    writable: true,
  },
});
B.prototype.constructor = B;

var b = new B();
b.doSomething();
```

重點是：

- 型別被定義在 `.prototype`。
- 你用了 `Object.create()` 繼承。

## `prototype` 與 `Object.getPrototypeOf`

JavaScript 對那些從 Java 或 C++ 學過來的人來說，可能會有點困惑，因為它動態、永遠是執行狀態（all runtime）、還完全沒有 class。一切都只是實例（物件）。即使是「class」關鍵字，也只是函式物件。

你可能早就發現我們的 `function A` 有個名為 `prototype` 的特殊屬性。這個特殊屬性會透過 `new` 運算子運行之。原型物件的參照，會把新實例的 `[[Prototype]]` 屬性複製到該物件內部。比方說在你 `var a1 = new A()` 時，JavaScript 在記憶體裡面建立物件後、還有運行已經定義好 `this` 的函式 `A()` 前，會設定 `a1.[[Prototype]] = A.prototype`。在接著訪問實例的屬性前，JavaScript 首先會直接檢查物件的實例屬性是否存在。如果沒有，就檢查 `[[Prototype]]`。也就是說，在 `prototype` 定義的東西，能夠有效地共享給各實，甚至，如果想的話，還可以改變並顯現於現有實例中。

如上例所示，首先 `var a1 = new A(); var a2 = new A();` 接著 `a1.doSomething` 的話，會參照到 `Object.getPrototypeOf(a1).doSomething`，他會與早就定義好的 `A.prototype.doSomething` 相同，例如： `Object.getPrototypeOf(a1).doSomething == Object.getPrototypeOf(a2).doSomething == A.prototype.doSomething`.

簡而言之，`prototype` 針對型別，而 `Object.getPrototypeOf()` 則和實例相同。

`[[Prototype]]` *遞歸性地*鏈結著，例如說 `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` 這樣，直到找出 `Object.getPrototypeOf` 或回傳 null。

因此當你：

```js
var o = new Foo();
```

JavaScript 其實會：

```js
var o = new Object();
o.[[Prototype]] = Foo.prototype;
Foo.call(o);
```

或偶爾這樣：

```js
o.someProp;
```

時，它檢查了 `o` 有沒有 `someProp` 屬性。如果沒有，就檢查 `Object.getPrototypeOf(o).someProp`；再沒有就檢查 `Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp`，依此類推。

## 結論

在撰寫複雜的可用程式碼之前，理解原型繼承模型**很重要**。另外，請注意程式碼內原型鏈的長度、必要時打破它們，以避免潛在的效能問題。再來，除非要處理 JavaScript 新語法的相容性，否則**絕對不能**擴充原生的原型。
