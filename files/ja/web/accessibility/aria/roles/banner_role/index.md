---
title: "ARIA: banner ロール"
slug: Web/Accessibility/ARIA/Roles/banner_role
---

バナー (`banner`) ロールは、ページの先頭に頻繁に配置される一般的で有益なコンテンツを表します。 これには、通常、ロゴ、会社名、検索アイコン、ページに関連する写真、またはスローガンが含まれます。

```html
<div role="banner">
  <img src="companylogo.svg" alt="会社名" />
  <h1>タイトル</h1>
  <p>サブタイトル</p>
</div>
```

HTML5 の {{htmlelement("header")}} 要素は、{{htmlelement("aside")}}、{{htmlelement("article")}}、{{htmlelement("main")}}、{{htmlelement("nav")}}、または {{htmlelement("section")}} の子孫でない限り、バナー (`banner`) ランドマークと同じ意味を持ちます。

## 説明

バナーランドマークロール (`banner` landmark role) は、それが適用されたコンテナー要素をヘッダーに変換します。 これは、一般的に全てのページの上部にあるサイト全体で共通のサイトヘッダーのコンテンツ用に予約されているべきです。

バナーには、通常ロゴやコーポレートアイデンティティ、おそらくサイト固有の検索ツールが含まれており、一般的にマーケティングチームがサイトのヘッダーやトップバナーと呼ぶものです。 {{htmlelement("header")}} 要素の手法がそのバナーで使用されていない場合は、支援技術に対してバナー (`banner`) ランドマークを定義するために、`role="banner"` の宣言を使用するべきです。

支援技術は、{{htmlelement("body")}} 要素の子孫であり、`<article>`、`<aside>`、`<main>`、`<nav>` または `<section>` サブセクション内にネストされていない場合、バナーとしてページのメイン `<header>` 要素を識別できます。

各ページにバナー (`banner`) ランドマークを持っていてもかまいませんが、各ページはバナー (`banner`) ロールを持つ `<header>` を 1 つだけに限定するべきです。 ネストされた文書 (`document`) ロールおよび/またはアプリケーション (`application`) ロールを含むページの場合、ネストされたそれぞれの文書 (`document`) ロールやアプリケーション (`application`) ロールも 1 つのバナー (`banner`) ランドマークを持つことができます。 ページに複数のバナー (`banner`) ランドマークが含まれている場合は、それぞれに固有のラベルを付けるべきです。

### 関連する ARIA のロール、ステート、プロパティ

無し

### キーボードインタラクション

無し

### 必要な JavaScript 機能

無し

## 例

ここでは、ナビゲーションへ飛ぶリンク、ロゴ、タイトル、サブタイトルを含む簡単なバナーがあります。 これがサイトのメインヘッダーであるため、バナー (`banner`) ランドマークロールをコンテナー要素に追加しています。

```html
<div role="banner">
  <a href="#nav" id="skipToMenu" class="skiptocontent"
    >キーボードナビゲーションへ飛ぶ</a
  >
  <img src="images/w3c.png" alt="W3C ロゴ" />
  <h1>ARIA ランドマーク</h1>
  <p>容易なナビゲーションのためのページのサブセクションの特定</p>
</div>
```

また、上記の HTML の `<header>` 要素で記述することもできます。

```html
<header>
  <a href="#nav" id="skipToMenu" class="skiptocontent"
    >キーボードナビゲーションへ飛ぶ</a
  >
  <img src="images/w3c.png" alt="W3C ロゴ" />
  <h1>ARIA ランドマーク</h1>
  <p>容易なナビゲーションのためのページのサブセクションの特定</p>
</header>
```

## ベストプラクティス

`<header>` 要素を使用して、ページの任意のサブセクションの子孫でないことを保証するのが最善ですが、場合によっては基になる HTML にアクセスできないことがあります。 この場合、JavaScript を使用してページのメインヘッダーにバナー (`banner`) ロールを追加できます。 この方法でページのバナーを特定すると、サイトのアクセシビリティが向上します。

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

TBD

## 関連情報

- HTML {{htmlelement("header")}} 要素
- [WC3 Landmarks Example](https://w3c.github.io/aria-practices/examples/landmarks/banner.html)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
