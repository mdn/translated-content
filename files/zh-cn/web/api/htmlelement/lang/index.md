---
title: HTMLElement.lang
slug: Web/API/HTMLElement/lang
---

{{ APIRef() }}

**`HTMLElement.lang`** 属性用来获取或设置元素属性值或文本内容的基语言（base language）。

该属性返回的语言代码（language code）被定义在 [RFC 1766](https://tools.ietf.org/html/rfc1766)。通常，"en" 表示英语（English）、"ja" 表示（Japanese）、"zh-cn" 表示简体中文等等。该属性的默认值未知（`unknown`）。尽管该属性可以应用在单独的元素上，但是通常在文档的根元素（html）上指定。

该属性只对 `lang` 属性（attribute）有效，不适用于 `xml:lang`。

## 语法

```plain
var languageUsed = elementNodeReference.lang; // 获取 lang 值
elementNodeReference.lang = NewLanguage; // 为 lang 设置新值
```

`languageUsed` 是一个字符串变量，可以获取当前元素的文本是用什么语言写的。`NewLanguage` 是一个字符串变量，其值用来作为当前元素的文本的语言。

## 示例

```js
// 该代码比较了基语言（base language），然后
// 重定向到了基于该语言的 url
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}
```

## 规范

{{Specifications}}
