---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
---

{{jsSidebar("Statements")}}

**`switch` 语句**评估一个[表达式](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#表达式)，将表达式的值与`case`子句匹配，并执行与该情况相关联的[语句](/zh-CN/docs/Web/JavaScript/Reference/Statements)。

{{EmbedInteractiveExample("pages/js/statement-switch.html")}}

## 语法

```js
switch (expression) {
  case value1:
    // 当 expression 的结果与 value1 匹配时，执行此处语句
    [break;]
  case value2:
    // 当 expression 的结果与 value2 匹配时，执行此处语句
    [break;]
  ...
  case valueN:
    // 当 expression 的结果与 valueN 匹配时，执行此处语句
    [break;]
  [default:
    // 如果 expression 与上面的 value 值都不匹配，执行此处语句
    [break;]]
}
```

- `expression`
  - : 一个用来与 case 子语句匹配的表达式。
- `case valueN` {{optional_inline}}
  - : 用于匹配 `expression` 的 `case` 子句。如果 `expression` 与给定的 `valueN` 相匹配，则执行该 case 子句中的语句直到该 `switch` 语句结束或遇到一个 `break` 。
- `default` {{optional_inline}}
  - : 一个 `default` 子句；如果给定，这条子句会在 `expression` 的值与任一 `case` 语句均不匹配时执行。

## 描述

一个 switch 语句首先会计算其 expression。然后，它将从第一个 case 子句开始直到寻找到一个其表达式值与所输入的 expression 的值所相等的子句（使用 [严格运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)，`===`）并将控制权转给该子句，执行相关语句。（如果多个 case 与提供的值匹配，则选择匹配的第一个 case，即使这些 case 彼此间并不相等。）

如果没有 `case` 子句相匹配，程序则会寻找那个可选的 `default` 子句，如果找到了，将控制权交给它，执行相关语句。若没有 `default` 子句，程序将继续执行直到 `switch` 结束。按照惯例，`default` 子句是最后一个子句，不过也不需要这样做。

可选的 [`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break) 语句确保程序立即从相关的 case 子句中跳出 switch 并接着执行 switch 之后的语句。若 `break` 被省略，程序会继续执行 `switch` 语句中的下一条语句。

## 示例

### 使用 `switch`

下面的例子中，如果 `expr` 计算为 "Bananas"，程序就会匹配值为 "Bananas" 的 case 然后执行相关语句。当遇到 `break` 时，程序就跳出 `switch` 然后执行 `switch` 后的语句。若 `break` 被省略，值为 "Cherries" 的 case 中的语句就也将被执行。

```js
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}

console.log("Is there anything else you'd like?");
```

### 如果忘记 break 会怎么样？

如果你忘记添加 break，那么代码将会从值所匹配的 case 语句开始运行，然后持续执行下一个 case 语句而不论值是否匹配。例子如下：

```js
var foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // foo 的值为 0 所以匹配这里所以这一块会运行
    console.log(0);
  // 注意：那个没写的 break 原本在这儿
  case 1: // 'case 0:' 里没有 break 语句所以这个 case 也会运行
    console.log(1);
    break; // 遇到了 break，所以不会再继续进入 'case 2:' 了
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
```

### 我能把 default 放到 case 之间吗？

可以啊！JavaScript 会在它找不到匹配项时跳回到那个 default：

```js
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // 遇到 break，所以不会继续进入 'default:'
  default:
    console.log("default");
  // 掉到下面
  case 1:
    console.log("1");
}
```

即使你把 default 放到其他 case 之上，它仍有效。

### 使用多准则 case 的方法

这个技术来源于此：

[Switch statement multiple cases in JavaScript (Stack Overflow)](http://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript)

#### 多 case - 单一操作

这种方法利用这样一个事实：如果 case 语句之下没有 break，它将继续执行下一个 case 语句，而不管 case 是否符合条件。请看“如果忘记 break 会怎么样？”部分。

这是一个单操作顺序的 switch 语句，其中四个不同值的执行结果完全一样。

```js
var Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal will go on Noah's Ark.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal will not.");
}
```

#### 多 case - 关联操作

这是一个关联操作顺序的 switch 语句，其中，根据所输入的整数，你会得到不同的输出。这表示它将以你放置 case 语句的顺序遍历，并且不必是数字顺序的。在 JavaScript 中，你甚至可以将字符串定义到这些 case 语句里。

```js
var foo = 1;
var output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
```

这个例子的输出：

| Value                                | Log text                          |
| ------------------------------------ | --------------------------------- |
| foo is NaN or not 1, 2, 3, 4, 5 or 0 | Please pick a number from 0 to 5! |
| 0                                    | Output: So What Is Your Name?     |
| 1                                    | Output: What Is Your Name?        |
| 2                                    | Output: Your Name?                |
| 3                                    | Output: Name?                     |
| 4                                    | Output: ?                         |
| 5                                    | Output: !                         |

### `switch` 语句内的块级作用域

随着绝大多数现代浏览器已支持 ECMAScript 2015 (ES6)，在某些场景下您可能需要使用 [let](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 和 [const](/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 语句，以在块级作用域内声明变量。

以这段代码为例：

```js
const action = "say_hello";
switch (action) {
  case "say_hello":
    let message = "hello";
    console.log("0 ~5");
    break;
  case "say_hi":
    let message = "hi";
  case 6:
    console.log("6");
    break;
  default:
    console.log("Empty action received.");
    break;
}
```

这个示例会导致意想不到的错误 `Uncaught SyntaxError: Identifier 'message' has already been declared`.

这是因为第一个 `let message = 'hello';` 与第二个 `let message = 'hi';` 语句产生了冲突，虽然他们处于各自分隔的 case 语句中，即 `case 'say_hello':` 和 `case 'say_hi':`。导致这一问题的根本原因在于两个 `let` 语句处于同一个块级作用域，所以它们被认为是同一个变量名的重复声明。

通过把 case 语句包装到括号里面，我们就可以轻松解决这个问题。

```js
const action = "say_hello";
switch (action) {
  case "say_hello": {
    // added brackets
    let message = "hello";
    console.log(message);
    break;
  } // added brackets
  case "say_hi": {
    // added brackets
    let message = "hi";
    console.log(message);
    break;
  } // added brackets
  default: {
    // added brackets
    console.log("Empty action received.");
    break;
  } // added brackets
}
```

此时，这段代码就会在控制台输出 `hello`，不会再有任何报错。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)
