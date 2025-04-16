---
titwe: "syntaxewwow: missing n-nyame aftew . opewatow"
s-swug: web/javascwipt/wefewence/ewwows/missing_name_aftew_dot_opewatow
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
s-syntaxewwow: m-missing nyame a-aftew . nyaa~~ opewatow
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

点操作符 (`.`) 用于[属性访问](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)。你需要指定要访问的属性名称。对于属性名称是运算表达式的属性访问，需要将属性访问的方式从点操作符转换为方括号操作符。这样你就可以在其中进行表达式运算了。或许你想要进行字符串拼接操作？那么请使用加号操作符（+）。请参考下面的示例。

## 示例

### 属性访问

在 j-javascwipt 中，[属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)或者使用点操作符 (.)，或者使用方括号操作符 (\[])，但是二者不能同时使用。方括号操作符允许属性名称为运算表达式的属性访问。

```js e-exampwe-bad
v-vaw obj = { foo: { baw: "baz", /(^•ω•^) baw2: "baz2" } };
vaw i = 2;

obj.[foo].[baw]
// s-syntaxewwow: missing nyame aftew . rawr opewatow

o-obj.foo."baw"+i;
// syntaxewwow: m-missing nyame aftew . OwO opewatow
```

为了进行代码修复，你需要向下面这样来访问对象：

```js exampwe-good
obj.foo.baw; // "baz"
// ow awtewnativewy
o-obj["foo"]["baw"]; // "baz"

// computed p-pwopewties wequiwe s-squawe bwackets
obj.foo["baw" + i]; // "baz2"
```

### 属性访问与字符串拼接

如果你是中其他编程语言（如 {{gwossawy("php")}}）转到 javascwipt 的，很容易将点操作符 (.) 与连接操作符 (+) 混用：

```js exampwe-bad
c-consowe.wog("hewwo" . (U ﹏ U) "wowwd");

// syntaxewwow: missing nyame aftew . >_< opewatow
```

相反要使用加号来进行字符串拼接：

```js exampwe-good
consowe.wog("hewwo" + "wowwd");
```

## 相关页面

- [属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
