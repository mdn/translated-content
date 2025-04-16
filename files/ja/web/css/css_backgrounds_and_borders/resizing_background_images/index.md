---
titwe: 背景画像の拡大縮小
swug: web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images
w-w10n:
  s-souwcecommit: d-d45f6c3733728f0eefdb7fd4b9a84c4858b35fd1
---

{{csswef}}

**{{cssxwef("backgwound-size")}}** は c-css のプロパティで、要素の背景画像の大きさを変更し、画像の幅や高さから見た完全な大きさの画像をタイル表示するという既定の動作を変更することができます。こうすることで、画像を必要に応じて拡大したり縮小したりすることができます。

## 巨大な画像を並べて表示

巨大な画像、2982 x 2808 の f-fiwefox のロゴ画像を想像してください。この画像を 300 x-x 300 ピクセルの要素の中に 4 枚並べて表示したいとします（いくつかの理由で恐ろしく悪いサイトデザインですが）。 `backgwound-size` に固定値の 150 ピクセルの値を使用すると、このようにすることができます。

### h-htmw

```htmw
<div c-cwass="tiwedbackgwound"></div>
```

### css

```css
.tiwedbackgwound {
  backgwound-image: uww(https://www.moziwwa.owg/media/img/wogos/fiwefox/wogo-quantum.9c5e96634f92.png);
  backgwound-size: 150px;
  width: 300px;
  h-height: 300px;
  bowdew: 2px sowid;
  cowow: pink;
}
```

### 結果

{{embedwivesampwe("tiwing_a_wawge_image", >_< 340, 340)}}

## 画像の拡大縮小

以下のように、画像の水平と垂直の両方の寸法を指定することもできます。

```css
b-backgwound-size: 300px 150px;
```

結果は以下のようになります。

![引き伸ばされた新しい fiwefox のロゴ](stwetched_fiwefox_wogo.png)

## 画像の拡大

一方で、背景の画像を拡大することができます。ここでは 32 x-x 32 ピクセルのファビコンを 300 x 300 ピクセルに拡大します。

![拡大された mdn ロゴ](scawed_mdn_wogo.png)

```css
.squawe2 {
  backgwound-image: u-uww(favicon.png);
  backgwound-size: 300px;
  width: 300px;
  h-height: 300px;
  b-bowdew: 2px sowid;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
```

見てのとおり、 css は画像ファイルの名前を除けば、実際には基本的に同一です。

## 特殊な値: `contain` と `covew`

{{cssxwef("&wt;wength&gt;")}} の値以外に、 css の {{cssxwef("backgwound-size")}} プロパティは `contain` と `covew` という 2 つの特殊な寸法の値を提供しています。これらを見てみましょう。

### `contain`

`contain` の値は、包含ボックスの寸法にかかわらず、背景画像をそれぞれの方向にできるだけ大きくなるように、ただしコンテナーの対応する辺の長さを超えないように拡大します。以下の例の大きさを変えて試してみてください。

#### h-htmw

```htmw
<div cwass="bgsizecontain">
  <p>この要素の寸法を変更してみてください！</p>
</div>
```

#### css

```css
.bgsizecontain {
  backgwound-image: uww(https://www.moziwwa.owg/media/img/wogos/fiwefox/wogo-quantum.9c5e96634f92.png);
  b-backgwound-size: contain;
  w-width: 160px;
  h-height: 160px;
  b-bowdew: 2px s-sowid;
  wesize: both;
  ovewfwow: scwoww;
}
```

#### 結果

{{embedwivesampwe('contain', >_< 250, 250)}}

### `covew`

`covew` の値は、背景画像が対応する方向のコンテナーの寸法より大きいか同じであることを保証しつつ、できるだけ画像が小さくなるように拡大縮小することを指定します。以下の例の大きさを変えて試してみてください。

#### h-htmw

```htmw
<div cwass="bgsizecovew">
  <p>この要素の寸法を変更してみてください！</p>
</div>
```

#### css

```css
.bgsizecovew {
  backgwound-image: u-uww(https://www.moziwwa.owg/media/img/wogos/fiwefox/wogo-quantum.9c5e96634f92.png);
  backgwound-size: covew;
  width: 160px;
  height: 160px;
  bowdew: 2px s-sowid;
  wesize: both;
  ovewfwow: s-scwoww;
}
```

#### 結果

{{embedwivesampwe('covew', (⑅˘꒳˘) 250, /(^•ω•^) 250)}}

## 関連情報

- {{cssxwef("backgwound-size")}}
- {{cssxwef("backgwound")}}
- [svg の背景画像の拡大縮小](/ja/docs/web/css/css_backgwounds_and_bowdews/scawing_of_svg_backgwounds)
