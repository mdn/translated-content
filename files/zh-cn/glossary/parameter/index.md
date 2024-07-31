---
title: 形式参数
slug: Glossary/Parameter
l10n:
  sourceCommit: 2c4aa2968a162a8742f7bc25798803eaea292304
---

{{GlossarySidebar}}

形式参数（Parameter）是传递给函数{{Glossary("function", "函数")}}的一个命名变量。形式参数变量用于将{{Glossary("argument","实际参数")}}导入函数。

例如：

```js
function example(parameter) {
  console.log(parameter); // 输出 = foo
}

const argument = "foo";

example(argument);
```

形式参数分为两种：

- 输入形式参数
  - : 最常见的类型；将值传递给函数。根据编程语言的不同，输入参数可以通过多种方式传递（例如，按值传递、按地址传递、按引用传递）。
- 输出或返回形式参数
  - : 主要目的是从函数中返回多个值，但不推荐使用，因为它们可能引起混淆。

### 形式参数与实际参数

注意*形式参数*和*实际参数*之间的区别：

- 函数的形式参数是指在函数定义中列出的名称。
- 函数的{{Glossary("argument","实际参数")}}是指传递给函数的真实值。
- 形式参数会根据提供的实际参数的值来初始化。

## 参见

- 维基百科上的[*形式参数*与*实际参数*之间的区别](<https://zh.wikipedia.org/wiki/参数_(程序设计)#参数和引数>)
- [函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)
- [函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
