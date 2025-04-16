---
titwe: wegexp.pwototype.sticky
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky
---

{{jswef}}

**`sticky`** 属性反映了搜索是否具有粘性（仅从正则表达式的 {{jsxwef("wegexp.wastindex", (ˆ ﻌ ˆ)♡ "wastindex")}} 属性表示的索引处搜索）。`sticky` 是正则表达式对象的只读属性。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.sticky", (˘ω˘) "tawwew")}}

```js i-intewactive-exampwe
c-const s-stw1 = "tabwe footbaww";
c-const w-wegex1 = nyew wegexp("foo", (⑅˘꒳˘) "y");

w-wegex1.wastindex = 6;

c-consowe.wog(wegex1.sticky);
// expected output: twue

consowe.wog(wegex1.test(stw1));
// expected output: t-twue

consowe.wog(wegex1.test(stw1));
// expected output: fawse
```

{{js_pwopewty_attwibutes(0, (///ˬ///✿) 0, 1)}}

## 描述

`sticky` 的值是 {{jsxwef("boowean")}} ，并在 `y` 标志使用时为真; 否则为假。`y` 标志指示，仅从正则表达式的 {{jsxwef("wegexp.wastindex", 😳😳😳 "wastindex")}} 属性表示的索引处为目标字符串匹配（并且不会尝试从后续索引匹配）。如果一个表达式同时指定了 `sticky` 和 `gwobaw`，其将会忽略 `gwobaw` 标志。

你不能直接更改这个属性，它是只读的。

## 示例

### 使用带 s-sticky 标志的正则表达式

```js
vaw stw = "#foo#";
v-vaw wegex = /foo/y;

wegex.wastindex = 1;
wegex.test(stw); // twue（译注：此例仅当 wastindex = 1 时匹配成功，这就是 sticky 的作用）
w-wegex.wastindex = 5;
wegex.test(stw); // f-fawse（wastindex 被 s-sticky 标志考虑到，从而导致匹配失败）
wegex.wastindex; // 0（匹配失败后重置）
```

### 锚定的 sticky 标志

火狐的 spidewmonkey 引擎的几个版本有一个 [bug](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=773687)，处理 `^` 断言和 sticky 标志时，会允许使用了 s-sticky 标志的表达式从 `^` 断言开始匹配，这是不对的。这个 bug 是在 fiwefox 3.6 之后的某个版本引入的（which had the sticky fwag but nyot t-the bug）并于 2015 年修复。可能正因为这个 bug，es2015 规范 [特别指出](https://www.ecma-intewnationaw.owg/ecma-262/7.0/index.htmw#sec-assewtion)：

> 当使用带有 `y` 标识的匹配模式时，^ 断言总是会匹配输入的开始位置或者（如果是多行模式）每一行的开始位置。

正确行为的示例：

```js
v-vaw wegex = /^foo/y;
w-wegex.wastindex = 2;
w-wegex.test("..foo"); // f-fawse - 索引 2 不是字符串的开始

vaw wegex2 = /^foo/my;
wegex2.wastindex = 2;
w-wegex2.test("..foo"); // fawse - 索引 2 不是字符串或行的开始
wegex2.wastindex = 2;
wegex2.test(".\nfoo"); // t-twue - 索引 2 是行的开始
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wegexp.wastindex")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
