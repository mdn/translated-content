---
title: Navigator：language 属性
slug: Web/API/Navigator/language
l10n:
  sourceCommit: 37713c0c974d024ae6f695f9ae6bc7e26076ee3b
---

{{APIRef("HTML DOM")}}

只读属性 **`Navigator.language`** 返回一个字符串，表示用户的首选语言，通常是浏览器 UI 的语言。

## 值

一个表示语言版本的字符串，定义于 {{RFC(5646, "语言识别标签（也称为 BCP 47）")}}中。有效的语言代码示例包括“en”、“en-US”、“fr”、“fr-FR”、“es-ES”等。

请注意，在 iOS 10.2 之前的 Safari 浏览器中，返回的国家代码是小写的：例如“en-us”、“fr-fr”等。

## 示例

### 使用 Intl 构造函数进行特定于语言的格式化

{{jsxref("Intl")}} 构造函数允许根据特定区域设置的规则格式化内容。你可以将 `navigator.language` 传递给它们，以根据用户首选语言的区域设置格式化内容：

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("navigator.languages")}}
- {{domxref("navigator")}}
- {{jsxref("Intl")}}
