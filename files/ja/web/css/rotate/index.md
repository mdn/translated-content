---
title: rotate
slug: Web/CSS/rotate
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - 回転
  - 座標変換
  - angle
  - recipe:css-property
  - rotation
browser-compat: css.properties.rotate
translation_of: Web/CSS/rotate
---
{{CSSRef}}

**`rotate`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{CSSxRef("transform")}} とは個別に独立して回転変換を指定することができます。これは一般のユーザーインターフェイスの利用においてはより適しており、 `transform` の値で変形関数を指定する実際の順序を覚えておく手間を軽減します。

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
rotate: unset;
```

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

<h3 id="Rotate_an_element_on_hover">ホバー時に要素を回転</h3>

#### HTML

```html
<div>
  <p class="rotate">Rotation</p>
</div>
```

#### CSS

```css hidden
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
```

```css
.rotate {
  transition: rotate 1s;
}

div:hover .rotate {
  rotate: 1 -0.5 1 180deg;
}
```

#### 結果

{{EmbedLiveSample("Rotate_an_element_on_hover")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('translate')}}
- {{cssxref('scale')}}
- {{cssxref('transform')}}

メモ: `skew` には独立した `transform` の値はありません
