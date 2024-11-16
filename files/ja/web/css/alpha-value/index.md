---
title: <alpha-value>
slug: Web/CSS/alpha-value
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{CSSRef}}

**`<alpha-value>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)であり、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} によって色の **{{Glossary("alpha", "アルファチャネル")}}** または **透過性** を表します。

## 構文

`<alpha-value>` の値は [`<number>`](/ja/docs/Web/CSS/number) または {{cssxref("percentage")}} のどちらかで指定します。

数値で指定した場合、有用な範囲は 0 （完全に透明）から 1.0 （完全に不透明）であり，その中間の 10 進数の値です。 0.5 は前景色が半分、背景色が半分使用されることを示します。 0 から 1 までの範囲の外にある値も許容されますが、 0 から 1 の範囲に収まるように[制限](<https://en.wikipedia.org/wiki/Clamping_(graphics)>)が行われます。

アルファ値がパーセント値で指定された場合は、 0% が完全に透明、 100% が完全に不透明に対応します。

## 公式定義

{{csssyntax}}

## 補間

アニメーションの際、 CSS の `<alpha-value>` データ型の値は実数の浮動小数点値として{{Glossary("interpolation", "補間")}}されます。補間の速度はアニメーションと関連づけられた[イージング関数](/ja/docs/Web/CSS/easing-function)によって決められます。

## 例

### テキスト色の透明度の設定

[`rgb()`](/ja/docs/Web/CSS/color_value/rgb)関数は、アルファ値を指定する 4 番目のオプション値を受け付けます。
次の例では、アルファ値を使って不透明度 60% の色を適用しています。

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
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
- [CSS 色](/ja/docs/Web/CSS/CSS_colors)
- [`<color>`](/ja/docs/Web/CSS/color_value)
