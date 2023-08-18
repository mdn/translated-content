---
title: static
slug: Web/JavaScript/Reference/Classes/static
---

{{jsSidebar("Classes")}}

类（class）通过 **static** 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用。这些通常是实用程序方法，例如创建或克隆对象的功能。

{{EmbedInteractiveExample("pages/js/classes-static.html")}}

## 语法

```plain
static methodName() { ... }
```

## 描述

静态方法调用直接在类上进行，不能在类的实例上调用。静态方法通常用于创建实用程序函数。

## 调用静态方法

### 从另一个静态方法

静态方法调用同一个类中的其他静态方法，可使用 `this` 关键字。

```js
class StaticMethodCall {
  static staticMethod() {
    return "Static method has been called";
  }
  static anotherStaticMethod() {
    return this.staticMethod() + " from another static method";
  }
}
StaticMethodCall.staticMethod();
// 'Static method has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method has been called from another static method'
```

### 从类的构造函数和其他方法

非静态方法中，不能直接使用 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 关键字来访问静态方法。而是要用类名来调用：`CLASSNAME.STATIC_METHOD_NAME()` ，或者用构造函数的属性来调用该方法： `this.constructor.STATIC_METHOD_NAME()`.

```js
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticMethod());
    // 'static method has been called.'
    console.log(this.constructor.staticMethod());
    // 'static method has been called.'
  }
  static staticMethod() {
    return "static method has been called.";
  }
}
```

## 示例

下面的例子说明了这几点：

1. 静态方法如何在类上实现。
2. 具有静态成员的类，可以被子类化。
3. 什么情况下静态方法可以调用，什么情况下不能调用。

```js
class Tripple {
  static tripple(n = 1) {
    return n * 3;
  }
}

class BiggerTripple extends Tripple {
  static tripple(n) {
    return super.tripple(n) * super.tripple(n);
  }
}

console.log(Tripple.tripple()); // 3
console.log(Tripple.tripple(6)); // 18

let tp = new Tripple();

console.log(BiggerTripple.tripple(3)); // 81（不会受父类实例化的影响）
console.log(tp.tripple()); // 'tp.tripple 不是一个函数'.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [`class`表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)
- [`class`声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/zh-CN/docs/Web/JavaScript/Reference/Classes)
