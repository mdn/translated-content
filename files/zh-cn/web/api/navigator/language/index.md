---
title: Navigator.language
slug: Web/API/Navigator/language
---

{{APIRef("HTML DOM")}}

**`Navigator.language`** 为只读属性，返回一个表示用户偏好语言（通常是浏览器界面语言）的字符串。

## 语法

```js
const lang = navigator.language;
```

### 值

一个 {{domxref("DOMString")}}。`lang`存储了一个在 [BCP 47](https://tools.ietf.org/rfc/bcp/bcp47.txt) 中定义的语言版本。一些有效的语言版本代码示例包括： “en”、“en-US”、“fr”、“fr-FR”、“es-ES”等。

请注意，在 iOS 10.2 之前的 Safari 中，返回的语言版本代码是小写的： “en-us”、“fr-fr”等。

## 示例

```js
if (/^en\b/.test(navigator.language)) {
  doLangSelect(window.navigator.language);
}
```

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多参见

- {{domxref("navigator.languages")}}
- {{domxref("navigator")}}
