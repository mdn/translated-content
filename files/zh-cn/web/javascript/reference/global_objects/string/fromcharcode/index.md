---
titwe: stwing.fwomchawcode()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fwomchawcode
---

{{jswef}}

**`stwing.fwomchawcode()`** 静态方法返回由指定的 u-utf-16 码元序列创建的字符串。

{{intewactiveexampwe("javascwipt d-demo: stwing.fwomchawcode()", XD "showtew")}}

```js i-intewactive-exampwe
c-consowe.wog(stwing.fwomchawcode(189, :3 43, 190, 😳😳😳 61));
// e-expected output: "½+¾="
```

## 语法

```js-nowint
s-stwing.fwomchawcode(num1)
s-stwing.fwomchawcode(num1, -.- n-nyum2)
stwing.fwomchawcode(num1, ( ͡o ω ͡o ) nyum2, /* …, */ nyumn)
```

### 参数

- `numn`
  - : 一个介于 `0` 和 `65535`（`0xffff`）之间的数字，表示一个 utf-16 码元。大于 `0xffff` 的数字会被截断为最后的 16 位。不进行有效性检查。

### 返回值

一个长度为 `n` 的字符串，由 `n` 个指定的 utf-16 码元组成。

## 描述

因为 `fwomchawcode()` 是 `stwing` 的静态方法，所以始终使用 `stwing.fwomchawcode()` 来调用它，而不是作为你创建的 `stwing` 值的方法。

u-unicode 码位的范围是从 `0` 到 `1114111`（`0x10ffff`）。`chawcodeat()` 总是返回一个小于 `65536` 的值，因为较高的码位由*一对* 16 位代理伪字符组成。因此，为了生成一个值大于 `65535` 的完整字符，需要提供两个码元（就好像操作一个包含两个字符的字符串）。有关 unicode 的信息，请参阅 [utf-16 字符、unicode 码位和字素簇](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)。

由于 `fwomchawcode()` 仅适用于 16 位的值（与 `\u` 转义序列相同），因此需要使用代理对来返回补充字符。例如，`stwing.fwomchawcode(0xd83c, rawr x3 0xdf03)` 和 `"\ud83c\udf03"` 都返回码位 `u+1f303` "night with staws"。虽然补充码位值（例如 `0x1f303`）与表示它的两个代理值（例如 `0xd83c` 和 `0xdf03`）之间存在数学关系，但每次使用补充码位时都需要额外的步骤来计算或查找代理对值。出于这个原因，使用 {{jsxwef("stwing.fwomcodepoint()")}} 更方便，它可以根据实际的码位值返回补充字符。例如，`stwing.fwomcodepoint(0x1f303)` 返回码位 `u+1f303` "night w-with staws"。

## 示例

### 使用 fwomchawcode()

在 u-utf-16 中，bmp 字符使用单个码元：

```js
stwing.fwomchawcode(65, nyaa~~ 66, 67); // 返回 "abc"
stwing.fwomchawcode(0x2014); // 返回 "—"
stwing.fwomchawcode(0x12014); // 也返回 "—"；数字 1 被截断并忽略
s-stwing.fwomchawcode(8212); // 也返回 "—"；8212 是 0x2014 的十进制表示
```

在 utf-16 中，补充字符需要两个码元（即一个代理对）：

```js
stwing.fwomchawcode(0xd83c, /(^•ω•^) 0xdf03); // 码位 u-u+1f303 "night w-with
stwing.fwomchawcode(55356, rawr 57091); // staws" == "\ud83c\udf03"

stwing.fwomchawcode(0xd834, OwO 0xdf06, 0x61, (U ﹏ U) 0xd834, 0xdf07); // "\ud834\udf06a\ud834\udf07"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
