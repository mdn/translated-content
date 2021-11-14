---
title: background-position-x
slug: Web/CSS/background-position-x
tags:
  - CSS
  - CSS 背景
  - CSS プロパティ
  - Experimental
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.background-position-x
translation_of: Web/CSS/background-position-x
---
{{CSSRef}}

**`background-position-x`** は [CSS](/ja/docs/Web/CSS) のプロパティで、各背景画像における水平の初期位置を設定します。位置は {{cssxref("background-origin")}} によって設定された位置レイヤーに対する相対位置です。

{{EmbedInteractiveExample("pages/css/background-position-x.html")}}


このプロパティの値は、その後で一括指定の {{cssxref("background")}} または {{cssxref("background-position")}} プロパティが定義されると上書きされます。

## 構文

```css
/* キーワード値 */
background-position-x: left;
background-position-x: center;
background-position-x: right;

/* <percentage> 値 */
background-position-x: 25%;

/* <length> 値 */
background-position-x: 0px;
background-position-x: 1cm;
background-position-x: 8em;

/* 辺からの相対値 */
background-position-x: right 3px;
background-position-x: left 25%;

/* 複数の値 */
background-position-x: 0px, center;

/* グローバル値 */
background-position-x: inherit;
background-position-x: initial;
background-position-x: revert;
background-position-x: unset;
```

`background-position-x` プロパティは、1 つ以上の値をカンマで区切って指定します。

### 値

- `left`
  - : 背景画像の左端を、背景位置レイヤーの左端に配置します。
- `center`
  - : 背景画像を背景位置レイヤーの方向の中央に配置します。
- `right`
  - : 背景画像の右端を、背景位置レイヤーの右端に配置します。
- {{cssxref("&lt;length&gt;")}}
  - : 指定された背景画像の左辺の、背景位置レイヤーの左辺からのオフセットです。 (ブラウザーによってはオフセットに右辺を割り当てることもできます)。
- {{cssxref("&lt;percentage&gt;")}}
  - : 指定された背景画像の水平位置のオフセットで、コンテナーからの相対値です。 0% の値は背景画像の左端がコンテナーの左端の位置に配置されることを意味し、 100% の値は背景画像の*右端*が、コンテナーの*右端*の位置に配置されることを意味します。したがって、 50% の値では、背景画像を水平方向の中央に配置します。

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
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [複数の背景の使用](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
