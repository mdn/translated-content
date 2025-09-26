---
title: CSSTransformComponent.toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`toString()`** は {{domxref("CSSTransformComponent")}} インターフェイスのメソッドで、{{Glossary("stringifier", "文字列化子")}}であり、 [CSS 座標変換](/ja/docs/Web/CSS/CSS_transforms)関数を返します。

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

CSS の{{cssxref("transform-function","座標変換関数")}}の形の文字列です。

これは `is2D` の値を使用して、 2D または 3D 座標変換のどちらかを返します。例えば、コンポーネントが {{domxref("CSSRotate")}} を表し、 `is2D` が false の場合、返す文字列は CSS 座標変換の [`rotate3D()`](/ja/docs/Web/CSS/transform-function/rotate3d) 関数の形式を取ります。true の場合、返される文字列は 2 次元の [`rotate3D()`](/ja/docs/Web/CSS/transform-function/rotate) 関数の形になります。

## 例

To Do

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
