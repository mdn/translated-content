---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
l10n:
  sourceCommit: becca01d713f7f3c37f40ede7ee7c282312dfa4f
---

{{jsSidebar("Statements")}}

**`do...while`** 语句创建了一个循环，只要测试条件为 true，该循环就会执行指定语句。执行语句后会对条件进行评估，从而使指定语句至少执行一次。

{{InteractiveExample("JavaScript Demo: Statement - Do...While")}}

```js interactive-example
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
```

## 语法

```js-nolint
do
  statement
while (condition);
```

- `statement`
  - : 执行至少一次的语句，并在每次条件值为真时重新执行。想在循环中执行多行语句，可使用{{jsxref("Statements/block", "块", "", 1)}}语句包裹这些语句。
- `condition`
  - : 循环中每次都会计算的表达式。如果 `condition` [值为真](/zh-CN/docs/Glossary/Truthy)，`statement` 会再次执行。当 `condition` [值为假](/zh-CN/docs/Glossary/Falsy)时，控制权传递到 `do...while` 之后的语句。

## 描述

与其他循环语句一样，你可以在 `statement` 内使用[控制流语句](/zh-CN/docs/Web/JavaScript/Reference/Statements#控制流)：

- {{jsxref("Statements/break", "break")}} 停止执行 `statement`，转到循环后的第一条语句。
- {{jsxref("Statements/continue", "continue")}} 停止执行 `statement`，并重新评估 `condition`。

`do...while` 语句的语法要求在末尾加上分号，但如果缺少分号导致语法无效，[自动分号补全](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)过程可能会为你插入一个分号。

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

### 使用 false 作为 do...while 条件

由于语句总是被执行一次，`do...while (false)` 等同于执行语句本身。这是类 C 语言中常见的习语，它允许你使用 `break` 来提前跳出分支逻辑。

```js
do {
  if (!user.loggedIn) {
    console.log("你未登陆");
    break;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("未找到朋友");
    break;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
} while (false);
// 剩余代码
```

在 JavaScript 中，有一些替代方法，例如使用带有 `break` 的[带标签块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/label)：

```js
handleFriends: {
  if (!user.loggedIn) {
    console.log("你未登陆");
    break handleFriends;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("未找到朋友");
    break handleFriends;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

或者使用函数：

```js
function handleFriends() {
  if (!user.loggedIn) {
    console.log("你未登陆");
    return;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("未找到朋友");
    return;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
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
