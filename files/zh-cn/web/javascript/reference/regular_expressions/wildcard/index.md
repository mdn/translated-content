---
title: 通配符：.
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**通配符**匹配除了行终止符以外的所有字符。如果设置了 `s` 标志，则也会一同匹配行终止符。

## 语法

```regex
.
```

## 描述

`.` 匹配除[行终止符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#行终止符)之外的任意字符。若设置 [`s`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) 标志，`.` 也会匹配行终止符。

`.` 匹配的确切字符集取决于正则表达式是否启用 [Unicode 感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)。若启用 Unicode 感知模式，`.` 匹配任意 Unicode 码位；否则匹配任意 UTF-16 码元。例如：

```js
/../.test("😄"); // true；以代理对形式匹配两个 UTF-16 码元
/../u.test("😄"); // false；输入仅有一个 Unicode 字符
```

## 示例

### 与量词配合使用

通配符常与[量词](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)配合使用，用于匹配任意字符序列，直至找到下一个目标字符。例如，以下示例提取 Markdown 页面中 `# Title` 格式的标题：

```js
function parseTitle(entry) {
  // 使用多行模式，因为标题可能不在文件开头。
  // 注意 m 标志不会使 . 匹配行结束符，因此标题必须位于单行内。
  // 返回第一个捕获组匹配的文本。
  return /^#[ \t]+(.+)$/m.exec(entry)?.[1];
}

parseTitle("# 你好世界"); // "你好世界"
parseTitle("## 子章节"); // undefined
parseTitle(`
---
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
---

# 通配符：.

**通配符**匹配除了行终止符的所有字符。
`); // " 通配符：."
```

### 匹配代码块内容

以下示例匹配 Markdown 中由三个反引号包围的代码块内容。它使用 `s` 标志使 `.` 匹配行终止符，因为代码块内容可能跨越多行：

````js
function parseCodeBlock(entry) {
  return /^```.*?^(.+?)\n```/ms.exec(entry)?.[1];
}

parseCodeBlock(`
\`\`\`js
console.log("你好世界");
\`\`\`
`); // "console.log("你好世界");"

parseCodeBlock(`
\`try...catch\` 语句必须将代码块用大括号括起来。

\`\`\`js example-bad
try
  doSomething();
catch (e)
  console.log(e);
\`\`\`
`); // "try\n  doSomething();\ncatch (e)\n  console.log(e);"
````

> [!WARNING]
> 这些示例仅用于演示。若需解析 Markdown，请使用专用的 Markdown 解析器，因为存在许多需要考虑的边界情况。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)指南
- [正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions)
- [字符类：`[...]`、`[^...]`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [字符类转义：`\d`、`\D`、`\w`、`\W`、`\s`、`\S`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
