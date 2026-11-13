---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Typed OM")}}

**`CSSTransformComponent`** は [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Object_Model) のインターフェイスで、 {{domxref('CSSTransformValue')}} インターフェイスの一角です。

## インスタンスプロパティ

- {{domxref("CSSTransformComponent.is2D")}} {{ReadOnlyInline}}
  - : この座標変換が二次元か三次元かを示す論理値を返します。

## インスタンスメソッド

- {{domxref("CSSTransformComponent.toMatrix()")}}
  - : 新しい {{domxref('DOMMatrix')}} オブジェクトを返します。
- {{domxref("CSSTransformComponent.toString()")}}
  - : CSS の[座標変換関数](/ja/docs/Web/CSS/Reference/Values/transform-function)の形の文字列です。

    これは `is2D` の値を使用して、この座標変換が二次元であるか三次元であるかを返します。例えば、コンポーネントが {{domxref("CSSRotate")}} を表し、 `is2D` が false の場合、返す文字列は CSS 座標変換の {{cssxref("transform-function/rotate3d", "rotate3d()")}} 関数の形式を取ります。true の場合、返される文字列は二次元の {{cssxref("transform-function/rotate", "rotate()")}} 関数の形になります。

## 例

To do

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
