---
title: super
slug: Web/JavaScript/Reference/Operators/super
---

{{jsSidebar("Operators")}}

super 關鍵字被使用於通過函式存取父層

`super.prop` 與 `super[expr]` 表達有效在 [method definition](/zh-TW/docs/Web/JavaScript/Reference/Functions/Method_definitions) 與 [classes](/zh-TW/docs/Web/JavaScript/Reference/Classes) 與 [object literals](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## 語法

```plain
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
```

## 描述

當使用建構子，`super` 關鍵字必須出現在`this` 關鍵字之前使用，`super` 關鍵字也可以使用在呼叫函式與父對象

## 範例

### 在類別中使用 `super`

這個程式碼片段從 [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)). 這裏的 `super()` 被呼叫去避免複製到建構子的 `Rectangle` 與 `Square` 的共通部分。

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = "Square";
  }
}
```

### Super-calling 靜態方法

你也可以使用在[靜態](/zh-TW/docs/Web/JavaScript/Reference/Classes/static)方法.

```js
class Rectangle {
  constructor() {}
  static logNbSides() {
    return "I have 4 sides";
  }
}

class Square extends Rectangle {
  constructor() {}
  static logDescription() {
    return super.logNbSides() + " which are all equal";
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
```

### 刪除 super 屬性將拋出錯誤

你不能使用 [delete operator](/zh-TW/docs/Web/JavaScript/Reference/Operators/delete) 以及 `super.prop` 以及 `super[expr]` 去刪除父層的類別屬性, 不然他會丟出一個錯誤 {{jsxref("ReferenceError")}}.

```js
class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### `super.prop` 不能複寫在不能複寫的屬性

當定義不可寫屬性，例如 {{jsxref("Object.defineProperty")}}, `super` 不能複寫這個屬性的值.

```js
class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2; // Cannot overwrite the value.
  }
}

var y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1
```

### 使用 `super.prop` 在對象符號

Super 可以使用在 [object initializer / literal](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer) 符號. 在這個範例, 有兩個對象定義在一個方法. 在第二個對象裡面, `super` 呼叫了第一個對象的方法. 這個動作幫助 {{jsxref("Object.setPrototypeOf()")}} 讓我們可以設定原型 `obj2` to `obj1`, 所以 `super` 可以發現 `method1` 在 `obj1`裡被找到.

```js
var obj1 = {
  method1() {
    console.log("method 1");
  },
};

var obj2 = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
```

## 規格

{{Specifications}}

## Browser compatibility

{{Compat}}

## 參考

- [Classes](/zh-TW/docs/Web/JavaScript/Reference/Classes)
- [Anurag Majumdar - Super & Extends in JavaScript](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420)
