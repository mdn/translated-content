---
title: 强制类型转换
slug: Glossary/Type_coercion
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

强制类型转换是将值从一种数据类型自动或隐式地转换为另一种数据类型（例如字符串转换为数字）。[_类型转换_](/zh-CN/docs/Glossary/Type_Conversion)类似于*强制类型转换*，因为它们都将值从一种数据类型转换为另一种数据类型，只有一个关键的区别——*强制类型转换*是隐式的，而*类型转换*可以是隐式的，*也*可以是显式的。

## 示例

```js
const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
```

在上面的例子中，JavaScript 将数字 `9` *强制转换*成了一个字符串，然后将两个值连接在一起，得到了一个字符串 `59`。JavaScript 在字符串和数字之间进行选择，并决定使用字符串。

编译器本可以将 `5` 强制转换为数字并返回两数总和 `14`，但它没有这样做。要返回这个结果，你必须使用 {{jsxref("Global_Objects/Number", "Number()")}} 方法显式地将 `5` 转换为一个数字：

```js
sum = Number(value1) + value2;
```

## 参见

- 维基百科上的[类型转换](https://zh.wikipedia.org/wiki/类型转换)
- 相关术语：
  - {{Glossary("Type", "类型")}}
  - {{Glossary("Type conversion", "类型转换")}}
