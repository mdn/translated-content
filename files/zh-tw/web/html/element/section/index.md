---
title: <section>：通用區段元素
slug: Web/HTML/Element/section
---

{{HTMLSidebar}}

**`<section>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表文件中的通用獨立區段，它沒有更具體的語義元素來代表它。區段應始終具有標題，幾乎沒有例外。

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

## 屬性

此元素僅包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 使用注意事項

如上所述，`<section>` 是一個通用的區段元素，只有在沒有更具體的元素來代表它時才應使用。例如，導航菜單應該包裝在 {{htmlelement("nav")}} 元素中，但搜索結果列表或地圖顯示及其控制元素沒有特定的元素，可以放在 `<section>` 中。

還要考慮以下情況：

- 如果元素的內容代表作為獨立的、原子的內容單元，它作為獨立的部分進行合成是有意義的（例如，博客文章或評論，或者報紙文章），則 {{HTMLElement("article")}} 元素可能是更好的選擇。
- 如果內容表示與主內容直接無關但又與其一起工作的有用的次要信息（如相關鏈接或作者簡介），請使用 {{HTMLElement("aside")}}。
- 如果內容表示文件的主內容區域，請使用 {{HTMLElement("main")}}。
- 如果你只將元素用作樣式包裝器，請改用 {{HTMLElement("div")}}。

重申一下，每個 `<section>` 都應該是可識別的，通常通過在 `<section>` 元素的子元素中包含標題（{{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}} 元素）來實現。下面有一些可能看到沒有標題的 `<section>` 的示例。

## 範例

### 簡單使用範例

#### 之前

```html
<div>
  <h2>Heading</h2>
  <p>Bunch of awesome content</p>
</div>
```

##### 結果

{{EmbedLiveSample('之前')}}

#### 之後

```html
<section>
  <h2>Heading</h2>
  <p>Bunch of awesome content</p>
</section>
```

##### 結果

{{EmbedLiveSample('之後')}}

### 在不使用標題型內容的情況下使用章節

在網絡應用程序/用戶界面部分，可能會看到 `<section>` 在傳統文件結構中，將一個獨立的內容區段沒有標題並不是真的有意義。這樣的標題對所有讀者都有用，但對輔助技術（如屏幕閱讀器）的用戶特別有用，而且對於 SEO 也很有用。

然而，考慮一下次要的導航機制。如果全局導航已經包裝在 `<nav>` 元素中，你可能可以將上一篇/下一篇菜單包裝在 `<section>` 中：

```html
<section>
  <a href="#">Previous article</a>
  <a href="#">Next article</a>
</section>
```

或者你的應用程序的某種按鈕欄來控制應用程序？這可能不一定需要標題，但它仍然是文件的一個獨立區段：

```html
<section>
  <button class="reply">Reply</button>
  <button class="reply-all">Reply to all</button>
  <button class="fwd">Forward</button>
  <button class="del">Delete</button>
</section>
```

#### 結果

{{EmbedLiveSample('在不使用標題型內容的情況下使用章節')}}

根據內容的不同，包含標題也可能對 SEO 有好處，因此這是需要考慮的選擇。

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories">內容類別</a>
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容">流內容</a>、<a href="/zh-TW/docs/Web/HTML/Content_categories#章節型內容">章節型內容</a>、<a href="/zh-TW/docs/Web/HTML/Content_categories#捫及內容">捫及內容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容">流內容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始標籤和結束標籤都是必需的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#流內容">流內容</a>的元素。請注意，<code>&#x3C;section></code> 元素不得是 {{HTMLElement("address")}} 元素的後代。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        如果元素有<a href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/">可訪問的名稱</a>，則是<code><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/region_role">region</a></code>，否則是<code><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/generic_role">generic</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/alert_role"><code>alert</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/application_role"
        ><code>application</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/banner_role"><code>banner</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/complementary_role"
        ><code>complementary</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/contentinfo_role"
        ><code>contentinfo</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/dialog_role"><code>dialog</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/document_role"
        ><code>document</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/log_role"
        ><code>log</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/marquee_role"
        ><code>marquee</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/navigation_role"><code>navigation</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/none_role"
        ><code>none</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/note_role"><code>note</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/presentation_role"
        ><code>presentation</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/tabpanel_role"><code>tabpanel</code></a>
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

- 其他與區段相關的元素：{{HTMLElement("body")}}、{{HTMLElement("nav")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_lements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("hgroup")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("address")}}
- [使用 HTML 章節和大綱](/zh-TW/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Region 角色](/zh-TW/docs/Web/Accessibility/ARIA/Roles/region_role)
- [為什麼應該選擇 HTML5 article 而不是 section](https://www.smashingmagazine.com/2020/01/html5-article-section/)，作者：Bruce Lawson
