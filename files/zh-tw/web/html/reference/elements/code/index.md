---
title: <code>：行內程式碼元素
slug: Web/HTML/Reference/Elements/code
---

**`<code>`** [HTML](/zh-TW/docs/Web/HTML) 元素以一種樣式顯示其內容，意在指示該文字是一小段電腦程式碼。預設情況下，內容文字以{{Glossary("user agent", "使用者代理")}}的預設的等寬字體顯示。

{{InteractiveExample("HTML Demo: &lt;code&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  The <code>push()</code> method adds one or more elements to the end of an
  array and returns the new length of the array.
</p>
```

```css interactive-example
code {
  background-color: #eee;
  border-radius: 3px;
  font-family: courier, monospace;
  padding: 0 3px;
}
```

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 範例

包含 `<code>` 的文字段落：

```html
<p>
  The function <code>selectAll()</code> highlights all the text in the input
  field so the user can, for example, copy or delete the text.
</p>
```

### 結果

{{EmbedLiveSample("範例", 640, 70)}}

## 備註

要表示多行程式碼，請將 `<code>` 元素包裹在 {{HTMLElement("pre")}} 元素內。單獨使用 `<code>` 元素只能表示單個程式碼片語或程式碼行。

可以定義 CSS 規則以覆蓋瀏覽器的預設字型。使用者設定的偏好可能優先於指定的 CSS。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
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
        任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">code</a
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
      <td>
        {{domxref("HTMLElement")}} 在 Gecko 1.9.2（Firefox 4）及以前版本中，Firefox 為這個元素實現了 {{domxref("HTMLSpanElement")}} 介面。
      </td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("samp")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("var")}}
- {{HTMLElement("pre")}}
