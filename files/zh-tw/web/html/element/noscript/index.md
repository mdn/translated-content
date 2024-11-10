---
title: <noscript>
slug: Web/HTML/Element/noscript
---

{{HTMLSidebar}}

[HTML](/zh-TW/docs/Web/HTML) **`<noscript>`** 元素定義了一個 HTML 區塊，如果網頁上的腳本類型不支援或瀏覽器當前已關閉腳本，則將插入該區塊。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#metadata_content"
          >後設資料內容</a
        >,
        <a href="/zh-TW/docs/Web/HTML/Content_categories#flow_content"
          >流內容</a
        >,
        <a href="/zh-TW/docs/Web/HTML/Content_categories#phrasing_content"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>
        當腳本被禁用時，並且該元素是
        {{HTMLElement("head")}} 元素的子元素時：可以包括零個或多個
        {{HTMLElement("link")}} 元素、零個或多個
        {{HTMLElement("style")}} 元素，以及零個或多個
        {{HTMLElement("meta")}} 元素，它們的順序可以是任意的。<br />當腳本被禁用時，並且該元素不是
        {{HTMLElement("head")}} 元素的後代時：可以包括任何
        <a
          href="/zh-TW/docs/Web/HTML/Content_categories#transparent_content_model"
          >透明內容</a
        >，但不得包含 <code>&#x3C;noscript></code> 元素在其後代中。<br />否則：可以包括流內容或段落型內
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        如果不存在祖元素 <code>&#x3C;noscript></code>，或者在 {{HTMLElement("head")}} 元素中（但僅適用於 HTML 文件），同樣如果不存在 <code>&#x3C;noscript></code> 祖元素，則接受任何<a href="/zh-TW/docs/Web/HTML/Content_categories#phrasing_content"
          >段落型內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有對應的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>沒有允許的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 屬性

這個元素屬性含有[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 範例

```html
<noscript>
  <!-- anchor linking to external file -->
  <a href="https://www.mozilla.org/">External Link</a>
</noscript>
<p>Rocks!</p>
```

### 腳本成功執行的結果

Rocks!

### 腳本執行失敗的成果

[External Link](https://www.mozilla.org/)

Rocks!

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
