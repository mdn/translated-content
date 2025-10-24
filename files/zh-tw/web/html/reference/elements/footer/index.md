---
title: <footer>：頁尾元素
slug: Web/HTML/Reference/Elements/footer
---

**`<footer>`** [HTML](/zh-TW/docs/Web/HTML) 元素表示其最近的[章節型內容](/zh-TW/docs/Web/HTML/Guides/Content_categories#章節型內容)或[章節根](/zh-TW/docs/Web/HTML/Reference/Elements/Heading_Elements#章節根)元素的頁尾。`<footer>` 通常包含有關該章節作者的信息、版權數據或與相關文檔的鏈接。

{{InteractiveExample("HTML Demo: &lt;footer&gt;", "tabbed-standard")}}

```html interactive-example
<article>
  <h1>How to be a wizard</h1>
  <ol>
    <li>Grow a long, majestic beard.</li>
    <li>Wear a tall, pointed hat.</li>
    <li>Have I mentioned the beard?</li>
  </ol>
  <footer>
    <p>© 2018 Gandalf</p>
  </footer>
</article>
```

```css interactive-example
article {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

footer {
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: #45a1ff;
  color: #fff;
}
```

## 屬性

此元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 使用注意事項

- 將有關作者的信息置於可以包含在 `<footer>` 元素中的 {{HTMLElement("address")}} 元素中。
- 當最近的祖先章節型內容或章節根元素是 body 元素時，頁尾應用於整個頁面。
- `<footer>` 元素不是章節型，因此在[大綱](/zh-TW/docs/Web/HTML/Reference/Elements/Heading_Elements)中不引入新的節。

## 範例

```html
<body>
  <h3>FIFA World Cup top goalscorers</h3>
  <ol>
    <li>Miroslav Klose, 16</li>
    <li>Ronaldo Nazário, 15</li>
    <li>Gerd Müller, 14</li>
  </ol>

  <footer>
    <small>
      Copyright © 2023 Football History Archives. All Rights Reserved.
    </small>
  </footer>
</body>
```

```css
footer {
  text-align: center;
  padding: 5px;
  background-color: #abbaba;
  color: #000;
}
```

{{EmbedLiveSample('範例')}}

## 無障礙議題

在 Safari 13 之前的版本中，`contentinfo` [標誌角色](/zh-TW/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#路標地標)未能被 [VoiceOver](https://help.apple.com/voiceover/info/guide/) 正確顯示。如果需要支持舊版 Safari 瀏覽器，請在 `footer` 元素中添加 `role="contentinfo"`，以確保該標誌能夠被正確顯示。

- 相關：[WebKit Bugzilla: 146930 – AX: HTML native elements (header, footer, main, aside, nav) should work the same as ARIA landmarks, sometimes they don't](https://webkit.org/b/146930)

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories">內容類型</a>
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容">流內容</a>、捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容">流內容</a>，但不得包含 <code>&#x3C;footer></code> 或 {{HTMLElement("header")}} 的後代元素。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容">流內容</a> 的元素。請注意，<code>&#x3C;footer></code> 元素不得是
        {{HTMLElement("address")}}、{{HTMLElement("header")}}
        或另一個 <code>&#x3C;footer></code> 元素的後代。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role">contentinfo</a>，或者如果是
        <a href="/zh-TW/docs/Web/HTML/Reference/Elements/article">article</a
        >、<a href="/zh-TW/docs/Web/HTML/Reference/Elements/aside">aside</a
        >、<a href="/zh-TW/docs/Web/HTML/Reference/Elements/main">main</a
        >、<a href="/zh-TW/docs/Web/HTML/Reference/Elements/nav">nav</a
        > 或 <a href="/zh-TW/docs/Web/HTML/Reference/Elements/section">section</a
        > 元素的後代，或具有 <code>role=<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/Article_Role">article<a></code>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/Complementary_role">complementary</a
        >、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/Main_role">main</a
        >、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/Navigation_Role">navigation</a
        > 或 <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/Region_role">region</a> 的元素，則隱含為 <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/Generic_role">generic</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>、<a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> 或
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>。
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

- 其他與節相關的元素: {{HTMLElement("body")}}、{{HTMLElement("nav")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("hgroup")}}、{{HTMLElement("header")}}、{{HTMLElement("section")}}、{{HTMLElement("address")}}；
- [使用 HTML 章節和大綱](/zh-TW/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA：Contentinfo 角色](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
