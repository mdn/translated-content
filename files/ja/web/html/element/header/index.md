---
title: <header>
slug: Web/HTML/Element/header
---

{{HTMLSidebar}}

**HTML の `<header>` 要素**は、導入的なコンテンツ、ふつうは導入部やナビゲーション等のグループを表します。見出し要素だけでなく、ロゴ、検索フォーム、作者名、その他の要素を含むこともできます。

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >。但し、子孫に他の <code>&#x3C;header></code> や
        {{HTMLElement("footer")}} がないこと。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素。ただし、{{HTMLElement("address")}}、{{HTMLElement("footer")}}、他の
        {{HTMLElement("header")}}
        要素の子孫要素として配置してはなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/Banner_role">banner</a>,
        または
        <code><a href="/ja/docs/Web/HTML/Element/article">article</a></code
        >, <code><a href="/ja/docs/Web/HTML/Element/aside">aside</a></code
        >, <code><a href="/ja/docs/Web/HTML/Element/main">main</a></code
        >, <code><a href="/ja/docs/Web/HTML/Element/nav">nav</a></code
        >,
        <code><a href="/ja/docs/Web/HTML/Element/section">section</a></code>
        の各要素、または
        <code
          >role=<a href="/ja/docs/Web/Accessibility/ARIA/Roles/Article_Role"
            >article</a
          ></code
        >,
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Complementary_role"
            >complementary</a
          ></code
        >,
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Main_role"
            >main</a
          ></code
        >,
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Navigation_Role"
            >navigation</a
          ></code
        >,
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Region_role"
            >region</a
          ></code
        >
        の要素の子孫である場合は<a
          href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role">none</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 使用上の注意

`<header>` 要素は区分コンテンツではありません。つまり、この要素が新たな[アウトライン](/ja/docs/Sections_and_Outlines_of_an_HTML5_document)を生成することはありません。すなわち `header` 要素は通常、自身を囲む `section` の見出し (`h1`–`h6` 要素) を含むことを意図していますが、**必須ではありません**。

### 歴史的な使用法

`<header>` 要素は {{glossary("HTML5")}} まで仕様書には現れていませんでしたが、実は HTML の最初期に存在していました。 [the very first website](http://info.cern.ch/) に見られるように、元は `<head>` 要素として使用されていました。ある時点で、別な名前を使用することが決定されました。これによって `<header>` が自由になり、のちに別な役割を担うことができるようになりました。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 例

### ページのヘッダー

```html
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
```

### 記事のヘッダー

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
  <p>
    <a href="https://janesmith.com/the-planet-earth/">Continue reading....</a>
  </p>
</article>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.header")}}

## 関連情報

- 他の区分化関連要素: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
