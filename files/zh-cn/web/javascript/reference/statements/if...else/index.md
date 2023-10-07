---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
---

{{jsSidebar("Statements")}}

当指定条件为真，**if 语句**会执行一段语句。如果条件为假，则执行另一段语句。

{{EmbedInteractiveExample("pages/js/statement-ifelse.html")}}

## 语法

```plain
if (condition)
   statement1
[else
   statement2]
```

- `condition`
  - : 值为真或假的[表达式](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#表达式)
- `statement1`
  - : 当`condition`为真时执行的语句。可为任意语句，包括更深层的内部`if`语句。要执行多条语句，使用[块](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)语句（{ ... }）将这些语句分组；若不想执行语句，则使用[空](/zh-CN/docs/Web/JavaScript/Reference/Statements/Empty)语句。
- `statement2`
  - : 如果`condition`为假且 `else`从句存在时执行的语句。可为任意语句，包括块语句和嵌套的`if`语句。

## 说明

多层 `if...else` 语句可使用 `else if` 从句。注意：在 Javascript 中没有 `elseif` （一个单词）关键字。

```plain
if (condition1)
   statement1
else if (condition2)
   statement2
else if (condition3)
   statement3
...
else
   statementN
```

要看看它如何工作，可以调整下嵌套的缩进：

```plain
if (condition1)
   statement1
else
   if (condition2)
      statement2
   else
      if (condition3)
...
```

要在一个从句中执行多条语句，可使用语句块（`{ ... }`）。通常情况下，一直使用语句块是个好习惯，特别是在涉及嵌套`if`语句的代码中：

```plain
if (condition) {
   statements1
} else {
   statements2
}
```

不要将原始布尔值的`true`和`false`与[Boolean](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)对象的真或假混淆。任何一个值，只要它不是 `undefined`、`null`、 `0`、`NaN`或空字符串（`""`），那么无论是任何对象，即使是值为假的 Boolean 对象，在条件语句中都为真。例如：

```js
var b = new Boolean(false);
if (b) //表达式的值为 true
```

## 示例

### 使用 `if...else`

```js
if (cipher_char === from_char) {
  result = result + to_char;
  x++;
} else {
  result = result + clear_char;
}
```

### 使用 `else if`

注意，Javascript 中没有`elseif`语句。但可以使用`else`和`if`中间有空格的语句：

```js
if (x > 5) {
  /* do the right thing */
} else if (x > 50) {
  /* do the right thing */
} else {
  /* do the right thing */
}
```

### 条件表达式中的赋值运算

建议不要在条件表达式中单纯的使用赋值运算，因为粗看下赋值运算的代码很容易让人误认为是等性比较。比如，不要使用下面示例的代码：

```js-nolint example-bad
if (x = y) {
  /* do the right thing */
}
```

如果你需要在条件表达式中使用赋值运算，用圆括号包裹赋值运算。例如：

```js example-good
if ((x = y)) {
  /* do the right thing */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Statements/block", "block")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/conditional_operator", "条件运算符")}}
