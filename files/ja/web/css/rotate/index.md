---
title: rotate
slug: Web/CSS/rotate
l10n:
  sourceCommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{CSSRef}}

**`rotate`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{CSSxRef("transform")}} とは個別に独立して回転変換を指定することができます。これは一般のユーザーインターフェイスの利用においてはより適しており、 `transform` の値で座標変換関数を指定する実際の順序を覚えておく手間を軽減します。

{{EmbedInteractiveExample("pages/css/rotate.html")}}

## 構文

```css
/* キーワード値 */
rotate: none;

/* 角度値 */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;

/* x, y, z 軸名と角度 */
rotate: x 90deg;
rotate: y 0.25turn;
rotate: z 1.57rad;

/* ベクトルと角度値 */
rotate: 1 1 1 90deg;

/* グローバル値 */
rotate: inherit;
rotate: initial;
rotate: revert;
rotate: revert-layer;
rotate: unset;
```

{{EmbedInteractiveExample("pages/css/rotate.html")}}

### 値

- 角度値
  - : {{CSSxRef("&lt;angle&gt;")}} で、 z 軸の周囲を該当する要素を貫いて回転させる角度を指定します。`rotate()` (二次元回転) 関数と等価です。
- x, y, z 軸と角度値
  - : 該当する要素を回転する軸の名前 (`"x"`, "`y`", "`z"`) と、要素を貫いて回転する角度を指定する {{CSSxRef("&lt;angle&gt;")}} です。 `rotateX()`/`rotateY()`/`rotateZ()` (三次元回転) 関数と等価です。
- ベクトルと角度値
  - : 要素を回転させたい直線を表す原点を中心としたベクトルを表す 3 つの数値 {{CSSxRef("&lt;number&gt;")}} と、要素を貫いて回転する角度を指定する {{CSSxRef("&lt;angle&gt;")}} です。 `rotate3d()` (三次元回転) 関数と等価です。
- `none`
  - : 回転を適用しないことを表します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ホバー時に要素を回転

次の例は、 `rotate` プロパティを使用して、ホバー時に要素を様々な軸にで回転させる方法を示しています。
1 つ目のボックスはホバー時に Z 軸で 90 度回転し、 2 つ目はホバー時に Y 軸で 180 度回転し、 3 つ目はホバー時に座標を定義したベクトルを中心に 360 度回転します。

#### HTML

```html
<div class="box" id="box1">rotate Z</div>
<div class="box" id="box2">rotate Y</div>
<div class="box" id="box3">vector & angle</div>
```

#### CSS

```css
.box {
  display: inline-block;
  margin: 1em;
  min-width: 6.5em;
  line-height: 6.5em;
  text-align: center;
  transition: 1s ease-in-out;
  border: 0.25em dotted;
}

#box1:hover {
  rotate: 90deg;
}

#box2:hover {
  rotate: y 180deg;
}

#box3:hover {
  rotate: 1 2 1 360deg;
}
```

#### 結果

{{EmbedLiveSample("Rotating_an_element_on_hover", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('translate')}}
- {{cssxref('scale')}}
- {{cssxref('transform')}}

メモ: `skew` には独立した `transform` の値はありません
