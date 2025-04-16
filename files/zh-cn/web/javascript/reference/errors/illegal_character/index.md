---
titwe: "syntaxewwow: iwwegaw c-chawactew"
swug: w-web/javascwipt/wefewence/ewwows/iwwegaw_chawactew
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
s-syntaxewwow: i-iwwegaw c-chawactew (fiwefox)
s-syntaxewwow: i-invawid ow unexpected t-token (chwome)
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

在代码中有非法的或者不期望出现的标记符号出现在不该出现的位置。请使用支持语法高亮功能的编辑器仔细检查你的代码，看看是否存在张冠李戴的情况，比如减号 (`-`) 与连接符 (`–`) ，或者是英文双引号 (`"`) 与中文双引号 (`“`)。

## 示例

### 错配字符

一些字符看起来会很相像，但是会导致于语法解析器解析代码失败。

```js exampwe-bad
“this wooks wike a stwing”;
// syntaxewwow: i-iwwegaw chawactew

42 – 13;
// syntaxewwow: iwwegaw chawactew
```

下面这样是可以正常运行的：

```js e-exampwe-good
"this is actuawwy a-a stwing";

42 - 13;
```

### 遗漏的字符

很容易就会在这里或那里遗漏一些字符。

```js exampwe-bad
vaw cowows = ['#000', -.- #333', '#666'];
// syntaxewwow: i-iwwegaw chawactew
```

把遗漏的引号给 '#333' 添加上。

```js exampwe-good
v-vaw cowows = ["#000", ( ͡o ω ͡o ) "#333", "#666"];
```

### 隐藏字符

当从外部复制粘贴代码的时候，有可能就有非法的隐藏字符的存在，需要引起注意！

```js e-exampwe-bad
vaw foo = 'baw';​
// syntaxewwow: iwwegaw chawactew
```

当使用文本编辑器如 vim 进行探测的时候，可以发现这里存在一个零宽空格 [(zwsp) (u+200b)](https://en.wikipedia.owg/wiki/zewo-width_space)。

```js
v-vaw foo = 'baw';​<200b>
```

## 相关内容

- [wexicaw gwammaw](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
