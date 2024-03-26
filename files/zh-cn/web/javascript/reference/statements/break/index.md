---
title: break 语句
slug: Web/JavaScript/Reference/Statements/break
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

**`break`** 语句中止当前循环或中止 {{jsxref("Statements/switch", "switch")}} 语句，并将程序控制权转移到中止语句后的语句。当在使用[标记语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/label)内使用时，它也可以用来跳过标记语句。

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## 语法

```js-nolint
break;
break label;
```

- `label` {{optional_inline}}
  - : 与要中断到的语句的标签关联的标识符。如果 `break` 语句未嵌套在循环或 {{jsxref("Statements/switch", "switch")}} 中，则需要标签标识符。

## 描述

遇到 `break;` 时，程序会跳出最内层的 `switch` 或 [语句和声明](/zh-CN/docs/Web/JavaScript/Reference/Statements#迭代)，并继续执行其后的下一条语句。

遇到 `break label;` 时，程序会跳出标记为 `label` 的语句，并继续执行其后的下一条语句。`break` 语句需要嵌套在引用的标签内。标记语句可以是任何语句（通常是 {{jsxref("Statements/block", "block", "", 1)}} 语句），它不一定是另一个循环语句。

即使函数或类进一步嵌套在循环中，`break` 语句（无论是否带有标签）也不能在脚本、模块、函数体或[静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)的顶层使用。

## 示例

### 中止 while 循环

以下函数有一个 `break` 语句，当 `i` 等于 3 时中止 {{jsxref("Statements/while", "while")}} 循环，然后返回 `3 * x` 的值。

```js
function testBreak(x) {
  let i = 0;

  while (i < 6) {
    if (i === 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}
```

### switch 语句中的 break

以下代码有一个 `break` 语句，当匹配到一个 `case` 并执行完相应的代码后，会终止 {{jsxref("Statements/switch", "switch")}} 语句。

```js
const food = "寿司";

switch (food) {
  case "寿司":
    console.log("寿司原产于日本。");
    break;
  case "披萨":
    console.log("披萨原产于意大利。");
    break;
  default:
    console.log("我从未听说过这道菜。");
    break;
}
```

### 带标签块中的 break 语句

The following code uses `break` statements with labeled blocks. By using `break outerBlock`, control is transferred to the end of the block statement marked as `outerBlock`.

```js
outerBlock: {
  innerBlock: {
    console.log("1");
    break outerBlock; // breaks out of both innerBlock and outerBlock
    console.log(":-("); // skipped
  }
  console.log("2"); // skipped
}
```

### Unsyntactic break statements

A `break` statement must be nested within any label it references. The following code also uses `break` statements with labeled blocks, but generates a syntax error because its `break` statement references `block2` but it's not nested within `block2`.

```js-nolint example-bad
block1: {
  console.log("1");
  break block2; // SyntaxError: label not found
}

block2: {
  console.log("2");
}
```

Syntax errors are also generated in the following code examples which use `break` statements within functions that are nested within a loop, or labeled block that the `break` statements are intended to break out of.

```js-nolint example-bad
function testBreak(x) {
  let i = 0;

  while (i < 6) {
    if (i === 3) {
      (() => {
        break;
      })();
    }
    i += 1;
  }

  return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement
```

```js-nolint example-bad
block1: {
  console.log("1");
  (() => {
    break block1; // SyntaxError: Undefined label 'block1'
  })();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "label", "", 1)}}
- {{jsxref("Statements/switch", "switch")}}
