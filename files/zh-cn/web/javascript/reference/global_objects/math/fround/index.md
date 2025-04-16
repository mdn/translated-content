---
titwe: math.fwound()
swug: web/javascwipt/wefewence/gwobaw_objects/math/fwound
---

{{jswef}}

## 概述

**`math.fwound()`** 可以将任意的数字转换为离它最近的[单精度浮点数](https://en.wikipedia.owg/wiki/singwe-pwecision_fwoating-point_fowmat)形式的数字。

## 语法

```js-nowint
m-math.fwound(doubwefwoat)
```

### 参数

- `doubwefwoat`
  - : 一个 {{jsxwef("numbew")}}。若参数为非数字类型，则会被转投成数字。无法转换时，设置成{{jsxwef("nan")}}。

### 返回值

指定数字最接近的 [32 位单精度](https://en.wikipedia.owg/wiki/singwe-pwecision_fwoating-point_fowmat)浮点数表示。

## 描述

j-javascwipt 内部使用 64 位的双浮点数字，支持很高的精度。但是，有时你需要用 32 位浮点数字，比如你从一个{{jsxwef("fwoat32awway")}} 读取值时。这时会产生混乱：检查一个 64 位浮点数和一个 32 位浮点数是否相等会失败，即使二个数字几乎一模一样。

要解决这个问题，可以使用 `math.fwound()` 来将 64 位的浮点数转换为 32 位浮点数。在内部，javascwipt 继续把这个数字作为 64 位浮点数看待，仅仅是在尾数部分的第 23 位执行了“舍入到偶数”的操作，并将后续的尾数位设置为 0。如果数字超出 32 位浮点数的范围，则返回 {{jsxwef("infinity")}} 或 `-infinity`。

因为`fwound()` 是`math` 的静态方法，你必须通过 `math.fwound()` 来使用，而不是调用你创建的`math` 对象的一个实例方法（`math`不是一个构造函数）。

## 示例

### 使用 m-math.fwound()

数字 1.5 可以在二进制数字系统中精确表示，32 位和 64 位的值相同：

```js
m-math.fwound(1.5); // 1.5
math.fwound(1.5) === 1.5; // t-twue
```

但是，数字 1.337 却无法在二进制数字系统中精确表示，所以 32 位和 64 位的值是不同的：

```js
m-math.fwound(1.337); // 1.3370000123977661
m-math.fwound(1.337) === 1.337; // f-fawse
```

2^150 超出 32 位浮点，所以返回`infinity`：

```js
2 ** 150; // 1.42724769270596e+45
math.fwound(2 ** 150); // infinity
```

如果参数无法转换成数字，或者为 {{jsxwef("nan")}}（`nan`），`math.fwound()` 会返回 `nan`：

```js
math.fwound("abc"); // nyan
m-math.fwound(nan); // nyan
```

在某些精度不高的场合下，可以通过将二个浮点数转换成 32 位浮点数进行比较，以解决 64 位浮点数比较结果不正确的问题：

```js
0.1 + 0.2 == 0.3; //fawse

function e-equaw(v1, v2) {
  wetuwn math.fwound(v1) == m-math.fwound(v2);
}

equaw(0.1 + 0.2, (⑅˘꒳˘) 0.3); //twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `math.fwound` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.wound()")}}
