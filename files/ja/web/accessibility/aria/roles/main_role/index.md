---
title: "ARIA: main ロール"
slug: Web/Accessibility/ARIA/Roles/main_role
---

メイン (`main`) [ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、文書の主要なコンテンツを示すために使用します。 メインコンテンツ領域は、文書の中心的な話題やアプリケーションの中心的な機能と直接関連したり、それらを拡張するコンテンツで構成されます。

```html
<div id="main" role="main">
  <h1>アボカド</h1>
  <!-- メインセクションのコンテンツ -->
</div>
```

これは、アボカドについて説明する文書のメインセクションです。 この文書のサブセクションでは、その歴史、さまざまな品種、栽培地域などについて説明します。

## 説明

メイン (`main`) ロールは、文書のメインコンテンツを識別する、ナビゲーションに関する[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)です。 ランドマークは、支援技術によって、文書の大きなセクションをすばやく識別してナビゲートするために使用できます。 ページのセクションを分類およびラベル付けすることにより、レイアウトを通じて視覚的に伝えられる構造情報をプログラムで表現することができます。 スクリーンリーダーは、ランドマークロールを使用して、ページの重要なセクションへのキーボードナビゲーションを提供します。 ランドマークロールを介してナビゲートする場合、メインロールは「メインコンテンツへスキップする (Skip to main content) 」リンクの代わりになります。 メイン (`main`) ランドマークロールは、文書ごとに 1 つだけあるべきです。

[`<main>` 要素](/ja/docs/Web/HTML/Element/main)は、メイン (`main`) ロールを持ちます。 開発者は、ARIA を使用するよりも、正しい意味論の HTML 要素を使用することを常に好むべきです。

文書 (`document`) とアプリケーション (`application`) は DOM 内でネストすることができます。 これにより、DOM の子孫として複数のメイン要素を持つことになる可能性があります。 このような場合には、メインとその祖先である文書やアプリケーションとの関係を識別するために `aria-owns` を含めます (訳注: aria-owns は、DOM 階層で親子関係に無い要素において、親に指定することで子でない要素を子として組み込むためのものであり、文書やアプリケーションとメインが DOM 階層で親子関係にあれば必要ありません) 。

## 例

```html
<body>
  <!-- 主要なナビゲーション -->

  <div role="main">
    <h1>第一次インドシナ戦争</h1>
    <!-- 記事のコンテンツ -->
  </div>

  <!-- サイドバーとフッター -->
</body>
```

## アクセシビリティに関する懸念

### 文書ごとに `main` ロールを 1 つのみ使用する

メイン (`main`) [ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、文書ごとに 1 回のみ使用するべきです。

JavaScript によってトリガーされたときにページコンテンツを更新するなどで、文書に 2 つのメイン (`main`) ロールが含まれている場合、[`hidden` 属性](/ja/docs/Web/HTML/Global_attributes/hidden)をトグルするなどの手法によって、アクティブでないメイン (`main`) ロールの存在を支援技術から取り除くべきです。

```html
<main>
  <h1>アクティブな <code>main</code> 要素</h1>
  <!-- コンテンツ -->
</main>

<main hidden>
  <h1>隠された <code>main</code> 要素</h1>
  <!-- コンテンツ -->
</main>
```

## ベストプラクティス

### 好ましい HTML

[`<main>` 要素](/ja/docs/Web/HTML/Element/main)を使用すると自動的にセクションがメイン (`main`) ロールを持つことを伝えます。 可能な限り、`<main>` 要素を代わりに使用することをお勧めします。

### スキップナビゲーション

スキップナビゲーション (スキップナビ (skipnav) とも呼ばれる) は、支援技術のユーザーが繰り返されるコンテンツの大きなセクション (メインナビゲーション、情報バナーなど) をすばやくバイパスできるようにする手法です。 これにより、ユーザーはページのメインコンテンツにすばやくアクセスできます。 (訳注: このページでも、ページが表示されたらすぐ Tab キーを押すことで、ページ上部にリンクが表示されるようになっています。)

`role="main"` という宣言を持つ要素に [`id` 属性](/ja/docs/Web/HTML/Global_attributes/id)を追加すると、それをスキップナビゲーションリンクのターゲットにすることができます。

```html
<body>
  <a href="#main-content">メインコンテンツへスキップする</a>

  <!-- ナビゲーションとヘッダーのコンテンツ -->

  <div id="main-content" role="main">
    <!-- メインページのコンテンツ -->
  </div>
</body>
```

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/) ([日本語対訳](https://raw.githubusercontent.com/Wind1808/Translated-into-Japanese/main/WebAIM/skipnav.txt))

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、スクリーンリーダーを使用していないユーザーでも文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agrip.org.uk/landmarks/) (英語)

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

TBD

## 関連情報

- [\<main>: メイン要素](/ja/docs/Web/HTML/Element/main)
- [main (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#main)
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ランドマークロール: ARIA を使用する: ロール、ステート、プロパティ](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The main element | HTML5 Doctor](https://html5doctor.com/the-main-element/)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
