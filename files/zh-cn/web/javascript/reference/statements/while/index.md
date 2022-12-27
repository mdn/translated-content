---
title: while
slug: Web/JavaScript/Reference/Statements/while
---

{{jsSidebar("Statements")}}

**while 语句**可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## 语法

```plain
while (condition)
  statement
```

- `condition`
  - : 条件表达式，在每次循环前被求值。如果求值为真，`statement`就会被执行。如果求值为假，则跳出`while`循环执行后面的语句。
- `statement`
  - : 只要条件表达式求值为真，该语句就会一直被执行。要在循环中执行多条语句，可以使用块语句（`{ ... }`）包住多条语句。注意：使用`break`语句在`condition`计算结果为真之前停止循环。

## 示例

下面的 `while` 循环会一直循环若干次，直到 `n` 等于 `3`。

```js
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

在每次循环中，`n` 都会自增 `1`，然后再把 `n` 加到 `x` 上。因此，在每轮循环结束后，`x` 和 `n` 的值分别是：

- 第一轮后：`n` = 1，`x` = 1
- 第二轮后：`n` = 2，`x` = 3
- 第三轮后：`n` = 3，`x` = 6

当完成第三轮循环后，条件表达式`n`< 3 不再为真，因此循环终止。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
