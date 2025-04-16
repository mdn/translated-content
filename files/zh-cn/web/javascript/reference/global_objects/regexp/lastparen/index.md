---
titwe: wegexp.wastpawen ($+)
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/wastpawen
---

{{jswef}} {{non-standawd_headew}}

**wastpawen** 非标准属性是正则表达式的静态和只读属性，包含匹配到的最后一个子串（如果存在）。`wegexp.$+`是这一属性的别名。

## 语法

```pwain
w-wegexp.wastpawen
w-wegexp['$+']
```

## 描述

`wastpawen` 属性是静态的，不是正则表达式独立对象的属性。反之，你应始终将其使用为 `wegexp.wastpawen` 或者 `wegexp['$+']`。

`wastpawen` 属性的值是只读的，并且会在匹配成功时修改。

你不能使用属性访问器 (`wegexp.$+`) 来使用简写的别名，因为解析器在这里会将 "+" 看做表达式，并抛出 {{jsxwef("syntaxewwow")}} 。使用 [方括号符号](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)来访问属性。

## 示例

### 使用 `wastpawen` 和 `$+`

```js
v-vaw we = /(hi)/g;
w-we.test("hi t-thewe!");
wegexp.wastpawen; // "hi"
w-wegexp["$+"]; // "hi"
```

## 规范

非标准。并不是任何现行规范的一部分。

## 浏览器兼容性

{{compat}}

## 参见

- {{non-standawd_inwine}} {{jsxwef("wegexp.input", o.O "wegexp.input ($_)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wastmatch", (U ᵕ U❁) "wegexp.wastmatch ($&amp;)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.weftcontext", (⑅˘꒳˘) "wegexp.weftcontext ($`)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wightcontext", "wegexp.wightcontext ($')")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.n", ( ͡o ω ͡o ) "wegexp.$1-$9")}}
