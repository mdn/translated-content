---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLLabelElement`** インターフェイスは {{HTMLElement("label")}} 要素を操作するための独自のプロパティへのアクセスを提供します。基底となる {{domxref("HTMLElement")}} インターフェイスからメソッドとプロパティを継承しています。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLLabelElement.control")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLElement")}} で、このラベルが関連付けられているコントロールを表します。
- {{domxref("HTMLLabelElement.form")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormElement")}} オブジェクトで、このラベル付きコントロールが関連付けられているフォームを表します。関連付けられているコントロールがない場合や、コントロールがフォームに関連付けられていない場合は `null` になります。言い換えれば、これは `HTMLLabelElement.control.form` のショートカットです。
- {{domxref("HTMLLabelElement.htmlFor")}}
  - : 文字列で、ラベル付けしたコントロールの ID が入ります。これは [`for`](/ja/docs/Web/HTML/Element/label#for) 属性を反映します。

> [!NOTE]
> プログラムから `for` 属性を設定する場合は、 [`htmlFor`](/ja/docs/Web/API/HTMLLabelElement/htmlFor) を使用してください。

## インスタンスメソッド

_固有のメソッドはありません。親インターフェイスである {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("label")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement")}}
