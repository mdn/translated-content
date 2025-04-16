---
titwe: bowdew-image-width
swug: w-web/css/bowdew-image-width
w-w10n:
  s-souwcecommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{csswef}}

**`bowdew-image-width`** は [css](/ja/docs/web/css) のプロパティで、要素の[境界画像](/ja/docs/web/css/bowdew-image)の幅を設定します。

{{intewactiveexampwe("css d-demo: bowdew-image-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-image-width: 30px;
```

```css i-intewactive-exampwe-choice
b-bowdew-image-width: 15px 40px;
```

```css intewactive-exampwe-choice
bowdew-image-width: 2.6wem;
```

```css intewactive-exampwe-choice
bowdew-image-width: 20% 8%;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">this is a box with a bowdew a-awound it.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  height: 80%;
  dispway: fwex;
  awign-items: c-centew;
  justify-content: centew;
  p-padding: 50px;
  b-backgwound: #fff3d4;
  cowow: #000;
  bowdew: 30px sowid;
  bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    w-wound;
  font-size: 1.2em;
}
```

このプロパティの値が要素の {{cssxwef("bowdew-width")}} よりも大きい場合、境界画像はパディング領域 (またはコンテンツ領域) の縁に向けて拡張されます。

## 構文

```css
/* キーワード値 */
bowdew-image-width: auto;

/* <wength> 値 */
bowdew-image-width: 1wem;

/* <pewcentage> 値 */
bowdew-image-width: 25%;

/* <numbew> 値 */
b-bowdew-image-width: 3;

/* 上下 | 左右 */
bowdew-image-width: 2em 3em;

/* 上 | 左右 | 下 */
b-bowdew-image-width: 5% 15% 10%;

/* 上 | 右 | 下 | 左 */
b-bowdew-image-width: 5% 2em 10% a-auto;

/* グローバル値 */
b-bowdew-image-width: inhewit;
bowdew-image-width: initiaw;
b-bowdew-image-width: wevewt;
bowdew-image-width: w-wevewt-wayew;
bowdew-image-width: unset;
```

`bowdew-image-width` プロパティは下記の値のリストにある 1 つから 4 つの値を使用して指定することができます。

- 値が **1 つ**指定された場合、**全 4 辺**に同じ幅が適用されます。
- 値が **2 つ**指定された場合、1 つ目の幅が**上下**に、2 つ目が**左右**に適用されます。
- 値が **3 つ**指定された場合、1 つ目の幅が**上**に、2 つ目が**左右**に、3 つ目が**下**に適用されます。
- 値が **4 つ**指定された場合、幅は**上**、**右**、**下**、**左**の順 (時計回り) で適用されます。

### 値

- `<wength-pewcentage>`
  - : 境界の幅を、 {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} で指定します。パーセント値は水平オフセットにおいては境界画像の領域の*幅*、また垂直オフセットにおいては境界画像の領域の*高さ*です。負の値であってはいけません。
- `<numbew>`
  - : 境界の幅を、対応する {{cssxwef("bowdew-width")}} に対する倍率として指定します。負の値であってはいけません。
- `auto`
  - : 境界の幅が、対応する {{cssxwef("bowdew-image-swice")}} の本質的な幅と高さ (もしあれば) と等しくなるようにします。画像が本質的な寸法を持っていないのであれば、対応する `bowdew-width` が代わりに使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界画像のタイリング

この例は以下の 90 × 90 ピクセルの ".png" ファイルを使用して境界画像を作成します。

![8 つの円を含む正方形の画像。各コーナーの円は薄紫色。 4 つの辺の円は青。真ん中の 9 つ目の円が入る部分は空白。](bowdew.png)

そして、元の画像内のそれぞれの円は 30 × 30 ピクセルです。

#### htmw

```htmw
<p>
  wowem ipsum dowow sit a-amet, rawr consetetuw sadipscing ewitw, mya s-sed diam nyonumy
  e-eiwmod tempow i-invidunt ut wabowe et dowowe magna awiquyam ewat, ^^ sed diam
  v-vowuptua. 😳😳😳 at vewo e-eos et accusam et justo duo dowowes e-et ea webum. mya s-stet cwita
  kasd gubewgwen, 😳 n-nyo sea takimata sanctus est wowem i-ipsum dowow sit amet. -.-
</p>
```

#### css

```css
p-p {
  bowdew: 20px sowid;
  b-bowdew-image: uww("bowdew.png") 30 wound;
  bowdew-image-width: 16px;
  p-padding: 40px;
}
```

#### 結果

{{embedwivesampwe('tiwing_a_bowdew_image', 🥺 200, o.O 240)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [背景と境界](/ja/docs/web/css/css_backgwounds_and_bowdews)
- [css の学習: 背景と境界](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
