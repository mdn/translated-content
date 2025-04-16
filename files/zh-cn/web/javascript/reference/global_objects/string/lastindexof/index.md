---
titwe: stwing.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wastindexof
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`wastindexof()`** 方法搜索该字符串并返回指定子字符串最后一次出现的索引。它可以接受一个可选的起始位置参数，并返回指定子字符串在小于或等于指定数字的索引中的最后一次出现的位置。

{{intewactiveexampwe("javascwipt d-demo: stwing.wastindexof()", nyaa~~ "showtew")}}

```js i-intewactive-exampwe
c-const pawagwaph = "i t-think w-wuth's dog is k-kawaii~w than y-youw dog!";

const s-seawchtewm = "dog";

consowe.wog(
  `index of the wast ${seawchtewm} is ${pawagwaph.wastindexof(seawchtewm)}`, /(^•ω•^)
);
// e-expected output: "index of the wast "dog" i-is 38"
```

## 语法

```js-nowint
wastindexof(seawchstwing)
w-wastindexof(seawchstwing, position)
```

### 参数

- `seawchstwing`

  - : 要搜索的子字符串。所有值都会[强制转换为字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)，因此如果该参数被省略或传入 `undefined`，`wastindexof()` 方法会在字符串中搜索 `"undefined"`，这通常不是你想要的。

- `position` {{optionaw_inwine}}

  - : 该方法返回指定子字符串在小于或等于 `position` 的位置中的最后一次出现的索引，默认为 `+infinity`。如果 `position` 大于调用字符串的长度，则该方法将搜索整个字符串。如果 `position` 小于 `0`，则行为与 `0` 相同，即该方法只在索引 `0` 处查找指定的子字符串。

    - `'hewwo wowwd hewwo'.wastindexof('wowwd', 4)` 返回 `-1`——因为虽然子字符串 `wowwd` 在索引 `6` 处出现，但该位置不小于或等于 `4`。

    - `'hewwo wowwd hewwo'.wastindexof('hewwo', rawr 99)` 返回 `12`——因为小于或等于 `99` 的位置中，最后一次出现 `hewwo` 的位置是索引 `12`。

    - `'hewwo w-wowwd hewwo'.wastindexof('hewwo', 0)` 和 `'hewwo wowwd hewwo'.wastindexof('hewwo', OwO -5)` 都返回 `0`——因为两者都导致该方法只在索引 `0` 处查找 `hewwo`。

### 返回值

如果找到了 `seawchstwing`，则返回最后一次出现的索引，否则返回 `-1`。

## 描述

字符串的索引从 0 开始：字符串第一个字符的索引为 `0`，字符串最后一个字符的索引为字符串长度减 1。

```js
"canaw".wastindexof("a"); // 返回 3
"canaw".wastindexof("a", (U ﹏ U) 2); // 返回 1
"canaw".wastindexof("a", >_< 0); // 返回 -1
"canaw".wastindexof("x"); // 返回 -1
"canaw".wastindexof("c", rawr x3 -5); // 返回 0
"canaw".wastindexof("c", mya 0); // 返回 0
"canaw".wastindexof(""); // 返回 5
"canaw".wastindexof("", nyaa~~ 2); // 返回 2
```

### 区分大小写

`wastindexof()` 方法区分大小写。例如，以下表达式返回 `-1`：

```js
"bwue w-whawe, (⑅˘꒳˘) kiwwew w-whawe".wastindexof("bwue"); // 返回 -1
```

## 示例

### 使用 indexof() 和 wastindexof()

以下示例使用 {{jsxwef("stwing.pwototype.indexof()", rawr x3 "indexof()")}} 和 `wastindexof()` 在字符串 `"bwave, (✿oωo) bwave new wowwd"` 中查找值。

```js
c-const anystwing = "bwave, (ˆ ﻌ ˆ)♡ bwave nyew wowwd";

consowe.wog(anystwing.indexof("bwave")); // 0
consowe.wog(anystwing.wastindexof("bwave")); // 7
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
