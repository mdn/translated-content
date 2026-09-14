---
title: 单词边界断言：\b、\B
slug: Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**单词边界断言**用于检查字符串中的当前位置是否为单词边界。单词边界是指下一个字符是单词字符而前一个字符不是单词字符，或者反之亦然。

## 语法

```regex
\b
\B
```

## 描述

`\b` 断言字符串中的当前位置处于单词边界。`\B` 则否定该断言：它断言当前位置不在单词边界。两者都是*断言*，因此与其他[字符转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)或[字符类转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)不同，`\b` 和 `\B` 不会消耗任何字符。

单词字符包括：

- 字母（A–Z、a–z）、数字（0–9）和下划线（\_）。
- 如果正则表达式处于 [Unicode 感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)，且 [`i`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) 标志已设置，则其他 Unicode 字符通过[大小写折叠](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt)规范化为上述字符之一。

单词字符也可通过 `\w` [字符类转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)进行匹配。

超出范围的输入位置被视为非单词字符。例如，以下情况均可成功匹配：

```js
/\ba/.exec("abc");
/c\b/.exec("abc");

/\B /.exec(" abc");
/ \B/.exec("abc ");
```

## 示例

### 检测单词

以下示例检测某个字符串是否包含“thanks”或“thank you”：

```js
function hasThanks(str) {
  return /\b(thanks|thank you)\b/i.test(str);
}

hasThanks("Thanks! You helped me a lot."); // true
hasThanks("Just want to say thank you for all your work."); // true
hasThanks("Thanksgiving is around the corner."); // false
```

> [!WARNING]
> 并非所有语言都有明确的词界。如果你处理的是汉语或泰语这类没有空格分隔符的语言，请改用更高级的库（如 {{jsxref("Intl.Segmenter")}}）来查找单词。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [断言](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)指南
- [正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions)
- [输入边界断言：`^`、`$`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [前向断言：`(?=...)`、`(?!...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [后向断言：`(?<=...)`、`(?<!...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [字符转义：`\n`、`\u{...}`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
