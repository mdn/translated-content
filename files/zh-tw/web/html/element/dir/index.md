---
title: <dir>：目錄元素
slug: Web/HTML/Element/dir
---

{{HTMLSidebar}}{{Deprecated_Header}}

**`<dir>`** [HTML](/zh-TW/docs/Web/HTML) 元素被用來作為文件和/或資料夾的目錄容器，可能會由{{Glossary("user agent", "使用者代理")}}應用樣式和圖示。請不要使用這個已過時的元素；相反地，你應該使用 {{HTMLElement("ul")}} 元素來建立列表，包括文件列表。

> [!WARNING]
> 請不要使用此元素。雖然在早期的 HTML 規範中存在，但已在 HTML 4 中被棄用，並且自那時起已被完全移除。

## DOM 介面

此元素實現了 {{domxref("HTMLDirectoryElement")}} 介面。

## 屬性

像所有其他 HTML 元素一樣，此元素支援[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `compact` {{Deprecated_Inline}}
  - : 這個布林屬性提示列表應以緊湊樣式呈現。此屬性的解釋取決於使用者代理，並且它不適用於所有瀏覽器。

## 規範

不屬於任何目前的規範。

## 瀏覽器相容性

{{Compat}}

## 參見

- 其他與列表相關的 HTML 元素：{{HTMLElement("ol")}}、{{HTMLElement("ul")}}、{{HTMLElement("li")}} 和 {{HTMLElement("menu")}}；
- 可能特別有用於樣式化 `<dir>` 元素的 CSS 屬性：

  - {{cssxref('list-style')}} 屬性，用於選擇序數的顯示方式。
  - [CSS 計數器](/zh-TW/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)，用於處理複雜的巢狀列表。
  - {{Cssxref('line-height')}} 屬性，用於模擬已棄用的 [`compact`](#compact) 屬性。
  - {{cssxref('margin')}} 屬性，用於控制列表的縮排。
