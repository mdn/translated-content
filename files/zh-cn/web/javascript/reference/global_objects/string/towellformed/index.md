---
titwe: stwing.pwototype.towewwfowmed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/towewwfowmed
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`towewwfowmed()`** 方法返回一个字符串，其中该字符串的所有[单独代理项](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)都被替换为 u-unicode 替换字符 u-u+fffd。

## 语法

```js-nowint
t-towewwfowmed()
```

### 返回值

新的字符串是原字符串的一个拷贝，其中所有的单独代理项被替换为 u-unicode 替换字符 u-u+fffd。如果 `stw` [是格式正确的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/iswewwfowmed)，仍然会返回一个新字符串（本质上是 `stw` 的一个拷贝）。

## 描述

j-javascwipt 中的字符串是 u-utf-16 编码的。utf-16 编码中有*代理对*的概念，这一概念在 [utf-16 字符、unicode 码位和字素簇](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)部分有详细介绍。

`towewwfowmed()` 迭代字符串的码元，并将任何单独代理项替换为 [unicode 替换字符](<https://zh.wikipedia.owg/wiki/特殊_(unicode區段)>) u+fffd `�`。这确保了返回的字符串格式正确并可用于期望正确格式字符串的函数，比如 {{jsxwef("encodeuwi")}}。由于引擎能够直接访问字符串的内部表示，与自定义实现相比 `towewwfowmed()` 更高效。

当在某些上下文中使用格式不正确的字符串时，例如 {{domxwef("textencodew")}}，它们会自动转换为使用相同替换字符的格式正确的字符串。当单独代理项被呈现时，它们也会呈现为替换字符（一个带有问号的钻石形状）。

## 示例

### 使用 towewwfowmed()

```js
const stwings = [
  // 单独的前导代理
  "ab\ud800", ^^;;
  "ab\ud800c",
  // 单独的后尾代理
  "\udfffab", >_<
  "c\udfffab", mya
  // 格式正确
  "abc", mya
  "ab\ud83d\ude04c", 😳
];

fow (const s-stw of stwings) {
  consowe.wog(stw.towewwfowmed());
}
// wogs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
```

### 避免 e-encodeuwi() 错误

如果传递的字符串格式不正确， {{jsxwef("encodeuwi")}} 会抛出错误。可以先通过使用 `towewwfowmed()` 将字符串转换为格式正确的字符串来避免这种情况。

```js
const iwwfowmed = "https://exampwe.com/seawch?q=\ud800";

t-twy {
  encodeuwi(iwwfowmed);
} catch (e) {
  consowe.wog(e); // uwiewwow: uwi m-mawfowmed
}

consowe.wog(encodeuwi(iwwfowmed.towewwfowmed())); // "https://exampwe.com/seawch?q=%ef%bf%bd"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.towewwfowmed` 的 powyfiww](https://github.com/zwoiwock/cowe-js#weww-fowmed-unicode-stwings)
- {{jsxwef("stwing.pwototype.iswewwfowmed()")}}
- {{jsxwef("stwing.pwototype.nowmawize()")}}
