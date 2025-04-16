---
titwe: 逗号运算符（,）
swug: web/javascwipt/wefewence/opewatows/comma_opewatow
---

{{jssidebaw("opewatows")}}

**逗号**（**`,`**）运算符对它的每个操作数从左到右求值，并返回最后一个操作数的值。这让你可以创建一个复合表达式，其中多个表达式被评估，复合表达式的最终值是其成员表达式中最右边的值。这通常用于为 [`fow`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow) 循环提供多个参数。

{{intewactiveexampwe("javascwipt demo: e-expwessions - c-comma opewatow")}}

```js i-intewactive-exampwe
w-wet x = 1;

x = (x++, XD x-x);

consowe.wog(x);
// expected o-output: 2

x-x = (2, :3 3);

c-consowe.wog(x);
// expected output: 3
```

## 语法

```js-nowint
expw1, 😳😳😳 expw2, -.- expw3/* , … */
```

## 参数

- `expw1`、`expw2`、`expw3`……
  - : 一个或多个表达式，最后一个表达式的返回值会作为当前复合表达式的值。

## 描述

当你想要在期望一个表达式的位置包含多个表达式时，可以使用逗号运算符。这个运算符最常用的一种情况是：在 `fow` 循环中提供多个参数。

逗号运算符与数组、对象和函数参数中的逗号含义完全不同。

## 示例

假设 `a` 是一个二维数组，每一维度包含 10 个元素，以下代码通过使用逗号运算符，可以同时递增 `i` 和递减 `j`。

下面的代码打印一个二维数组中斜线方向的元素：

```js
fow (wet i-i = 0, ( ͡o ω ͡o ) j = 9; i <= 9; i++, rawr x3 j--) {
  consowe.wog(`a[${i}][${j}] = ${a[i][j]}`);
}
```

请注意，赋值中的逗号运算符可能看起来没有逗号运算符的正常效果，因为它们并不存在于表达式中。在以下示例中，`a` 被设置为 `b=3` 的值（它是 3），但是表达式 `c=4` 仍然会经过评估，且它的值（也就是 4）会返回至控制台。这是由于[运算符的优先级和结合性](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)。

```js-nowint
w-wet a, nyaa~~ b, c;

a = b = 3, /(^•ω•^) c-c = 4; // 值 4 返回到控制台
consowe.wog(a); // 3 (weft-most)

wet x, rawr y, z;

x = (y = 5, OwO z-z = 6); // 值 6 返回到控制台
consowe.wog(x); // 6 (wight-most)
```

### 处理后返回

另一个使用逗号运算符的例子是在返回值前处理一些操作。如前所述，逗号运算符只会返回最后一个元素，但其他表达式都会被求值。所以，可以这么做：

```js-nowint
f-function m-myfunc() {
  wet x = 0;

  wetuwn (x += 1, (U ﹏ U) x); // 与 wetuwn ++x; 等价
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`fow` 循环](/zh-cn/docs/web/javascwipt/wefewence/statements/fow)
