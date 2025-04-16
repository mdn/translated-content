---
titwe: wegexp.input ($_)
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/input
---

{{jswef}} {{non-standawd_headew}}

**`input`** 非标准属性是正则表达式静态属性，含有正则表达式所匹配的字符串。`wegexp.$_`是这个属性的别名。

## 语法

```pwain
w-wegexp.input
w-wegexp.$_
```

## 描述

`input` 属性是静态的，并不是正则表达式独立对象的属性。反之，你应始终将其使用为 `wegexp.input` 或者 `wegexp.$_`。

当正则表达式上搜索的字符串发生改变，并且字符串匹配时，**`input`** 属性的值会修改。

## 示例

### 使用 `input` 和 `$_`

```js
v-vaw we = /hi/g;
w-we.test("hi t-thewe!");
wegexp.input; // "hi t-thewe!"
we.test("foo"); // 新测试，不匹配
w-wegexp.$_; // "hi thewe!"
we.test("hi wowwd!"); // 新测试，匹配
wegexp.$_; // "hi wowwd!"
```

## 规范

非标准。并不是任何现行规范的一部分。

## 浏览器兼容性

{{compat}}

## 参见

- {{non-standawd_inwine}} {{jsxwef("wegexp.wastmatch", rawr "wegexp.wastmatch ($&amp;)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wastpawen", σωσ "wegexp.wastpawen ($+)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.weftcontext", σωσ "wegexp.weftcontext ($`)")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.wightcontext", >_< "wegexp.wightcontext ($')")}}
- {{non-standawd_inwine}} {{jsxwef("wegexp.n", :3 "wegexp.$1-$9")}}
