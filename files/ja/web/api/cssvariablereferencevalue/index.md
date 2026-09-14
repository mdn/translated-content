---
title: CSSVariableReferenceValue
slug: Web/API/CSSVariableReferenceValue
l10n:
  sourceCommit: ecc46f2c8d6e09f0aa6e1b3f5194abfcf462e603
---

{{APIRef("CSSOM")}}

**`CSSVariableReferenceValue`** は [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Object_Model) のインターフェイスで、組み込み CSS 値のカスタム名を作成することができます。このオブジェクトは機能的に「CSS 変数」と呼ばれることがあり、 {{cssxref("var", "var()")}} 関数と同じ用途を提供します。カスタム名は 2 本のダッシュで始める必要があります。

## コンストラクター

- {{domxref("CSSVariableReferenceValue.CSSVariableReferenceValue", "CSSVariableReferenceValue()")}}
  - : 新しい `CSSVariableReferenceValue` オブジェクトを生成します。

## プロパティ

- {{domxref('CSSVariableReferenceValue.variable')}}
  - : コンストラクターに渡されたカスタム名を返します。
- {{domxref('CSSVariableReferenceValue.fallback')}} {{ReadOnlyInline}}
  - : カスタム名の組み込み CSS 値を返します。

## メソッド

なし。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
