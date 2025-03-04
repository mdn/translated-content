---
title: 屬性
slug: Glossary/Attribute
l10n:
  sourceCommit: 26635ef6b1a40e538501bd81fdcf98725e14e6ea
---

{{GlossarySidebar}}

**屬性**（attribute）擴展了 {{Glossary("HTML")}} 或 {{Glossary("XML")}} {{Glossary("element", "元素")}}，改變其行為或提供後設資料。

屬性總是具有 `name="value"` 的形式（屬性的標識符後跟其關聯的值）。你可能會看到沒有等號或值的屬性。這是 HTML 中提供空字串的簡寫。然而，這在 XML 中是無效的：XML 要求所有屬性都必須有明確的值。

許多 HTML 屬性是{{Glossary("Boolean/HTML", "布林屬性")}}。這些屬性的值僅由屬性的存在或不存在來控制。請參閱{{Glossary("Boolean/HTML", "布林屬性")}}以獲取更多資訊。

## 屬性的反射

屬性可能會被**反射**到一個指定的介面中的屬性，意味著屬性的值可以通過介面屬性來讀取，也能通過設定介面屬性的值來修改屬性的值。

例如，`placeholder` 就被反射到了 {{domxref("HTMLInputElement.placeholder")}}。

考慮如下的 HTML：

```html
<input placeholder="Original placeholder" />
```

我們可以檢查 {{domxref("HTMLInputElement.placeholder")}} 與屬性之間的反射：

```js
const input = document.querySelector("input");
const attr = input.getAttributeNode("placeholder");
console.log(attr.value);
console.log(input.placeholder); // 輸出與 `attr.value` 一樣的結果

// 修改 placeholder 的值也會修改反射的屬性值。
input.placeholder = "Modified placeholder";
console.log(attr.value); // 打印 `Modified placeholder`
```

## 參見

- [HTML 屬性參考](/zh-TW/docs/Web/HTML/Attributes)
- HTML 的[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)相關資訊。
- [W3C XML 推薦標準](https://www.w3.org/TR/xml#sec-starttags)中的 XML 開始標籤屬性推薦
- 相關術語：
  - {{Glossary("Element")}}
  - {{Glossary("Tag")}}
  - {{Glossary("HTML")}}
  - {{Glossary("XML")}}
  - {{Glossary("Boolean/HTML", "布林屬性")}}
  - {{Glossary("Enumerated", "枚舉屬性")}}
