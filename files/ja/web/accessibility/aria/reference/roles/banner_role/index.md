---
title: "ARIA: banner ロール"
short-title: banner
slug: Web/Accessibility/ARIA/Reference/Roles/banner_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

`banner` ロールは、グローバルサイトヘッダーを定義します。これには、通常、ロゴ、会社名、検索アイコン、ページに関連する写真、スローガンなどが含まれます。

```html
<div role="banner">
  <img src="companylogo.svg" alt="会社名" />
  <h1>タイトル</h1>
  <p>サブタイトル</p>
</div>
```

デフォルトで、HTML の {{htmlelement("header")}} 要素は、{{htmlelement("aside")}}、{{htmlelement("article")}}、{{htmlelement("main")}}、{{htmlelement("nav")}}、{{htmlelement("section")}} の子孫でない限り、バナー `banner` ランドマークと同じ意味を持ちます。子孫である場合は {{htmlelement("header")}} 要素は [`generic`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role) ロールを公開し、サイト全体のバナーの相当品にはなりません。

## 解説

`banner` ランドマークロールは、それが適用されたコンテナー要素をヘッダーに変換します。 これは、一般的に全てのページの上部にあるサイト全体で共通のサイトヘッダーのコンテンツ用に予約されているべきです。

バナーには、通常ロゴやコーポレートアイデンティティ、おそらくサイト固有の検索ツールが含まれており、一般的にマーケティングチームがサイトの「ヘッダー」や「トップバナー」と呼ぶものです。[`header` 要素](/ja/docs/Web/HTML/Reference/Elements/header)の手法がそのバナーで使用されていない場合は、`role="banner"` の宣言を使用して支援技術にバナーランドマークを定義してください。

支援技術は、ページの `header` 要素が [`body` 要素](/ja/docs/Web/HTML/Reference/Elements/body) の子要素であり、かつ `article`、`aside`、`main`、`nav`、`section` のサブセクション内に含まれていない場合、`banner` として識別することができます。

各ページに `banner` ランドマークを持っていてもかまいませんが、各ページでは `banner` ロールを持つ `<header>` を 1 つだけに限定するべきです。`document` ロールや `application` ロールを含むページの場合、中に含まれるそれぞれの `document` ロールやアプリケーション `application` ロールも 1 つの `banner` ランドマークを持つことができます。ページに複数の `banner` ランドマークが含まれている場合は、それぞれに固有のアクセシブル名を付けるべきです。

### 関連する ARIA のロール、ステート、プロパティ

なし。

### キーボード操作

なし。

### 必要な JavaScript 機能

なし。

## 例

ここでは、ナビゲーションへ飛ぶリンク、ロゴ、タイトル、サブタイトルを含む簡単なバナーがあります。 これがサイトのメインヘッダーであるため、`banner` ランドマークロールをコンテナー要素に追加しています。

```html-nolint
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">メインコンテンツへスキップ</a>
  <img src="images/w3c.png" alt="W3C ロゴ" />
  <h1>ARIA ランドマーク</h1>
  <p>容易なナビゲーションのためのページのサブセクションの特定</p>
  <nav>…</nav>
</div>
```

また、上記の HTML の `header` 要素で記述することもできます。

```html-nolint
<header>
  <a href="#main" id="skipToMain" class="skiptocontent">メインコンテンツへスキップ</a>
  <img src="images/w3c.png" alt="W3C ロゴ" />
  <h1>ARIA ランドマーク</h1>
  <p>容易なナビゲーションのためのページのサブセクションの特定</p>
  <nav>…</nav>
</header>
```

## ベストプラクティス

{{HTMLElement('header')}} 要素を使用すると、その要素のロールが `banner` であることが自動的に伝えられます。可能であれば、`banner` ロールではなく、意味的要素である `<header>` 要素の使用を優先してください。

`header` 要素を使用し、それがページ内のどのサブセクションの子要素にもならないよう保証するのが最善ですが、場合によっては、基盤となる HTML にアクセスできないこともあります。そのような場合は、JavaScript で `banner` として公開すべきページの要素に `banner` というロールを追加することができます。このようにしてページのバナーを特定することは、サイトのアクセシビリティ向上に役立ちます。

## 仕様書

{{Specifications}}

## 関連情報

- [HTML `header` 要素](/ja/docs/Web/HTML/Reference/Elements/header)
- [WC3 Landmarks Example](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
