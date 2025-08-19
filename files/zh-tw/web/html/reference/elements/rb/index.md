---
title: <rb>：Ruby 基本元素
slug: Web/HTML/Reference/Elements/rb
---

{{deprecated_header}}

**`<rb>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於定義 {{HTMLElement("ruby")}} 注釋的基本文字組件，即正在注釋的文字。每個 `<rb>` 元素應該包裹基本文字的每個獨立原子部分。

## 屬性

該元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 使用注意事項

- Ruby 注釋用於顯示東亞字符的發音，例如使用日文假名或台灣注音符號。`<rb>` 元素用於分隔每個 ruby 基本文字的各個部分。
- 即使 `<rb>` 不是一個{{glossary("void element", "空元素")}}，在源代碼中僅包含每個元素的開始標籤是很常見的，這樣可以使 ruby 標記更加簡潔且易於閱讀。然後瀏覽器會在渲染版本中填充完整的元素。
- 每個想要注釋的基本段落 /`<rb>` 元素都需要包含一個 {{htmlelement("rt")}} 元素。

## 範例

### 使用 rb

在這個範例中，我們提供了「Kanji」原始字符的注釋：

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

請注意，我們包含了兩個 `<rb>` 元素，以分隔 ruby 基本文字的兩個不同部分。注釋則由兩個 {{htmlelement("rt")}} 元素分隔。

#### 結果

{{EmbedLiveSample("使用 rb", "100%", 60)}}

### 分開注釋

請注意，我們也可以將這個範例中的兩個基本文字部分完全分開注釋。在這種情況下，我們不需要包含 `<rb>` 元素：

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### 結果

{{EmbedLiveSample('分開注釋')}}

請參見 {{HTMLElement("ruby")}} 元素的文章以獲取更多範例。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容分類</a
        >
      </th>
      <td>無</td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>作為 {{htmlelement("ruby")}} 元素的子元素。</td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        如果元素後面緊跟著 {{HTMLElement("rt")}}、{{HTMLElement("rtc")}} 或
        {{HTMLElement("rp")}} 元素，或者後面沒有更多的內容，則可以省略結束標籤，或者如果父元素中沒有更多的內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>{{HTMLElement("ruby")}} 元素</td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rtc")}}
