---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
---

{{jsSidebar("Statements")}}

**`do...while` 语句**创建一个执行指定语句的循环，直到`condition`值为 false。在执行`statement` 后检测`condition`，所以指定的`statement`至少执行一次。

## 语法

```plain
do
   statement
while (condition);
```

- `statement`
  - : 执行至少一次的语句，并在每次 `condition` 值为真时重新执行。想执行多行语句，可使用{{jsxref("Statements/block", "block")}}语句（`{ ... }`）包裹这些语句。
- `condition`
  - : 循环中每次都会计算的表达式。如果 `condition` 值为真， `statement` 会再次执行。当 `condition` 值为假，则跳到`do...while`之后的语句。

## 示例

### 使用 `do...while`

下面的例子中，`do...while` 循环至少迭代一次，并且继续迭代直到 `i`不再小于 5 时结束。

### HTML 内容

```html
<div id="example"></div>
```

### JavaScript 内容

```js
var result = "";
var i = 0;
do {
  i += 1;
  result += i + " ";
} while (i < 5);
document.getElementById("example").innerHTML = result;
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
