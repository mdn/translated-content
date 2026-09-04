---
title: HTML `<main>` メイン要素
short-title: <main>
slug: Web/HTML/Reference/Elements/main
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<main>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書の {{HTMLElement("body")}} の主要なコンテンツを表します。メインコンテンツ領域は、文書の中心的なトピック、またはアプリケーションの中心的な機能に直接関連する、または展開されたコンテンツで構成されます。

{{InteractiveExample("HTML デモ: &lt;main&gt;", "tabbed-shorter")}}

```html interactive-example
<header>ヤモリの豆知識</header>

<main>
  <p>
    ヤモリは、一般的に小型で、主に夜行性のトカゲの一種です。南極大陸を除くすべての大陸で得られます。
  </p>

  <p>
    多くのヤモリの種は、壁や窓さえも登ることができる粘着性の足裏を保有しています。
  </p>
</main>
```

```css interactive-example
header {
  font:
    bold 7vw "Arial",
    sans-serif;
}
```

文書には [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性が指定されていない `<main>` 要素を 2 つ以上置くことはできません。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 使用上の注意

`<main>` 要素のコンテンツは、文書で固有のものにしてください。サイドバー、ナビゲーションリンク、著作権情報、サイトロゴ、検索フォームなど、一連の文書や文書の節全体で繰り返し表示されるコンテンツは、検索フォームがそのページの主な機能である場合を除き、記載しないでください。

`<main>` は文書のアウトラインに寄与しません。すなわち {{HTMLElement("body")}} や {{HTMLElement("Heading_Elements", "h2")}} などの見出しとは異なり、`<main>` はページの構造の {{glossary("DOM")}} の概念に影響を与えません。これは情報を与えるだけです。

## アクセシビリティの考慮

### ランドマーク

`<main>` 要素は [`main` ランドマーク](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)ロールのように動作します。[ランドマーク](/ja/docs/Web/Accessibility/ARIA/Guides/Techniques#ランドマークロール)は、文書の長いセクションをすばやく識別して移動するための支援技術として使用することができます。 [古いブラウザーの互換性の確認](#ブラウザーの互換性)ができない限り、 `<main>` を `role="main"` の宣言付きで使用するべきです。

### スキップナビゲーション

スキップナビゲーションは、"skipnav" とも呼ばれますが、支援技術のユーザーが繰り返されるコンテンツ (メインナビゲーション、情報バナー、等) の大きなセクションをすばやく飛ばすことができる技法です。これによって、ユーザーがページのメインコンテンツをより早くアクセスすることができます。

[`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を追加することで、 `<main>` 要素がスキップナビゲーションリンクのターゲットになることができます。

```html
<body>
  <a href="#main-content">メインコンテンツまでスキップ</a>

  <!-- ナビゲーションとヘッダーコンテンツ -->

  <main id="main-content">
    <!-- ページのメインコンテンツ -->
  </main>
</body>
```

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

### リーダーモード

ブラウザーのリーダーモードでは、コンテンツをリーダーに特化したビューに変換するときに、[見出し](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)や[コンテンツ区分要素](/ja/docs/Web/HTML/Reference/Elements#content_sectioning)と同様に `<main>` 要素の存在を探します。

- [Building websites for Safari Reader Mode and other reading apps.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

## 例

```html
<!-- 他のコンテンツ -->

<main>
  <h1>Apples</h1>
  <p>The apple is the pomaceous fruit of the apple tree.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>
      These bright red apples are the most common found in many supermarkets.
    </p>
    <p>…</p>
    <p>…</p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>These juicy, green apples make a great filling for apple pies.</p>
    <p>…</p>
    <p>…</p>
  </article>
</main>

<!-- 他のコンテンツ -->
```

### 結果

{{EmbedLiveSample('Examples')}}

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
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されているコンテンツ</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>不可。開始タグと終了タグの両方が必須。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れる場所、但し<a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element"
          >階層的に正しい <code>main</code> 要素であること</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/main_role"
            >main</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
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

- 基本構造の要素: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- 区分化関連の要素: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}}
- [ARIA: Main ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
