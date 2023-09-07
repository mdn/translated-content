---
title: "ARIA: navigation ロール"
slug: Web/Accessibility/ARIA/Roles/navigation_role
---

ナビゲーション (`navigation`) [ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、ウェブサイトやページコンテンツをナビゲートするために使用される主要なリンクのグループを識別するために使用します。

```html
<div role="navigation" aria-label="メイン">
  <!-- 主要なウェブサイトの場所へのリンクのリスト -->
</div>
```

これはウェブサイトのメインナビゲーションです。

## 説明

ナビゲーション (`navigation`) ロールは、[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)です。 ランドマークロールは、ウェブページの構成と構造を識別する方法を提供します。 ページのセクションを分類およびラベル付けすることにより、レイアウトを通じて視覚的に伝えられる構造情報をプログラムで表現することができます。 スクリーンリーダーは、ランドマークロールを使用して、ページの重要なセクションへのキーボードナビゲーションを提供します。 HTML の `<nav>` 要素と同様に、ナビゲーションランドマークは、ウェブサイトまたはページコンテンツのナビゲーションに使用するリンクのグループ (例えば、リスト) を識別する手段を提供します。 1 つのページに複数のナビゲーションランドマークが含まれている場合は、それぞれが固有のラベルを持つべきです。 ページ上の 2 つ以上のナビゲーションに関するランドマークが同じリンクのセットを持つ場合は、それぞれに同じラベルを使用してください。

ナビゲーションランドマークを定義するには、HTML5 の [`<nav>` 要素](/ja/docs/Web/HTML/Element/nav)を使用することをお勧めします。 HTML5 の `<nav>` 要素の手法を使用しない場合は、`role="navigation"` 属性を使用してナビゲーションランドマークを定義してください。

> **メモ:** [`<nav>` 要素](/ja/docs/Web/HTML/Element/nav)を使用すると、自動的にセクションがナビゲーション (`navigation`) ロールを持つことを伝えることができます。 開発者は、ARIA を使用するよりも、正しい意味論の HTML 要素を使用することを常に好むべきです。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- aria-label
  - : ナビゲーションの目的を簡単に説明します。 スクリーンリーダーはロールとラベルの内容の両方を読み上げるので、「ナビゲーション」という用語を省略します。

### キーボードインタラクション

無し

### 必要な JavaScript 機能

無し

## 例

```html
<div role="navigation" aria-label="顧客サービス">
  <ul>
    <li><a href="#">ヘルプ</a></li>
    <li><a href="#">注文追跡</a></li>
    <li><a href="#">出荷と配達</a></li>
    <li><a href="#">返品</a></li>
    <li><a href="#">お問い合わせ</a></li>
    <li><a href="#">お店を探す</a></li>
  </ul>
</div>
```

## アクセシビリティに関する懸念

[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、文書のより大きな全体的なセクションを識別するために、控えめに使用することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

## ベストプラクティス

### 好ましい HTML

[`<nav>` 要素](/ja/docs/Web/HTML/Element/nav)を使用すると、自動的にセクションがナビゲーション (`navigation`) ロールを持つことを伝えます。 可能な限り、`<nav>` 要素を代わりに使用することをお勧めします。

### ランドマークのラベル付け

#### 複数のランドマーク

文書内に複数のナビゲーション (`navigation`) ランドマークロールや [`<nav>` 要素](/ja/docs/Web/HTML/Element/nav)がある場合は、各ランドマークに対してラベルを付けてください。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的をすぐに理解することができます。

```html
<div id="main-nav" role="navigation" aria-label="メイン">
  <!-- コンテンツ -->
</div>

...

<nav id="footer-nav" aria-label="フッター">
  <!-- コンテンツ -->
</nav>
```

#### 繰り返されるランドマーク

文書内のナビゲーション (`navigation`) ランドマークロールや [`<nav>` 要素](/ja/docs/Web/HTML/Element/nav)が文書内で繰り返され、両方のランドマークのコンテンツが同じ場合は、それぞれのランドマークに同じラベルを使用します。 この例としては、ページの上部と下部でメインナビゲーションを繰り返すことが挙げられます。

```html
<header>
  <nav id="main-nav" aria-label="メイン">
    <!-- 主要なウェブサイトの場所へのリンクのリスト -->
  </nav>
</header>

...

<footer>
  <nav id="footer-nav" aria-label="メイン">
    <!-- 主要なウェブサイトの場所へのリンクのリスト -->
  </nav>
</footer>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、`aria-label="主要なナビゲーション"` の `role="navigation"` の宣言は、「主要なナビゲーションナビゲーション」のように重複してアナウンスされます。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、スクリーンリーダーを使用していないユーザーでも文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agrip.org.uk/landmarks/) (英語)

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

TBD

## 関連情報

- [\<nav>: ナビゲーションセクション要素](/ja/docs/Web/HTML/Element/nav)
- [navigation (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#navigation)
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ランドマークロール: ARIA を使用する: ロール、ステート、プロパティ](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantic navigation with the nav element | HTML5 Doctor](https://html5doctor.com/nav-element/)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
