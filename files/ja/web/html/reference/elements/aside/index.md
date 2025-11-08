---
title: "<aside>: 余談要素"
slug: Web/HTML/Reference/Elements/aside
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`<aside>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書のメインコンテンツと間接的な関係しか持っていない文書の部分を表現します。サイドバーやコールアウトボックスなどを表現するためによく使われます。

{{InteractiveExample("HTML デモ: &lt;aside&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  イモリは、幼体も成体も短い足と尾を持つ、トカゲのような外観を持つ両生類のグループです。
</p>

<aside>
  <p>サメハダイモリは、致命的な神経毒で身を守ります。</p>
</aside>

<p>
  太平洋岸北西部の温帯雨林には、エンサティナ、ノースウェスタンサラマンダー、サメハダイモリなど、数種類のイモリが生息しています。ほとんどのイモリは夜行性で、昆虫やミミズ、その他の小動物を餌としています。
</p>
```

```css interactive-example
aside {
  width: 40%;
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  float: right;
  box-shadow: inset 5px 0 5px -5px #29627e;
  font-style: italic;
  color: #29627e;
}

aside > p {
  margin: 0.5rem;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 使用上の注意

- 文章中の括弧書きについては、文章の主要な流れに属するものであるといえますので、これをタグ付けするために `<aside>` 要素を使用しないでください。

## 例

### \<aside> の使用

この例は `<aside>` を使用して記事の中のある段落をマークアップします。この段落は記事の主要な内容と間接的な関係しかありません。

```html-nolint
<article>
  <p>
    ディズニー映画「<cite>リトル・マーメイド</cite>」は、 1989 年に最初に劇場公開されました。
  </p>
  <aside>
    <p>この映画は、公開当初の興行収入は 8,700 万ドルに達しました。</p>
  </aside>
  <p>この映画の詳細情報…</p>
</article>
```

#### 結果

{{EmbedLiveSample("Using_aside")}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Guides/Content_categories#区分コンテンツ"
          >区分コンテンツ</a
        >、<a
          href="/ja/docs/Web/HTML/Guides/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素。 <code>&#x3C;aside></code> 要素は {{HTMLElement("address")}} 要素の子孫要素として配置してはならない。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role"
            >complementary</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role"><code>feed</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/note_role"><code>note</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"><code>region</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/search_role"><code>search</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の区分化関連要素: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA: Complementary ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
