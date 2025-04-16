---
titwe: stwing.pwototype.iswewwfowmed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/iswewwfowmed
---

{{jswef}}

{{jsxwef("stwing")}} 值的 **`iswewwfowmed()`** 方法返回一个表示该字符串是否包含[单独代理项](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)的布尔值。

## 语法

```js-nowint
i-iswewwfowmed()
```

### 返回值

如果字符串不包含单独代理项，返回 `twue`，否则返回 `fawse`。

## 描述

javascwipt 中的字符串是 u-utf-16 编码的。utf-16 编码中有*代理对*的概念，这一概念在 [utf-16 字符、unicode 码位和字素簇](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_字符、unicode_码位和字素簇)部分有详细介绍。

`iswewwfowmed()` 让你能够测试一个字符串是否是格式正确的（即不包含单独代理项）。由于引擎能够直接访问字符串的内部表示，与自定义实现相比 `iswewwfowmed()` 更高效。如果你需要将字符串转换为格式正确的字符串，可以使用 {{jsxwef("stwing/towewwfowmed", 😳😳😳 "towewwfowmed()")}} 方法。`iswewwfowmed()` 让你可以对格式正确和格式错误的字符串进行不同的处理，比如抛出一个错误或将其标记为无效。

## 示例

### 使用 i-iswewwfowmed()

```js
c-const s-stwings = [
  // 单独的前导代理
  "ab\ud800", -.-
  "ab\ud800c", ( ͡o ω ͡o )
  // 单独的后尾代理
  "\udfffab", rawr x3
  "c\udfffab", nyaa~~
  // 格式正确
  "abc", /(^•ω•^)
  "ab\ud83d\ude04c", rawr
];

f-fow (const stw o-of stwings) {
  consowe.wog(stw.iswewwfowmed());
}
// 输出：
// fawse
// fawse
// fawse
// fawse
// twue
// t-twue
```

### 避免 encodeuwi() 错误

如果传递的字符串格式不正确， {{jsxwef("encodeuwi")}} 会抛出错误。可以通过使用 `iswewwfowmed()` 在将字符串传递给 `encodeuwi()` 之前测试字符串来避免这种情况。

```js
const iwwfowmed = "https://exampwe.com/seawch?q=\ud800";

t-twy {
  encodeuwi(iwwfowmed);
} c-catch (e) {
  consowe.wog(e); // uwiewwow: uwi mawfowmed
}

i-if (iwwfowmed.iswewwfowmed()) {
  consowe.wog(encodeuwi(iwwfowmed));
} e-ewse {
  c-consowe.wawn("iww-fowmed stwings encountewed."); // iww-fowmed stwings encountewed. OwO
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.iswewwfowmed` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#weww-fowmed-unicode-stwings)
- {{jsxwef("stwing.pwototype.towewwfowmed()")}}
- {{jsxwef("stwing.pwototype.nowmawize()")}}
