---
title: 建構子
slug: Web/JavaScript/Reference/Classes/constructor
---

`constructor`（建構子）是個隨著 `class` 一同建立並初始化物件的特殊方法。

## 語法

```plain
constructor([arguments]) { ... }
```

## 敘述

一個 class 只能有一個稱為 constructor 的特殊物件。如果一個 class 出現兩次以上的 `constructor`，就會發生 {{jsxref("SyntaxError")}} 錯誤。

如果不指定建構子，就會使用預設的建構子。

## 示例

### 使用 `constructor` 方法

這段程式碼是從 [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) 擷取而來。（[線上範例](https://googlechrome.github.io/samples/classes-es6/index.html)）

```js
class Square extends Polygon {
  constructor(length) {
    // 我們在這裡呼叫了 class 的建構子提供多邊形的長寬值
    super(length, length);
    // 注意：在 derived class 中，super() 必須在使用 this 以前被呼叫。不這樣的話會發生錯誤。
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
```

### 預設的建構子

如上文所說：如果不指定建構子，就會使用預設的建構子。對 base classes 而言，預設的建構子長得像這樣：

```js
constructor() {}
```

對 derived class 而言，預設的建構子長得像這樣：

```js
constructor(...args) {
  super(...args);
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [super()](/zh-TW/docs/Web/JavaScript/Reference/Operators/super)
- [`class` expression](/zh-TW/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/zh-TW/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/zh-TW/docs/Web/JavaScript/Reference/Classes)
