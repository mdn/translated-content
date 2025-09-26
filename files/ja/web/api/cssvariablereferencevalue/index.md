---
title: CSSVariableReferenceValue
slug: Web/API/CSSVariableReferenceValue
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

**`CSSVariableReferenceValue`** は {{domxref('CSS Typed Object Model API','','',' ')}} のインターフェイスで、組み込み CSS 値のカスタム名を作成することができます。このオブジェクトは機能的に「CSS 変数」と呼ばれることがあり、 {{cssxref('var()')}} 関数と同じ用途を提供します。カスタム名は 2 本のダッシュで始める必要があります。

## コンストラクター

- {{domxref("CSSVariableReferenceValue.CSSVariableReferenceValue()")}}
  - : 新しい `CSSVariableReferenceValue` オブジェクトを生成します。

## プロパティ

- {{domxref('CSSVariableReferenceValue.variable')}}
  - : コンストラクターに渡されたカスタム名を返します。
- {{domxref('CSSVariableReferenceValue.fallback')}} {{readonlyinline}}
  - : カスタム名の組み込み CSS 値を返します。

## メソッド

なし。

## 仕様書

{{Specifications}}

## ブラウザーの対応

{{Compat}}
