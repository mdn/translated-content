---
title: perspective-origin
slug: Web/CSS/perspective-origin
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

**`perspective-origin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、閲覧者の視点の位置を決めます。これは {{cssxref("perspective")}} プロパティによって*消点*として使われます。

{{EmbedInteractiveExample("pages/css/perspective-origin.html")}}

**`perspective-origin`** および {{cssxref('perspective')}} の各プロパティは、三次元空間で座標変換される子の親に設定するものであり、座標変換される要素に設定される [`perspective()`](/ja/docs/Web/CSS/transform-function/perspective) 変換関数とは異なります。

## 構文

```css
/* 1 値構文 */
perspective-origin: x-position;

/* 2 値構文 */
perspective-origin: x-position y-position;

/* x-position と y-position がキーワードである場合は、
   以下の構文も有効 */
perspective-origin: y-position x-position;

/* グローバル値 */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: revert;
perspective-origin: revert-layer;
perspective-origin: unset;
```

### 値

- _x-position_

  - : *消失点*の横座標上の位置を示します。次のいずれかの値です。

    - {{cssxref("&lt;length-percentage&gt;")}} は、絶対的な length 値、または要素の幅に対する相対値で位置を示します。負の数も使えます。
    - `left` キーワードは、length 値 `0` を示すショートカットです。
    - `center` キーワードは、パーセント値 `50%` を示すショートカットです。
    - `right` キーワードは、パーセント値 `100%` を示すショートカットです。

- _y-position_

  - : *消失点*の縦座標上の位置を示します。次のいずれかの値です。

    - {{cssxref("&lt;length-percentage&gt;")}} は、絶対的な length 値、または要素の高さに対する相対値で位置を示します。負の数も使えます。
    - `top` キーワードは、 length 値 `0` を示すショートカットです。
    - `center` キーワードは、パーセント値 `50%` を示すショートカットです。
    - `bottom` キーワードは、パーセント値 `100%` を示すキーワードです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 視点の原点の変更

`perspective-origin` の変更方法を示す例は、 [CSS 座標変換の使用 > 視点の変更](/ja/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#視点の変更)にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref('transform-style')}}
- {{cssxref('transform-function')}}
- {{cssxref('perspective')}}
- [`transform: perspective()`](/ja/docs/Web/CSS/transform-function/perspective) 関数
