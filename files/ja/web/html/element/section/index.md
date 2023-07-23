---
title: "<section>: 汎用セクション要素"
slug: Web/HTML/Element/section
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<section>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書の自立した一般的なセクション（区間）を表します。そのセクションを表現するより意味的に具体的な要素がない場合に使用します。少数の例外を除いて、セクションには見出しを置いてください。

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上の注意

前述のように、 `<section>` は汎用的な区分要素ですので、それを表現するためのより具体的な要素がない場合にのみ使用してください。例えば、ナビゲーションメニューは {{htmlelement("nav")}} 要素で囲むべきですが、検索結果のリストや地図表示とそのコントロールなどは特定の要素を持たないので、 `<section>` の中に入れることができます。

また、次のようなことも考慮してください。

- この要素の内容が単独の、自立した記事として配信されて意味のある不可分の単位のコンテンツ（例えば、ブログ投稿やブログのコメント、新聞記事など）を表す場合は、{{HTMLElement("article")}} 要素を使用したほうがいいでしょう。
- 内容が、メインコンテンツと一緒に機能する有用な付帯情報を表しているものの、メインコンテンツの一部ではない場合（関連リンクや著者の経歴など）は、 {{HTMLElement("aside")}} を使用してください。
- 内容が文書のメインコンテンツを表す場合は、 {{HTMLElement("main")}} を使用してください。
- スタイル付けのためのラッパーとしてのみ使用する場合は、 {{HTMLElement("div")}} を使用してください。大まかに言うと、 `<section>` は文書のアウトラインの中に論理的に現れるべきです。

繰り返しになりますが、それぞれの `<section>` はできるだけ、特に見出し
({{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}} 要素) を `<section>` の子要素に含めて識別できるようにするべきです。見出しのない `<section>` の例については以下を参照してください。

## 例

### 単純な使い方の例

#### 導入前

```html
<div>
  <h2>見出し</h2>
  <p>素晴らしいコンテンツの数々</p>
</div>
```

##### 結果

{{EmbedLiveSample('Before')}}

#### 導入後

```html
<section>
  <h2>見出し</h2>
  <p>素晴らしいコンテンツの数々</p>
</section>
```

##### 結果

{{EmbedLiveSample('After')}}

### 見出しのないセクションの使用

`<section>` が見出しなしで使用されている状況は、伝統的な文書構造よりも、ウェブアプリケーションや UI のセクションでよく見られます。文書内では、コンテンツの内容を示す見出しのない独立したセクションがあっても、実際には何の意味もありません。このような見出しは、すべての読者にとって便利ですが、特にスクリーンリーダーのような支援技術のユーザーにとっては便利であり、また、 SEO にも有効です。

しかし、二次的なナビゲーションの仕組みを考えてみましょう。グローバルナビゲーションがすでに `<nav>` 要素で囲まれている場合、 `<section>` の中に前へ/次へのメニューを入れることも考えられます。

```html
<section>
  <a href="#">前の記事</a>
  <a href="#">次の記事</a>
</section>
```

また、アプリを制御するためのボタンバーのようなものはどうでしょうか。必ずしも見出しが必要ではないかもしれませんが、それでも文書の明確なセクションであることに変わりはありません。

```html
<section>
  <button class="reply">返信</button>
  <button class="reply-all">全員に返信</button>
  <button class="fwd">転送</button>
  <button class="del">削除</button>
</section>
```

支援技術やスクリーンリーダーに適した CSS を使って非表示にするには、次のようにします。

```css
.hidden {
  position: absolute;
  top: -9999px;
  left: -9999px;
}
```

#### 結果

{{EmbedLiveSample('Using a section without a heading')}}

コンテンツによっては、見出しを入れることで SEO 施策にもなるので、選択肢の一つとして検討してみてはいかがでしょうか。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
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
        >を受け入れるすべての要素。ただし、<code>&#x3C;section></code> 要素は
        {{HTMLElement("address")}}
        要素の子孫要素として配置してはならない。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/region_role"
            >region</a
          ></code
        >
        （要素に<a
          href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/"
          >アクセシブル名</a
        >がある場合）、それ以外の場合は<a
          href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/alert_role"><code>alert</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/banner_role"><code>banner</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/complementary_role"><code>complementary</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/contentinfo_role"><code>contentinfo</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role"><code>dialog</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/log_role"><code>log</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/marquee_role"><code>marquee</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/navigation_role"><code>navigation</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/note_role"><code>note</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/tabpanel_role"><code>tabpanel</code></a>
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

- その他の区分化関連要素: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Region ロール](/ja/docs/Web/Accessibility/ARIA/Roles/region_role)
- [Why You Should Choose HTML5 article Over section](https://www.smashingmagazine.com/2020/01/html5-article-section/), by Bruce Lawson
