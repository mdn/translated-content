---
title: "ARIA: figure ロール"
slug: Web/Accessibility/ARIA/Roles/figure_role
---

ARIA の図表 (`figure`) ロールは、適切な意味論がまだ存在しないページコンテンツ内の図表を識別するために使用できます。 図表は一般的に、正規のテキストの流れとは異なる方法で情報を伝える、1 つ以上の画像、コードスニペット、またはその他のコンテンツと見なされます。

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png" alt="画像の完全な代替説明" />
  <p id="caption">図表 1: キャプション</p>
</div>
```

上記の例では、画像とキャプションという 2 つの別々のコンテンツ項目で構成される図表があります。 これは、`role="figure"` を使用してコンテンツを図表として識別する {{htmlelement("div")}} 要素で囲まれています。

図表の作成に ARIA を使用する代わりに、ネイティブで意味論的な HTML {{htmlelement("figure")}} 要素を {{htmlelement("figcaption")}} 要素と共に使用することを検討してください。 以下の[ベストプラクティス](#best_practices)をご覧ください。

## 説明

(画像、動画、音声、コードスニペット、または他のコンテンツを含む可能性がある) 図表としてまとめて消費されるべきコンテンツは、 `role="figure"` を使用して図表として識別できます。

図表のコンテンツをどのように書くべきかについての鉄則はありません。 他のコンテンツと同様にアクセスできることを確認するべきです。 例えば、支援技術のユーザーによって知覚できることや、キーボードやマウスでナビゲートできることなどを確認します。

さまざまな方法で、図表にキャプションやラベルを追加できます。 次のように、図表を説明するコンテンツを含む要素に ID を追加し、その ID を図表の適切な属性内で参照して、図表をラベルに関連付けることができます。

```html
<div role="figure" aria-labelledby="figure-1">
  ...
  <p id="figure-1">図表を説明するテキスト。</p>
</div>
```

- テキストが簡潔なラベルである場合は、`aria-labelledby` を使用してください。
- テキストがより長い説明である場合は、`aria-describedby` を使用してください。

ここでも、ARIA 無しで、HTML の {{htmlelement("figure")}} 要素と {{htmlelement("figcaption")}} 要素を使用して、意味論的に行うことができます。

```html
<figure>
  ...
  <figcaption>図表を説明するテキスト。</figcaption>
</figure>
```

ラベルを画面に表示したくないが、支援技術のユーザーにわかりやすいラベルを提供したい場合は、図表コンテナーに `aria-label` 属性を使用できます。

```html
<div role="figure" aria-label="図表を説明するテキスト。">...</div>
```

`aria-label` は `<figure>` と一緒に使うことができます。

```html
<figure aria-label="図表を説明するテキスト。">...</figure>
```

一般的には、本文から図表を参照するべきですが、図表は参照元の要素と同じ場所に表示する必要はありません。

> **メモ:** 可能な限り、適切な意味論の HTML 要素を使用して図表とそのキャプション ({{htmlelement("figure")}} と {{htmlelement("figcaption")}}) をマークアップするべきです。 詳しくは、[ベストプラクティス](#best_practices)を参照してください。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- aria-describedby
  - : キャプションとしての参照テキストを含む要素の id。
- aria-labelledby
  - : ラベルとしてのテキストを含む要素の id。
- aria-label
  - : ラベルになるようなテキストを含む要素がない場合は、図表 (`figure`) ロールを持つ要素や `<figure>` 要素の `aria-label` の値として直接ラベルを追加できます。

### キーボードインタラクション

ロールに固有のキーボードインタラクションはありません。

### 必要な JavaScript 機能

ロールに固有の JavaScript 要件はありません。 HTML の意味論を制御できない場合は、JavaScript でこれらのロールとプロパティを追加することで、HTML のアクセシビリティを向上させることができます。

## 例

次のように、ページの最初の例を拡張して、`aria-labelledby` でその ID を参照することにより、図表の説明的なラベルを提供する段落を特定することもできます。

```
<div role="figure" aria-labelledby="figure-1">
  <img src="diagram.png"
       alt="素晴らしい4つの層と相対的な優先順位を示すダイヤグラム —
            音楽、猫、自然、そしてアイスクリーム">
  <pre><code>
    let awesome = ['音楽', '猫', '自然', 'アイスクリーム'];
  </code></pre>
  <p id="figure-1">図表 1: 素晴らしい4つの層。</p>
</div>
```

## ベストプラクティス

必要な場合にのみ `role="figure"` を使用してください。 例えば、HTML を制御できないが、JavaScript を使用して事後に動的にアクセシビリティを向上させることができる場合などです。

可能であれば、適切な意味論の HTML 要素を使用して、図表とそのキャプション ({{htmlelement("figure")}} と {{htmlelement("figcaption")}}) をマークアップするべきです。 例えば、上記の例は次のように書き直すべきです。

```html
<figure>
  <img
    src="diagram.png"
    alt="素晴らしい4つの層と相対的な優先順位を示すダイヤグラム —
       音楽、猫、自然、そしてアイスクリーム" />
  <pre><code>
    let awesome = ['音楽', '猫', '自然', 'アイスクリーム'];
  </code></pre>
  <figcaption>図表 1: 素晴らしい4つの層。</figcaption>
</figure>
```

## 仕様

{{Specifications}}

## スクリーンリーダーのサポート

TBD

## 関連情報

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [HTML \<figure> 要素](/ja/docs/Web/HTML/Element/figure)
- [HTML \<figcaption> 要素](/ja/docs/Web/HTML/Element/figcaption)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
