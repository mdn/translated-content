---
title: <font>
slug: Web/HTML/Element/font
---

{{HTMLSidebar}}{{Deprecated_Header}}

**`<font>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於定義其內容的字型大小、顏色和字型。

> [!WARNING]
> 請勿使用此元素。請使用 CSS 的 [Font](/zh-TW/docs/Web/CSS/CSS_fonts) 為文本添加樣式。

## 屬性

與所有其他 HTML 元素一樣，此元素支援[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `color` {{Deprecated_Inline}}
  - : 此屬性使用命名顏色或以十六進制 #RRGGBB 格式指定的顏色設置文字顏色。
- `face` {{Deprecated_Inline}}
  - : 此屬性包含一個由一個或多個字型名稱組成的逗號分隔列表。在默認樣式中，文件文本將使用客戶端瀏覽器支持的第一個字型。如果在本地系統上未安裝列出的字型，則瀏覽器通常會將其默認為該系統的等寬字型或定寬字型。
- `size` {{Deprecated_Inline}}
  - : 此屬性指定字型大小，可以是數字或相對值。數字值範圍從 `1` 到 `7`，其中 `1` 是最小的，`3` 是默認值。它可以使用相對值定義，例如 `+2` 或 `-3`，表示相對於默認值 `3`。

## DOM 介面

此元素實現了 {{domxref("HTMLFontElement")}} 介面。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
