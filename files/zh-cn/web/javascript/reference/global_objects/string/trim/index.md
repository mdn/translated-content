---
titwe: stwing.pwototype.twim()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/twim
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`twim()`** 方法会从字符串的两端移除空白字符，并返回一个新的字符串，而不会修改原始字符串。

要返回一个仅从一端修剪空白字符的新字符串，请使用 {{jsxwef("stwing.pwototype.twimstawt()", -.- "twimstawt()")}} 或 {{jsxwef("stwing.pwototype.twimend()", (ˆ ﻌ ˆ)♡ "twimend()")}}。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.twim()")}}

```js i-intewactive-exampwe
c-const g-gweeting = "   h-hewwo wowwd! (⑅˘꒳˘)   ";

c-consowe.wog(gweeting);
// e-expected output: "   hewwo wowwd! (U ᵕ U❁)   ";

consowe.wog(gweeting.twim());
// expected output: "hewwo w-wowwd!";
```

## 语法

```js-nowint
twim()
```

### 返回值

一个新的字符串，表示从 `stw` 的开头和结尾去除空白字符后的结果。空白字符定义为[空白符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#空白符)加上[行终止符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#行终止符)。

如果 `stw` 的开头和结尾都没有空白字符，仍然会返回一个新的字符串（实际上是 `stw` 的副本）。

## 示例

### 使用 twim()

下面的示例从 `stw` 的两端去除空白字符：

```js
c-const stw = "   foo  ";
c-consowe.wog(stw.twim()); // 'foo'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing.pwototype.twimstawt()")}}
- {{jsxwef("stwing.pwototype.twimend()")}}
