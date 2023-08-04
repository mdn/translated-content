---
title: for
slug: Web/JavaScript/Reference/Statements/for
---

{{jsSidebar("Statements")}}

**`for` 语句**用于创建一个循环，它包含了三个可选的表达式，这三个表达式被包围在圆括号之中，使用分号分隔，后跟一个用于在循环中执行的语句（通常是一个[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)）。

{{EmbedInteractiveExample("pages/js/statement-for.html")}}

## 语法

```plain
for ([initialization]; [condition]; [final-expression])
   statement
```

- `initialization`
  - : 一个表达式 (包含赋值语句) 或者变量声明。典型地被用于初始化一个计数器。该表达式可以使用 `var` 或 `let` 关键字声明新的变量，使用 `var` 声明的变量不是该循环的局部变量，而是与 `for` 循环处在同样的作用域中。用 `let` 声明的变量是语句的局部变量。该表达式的结果无意义。
- `condition`
  - : 一个条件表达式被用于确定每一次循环是否能被执行。如果该表达式的结果为 true，`statement` 将被执行。这个表达式是可选的。如果被忽略，那么就被认为永远为真。如果计算结果为假，那么执行流程将被跳到 `for` 语句结构后面的第一条语句。
- `final-expression`
  - : 每次循环的最后都要执行的表达式。执行时机是在下一次 `condition` 的计算之前。通常被用于更新或者递增计数器变量。
- `statement`
  - : 只要`condition`的结果为 true 就会被执行的语句。要在循环体内执行多条语句，使用一个[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)（`{ ... }`）来包含要执行的语句。没有任何语句要执行，使用一个[空语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/Empty)（`;`）。

## 示例

### 使用 `for`

以下例子声明了变量 `i` 并被初始赋值为 `0`，`for` 语句检查 `i` 的值是否小于 9，如果小于 9，则执行语句块内的语句，并且最后将 `i` 的值增加 1。

```js
for (var i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### 可选的 `for` 表达式

`for` 语句头部圆括号中的所有三个表达式都是可选的。

例如，初始化块中的表达式没有被指定：

```js
var i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}
```

像初始化块一样，条件块也是可选的。如果省略此表达式，则必须确保在循环体内跳出，以防创建死循环。

```js
for (var i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

你当然可以忽略所有的表达式。同样的，确保使用了 {{jsxref("Statements/break", "break")}} >语句来跳出循环并且还要修改（增加）一个变量，使得 break 语句的条件在某个时候是真的。

```js
var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

### 使用无语句的 `for`

以下 `for` 循环计算 _final-expression_ 部分中节点的偏移位置，它不需要执行一个 `statement` 或者一组 `block statement` ，因此使用了空语句。

```js
function showOffsetPos(sId) {
  var nLeft = 0,
    nTop = 0;

  for (
    var oItNode = document.getElementById(sId) /* initialization */;
    oItNode /* condition */;
    nLeft += oItNode.offsetLeft,
      nTop += oItNode.offsetTop,
      oItNode = oItNode.offsetParent /* final-expression */
  ); /* 分号 semicolon */

  console.log(
    "Offset position of '" +
      sId +
      "' element:\n left: " +
      nLeft +
      "px;\n top: " +
      nTop +
      "px;",
  );
}

/* Example call: */

showOffsetPos("content");

// Output:
// "Offset position of "content" element:
// left: 0px;
// top: 153px;"
```

> **备注：** **这里的分号是强制性的**，是 JavaScript 中的少数几种强制分号的情况。如果没有分号，循环声明之后的行将被视为循环语句。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/empty", "empty statement", "", 0)}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
