---
title: 背景画像の拡大縮小
slug: Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images
---

{{CSSRef}}

**{{cssxref("background-size")}}** は CSS のプロパティで、要素の背景画像の大きさを変更し、画像の幅や高さから見た完全な大きさの画像をタイル表示するという既定の動作を変更することができます。こうすることで、画像を必要に応じて拡大したり縮小したりすることができます。

<h2 id="Tiling_a_large_image">巨大な画像を並べて表示</h2>

巨大な画像、2982 x 2808 の Firefox のロゴ画像を想像してください。この画像を 300 x 300 ピクセルの要素の中に 4 枚並べて表示したいとします (いくつかの理由で恐ろしく悪いサイトデザインですが)。 `background-size` に固定値の 150 ピクセルの値を使用すると、このようにすることができます。

### HTML

```html
<div class="tiledBackground"></div>
```

### CSS

```css
.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

### 結果

{{EmbedLiveSample("Tiling_a_large_image", 340, 340)}}

## 画像の拡大縮小

以下のように、画像の水平と垂直の両方の寸法を指定することもできます。

```css
background-size: 300px 150px;
```

結果は以下のようになります。

![引き伸ばされた新しい Firefox のロゴ](s.codepen.io_richienb_debug_lonxgp_pnkvygvggyxa.png)

## 画像の拡大

一方で、背景の画像を拡大することができます。ここでは 32 x 32 ピクセルのファビコンを 300 x 300 ピクセルに拡大します。

![拡大された MDN ロゴ](favicon57.de33179910ae.1.1.png)

```css
.square2 {
  background-image: url(favicon.png);
  background-size: 300px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
```

見てのとおり、 CSS は画像ファイルの名前を除けば、実際には基本的に同一です。

## 特殊な値: "contain" と "cover"

{{cssxref("&lt;length&gt;")}} の値以外に、 CSS の {{ cssxref("background-size") }} プロパティは `contain` と `cover` という二つの特殊な寸法の値を提供しています。これらを見てみましょう。

### contain

`contain` の値は、包含ボックスの寸法にかかわらず、背景画像をそれぞれの方向にできるだけ大きくなるように、ただしコンテナーの対応する辺の長さを超えないように拡大します。以下の例の大きさを変えて試してみてください。

#### HTML

```html
<div class="bgSizeContain">
  <p>この要素の寸法を変更してみてください！</p>
</div>
```

#### CSS

```css
.bgSizeContain {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: contain;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}
```

#### 結果

{{ EmbedLiveSample('contain', 250, 250) }}

### cover

`cover` の値は、背景画像が対応する方向のコンテナーの寸法より大きいか同じであることを保証しつつ、できるだけ画像が小さくなるように拡大縮小することを指定します。以下の例の大きさを変えて試してみてください。

#### HTML

```html
<div class="bgSizeCover">
  <p>この要素の寸法を変更してみてください！</p>
</div>
```

#### CSS

```css
.bgSizeCover {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: cover;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}
```

#### 結果

{{ EmbedLiveSample('cover', 250, 250) }}

## 関連情報

- {{ cssxref("background-size") }}
- {{ cssxref("background") }}
- [SVG の背景画像の拡大縮小](/ja/docs/Web/CSS/Scaling_of_SVG_backgrounds)
