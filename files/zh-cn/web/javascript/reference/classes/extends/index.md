---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
---

{{jsSidebar("Classes")}}

**`extends`** 关键字用于[类声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)或者[类表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)中，以创建一个类，该类是另一个类的子类。

## 语法

```plain
class ChildClass extends ParentClass { ... }
```

## 描述

`extends` 关键字用来创建一个普通类或者内建对象的子类。

继承的 `.prototype` 必须是一个 {{jsxref("Object")}} 或者 {{jsxref("null")}}。

## 示例

### 使用 `extends`

第一个例子是根据名为 `Polygon` 类创建一个名为 `Square` 的类。这个例子是从这个[在线演示](https://googlechrome.github.io/samples/classes-es6/index.html)中提取出来的。

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

### 使用 `extends`与内置对象

这个示例继承了内置的 {{jsxref("Date")}} 对象。这个例子是从这个[在线演示](https://googlechrome.github.io/samples/classes-es6/index.html)中提取出来的。

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

### 扩展 `null`

可以像扩展普通类一样扩展 {{jsxref("null")}}，但是新对象的原型将不会继承 {{jsxref("Object.prototype")}}。

```js
class nullExtends extends null {
  constructor() {}
}

Object.getPrototypeOf(nullExtends); // Function.prototype
Object.getPrototypeOf(nullExtends.prototype); // null

new nullExtends(); //ReferenceError: this is not defined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 扩展阅读

- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
- [super](/zh-CN/docs/Web/JavaScript/Reference/Operators/super)
