---
title: HTMLParamElement
slug: Web/API/HTMLParamElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLParamElement`** インターフェイスは、（継承によって使用できる通常の {{domxref("HTMLElement")}} インターフェイスのものに加えて） {{HTMLElement("param")}} 要素を操作するための特別なプロパティを提供し、 {{HTMLElement("object")}} 要素の引数として機能するキーと値の組を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLParamElement.name")}} {{Deprecated_Inline}}
  - : 文字列で、引数の名前を表します。 [`name`](/ja/docs/Web/HTML/Element/param#name) 属性を反映しています。
- {{domxref("HTMLParamElement.value")}} {{Deprecated_Inline}}
  - : 文字列で、この引数に関連付けられた値を表します。 [`value`](/ja/docs/Web/HTML/Element/param#value) 属性を反映しています。
- {{domxref("HTMLParamElement.type")}} {{Deprecated_Inline}}
  - : 文字列で、 `valueType` が `"ref"` の値であった場合の引数の型を示します。 [`type`](/ja/docs/Web/HTML/Element/param#type) 属性を反映しています。
- {{domxref("HTMLParamElement.valueType")}} {{Deprecated_Inline}}
  - : 文字列で、 `value` の型を表します。これは [`valuetype`](/ja/docs/Web/HTML/Element/param#valuetype) 属性を反映しており、値は `"data"`, `"ref"`, `"object"` のいずれかになります。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("param") }}
