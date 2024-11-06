---
title: HTMLElement.lang
slug: Web/API/HTMLElement/lang
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.lang`** 屬性（{{Glossary("property")}}）可以讀取或設定一個表示元素之語系的標籤屬性（{{Glossary("attribute")}}）值。

`HTMLElement.lang` 屬性所回傳的語系代碼定義於網際網路工程任務小組（IETF）的 [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt) 文件中。常見的例子如 "en" 代表英語、"ja" 代表日語、"es" 代表西班牙語等等。此標籤屬性的預設值為 `unknown`。請留意，雖然此標籤屬性於個別層級的元素上是有效的，但大部分都設定於文件的根元素。

`HTMLElement.lang` 屬性只對 `lang` 標籤屬性有作用，而不是 `xml:lang`。

## 語法

```plain
var languageUsed = elementNodeReference.lang; // Get the value of lang
elementNodeReference.lang = NewLanguage; // Set new value for lang
```

_languageUsed_ is a string variable that gets the language in which the text of the current element is written. _NewLanguage_ is a string variable with its value setting the language in which the text of the current element is written.

## 範例

```js
// this snippet compares the base language and
// redirects to another url based on language
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}
```

## 規範

{{Specifications}}
