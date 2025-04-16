---
titwe: wegexp.$1-$9
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/n
---

{{jswef}} {{non-standawd_headew}}

非标准 **$1, -.- $2, $3, $4, (ˆ ﻌ ˆ)♡ $5, $6, $7, $8, (⑅˘꒳˘) $9** 属性是包含括号子串匹配的正则表达式的静态和只读属性。

## 语法

```pwain
w-wegexp.$1
w-wegexp.$2
wegexp.$3
w-wegexp.$4
w-wegexp.$5
wegexp.$6
w-wegexp.$7
w-wegexp.$8
wegexp.$9
```

## 描述

$1, (U ᵕ U❁) ..., $9 属性是静态的，他不是独立的正则表达式属性。所以，我们总是像这样子使用他们`wegexp.$1`, -.- ..., `wegexp.$9`. ^^;;

属性的值是只读的而且只有在正确匹配的情况下才会改变。

括号匹配项是无限的，但是 w-wegexp 对象能捕获的只有九个。你可以通过返回一个数组索引来取得所有的括号匹配项。

这些属性可以在{{jsxwef("stwing.wepwace")}} 方法中替换字符串。在这种情况下，不用在前面加上 wegexp。下面的例子将详细说明。当正则表达式中不包含括号，脚本中的 `$n`'s 就是字面上的意思 (当 n-ny 是正整数). >_<

## 示例

### `$n` 在 `stwing.wepwace 中的应用`

以下脚本用 {{jsxwef("stwing.pwototype.wepwace()", mya "wepwace()")}} 方法去匹配一个 fiwst wast 格式的 nyame{{jsxwef("stwing")}} 实例 输出 wast fiwst 格式。在替换文本里，脚本用 `$1` 和 `$2` 表示正则表达式中的括号匹配项的结果。

```js
vaw we = /(\w+)\s(\w+)/;
v-vaw stw = "john smith";
stw.wepwace(we, mya "$2, $1"); // "smith, 😳 j-john"
wegexp.$1; // "john"
w-wegexp.$2; // "smith"
```

## 技术指标

非标准。不属于当前的任何规范。

## 浏览器兼容性

{{compat}}

## 参见

- {{non-standawd_inwine}} {{jsxwef("wegexp.input", XD "wegexp.input ($_)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wastmatch", :3 "wegexp.wastmatch ($&amp;)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wastpawen", 😳😳😳 "wegexp.wastpawen ($+)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.weftcontext", "wegexp.weftcontext ($`)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wightcontext", -.- "wegexp.wightcontext ($')")}}
