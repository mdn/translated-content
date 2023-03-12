---
title: '<picture>: The Picture element'
slug: Web/HTML/Element/picture
---

{{HTMLSidebar}}

**HTML `<picture>` 元素** 包含了零或零以上個 {{HTMLElement("source")}} 元素以及一個 {{HTMLElement("img")}} 元素，以為不同顯示器/裝置提供同張圖片的不同版本。

瀏覽器將會考慮每個 `<source>` 元素，並且在其中選出最適當的選項。如果沒有找到最適當的選項——或是瀏覽器不支援 `<picture>` 元素——則 `<img>` 屬性的 URL 會被選擇。被選擇的圖片將會在 `<img>` 元素存在的位置顯示。

{{EmbedInteractiveExample("pages/tabbed/picture.html", "tabbed-standard")}}

為了決定載入哪一個 URL，{{Glossary("user agent")}} 會檢視每一個 `<source>` 的 {{htmlattrxref("srcset", "source")}}、{{htmlattrxref("media", "source")}} 以及 {{htmlattrxref("type", "source")}} 屬性，以選出最適合當前版面以及顯示裝置支援度的圖片。

`<img>` 有兩個作用：

1. 它描述了該圖片的尺寸等屬性以及呈現（presentation）。
2. 在所有列出的 `<source>` 都不能提供可用圖片的情況下的 fallback。

`<picture>` 的常見使用案例：

- **圖像方向（art direction）：** 根據不同的 `media` 狀況裁切或調整圖片（例如在較小的螢幕上，載入原本有複雜細節圖片的較簡單版本圖片）
- **提供替代的圖片格式：**以應對某些特定格式不被支援的情況
- **節省頻寬並加速頁面載入速度：**透過針對觀看者的裝置載入最適當的圖片做到這點

如果是要為高 DPI （Retina）螢幕提供圖片的高解析度版本時，可改在使用 `<img>` 上使用 {{htmlattrxref("srcset", "img")}} 屬性。這會讓瀏覽器在 data-saving 模式選擇低解析度的版本，這樣你就不用特地指定 `media` 條件。

| [Content categories](/zh-TW/docs/Web/HTML/Content_categories) | [Flow content](/zh-TW/docs/Web/HTML/Content_categories#Flow_content), phrasing content, embedded content                                                             |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                             | Zero or more {{HTMLElement("source")}} elements, followed by one {{HTMLElement("img")}} element, optionally intermixed with script-supporting elements. |
| Tag omission                                                  | {{no_tag_omission}}                                                                                                                                             |
| Permitted parents                                             | Any element that allows embedded content.                                                                                                                            |
| Implicit ARIA role                                            | [No corresponding role](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)                                                                                  |
| Permitted ARIA roles                                          | No `role` permitted                                                                                                                                                  |
| DOM interface                                                 | {{domxref("HTMLPictureElement")}}                                                                                                                         |

## 屬性

此元素只包含 [global attributes](/zh-TW/docs/Web/HTML/Global_attributes).

## 用法筆記

你可以使用 {{cssxref("object-position")}} 屬性來在元素的 frame 內調整圖片位置，也可以用 {{cssxref("object-fit")}} 屬性控制圖片在 frame 內如何調整大小。

> **備註：** 在子元素 `<img>` 上使用這些屬性，而不是 `<picture>` 元素.

## 範例

以下例子示範如何根據 {{HTMLElement("source")}} 元素不同的屬性設定選擇 `<picture>` 中的不同圖片。

### media 屬性

`media` 屬性指定特定的媒體類型（跟 media query 很像），讓 user agent 可對每個 {{HTMLElement("source")}} 元素作出判斷。

如果 {{HTMLElement("source")}} 的指定媒體類型被判斷為 `false` ，則瀏覽器會跳過它，並繼續判斷 `<picture>` 中的下個元素。

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
  <img src="mdn-logo-narrow.png" alt="MDN">
</picture>
```

### srcset 屬性

[`srcset`](/zh-TW/docs/Web/HTML/Element/source#srcset) 屬性用來提供根據大小區分的可能圖片清單。

它是由逗號分隔的圖片描述句清單組成的。每一個圖片描述句是由該圖片的 URL 以及以下描述組成（擇一）：

- 寬度，結尾為 `w` (例如 `300w`)；
  _或是_
- 像素密度，結尾為 `x` (例如 `2x`)，以為高 DPI 螢幕提供高解析度圖片

```html
<picture>
  <source srcset="logo-768.png 768w, logo-768-1.5x.png 1.5x">
  <source srcset="logo-480.png, logo-480-2x.png 2x">
  <img src="logo-320.png" alt="logo">
</picture>
```

### type 屬性

`type` 屬性為 {{HTMLElement("source")}} 元素中 `srcset` 屬性的資源 URL 指定 [MIME type](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 。如果 user agent 不支援該 type 的話，此 {{HTMLElement("source")}} 元素會被略過。

```html
<picture>
  <source srcset="logo.webp" type="image/webp">
  <img src="logo.png" alt="logo">
</picture>
```

## 規格

{{Specifications}}

## 瀏覽器支援度

{{Compat}}

## 相關資源

- {{HTMLElement("img")}} 元素
- {{HTMLElement("source")}} 元素
- 在圖片的 frame 中調整其大小與位置： {{cssxref("object-position")}} and {{cssxref("object-fit")}}
- [圖片檔案類型與格式指南](/zh-TW/docs/Web/Media/Formats/Image_types)
