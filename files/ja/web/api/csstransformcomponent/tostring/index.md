---
title: "CSSTransformComponent: toString() メソッド"
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Typed OM")}}

**`toString()`** は {{domxref("CSSTransformComponent")}} インターフェイスのメソッドで、{{Glossary("stringifier", "文字列化子")}}であり、 [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)関数を返します。

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

CSS の[座標変換関数](/ja/docs/Web/CSS/Reference/Values/transform-function)の形の文字列です。

これは `is2D` の値を使用して、二次元または三次元座標変換のどちらかを返します。例えば、コンポーネントが {{domxref("CSSRotate")}} を表し、`is2D` が false の場合、返す文字列は CSS 座標変換の {{cssxref("transform-function/rotate3d", "rotate3d()")}} 関数の形式を取ります。true の場合、返される文字列は二次元の {{cssxref("transform-function/rotate", "rotate()")}} 関数の形になります。

## 例

To Do

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
