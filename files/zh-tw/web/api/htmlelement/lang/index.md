---
title: HTMLElement：lang 屬性
short-title: lang
slug: Web/API/HTMLElement/lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLElement")}} 介面的 **`lang`** 屬性以 {{glossary("BCP 47 language tag", "BCP 47 語言標籤")}}的形式，表示元素屬性值與文字內容的基礎語言。它反映了元素的 [`lang`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/lang) 屬性；`xml:lang` 屬性不影響此屬性。

注意，如果未指定 `lang` 屬性，元素本身仍可能從其父元素繼承語言。然而，該繼承的語言不會反映在此屬性的值中。

## 值

一個字串。常見的範例包括代表英文的「en」、代表日文的「ja」、代表西班牙文的「es」等等。如果未指定，則值為空字串。

## 範例

```js
// 此片段比較基礎語言，並
// 根據語言重新導向至另一個 URL
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
