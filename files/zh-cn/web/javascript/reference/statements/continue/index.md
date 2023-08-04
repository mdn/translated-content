---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
---

{{jsSidebar("Statements")}}

**continue 声明**终止当前循环或标记循环的当前迭代中的语句执行，并在下一次迭代时继续执行循环。

{{EmbedInteractiveExample("pages/js/statement-continue.html")}}

## 语法

```plain
continue [ label ];
```

- `label`
  - : 标识标号关联的语句

## 描述

与 {{jsxref("Statements/break", "break")}} 语句的区别在于，continue 并不会终止循环的迭代，而是：

- 在 {{jsxref("Statements/while", "while")}} 循环中，控制流跳转回条件判断；
- 在 {{jsxref("Statements/for", "for")}} 循环中，控制流跳转到更新语句。

`continue` 语句可以包含一个可选的标号以控制程序跳转到指定循环的下一次迭代，而非当前循环。此时要求 `continue` 语句在对应的循环内部。

## 示例

### 在 `while` 语句中使用 `continue`

下述例子展示了一个在`i` 为 3 时执行`continue` 语句的 {{jsxref("Statements/while", "while")}} 循环。因此，`n` 的值在几次迭代后分别为 1, 3, 7 和 12 ．

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

### 使用带 label 的 continue

在下面的例子中，被标记为 `checkiandj` 的语句包含一个被标记为 `checkj` 的语句。当遇到`continue` 语句时，程序回到 `checkj` 语句的开始继续执行。每次遇到 `continue` 时，再次执行 `checkj` ，直到条件判断返回 false。之后完成 `checkiandj` 语句剩下的部分。

但如果 `continue` 的标号被改为 `checkiandj` ，那程序将会从 `checkiandj` 语句的开始继续运行。

参考 {{jsxref("Statements/label", "label")}} 。

```js
var i = 0,
  j = 8;

checkiandj: while (i < 4) {
  console.log("i: " + i);
  i += 1;

  checkj: while (j > 4) {
    console.log("j: " + j);
    j -= 1;
    if (j % 2 == 0) continue checkj;
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}
```

输出：

```js
"i: 0";

// start checkj
"j: 8";
"7 is odd.";
"j: 7";
"j: 6";
"5 is odd.";
"j: 5";
// end checkj

"i = 1";
"j = 4";

"i: 1";
"i = 2";
"j = 4";

"i: 2";
"i = 3";
"j = 4";

"i: 3";
"i = 4";
"j = 4";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/label", "label")}}
