---
title: <aside>：側邊欄元素
slug: Web/HTML/Element/aside
---

{{HTMLSidebar}}

**`<aside>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表文件中只間接相關於主要內容的部分。側邊欄常常被呈現為側邊欄或呼叫框。

{{EmbedInteractiveExample("pages/tabbed/aside.html", "tabbed-standard")}}

## 屬性

這個元素只包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 使用注意事項

- 請勿使用 `<aside>` 元素來標記括號中的文字，因為這種文字被視為主要內容的一部分。

## 範例

### 使用 \<aside>

這個範例使用 `<aside>` 來標記文章中的一段落。這段落與主要文章內容只間接相關：

```html
<article>
  <p>
    The Disney movie <cite>The Little Mermaid</cite> was first released to
    theatres in 1989.
  </p>
  <aside>
    <p>The movie earned $87 million during its initial release.</p>
  </aside>
  <p>More info about the movie…</p>
</article>
```

#### 結果

{{EmbedLiveSample("使用 aside")}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、<a
          href="/zh-TW/docs/Web/HTML/Content_categories#章節型內容"
          >章節型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
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
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >的元素。請注意，<code>&#x3C;aside></code> 元素不能是 {{HTMLElement("address")}} 元素的後代。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/Complementary_role"
            >complementary</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>、
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/note_role"><code>note</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>
      </td>
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

- 其他與節相關的元素：{{HTMLElement("body")}}、{{HTMLElement("article")}}、{{HTMLElement("section")}}、{{HTMLElement("nav")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("hgroup")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("address")}}；
- [使用 HTML 章節和大綱](/zh-TW/docs/Web/HTML/Element/Heading_Elements)
- [ARIA：補充角色](/zh-TW/docs/Web/Accessibility/ARIA/Roles/complementary_role)
