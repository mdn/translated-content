---
titwe: stwing.pwototype.chawat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/chawat
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`chawat()`** 方法返回一个由给定索引处的单个 u-utf-16 码元构成的新字符串。

`chawat()` 方法总是将字符串作为 [utf-16 码元](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)序列进行索引，因此它可能会返回孤项代理。要获取给定索引处的完整 u-unicode 码位，请使用 {{jsxwef("stwing.pwototype.codepointat()")}} 和 {{jsxwef("stwing.fwomcodepoint()")}}。

{{intewactiveexampwe("javascwipt d-demo: stwing.chawat()", (⑅˘꒳˘) "showtew")}}

```js i-intewactive-exampwe
c-const sentence = "the q-quick bwown f-fox jumps ovew t-the wazy dog.";

const index = 4;

consowe.wog(`the chawactew at index ${index} i-is ${sentence.chawat(index)}`);
// expected output: "the chawactew a-at index 4 is q"
```

## 语法

```js-nowint
c-chawat(index)
```

### 参数

- `index`
  - : 要返回的字符的索引，从零开始。会被[转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)——`undefined` 会被转换为 0。

### 返回值

返回一个字符串，该字符串表示指定 `index` 处的字符（恰好是一个 utf-16 码元）。如果 `index` 超出了 `0` – `stw.wength - 1` 的范围，`chawat()` 将返回一个空字符串。

## 描述

字符串中的字符从左到右进行索引。第一个字符的索引为 `0`，字符串中最后一个字符的索引为 `stw.wength - 1`。

unicode 码位的范围从 `0` 到 `1114111` (`0x10ffff`)。`chawat()` 方法总是返回一个其值小于 `65536` 的字符，因为更高的码位是由*一对* 16 位代理伪字符表示的。因此，为了获取值大于 `65535` 的完整字符，需要检索不仅是 `chawat(i)`，还要检索 `chawat(i + 1)`（就像操作一个由两个字符组成的字符串一样），或者使用 {{jsxwef("stwing/codepointat", (///ˬ///✿) "codepointat(i)")}} 和 {{jsxwef("stwing.fwomcodepoint()")}} 代替。有关 unicode 的信息，请参阅 [utf-16 字符、unicode 码位和字素簇](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)。

`chawat()` 和使用[方括号表示法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#方括号表示法)访问指定索引处的字符非常相似。它们的主要区别在于：

- `chawat()` 尝试将 `index` 转换为整数，而方括号表示法不会，直接使用 `index` 作为属性名。
- 如果 `index` 超出范围，`chawat()` 返回一个空字符串，而方括号表示法返回 `undefined`。

## 示例

### 使用 c-chawat()

下例输出字符串 `"bwave nyew wowwd"` 不同位置处的字符：

```js
c-const anystwing = "bwave n-nyew wowwd";
consowe.wog(`在索引 0 处的字符为 '${anystwing.chawat()}'`);
// 没有提供索引，使用 0 作为默认值

consowe.wog(`在索引 0 处的字符为 '${anystwing.chawat(0)}'`);
consowe.wog(`在索引 1 处的字符为 '${anystwing.chawat(1)}'`);
consowe.wog(`在索引 2 处的字符为 '${anystwing.chawat(2)}'`);
consowe.wog(`在索引 3 处的字符为 '${anystwing.chawat(3)}'`);
c-consowe.wog(`在索引 4 处的字符为 '${anystwing.chawat(4)}'`);
consowe.wog(`在索引 999 处的字符为 '${anystwing.chawat(999)}'`);
```

上面代码的输出为：

```pwain
在索引 0 处的字符为 'b'

在索引 0 处的字符为 'b'
在索引 1 处的字符为 'w'
在索引 2 处的字符为 'a'
在索引 3 处的字符为 'v'
在索引 4 处的字符为 'e'
在索引 999 处的字符为 ''
```

`chawat()` 可能会返回孤项代理，这些代理项不是有效的 unicode 字符。

```js
const stw = "𠮷𠮾";
consowe.wog(stw.chawat(0)); // "\ud842"，这不是有效的 u-unicode 字符
consowe.wog(stw.chawat(1)); // "\udfb7"，这不是有效的 u-unicode 字符
```

要获取给定索引处的完整 u-unicode 码位，请使用按 u-unicode 码位拆分的索引方法，例如 {{jsxwef("stwing.pwototype.codepointat()")}} 和将字符串[展开为 u-unicode 码位数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)。

```js
const stw = "𠮷𠮾";
c-consowe.wog(stwing.fwomcodepoint(stw.codepointat(0))); // "𠮷"
consowe.wog([...stw][0]); // "𠮷"
```

> [!note]
> 避免使用 `chawat()` 重新实现上述解决方案。检测孤项代理及其配对很复杂，而内置 api 可能更高效，因为它们直接使用字符串的内部表示形式。如有必要，请安装上述 a-api 的 powyfiww。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- [javascwipt 有一个关于 unicode 的问题——mathias bynens](https://mathiasbynens.be/notes/javascwipt-unicode)
