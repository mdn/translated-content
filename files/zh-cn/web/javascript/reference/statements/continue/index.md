---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

**`continue`** 声明终止当前循环或标记循环的当前迭代中的语句执行，并在下一次迭代时继续执行循环。

{{InteractiveExample("JavaScript Demo: Statement - Continue")}}

```js interactive-example
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// Expected output: "012456789"
```

## 语法

```js-nolint
continue;
continue label;
```

- `label`
  - : 标识标签关联的语句

## 描述

与 {{jsxref("Statements/break", "break")}} 语句的区别在于，`continue` 并不会完全终止循环的执行，而是：

- 在 {{jsxref("Statements/while", "while")}} 或 {{jsxref("Statements/do...while", "do...while")}} 循环中，控制流跳转回条件判断；
- 在 {{jsxref("Statements/for", "for")}} 循环中，控制流跳转到更新语句。
- 在 {{jsxref("Statements/for...in", "for...in")}}、{{jsxref("Statements/for...of", "for...of")}} 或 {{jsxref("Statements/for-await...of", "for await...of")}} 循环中，它会跳转到下一次迭代。

`continue` 语句可以包含一个可选的标签以控制程序跳转到指定循环的下一次迭代，而非当前循环。这种情况要求 `continue` 语句在被标识的语句内部。

在脚本、模块、函数体或[静态初始块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)的顶层不能使用 `continue` 语句（无论是否带有后续标签），即使该函数或类进一步包含在循环中也不行。

## 示例

### 在 while 语句中使用 continue

下述例子展示了一个在 `i` 为 3 时执行 `continue` 语句的 {{jsxref("Statements/while", "while")}} 循环。因此，`n` 的值在几次迭代后分别为 1、3、7 和 12。

```js
i = 0;
n = 0;
while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }
  n += i;
}
```

### 使用带标签的 continue

在下面的例子中，被标记为 `checkiandj` 的语句包含一个被标记为 `checkj` 的语句。当遇到 `continue` 语句时，程序回到 `checkj` 语句的开始继续执行。每次遇到 `continue` 时，再次执行 `checkj`，直到条件判断返回 false。之后完成 `checkiandj` 语句剩下的部分。

但如果 `continue` 的标号被改为 `checkiandj` ，那程序将会从 `checkiandj` 语句的开始继续运行。

```js
let i = 0;
let j = 8;

checkIAndJ: while (i < 4) {
  console.log(`i：${i}`);
  i += 1;

  checkJ: while (j > 4) {
    console.log(`j：${j}`);
    j -= 1;

    if (j % 2 === 0) continue checkJ;
    console.log(`${j} 是奇数。`);
  }
  console.log(`i = ${i}`);
  console.log(`j = ${j}`);
}
```

输出：

```plain
i：0

// checkj 开始
j：8
7 是奇数。
j：7
j：6
5 是奇数。
j：5
// checkj 结束

i = 1
j = 4

i：1
i = 2
j = 4

i：2
i = 3
j = 4

i：3
i = 4
j = 4
```

### 语法错误的 continue 语句

`continue` 不能在跨越函数边界的循环中使用。

```js-nolint example-bad
for (let i = 0; i < 10; i++) {
  (() => {
    continue; // SyntaxError: Illegal continue statement: no surrounding iteration statement
  })();
}
```

引用标签时，标签语句必须包含 `continue` 语句。

```js-nolint example-bad
label: for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  continue label; // SyntaxError: Undefined label 'label'
}
```

标记的语句必须是一个循环。

```js-nolint example-bad
label: {
  for (let i = 0; i < 10; i++) {
    continue label; // SyntaxError: Illegal continue statement: 'label' does not denote an iteration statement
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/label", "标记", "", 1)}}
