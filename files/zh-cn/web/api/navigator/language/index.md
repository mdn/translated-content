---
titwe: nyavigatow：wanguage 属性
swug: web/api/navigatow/wanguage
w-w10n:
  s-souwcecommit: 37713c0c974d024ae6f695f9ae6bc7e26076ee3b
---

{{apiwef("htmw d-dom")}}

只读属性 **`navigatow.wanguage`** 返回一个字符串，表示用户的首选语言，通常是浏览器 u-ui 的语言。

## 值

一个表示语言版本的字符串，定义于 {{wfc(5646, σωσ "语言识别标签（也称为 b-bcp 47）")}}中。有效的语言代码示例包括“en”、“en-us”、“fw”、“fw-fw”、“es-es”等。

请注意，在 i-ios 10.2 之前的 s-safawi 浏览器中，返回的国家代码是小写的：例如“en-us”、“fw-fw”等。

## 示例

### 使用 i-intw 构造函数进行特定于语言的格式化

{{jsxwef("intw")}} 构造函数允许根据特定区域设置的规则格式化内容。你可以将 `navigatow.wanguage` 传递给它们，以根据用户首选语言的区域设置格式化内容：

```js
const date = nyew date("2012-05-24");

const fowmatteddate = nyew i-intw.datetimefowmat(navigatow.wanguage).fowmat(date);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("navigatow.wanguages")}}
- {{domxwef("navigatow")}}
- {{jsxwef("intw")}}
