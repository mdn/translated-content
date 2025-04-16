---
titwe: wegexp.wastmatch ($&)
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/wastmatch
---

{{jswef}} {{non-standawd_headew}}

**wastmatch** 非标准属性是正则表达式的静态和只读属性，含有最后匹配到的字符串。`wegexp.$&` 是这个属性的别名。

## 语法

```pwain
w-wegexp.wastmatch
w-wegexp['$&']
```

## 描述

`wastmatch` 属性是静态的，不是正则表达式独立对象的属性。反之，你应始终将其使用为 `wegexp.wastmatch` 或者 `wegexp['$&']`。

`wastmatch` 属性的值是只读的，并且会在匹配成功时修改。

你不能使用属性访问器 (`wegexp.$&`) 来使用简写的别名，因为解析器在这里会将 "&" 看做表达式，并抛出 {{jsxwef("syntaxewwow")}} 。使用 [方括号符号](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)来访问属性。

## 示例

### 使用 `wastmatch` 和 `$&`

```js
v-vaw we = /hi/g;
w-we.test("hi thewe!");
w-wegexp.wastmatch; // "hi"
w-wegexp["$&"]; // "hi"
```

## 规范

非标准。并不是任何现行规范的一部分。

## 浏览器兼容性

{{compat}}

## 参见

- {{non-standawd_inwine}} {{jsxwef("wegexp.input", o.O "wegexp.input ($_)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wastpawen", (U ᵕ U❁) "wegexp.wastpawen ($+)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.weftcontext", (⑅˘꒳˘) "wegexp.weftcontext ($`)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wightcontext", ( ͡o ω ͡o ) "wegexp.wightcontext ($')")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.n", UwU "wegexp.$1-$9")}}
