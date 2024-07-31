---
title: <center>：中央對齊文字元素
slug: Web/HTML/Element/center
---

{{HTMLSidebar}}{{deprecated_header}}

**`<center>`** [HTML](/zh-TW/docs/Web/HTML) 元素是一個[區塊級元素](/zh-TW/docs/Glossary/Block-level_content)，它將其區塊級或內聯內容在其包含元素中水平居中顯示。通常，容器是 {{HTMLElement("body")}}，但不是必需的。

在 HTML 4（和 XHTML 1）中，此標籤已被棄用，取而代之的是 [CSS](/zh-TW/docs/Web/CSS) 的 {{Cssxref("text-align")}} 屬性，可以應用於 {{HTMLElement("div")}} 元素或個別的 {{HTMLElement("p")}}。要將區塊居中，請使用其他 CSS 屬性，如 {{Cssxref("margin-left")}} 和 {{Cssxref("margin-right")}}，並將它們設置為 `auto`（或將 {{Cssxref("margin")}} 設置為 `0 auto`）。

## DOM 介面

此元素實現了 {{domxref("HTMLElement")}} 介面。

## 範例 1

```html
<center>
  This text will be centered.
  <p>So will this paragraph.</p>
</center>
```

### 結果

{{EmbedLiveSample("範例 1")}}

## 範例 2（CSS 替代方案）

```html
<div style="text-align:center">
  This text will be centered.
  <p>So will this paragraph.</p>
</div>
```

### 結果

{{EmbedLiveSample("範例 2（CSS 替代方案）")}}

## 範例 3（CSS 替代方案）

```html
<p style="text-align:center">
  This line will be centered.<br />
  And so will this line.
</p>
```

### 結果

{{EmbedLiveSample("範例 3（CSS 替代方案）")}}

> [!NOTE]
> 將 {{Cssxref("text-align")}}`:center` 應用於 {{HTMLElement("div")}} 或 {{HTMLElement("p")}} 元素會將這些元素的*內容*置中，同時保持它們的整體尺寸不變。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}
