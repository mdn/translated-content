---
title: <blend-mode>
slug: Web/CSS/blend-mode
tags:
  - 混合モード
  - CSS
  - CSS Data Type
  - 合成
  - Compositing and Blending
  - Data Type
  - Reference
  - color
browser-compat: css.types.blend-mode
translation_of: Web/CSS/blend-mode
---
{{CSSRef}}

**`<blend-mode>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、要素が重なったときにどのように色が現れるかを記述します。 {{cssxref("background-blend-mode")}} または {{cssxref("mix-blend-mode")}} プロパティで使用されます。

## 構文

`<blend-mode>` データ型は、以下に挙げたキーワードのうちの一つで定義します。

### 値

- `normal`
  - : 下の色が何であるかに関わらず、上の色が最終的な色になります。
     この効果は 2 枚の不透明の紙が重なっているようなものです。
- `multiply`
  - : 上の色と下の色を掛け合わせた結果が最終的な色になります。
    黒いレイヤーは最終的に黒いレイヤーになり、白いレイヤーは変化をもたらしません。
    この効果は 2 枚の透明なフィルムに印刷された画像を重ね合わせたようなものです。
- `screen`
  - : 色を反転して乗算を行い、さらに色を反転した結果が最終的な色になります。
    黒いレイヤーは変化をもたらしません。白いレイヤーは、最終的に白いのレイヤーへ近づけます。
    この効果は 2 枚の画像が画面に投影された状況に似ています。
- `overlay`
  - : 下の色が暗ければ `multiply`、下の色が明るければ `screen` の結果が最終的な色になります。
    この混合モードは `hard-light` と同等ですが、レイヤーは逆です。
- `darken`
  - : 色成分ごとに最も暗い値が最終的な値になります。
- `lighten`
  - : 色成分ごとに最も明るい値が最終的な値になります。
- `color-dodge`
  - : 下の色を、反転した上の色で除算した結果が、最終的な色になります。
    黒い前景は変化をもたらしません。背景色を反転した色を持つ前景は、完全に明るい色に導きます。
    この混合モードは `screen` に似ていますが、完全に明るい色に近づけるためには背景色を反転した色と同程度に明るい前景が必要です。
- `color-burn`
  - : 反転した下の色を上の色で除算して、さらに反転した結果が最終的な色になります。
    白い背景は変化をもたらしません。背景色を反転した色を持つ前景は、最終的に黒い画像へ近づけます。
    この混合モードは `multiply` に似ていますが、最終的に画像を暗くするためには背景色を反転した色と同程度に暗い前景が必要です。
- `hard-light`
  - : 上の色が暗い色であれば `multiply` 、明るい色であれば `screen` の結果が最終的な色になります。
    この混合モードは `overlay` と同じですが、レイヤーが入れ替わっています。
    この効果は、背景に*強烈な*スポットライトを当てた状況に似ています。
- `soft-light`
  - : 最終的な色は `hard-light` に似ていますが、よりソフトになります。
    この混合モードは `hard-light` に似ています。
    この効果は、背景に*拡散光の*スポットライトを当てた状況に似ています。
- `difference`
  - : 2 つの色のうち明るい色から、暗い色を減算した結果が最終的な色になります。
    黒いレイヤーは変化をもたらしません。白いレイヤーは、もうひとつのレイヤーの色を反転します。
- `exclusion`
  - : 最終的な色は `difference` に似ていますが、コントラストが低くなります。
    `difference` と同様に、黒いレイヤーは変化をもたらしません。白いレイヤーは、もうひとつのレイヤーの色を反転します。
- `hue`
  - : 最終的な色は上の色の*色相*を持ちますが、*彩度*および*明度*は下の色の値を使用します。
- `saturation`
  - : 最終的な色は上の色の*彩度*を持ちますが、*色相*および*明度*は下の色の値を使用します。
    彩度を持たない純粋なグレーの背景は、効果がありません。
- `color`
  - : 最終的な色は上の色の*色相*および*彩度*を持ちますが、*明度*は下の色の値を使用します。
    この効果はグレーレベルを保持しており、前景に色をつけるために使用できます。
- `luminosity`
  - : 最終的な色は上の色の*明度*を持ちますが、*色相*および *彩度*は下の色の値を使用します。
    この混合モードは `color` と同じですが、レイヤーが入れ替わっています。

## 解説

混合モードは、適用されるレイヤー間のそれぞれのピクセルにおいて前景色と背景色を取り、計算を行い、新しい色の値を返します。

混合モード同士の変化は補完されません。すべての変更が直接反映されます。

## 例

### normal

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: normal;
}
```

{{ EmbedLiveSample('normal', "300", "350") }}

### multiply

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: multiply;
}
```

{{ EmbedLiveSample('multiply', "300", "350") }}

### screen

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: screen;
}
```

{{ EmbedLiveSample('screen', "300", "350") }}

### overlay

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: overlay;
}
```

{{ EmbedLiveSample('overlay', "300", "350") }}

### darken

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: darken;
}
```

{{ EmbedLiveSample('darken', "300", "350") }}

### lighten

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: lighten;
}
```

{{ EmbedLiveSample('lighten', "300", "350") }}

### color-dodge

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: color-dodge;
}
```

{{ EmbedLiveSample('color-dodge', "300", "350") }}

### color-burn

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: color-burn;
}
```

{{ EmbedLiveSample('color-burn', "300", "350") }}

### hard-light

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: hard-light;
}
```

{{ EmbedLiveSample('hard-light', "300", "350") }}

### soft-light

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: soft-light;
}
```

{{ EmbedLiveSample('soft-light', "300", "350") }}

### difference

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: difference;
}
```

{{ EmbedLiveSample('difference', "300", "350") }}

### exclusion

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: exclusion;
}
```

{{ EmbedLiveSample('exclusion', "300", "350") }}

### hue

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: hue;
}
```

{{ EmbedLiveSample('hue', "300", "350") }}

### saturation

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: saturation;
}
```

{{ EmbedLiveSample('saturation', "300", "350") }}

### color

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: color;
}
```

{{ EmbedLiveSample('color', "300", "350") }}

### luminosity

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url('br.png'),
              url('tr.png');
  background-blend-mode: luminosity;
}
```

{{ EmbedLiveSample('luminosity', "300", "350") }}

<h3 id="Blend_mode_comparison">混合モードの比較</h3>

次の例の `<div>` には、 Firefox のロゴと線形グラデーションの 2 つの背景画像を設定してあります。その下に `<select>` メニューがあって `background-blend-mode` を変更することができ、それが `<div>` に適用されますので、様々な混合モードの効果を比較することができます。

#### HTML

```html
<div></div>
<p>混合モードを選択してください。</p>
<select>
  <option selected>normal</option>
  <option>multiply</option>
  <option>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: url(https://media.prod.mdn.mozit.cloud/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png) no-repeat center,
  linear-gradient(to bottom, blue, orange);
}
```

#### JavaScript

```js
const selectElem = document.querySelector('select');
const divElem = document.querySelector('div');

selectElem.addEventListener('change', () => {
  divElem.style.backgroundBlendMode = selectElem.value;
});
```

#### 結果

{{EmbedLiveSample('Blend_mode_comparison', '100%', 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}

様々な混合モードの他のウェブサイトにおける解説:

- Wikipedia の[ブレンドモード](https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%AC%E3%83%B3%E3%83%89%E3%83%A2%E3%83%BC%E3%83%89)の記事
- [Adobe Photoshop における描画モード](https://helpx.adobe.com/jp/photoshop/using/blending-modes.html) (Adobe)
