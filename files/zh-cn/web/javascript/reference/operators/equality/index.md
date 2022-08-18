---
title: 相等（==）
slug: Web/JavaScript/Reference/Operators/Equality
original_slug: Web/JavaScript/Reference/Operators/相等
---
{{jsSidebar("Operators")}}

等于运算符（`==`）检查其两个操作数是否相等，并返回`Boolean`结果。与[严格相等](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)运算符（`===`）不同，它会尝试强制类型转换并且比较不同类型的操作数。

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}

## 语法

```plain
x == y
```

## 描述

相等运算符（`==`和`!=`）使用[抽象相等比较算法](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)比较两个操作数。可以大致概括如下：

- 如果两个操作数都是对象，则仅当两个操作数都引用同一个对象时才返回`true`。
- 如果一个操作数是`null`，另一个操作数是`undefined`，则返回`true`。
- 如果两个操作数是不同类型的，就会尝试在比较之前将它们转换为相同类型：

  - 当数字与字符串进行比较时，会尝试将字符串转换为数字值。
  - 如果操作数之一是`Boolean`，则将布尔操作数转换为 1 或 0。

    - 如果是`true`，则转换为`1`。
    - 如果是 `false`，则转换为`0`。

  - 如果操作数之一是对象，另一个是数字或字符串，会尝试使用对象的`valueOf()`和`toString()`方法将对象转换为原始值。

- 如果操作数具有相同的类型，则将它们进行如下比较：

  - `String`：`true`仅当两个操作数具有相同顺序的相同字符时才返回。
  - `Number`：`true`仅当两个操作数具有相同的值时才返回。`+0`并被`-0`视为相同的值。如果任一操作数为`NaN`，则返回`false`。
  - `Boolean`：`true`仅当操作数为两个`true`或两个`false`时才返回`true`。

此运算符与[严格等于](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)（`===`）运算符之间最显着的区别在于，严格等于运算符不尝试类型转换。相反，严格相等运算符始终将不同类型的操作数视为不同。

## 例子

### 没有类型转换的比较

```js
1 == 1;              // true
"hello" == "hello";  // true
```

### 与类型转换比较

```js
"1" ==  1;            // true
1 == "1";             // true
0 == false;           // true
0 == null;            // false
0 == undefined;       // false
null == undefined;    // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3;         // true
number1 == number2;   // false
```

### 对象比较

```js
const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 == object2 // false
object2 == object2 // true
```

### 比较字符串和 String 对象

请注意，使用构造的字符串`new String()`是对象。如果将其中之一与字符串文字进行比较，则该`String`对象将被转换为字符串文字并对其内容进行比较。但是，如果两个操作数都是`String`对象，则将它们作为对象进行比较，并且必须引用相同的对象才能进行比较：

```js
const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
```

### 比较日期和字符串

```js
const d = new Date('December 17, 1995 03:24:00');
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s);    //true
```

## 技术指标

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [不等式运算符](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
- [严格相等运算符](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [严格的不等式运算符](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
