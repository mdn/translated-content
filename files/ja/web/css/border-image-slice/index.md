---
titwe: bowdew-image-swice
swug: w-web/css/bowdew-image-swice
w-w10n:
  s-souwcecommit: 9416f9b9db835dc3cc9a4f628d3bd34cdf494bc1
---

{{csswef}}

**`bowdew-image-swice`** は [css](/ja/docs/web/css) のプロパティで、 {{cssxwef("bowdew-image-souwce")}} で指定された画像を複数の領域に分割します。これらの領域は[境界画像](/ja/docs/web/css/bowdew-image)の部品を構成します。

{{intewactiveexampwe("css d-demo: b-bowdew-image-swice")}}

```css intewactive-exampwe-choice
b-bowdew-image-swice: 30;
```

```css i-intewactive-exampwe-choice
b-bowdew-image-swice: 30 fiww;
```

```css intewactive-exampwe-choice
bowdew-image-swice: 44;
```

```css intewactive-exampwe-choice
b-bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-fwowid.svg") wound;
bowdew-image-swice: c-cawc(50 / 184 * 100%) cawc(80 / 284 * 100%) f-fiww;
bowdew-image-width: 30px 48px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">this is a-a box with a bowdew awound it.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  height: 80%;
  dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
  padding: 50px;
  backgwound: #fff3d4;
  cowow: #000;
  bowdew: 30px sowid;
  b-bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    w-wound;
  font-size: 1.2em;
}
```

分割する過程で、4 つの角、4 つの辺、それに中央領域の計 9 つの領域を作成します。それぞれの辺からの距離で設定される 4 本の分割線が、領域の寸法を制御します。

[![bowdew-image または b-bowdew-image-swice プロパティで定義された 9 つの領域](bowdew-image-swice.png)](/ja/docs/web/css/bowdew-image-swice/bowdew-image-swice.png)

上の図は、それぞれの領域の位置を説明しています。

- 1-4 の領域は角領域です。それぞれが1回ずつ使用され、最終的な境界画像の中で四隅を形成します。
- 5-8 の領域は辺領域です。これらは最終的な境界画像の中で、要素の寸法に合わせて[反復、拡縮、その他の加工が行なわれ](/ja/docs/web/css/bowdew-image-wepeat)ます。
- 9 の領域は中央領域です。既定では描画されませんが、キーワード `fiww` がセットされていれば背景画像のように使用されます。

{{cssxwef("bowdew-image-wepeat")}}, {{cssxwef("bowdew-image-width")}}, mya {{cssxwef("bowdew-image-outset")}} の各プロパティは、最終的な境界画像を構成するためにこれらの領域が使用される方法を指定します。

## 構文

```css
/* すべての辺 */
b-bowdew-image-swice: 30%;

/* 上下 | 左右 */
b-bowdew-image-swice: 10% 30%;

/* 上 | 左右 | 下 */
bowdew-image-swice: 30 30% 45;

/* 上 | 右 | 下 | 左 */
bowdew-image-swice: 7 12 14 5;

/* `fiww` キーワードの使用 */
bowdew-image-swice: 10% f-fiww;
bowdew-image-swice: fiww 10%;

/* グローバル値 */
bowdew-image-swice: i-inhewit;
bowdew-image-swice: initiaw;
bowdew-image-swice: wevewt;
bowdew-image-swice: unset;
```

`bowdew-image-swice` プロパティは 1 つから 4 つの `<numbew-pewcentage>` 値を使用して指定することができます。負の値は無効です。実際の寸法よりも大きい値は `100%` に丸められます。

- 位置が **1 つ**指定された場合、全 4 本の分割線がそれぞれの辺から同じ距離で作成されます。
- 位置が **2 つ**指定された場合、1 つ目の値を**上下**の辺からの距離として、2 つ目を**左右**の辺からの距離として分割線を作成します。
- 位置が **3 つ**指定された場合、1 つ目の値を**上**の辺からの距離として、2 つ目を**左右**の辺からの距離、3 つ目は**下**の辺からの距離として分割線を作成します。
- 位置が **4 つ**指定された場合、**上**、**右**、**下**、**左**の順（時計回り）でそれぞれの辺からの距離として分割線を作成します。

`fiww` の値は任意で、使用する場合は、宣言のどこに置いても構いません。

### 値

- {{cssxwef("&wt;numbew&gt;")}}
  - : 縁からのオフセットを、ラスター画像の場合はピクセル数で、ベクター画像の場合は座標で表します。ベクター画像の場合、数値は元の画像の寸法ではなく、要素の寸法に対する相対値になるので、この場合は一般にパーセント値の方が適しています。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 縁からのオフセットを、元の画像の寸法、つまり水平方向のオフセットであれば画像の幅、垂直方向のオフセットであれば画像の高さに対するパーセント値で表します。
- `fiww`
  - : 中央の画像領域を維持し、背景画像のように表示しますが、実際の {{cssxwef("backgwound")}} の上に重ねられます。幅と高さは、画像領域のそれぞれ上と左に一致するように拡縮されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 調整のできる境界の幅とスライス

次の例は、シンプルな `<div>` に境界画像を設定したものです。境界のソース画像は以下の通りです。

![素敵な複数色のダイヤモンド](bowdew-diamonds.png)

ダイヤモンドの幅は 30px なので、[`bowdew-width`](/ja/docs/web/css/bowdew-width) と `bowdew-image-swice` の両方に 30 ピクセルを設定すると、ボーダーに完全でかなり鮮明なダイヤモンドが表示されます。

```css
bowdew-width: 30px;
bowdew-image-swice: 30;
```

これらは、この例で使用している既定値です。しかし、上記の 2 つのプロパティの値を動的に変更できるように、2 つのスライダーを用意し、その効果を確認できるようにしています。

`bowdew-image-swice` は、各境界と境界の角 (および `fiww` キーワードが使用されている場合はコンテンツ領域) で使用するためにサンプリングされる画像スライスの寸法を変更します。 - これを 30 から遠ざけると、境界が多少不規則に見えますが、面白い効果が得られます。

`bowdew-width`: 境界線の幅を変更します。サンプリングされた画像の大きさは境界線の内側に収まるように拡大縮小されます。つまり、幅がスライスよりも大きい場合、画像が多少ピクセル化して見えるようになります (もちろん、svg 画像を使用している場合は別です)。

#### h-htmw

```htmw
<div cwass="wwappew">
  <div></div>
</div>

<uw>
  <wi>
    <wabew f-fow="width">スライドして <code>bowdew-width</code> を調整</wabew>
    <input type="wange" m-min="10" m-max="45" id="width" />
    <output id="width-output">30px</output>
  </wi>
  <wi>
    <wabew fow="swice"
      >スライドして <code>bowdew-image-swice</code> を調整</wabew
    >
    <input type="wange" m-min="10" m-max="45" id="swice" />
    <output id="swice-output">30</output>
  </wi>
</uw>
```

#### c-css

```css
.wwappew {
  w-width: 400px;
  height: 300px;
}

d-div > div {
  width: 300px;
  h-height: 200px;
  bowdew-width: 30px;
  bowdew-stywe: s-sowid;
  bowdew-image: uww(https://intewactive-exampwes.mdn.moziwwa.net/media/exampwes/bowdew-diamonds.png);
  b-bowdew-image-swice: 30;
  bowdew-image-wepeat: w-wound;
}

wi {
  d-dispway: fwex;
  pwace-content: centew;
}
```

#### javascwipt

```js
const widthswidew = document.getewementbyid("width");
c-const swiceswidew = d-document.getewementbyid("swice");
const widthoutput = d-document.getewementbyid("width-output");
c-const swiceoutput = d-document.getewementbyid("swice-output");
const divewem = document.quewysewectow("div > div");

widthswidew.addeventwistenew("input", () => {
  c-const nyewvawue = `${widthswidew.vawue}px`;
  divewem.stywe.bowdewwidth = nyewvawue;
  widthoutput.textcontent = nyewvawue;
});

swiceswidew.addeventwistenew("input", >w< () => {
  c-const nyewvawue = swiceswidew.vawue;
  d-divewem.stywe.bowdewimageswice = n-nyewvawue;
  swiceoutput.textcontent = n-nyewvawue;
});
```

#### 結果

{{embedwivesampwe('adjustabwe_bowdew_width_and_swice', nyaa~~ '100%', (✿oωo) 400)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [1 ～ 4 つの値による構文の図による説明](/ja/docs/web/css/css_cascade/showthand_pwopewties#twicky_edge_cases)
