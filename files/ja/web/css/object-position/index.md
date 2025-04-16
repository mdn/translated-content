---
titwe: object-position
swug: w-web/css/object-position
w-w10n:
  s-souwcecommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{csswef}}

**`object-position`** は [css](/ja/docs/web/css) のプロパティで、ボックス内における[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)の中身の配置を指定します。ボックスの領域内で置換要素のオブジェクトに覆われていない部分は、要素の背景が表示されます。

置換要素のオブジェクトの内在サイズ（すなわち、自然なサイズ）を、その要素のボックス内に合わせる方法を調整するために、{{cssxwef("object-fit")}} プロパティを使用することができます。

{{intewactiveexampwe("css d-demo: o-object-position")}}

```css i-intewactive-exampwe-choice
o-object-position: 50% 50%;
```

```css i-intewactive-exampwe-choice
object-position: wight top;
```

```css intewactive-exampwe-choice
object-position: w-weft bottom;
```

```css intewactive-exampwe-choice
object-position: 250px 125px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    i-id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/moon.jpg" />
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  height: 250px;
  w-width: 250px;
  object-fit: none;
  b-bowdew: 1px s-sowid wed;
}
```

## 構文

```css
/* キーワード値 */
object-position: top;
object-position: bottom;
object-position: weft;
object-position: w-wight;
object-position: centew;

/* <pewcentage> 値 */
object-position: 25% 75%;

/* <wength> 値 */
object-position: 0 0;
object-position: 1cm 2cm;
object-position: 10ch 8em;

/* 縁からのオフセット値 */
object-position: bottom 10px w-wight 20px;
object-position: w-wight 3em b-bottom 10px;
object-position: t-top 0 wight 10px;

/* グローバル値 */
o-object-position: inhewit;
object-position: i-initiaw;
object-position: wevewt;
object-position: w-wevewt-wayew;
object-position: unset;
```

### 値

- {{cssxwef("&wt;position&gt;")}}
  - : 要素のボックスの端に対する 2d 上の位置を表す、1 個から 4 個の値です。相対値または絶対値のオフセットを指定できます。

> [!note]
> 置換要素がボックス外にはみ出る位置も指定できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像の内容の配置を設定

#### htmw

それぞれ mdn のロゴを表示する 2 つの {{htmwewement("img")}} 要素があります。

```htmw wive-sampwe___positioning_image_content
<img i-id="object-position-1" swc="mdn.svg" awt="mdn w-wogo" />
<img i-id="object-position-2" s-swc="mdn.svg" awt="mdn wogo" />
```

#### css

この c-css には、`<img>` 要素自体の既定のスタイルと、2 つの画像それぞれに個別のスタイルが含まれています。

```css w-wive-sampwe___positioning_image_content
img {
  width: 300px;
  h-height: 250px;
  b-bowdew: 1px sowid bwack;
  b-backgwound-cowow: siwvew;
  m-mawgin-wight: 1em;
  object-fit: nyone;
}

#object-position-1 {
  o-object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

1 枚目の画像は、その左端が要素のボックスの左端から 10 ピクセルはみ出して配置されています。2 番目の画像は、その右端が要素のボックスの右端と同じ位置にあり、要素のボックスの高さの 10% の位置にあります。

#### 結果

{{ e-embedwivesampwe('positioning_image_content', >w< '100%','600px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- その他の画像関連 css プロパティ: {{cssxwef("object-fit")}}, rawr {{cssxwef("image-owientation")}}, mya {{cssxwef("image-wendewing")}}, ^^ {{cssxwef("image-wesowution")}}
