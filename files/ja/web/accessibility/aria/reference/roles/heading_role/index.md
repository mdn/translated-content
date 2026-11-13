---
title: "ARIA: heading ロール"
short-title: heading
slug: Web/Accessibility/ARIA/Reference/Roles/heading_role
l10n:
  sourceCommit: 4550055f1afc5fb084d33f6e5a7910b7066e20c7
---

見出し (`heading`) ロールは、この要素をページやセクションの見出しとして定義します。 [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) 属性はさらなる構造を提供します。

## 解説

見出しロールは、この要素を見出しのように扱うべきであることを支援技術に示します。 スクリーンリーダーは、テキストを読み上げて、見出しのように書式設定されていることを示すことでしょう。 さらに、レベルは、この見出しがページ構造のどの部分を表すかを支援技術に伝えます。 レベル 1 の見出しは `aria-level="1"` で表され、通常、ページのメインの見出しを示し、レベル 2 の見出しは `aria-level="2"` で表され、最初のサブセクション、レベル 3 はそのサブセクション等々となります。

```html
<div role="heading" aria-level="1">これはページのメインの見出しです</div>
```

これにより、`<div>` 内のテキストがページのメイン見出しとして定義され、`aria-level` 属性によってレベル 1 として示されます。代わりに、{{HTMLElement("Heading_Elements", "h1")}}（から {{HTMLElement("Heading_Elements", "h6")}} ）の要素を使用することをお勧めします。

```html
<h1>これはページのメインの見出しです</h1>
```

### 関連する ARIA のロール、ステート、プロパティ

- [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : `aria-level` 属性は、文書構造における見出しのレベルを指定します。この属性は要求されます。作成者は、`role` が `heading` である要素が論理的な概要に整理されるよう、適切な入れ子レベルを指定する必要があります。誤ってこの属性を指定しなかった場合、ブラウザーは [代替値である 2](https://w3c.github.io/aria/#authorErrorDefaultValuesTable) を使用します。

### キーボード操作

このロールは特別なキーボードナビゲーションを必要としません。 どんな見出しもそうであるように、ID を与えることで、アンカーリンクから参照できるようになり、キーボードを介してアクセス可能となります。

### 必要な JavaScript 機能

- 必要なイベントハンドラー
  - : なし。
- 属性値の変更
  - : コンテンツを動的に挿入しない限り、通常は必要ありません。 万一そのようなことがあるならば、新しく追加された見出しには、文書構造の残りの部分と整合性のある値を持つ `aria-level` 属性が必要です。

> [!NOTE]
> `<div>` や `<span>` に `heading` ロールや `aria-level` を指定する代わりに、ネイティブの {{HTMLElement("Heading_Elements", "h1")}} から {{HTMLElement("Heading_Elements", "h6")}} までの要素を使用することを検討してください。これにより、このテキストが見出しであることを示し、構造のどの部分を表しているかを明確にできます。

## 例

以下は典型的なページ構造を示しています。

```html
<div id="container">
  <div role="heading" aria-level="1">メインのページ見出し</div>
  <p>この記事では、ページ構造の表示について説明します。</p>
  <div role="heading" aria-level="2">前書き</div>
  <p>導入テキスト。</p>
  <div role="heading" aria-level="2">第 1 章</div>
  <p>テキスト</p>
  <div role="heading" aria-level="3">第 1.1 章</div>
  <p>サブセクションにさらにテキストがあります。</p>
</div>
```

ただし、代わりに次のようにするべきです。

```html
<div id="container">
  <h1>メインのページ見出し</h1>
  <p>この記事では、ページ構造の表示について説明します。</p>
  <h2>前書き</h2>
  <p>導入テキスト。</p>
  <h2>第 1 章</h2>
  <p>テキスト</p>
  <h3>第 1.1 章</h3>
  <p>サブセクションにさらにテキストがあります。</p>
</div>
```

## アクセシビリティの考慮

> [!WARNING]
> [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用すると、見出しのコンテンツが支援技術から非表示になり、見出しの代わりにラベルが読み上げられます。

`heading` ロールと [`aria-level`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) 属性を使用する必要がある場合は、HTML との整合性を保つために、レベル 6 を超えないようにしてください。 理論的にはもっと大きくすることができ、一部のスクリーンリーダーはそれをサポートしているかもしれませんが、他のブラウザーとスクリーンリーダーの組み合わせでは結果が予測できない場合があります。

## ベストプラクティス

このロールを使用する最善の方法は、このロールを**まったく使用せず**に、代わりに上記の例に示すように、ネイティブの見出しタグ `<h1>` から `<h6>` を使用することです。`heading` ロールと `aria-level` 属性は、大きな変更を加えることができないレガシーコードのアクセシビリティを改良するためにのみ使用するべきです。

ARIA の `heading` ロールを使用する代わりに、意味的 HTML 要素を使用してください。

| HTML 要素                                 | `heading` ロール                      |
| ----------------------------------------- | ------------------------------------- |
| {{HTMLElement("Heading_Elements", "h1")}} | `<div role="heading" aria-level="1">` |
| {{HTMLElement("Heading_Elements", "h2")}} | `<div role="heading" aria-level="2">` |
| {{HTMLElement("Heading_Elements", "h3")}} | `<div role="heading" aria-level="3">` |
| {{HTMLElement("Heading_Elements", "h4")}} | `<div role="heading" aria-level="4">` |
| {{HTMLElement("Heading_Elements", "h5")}} | `<div role="heading" aria-level="5">` |
| {{HTMLElement("Heading_Elements", "h6")}} | `<div role="heading" aria-level="6">` |

### 追加の利点

なし。

## 仕様書

{{Specifications}}

## 優先順位

見出しロールは、それを使用している要素のネイティブな意味論的意味を上書きします。 さらに、`aria-level` 属性は、どのレベルの見出しが公開されているかを決定します。

## 関連情報

- [`<h1>`–`<h6>`: HTML の見出し要素](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)
