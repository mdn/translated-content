---
title: CSS 座標変換の使用
slug: Web/CSS/CSS_transforms/Using_CSS_transforms
---

{{CSSRef}}

**CSS 座標変換** (transform) は、座標空間を編集することで、通常のフロー処理を混乱させずに影響下にあるコンテンツの形状や位置を変えることができます。このガイドは座標変換の使用についての解説を行ないます。

CSS 座標変換は、アフィン線形変換を HTML 要素に対して適用する一連の CSS プロパティによって実現されます。座標変換には、二次元と三次元空間の両方について回転 (rotation)、傾斜 (skewing)、拡大縮小 (scaling)、平行移動 (translation) があります。

> **警告:** [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model)によって配置された要素に対してのみ `transform` を実行することができます。言うまでもなく、 `display: block` である要素がボックスモデルで配置されます。

## CSS 座標変換のプロパティ

CSS 座標変換の定義に使われる重要なプロパティが 2 つあります。 {{cssxref("transform")}} と {{cssxref("transform-origin")}} です。

- {{cssxref("transform-origin")}}
  - : 原点位置を指定します。既定では、これは要素の中央ですが、移動することができます。特定の点を引数として必要とする回転、拡大縮小や傾斜などの座標変換で使用されます。
- {{cssxref("transform")}}
  - : 要素に適用する座標変換を指定します。座標変換の空白区切りのリストで、合成操作の要求された順番で適用されます。座標変換の合成は右から左の順に適用されます。

## 例

これが座標変換前の MDN ロゴの画像です。

![MDN ロゴ](logo.png)

### 回転

ここでは MDN ロゴを、左下の角から 90 度回転させます。

```html
<img
  style="transform: rotate(90deg);
            transform-origin: bottom left;"
  src="logo.png" />
```

{{EmbedLiveSample('Rotating', 'auto', 240) }}

### 傾斜と平行移動

この例は div 要素を 10 度傾斜させ、 X 軸に沿って 150 ピクセル平行移動します。

```html
<img
  style="transform: skewx(10deg) translatex(150px);
            transform-origin: bottom left;"
  src="logo.png" />
```

{{EmbedLiveSample('Skewing_and_translating') }}

## 3D 特有の CSS プロパティ

立体空間で CSS 座標変換 を行うには、もう少し複雑になります。視点を与えて 3D 空間の環境設定を行うことから始める必要があり、それから 2D の要素がその空間でとる挙動を設定しなければなりません。

### 視点

設定する最初の要素は視点 (perspective) です。視点は 3D の印象を与えるものです。見る人から遠ざかるほど、ものが小さくなります。

#### 視点の設定

この例は様々な位置に視点が設定された立方体を表示します。どのように立方体が早く縮まるかは、 {{ cssxref("perspective") }} プロパティで定義されます。小さい値ほど、視点は近くなります。

##### HTML

以下の HTML は、４つの同じボックスのコピーを、様々な値の視点を設定して作成します。

```html
<table>
  <tbody>
    <tr>
      <th><code>perspective: 250px;</code></th>
      <th><code>perspective: 350px;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers250">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers350">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th><code>perspective: 500px;</code></th>
      <th><code>perspective: 650px;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers500">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers650">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

##### CSS

様々な距離の遠近法を設定するために使用することができる CSS のクラスです。コンテナーボックスや立方体自身、それぞれの面のためのクラスも含みます。

```css
/* さまざまな perspective の値のためのショートハンドクラス */
.pers250 {
  perspective: 250px;
}

.pers350 {
  perspective: 350px;
}

.pers500 {
  perspective: 500px;
}

.pers650 {
  perspective: 650px;
}

/* コンテナーの div、立方体の div、面の一般的な設定 */
.container {
  width: 200px;
  height: 200px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* 方向に基づいてそれぞれの面を設定 */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* テーブルの見栄えをよくする */
th,
p,
td {
  background-color: #eeeeee;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
}
```

##### 結果

{{EmbedLiveSample('Setting_perspective', 660, 700)}}

二つ目の設定要素は見る人の位置で、 {{cssxref("perspective-origin")}} プロパティを使います。既定では視点は見る人の中央に合わせられますが、いつも妥当であるとは限りません。

#### 視点の変更

この例は主要な `perspective-origin` 値で立方体を表示します。

##### HTML

```html
<section>
  <figure>
    <figcaption><code>perspective-origin: top left;</code></figcaption>
    <div class="container">
      <div class="cube potl">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: top;</code></figcaption>
    <div class="container">
      <div class="cube potm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: top right;</code></figcaption>
    <div class="container">
      <div class="cube potr">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: left;</code></figcaption>
    <div class="container">
      <div class="cube poml">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 50% 50%;</code></figcaption>
    <div class="container">
      <div class="cube pomm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: right;</code></figcaption>
    <div class="container">
      <div class="cube pomr">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom left;</code></figcaption>
    <div class="container">
      <div class="cube pobl">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom;</code></figcaption>
    <div class="container">
      <div class="cube pobm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom right;</code></figcaption>
    <div class="container">
      <div class="cube pobr">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: -200% -200%;</code></figcaption>
    <div class="container">
      <div class="cube po200200neg">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 200% 200%;</code></figcaption>
    <div class="container">
      <div class="cube po200200pos">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 200% -200%;</code></figcaption>
    <div class="container">
      <div class="cube po200200">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>
</section>
```

##### CSS

```css
/* perspective-origin の値 (例ごとに異なる) */
.potl {
  perspective-origin: top left;
}
.potm {
  perspective-origin: top;
}
.potr {
  perspective-origin: top right;
}
.poml {
  perspective-origin: left;
}
.pomm {
  perspective-origin: 50% 50%;
}
.pomr {
  perspective-origin: right;
}
.pobl {
  perspective-origin: bottom left;
}
.pobm {
  perspective-origin: bottom;
}
.pobr {
  perspective-origin: bottom right;
}
.po200200neg {
  perspective-origin: -200% -200%;
}
.po200200pos {
  perspective-origin: 200% 200%;
}
.po200200 {
  perspective-origin: 200% -200%;
}

/* コンテナーの div、立方体の div、面の一般的な設定 */
.container {
  width: 100px;
  height: 100px;
  margin: 24px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective: 300px;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* 方向に基づいてそれぞれの面を設定 */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}
.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}
.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}
.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}
.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* レイアウトの見栄えをよくする */
section {
  background-color: #eee;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

##### 結果

{{EmbedLiveSample('Changing_the_perspective_origin', '100%', 700)}}

ここまで行えば、 3D 空間に要素を配置することができます。

## 関連情報

- [端末の向きと 3D 座標変換の併用](/ja/docs/Web/Events/Using_device_orientation_with_3D_transforms)
- [Intro to CSS 3D transforms](http://desandro.github.com/3dtransforms/) (David DeSandro によるブログ記事)
- [CSS Transform Playground](https://css-transform.moro.es/) (CSS 座標変換機能を視覚化するオンラインツール)
