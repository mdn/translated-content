---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
l10n:
  sourceCommit: becca01d713f7f3c37f40ede7ee7c282312dfa4f
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
  - : 执行至少一次的语句，并在每次条件值为真时重新执行。想在循环中执行多行语句，可使用{{jsxref("Statements/block", "块", "", "nocode")}}语句包裹这些语句。
- `condition`
  - : 循环中每次都会计算的表达式。如果 `condition` [值为真](/zh-CN/docs/Glossary/Truthy)， `statement` 会再次执行。当 `condition` [值为假](/zh-CN/docs/Glossary/Falsy)，控制权传递到 `do...while` 之后的语句。

## 示例

### 使用 do...while

下面的例子中，`do...while` 循环至少迭代一次，并且继续迭代直到 `i` 不再小于 5 时结束。

```js
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// 尽管 i === 0，但仍会进入循环，因为开始时没有进行测试

console.log(result);
```

### 使用赋值作为条件

在某些情况下，使用赋值作为条件是有意义的，例如这样：

```js
do {
  // …
} while ((match = regexp.exec(str)));
```

但是，当你这样做时，就会在可读性上有所取舍。在 [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 文档中有一个[使用赋值作为条件](/zh-CN/docs/Web/JavaScript/Reference/Statements/while#使用赋值作为条件)部分，其中包含了我们的建议。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
