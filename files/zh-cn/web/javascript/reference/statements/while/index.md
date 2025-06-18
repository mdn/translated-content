---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: a13e4b5745274e14f7e1f5213522a4a39b228f81
---

{{jsSidebar("Statements")}}

**`while`** 语句创建一个循环，只要测试条件求值为真，则循环执行指定语句。在执行语句前会先对条件进行求值。

{{InteractiveExample("JavaScript Demo: Statement - While")}}

```js interactive-example
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// Expected output: 3
```

## 语法

```js-nolint
while (condition)
  statement
```

- `condition`
  - : 每次循环之前求值的表达式。如果[求值为真](/zh-CN/docs/Glossary/Truthy)，`statement` 就会被执行。如果[求值为假](/zh-CN/docs/Glossary/Falsy)，则执行 `while` 循环后面的语句。
- `statement`

  - : 可选语句，只要条件表达式求值为真就会执行。要在循环中执行多条语句，可以使用{{jsxref("Statements/block", "块", "", 1)}}语句（`{ /* ... */ }`）包住这些语句。

    注意：使用 {{jsxref("Statements/break", "break")}} 语句在 `condition` 求值为真之前停止循环。

## 示例

### 使用

只要 `n` 小于三，下面的 `while` 就会一直迭代。

```js
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

在每次迭代中，`n` 都会自增，然后再把 `n` 加到 `x` 上。因此，在每轮循环结束后，`x` 和 `n` 的值分别是：

- 第一轮后：`n` = 1，`x` = 1
- 第二轮后：`n` = 2，`x` = 3
- 第三轮后：`n` = 3，`x` = 6

当完成第三轮循环后，条件 `n` < 3 不再为真，因此循环终止。

### 使用赋值作为条件

在某些情况下，使用赋值作为条件是有意义的。但这会牺牲可读性，因此有一些样式建议可以让这种模式对所有人都更加清晰。

考虑下面的示例，它遍历文档的评论，并将它们打印到控制台中。

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

这个例子并不完全符合最佳实践，特别是由于下面这一行代码：

```js-nolint example-bad
while (currentNode = iterator.nextNode()) {
```

这行代码的*效果*是可以的——每当找到一个评论节点时：

1. `iterator.nextNode()` 返回一个评论节点，并将其赋值给 `currentNode`。
2. 因此 `currentNode = iterator.nextNode()` 的值为[真值](/zh-CN/docs/Glossary/Truthy)。
3. 因此 `console.log()` 调用执行，循环继续。

然后，当文档中不再有注释节点时：

1. `iterator.nextNode()` 返回 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。
2. 因此 `currentNode = iterator.nextNode()` 的值为 `null`，这也是[假值](/zh-CN/docs/Glossary/Falsy)。
3. 因此循环终止。

这行代码的问题在于：条件通常使用[比较运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#比较运算符)，比如 `===`，但是这行代码中的 `=` 不是比较运算符，而是一个[赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)。所以，这个 `=` *看起来像*是 `===` 的拼写错误，尽管实际上它并*不是*拼写错误。

因此，在这种情况下，一些[代码检查工具](/zh-CN/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain#代码检查工具)（如 ESLint 的 `no-cond-assign` 规则）会报告警告，以帮助你捕捉可能的拼写错误，以便你可以进行修正。警告可能会类似于以下内容：

> Expected a conditional expression and instead saw an assignment.

许多样式指南建议更明确地表示条件是一个赋值的意图。你可以通过在赋值周围加上额外的括号作为[分组运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping)来做到这一点，以最小化地表示意图：

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

实际上，这也是 ESLint 的 `no-cond-assign` 默认配置和 [Prettier](https://prettier.io/) 强制执行的样式，因此你可能会在实际代码中看到这种模式的很多实例。

有些人可能进一步建议添加比较运算符以将条件转变为显式比较：

```js-nolint example-good
while ((currentNode = iterator.nextNode()) !== null) {
```

还有其他方法可以编写此模式，例如：

```js-nolint example-good
while ((currentNode = iterator.nextNode()) && currentNode) {
```

或者，完全放弃使用 `while` 循环的想法：

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
for (
  let currentNode = iterator.nextNode();
  currentNode;
  currentNode = iterator.nextNode()
) {
  console.log(currentNode.textContent.trim());
}
```

如果读者对将赋值用作条件的模式非常熟悉，那么所有这些变体的可读性应该是相等的。否则，最后一种形式可能是最易读的，尽管它是最冗长的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
