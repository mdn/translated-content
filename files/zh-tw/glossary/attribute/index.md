---
title: 標籤屬性
slug: Glossary/Attribute
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**標籤屬性** （Attribute）用於擴充 HTML、XML {{Glossary("tag")}}，可改變標籤行為或提供額外資訊。

一個標籤屬性通常的格式為 `name=value`（以屬性名稱對上屬性值）。

你可能會看到沒有等於號或者值的標籤屬性，那是一個簡寫，在 HTML 中指代空字符串，或者在 XML 中指代標籤屬性名。

```html
<input required />
<!-- 等同於 HTML⋯⋯ -->
<input required="" />
<!-- 或者 XML： -->
<input required="required" />
```

## 標籤屬性的反射

標籤屬性可能會被**反射**到一個指定的接口中的屬性，意味著標籤屬性的值可以通過接口屬性來讀取，也能通過設定接口屬性的值來修改標籤屬性的值。

例如，`placeholder` 就被反射到了 {{domxref("HTMLInputElement.placeholder")}}。

考慮如下的 HTML：

```html
<input placeholder="Original placeholder" />
```

我們可以檢查 {{domxref("HTMLInputElement.placeholder")}} 與標籤屬性之間的反射：

```js
const input = document.querySelector("input");
const attr = input.getAttributeNode("placeholder");
console.log(attr.value);
console.log(input.placeholder); // 輸出與 `attr.value` 一樣的結果

// 修改 placeholder 的值也會修改反射的標籤屬性的值。
input.placeholder = "Modified placeholder";
console.log(attr.value); // 打印 `Modified placeholder`
```

### 技術參考

- [HTML 屬性參考](/zh-TW/docs/Web/HTML/Attributes)
- HTML 的[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)相關資訊。
