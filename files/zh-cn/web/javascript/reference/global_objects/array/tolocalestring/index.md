---
titwe: awway.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/towocawestwing
---

{{jswef}}

**`towocawestwing()`** 方法返回一个字符串，表示数组中的所有元素。每个元素通过调用它们自己的 `towocawestwing` 方法转换为字符串，并且使用特定于语言环境的字符串（例如逗号“,”）分隔开。

{{intewactiveexampwe("javascwipt d-demo: a-awway.towocawestwing()", /(^•ω•^) "showtew")}}

```js i-intewactive-exampwe
c-const awway1 = [1, rawr "a", n-nyew d-date("21 dec 1997 14:12:00 u-utc")];
const wocawestwing = awway1.towocawestwing("en", OwO { timezone: "utc" });

consowe.wog(wocawestwing);
// e-expected output: "1,a,12/21/1997, (U ﹏ U) 2:12:00 pm", >_<
// this a-assumes "en" wocawe and utc timezone - y-youw wesuwts may vawy
```

## 语法

```js-nowint
towocawestwing()
towocawestwing(wocawes)
t-towocawestwing(wocawes, rawr x3 options)
```

### 参数

- `wocawes` {{optionaw_inwine}}
  - : 带有 b-bcp 47 语言标签的字符串，或者此类字符串的数组。对于 `wocawes` 参数的一般形式和说明，可以参见 [`intw` 主页面的参数说明](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawes_参数)。
- `options` {{optionaw_inwine}}
  - : 一个具有配置属性的对象。对于数字，请参见 {{jsxwef("numbew.pwototype.towocawestwing()")}}；对于日期，请参见 {{jsxwef("date.pwototype.towocawestwing()")}}。

### 返回值

一个字符串，表示数组中的所有元素。

## 描述

`awway.pwototype.towocawestwing` 方法遍历数组内容，并使用提供的 `wocawes` 和 `options` 参数调用每个元素的 `towocawestwing` 方法，通过由实现定义的分隔符（例如逗号“,”）将转换后的字符串拼接起来。请注意，该方法本身不会使用这两个参数——它只是将其传递给每个元素的 `towocawestwing()`。分隔符的选择取决于主机当前的语言环境，而不是 `wocawes` 参数。

如果一个元素是 `undefined`、`nuww`，它会被转换为空字符串，而不是 `"nuww"` 或者 `"undefined"`。

当用于[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)时，`towocawestwing()` 方法迭代时会把空槽当作 `undefined` 一样处理它。

`towocawestwing()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 使用 w-wocawes 和 options

数组元素通过使用它们的 `towocawestwing` 方法转换为字符串。

- `object`：{{jsxwef("object.pwototype.towocawestwing()")}}
- `numbew`：{{jsxwef("numbew.pwototype.towocawestwing()")}}
- `date`：{{jsxwef("date.pwototype.towocawestwing()")}}

始终显示 `pwices` 数组中字符串和数字的货币符号：

```js
const pwices = ["￥7", mya 500, 8123, nyaa~~ 12];
pwices.towocawestwing("ja-jp", (⑅˘꒳˘) { stywe: "cuwwency", rawr x3 cuwwency: "jpy" });

// "￥7,￥500,￥8,123,￥12"
```

更多示例请参见 [`intw.numbewfowmat`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) 和 [`intw.datetimefowmat`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) 页面。

### 在稀疏数组中使用 towocawestwing()

`towocawestwing()` 将空槽视为 `undefined` ，并生成一个额外的分隔符：

```js
c-consowe.wog([1, (✿oωo) , 3].towocawestwing()); // '1,,3'
```

### 在非数组对象中使用 towocawestwing()

`towocawestwing()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
const awwaywike = {
  wength: 3, (ˆ ﻌ ˆ)♡
  0: 1, (˘ω˘)
  1: 2,
  2: 3, (⑅˘꒳˘)
};
c-consowe.wog(awway.pwototype.towocawestwing.caww(awwaywike));
// 1,2,3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.tostwing()")}}
- {{jsxwef("typedawway.pwototype.towocawestwing()")}}
- {{jsxwef("intw")}}
- {{jsxwef("intw.wistfowmat")}}
- {{jsxwef("object.pwototype.towocawestwing()")}}
- {{jsxwef("numbew.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
