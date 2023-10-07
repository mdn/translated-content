---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

**`HTMLMetaElement`** インターフェイスは、HTML 内で [`<meta>`](/ja/docs/Web/HTML/Element/meta) 要素として提供される、文書に関する説明的なメタデータが入ります。 {{domxref("HTMLElement")}} インターフェイスから、すべてのプロパティとメソッドを継承しています。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLMetaElement.charset")}}
  - : HTML 文書の文字エンコーディングです。
- {{domxref("HTMLMetaElement.content")}}
  - : 文書メタデータの名前と値の組の 'value' の部分です。
- {{domxref("HTMLMetaElement.httpEquiv")}}
  - : 文書の HTTP レスポンスヘッダー、プラグマディレクティブの名前です。
- {{domxref("HTMLMetaElement.media")}}
  - : `theme-color` メタデータプロパティのメディアコンテキストです。
- {{domxref("HTMLMetaElement.name")}}
  - : 文書の名前付きメタデータを定義する名前と値の組の 'name' の部分です。
- {{domxref("HTMLMetaElement.scheme")}} {{deprecated_inline}}
  - : {{domxref("HTMLMetaElement.content")}} 属性の値の値のスキームを定義します。
    これは非推奨です。新しいウェブページでは使用しないでください。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 例

次の 2 つの例は `HTMLMetaElement` インターフェイスを使用する一般的な手法を示します。
固有の例については、この節の[インスタンスプロパティ](#インスタンスプロパティ)で記述されている各プロパティのページを参照してください。

### ページの description のメタデータを設定

次の例では、新しい `<meta>` 要素を作成し、`name` 属性に [`description`](/ja/docs/Web/HTML/Element/meta/name#html_仕様書で定義されている標準メタデータ名) を設定しています。`content` 属性には文書の説明が設定し、それを文書の `<head>` に追加します。

```js
let meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "<meta> 要素は、名前と値のペアで文書のメタデータを提供するのに使用できます。name 属性はメタデータの名前を与え、content 属性は値を与えます。";
document.head.appendChild(meta);
```

### viewport メタデータの設定

次の例では、新しい `<meta>` 要素を作成して `name` 属性に [`viewport`](/ja/docs/Web/HTML/Element/meta/name#他の仕様書で定義されている標準メタデータ) を設定する方法を紹介しています。
`content` 属性はビューポートサイズを設定し、文書の `<head>` に追加されます。

```js
var meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);
```

ビューポートの設定について詳しくは、[ビューポートの基本](/ja/docs/Web/HTML/Viewport_meta_tag#ビューポートの基本)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("meta")}}
