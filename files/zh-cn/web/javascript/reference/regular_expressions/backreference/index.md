---
title: 反向引用：\1、\2
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**反向引用**指代先前某个[捕获组](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)的子匹配，其匹配的文本与该捕获组相同。对于[具名捕获组](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)，可能更倾向于使用[具名反向引用](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)语法。

## 语法

```regex
\N
```

> [!NOTE]
> `N` 不是字面字符。

### 参数

- `N`
  - : 表示捕获组的编号的正整数。

## 描述

反向引用是一种匹配捕获组先前匹配过的相同文本的方法。捕获组的编号从 1 开始，因此第一个捕获组的结果可用 `\1` 引用，第二个可用 `\2`，依此类推。`\0` 是 NUL 字符的[字符转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)。

在[不区分大小写](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)的匹配中，反向引用可能匹配与原始文本大小写不同的文本。

```js
/(b)\1/i.test("bB"); // true
```

反向引用必须指向一个已存在的捕获组。如果指定的编号大于捕获组的总数，则会引发语法错误。

```js-nolint example-bad
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

在[非 Unicode 感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)下，无效的反向引用会转换为[旧式的八进制转义序列](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#转义序列)。这是一种[为兼容 Web 而保留的已弃用语法](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)，不应依赖此特性。

```js
/(a)\2/.test("a\x02"); // true
```

如果被引用的捕获组未匹配（例如，因为它属于[析取操作](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)中的未匹配选项），或者该组尚未匹配（例如，因为它位于反向引用右侧），则反向引用始终成功（如同匹配了空字符串）。

```js
/(?:a|(b))\1c/.test("ac"); // true
/\1(a)/.test("a"); // true
```

## 示例

### 配对引号

以下函数用于匹配字符串中的 `title='xxx'` 和 `title="xxx"` 模式。为了确保引号匹配，我们使用反向引用来引用第一个引号。访问第二个捕获组（`[2]`）将返回位于匹配引号之间的字符串：

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

### 匹配重复单词

以下函数用于查找字符串中的重复单词（通常是拼写错误）。请注意，它使用了 `\w` [字符类转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)，该转义仅匹配英文字母，而不匹配带重音的字母或其他字母表。若需更通用的匹配，建议先通过空格将字符串[拆分](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)，然后遍历生成的数组。

```js
function findDuplicates(text) {
  return text.match(/\b(\w+)\s+\1\b/i)?.[1];
}

findDuplicates("foo foo bar"); // 'foo'
findDuplicates("foo bar foo"); // undefined
findDuplicates("Hello hello"); // 'Hello'
findDuplicates("Hello hellos"); // undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [组和反向引用](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)指南
- [正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions)
- [捕获组：`(...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [具名捕获组：`(?<name>...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [具名反向引用：`\k<name>`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
