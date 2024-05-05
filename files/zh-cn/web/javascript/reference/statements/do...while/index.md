---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
l10n:
  sourceCommit: ab9d1f32df124ab355da0118b272f50c19ebc4d9
---

{{jsSidebar("Statements")}}

**`do...while` 语句**创建一个执行指定语句的循环，直到`condition`值为 false。在执行`statement` 后检测`condition`，所以指定的`statement`至少执行一次。

{{EmbedInteractiveExample("pages/js/statement-dowhile.html")}}

## 语法

```js-nolint
do
  statement
while (condition);
```

- `statement`
  - : 执行至少一次的语句，并在每次条件值为真时重新执行。想在循环中执行多行语句，可使用{{jsxref("Statements/block", "块", "", "nocode")}}语句（`{ /* ... */ }`）包裹这些语句。
- `condition`
  - : 循环中每次都会计算的表达式。如果 `condition` [值为真](/zh-CN/docs/Glossary/Truthy)， `statement` 会再次执行。当 `condition` [值为假](/zh-CN/docs/Glossary/Falsy)，则跳到`do...while`之后的语句。

> **备注：** 使用 {{jsxref("Statements/break", "break")}} 语句可在 `condition` 为 false 之前停止循环。

## 示例

### 使用 `do...while`

下面的例子中，`do...while` 循环至少迭代一次，并且继续迭代直到 `i` 不再小于 5 时结束。

```js
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
```

### 使用赋值作为条件

在某些情况下，使用赋值作为条件是有意义的，例如这样：

```js
do {
  // …
} while ((match = regexp.exec(str)));
```

但是，当你这样做时，就会在可读性上有所取舍。在 [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 文档中有一个 [使用赋值作为条件](/zh-CN/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) 部分，其中包含了我们的建议。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
