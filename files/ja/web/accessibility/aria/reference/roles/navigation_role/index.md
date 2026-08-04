---
title: "ARIA: navigation ロール"
short-title: navigation
slug: Web/Accessibility/ARIA/Reference/Roles/navigation_role
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

`navigation` ロールは、ウェブサイトやページコンテンツをナビゲートするために使用される主要なリンクのグループを識別するために使用します。

```html
<div role="navigation" aria-label="メイン">
  <!-- 主要なウェブサイトの場所へのリンクのリスト -->
</div>
```

これはウェブサイトのメインナビゲーションです。

## 解説

`navigation` ロールは[ランドマーク](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#3._ランドマークロール)ロールです。 ランドマークロールは、ウェブページの構成と構造を識別する方法を提供します。 ページのセクションを分類およびラベル付けすることにより、レイアウトを通じて視覚的に伝えられる構造情報をプログラムで表現することができます。 スクリーンリーダーは、ランドマークロールを使用して、ページの重要なセクションへのキーボードナビゲーションを提供します。 HTML の {{HTMLElement('nav')}} 要素と同様に、ナビゲーションランドマークは、ウェブサイトまたはページコンテンツのナビゲーションに使用するリンクのグループ (例えば、リスト) を識別する手段を提供します。 1 つのページに複数のナビゲーションランドマークが含まれている場合は、それぞれが固有のラベルを持つべきです。 ページ上の 2 つ以上のナビゲーションに関するランドマークが同じリンクのセットを持つ場合は、それぞれに同じラベルを使用してください。

ナビゲーションランドマークを定義するには、HTML5 の [`<nav>` 要素](/ja/docs/Web/HTML/Reference/Elements/nav)を使用することをお勧めします。 HTML5 の `<nav>` 要素の手法を使用しない場合は、`role="navigation"` 属性を使用してナビゲーションランドマークを定義してください。

> [!NOTE]
> {{HTMLElement('nav')}} 要素を使用すると、自動的にそのセクションが `navigation` ロールを持つことを伝えることができます。 開発者は、ARIA を使用するよりも、正しい意味論の HTML 要素を使用することを常に優先すべきです。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : ナビゲーションの目的を簡単に説明します。 スクリーンリーダーはロールとラベルの内容の両方を読み上げるので、「ナビゲーション」という用語を省略します。

### キーボード操作

なし。

### 必要な JavaScript 機能

なし。

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

## アクセシビリティの考慮

[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#3._ランドマークロール)は、文書のより大きな全体的なセクションを識別するために、控えめに使用することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

## ベストプラクティス

### 好ましい HTML

{{HTMLElement('nav')}} 要素を使用すると、自動的にそのセクションが`navigation` ロールを持つことを伝えます。 可能な限り、`<nav>` 要素を代わりに使用することをお勧めします。

### ランドマークのラベル付け

#### 複数のランドマーク

文書内に複数のナビゲーション (`navigation`) ランドマークロールや {{HTMLElement('nav')}} 要素がある場合は、各ランドマークに対してラベルを付けてください。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的をすぐに理解することができます。

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

文書内のナビゲーション (`navigation`) ランドマークロールや {{HTMLElement('nav')}} 要素が文書内で繰り返され、両方のランドマークのコンテンツが同じ場合は、それぞれのランドマークに同じラベルを使用します。 この例としては、ページの上部と下部でメインナビゲーションを繰り返すことが挙げられます。

```html
<header>
  <nav id="main-nav" aria-label="メイン">
    <!-- 主要なウェブサイトの場所へのリンクのリスト -->
  </nav>
</header>

…

<footer>
  <nav id="footer-nav" aria-label="メイン">
    <!-- 主要なウェブサイトの場所へのリンクのリスト -->
  </nav>
</footer>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、`aria-label="主要なナビゲーション"` の `role="navigation"` の宣言は、「主要なナビゲーションナビゲーション」のように重複してアナウンスされます。

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('nav')}} 要素
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantic navigation with the nav element | HTML5 Doctor](https://html5doctor.com/nav-element/)
