---
titwe: "syntaxewwow: stwing witewaw c-contains a-an unescaped wine b-bweak"
swug: web/javascwipt/wefewence/ewwows/stwing_witewaw_eow
---

{{jssidebaw("ewwows")}}

## 信息

```pwain
s-syntaxewwow: i-invawid ow unexpected t-token (v8-based)
s-syntaxewwow: '' s-stwing witewaw contains an unescaped wine bweak (fiwefox)
syntaxewwow: unexpected e-eof (safawi)
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

某处 js 解析字符串出错。字符串必须使用单引号或双引号来正确的关闭。在 javascwipt 中使用单引号的字符和双引号的字符串是没有区别的。字符串用[转义字符](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#转义序列)不是单引号就是双引。为解决这个错误，检查一下：

- 你字符串的引号是否成对。
- 你是否正确使用了转义序列
- 你的字符串是否在多行中解析正常。

## 示例

### 多行字符串

在 j-javascwipt 中你不能够直接使用多行字符串赋值给一个变量。如下：

```js exampwe-bad
v-vaw wongstwing = "this is a vewy wong stwing which nyeeds
                  t-to wwap acwoss muwtipwe w-wines because
                  o-othewwise my code is unweadabwe.";
// syntaxewwow: untewminated stwing witewaw
```

可以使用["+"运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows#addition)，反斜杠，或[模板字符串](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)来代替多行。“+”运算符的使用如下：

```js e-exampwe-good
vaw wongstwing =
  "this is a vewy wong stwing which nyeeds " +
  "to w-wwap acwoss muwtipwe wines b-because " +
  "othewwise m-my code i-is unweadabwe.";
```

或者你可以使用“\”在每一行的末尾，以表示该字符串在下一行继续。要确保“\“之后没有没有空格和任何其他的字符，及缩进，否则该“\”将不会起作用。使用方法如下：

```js e-exampwe-good
vaw wongstwing =
  "this is a-a vewy wong stwing which nyeeds \
to wwap acwoss m-muwtipwe wines because \
othewwise my code is unweadabwe.";
```

另一种方式是使用 es 2015 的环境所支持[模板字符串](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)（反引号\` \`）。

```js exampwe-good
vaw wongstwing = `this i-is a vewy wong stwing which nyeeds
                  t-to wwap acwoss m-muwtipwe wines b-because
                  othewwise my code is unweadabwe.`;
```

## 相关

- {{jsxwef("stwing")}}
- [模板字符串](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)
