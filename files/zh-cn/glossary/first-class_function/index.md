---
title: 头等函数
slug: Glossary/First-class_Function
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

当一门编程语言的函数可以被当作变量一样用时，则称这门语言拥有**头等函数**。例如，在这样的语言中，函数可以被当作参数传递给其他函数，可以作为另一个函数的返回值，还可以被赋值给一个变量。

## 示例

### 把函数赋值给变量

```js
const foo = function () {
  console.log("foobar");
};
foo(); // 用变量来调用它
// foobar
```

这里我们把一个*匿名函数*赋值给一个{{glossary("Variable", "变量")}}，然后我们在这个变量后面加上一对圆括号 `()` 来调用这个函数。

> [!NOTE]
> 即使你的函数有自己的函数名称，你仍然可以用这个变量名去调用它。给函数命名只会方便你调试，_但不会影响我们调用它。_

### 将函数作为参数传递

```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// 将 `sayHello` 作为 `greeting` 函数的参数进行传递
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
```

这里我们传递 `sayHello()` 函数作为 `greeting()` 函数的参数，这就印证了头等函数定义所说的——我们把函数当作**值**或者说是**变量**来对待。

> [!NOTE]
> 回调函数：我们把一个函数作为参数传递给另一个函数，那么我们就称这个函数为 _{{glossary("callback function", "回调函数")}}_。_`sayHello()` 函数就是一个回调函数_。

### 返回一个函数

```js
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}
```

在这个例子中，我们需要从另外一个函数中返回一个函数，_之所以可以返回一个函数，是因为在 Javascript 中，函数可被作为**值**来对待。_

> [!NOTE]
> 一个返回另外一个函数的函数被称为*高阶函数*。

## 参见

- 维基百科上的[头等函数](https://zh.wikipedia.org/wiki/头等函数)
- [术语](/zh-CN/docs/Glossary)
  - {{glossary("Callback function", "回调函数")}}
  - {{glossary("Function", "函数")}}
  - {{glossary("Variable", "变量")}}
