---
title: scale
slug: Web/CSS/scale
l10n:
  sourceCommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{CSSRef}}

**`scale`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("transform")}} とは個別に独立しての変倍変換を指定することができます。これは一般のユーザーインターフェイスの利用においてはより適しており、 `transform` の値で座標変換関数を指定する実際の順序を思い出す手間を軽減します。

{{EmbedInteractiveExample("pages/css/scale.html")}}

## 構文

```css
/* キーワード値 */
scale: none;

/* 1 つの値 */
/* 1 または 100% より大きい値で要素を拡大 */
scale: 2;
/* 1 または 100% より小さい値で要素を縮小 */
scale: 50%;

/* 2 つの値 */
scale: 2 0.5;

/* 3 つの値 */
scale: 200% 50% 200%;

/* グローバル値 */
scale: inherit;
scale: initial;
scale: revert;
scale: revert-layer;
scale: unset;
```

{{EmbedInteractiveExample("pages/css/scale.html")}}

### 値

- 1 つの数値
  - : 該当する要素の変倍率を指定する {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} であり、 X および Y 軸で同じの変倍になります。 `scale()` （2D の変倍）関数に 1 つの値を指定した場合と等価です。
- 2 つの長さ/パーセント値
  - : 2 つの {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値で、2D の変倍における X 軸と Y 軸の変倍率を（それぞれ）指定します。 `scale()` （2D の変倍）関数に 2 つの値を指定した場合と等価です。
- 3 つの長さ/パーセント値
  - : 3 つの {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値で、3D の変倍における X 軸と Y 軸と Z 軸の変倍率を（それぞれ）指定します。 `scale3d()` （3D の変倍）関数と等価です。
- `none`
  - : 変倍が適用されないことを示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ホバー時の要素の変倍

次の例は、ホバー時に要素を変倍する方法を示しています。
2 つのボックスが表示されており、 1 つは 1 つの `scale` 値を持ち、両軸に沿って要素を変倍します。
2 つ目のボックスには2つの `scale` 値が示されており、 X 軸と Y 軸のそれぞれに沿って要素を変倍します。

#### HTML

```html
<div class="box" id="box1">single value</div>
<div class="box" id="box2">two values</div>
```

#### CSS

```css
.box {
  float: left;
  margin: 1em;
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}

#box1:hover {
  scale: 1.25;
}

#box2:hover {
  scale: 1.25 0.75;
}
```

#### 結果

{{EmbedLiveSample("Scaling_an_element_on_hover", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('translate')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

メモ: `skew` には独立した `transform` の値はありません
