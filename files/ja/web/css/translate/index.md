---
title: translate
slug: Web/CSS/translate
tags:
  - CSS
  - CSS プロパティ
  - Reference
  - 座標変換
  - recipe:css-property
browser-compat: css.properties.translate
translation_of: Web/CSS/translate
---
{{CSSRef}}

**`translate`** は [CSS](/ja/docs/Web/CSS) のプロパティで、平行移動の座標変換を独自に、 {{CSSxRef("transform")}} プロパティから独立して指定することができます。これは一般的なユーザーインターフェイスの用途に適しており、 `transform` の値で指定する変換関数を正確に思い出す必要がなくなります。

## 構文

```css
/* キーワード値 */
translate: none;

/* 単一の値 */
translate: 100px;
translate: 50%;

/* 二つの値 */
translate: 100px 200px;
translate: 50% 105px;

/* 三つの値 */
translate: 50% 105px 5rem;

/* グローバル値 */
translate: inherit;
translate: initial;
translate: revert;
translate: unset;
```

### 値

- 単一の {{cssxref("&lt;length-percentage&gt;")}} 値
  - : 単一の {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値で、 X 軸および Y 軸方向が同じ移動量の二次元の平行移動を指定します。 `translate()` (二次元の平行移動) 関数に単一の値を指定したものと同等です。
- 二つの {{cssxref("&lt;length-percentage&gt;")}} 値
  - : 二つの {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値で、二次元の平行移動における X および Y 軸方向の移動量を (それぞれ) 指定します。 `translate()` (二次元の平行移動) 関数に二つの値を指定したものと同等です。
- 三つの値
  - : 二つの {{cssxref("&lt;length-percentage&gt;")}} 値と一つの {{cssxref("&lt;length&gt;")}} 値で、三次元の平行移動における X, Y, Z 軸の移動量を (それぞれ) 指定します。 `translate3d()` (三次元の平行移動) 関数と同等です。
- `none`
  - : 平行移動が適用されないことを指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<div>
  <p class="translate">Translation</p>
</div>
```

### CSS

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

.translate {
  transition: translate 1s;
}

div:hover .translate {
  translate: 200px 50px;
}
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

メモ: `skew` には独立した `transform` の値はありません
