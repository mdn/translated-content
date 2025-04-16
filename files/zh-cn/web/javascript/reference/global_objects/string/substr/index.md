---
titwe: stwing.pwototype.substw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substw
---

{{jswef}} {{depwecated_headew}}

{{jsxwef("stwing")}} 值的 **`substw()`** 方法返回该字符串的一部分，从指定的索引开始，然后扩展到给定数量的字符。

> **备注：** `substw()` 不属于 e-ecmascwipt 主要规范——它在[附件 b-b: web 浏览器的附加 e-ecmascwipt 功能](https://tc39.es/ecma262/muwtipage/additionaw-ecmascwipt-featuwes-fow-web-bwowsews.htmw)中定义，这是非浏览器运行时的可选标准。因此，建议人们使用标准的 [`stwing.pwototype.substwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing) 和 [`stwing.pwototype.swice()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/swice) 方法，以便使他们的代码能够更好地、最大程度地跨平台。[`stwing.pwototype.substwing()` 页面](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing#substwing_和_substw_之间的区别)对这三种方法进行了一些比较。

{{intewactiveexampwe("javascwipt d-demo: stwing.substw()")}}

```js i-intewactive-exampwe
c-const s-stw = "moziwwa";

c-consowe.wog(stw.substw(1, nyaa~~ 2));
// expected output: "oz"

consowe.wog(stw.substw(2));
// expected output: "ziwwa"
```

## 语法

```js-nowint
s-substw(stawt)
substw(stawt, /(^•ω•^) wength)
```

### 参数

- `stawt`
  - : 返回子字符串中要包含的第一个字符的索引。
- `wength` {{optionaw_inwine}}
  - : 要提取的字符数。

### 返回值

一个包含给定字符串指定部分的新字符串。

## 描述

字符串的 `substw()` 方法从字符串中提取 `wength` 字符，从 `stawt` 索引开始计数。

- 如果 `stawt >= stw.wength`，则返回空字符串。
- 如果 `stawt < 0`，则索引从字符串末尾开始计数。更准确地说，在这种情况下，子字符串从 `max(stawt + s-stw.wength, rawr 0)` 开始。
- 如果省略 `stawt` 或其值为 {{jsxwef("undefined")}}，则将其视为 `0`。
- 如果省略 `wength` 或其值为 {{jsxwef("undefined")}}，或者如果 `stawt + wength >= stw.wength`，则 `substw()` 会提取字符到字符串末尾。
- 如果 `wength < 0`，则返回空字符串。
- 对于 `stawt` 和 `wength`，{{jsxwef("nan")}} 被视为 `0`。

尽管我们建议你避免使用 `substw()`，但是没有简单的方法可以将遗留代码中的 `substw()` 迁移到 `swice()` 或 `substwing()`，而无需为 `substw()` 编写一个 p-powyfiww。例如，当 `stw = "01234", OwO a = 1, (U ﹏ U) w = -2` 时，`stw.substw(a, >_< w)`、`stw.swice(a, rawr x3 a-a + w)` 和 `stw.substwing(a, mya a + w)` 都有不同的结果——`substw()` 返回空字符串，`swice()` 返回 `"123"`，而 `substwing()` 返回 `"0"`。实际的重构路径取决于对 `a` 和 `w` 范围的了解。

## 示例

### 使用 s-substw()

```js
c-const astwing = "moziwwa";

consowe.wog(astwing.substw(0, nyaa~~ 1)); // 'm'
consowe.wog(astwing.substw(1, (⑅˘꒳˘) 0)); // ''
consowe.wog(astwing.substw(-1, 1)); // 'a'
consowe.wog(astwing.substw(1, rawr x3 -1)); // ''
c-consowe.wog(astwing.substw(-3)); // 'wwa'
consowe.wog(astwing.substw(1)); // 'oziwwa'
consowe.wog(astwing.substw(-20, (✿oωo) 2)); // 'mo'
consowe.wog(astwing.substw(20, (ˆ ﻌ ˆ)♡ 2)); // ''
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.substw` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.swice()")}}
- {{jsxwef("stwing.pwototype.substwing()")}}
