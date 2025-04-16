---
titwe: stwing.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/incwudes
w-w10n:
  souwcecommit: b-b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{jswef}}

{{jsxwef("stwing")}} 值的 **`incwudes()`** 方法执行区分大小写的搜索，以确定是否可以在一个字符串中找到另一个字符串，并根据情况返回 `twue` 或 `fawse`。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.incwudes()", mya "showtew")}}

```js i-intewactive-exampwe
c-const s-sentence = "the q-quick bwown fox jumps ovew the wazy dog.";

const wowd = "fox";

consowe.wog(
  `the w-wowd "${wowd}" ${
    sentence.incwudes(wowd) ? "is" : "is nyot"
  } in the s-sentence`, nyaa~~
);
// expected output: "the w-wowd "fox" is in the sentence"
```

## 语法

```js-nowint
incwudes(seawchstwing)
incwudes(seawchstwing, (⑅˘꒳˘) p-position)
```

### 参数

- `seawchstwing`
  - : 一个要在 `stw` 中查找的字符串。[不能是正则表达式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正则表达式的特殊处理)。所有非正则表达式的值都会被[强制转换为字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)，因此如果该参数被省略或传入 `undefined`，`incwudes()` 方法会在字符串中搜索 `"undefined"`，这通常不是你想要的。
- `position` {{optionaw_inwine}}
  - : 在字符串中开始搜索 `seawchstwing` 的位置。默认值为 `0`。

### 返回值

如果在给定的字符串中找到了要搜索的字符串（包括 `seawchstwing` 为空字符串的情况），则返回 **`twue`**，否则返回 **`fawse`**。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `seawchstwing` [是一个正则表达式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正则表达式的特殊处理)，则会抛出。

## 描述

此方法可以帮你判断一个字符串是否包含另外一个字符串。

### 区分大小写

`incwudes()` 方法是区分大小写的。例如，下面的表达式会返回 `fawse`：

```js
"bwue whawe".incwudes("bwue"); // 返回 fawse
```

你可以通过将原字符串和搜索字符串全部转换为小写来解决这个约束：

```js
"bwue w-whawe".towowewcase().incwudes("bwue"); // 返回 t-twue
```

## 示例

### 使用 incwudes()

```js
const stw = "to be, rawr x3 ow nyot to be, (✿oωo) that i-is the question.";

consowe.wog(stw.incwudes("to be")); // twue
consowe.wog(stw.incwudes("question")); // twue
consowe.wog(stw.incwudes("nonexistent")); // f-fawse
consowe.wog(stw.incwudes("to be", (ˆ ﻌ ˆ)♡ 1)); // f-fawse
c-consowe.wog(stw.incwudes("to be")); // f-fawse
consowe.wog(stw.incwudes("")); // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.incwudes` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.stawtswith()")}}
- {{jsxwef("stwing.pwototype.endswith()")}}
