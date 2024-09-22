---
title: <rt>：Ruby 文本元素
slug: Web/HTML/Element/rt
---

{{HTMLSidebar}}

**`<rt>`** [HTML](/zh-TW/docs/Web/HTML) 元素用於指定 ruby 注釋的 ruby 文本部分，用於為東亞排版提供發音、翻譯或音譯信息。`<rt>` 元素必須始終包含在一個 {{HTMLElement("ruby")}} 元素中。

{{EmbedInteractiveExample("pages/tabbed/rt.html", "tabbed-shorter")}}

請參見 {{HTMLElement("ruby")}} 元素的文章以獲取更多範例。

## 屬性

該元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 範例

### 使用 ruby 注釋

此簡單範例為 {{HTMLElement("ruby")}} 元素中的漢字字符提供了羅馬字音譯：

```html
<ruby> 漢 <rt>Kan</rt> 字 <rt>ji</rt> </ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### 結果

{{EmbedLiveSample("使用 ruby 注釋", 600, 60)}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容分類</a
        >
      </th>
      <td>無</td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        如果 <code>&#x3C;rt></code> 元素後面緊跟著一個 <code>&#x3C;rt></code>
        或 {{HTMLElement("rp")}} 元素，或者後面沒有更多的內容，則結束標籤可以省略。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>一個 {{HTMLElement("ruby")}} 元素。</td>
    </tr>
    <tr>
      <th scope="row">隱含 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒對應的角色</a
        >
      </td>
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
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{CSSXRef("text-transform", "text-transform: full-size-kana")}}
