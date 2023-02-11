---
title: '<section>: 汎用セクション要素'
slug: Web/HTML/Element/section
---

{{HTMLSidebar}}

**HTML の `<section>` 要素**は、文書の自立した一般的なセクション (区間) を表します。そのセクションを表現するより意味的に具体的な要素がない場合に使用します。少数の例外を除いて、セクションには見出しを置いてください。

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#区分コンテンツ"
          >区分コンテンツ</a
        >,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#知覚可能コンテンツ"
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
        >を受け入れるすべての要素。ただし、 <code>&#x3C;section></code> 要素は
        {{HTMLElement("address")}}
        要素の子孫要素として配置してはならない。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        要素に<a
          href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/"
          >アクセシブル名</a
        >がある場合は<code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Region_role"
            >region</a
          ></code
        >、それ以外の場合は<a
          href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/alert_role">alert</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/alertdialog_role">alertdialog</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/application_role">application</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/banner_role">banner</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/complementary_role">complementary</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/contentinfo_role">contentinfo</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/document_role">document</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/feed_role">feed</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/log_role">log</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/main_role">main</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/marquee_role">marquee</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/navigation_role">navigation</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role">none</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/note_role">note</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/status_role">status</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/tabpanel_role">tabpanel</a></code>
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

前述のように、 `<section>` は汎用的な区分要素ですので、それを表現するためのより具体的な要素がない場合にのみ使用してください。例えば、ナビゲーションメニューは {{htmlelement("nav")}} 要素で囲むべきですが、検索結果のリストや地図表示とそのコントロールなどは特定の要素を持たないので、 `<section>` の中に入れることができます。

また、次のようなことも考慮してください。

- この要素の内容が単独の、自立した記事として配信されて意味のある不可分の単位のコンテンツ (例えば、ブログ投稿やブログのコメント、新聞記事など) を表す場合は、 {{HTMLElement("article")}} 要素を使用したほうがいいでしょう。
- 内容が、メインコンテンツと一緒に機能する有用な付帯情報を表しているものの、メインコンテンツの一部ではない場合 (関連リンクや著者の経歴など) は、 {{HTMLElement("aside")}} を使用してください。
- 内容が文書のメインコンテンツを表す場合は、 {{HTMLElement("main")}} を使用してください。
- スタイル付けのためのラッパーとしてのみ使用する場合は、 {{HTMLElement("div")}} を使用してください。大まかに言うと、 `<section>` は文書のアウトラインの中に論理的に現れるべきです。

繰り返しになりますが、それぞれの `<section>` はできるだけ、特に見出し
({{HTMLElement('h1')}}-{{HTMLElement('h6')}} 要素) を `<section>` の子要素に含めて識別できるようにするべきです。見出しのない `<section>` の例については以下を参照してください。

## 例

### 単純な使い方の例

### 導入前

```html
<div>
  <h2>見出し</h2>
  <p>素晴らしいコンテンツの数々</p>
</div>
```

### 導入後

```html
<section>
  <h2>見出し</h2>
  <p>素晴らしいコンテンツの数々</p>
</section>
```

### 見出しのないセクションの使用

`<section>` が見出しなしで使用されている状況は、伝統的な文書構造よりも、ウェブアプリケーションや UI のセクションでよく見られます。文書内では、コンテンツの内容を示す見出しのない独立したセクションがあっても、実際には何の意味もありません。このような見出しは、すべての読者にとって便利ですが、特に画面リーダーのような支援技術のユーザーにとっては便利であり、また、 SEO にも有効です。

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

見出しのないセクションは、文書のアウトラインには表示されません。このような HTML ブロックを文書のアウトラインの中に強制的に入れたいが、視覚的な出力には何の影響も与えたくない場合は、非表示にした見出しを入れることができます。

```html
<section>
  <h2 class="hidden">コントロール</h2>
  <button class="reply">返信</button>
  <button class="reply-all">全員に返信</button>
  <button class="fwd">転送</button>
  <button class="del">削除</button>
</section>
```

支援技術や画面リーダーに適した CSS を使って非表示にするには、次のようにします。

```html
.hidden {
  position: absolute;
  top: -9999px;
  left: -9999px;
}
```

コンテンツによっては、見出しを入れることで SEO 施策にもなるので、選択肢の一つとして検討してみてはいかがでしょうか。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.section")}}

## 関連情報

- その他の区分化関連要素: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ARIA: Region ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Region_role)
- [Why You Should Choose HTML5 article Over section](https://www.smashingmagazine.com/2020/01/html5-article-section/), by Bruce Lawson
