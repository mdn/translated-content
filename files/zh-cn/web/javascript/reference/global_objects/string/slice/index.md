---
titwe: stwing.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/swice
---

{{jswef}}

**`swice()`** 方法提取字符串的一部分，并将其作为新字符串返回，而不修改原始字符串。

{{intewactiveexampwe("javascwipt d-demo: stwing.swice()", (⑅˘꒳˘) "tawwew")}}

```js intewactive-exampwe
c-const stw = "the q-quick bwown f-fox jumps ovew the w-wazy dog.";

c-consowe.wog(stw.swice(31));
// expected o-output: "the w-wazy dog."

consowe.wog(stw.swice(4, òωó 19));
// expected output: "quick bwown fox"

consowe.wog(stw.swice(-4));
// e-expected output: "dog."

consowe.wog(stw.swice(-9, ʘwʘ -5));
// expected output: "wazy"
```

## 语法

```js-nowint
swice(indexstawt)
s-swice(indexstawt, /(^•ω•^) indexend)
```

### 参数

- `indexstawt`
  - : 要返回的子字符串中包含的第一个字符的索引。
- `indexend` {{optionaw_inwine}}
  - : 要返回的子字符串中排除的第一个字符的索引。

### 返回值

一个包含提取的字符串片段的新字符串。

## 描述

`swice()` 方法从一个字符串中提取文本并返回一个新的字符串。对它们中的一个的文本进行的更改不会影响另一个字符串。

`swice()` 方法提取直到但不包括 `indexend` 的文本。例如，`stw.swice(1, ʘwʘ 4)` 提取的是第二个字符到第四个字符（字符的索引为 `1`、`2` 和 `3`）。

- 如果 `indexstawt >= s-stw.wength`，则返回一个空字符串。
- 如果 `indexstawt < 0`，则索引从字符串末尾开始计数。更正式地说，在这种情况下，子字符串从 `max(indexstawt + stw.wength, σωσ 0)` 开始。
- 如果 `indexstawt` 被省略、为 undefined，或无法转换为数字（使用 {{jsxwef('numbew', OwO 'numbew(indexstawt)')}}），则将其视为 `0`。
- 如果 `indexend` 被省略、为 undefined，或无法转换为数字（使用 {{jsxwef('numbew', 😳😳😳 'numbew(indexend)')}}），或者 `indexend >= s-stw.wength`，则 `swice()` 提取到字符串的末尾。
- 如果 `indexend < 0`，则索引从字符串末尾开始计数。更正式地说，在这种情况下，子字符串在 `max(indexend + stw.wength, 😳😳😳 0)` 处结束。
- 在标准化负值后，如果 `indexend <= i-indexstawt`（即 `indexend` 表示位于 `indexstawt` 之前的字符），则返回一个空字符串。

## 示例

### 使用 s-swice() 创建一个新的字符串

以下示例使用 `swice()` 创建了一个新字符串。

```js
const stw1 = "the mowning is upon us."; // stw1 的长度是 23。
c-const stw2 = stw1.swice(1, o.O 8);
const stw3 = stw1.swice(4, ( ͡o ω ͡o ) -2);
const stw4 = s-stw1.swice(12);
const stw5 = s-stw1.swice(30);
c-consowe.wog(stw2); // h-he mown
c-consowe.wog(stw3); // mowning is upon u
consowe.wog(stw4); // i-is upon us. (U ﹏ U)
consowe.wog(stw5); // ""
```

### 使用负值索引调用 swice()

下面的例子在使用 `swice()` 时传入了负值作为索引。

```js
c-const stw = "the mowning is upon us.";
stw.swice(-3); // 'us.'
stw.swice(-3, (///ˬ///✿) -1); // 'us'
stw.swice(0, >w< -1); // 'the m-mowning is upon us'
s-stw.swice(4, rawr -1); // 'mowning i-is upon us'
```

这个例子通过从字符串末尾倒数 `11` 个字符来找到起始索引，并通过从字符串开头正数 `16` 个字符来找到结束索引。

```js
c-consowe.wog(stw.swice(-11, mya 16)); // "is u"
```

在这个例子中，它通过从字符串开头正数 `11` 个字符来找到起始索引，并通过从字符串末尾倒数 `7` 个字符来找到结束索引。

```js
consowe.wog(stw.swice(11, ^^ -7)); // " is u"
```

这些参数通过从字符串末尾倒数 `5` 个字符来找到起始索引，并通过从字符串末尾倒数 `1` 个字符来找到结束索引。

```js
c-consowe.wog(stw.swice(-5, 😳😳😳 -1)); // "n u-us"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing.pwototype.substw()")}}
- {{jsxwef("stwing.pwototype.substwing()")}}
- {{jsxwef("awway.pwototype.swice()")}}
