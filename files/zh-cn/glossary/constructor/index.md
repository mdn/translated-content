---
title: Constructor
slug: Glossary/Constructor
---

{{GlossarySidebar}}

**构造函数**属于被实例化的特定类{{glossary("Object","对象")}} 。构造函数初始化这个对象，并提供可以访问其私有信息的方法。构造函数的概念可以应用于大多数{{glossary("OOP","面向对象")}}的编程语言。本质上，{{glossary("JavaScript")}} 中的构造函数通常在{{glossary("class","类")}}的实例中声明。

## 语法

```js
// 这是一个通用的默认构造函数类 Default
function Default() {
}

// 这是一个带参数声明的重载构造函数类 Overloaded
function Overloaded(arg1, arg2, ...,argN){
}
```

要调用 JavaScript 中类的构造函数，请使用 `new` 操作符将新的{{glossary("object reference","对象引用")}}分配给一个{{glossary("variable","变量")}}。

```js
function Default() {}

// 分配给局部变量 defaultReference 的一个新的 Default 对象引用
var defaultReference = new Default();
```

## 了解更多

### 基本常识

- 维基百科上的 [构造函数](https://zh.wikipedia.org/wiki/Constructor_%28object-oriented_programming%29)

### 技术参考

- MDN 上的 [JavaScript 面向对象编程中的构造函数](/zh-CN/docs/Learn/JavaScript/Objects)
- MDN 上的 [JavaScript 的 New 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
