---
title: HTMLLegendElement
slug: Web/API/HTMLLegendElement
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{ APIRef("HTML DOM") }}

**`HTMLLegendElement`** は、{{HTMLElement("legend")}} 要素のプロパティにアクセスできるようにするインターフェイスです。 {{domxref("HTMLElement")}} インターフェイスからプロパティとメソッドを継承しています。

{{InheritanceDiagram}}

## プロパティ

_親の {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLLegendElement.form")}} {{ReadOnlyInline}}
  - : この凡例 (legend) が所属するフォームフォームを表す {{domxref("HTMLFormElement")}} です。この凡例の親が fieldset 要素であれば、この属性は親 fieldset 要素の **form** 属性と同じ値を返します。それ以外の場合は、null を返します。
- {{domxref("HTMLLegendElement.accessKey")}}
  - : 文字列で、この要素にアクセスするための単一の文字のアクセスキーを表します。
- {{domxref("HTMLLegendElement.align")}} {{deprecated_inline}}
  - : 文字列で、フォームのセットに対する相対的な配置を表します。

## メソッド

_固有のメソッドはありません。 親の {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装する HTML 要素: {{HTMLElement("legend")}}
