---
title: <header>：頁首元素
slug: Web/HTML/Element/header
---

{{HTMLSidebar}}

**`<header>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表導言內容，通常是一組導言或導航輔助元素。它可能包含一些標題元素，也可能包含標誌、搜索表單、作者名稱和其他元素。

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

## 使用注意事項

除了嵌套在章節內容中以外，`<header>` 元素的含義與站點範圍內的 [`banner`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/banner_role) 地標角色相同。然後，`<header>` 元素不是地標。

`<header>` 元素可以定義全域網站頁首，描述為可存取樹中的 `banner`。它通常包括標誌、公司名稱、搜索功能，可能還有全域導覽或標語。它通常位於頁面的頂部。

否則，在可存取樹中它是一個 `section`，通常包含周圍章節的標題（一個 `h1` – `h6` 元素）和可選的副標題，但這**不是**必需的。

### 歷史用法

`<header>` 元素最初存在於 HTML 標題的開始處。它在[第一個網站](http://info.cern.ch/)中可見。在某個時候，標題變成了 [`<h1>` 到 `<h6>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements)，允許 `<header>` 自由填補不同的角色。

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 範例

### 頁面頁首

```html
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
```

#### 結果

{{EmbedLiveSample('頁面頁首')}}

### 文章頁首

```html
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>
      Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by
      Jane Smith
    </p>
  </header>
  <p>
    We live on a planet that's blue and green, with so many things still unseen.
  </p>
  <p><a href="https://example.com/the-planet-earth/">Continue reading…</a></p>
</article>
```

#### 結果

{{EmbedLiveSample('文章頁首')}}

## 無障礙議題

`<header>` 元素在其上下文為 {{HTMLElement('body')}} 元素時定義了一個 [`banner`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/banner_role) 地標。當 HTML 頁首元素是 {{HTMLElement('article')}}、{{HTMLElement('aside')}}、{{HTMLElement('main')}}、{{HTMLElement('nav')}} 或 {{HTMLElement('section')}} 元素的後代時，HTML 頁首元素不被認為是橫幅地標。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories">內容類型</a>
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容">流內容</a>、<a href="/zh-TW/docs/Web/HTML/Content_categories#palpable_content">捫及內容</a>
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容">流內容</a>，但不包含 <code>&#x3C;header></code> 或 {{HTMLElement("footer")}} 的後代。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必需的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容">流內容</a>的元素。請注意，<code>&#x3C;header></code> 元素不得是 {{HTMLElement("address")}}、{{HTMLElement("footer")}} 或另一個 {{HTMLElement("header")}} 元素的後代。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/banner_role">banner</a>，或如果是 <code><a href="/zh-TW/docs/Web/HTML/Element/article">article</a></code>、<code><a href="/zh-TW/docs/Web/HTML/Element/aside">aside</a></code>、<code><a href="/zh-TW/docs/Web/HTML/Element/main">main</a></code>、<code><a href="/zh-TW/docs/Web/HTML/Element/nav">nav</a></code> 或 <code><a href="/zh-TW/docs/Web/HTML/Element/section">section</a></code> 元素的後代，或具有 <code>role=<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/article_role">article</a></code>、<code><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/complementary_role">complementary</a></code>、<code><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/main_role">main</a></code>、<code><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/navigation_role">navigation</a></code> 或 <code><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/region_role">region</a></code> 的元素，則為 <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/generic_role">generic</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> 或 <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
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

- 其他章節相關元素：{{HTMLElement("body")}}、{{HTMLElement("nav")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("footer")}}、{{HTMLElement("section")}}、{{HTMLElement("address")}}。
