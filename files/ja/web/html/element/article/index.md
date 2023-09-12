---
title: "<article>: 記事コンテンツ要素"
slug: Web/HTML/Element/article
l10n:
  sourceCommit: fa8a44b8bff24a4032181c4fd155c459c0dc9161
---

{{HTMLSidebar}}

**`<article>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書、ページ、アプリケーション、サイトなどの中で自己完結しており、（集合したものの中で）個別に配信や再利用を行うことを意図した構成物を表します。例えば、フォーラムの投稿、雑誌や新聞の記事、ブログの記事、商品カード、ユーザーが投稿したコメント、対話型のウィジェットやガジェット、その他の独立したコンテンツの項目が含まれます。

{{EmbedInteractiveExample("pages/tabbed/article.html", "tabbed-standard")}}

ある文書に複数の記事を含めることができます。たとえば、読者がスクロールするたびに各記事のテキストを次々と表示するブログでは、各記事は `<article>` 要素に含まれ、おそらくその中に 1 つ以上の `<section>` があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#区分コンテンツ"
          >区分コンテンツ</a
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
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素。なお、 <code>&#x3C;article></code> 要素を
        {{HTMLElement("address")}} 要素の子孫にしてはいけません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Article_Role"
            >article</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a>
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

- それぞれの `<article>` は、子要素として見出し（[`<h1>` - `<h6>`](/ja/docs/Web/HTML/Element/Heading_Elements) 要素）を含むなどの方法で識別できるようにするべきです。
- `<article>` 要素を入れ子にした場合、内側の要素は外側の要素に関する記事を表します。例えばブログ投稿へのコメントは、ブログ投稿を表す `<article>` 内へ入れ子にした `<article>` 要素にできます。
- `<article>` 要素の著者情報は {{HTMLElement("address")}} 要素で提供できますが、入れ子にされた `<article>` 要素には適用されません。
- `<article>` 要素の発行日時は、 {{HTMLElement("time")}} 要素の [`datetime`](/ja/docs/Web/HTML/Element/time#datetime) 属性で示すことができます。

## 例

### HTML

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

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のセクション関連要素: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/HTML/Element/Heading_Elements)
