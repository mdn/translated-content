---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
---

{{jsSidebar("Classes")}}

**`extends`** 關鍵字被使用於[類別（class）宣告](/zh-TW/docs/Web/JavaScript/Reference/Statements/class)或[類別（class）表達式](/zh-TW/docs/Web/JavaScript/Reference/Operators/class)中來建立擴展的子類別 。

{{InteractiveExample("JavaScript Demo: Classes Extends", "taller")}}

```js interactive-example
class DateFormatter extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new DateFormatter("August 19, 1975 23:15:30").getFormattedDate());
// Expected output: "19-Aug-1975"
```

## 語法

```plain
class ChildClass extends ParentClass { ... }
```

## 解釋

`extends` 關鍵字可用於建立一個自訂類別或內建類別的子類別。

其繼承之原型 `.prototype` 必須是 {{jsxref("Object")}} 或 {{jsxref("null")}}。

## 範例

### 使用 `extends`

第一個範例是根據 `Polygon`類別建立一個名為 `Square` 的子類別。此範例提取自[線上示例](https://googlechrome.github.io/samples/classes-es6/index.html)。

```js
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }
}
```

### 使用 `extends` 於內建類別

這個範例擴展了內建的 {{jsxref("Date")}} 類別。此範例提取自[線上範例](https://googlechrome.github.io/samples/classes-es6/index.html)。

```js
class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear()
    );
  }
}
```

### 擴展 `null`

像擴展普通類別一樣擴展 {{jsxref("null")}}，但新對象的原型不會繼承 {{jsxref("Object.prototype")}}。

```js
class nullExtends extends null {
  constructor() {}
}

Object.getPrototypeOf(nullExtends); // Function.prototype
Object.getPrototypeOf(nullExtends.prototype); // null

new nullExtends(); //ReferenceError: this is not defined
```

## 標準

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Classes](/zh-TW/docs/Web/JavaScript/Reference/Classes)
- [super](/zh-TW/docs/Web/JavaScript/Reference/Operators/super)
