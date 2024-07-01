---
title: "SyntaxError: unterminated string literal"
slug: Web/JavaScript/Reference/Errors/Unterminated_string_literal
---

{{jsSidebar("Errors")}}

## 信息

```plain
SyntaxError: unterminated string literal
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

某处 js 解析字符串出错。字符串必须使用单引号或双引号来正确的关闭。在 Javascript 中使用单引号的字符和双引号的字符串是没有区别的。字符串用[转义字符](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#转义序列)不是单引号就是双引。为解决这个错误，检查一下：

- 你字符串的引号是否成对。
- 你是否正确使用了转义序列
- 你的字符串是否在多行中解析正常。

## 示例

### 多行字符串

在 javascript 中你不能够直接使用多行字符串赋值给一个变量。如下：

```js example-bad
var longString = "This is a very long string which needs
                  to wrap across multiple lines because
                  otherwise my code is unreadable.";
// SyntaxError: unterminated string literal
```

可以使用["+"运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition)，反斜杠，或[模板字符串](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)来代替多行。“+”运算符的使用如下：

```js example-good
var longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

或者你可以使用“\”在每一行的末尾，以表示该字符串在下一行继续。要确保“\“之后没有没有空格和任何其他的字符，及缩进，否则该“\”将不会起作用。使用方法如下：

```js example-good
var longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

另一种方式是使用 ES 2015 的环境所支持[模板字符串](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)（反引号\` \`）。

```js example-good
var longString = `This is a very long string which needs
                  to wrap across multiple lines because
                  otherwise my code is unreadable.`;
```

## 相关

- {{jsxref("String")}}
- [模板字符串](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)
