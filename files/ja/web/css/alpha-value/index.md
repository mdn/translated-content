---
title: <alpha-value>
slug: Web/CSS/alpha-value
tags:
  - Alpha
  - Alpha-value
  - CSS
  - CSS データ型
  - CSS リファレンス
  - データ型
  - Example
  - リファレンス
  - 色
spec-urls: https://drafts.csswg.org/css-color/#type-def-alpha-value
translation_of: Web/CSS/alpha-value
---
{{CSSRef}}

**`<alpha-value>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)であり、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} によって色の **{{Glossary("alpha", "アルファチャネル")}}** または **透過性** を表します。

## 構文

`<alpha-value>` の値は [`<number>`](/ja/docs/Web/CSS/number) または [`<percentage>`](/ja/docs/Web/CSS/percentage) のどちらかで指定します。

数値で指定した場合、有用な範囲は 0 （完全に透明）から 1.0 （完全に不透明）であり，その中間の 10 進数の値です。 0.5 は前景色が半分、背景色が半分使用されることを示します。 0 から 1 までの範囲の外にある値も許容されますが、 0 から 1 の範囲に収まるように[制限](<https://en.wikipedia.org/wiki/Clamping_(graphics)>)が行われます。

アルファ値がパーセント値で指定された場合は、 0% が完全に透明、 100% が完全に不透明に対応します。

## 補間

アニメーションの際、 CSS の `<alpha-value>` データ型の値は実数の浮動小数点値として補間されます。補間の速度はアニメーションと関連づけられた[タイミング関数](/ja/docs/Web/CSS/easing-function)によって決められます。

## 例

### テキスト色の透明度の設定

ここでは、アルファ値を使用して部分的に透明なテキストを設定しています。

```css
/* <rgba()> */
color: rgba(34, 12, 64, 0.6);
color: rgba(34.0 12 64 / 60%);
```

### シェイプ画像の閾値の設定

こちらは、アルファ値を使用して画像のどの部分がシェイプの一部と考えられるかを特定しています。

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## 仕様書

{{Specifications}}

## 関連情報

- [基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
- [CSS データ型](/ja/docs/Web/CSS/CSS_Types)
- [CSS 色](/ja/docs/Web/CSS/CSS_Color)
- [`<color>`](/ja/docs/Web/CSS/color_value)
