---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`CSSTransformComponent`** は {{domxref('CSS_Object_Model#css_typed_object_model','CSS 型付きオブジェクトモデル','',' ')}}のインターフェイスで、 {{domxref('CSSTransformValue')}} インターフェイスの一角です。

## インスタンスプロパティ

- {{domxref("CSSTransformComponent.is2D")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この座標変換が 2D か 3D かを示す論理値を返します。

## インスタンスメソッド

- {{domxref("CSSTransformComponent.toMatrix()")}} {{Experimental_Inline}}
  - : 新しい {{domxref('DOMMatrix')}} オブジェクトを返します。
- {{domxref("CSSTransformComponent.toString()")}} {{Experimental_Inline}}

  - : CSS の{{cssxref("transform-function","座標変換関数")}}の形の文字列です。

    これは `is2D` の値を使用して、 2D または 3D 座標変換のどちらかを返します。例えば、コンポーネントが {{domxref("CSSRotate")}} を表し、 `is2D` が false の場合、返す文字列は CSS 座標変換の [`rotate3D()`](/ja/docs/Web/CSS/transform-function/rotate3d) 関数の形式を取ります。true の場合、返される文字列は 2 次元の [`rotate3D()`](/ja/docs/Web/CSS/transform-function/rotate) 関数の形になります。

## 例

To do

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
