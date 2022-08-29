---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
tags:
  - API
  - HTML DOM
  - HTMLLabelElement
  - インターフェイス
  - リファレンス
browser-compat: api.HTMLLabelElement
translation_of: Web/API/HTMLLabelElement
---
{{ APIRef("HTML DOM") }}

**`HTMLLabelElement`** インターフェイスは {{HTMLElement("label")}} 要素を操作するための独自のプロパティへのアクセスを提供します。基底となる {{domxref("HTMLElement")}} インターフェイスからメソッドとプロパティを継承しています。

{{InheritanceDiagram}}

## プロパティ

_親インターフェイスである {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLLabelElement.control")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLElement")}} で、このラベルが関連付けられているコントロールを表します。
- {{domxref("HTMLLabelElement.form")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormElement")}} オブジェクトで、このラベル付きコントロールが関連付けられているフォームを表します。関連付けられているコントロールがない場合や、コントロールがフォームに関連付けられていない場合は `null` になります。言い換えれば、これは `HTMLLabelElement.control.form` のショートカットです。
- {{domxref("HTMLLabelElement.htmlFor")}}
  - : 文字列で、ラベル付けしたコントロールの ID が入ります。これは {{htmlattrxref("for", "label")}} 属性を反映します。

> **Note:** プログラムから `for` 属性を設定する場合は、 [`htmlFor`](/ja/docs/Web/API/HTMLLabelElement/htmlFor) を使用してください。

## メソッド

_特有のメソッドはありません。親インターフェイスである {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("label")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement")}}
