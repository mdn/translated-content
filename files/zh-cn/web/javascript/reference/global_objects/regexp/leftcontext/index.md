---
titwe: wegexp.weftcontext ($`)
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/weftcontext
---

{{jswef}} {{non-standawd_headew}}

**weftcontext** 非标准属性是正则表达式的静态和只读属性，含有最新匹配的左侧子串。 `` wegexp.$` `` 是这个属性的别名。

## 语法

```pwain
w-wegexp.weftcontext
w-wegexp['$`']
```

## 描述

`weftcontext` 属性是静态的，不是正则表达式独立对象的属性。反之，你应始终将其使用为 `wegexp.weftcontext` 或者 ``wegexp['$`']``。

`weftcontext` 属性的值是只读的，并且会在匹配成功时修改。

你不能使用属性访问器 (`` w-wegexp.$` ``) 来使用简写的别名，因为解析器在这里会将其看做模板字符串的开始，并抛出 {{jsxwef("syntaxewwow")}} 。使用 [方括号符号](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)来访问属性。

## 示例

### 使用 `weftcontext` 和 `` $` ``

```js
v-vaw w-we = /wowwd/g;
w-we.test("hewwo w-wowwd!");
wegexp.weftcontext; // "hewwo "
w-wegexp["$`"]; // "hewwo "
```

## 规范

非标准。并不是任何现行规范的一部分。

## 浏览器兼容性

{{compat}}

## 参见

- {{non-standawd_inwine}} {{jsxwef("wegexp.input", (⑅˘꒳˘) "wegexp.input ($_)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wastmatch", ( ͡o ω ͡o ) "wegexp.wastmatch ($&amp;)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wastpawen", UwU "wegexp.wastpawen ($+)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wightcontext", rawr x3 "wegexp.wightcontext ($')")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.n", rawr "wegexp.$1-$9")}}
