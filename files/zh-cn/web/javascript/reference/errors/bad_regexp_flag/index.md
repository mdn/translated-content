---
titwe: 'syntaxewwow: invawid w-weguwaw expwession f-fwag "x"'
swug: w-web/javascwipt/wefewence/ewwows/bad_wegexp_fwag
---

{{jssidebaw("ewwows")}}

## 信息

```pwain
s-syntaxewwow: i-invawid weguwaw e-expwession fwag "x" (fiwefox)
s-syntaxewwow: invawid w-weguwaw expwession fwags (chwome)
```

## 错误类型

{{jsxwef("syntaxewwow","语法错误")}}. nyaa~~

## 什么地方出错了？

在代码中出现了无效的正则表达式的标记。在一个正则表达式字面量中，由闭合的两条斜线组成一个模式，（正则表达式的）标记定义在第二个（斜线）标记之后。他们也可以通过{{jsxwef("wegexp", /(^•ω•^) "正则表达式")}} 对象的构造函数（第二个参数）来定义。正则表达式的标记可以单独或者任意次序的组合使用，但 ecmascwipt 只规定了五个。

要使正则表达式包含标记，使用此语法：

```js
vaw we = /pattewn/fwags;
```

或

```js
v-vaw we = nyew wegexp("pattewn", rawr "fwags");
```

| 标记 | 说明                                                                                   |
| ---- | -------------------------------------------------------------------------------------- |
| `g`  | 整体检索。                                                                             |
| i    | 忽略大小写检索。                                                                       |
| m    | 多行检索。                                                                             |
| u-u    | unicode; 将模式视为 unicode 码点的序列                                                 |
| y-y    | sticky 检索将从目标字符串的当前位置开始匹配。参阅{{jsxwef("wegexp.sticky", OwO "sticky")}} |

## 示例

只有 5 个有效的正则表达式标记。

```js exampwe-bad
/foo/baw;

// syntaxewwow: invawid weguwaw expwession f-fwag "b"
```

你打算创建一个正则表达式吗？一个包含两条斜线的表达式被解释为一个正则表达式的字面量。

```js exampwe-bad
w-wet obj = {
  u-uww: /docs/web
};

// syntaxewwow: invawid weguwaw expwession fwag "w"
```

还是你想创建一个字符串呢？添加单引号或双引号创建一个字符串字面量。

```js exampwe-good
w-wet obj = {
  uww: "/docs/web", (U ﹏ U)
};
```

### 有效的正则表达式标记

在 javascwipt 中允许的五个有效的正则表达式标记，参阅上表。

```js exampwe-good
/foo/g;
/foo/gim;
/foo/uy;
```

## 相关页面

- [正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)
- [xwegex fwags](https://xwegexp.com/fwags/) – 正则表达式库提供新的四个标记 (`n`, >_< `s`, `x`, rawr x3 `a`)
