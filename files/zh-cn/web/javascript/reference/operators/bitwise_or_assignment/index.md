---
title: Bitwise OR assignment (|=)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
---

{{jsSidebar("Operators")}}

The bitwise OR assignment operator (`|=`) uses the binary representation of both operands, does a bitwise OR operation on them and assigns the result to the variable.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or-assignment.html")}}

## 语法

```plain
Operator: x |= y
Meaning:  x  = x | y
```

## Examples

### Using bitwise OR assignment

```js
let a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------

// 7: 00000000000000000000000000000111
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment)
- [Bitwise OR operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- [Logical OR assignment (`||=`)](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
