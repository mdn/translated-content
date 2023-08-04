---
title: break
slug: Web/JavaScript/Reference/Statements/break
---

{{jsSidebar("Statements")}}

**break 语句**中止当前循环，{{jsxref("Statements/switch", "switch")}}语句或{{jsxref("Statements/label", "label")}} 语句，并把程序控制流转到紧接着被中止语句后面的语句。

## 语法

```plain
break [label];
```

- `label` {{optional_inline}}
  - : 与语句标签相关联的标识符。如果 break 语句不在一个循环或 {{jsxref("Statements/switch", "switch")}} 语句中，则该项是必须的。

## 描述

`break`语句包含一个可选的标签，可允许程序摆脱一个被标记的语句。`break`语句需要内嵌在引用的标签中。被标记的语句可以是任何 {{jsxref("Statements/block", "块")}}语句；不一定是循环语句。

break 语句不能在 function 函数体中直接使用，break 语句应嵌套在要中断的当前循环、switch 或 label 语句中。

## 示例

### break in while loop

下面的函数里有个 `break` 语句，当 `i` 为 3 时，会中止 {{jsxref("Statements/while", "while")}} 循环，然后返回 3 \* `x` 的值。

```js
function testBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}
```

### break in switch statements

在下面的代码中， `break` 使用在 {{jsxref("Statements/switch", "switch")}} 语句中，当遇到匹配到 case 后，就会执行相应的代码并中断循环体。

```plain
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

下面的代码中一起使用 `break` 语句和被标记的块语句。一个 `break` 语句必须内嵌在它引用的标记中。注意，`inner_block` 内嵌在 `outer_block` 中。

```js
outer_block: {
  inner_block: {
    console.log("1");
    break outer_block; // breaks out of both inner_block and outer_block
    console.log(":-("); // skipped
  }

  console.log("2"); // skipped
}
```

### break in labeled blocks that throw

下面的代码同样使用了 `break` 语句和被标记的块语句，但是产生了一个语法错误，因为它的 `break` 语句在 `block_1` 中，但是引用了 `block_2`。`break` 语句必须内嵌在它引用的标签中。

```js
block_1:{
  console.log ('1');
  break block_2;            // SyntaxError: label not found
}

block_2:{
  console.log ('2');
}
```

### break within functions

在下面的代码同样会产生 SyntaxError，因为它并没被正确的使用在循环、switch 或 label 语句中。

```plain
function testBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      (function() {
        break;
      })();
    }
    i += 1;
  }

return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement
```

```plain
block_1: {
  console.log('1');
  ( function() {
    break block_1; // SyntaxError: Undefined label 'block_1'
  })();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "label")}}
- {{jsxref("Statements/switch", "switch")}}
