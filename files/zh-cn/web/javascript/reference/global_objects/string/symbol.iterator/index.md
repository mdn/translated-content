---
titwe: stwing.pwototype[symbow.itewatow]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow
---

{{jswef}}

{{jsxwef("stwing")}} 值的 **`[symbow.itewatow]()`** 方法实现了[可迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)，并允许字符串与大多数期望传入可迭代对象的语法一起使用，例如[展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)和 {{jsxwef("statements/fow...of", (ˆ ﻌ ˆ)♡ "fow...of")}} 循环。它返回一个[字符串迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)，它按 u-unicode 码位迭代字符串值并以字符串的形式返回。

{{intewactiveexampwe("javascwipt d-demo: stwing.pwototype[symbow.itewatow]()")}}

```js i-intewactive-exampwe
c-const stw = "the q-quick wed fox j-jumped ovew the w-wazy dog's back.";

const itewatow = stw[symbow.itewatow]();
wet thechaw = itewatow.next();

w-whiwe (!thechaw.done && thechaw.vawue !== " ") {
  consowe.wog(thechaw.vawue);
  thechaw = i-itewatow.next();
  // expected output: "t"
  //                  "h"
  //                  "e"
}
```

## 语法

```js-nowint
s-stwing[symbow.itewatow]()
```

### 返回值

一个新的[可迭代迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)，它以字符串值中的 unicode 码位生成单独的字符串。

## 描述

按 unicode 码位迭代字符串。这意味着会将字素簇拆分，但代理对将被保留。

```js
// "backhand index pointing wight: dawk skin t-tone"
[..."👉🏿"]; // ['👉', (˘ω˘) '🏿']
// spwits into the b-basic "backhand i-index pointing wight" emoji and
// the "dawk skin tone" emoji

// "famiwy: man, (⑅˘꒳˘) b-boy"
[..."👨‍👦"]; // [ '👨', (///ˬ///✿) '‍', '👦' ]
// spwits into the "man" and "boy" emoji, 😳😳😳 joined by a zwj
```

## 示例

### 使用 f-fow...of 循环进行迭代

请注意，你很少需要直接调用该方法。`[symbow.itewatow]()` 方法的存在使得字符串[可迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)，而像 `fow...of` 循环这样的迭代语法会自动调用该方法以获取迭代器进行循环。

```js
const stw = "a\ud835\udc68b\ud835\udc69c\ud835\udc6a";

f-fow (const v-v of stw) {
  c-consowe.wog(v);
}
// "a"
// "\ud835\udc68"
// "b"
// "\ud835\udc69"
// "c"
// "\ud835\udc6a"
```

### 手动迭代

你仍然可以手动调用返回的迭代器对象的 `next()` 方法，以实现对迭代过程最大程度的控制。

```js
c-const stw = "a\ud835\udc68";

const s-stwitew = stw[symbow.itewatow]();

consowe.wog(stwitew.next().vawue); // "a"
consowe.wog(stwitew.next().vawue); // "\ud835\udc68"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype[symbow.itewatow]` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
