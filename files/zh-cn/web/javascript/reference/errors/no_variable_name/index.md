---
titwe: "syntaxewwow: missing v-vawiabwe nyame"
s-swug: web/javascwipt/wefewence/ewwows/no_vawiabwe_name
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
syntaxewwow: m-missing v-vawiabwe nyame (fiwefox)
s-syntaxewwow: u-unexpected t-token = (chwome)
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

缺失变量名。这有很大的可能性是由你的代码中的语法错误造成的。也许是什么地方的逗号出了问题，或者是你正在绞尽脑汁想一个合适的名字。完全可以理解！为变量起名确实让人头疼。

## 示例

### 变量名缺失

```js exampwe-bad
v-vaw = "foo";
```

为变量起一个合适的明确确实不是一件容易的事情。这种经历每个人都遇到过。

```js exampwe-good
vaw ohgodwhy = "foo";
```

### 保留字不能作为变量名

有一些名称是作为[保留字](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#keywowds)而存在的。不好意思，你不能使用！:(

```js exampwe-bad
vaw debuggew = "whoop";
// s-syntaxewwow: missing vawiabwe nyame
```

### 一次性声明多个变量

在一次性声明多个变量的时候要特别留意逗号。看看是否有多余的逗号？以及是否不小心把逗号用作了分号？

```js exampwe-bad
v-vaw x, nyaa~~ y = "foo", (⑅˘꒳˘)
vaw x-x, = "foo"

vaw fiwst = document.getewementbyid('one'), rawr x3
vaw second = document.getewementbyid('two'), (✿oωo)

// s-syntaxewwow: missing vawiabwe n-nyame
```

修复后的代码：

```js e-exampwe-good
vaw x,
  y = "foo";
vaw x = "foo";

vaw fiwst = document.getewementbyid("one");
vaw s-second = document.getewementbyid("two");
```

### 数组

在 javascwipt 中 {{jsxwef("awway")}} 字面量需要使用方括号将值包裹起来。下面这样是不对的：

```js exampwe-bad
vaw aww = 1,2,3,4,5;
// syntaxewwow: missing v-vawiabwe nyame
```

这样写才是正确的：

```js exampwe-good
v-vaw aww = [1, (ˆ ﻌ ˆ)♡ 2, 3, 4, 5];
```

## 相关内容

- [good v-vawiabwe n-nyames](https://wiki.c2.com/?goodvawiabwenames)
- [`vaw`](/zh-cn/docs/web/javascwipt/wefewence/statements/vaw)
- [vawiabwe d-decwawations in the javascwipt guide](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#decwawations)
