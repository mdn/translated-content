---
title: 加法赋值 (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
---
{{jsSidebar("Operators")}}

加法赋值操作符 (`+=`) 将右操作数的值添加到变量，并将结果分配给该变量。两个操作数的类型确定加法赋值运算符的行为。加法或串联是可能的。

{{EmbedInteractiveExample("pages/js/expressions-addition-assignment.html")}}

## Syntax

```plain
Operator: x += y
Meaning:  x  = x + y
```

## Examples

### Using addition assignment

```js
// Assuming the following variables
//  foo = 'foo'
//  bar = 5
//  baz = true

// Number + Number -> addition
bar += 2 // 7

// Boolean + Number -> addition
baz += 1 // 2

// Boolean + Boolean -> addition
baz += false // 1

// Number + String -> concatenation
bar += 'foo' // "5foo"

// String + Boolean -> concatenation
foo += false // "foofalse"

// String + String -> concatenation
foo += 'bar' // "foobar"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment)
- [Addition operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
