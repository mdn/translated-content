---
title: '<aside>: 余談要素'
slug: Web/HTML/Element/aside
---

{{HTMLSidebar}}

**HTML の `<aside>` 要素**は、文書のメインコンテンツと間接的な関係しか持っていない文書の部分を表現します。サイドバーやコールアウトボックスなどを表現するためによく使われます。

{{EmbedInteractiveExample("pages/tabbed/aside.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリ</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/Guide/HTML/Content_categories#区分コンテンツ"
          >区分コンテンツ</a
        >、<a
          href="/ja/docs/Web/Guide/HTML/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素。<code>&#x3C;aside></code> 要素は
        {{HTMLElement("address")}}
        要素の子孫要素として配置してはならない。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Complementary_role"
            >complementary</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/feed_role">feed</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role">none</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/note_role">note</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/region_role">region</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上の注意

- 文章中の括弧書きについては、文章の主要な流れに属するものであるといえますので、これをタグ付けするために `<aside>` 要素を使用しないでください。

## 例

### \<aside> の使用

このれは `<aside>` を使用して記事の中のある段落をマークアップします。この段落は記事の主要な内容と間接的な関係しかありません。

```html
<article>
  <p>
    The Disney movie <cite>The Little Mermaid</cite> was
    first released to theatres in 1989.
  </p>
  <aside>
    <p>
      The movie earned $87 million during its initial release.
    </p>
  </aside>
  <p>
    More info about the movie...
  </p>
</article>
```

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.aside")}}

## 関連情報

- 他の区分化関連要素: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ARIA: Complementary role](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Complementary_role)
