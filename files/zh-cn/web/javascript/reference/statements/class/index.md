---
title: class
slug: Web/JavaScript/Reference/Statements/class
---

{{jsSidebar("Statements")}}

**class 声明**创建一个基于原型继承的具有给定名称的新类。

{{EmbedInteractiveExample("pages/js/statement-class.html")}}

你也可以使用{{jsxref("Operators/class", "类表达式", "", 1)}}定义类。但是不同于类表达式，类声明不允许再次声明已经存在的类，否则将会抛出一个类型错误。

## 语法

```js
class name [extends] {
  // class body
}
```

## 描述

和类表达式一样，类声明体在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下运行。构造函数是可选的。

类声明不可以提升（这与[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)不同）。

## 示例

### 声明一个类

在下面的例子中，我们首先定义一个名为 Polygon 的类，然后继承它来创建一个名为 Square 的类。注意，构造函数中使用的 super() 只能在构造函数中使用，并且必须在使用 this 关键字前调用。

```js
class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }
}
```

> **警告：**
>
> ### 重复定义类
>
> 重复声明一个类会引起类型错误。
>
> ```js
> class Foo {}
> class Foo {}
> // Uncaught TypeError: Identifier 'Foo' has already been declared
> ```
>
> 若之前使用类表达式定义了一个类，则再次声明这个类同样会引起类型错误。
>
> ```js
> let Foo = class {};
> class Foo {}
> // Uncaught TypeError: Identifier 'Foo' has already been declared
> ```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [`function` declaration](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)
- [`class` expression](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)
- [Classes](/zh-CN/docs/Web/JavaScript/Reference/Classes)
