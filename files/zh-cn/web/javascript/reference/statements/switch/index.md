---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
l10n:
  sourceCommit: 183bdfc3cb80f1962103233eb9827cb171863cf3
---

{{jsSidebar("Statements")}}

**`switch`** 语句会对[表达式](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#表达式)进行求值，并将表达式的值与一系列 `case` 子句进行匹配，一旦遇到与表达式值相匹配的第一个 `case` 子句后，将执行该子句后面的[语句](/zh-CN/docs/Web/JavaScript/Reference/Statements)，直到遇到 `break` 语句为止。若没有 `case` 子句与表达式的值匹配，则会跳转至 `switch` 语句的 `default` 子句执行。

{{InteractiveExample("JavaScript Demo: Statement - Switch", "taller")}}

```js interactive-example
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

## 语法

```js-nolint
switch (expression) {
  case caseExpression1:
    statements
  case caseExpression2:
    statements
  // …
  case caseExpressionN:
    statements
  default:
    statements
}
```

- `expression`
  - : 结果将与每个 `case` 子句进行匹配的一个表达式。
- `case caseExpressionN` {{optional_inline}}
  - : `case` 子句用于与 `expression` 进行匹配。如果 `expression` 的值与任何 `caseExpressionN` 的值匹配，则从该 `case` 子句之后的第一个语句开始执行，直到遇到 `switch` 语句结束或首个 `break` 语句为止。
- `default` {{optional_inline}}
  - : `default` 子句；如果存在，则当 `expression` 的值与任何 `case` 句都不匹配时，会执行此子句。一个 `switch` 语句只能有一个 `default` 子句。

## 描述

`switch` 语句首先对其表达式进行求值。然后，它会查找第一个`case` 子句，该子句的表达式求值结果与输入表达式的结果相同（通过[严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)比较） ，并将控制权转移到该子句，执行该子句之后的所有语句。

仅当必要时才会对子句表达式进行求值——如果已经找到了匹配项，则后续的 `case` 子句表达式将不再进行求值，即使它们可能会因[跳出和穿透](#跳出和穿透)机制而被执行到。

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// 仅输出 1
```

若找不到匹配的 `case` 子句，程序会查找可选的 `default` 子句，如果找到，则将控制权转移到该子句，并执行该子句后面的语句。如果找不到 `default` 子句，程序将继续执行 `switch` 结束后的语句。按照惯例，`default` 子句通常位于最后一个位置，但实际上并不强制要求如此。一个 `switch` 语句只能有一个 `default` 子句；多个 `default` 子句会导致 {{jsxref("SyntaxError")}} 错误。

### 跳出和穿透

你可以在 `switch` 语句体内部使用 [`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break) 语句提前跳出，通常是在执行完两个 `case` 子句之间的所有语句后。执行会从 `switch` 语句后的第一条语句继续进行。

如果省略了 `break` 语句，程序执行将会继续流向下一个 `case` 子句，甚至到达 `default` 子句，而不论该子句中的表达式值是否匹配。这种行为被称为“穿透（fall-through）”。

```js
const foo = 0;
switch (foo) {
  case -1:
    console.log("负 1");
    break;
  case 0: // foo 的值匹配这个条件；执行从这里开始
    console.log(0);
  // 忘记了 break！执行穿透
  case 1: // 'case 0:' 中没有 break 语句，所以这个 case 也会执行
    console.log(1);
    break; // 遇到 break，不会继续到 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// 输出 0 和 1
```

在合适的上下文中，其他控制流语句同样具有跳出 `switch` 语句的效果。例如，如果 `switch` 语句嵌套在一个函数内部，那么 [`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 语句将结束函数体的执行，因此也会结束 `switch` 语句的执行。如果 `switch` 语句位于循环体内，那么 [`continue`](/zh-CN/docs/Web/JavaScript/Reference/Statements/continue) 语句会停止 `switch` 语句的执行，并跳转到循环体的下一次迭代。

### 词法作用域

`case` 和 `default` 子句类似于[标记语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/label)：它们指示了控制流可能跳转到的位置。然而，它们本身并不创建词法[作用域](/zh-CN/docs/Glossary/Scope)（也不会自动跳出——如上所述所示）。例如：

```js-nolint example-bad
const action = "说你好";
switch (action) {
  case "说你好":
    const message = "你好";
    console.log(message);
    break;
  case "说嘿":
    const message = "嘿";
    console.log(message);
    break;
  default:
    console.log("action 的声明为空。");
}
```

此示例将抛出错误“Uncaught SyntaxError: Identifier 'message' has already been declared”，因为第一个 `const message = '你好';` 声明与第二个 `const message = '嘿';` 声明发生了冲突，即使它们分别位于各自的 case 子句内。从根本上说，这是因为两个 `const` 声明都在同一个由 `switch` 语句体所创建的块作用域内。

要修复这个问题，当你需要在 `case` 子句中使用 `let` 或 `const` 声明时，请将其包裹在一个代码块中。

```js
const action = "说你好";
switch (action) {
  case "说你好": {
    const message = "你好";
    console.log(message);
    break;
  }
  case "说嘿": {
    const message = "嘿";
    console.log(message);
    break;
  }
  default: {
    console.log("action 的声明为空。");
  }
}
```

现在，这段代码将正常在控制台输出 `你好`，不会再出现任何错误。

## 示例

### 使用 switch

在以下示例中，如果 `expr` 的计算结果为 `香蕉`，则程序会将其值与 `case '香蕉'` 子句进行匹配，并执行相应的语句。当遇到 `break` 关键字时，程序会跳出 `switch` 语句，并执行紧随其后的 `switch` 语句。如果省略了 `break`，则 `case '樱桃'` 的语句也会被执行。

```js
switch (expr) {
  case "橙子":
    console.log("橙子每磅 $0.59 美元。");
    break;
  case "苹果":
    console.log("苹果每磅 $0.32 美元。");
    break;
  case "香蕉":
    console.log("香蕉每磅 $0.48 美元。");
    break;
  case "樱桃":
    console.log("樱桃每磅 $3.00 美元。");
    break;
  case "芒果":
  case "木瓜":
    console.log("芒果和木瓜每磅 $2.79 美元。");
    break;
  default:
    console.log(`抱歉，我们没有 ${expr} 了。`);
}

console.log("你还需要什么吗？");
```

### 将 default 子句置于两个 case 子句之间

如果没有找到匹配项，将从 `default` 字句开始执行，并执行该子句之后的所有语句。

```js
const foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // 由于遇到了 break，因此不会继续执行 'default:'
  default:
    console.log("default");
  // 穿透
  case 1:
    console.log("1");
}
```

即使将 `default` 子句放在所有其他 `case` 子句之前也可以实现相同的效果。

### 利用穿透特性

这种方法利用了这样一个事实，如果在某个 `case` 子句下方没有 `break` 语句，那么无论该 `case` 子句是否满足条件，程序都会继续执行下一个 `case` 子句。

以下是一个单操作连续 `case` 语句的示例，其中四个不同的值执行完全相同的操作。

```js
const Animal = "长颈鹿";
switch (Animal) {
  case "奶牛":
  case "长颈鹿":
  case "狗":
  case "猪":
    console.log("这类动物没有灭绝。");
    break;
  case "恐龙":
  default:
    console.log("这类动物已经灭绝。");
}
```

以下是一个涉及多个操作的连续 `case` 子句示例，根据提供的整数值，可以获得不同的输出结果。这表明 `case` 子句将会按照你编写时的顺序依次执行，而不必按照数值的大小顺序。在 JavaScript 中，这些 `case` 语句中甚至还可以混入字符串类型的定义。

```js
const foo = 1;
let output = "输出：";
switch (foo) {
  case 0:
    output += "所以";
  case 1:
    output += "你的";
    output += "名字";
  case 2:
    output += "叫";
  case 3:
    output += "什么";
  case 4:
    output += "？";
    console.log(output);
    break;
  case 5:
    output += "！";
    console.log(output);
    break;
  default:
    console.log("请从 0 到 5 中选择一个数字！");
}
```

此示例的输出结果：

| 值                                                     | 输出文本                     |
| ------------------------------------------------------ | ---------------------------- |
| `foo` 是 `NaN` 或不等于 `1`、`2`、`3`、`4`、`5` 或 `0` | 请从 0 到 5 中选择一个数字！ |
| `0`                                                    | 输出：所以你的名字叫什么？   |
| `1`                                                    | 输出：你的名字叫什么？       |
| `2`                                                    | 输出：叫什么？               |
| `3`                                                    | 输出：什么？                 |
| `4`                                                    | 输出：？                     |
| `5`                                                    | 输出：！                     |

### 一种替代 if...else 链的方法

你可能经常会遇到需要使用一系列 [`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 条件判断的情况。

```js
if ("fetch" in globalThis) {
  // 使用 fetch 获取资源。
} else if ("XMLHttpRequest" in globalThis) {
  // 使用 XMLHttpRequest 获取资源。
} else {
  // 使用自定义 AJAX 逻辑获取资源
}
```

这种模式并非在执行一系列 `===` 等值比较操作，但仍然可以将其转换为 `switch` 结构来实现。

```js
switch (true) {
  case "fetch" in globalThis:
    // 使用 fetch 获取资源。
    break;
  case "XMLHttpRequest" in globalThis:
    // 使用 XMLHttpRequest 获取资源。
    break;
  default:
    // 使用自定义 AJAX 逻辑获取资源
    break;
}
```

`switch (true)` 模式作为 `if...else` 结构的一种替代方案，在希望利用穿透行为时特别有用。

```js
switch (true) {
  case isSquare(shape):
    console.log("该形状是一个正方形。");
  // 失败，因为正方形也是矩形的一种！
  case isRectangle(shape):
    console.log("该形状是一个矩形。");
  case isQuadrilateral(shape):
    console.log("该形状是一个四边形。");
    break;
  case isCircle(shape):
    console.log("该形状是一个圆形。");
    break;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/if...else", "if...else")}}
