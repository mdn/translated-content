---
title: CSSTransformValue
slug: Web/API/CSSTransformValue
l10n:
  sourceCommit: 930683b0618a36a5bb497cfaedced2f4de767889
---

{{APIRef("CSS Typed OM")}}

**`CSSTransformValue`** は {{domxref('CSS_Object_Model#css_型付きオブジェクトモデル_experimental','CSS 型付きオブジェクトモデル','',' ')}}のインターフェイスで、 CSS の {{CSSxref('transform')}} プロパティで使用される `transform-list` の値を表します。

{{InheritanceDiagram}}

## CSSTransformValue を継承しているインターフェイス

以下のリストは `CSSTransformValue` インターフェイスを継承しているインターフェイスの一覧です。

- {{domxref('CSSTranslate')}}
- {{domxref('CSSRotate')}}
- {{domxref('CSSScale')}}
- {{domxref('CSSSkew')}}
- {{domxref('CSSSkewX')}}
- {{domxref('CSSSkewY')}}
- {{domxref('CSSPerspective')}}
- {{domxref('CSSMatrixComponent')}}

## コンストラクター

- {{domxref("CSSTransformValue.CSSTransformValue", "CSSTransformValue()")}}
  - : 新しい `CSSTransformValue` オブジェクトを作成します。

## インスタンスプロパティ

- {{domxref("CSSTransformValue.length")}} {{ReadOnlyInline}}
  - : `CSSTransformValue` に格納されている座標変換コンポーネントの数を返します。
- {{domxref("CSSTransformValue.is2D")}} {{ReadOnlyInline}}
  - : 変換が 2D か 3D かを示す論理値を返します。

## インスタンスメソッド

_祖先である {{domxref('CSSStyleValue')}} からメソッドを継承しています。_

- {{domxref("CSSTransformValue.toMatrix()")}}
  - : 新しい {{domxref('DOMMatrix')}} オブジェクトを返します。
- {{domxref('CSSUnparsedValue.entries()')}}
  - : 指定されたオブジェクト自身で列挙可能なプロパティ `[key, value]` のペアを、 {{jsxref("Statements/for...in", "for...in")}} ループが提供するのと同じ順序で配列にして返します（for-in ループはプロトタイプチェーン内のプロパティも同様に列挙する点が異なります）。
- {{domxref('CSSUnparsedValue.forEach()')}}
  - : 指定された関数を `CSSTransformValue` オブジェクトの各要素に対して一度だけ実行します。
- {{domxref('CSSUnparsedValue.keys()')}}
  - : CSSTransformValue` オブジェクトの各インデックスに対応するキーを格納した新しい _配列イテレーター_ オブジェクトを返します。
- {{domxref('CSSUnparsedValue.values()')}}
  - : `CSSTransformValue` オブジェクトの個々の位置に対応する値を格納した新しい _配列イテレーター_ オブジェクトを返します。

## 例

To Do.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
