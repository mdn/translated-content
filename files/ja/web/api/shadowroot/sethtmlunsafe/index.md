---
title: "ShadowRoot: setHTMLUnsafe() メソッド"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shadow DOM")}}

**`setHTMLUnsafe()`** は {{domxref("ShadowRoot")}} インターフェイスのメソッドで、HTML の文字列を {{domxref("DocumentFragment")}} に解釈できるもので、DOM 内の要素のサブツリーを置き換えます。
入力 HTML には、[宣言型のシャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#宣言的シャドウ_dom)を含めることができます。

メソッド名の接尾辞 "Unsafe" は、このメソッドが、`<script>` 要素やスクリプト、イベントハンドラーの content 属性など、潜在的に危険な XSS 関連の入力がサニタイズ（無害化）または除去されないことを示しています。

HTML の文字列が、特定のシャドウホストで複数の[宣言型のシャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#宣言的シャドウ_dom)を定義している場合、最初の {{domxref("ShadowRoot")}} のみが作成されます。その後の宣言は、そのシャドウルート内の `<template>` 要素として解釈できます。

> [!NOTE]
> HTML の文字列が宣言的なシャドウルートを含む可能性がある場合は、{{domxref("ShadowRoot.innerHTML")}} の代わりにこのメソッドを使用しましょう。

## 構文

```js-nolint
setHTMLUnsafe(html)
```

### 引数

- `html`
  - : 文字列で、解釈する HTML を定義します。

### 返値

なし (`undefined`)。

### 例外

なし。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.innerHTML")}}
- {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
