---
title: CSSUnparsedValue
slug: Web/API/CSSUnparsedValue
l10n:
  sourceCommit: 930683b0618a36a5bb497cfaedced2f4de767889
---

{{APIRef("CSS Typed OM")}}

**`CSSUnparsedValue`** は {{domxref('CSS_Object_Model#css_型付きオブジェクトモデル_experimental','CSS 型付きオブジェクトモデル','',' ')}}のインターフェイスで、[カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables)を参照するプロパティ値を表します。これは、文字列の断片と変数の参照のリストから成ります。

カスタムプロパティは `CSSUnparsedValue` と {{cssxref("var", "var()")}} の参照（これは {{domxref('CSSVariableReferenceValue')}} で参照される）で表現されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
  - : 新しい `CSSUnparsedValue` オブジェクトを生成します。

## プロパティ

- {{domxref('CSSUnparsedValue.length')}}
  - : `CSSUnparsedValue` オブジェクトの項目数を返します。

## メソッド

- {{domxref('CSSUnparsedValue.entries()')}}
  - : 指定されたオブジェクトの列挙可能なプロパティ `[key, value]` の組の配列を、 {{jsxref("Statements/for...in", "for...in")}} ループで提供されるのと同じ順序で返します（違いは for-in ループがプロトタイプチェーン上のプロパティも列挙することです）。
- {{domxref('CSSUnparsedValue.forEach()')}}
  - : 指定された関数を、 `CSSUnparsedValue` オブジェクトのそれぞれの要素に対して実行します。
- {{domxref('CSSUnparsedValue.keys()')}}
  - : `CSSUnparsedValue` オブジェクト内のそれぞれの位置におけるキーを持つ新しい配列イテレーターオブジェクトを返します。
- {{domxref('CSSUnparsedValue.values()')}}
  - : `CSSUnparsedValue` オブジェクト内のそれぞれの位置における値を持つ新しい配列イテレーターオブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- [CSS 型付きオブジェクトモデルの使用](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)
