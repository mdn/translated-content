---
title: <main>
slug: Web/HTML/Element/main
---

{{HTMLSidebar}}

**HTML の `<main>` 要素**は、文書の {{HTMLElement("body")}} の主要な内容を表します。主要な内容とは、文書の中心的な主題、またはアプリケーションの中心的な機能に直接関連または拡張した内容の範囲のことです。

{{EmbedInteractiveExample("pages/tabbed/main.html","tabbed-shorter")}}

文書には [`hidden`](/ja/docs/Web/HTML/Global_attributes#hidden) 属性が指定されていない `<main>` 要素を 2 つ以上置くことはできません。

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
        >, 知覚可能コンテンツ
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
      <td>不可。開始タグと終了タグの両方が必須。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れる場所、但し<a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element"
          id="the-main-element:hierarchically-correct-main-element"
          >階層的に正しい <code>main</code> 要素であること</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Main_role"
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

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上の注意

`<main>` 要素の内容は、文書で固有のものにしてください。この内容はサイドバー、ナビゲーションリンク、著作権表示、サイトロゴ、検索フォームのような、文書のセットや文書のセクションにまたがって繰り返されるものを除くべきです。(もちろん、主な内容が検索フォームでない限り)

`<main>` は文書のアウトラインに寄与しません。すなわち {{HTMLElement("body")}} や {{HTMLElement("h2")}} などの見出しとは異なり、 `<main>` はページの構造の {{glossary("DOM")}} の概念に影響を与えません。これは情報を与えるだけです。

## 例

```html
<!-- 他のコンテンツ -->

<main>
  <h1>Apples</h1>
  <p>The apple is the pomaceous fruit of the apple tree.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>These bright red apples are the most common found in many
    supermarkets.</p>
    <p>... </p>
    <p>... </p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>These juicy, green apples make a great filling for
    apple pies.</p>
    <p>... </p>
    <p>... </p>
  </article>
</main>

<!-- 他のコンテンツ -->
```

## アクセシビリティの考慮

### ランドマーク

`<main>` 要素は [`main` ランドマーク](/ja/docs/Web/Accessibility/ARIA/Roles/Main_role)ロールのように動作します。[ランドマーク](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#Landmark_roles)は、文書の長いセクションをすばやく識別して移動するための支援技術として使用することができます。 [古いブラウザーの互換性の確認](/ja/docs/Web/HTML/Element/main#Browser_compatibility)ができない限り、 `<main>` を `role="main"` の宣言付きで使用するべきです。

### スキップナビゲーション

スキップナビゲーションは、 "skipnav" とも呼ばれますが、支援技術のユーザーが繰り返されるコンテンツ (メインナビゲーション、情報バナー、等) の大きなセクションをすばやく飛ばすことができる技法です。これによって、ユーザーがページのメインコンテンツをより早くアクセスすることができます。

[`id`](/ja/docs/Web/HTML/Global_attributes#id) 属性を追加することで、 `<main>` 要素がスキップナビゲーションリンクのターゲットになることができます。

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

### リーダーモード

ブラウザーのリーダーモードでは、コンテンツをリーダーに特化したビューに変換するときに、[見出し](/ja/docs/Web/HTML/Element/Heading_Elements)や[コンテンツ区分要素](/ja/docs/Web/HTML/Element#Content_sectioning)と同様に `<main>` 要素の存在を探します。

- [Building websites for Safari Reader Mode and other reading apps.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

`<main>` は広く対応されています。 Internet Explorer 11 およびそれ以前については、アクセシビリティのために {{glossary("ARIA")}} の `"main"` ロールを `<main>` 要素に追加することが提案されています (JAWS のような、古い Internet Explorer との組み合わせで使用する読み上げソフトは、 `<main>` 要素の意味論的な意味を `role` 属性を含めることで理解できるでしょう)。

```html
<main role="main">
  ...
</main>
```

{{Compat("html.elements.main")}}

## 関連情報

- 基本構造の要素: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- セクション関連の要素: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}}
- [ARIA: Main ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Main_role)
