---
title: background-position-y
slug: Web/CSS/background-position-y
tags:
  - CSS
  - CSS 背景
  - CSS プロパティ
  - Experimental
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.background-position-y
translation_of: Web/CSS/background-position-y
---
{{CSSRef}}

**`background-position-y`** は [CSS](/ja/docs/Web/CSS) のプロパティで、各背景画像における垂直の初期位置を設定します。位置は {{cssxref("background-origin")}} によって設定された位置レイヤーに対する相対位置です。

{{EmbedInteractiveExample("pages/css/background-position-y.html")}}


このプロパティの値は、その後で一括指定の {{cssxref("background")}} または {{cssxref("background-position")}} プロパティが定義されると上書きされます。

## 構文

```css
/* キーワード値 */
background-position-y: top;
background-position-y: center;
background-position-y: bottom;

/* <percentage> 値 */
background-position-y: 25%;

/* <length> 値 */
background-position-y: 0px;
background-position-y: 1cm;
background-position-y: 8em;

/* 辺からの相対値 */
background-position-y: bottom 3px;
background-position-y: bottom 10%;

/* 複数の値 */
background-position-y: 0px, center;

/* グローバル値 */
background-position-y: inherit;
background-position-y: initial;
background-position-y: revert;
background-position-y: unset;
```

`background-position-y` プロパティは、 1 つ以上の値をカンマで区切って指定します。

### 値

- `top`
  - : 背景画像の上端を、背景位置レイヤーの上端に合わせます。
- `center`
  - : 背景画像を垂直方向の中央を、背景位置レイヤーの垂直方向の中央に合わせます。
- `bottom`
  - : 背景画像の下端を、背景位置レイヤーの下端に合わせます。
- {{cssxref("&lt;length&gt;")}}
  - : 指定された背景画像の垂直方向の辺の、対応する背景位置レイヤーの上側の垂直方向の辺を基準としたオフセットです。 (一部のブラウザーではオフセットの下辺に割り当てることができます。)
- {{cssxref("&lt;percentage&gt;")}}
  - : 指定された背景画像のコンテナーに対する垂直方向の相対位置のオフセットです。0%の値は背景画像の上辺がコンテナーの上辺に配置されることを意味し、100% の値は背景画像の下辺がコンテナーの下辺に配置されることを意味しますので、50% の値は背景画像を垂直方向に中央揃えします。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Basic_example">基本的な例</h3>

次の例は、シンプルな背景画像の実装で、background-position-x と background-position-y を使って、画像の水平方向と垂直方向の位置を別々に定義しています。

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background-color: skyblue;
  background-image: url(https://media.prod.mdn.mozit.cloud/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png);
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom 10px;
}
```

#### 結果

{{EmbedLiveSample('Basic_example', '100%', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("background-position")}}
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [複数の背景の使用](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
