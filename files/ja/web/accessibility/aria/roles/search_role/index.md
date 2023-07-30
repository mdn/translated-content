---
title: "ARIA: search ロール"
slug: Web/Accessibility/ARIA/Roles/search_role
---

検索 (`search`) [ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、ページ、サイト、またはサイトのコレクションの検索に使用されるページのセクションを識別するために使用します。

```html
<form role="search">
  <!-- 検索入力 -->
</form>
```

## 説明

検索 (`search`) ロールは、[ランドマーク](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)です。 ランドマークは、支援技術によって使用され、文書の大きなセクションを素早く識別してナビゲートすることができます。 検索 (`search`) ロールは、全体として組み合わせて検索機能を作成する項目およびオブジェクトを含むコンテナー要素に追加します。 `<form>` が検索フォームの場合、フォーム ([`form`](/ja/docs/Web/Accessibility/ARIA/Roles/Form_Role)) ロールの代わりに検索 (`search`) ロールを使用します。 文書に複数の検索が含まれている場合、それぞれに固有のラベルを持つべきです。 [`search` 型の `<input>` 要素](/ja/docs/Web/HTML/Element/input/search)はありますが、検索ランドマークを定義する HTML 要素はありません。

## 例

```html
<form id="search" role="search">
  <label for="search-input">このサイトを検索</label>
  <input type="search" id="search-input" name="search" spellcheck="false" />
  <input value="検索する" type="submit" />
</form>
```

## アクセシビリティに関する懸念

[ランドマークロール](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)は、文書のより大きな全体的なセクションを識別するために、控えめに使用することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

## ベストプラクティス

### 好ましい HTML

[`<form>` 要素](/ja/docs/Web/HTML/Element/form)を検索ロール (`role="search"`) の宣言と共に使用することで、最大限のサポートが提供されます。

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

...

<footer>
  <form id="site-search-bottom" role="search" aria-label="サイト全体">
    <!-- 検索入力 -->
  </form>
</footer>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、`aria-label="サイト全体の検索"` を使用した検索ロール (`role="search"`) の宣言は、「サイト全体の検索検索」として重複してアナウンスされることがあります。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、スクリーンリーダーを使用していないユーザーでも文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agrip.org.uk/landmarks/)（英語）

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

TBD

## 関連情報

- [\<form>: フォーム要素](/ja/docs/Web/HTML/Element/form)
- [\<input type="search">](/ja/docs/Web/HTML/Element/input/search)
- [HTML のセクションとアウトラインの使用](/ja/docs/orphaned/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- [ランドマークロール: ARIA を使用する: ロール、ステート、プロパティ](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
