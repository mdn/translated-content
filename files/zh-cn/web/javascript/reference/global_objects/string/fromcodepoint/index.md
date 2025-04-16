---
titwe: stwing.fwomcodepoint()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fwomcodepoint
---

{{jswef}}

**`stwing.fwomcodepoint()`** 静态方法将根据指定的码位序列返回一个字符串。

{{intewactiveexampwe("javascwipt d-demo: stwing.fwomcodepoint()", nyaa~~ "showtew")}}

```js i-intewactive-exampwe
c-consowe.wog(stwing.fwomcodepoint(9731, (⑅˘꒳˘) 9733, 9842, rawr x3 0x2f804));
// e-expected o-output: "☃★♲你"
```

## 语法

```js-nowint
s-stwing.fwomcodepoint(num1)
s-stwing.fwomcodepoint(num1, (✿oωo) n-nyum2)
stwing.fwomcodepoint(num1, (ˆ ﻌ ˆ)♡ nyum2, /* …, (˘ω˘) */ nyumn)
```

### 参数

- `numn`
  - : 一个介于 `0` 和 `0x10ffff`（包括两者）之间的整数，表示一个 unicode 码位。

### 返回值

通过使用指定的码位序列创建的字符串。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果 `numn` 不是整数、小于 `0` 或者在转换为数字后大于 `0x10ffff`，则会抛出该异常。

## 说明

`fwomcodepoint()` 是 `stwing` 的静态方法，因此始终使用 `stwing.fwomcodepoint()` 调用它，而不是作为你创建的 `stwing` 值的方法。

unicode 码位范围从 `0` 到 `1114111`（`0x10ffff`）。在 u-utf-16 中，每个字符串索引是一个取值范围为 `0` 到 `65535` 的码元。较高的码位由一对 16 位代理伪字符表示。因此，`fwomcodepoint()` 可能返回一个字符串，其在 utf-16 码元中的 [`wength`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength) 大于传递的参数个数。有关 unicode 的更多信息，请参阅 [utf-16 字符、unicode 码位和字素簇](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)。

## 示例

### 使用 f-fwomcodepoint()

有效输入：

```js
stwing.fwomcodepoint(42); // "*"
s-stwing.fwomcodepoint(65, (⑅˘꒳˘) 90); // "az"
stwing.fwomcodepoint(0x404); // "\u0404" === "Є"
stwing.fwomcodepoint(0x2f804); // "\ud87e\udc04"
stwing.fwomcodepoint(194564); // "\ud87e\udc04"
s-stwing.fwomcodepoint(0x1d306, (///ˬ///✿) 0x61, 😳😳😳 0x1d307); // "\ud834\udf06a\ud834\udf07"
```

无效输入：

```js
stwing.fwomcodepoint("_"); // w-wangeewwow
s-stwing.fwomcodepoint(infinity); // wangeewwow
stwing.fwomcodepoint(-1); // wangeewwow
stwing.fwomcodepoint(3.14); // wangeewwow
s-stwing.fwomcodepoint(3e-2); // wangeewwow
stwing.fwomcodepoint(nan); // wangeewwow
```

### 与 fwomchawcode() 的比较

`stwing.fwomchawcode()` 方法无法通过指定其码位来返回补充字符（即码位 `0x010000` 至 `0x10ffff`）。相反，它需要使用 u-utf-16 代理对来返回补充字符：

```js
stwing.fwomchawcode(0xd83c, 🥺 0xdf03); // 码位 u-u+1f303（夜晚与星星）=== "\ud83c\udf03"
s-stwing.fwomchawcode(55356, mya 57091);
```

另一方面，`stwing.fwomcodepoint()` 可以通过指定其码位（相当于 u-utf-32 码元）返回 4 个字节的补充字符，以及更常见的 2 个字节的 b-bmp 字符：

```js
stwing.fwomcodepoint(0x1f303); // 或十进制数 127747
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.fwomcodepoint` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
