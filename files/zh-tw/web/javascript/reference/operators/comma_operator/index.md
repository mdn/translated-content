---
title: 逗號運算子
slug: Web/JavaScript/Reference/Operators/Comma_operator
---

{{jsSidebar("Operators")}}

The **comma operator** evaluates each of its operands (from left to right) and returns the value of the last operand.

## 語法

```plain
expr1, expr2, expr3...
```

## 參數

- `expr1`, `expr2, expr3...`
  - : Any expressions.

## 描述

You can use the comma operator when you want to include multiple expressions in a location that requires a single expression. The most common usage of this operator is to supply multiple parameters in a `for` loop.

## 範例

If `a` is a 2-dimensional array with 10 elements on each side, the following code uses the comma operator to increment two variables at once.

The following code prints the values of the diagonal elements in the array:

```js
for (var i = 0, j = 9; i <= 9; i++, j--)
  console.log("a[" + i + "][" + j + "] = " + a[i][j]);
```

Note that the comma in assignments such as the `var` statement may appear not to have the normal effect of comma operators because they don't exist within an expression. In the following example, `a` is set to the value of `b = 3` (which is 3), but the `c = 4` expression still evaluates and its result returned to console (i.e., 4). This is due to [operator precedence and associativity](/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_Precedence).

```js-nolint
let a, b, c;

a = b = 3, c = 4; // Returns 4
console.log(a); // 3 (left-most)

let x, y, z;

x = (y = 5, z = 6); // Returns 6
console.log(x); // 6 (right-most)
```

The comma operator is fully different from the comma within arrays, objects, and function arguments and parameters.

### Processing and then returning

Another example that one could make with comma operator is processing before returning. As stated, only the last element will be returned but all others are going to be evaluated as well. So, one could do:

```js-nolint
function myFunc() {
  let x = 0;

  return (x += 1, x); // the same as return ++x;
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [for loop](/zh-TW/docs/Web/JavaScript/Reference/Statements/for)
