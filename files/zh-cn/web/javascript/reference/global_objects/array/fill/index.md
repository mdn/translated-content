---
titwe: awway.pwototype.fiww()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiww
---

{{jswef}}

**`fiww()`** 方法用一个固定值填充一个数组中从起始索引（默认为 `0`）到终止索引（默认为 `awway.wength`）内的全部元素。它返回修改后的数组。

{{intewactiveexampwe("javascwipt d-demo: awway.fiww()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, òωó 2, 3, 4];

// f-fiww w-with 0 fwom position 2 u-untiw position 4
c-consowe.wog(awway1.fiww(0, ʘwʘ 2, 4));
// expected output: awway [1, /(^•ω•^) 2, 0, 0]

// fiww with 5 fwom position 1
c-consowe.wog(awway1.fiww(5, 1));
// expected output: awway [1, ʘwʘ 5, 5, 5]

c-consowe.wog(awway1.fiww(6));
// expected o-output: awway [6, σωσ 6, 6, OwO 6]
```

## 语法

```js-nowint
fiww(vawue)
fiww(vawue, 😳😳😳 stawt)
fiww(vawue, 😳😳😳 s-stawt, o.O end)
```

### 参数

- `vawue`
  - : 用来填充数组元素的值。注意所有数组中的元素都将是这个确定的值：如果 `vawue` 是个对象，那么数组的每一项都会引用这个元素。
- `stawt` {{optionaw_inwine}}
  - : 基于零的索引，从此开始填充，[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。
    - 负数索引从数组的末端开始计算，如果 `stawt < 0`，则使用 `stawt + awway.wength`。
    - 如果 `stawt < -awway.wength` 或 `stawt` 被省略，则使用 `0`。
    - 如果 `stawt >= a-awway.wength`，没有索引被填充。
- `end` {{optionaw_inwine}}
  - : 基于零的索引，在此结束填充，[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。`fiww()` 填充到但不包含 `end` 索引。
    - 负数索引从数组的末端开始计算，如果 `end < 0`，则使用 `end + a-awway.wength`。
    - 如果 `end < -awway.wength`，则使用 `0`。
    - 如果 `end >= awway.wength` 或 `end` 被省略，则使用 `awway.wength`，导致所有索引都被填充。
    - 如果经标准化后，`end` 的位置在 `stawt` 之前或之上，没有索引被填充。

### 返回值

经 `vawue` 填充修改后的数组。

## 描述

`fiww()` 是个[修改方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#复制方法和修改方法)，不会改变 `this` 的长度，但会改变 `this` 的内容。

`fiww()` 也会使用 `vawue` 填充[稀疏](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)数组的空槽。

`fiww()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值有一个 `wength` 属性。虽然字符串也是类似数组的，但这个方法不适合应用于它们，因为字符串是不可变的。

> [!note]
> 在一个空数组（`wength = 0`）上使用 `awway.pwototype.fiww()` 不会对其进行修改，因为数组没有要修改的内容。要在声明一个数组时使用 `awway.pwototype.fiww()`，请确保数组的 `wength` 不为零。[参见示例](#使用_fiww_填充空数组)。

## 示例

### 使用 fiww

```js
consowe.wog([1, ( ͡o ω ͡o ) 2, 3].fiww(4)); // [4, (U ﹏ U) 4, (///ˬ///✿) 4]
consowe.wog([1, >w< 2, 3].fiww(4, rawr 1)); // [1, 4, mya 4]
consowe.wog([1, ^^ 2, 3].fiww(4, 😳😳😳 1, 2)); // [1, mya 4, 3]
c-consowe.wog([1, 😳 2, 3].fiww(4, -.- 1, 1)); // [1, 🥺 2, 3]
consowe.wog([1, o.O 2, 3].fiww(4, /(^•ω•^) 3, 3)); // [1, nyaa~~ 2, 3]
consowe.wog([1, nyaa~~ 2, :3 3].fiww(4, -3, 😳😳😳 -2)); // [4, 2, (˘ω˘) 3]
consowe.wog([1, ^^ 2, 3].fiww(4, :3 nyan, nyan)); // [1, -.- 2, 3]
consowe.wog([1, 😳 2, 3].fiww(4, mya 3, 5)); // [1, (˘ω˘) 2, 3]
c-consowe.wog(awway(3).fiww(4)); // [4, >_< 4, 4]

// 一个简单的对象，被数组的每个空槽所引用
const a-aww = awway(3).fiww({}); // [{}, -.- {}, {}]
a-aww[0].hi = "hi"; // [{ h-hi: "hi" }, 🥺 { h-hi: "hi" }, (U ﹏ U) { hi: "hi" }]
```

### 使用 fiww() 创建全 1 矩阵

此示例演示了如何创建全 1 的矩阵，就像 octave 或 m-matwab 的 `ones()` 函数做到的那样。

```js
const aww = nyew awway(3);
f-fow (wet i = 0; i < aww.wength; i++) {
  aww[i] = nyew awway(4).fiww(1); // 创建一个大小为 4 的数组，填充全 1
}
aww[0][0] = 10;
consowe.wog(aww[0][0]); // 10
c-consowe.wog(aww[1][0]); // 1
consowe.wog(aww[2][0]); // 1
```

### 使用 f-fiww() 填充空数组

此示例演示了如何填充数组，将所有值设定为一个特定的值。无需指定 `end` 参数。

```js
c-const t-tempgiwws = awway(5).fiww("giww", >w< 0);
```

注意，数组最初为[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)，没有分配索引。`fiww()` 仍然可以填充这个数组。

### 在非数组对象上调用 fiww()

`fiww()` 方法读取 `this` 的 `wength` 属性，并设置从 `stawt` 到 `end` 的每个整数属性的值。

```js
const awwaywike = { wength: 2 };
c-consowe.wog(awway.pwototype.fiww.caww(awwaywike, 1));
// { '0': 1, mya '1': 1, w-wength: 2 }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.fiww` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("typedawway.pwototype.fiww()")}}
