---
title: <blockquote>：引用塊元素
slug: Web/HTML/Reference/Elements/blockquote
---

**`<blockquote>`** [HTML](/zh-TW/docs/Web/HTML) 元素表示所包含的文本是擴展引用。通常，這通過縮進在視覺上呈現（有關如何更改，請參見[注意事項](#使用注意事項)）。可以使用 `cite` 屬性提供引用信息的源文檔或消息的 URL，而使用 {{HTMLElement("cite")}} 元素可以提供源的文本表示。

{{InteractiveExample("HTML Demo: &lt;blockquote&gt;", "tabbed-standard")}}

```html interactive-example
<div>
  <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>
      Words can be like X-rays, if you use them properly—they’ll go through
      anything. You read and you’re pierced.
    </p>
  </blockquote>
  <p>—Aldous Huxley, <cite>Brave New World</cite></p>
</div>
```

```css interactive-example
div:has(> blockquote) {
  background-color: #ededed;
  margin: 10px auto;
  padding: 15px;
  border-radius: 5px;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

blockquote + p {
  text-align: right;
}
```

## 屬性

此元素的屬性包括[全局屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

- `cite`
  - : 一個 URL，指定了信息引用的源文檔或消息。此屬性旨在指向解釋引文的上下文或引文參考的信息。

## 使用注意事項

要更改引用文本的縮進，請使用 {{Glossary("CSS")}} {{cssxref("margin-left")}} 和/或 {{cssxref("margin-right")}} 屬性，或 {{cssxref("margin")}} 簡寫屬性。

要內聯包含較短的引文而不是在單獨的塊中使用，請使用 {{HTMLElement("q")}}（引用）元素。

## 範例

此示例演示了使用 `<blockquote>` 元素引用 {{RFC(1149)}} 的一段文字。

```html
<blockquote cite="https://datatracker.ietf.org/doc/html/rfc1149">
  <p>
    鳥類運輸可以提供高延遲、低吞吐量和低高度的服務。連接拓撲僅限於每個運輸工具的單一點對點路徑，與標準運輸工具一起使用，但在初春之外，可以使用許多運輸工具而不會對彼此產生顯著的干擾。這是由於鳥類運輸工具可用的三維以太空間，與
    IEEE802.3
    使用的一維以太相對應。運輸工具具有內在的碰撞回避系統，提高了可用性。
  </p>
</blockquote>
```

### 結果

{{EmbedLiveSample("範例", 640, 180)}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類別</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >、章節根、捫及內容 。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a
          href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code>
          <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents"
            >blockquote</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 內聯引文的 {{HTMLElement("q")}} 元素。
- 引文來源的 {{HTMLElement("cite")}} 元素。
