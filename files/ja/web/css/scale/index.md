---
title: scale
slug: Web/CSS/scale
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - 座標変換
  - recipe:css-property
browser-compat: css.properties.scale
translation_of: Web/CSS/scale
---
{{CSSRef}}

**`scale`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{CSSxRef("transform")}} とは個別に独立しての拡大縮小変換を指定することができます。これは一般のユーザーインターフェイスの利用においてはより適しており、 `transform` の値で座標変換関数を指定する実際の順序を思い出す手間を軽減します。

## 構文

```css
/* キーワード値 */
scale: none;

/* 1 つの値 */
/* 1 より大きい値で要素を拡大 */
scale: 2;
/* 1 より小さい値で要素を縮小 */
scale: 0.5;

/* 2 つの値 */
scale: 2 0.5;

/* 3 つの値 */
scale: 2 0.5 2;

/* グローバル値 */
scale: inherit;
scale: initial;
scale: revert;
scale: unset;
```

### 値

- 1 つの数値
  - : 該当する要素の拡大率を指定する {{CSSxRef("&lt;number&gt;")}} であり、 X および Y 軸で同じの拡大縮小になります。 `scale()` (2D の拡大縮小) 関数に 1 つの値を指定した場合と等価です。
- 2 つの長さ/パーセント値
  - : 2 つの {{CSSxRef("&lt;number&gt;")}} 値で、2D の拡大縮小における X 軸と Y 軸の拡大率を (それぞれ) 指定します。 `scale()` (2D の拡大縮小) 関数に 2 つの値を指定した場合と等価です。
- 3 つの長さ/パーセント値
  - : 3 つの {{CSSxRef("&lt;number&gt;")}} 値で、3D の拡大縮小における X 軸と Y 軸と Z 軸の拡大率を (それぞれ) 指定します。 `scale3d()` (3D の拡大縮小) 関数と等価です。
- `none`
  - : 拡大率が適用されないことを示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Scaling_an_element_on_hover">上に乗った際の要素の拡大</h3>

#### HTML

```html
<div>
  <p class="scale">Scaling</p>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.scale {
  transition: scale 1s;
}

div:hover .scale {
  scale: 2 0.7;
}
```

#### Result

{{EmbedLiveSample("Scaling_an_element_on_hover")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('translate')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

メモ: `skew` には独立した `transform` の値はありません
