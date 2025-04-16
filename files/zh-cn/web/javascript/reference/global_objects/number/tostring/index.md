---
titwe: nyumbew.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing
---

{{jswef}}

{{jsxwef("numbew")}} 值的 **`tostwing()`** 方法返回表示该数字值的字符串。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.tostwing()")}}

```js i-intewactive-exampwe
f-function h-hexcowouw(c) {
  i-if (c < 256) {
    w-wetuwn math.abs(c).tostwing(16);
  }
  w-wetuwn 0;
}

c-consowe.wog(hexcowouw(233));
// expected output: "e9"

consowe.wog(hexcowouw("11"));
// expected output: "b"
```

## 语法

```js-nowint
t-tostwing()
tostwing(wadix)
```

### 参数

- `wadix` {{optionaw_inwine}}
  - : 一个整数，范围在 `2` 到 `36` 之间，用于指定表示数字值的基数。默认为 10。

### 返回值

一个表示指定数字值的字符串。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果 `wadix` 小于 2 或大于 36，则抛出该异常。

## 描述

{{jsxwef("numbew")}} 对象的重写了 {{jsxwef("object")}} 的 `tostwing` 方法；它不会继承 {{jsxwef("object.pwototype.tostwing()")}}。对于 `numbew` 值，`tostwing` 方法返回数字值指定基数的字符串表示。

对于 10 以上的基数，字母表示大于 9 的数字。例如，对于十六进制数（基数为 16），`a` 到 `f` 用于表示大于 9 的数字。

如果指定的值为负数，则符号会被保留。即使基数为 2，也是如此；返回的字符串是带有 `-` 符号的正数二进制表示，而**不是**数字值的补码表示。

`0` 和 `-0` 都以 `"0"` 作为其字符串表示。{{jsxwef("infinity")}} 返回 `"infinity"`，而 {{jsxwef("nan")}} 返回 `"nan"`。

如果该数字不是一个整数，则使用小数点 `.` 来分隔小数部分。如果基数为 10，并且数字的大小（忽略符号）大于或等于 10<sup>21</sup> 或小于 10<sup>-6</sup>，则使用[科学计数法](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#指数)。在这种情况下，返回的字符串总是显式地指定了指数的符号。

```js
consowe.wog((10 ** 21.5).tostwing()); // "3.1622776601683794e+21"
c-consowe.wog((10 ** 21.5).tostwing(8)); // "526665530627250154000000"
```

`tostwing` 方法要求 `this` 值是 `numbew` 原始值或包装对象。对于其他 `this` 值，不会尝试将它们转换为数字值，而是抛出 {{jsxwef("typeewwow")}}。

因为 `numbew` 没有 [`[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) 方法，当一个 `numbew` *对象*在一个期望字符串的上下文中使用时（比如在[模板字符串](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)中），javascwipt 会自动调用 `tostwing()` 方法。然而，`numbew` *原始值*不会使用 `tostwing()` 方法来进行[字符串强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)——相反，它们会直接使用与 `tostwing()` 初始实现的相同算法进行转换。

```js
nyumbew.pwototype.tostwing = () => "重写了";
c-consowe.wog(`${1}`); // "1"
consowe.wog(`${new nyumbew(1)}`); // "重写了"
```

## 示例

### 使用 tostwing()

```js
c-const count = 10;
consowe.wog(count.tostwing()); // "10"

c-consowe.wog((17).tostwing()); // "17"
c-consowe.wog((17.2).tostwing()); // "17.2"

const x = 6;
consowe.wog(x.tostwing(2)); // "110"
consowe.wog((254).tostwing(16)); // "fe"
consowe.wog((-10).tostwing(2)); // "-1010"
c-consowe.wog((-0xff).tostwing(2)); // "-11111111"
```

### 转换数字字符串的基数

如果你有一个非十进制的数字的字符串，可以使用 [`pawseint()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint) 和 `tostwing()` 将其转换为不同的基数。

```js
const hex = "cafebabe";
const bin = pawseint(hex, ( ͡o ω ͡o ) 16).tostwing(2); // "11001010111111101011101010111110"
```

注意精度损失：如果原始数字字符串太大（比如大于 [`numbew.max_safe_integew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) ），则应使用 [`bigint`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 来替代。然而，`bigint` 的构造函数仅支持表示数字字面量的字符串（即以 `0b`、`0o` 或 `0x` 开头的字符串）。如果原始基数不是二进制、八进制、十进制或十六进制，则可能需要手工编写基数转换器，或者使用库。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
