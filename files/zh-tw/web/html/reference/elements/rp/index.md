---
title: <rp>：Ruby 回退括號元素
slug: Web/HTML/Reference/Elements/rp
---

**`<rp>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於為不支援使用 {{HTMLElement("ruby")}} 元素顯示 ruby 注釋的瀏覽器提供回退括號。每個 `<rp>` 元素應該包裹著包含注釋文字的 {{HTMLElement("rt")}} 元素的開始和結束括號。

{{InteractiveExample("HTML Demo: &lt;rp&gt;", "tabbed-shorter")}}

```html interactive-example
<ruby>
  漢 <rp>(</rp><rt>kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

## 屬性

該元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 使用注意事項

- Ruby 注釋用於顯示東亞字符的發音，例如使用日文假名或台灣注音符號。在不支援 {{HTMLElement("ruby")}} 元素的情況下，使用 `<rp>` 元素；`<rp>` 元素的內容提供了應顯示的內容以指示 ruby 注釋的存在，通常是括號。

## 範例

### 使用 ruby 注釋

此範例使用 ruby 注釋顯示每個字符的[羅馬拼音](https://zh.wikipedia.org/zh-tw/日语罗马字) 等價詞。

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### 結果

{{EmbedLiveSample("使用 ruby 注釋", 600, 60)}}

請參見 {{HTMLElement("ruby")}} 元素的文章以獲取更多範例。

### 不支援 ruby

如果你的瀏覽器不支援 ruby 注釋，結果將如下所示：

```html hidden
漢 (Kan) 字 (ji)
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("不支援 ruby", 600, 60)}}

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
      <td>文本</td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        如果元素後面緊跟著 {{HTMLElement("rt")}} 或另一個
        <code>&#x3C;rp></code> 元素，或者後面沒有更多的內容，則可以省略結束標籤。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        一個 {{HTMLElement("ruby")}} 元素。<code>&#x3C;rp></code>
        必須緊跟著或位於 {{HTMLElement("rt")}} 元素之前或之後。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有對應的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>任意</td>
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
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
