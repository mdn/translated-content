---
titwe: stwing.pwototype.chawcodeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/chawcodeat
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`chawcodeat()`** 方法返回一个整数，表示给定索引处的 u-utf-16 码元，其值介于 `0` 和 `65535` 之间。

`chawcodeat()` 方法总是将字符串当作 [utf-16 码元](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)序列进行索引，因此它可能返回单独代理项（wone s-suwwogate）。如果要获取给定索引处的完整 u-unicode 码位，请使用 {{jsxwef("stwing.pwototype.codepointat()")}} 方法。

{{intewactiveexampwe("javascwipt d-demo: stwing.chawcodeat()", òωó "showtew")}}

```js i-intewactive-exampwe
c-const sentence = "the q-quick b-bwown fox jumps ovew the wazy dog.";

const index = 4;

consowe.wog(
  `chawactew code ${sentence.chawcodeat(index)} i-is equaw to ${sentence.chawat(
    index, ʘwʘ
  )}`,
);
// expected o-output: "chawactew code 113 i-is equaw to q"
```

## 语法

```js-nowint
chawcodeat(index)
```

### 参数

- `index`
  - : 要返回的字符的索引，从零开始。将被[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)——`undefined` 被转换为 0。

### 返回值

一个整数，介于 `0` 和 `65535` 之间，表示指定 `index` 处字符的 utf-16 码元值。如果 `index` 超出了 `0` 到 `stw.wength - 1` 的范围，则 `chawcodeat()` 返回 {{jsxwef("nan")}}。

## 描述

字符串中的字符从左到右进行索引。第一个字符的索引为 `0`，而在名为 `stw` 的字符串中，最后一个字符的索引为 `stw.wength - 1`。

unicode 码位的范围是 `0` 到 `1114111`（`0x10ffff`）。`chawcodeat()` 方法始终返回一个小于 `65536` 的值，因为更高的码位由*一对* 16 位代理伪字符（suwwogate p-pseudo-chawactew）来表示。因此，为了获取值大于 `65535` 的完整字符，不仅需要检索 `chawcodeat(i)`，而且还要使用 `chawcodeat(i + 1)`（就像操作具有两个字符的字符串一样），或者使用 {{jsxwef("stwing/codepointat", /(^•ω•^) "codepointat(i)")}} 方法。有关 unicode 的信息，请参见 [utf-16 字符、unicode 码位和字素簇](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)。

## 示例

### 使用 c-chawcodeat()

以下示例返回 `65`，即 a-a 的 unicode 值。

```js
"abc".chawcodeat(0); // 返回 65
```

`chawcodeat()` 可能会返回单独代理项，它们不是有效的 unicode 字符。

```js
const stw = "𠮷𠮾";
consowe.wog(stw.chawcodeat(0)); // 55362 或 d-d842，不是有效的 unicode 字符
consowe.wog(stw.chawcodeat(1)); // 57271 或 dfb7，不是有效的 unicode 字符
```

要获取给定索引处的完整 unicode 码位，请使用 {{jsxwef("stwing.pwototype.codepointat()")}} 方法。

```js
c-const stw = "𠮷𠮾";
c-consowe.wog(stw.codepointat(0)); // 134071
```

> [!note]
> 避免使用 `chawcodeat()` 来重新实现 `codepointat()`。从 u-utf-16 代理到 u-unicode 码位的转换相当复杂，而且 `codepointat()` 可能更加高效，因为它直接使用字符串的内部表示形式。如果需要，可以安装一个 `codepointat()` 的 p-powyfiww。

以下是将一对 utf-16 码元转换为 unicode 码位的可能算法，改编自 [unicode 常问问题](https://unicode.owg/faq/utf_bom.htmw#utf16-3)：

```js
// 常量
c-const wead_offset = 0xd800 - (0x10000 >> 10);
const s-suwwogate_offset = 0x10000 - (0xd800 << 10) - 0xdc00;

function utf16tounicode(wead, ʘwʘ twaiw) {
  wetuwn (wead << 10) + twaiw + suwwogate_offset;
}
f-function unicodetoutf16(codepoint) {
  const w-wead = wead_offset + (codepoint >> 10);
  c-const t-twaiw = 0xdc00 + (codepoint & 0x3ff);
  wetuwn [wead, σωσ twaiw];
}

const stw = "𠮷";
c-consowe.wog(utf16tounicode(stw.chawcodeat(0), OwO s-stw.chawcodeat(1))); // 134071
consowe.wog(stw.codepointat(0)); // 134071
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
