---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: a13e4b5745274e14f7e1f5213522a4a39b228f81
---

{{jsSidebar("Statements")}}

**`while`** 语句创建一个循环，只要测试条件求值为真，则循环执行指定语句。在执行语句前会先对条件进行求值。

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## 语法

```js-nolint
while (condition)
  statement
```

- `condition`
  - : 每次循环之前求值的表达式。如果[求值为真](/zh-CN/docs/Glossary/Truthy)，`statement` 就会被执行。如果[求值为假](/zh-CN/docs/Glossary/Falsy)，则执行 `while` 循环后面的语句。
- `statement`

  - : 可选语句，只要条件表达式求值为真就会执行。要在循环中执行多条语句，可以使用块语句{{jsxref("Statements/block", "块", "", 1)}} 语句包住这些语句。

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

In some cases, it can make sense to use an assignment as a condition. This comes with readability tradeoffs, so there are certain stylistic recommendations that would make the pattern more obvious for everyone.

Consider the following example, which iterates over a document's comments, logging them to the console.

在某些情况下，使用赋值作为条件是合理的。这样做会带来可读性的权衡，所以有一些风格建议可以使这种模式对每个人更加明显。

在某些情况下，使用赋值作为条件是有意义的。这会带来可读性的权衡，因此有一些风格建议可以让这种模式对每个人都更加明显。

考虑下面的示例，它遍历文档的评论，并将它们记录到控制台中。

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

That's not completely a good-practice example, due to the following line specifically:

```js-nolint example-bad
while (currentNode = iterator.nextNode()) {
```

The _effect_ of that line is fine — in that, each time a comment node is found:

1. `iterator.nextNode()` returns that comment node, which gets assigned to `currentNode`.
2. The value of `currentNode = iterator.nextNode()` is therefore [truthy](/zh-CN/docs/Glossary/Truthy).
3. So the `console.log()` call executes and the loop continues.

…and then, when there are no more comment nodes in the document:

1. `iterator.nextNode()` returns [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null).
2. The value of `currentNode = iterator.nextNode()` is therefore also `null`, which is [falsy](/zh-CN/docs/Glossary/Falsy).
3. So the loop ends.

The problem with this line is: conditions typically use [comparison operators](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators) such as `===`, but the `=` in that line isn't a comparison operator — instead, it's an [assignment operator](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators). So that `=` _looks like_ it's a typo for `===` — even though it's _not_ actually a typo.

Therefore, in cases like that one, some [code-linting tools](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain#code_linting_tools) such as ESLint's [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign) rule — in order to help you catch a possible typo so that you can fix it — will report a warning such as the following:

> Expected a conditional expression and instead saw an assignment.

Many style guides recommend more explicitly indicating the intention for the condition to be an assignment. You can do that minimally by putting additional parentheses as a [grouping operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping) around the assignment:

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

In fact, this is the style enforced by ESLint's `no-cond-assign`'s default configuration, as well as [Prettier](https://prettier.io/), so you'll likely see this pattern a lot in the wild.

Some people may further recommend adding a comparison operator to turn the condition into an explicit comparison:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) !== null) {
```

There are other ways to write this pattern, such as:

```js-nolint example-good
while ((currentNode = iterator.nextNode()) && currentNode) {
```

Or, forgoing the idea of using a `while` loop altogether:

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

If the reader is sufficiently familiar with the assignment as condition pattern, all these variations should have equivalent readability. Otherwise, the last form is probably the most readable, albeit the most verbose.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
