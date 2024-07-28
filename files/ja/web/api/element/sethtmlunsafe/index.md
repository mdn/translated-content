---
title: "Element: setHTMLUnsafe() メソッド"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: 3c386c36f6f1d177ae2ed400668f21ea2ada5db3
---

{{APIRef("DOM")}}

**`setHTMLUnsafe()`** は {{domxref("Element")}} インターフェイスのメソッドで、HTML の文字列を {{domxref("DocumentFragment")}} として解釈し、DOM 内の要素のサブツリーを置き換えるために使用します。入力された HTML は[宣言的シャドウルート](/ja/docs/Web/HTML/Element/template#宣言的シャドウ_dom)を含むことがあります。

メソッド名の接尾辞 "Unsafe" は、そのメソッドが `<script>` 要素やスクリプト、イベントハンドラーのコンテンツ属性など、XSS に関連する安全でない可能性のある入力をサニタイズしたり除去したりしないことを示します。

HTML の文字列が特定のシャドウホストに複数の[宣言的シャドウルート](/ja/docs/Web/HTML/Element/template#宣言的シャドウ_dom)を定義している場合、最初の {{domxref("ShadowRoot")}} だけが作成されます。以降の宣言は、そのシャドウルート内の `<template>` 要素として解釈できます。

> [!NOTE]
> このメソッドは、HTML の文字列が宣言的なシャドウルートを格納する可能性がある場合に、{{domxref("Element.innerHTML")}} の代わりに使用しましょう。

## 構文

```js-nolint
setHTMLUnsafe(html)
```

### 引数

- `html`
  - : 解釈できる HTML を定義する文字列。

### 返値

なし (`undefined`)。

### 例外

なし。

## 例

下記のコードは、HTMLの文字列を解釈して `target` という要素を持つ `Element` に挿入する方法を示しています。

```js
const value = "<p>これはテキストの文字列です</p>"; // HTML　の文字列

// id が "target" の要素を取得し、文字列を設定する。
document.getElementById("target").setHTMLUnsafe(value);

// 結果（文字列として）: "<p>これはテキストの文字列です</p>"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
