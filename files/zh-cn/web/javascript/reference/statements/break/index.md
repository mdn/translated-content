---
title: break 语句
slug: Web/JavaScript/Reference/Statements/break
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

**`break`** 语句中止当前循环或终止 {{jsxref("Statements/switch", "switch")}} 语句，并将程序控制权转移到终止语句后的语句。当在使用[标记语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/label)内使用时，它也可以用来跳过标记语句。

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## 语法

```js-nolint
break;
break label;
```

- `label` {{optional_inline}}
  - : 与要中断到的语句的标签关联的标识符。如果 `break` 语句未嵌套在循环或 {{jsxref("Statements/switch", "switch")}} 中，则需要标签标识符。

## 描述

遇到 `break;` 时，程序会跳出最内层的 `switch` 或 [循环](/zh-CN/docs/Web/JavaScript/Reference/Statements#iterations)语句，并继续执行其后的下一条语句。

遇到 `break label;` 时，程序会跳出标记为 `label` 的语句，并继续执行其后的下一条语句。`break` 语句需要嵌套在引用的标签内。标记语句可以是任何语句（通常是 {{jsxref("Statements/block", "block", "", 1)}} 语句），它不一定是另一个循环语句。

即使函数或类进一步嵌套在循环中， `break` statement, with or without a following label, cannot be used at the top level of a script, module, function's body, or [static initialization block](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), even when the function or class is further contained within a loop.

## 示例

### 插入 while 循环

The following function has a `break` statement that terminates the {{jsxref("Statements/while", "while")}} loop when `i` is 3, and then returns the value `3 * x`.

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

### break in switch statements

The following code has a `break` statement that terminates the {{jsxref("Statements/switch", "switch")}} statement when a case is matched and the corresponding code has run.

```js
const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}
```

### break in labeled blocks

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
