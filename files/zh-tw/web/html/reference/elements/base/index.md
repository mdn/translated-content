---
title: <base>：文件基礎 URL 元素
slug: Web/HTML/Reference/Elements/base
---

**`<base>`** [HTML](/zh-TW/docs/Web/HTML) 元素指定用於文件中所有*相對* URL 的基礎 URL。一個文件中只能有一個 `<base>` 元素。

腳本可以使用 {{domxref('Node.baseURI')}} 存取文件的已使用基礎 URL。如果文件中沒有 `<base>` 元素，則 `baseURI` 默認為 {{domxref("location.href")}}。

## 屬性

此元素的屬性包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

> [!WARNING]
> `<base>` 元素必須具有 `href` 屬性、`target` 屬性或兩者都有。如果這些屬性中至少有一個被指定，則 `<base>` 元素**必須**出現在具有 URL 屬性值的其他元素之前，例如 {{HTMLElement("link")}} 的 `href` 屬性。

- `href`
  - : 用於整個文件中相對 URL 的基礎 URL。
    允許絕對和相對 URL。
    不允許 [`data:`](/zh-TW/docs/Web/URI/Reference/Schemes/data) 和 `javascript:` URL。
- `target`
  - : 顯示來自 {{HTMLElement("a")}}、{{HTMLElement("area")}} 或 {{HTMLElement("form")}} 元素的導航結果的**關鍵字**或**作者定義的名稱**的默認{{Glossary("browsing context", "瀏覽上下文")}}。以下關鍵字具有特殊含義：
    - `_self`（默認）：在當前瀏覽上下文中顯示結果。
    - `_blank`：在新的、未命名的瀏覽上下文中顯示結果。
    - `_parent`：如果當前頁面位於框架中，則在當前瀏覽上下文的父瀏覽上下文中顯示結果。如果沒有父瀏覽上下文，則與 `_self` 相同。
    - `_top`：在最上層的瀏覽上下文中（當前瀏覽上下文的祖先且沒有父瀏覽上下文）顯示結果。如果沒有父瀏覽上下文，則與 `_self` 相同。

## 使用注意事項

### 多個 \<base> 元素

如果使用多個 `<base>` 元素，只有第一個 `href` 和第一個 `target` 會被遵從，其它的將被忽略。

### 頁內錨點

指向文檔片段的鏈接，例如 `<a href="#some-id">`，將使用 `<base>` 解析，觸發帶有片段的基礎 URL 的 HTTP 請求。

例如，給定 `<base href="https://example.com/">` 和此鏈接：`<a href="#anchor">到錨點</a>`。該鏈接指向 `https://example.com/#anchor`。

### 開放社交關係圖

[Open Graph](https://ogp.me/) 標籤不會認識 `<base>`，應始終使用完整的絕對 URL。例如：

```html
<meta property="og:image" content="https://example.com/thumbnail.jpg" />
```

## 範例

```html
<base href="https://www.example.com/" />
<base target="_blank" />
<base target="_top" href="https://example.com/" />
```

## 技術概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories">內容類型</a>
      </th>
      <td>元數據內容。</td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>無；它是一個{{Glossary("void element", "置空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不得有結束標籤。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        一個不包含其他 {{HTMLElement("base")}} 元素的 {{HTMLElement("head")}}。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">無對應角色</a>
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>不允許 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLBaseElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
