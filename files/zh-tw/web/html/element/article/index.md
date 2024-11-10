---
title: <article>：文章內容元素
slug: Web/HTML/Element/article
---

{{HTMLSidebar}}

**`<article>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表文件、頁面、應用程式或站點中的一個獨立組成部分，該部分旨在獨立分發或重複使用（例如，在聯合編輯中）。例如：論壇帖子、雜誌或報紙文章、部落格文章、產品卡片、用戶提交的評論、互動小工具或小裝置，或任何其他獨立的內容項目。

{{EmbedInteractiveExample("pages/tabbed/article.html", "tabbed-standard")}}

一個文件可以包含多個文章；例如，在一個按讀者滾動顯示每篇文章文本的部落格上，每篇文章都可以包含在 `<article>` 元素中，可能包含一個或多個 `<section>`。

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
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
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
        > 的元素。請注意，<code>&#x3C;article></code> 元素不得是
        {{HTMLElement("address")}} 元素的子孫。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/Article_Role"
            >article</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 屬性

此元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 使用注意事項

- 每個 `<article>` 應該被識別，通常通過在 `<article>` 元素的子元素中包含標題（[`<h1>` - `<h6>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements) 元素）。
- 當嵌套 `<article>` 元素時，內部元素代表與外部元素相關的文章。例如，部落格文章的評論可以是嵌套在表示部落格文章的 `<article>` 中的 `<article>` 元素。
- `<article>` 元素的作者信息可以通過 {{HTMLElement("address")}} 元素提供，但不適用於嵌套的 `<article>` 元素。
- `<article>` 元素的發佈日期和時間可以使用 {{HTMLElement("time")}} 元素的 [`datetime`](/zh-TW/docs/Web/HTML/Element/time#datetime) 屬性來描述。

## 範例

```html
<article class="film_review">
  <h2>Jurassic Park</h2>
  <section class="main_review">
    <h3>Review</h3>
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <h3>User reviews</h3>
    <article class="user_review">
      <h4>Too scary!</h4>
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-16 19:00">May 16</time>
          by Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <h4>Love the dinos!</h4>
      <p>I agree, dinos are my favorite.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-17 19:00">May 17</time>
          by Tom.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Posted on
      <time datetime="2015-05-15 19:00">May 15</time>
      by Staff.
    </p>
  </footer>
</article>
```

## 結果

{{EmbedLiveSample('範例','','570')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 其他與節相關的元素：{{HTMLElement("body")}}、{{HTMLElement("nav")}}、{{HTMLElement("section")}}、{{HTMLElement("aside")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_lements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("hgroup")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("address")}}
- [使用 HTML 節和大綱](/zh-TW/docs/Web/HTML/Element/Heading_Elements)
