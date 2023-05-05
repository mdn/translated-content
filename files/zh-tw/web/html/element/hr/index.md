---
title: <hr>
slug: Web/HTML/Element/hr
---

{{HTMLSidebar}}

**HTML** 的** `<hr>` 元素**代表在段落層級的焦點轉換（如故事中的場景轉換或某個小節裡的主題移轉）。在之前的 HTML 版本，它代表著一條水平標線。在視覺瀏覽器裡，它現在可能還是以水平標線的型式呈現；但它已經被重新定義為一個語義上的用詞，而不是呈現上的。

| [內容類型](/zh-TW/docs/HTML/Content_categories) | [流內容](/zh-TW/docs/HTML/Content_categories#流內容（Flow_content）).                |
| ----------------------------------------------- | ------------------------------------------------------------------------------------ |
| Permitted content                               | 否。這是個 {{Glossary("empty element")}}.                                 |
| 標籤省略                                        | 一定要有起始標籤、同時絕不能有結束標籤                                               |
| Permitted parent elements                       | 任何允許[流內容](/zh-TW/docs/HTML/Content_categories#流內容（Flow_content）)的元素。 |
| DOM interface                                   | {{domxref("HTMLHRElement")}}                                                 |

## 屬性

這個元素支持[全域屬性](/zh-TW/docs/HTML/Global_attributes)。

- `align` {{deprecated_inline}}
  - : 設罝頁面上標線的對齊方式。如果沒有指定，預設值是：`left。`
- `color` {{Non-standard_inline}}
  - : 用色彩名或 16 進位值設罝標線的顏色。
- `noshade` {{deprecated_inline}}
  - : 設置這個標線沒有陰影。
- `size` {{deprecated_inline}}
  - : 設置標線的高度，單位是 px。.
- `width` {{deprecated_inline}}
  - : 設置標線的長度，單位是 px；或者也可以用頁面寛度的百分比 (%)表示。

## 範例

```html
<p>This is the first paragraph of text.
This is the first paragraph of text.
This is the first paragraph of text.
This is the first paragraph of text.

<hr>

<p>This is second paragraph of text.
This is second paragraph of text.
This is second paragraph of text.
This is second paragraph of text.
```

上面的 HTML 會輸出：

This is the first paragraph of text. This is the first paragraph of text. This is the first paragraph of text. This is the first paragraph of text.

---

This is second paragraph of text. This is second paragraph of text. This is second paragraph of text. This is second paragraph of text.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參照 （see also)

- {{HTMLElement('p')}}
