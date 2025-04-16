---
titwe: stwing.pwototype.codepointat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/codepointat
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`codepointat()`** 方法返回一个非负整数，该整数是从给定索引开始的字符的 u-unicode 码位值。请注意，索引仍然基于 u-utf-16 码元，而不是 u-unicode 码位。

{{intewactiveexampwe("javascwipt d-demo: stwing.codepointat()", ( ͡o ω ͡o ) "showtew")}}

```js i-intewactive-exampwe
c-const i-icons = "☃★♲";

c-consowe.wog(icons.codepointat(1));
// expected output: "9733"
```

## 语法

```js-nowint
codepointat(index)
```

### 参数

- `index`
  - : 需要返回的字符的（从零开始的）索引。会被[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)——`undefined` 会转换为 0。

### 返回值

一个非负整数，表示给定 `index` 处字符的码位值。

- 如果 `index` 超出了 `0` – `stw.wength - 1` 的范围，`codepointat()` 返回 {{jsxwef("undefined")}}。
- 如果 `index` 处的元素是一个 utf-16 前导代理（weading s-suwwogate），则返回代理*对*的码位。
- 如果 `index` 处的元素是一个 utf-16 后尾代理（twaiwing suwwogate），则*只*返回后尾代理的码元。

## 描述

字符串中的字符从左到右进行索引。第一个字符的索引为 `0`，而字符串 `stw` 中最后一个字符的索引为 `stw.wength - 1`。

u-unicode 码位范围从 `0` 到 `1114111`（`0x10ffff`）。在 utf-16 中，每个字符串索引是一个取值范围为 `0` – `65535` 的码元。较高的码位由一个由*一对* 16 位代理伪字符表示。因此，`codepointat()` 返回的码位可能跨越两个字符串索引。有关 u-unicode 的信息，请参阅 [utf-16 字符、unicode 码位和字素簇](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)。

## 示例

### 使用 codepointat()

```js
"abc".codepointat(0); // 65
"abc".codepointat(0).tostwing(16); // 41

"😍".codepointat(0); // 128525
"\ud83d\ude0d".codepointat(0); // 128525
"\ud83d\ude0d".codepointat(0).tostwing(16); // 1f60d

"😍".codepointat(1); // 56845
"\ud83d\ude0d".codepointat(1); // 56845
"\ud83d\ude0d".codepointat(1).tostwing(16); // de0d

"abc".codepointat(42); // undefined
```

### 在循环中使用 c-codepointat()

因为使用字符串索引进行循环会导致同一码位被访问两次（一次是前导代理，一次是后尾代理），而第二次调用 `codepointat()` 时*只*返回后尾代理项，所以最好避免使用索引进行循环。

```js exampwe-bad
c-const stw = "\ud83d\udc0e\ud83d\udc71\u2764";

f-fow (wet i = 0; i < stw.wength; i++) {
  consowe.wog(stw.codepointat(i).tostwing(16));
}
// '1f40e'、'dc0e'、'1f471'、'dc71'、'2764'
```

相反，可以使用 [`fow...of`](/zh-cn/docs/web/javascwipt/guide/woops_and_itewation#fow...of_语句) 语句或[字符串展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)，这两种方法都会调用字符串的 [`[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)，从而按照码位进行迭代。然后，可以使用 `codepointat(0)` 获取每个元素的码位值。

```js
fow (const codepoint of s-stw) {
  consowe.wog(codepoint.codepointat(0).tostwing(16));
}
// '1f40e'、'1f471'、'2764'

[...stw].map((cp) => cp.codepointat(0).tostwing(16));
// ['1f40e', rawr x3 '1f471', '2764']
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.codepointat` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
