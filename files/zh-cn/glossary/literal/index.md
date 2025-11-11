---
title: 字面量
slug: Glossary/Literal
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**字面量**在 JavaScript 中表示固定的值，而不是变量，这些值是*直接*在脚本中提供的。

- [数组字面量](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#数组字面量)
- [布尔字面量](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#布尔字面量)
- [浮点字面量](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#浮点数字面量)
- [数字字面量](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#数字字面量)
- [对象字面量](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#对象字面量)
- [正则表达式字面量](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_字面量)
- [字符串字面量](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#字符串字面量)

## 示例

### 字符串字面量

字符串字面量是由双引号（`"`）或单引号（`'`）包围的零个或多个字符的序列。字符串必须由相同类型的引号（即，单引号或双引号）括起来。

以下是字符串字面量的示例：

```js
"foo";
"bar";
"1234";
"一行 \n 又一行";
"Joyo 的猫";
```

### 对象字面量

对象字面量是由零个或多个属性名称和相关值的对组成的列表，用大括号（`{}`）括起来。

以下是对象字面量的示例。`car` 对象的第一个元素定义了一个属性 `myCar`，并赋予它一个新字符串 `"丰田"`；第二个元素，`getCar` 属性，立即赋值为调用函数 `carTypes('本田')` 的结果；第三个元素，`special` 属性，使用了一个现有的变量 `sales`。

```js
const sales = "宝马";

function carTypes(name) {
  return name === "本田" ? name : `不好意思，我们不卖${name}。`;
}

const car = {
  myCar: "丰田",
  getCar: carTypes("本田"),
  special: sales,
};

console.log(car.myCar); // 丰田
console.log(car.getCar); // 本田
console.log(car.special); // 宝马
```

## 参见

- 维基百科上的[字面量](<https://en.wikipedia.org/wiki/Literal_(computer_programming)>)
