---
title: "ARIA: search ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/search_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

検索 (`search`) ロールは、ページ、サイト、またはサイトのコレクションの検索に使用されるページのセクションを識別するために使用します。

```html
<form role="search">
  <!-- 検索入力 -->
</form>
```

## 説明

検索 (`search`) ロールは、文書やアプリケーションの検索機能を構成するために組み合わされたすべての要素を囲むコンテナー要素に追加できる[ランドマーク](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#3._ランドマークロール)で、これには子孫要素として [`<input type="search">`](/ja/docs/Web/HTML/Reference/Elements/input/search) が含まれます。文書に複数の検索が含まれている場合、それぞれに固有のラベルを持つべきです。ただし、同じ検索が繰り返される場合は同じラベルを使用します。 [`<input>` 要素の `search` 型](/ja/docs/Web/HTML/Reference/Elements/input/search)がありますが、これ自体は検索ランドマークを定義するものではありません。検索ランドマークを定義するには、{{HTMLElement('search')}} 要素を使用してください。

## 例

{{HTMLElement('form')}} 要素が検索フォームの場合、[`form`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/form_role) ロールの代わりに `search` ロールを使用してください。

```html
<form id="search" role="search">
  <label for="search-input">このサイトを検索</label>
  <input type="search" id="search-input" name="search" spellcheck="false" />
  <input value="検索" type="submit" />
</form>
```

## アクセシビリティの考慮

[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles#3._ランドマークロール)は、文書のより大きな全体的なセクションを識別するために、控えめに使用することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

## ベストプラクティス

### 好ましい HTML

{{HTMLElement('form')}} を検索ロール (`role="search"`) の宣言と共に使用することで、最大限のサポートが提供されます。

### ランドマークのラベル付け

#### 複数のランドマーク

文書内に複数の検索 (`search`) ランドマークロールがある場合は、各ランドマークにラベルを付けます。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的を素早く理解することができます。

```html
<form id="site-search" role="search" aria-label="サイト全体">
  <!-- 検索入力 -->
</form>

...

<form id="page-search" role="search" aria-label="このページ">
  <!-- 検索入力 -->
</form>
```

#### 繰り返されるランドマーク

文書内で検索 (`search`) ランドマークロールが繰り返され、両方のランドマークのコンテンツが同じ場合は、各ランドマークに同じラベルを使用します。 この例では、ページの上部と下部でサイト全体の検索が繰り返されています。

```html
<header>
  <form id="site-search-top" role="search" aria-label="サイト全体">
    <!-- 検索入力 -->
  </form>
</header>

…

<footer>
  <form id="site-search-bottom" role="search" aria-label="サイト全体">
    <!-- 検索入力 -->
  </form>
</footer>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、検索ロール (`role="search"`) の宣言で [`aria-label="サイト全体の検索"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) と設定すると、「サイト全体の検索検索」として重複してアナウンスされることがあります。

## 仕様書

{{Specifications}}

## 関連情報

- {{HTMLElement('form')}} 要素
- {{HTMLElement('input')}} 要素
- {{HTMLElement('search')}} 要素
- [`<input type="search">`](/ja/docs/Web/HTML/Reference/Elements/input/search)
- [HTML のセクションとアウトラインの使用](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)
