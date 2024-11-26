---
title: "Document: parseHTMLUnsafe() 静的メソッド"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: 3c386c36f6f1d177ae2ed400668f21ea2ada5db3
---

{{APIRef("DOM")}}

**`parseHTMLUnsafe()`** は {{domxref("Document")}} オブジェクトの静的メソッドで、HTML の文字列（[宣言的なシャドウルート](/ja/docs/Web/HTML/Element/template#宣言的なシャドウルート)を含む可能性があるもの）を解釈し、新しい {{domxref("Document")}} インスタンスを生成するために使用します。

メソッド名の接尾辞 "Unsafe" は、 `<script>` 要素が構文解析中に評価されないのに対し、このメソッドは他にも安全でない可能性のある XSS 関連の入力をサニタイズしないことを示します。

結果として得られる `Document` は、[コンテンツ型](/ja/docs/Web/API/Document/contentType)が "text/html"、[文字セット](/ja/docs/Web/API/Document/characterSet)には UTF-8、URL には "about:blank" が指定されます。

## 構文

```js-nolint
Document.parseHTMLUnsafe(input)
```

### 引数

- `html`
  - : 解釈する HTML の文字列です。

### 返値

{{domxref("Document")}} です。

### 例外

なし。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMParser.parseFromString()")}}: HTML または XML を DOM ツリーに入れる
- {{domxref("Element.setHTMLUnsafe")}}
