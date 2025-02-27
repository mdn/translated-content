---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jsSidebar("Statements")}}

**`for` 语句**用于创建一个循环，它包含了三个可选的表达式，这三个表达式被包围在圆括号之中，使用分号分隔，后跟一个用于在循环中执行的语句（通常是一个[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)）。

{{InteractiveExample("JavaScript Demo: Statement - For")}}

```js interactive-example
let str = "";

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "012345678"
```

## 语法

```js-nolint
for (initialization; condition; afterthought)
  statement
```

- `initialization` {{optional_inline}}

  - : 在循环开始前初始化的表达式（包含[赋值表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment)）或者变量声明。通常用于初始化计数器变量。该表达式可以选择使用 `var` 或 `let` 关键字声明新的变量，使用 `var` 声明的变量不是该循环的局部变量，而是与 `for` 循环处在同样的作用域中。用 `let` 声明的变量是语句的局部变量。

    该表达式的结果会被丢弃。

- `condition` {{optional_inline}}

  - : 每次循环迭代之前要判定的表达式。如果该表达式的[判定结果为真](/zh-CN/docs/Glossary/Truthy)，`statement` 将被执行。如果[判定结果为假](/zh-CN/docs/Glossary/Falsy)，那么执行流程将退出循环，并转到 `for` 结构后面的第一条语句。

    这个条件测试是可选的。如果省略，该条件总是计算为真。

- `afterthought` {{optional_inline}}
  - : 每次循环迭代结束时执行的表达式。执行时机是在下一次判定 `condition` 之前。通常被用于更新或者递增计数器变量。
- `statement`
  - : 只要条件的判定结果为真就会被执行的语句。你可以使用[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)来执行多个语句。如果没有任何语句要执行，请使用一个[空语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/Empty)（`;`）。

## 描述

就像其他循环语句，你可以在 `statement` 中使用[控制流程语句](/zh-CN/docs/Web/JavaScript/Reference/Statements#控制流程)：

- {{jsxref("Statements/break", "break")}} 停止 `statement` 的执行，并转到循环后的第一条语句。
- {{jsxref("Statements/continue", "continue")}} 停止 `statement` 的执行，并重新执行 `afterthought`，然后是 `condition`。

## 示例

### 使用 for

下面的 `for` 语句首先声明了变量 `i` 并被将其初始化为 `0`。它检查 `i` 是否小于九，执行两个后续语句，并在每次循环后将 `i` 增加 1。

```js
for (var i = 0; i < 9; i++) {
  console.log(i);
  // 更多语句
}
```

### 初始化块的语法

初始化块接受表达式和变量声明。然而，表达式不能使用没有括号的 [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 运算符，因为这与 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环有歧义。

```js-nolint example-bad
for (let i = "start" in window ? window.start : 0; i < 9; i++) {
  console.log(i);
}
// SyntaxError: 'for-in' loop variable declaration may not have an initializer.
```

```js-nolint example-good
// 将整个初始化器括起来
for (let i = ("start" in window ? window.start : 0); i < 9; i++) {
  console.log(i);
}

// 将 `in` 表达式括起来
for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
  console.log(i);
}
```

### 可选的 for 表达式

`for` 循环头部中的三个表达式都是可选的。例如，不需要使用 `initialization` 块来初始化变量：

```js
let i = 0;
for (; i < 9; i++) {
  console.log(i);
  // 更多语句
}
```

与 `initialization` 块一样，`condition` 部分也是可选的。如果省略此表达式，则必须确保在主体内打破循环，以免创建无限循环。

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // 更多语句
}
```

你也可以忽略所有的表达式。同样地，确保使用了 {{jsxref("Statements/break", "break")}} 语句来结束循环并修改（递增）变量，使得中断语句的条件在某个时刻为真。

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

然而，如果你没有完全使用这三个表达式，尤其是如果你没有使用第一个表达式声明变量，而是在上层作用域中修改了某个东西，那么考虑使用 [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 循环，这样可以更清晰地说明意图。

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### 初始化块中的词法声明

在初始化块中声明变量与在上层[作用域](/zh-CN/docs/Glossary/Scope)中声明它有着重要的区别，尤其是在循环体中创建[闭包](/zh-CN/docs/Web/JavaScript/Closures)时。例如，对于以下代码：

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

正如预期的那样，它打印了 `0`、`1` 和 `2`。但是，如果变量是在上层作用域中定义的：

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

它打印了 `3`、`3` 和 `3`，因为每个 `setTimeout` 创建了一个新的闭包，它引用了 `i` 变量，但是如果 `i` 不是循环体的局部变量，那么所有的闭包都会引用同一个变量，并且由于 {{domxref("Window.setTimeout", "setTimeout()")}} 的异步性质，它可能在循环已经退出之后才被调用，导致所有队列里的回调函数的 `i` 值都被设置为 `3`。

如果你使用 `var` 语句来初始化，那么变量声明将只作用于函数作用域，而不是词法作用域（即它不会局限于循环体）。

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// 打印 3、3、3
```

初始化块的作用域范围可以理解为声明发生在循环体内部，但实际上只能在 `condition` 和 `afterthought` 部分中访问。更准确地说，`let` 声明是 `for` 循环特有的——如果 `initialization` 是 `let` 声明，那么每次循环体执行完毕后，都会发生以下事情：

1. 使用 `let` 声明新的变量会创建一个新的词法作用域。
2. 上次迭代的绑定值用于重新初始化新变量。
3. `afterthought` 在新的作用域中执行。

因此，在 `afterthought` 中重新分配新变量不会影响上一次迭代的绑定。

新的词法作用域会在 `initialization` 之后、`condition` 第一次被判定之前创建。这些细节可以通过创建闭包来观察到，闭包允许在任何特定点获取绑定。例如，在以下代码中，在 `initialization` 部分创建的闭包不会被 `afterthought` 中 `i` 的重新分配更新：

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// 打印 0、0、0
```

这不会像在循环体中声明 `getI` 的那样，打印“0、1、2”。这是因为 `getI` 在每次迭代时都不会重新计算——相反，它是一次性创建的，并引用了 `i` 变量，该变量是在循环首次初始化时声明的。对 `i` 的后续更新实际上会创建新的变量 `i`，而 `getI` 却看不到。修复的方法是每当 `i` 更新时重新计算 `getI`：

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// 打印 0、1、2
```

`initialization` 内部的 `i` 变量与每次迭代中的 `i` 变量是不同的，包括第一次。因此，在这个例子中，`getI` 返回 0，即使在迭代中 `i` 的值已经递增了：

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// 打印 0、0、0
```

实际上，你可以捕获 `i` 变量的初始绑定，并稍后重新分配它，这样更新的值不会影响循环体，它只能看到下一次的 `i` 绑定。

```js
for (
  let i = 0, getI = () => i, incrementI = () => i++;
  getI() < 3;
  incrementI()
) {
  console.log(i);
}
// 打印 0、0、0
```

这会打印“0、0、0”，因为 `i` 变量在每次循环执行中实际上是一个单独的变量，但是 `getI` 和 `incrementI` 都读取和写入 `i` 的*初始*绑定，而不是后来声明的那个。

### 在没有循环体的情况下使用 for

以下的 `for` 循环计算了一个节点在 `afterthought` 部分的偏移位置，因此不需要使用 `statement` 部分，而是使用分号。

```js
function showOffsetPos(id) {
  let left = 0;
  let top = 0;
  for (
    let itNode = document.getElementById(id); // initialization
    itNode; // condition
    left += itNode.offsetLeft,
      top += itNode.offsetTop,
      itNode = itNode.offsetParent // afterthought
  ); // 分号

  console.log(
    `“${id}”元素的偏移位置：
左侧：${left}px；
顶部：${top}px；`,
  );
}

showOffsetPos("content");

// 打印：
// “content”元素的偏移位置
// 左侧：0px；
// 顶部：153px；
```

注意，`for` 语句后面必须使用分号，因为它是一个[空语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/Empty)。否则，`for` 语句将 `console.log` 行作为 `statement` 部分，这会导致 `log` 被执行多次。

### 使用两个迭代变量的 for 语句

你可以使用[逗号运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_operator)来创建两个同时更新的计数器。多个 `let` 和 `var` 声明也可以使用逗号运算符连接。

```js
const arr = [1, 2, 3, 4, 5, 6];
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
  console.log(arr[l], arr[r]);
}
// 1 6
// 2 5
// 3 4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [空语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/Empty)
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
