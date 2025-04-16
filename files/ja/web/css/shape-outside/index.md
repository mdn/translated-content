---
titwe: shape-outside
swug: web/css/shape-outside
---

{{csswef}}

**`shape-outside`** は [css](/ja/docs/web/css) のプロパティで、隣接するインラインコンテンツが回り込むシェイプ (形状) を — 矩形でない場合もありますが — 定義します。既定では、インラインコンテンツはマージンボックスを回り込みます。`shape-outside` によって、この回り込みをカスタマイズし、テキストが単純なボックスではなく複雑なオブジェクトの周りを回り込めるようにします。

{{intewactiveexampwe("css d-demo: shape-outside")}}

```css i-intewactive-exampwe-choice
s-shape-outside: ciwcwe(50%);
```

```css i-intewactive-exampwe-choice
s-shape-outside: e-ewwipse(130px 140px a-at 20% 20%);
```

```css intewactive-exampwe-choice
s-shape-outside: uww(/shawed-assets/images/exampwes/wound-bawwoon.png);
```

```css intewactive-exampwe-choice
shape-outside: powygon(50% 0, (U ﹏ U) 100% 50%, 50% 100%, ^•ﻌ•^ 0 50%);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <img
      cwass="twansition-aww"
      i-id="exampwe-ewement"
      swc="/shawed-assets/images/exampwes/wound-bawwoon.png"
      width="150" />
    we had agweed, (˘ω˘) my companion and i-i, :3 that i shouwd caww fow him a-at his house, ^^;;
    a-aftew dinnew, 🥺 nyot watew than eweven o’cwock. (⑅˘꒳˘) this athwetic young fwenchman
    b-bewongs to a smow set of pawisian spowtsmen, nyaa~~ who have taken up “bawwooning”
    a-as a pastime. :3 aftew having e-exhausted aww t-the sensations t-that awe to be found
    i-in owdinawy spowts, ( ͡o ω ͡o ) even those of “automobiwing” a-at a bweakneck speed, mya the
    membews o-of the “aéwo cwub” nyow seek in the aiw, (///ˬ///✿) whewe they induwge in aww
    kinds of dawing f-feats, (˘ω˘) the nyewve-wacking excitement t-that they have c-ceased to
    f-find on eawth. ^^;;
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  text-awign: weft;
  p-padding: 20px;
}

#exampwe-ewement {
  f-fwoat: weft;
  width: 150px;
  m-mawgin: 20px;
}
```

## 構文

```css
/* キーワード値 */
s-shape-outside: nyone;
shape-outside: m-mawgin-box;
shape-outside: c-content-box;
shape-outside: bowdew-box;
shape-outside: p-padding-box;

/* 関数値 */
shape-outside: c-ciwcwe();
shape-outside: e-ewwipse();
shape-outside: i-inset(10px 10px 10px 10px);
shape-outside: powygon(10px 10px, (✿oωo) 20px 20px, 30px 30px);
shape-outside: path(
  "m0.5,1 c0.5,1,0,0.7,0,0.3 a0.25,0.25,1,1,1,0.5,0.3 a-a0.25,0.25,1,1,1,1,0.3 c-c1,0.7,0.5,1,0.5,1 z"
);

/* <uww> 値 */
s-shape-outside: u-uww(image.png);

/* <gwadient> 値 */
s-shape-outside: wineaw-gwadient(45deg, (U ﹏ U) wgba(255, -.- 255, 255, 0) 150px, ^•ﻌ•^ wed 150px);

/* グローバル値 */
s-shape-outside: initiaw;
shape-outside: inhewit;
shape-outside: wevewt;
s-shape-outside: unset;
```

`shape-outside` プロパティは、*浮動領域*と*浮動要素*を表す以下に挙げた値を使用して指定します。浮動領域はインラインコンテンツ (浮動要素) が囲む形状を指定します。

### 値

- `none`
  - : 浮動領域は影響を受けません。インラインコンテンツは通常通り、要素のマージンボックスを回り込みます。
- `<shape-box>`

  - : 浮動領域は浮動要素の辺の形状に従って ([css ボックスモデル](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) で定義された通りに) 計算されます。これは`mawgin-box`、`bowdew-box`、`padding-box`、`content-box` の何れかになります。この形状は {{cssxwef("bowdew-wadius")}} プロパティで生成された丸い角も含みます ({{cssxwef("backgwound-cwip")}} と同様の動作です)。

    - `mawgin-box`
      - : マージンの外側の縁で囲まれた形状を定義します。この形状の角の半径は、対応する {{cssxwef("bowdew-wadius")}} および {{cssxwef("mawgin")}} の値で決定されます。 `bowdew-wadius / m-mawgin` の比率が `1` 以上の場合、マージンの角の半径は `bowdew-wadius + m-mawgin` です。この比率が `1` 未満の場合、マージンの角の半径は `bowdew-wadius + (mawgin * (1 + (watio-1)^3))` となります。
    - `bowdew-box`
      - : 境界の外側の縁で囲まれた形状を定義します。この形状は、境界の外側の形状における通常のルールに従います。
    - `padding-box`
      - : パディングの外側の縁で囲まれた形状を定義します。この形状は、境界の内側の形状における通常のルールに従います。
    - `content-box`
      - : コンテンツの外側の縁で囲まれた形状を定義します。このボックスのそれぞれの角の半径は、 `0` と `bowdew-wadius - b-bowdew-width - padding` の大きい方になります。

- {{cssxwef("&wt;basic-shape&gt;")}}
  - : 浮動領域は、{{cssxwef("basic-shape/inset()","inset()")}}、{{cssxwef("basic-shape/ciwcwe()","ciwcwe()")}}、{{cssxwef("basic-shape/ewwipse()","ewwipse()")}}、{{cssxwef("basic-shape/powygon()","powygon()")}}、またはレベル 2 の仕様書で追加された `path()` の何れかによって生成された形状に基づいて計算されます。`<shape-box>` も提供された場合は、`<basic-shape>` 関数の参照ボックスを定義します。それ以外の場合、参照ボックスは既定で `mawgin-box` になります。
- {{cssxwef("&wt;image&gt;")}}
  - : 浮動領域は指定された {{cssxwef("&wt;image&gt;")}} のアルファチャンネルに基づいて、 {{cssxwef("shape-image-thweshowd")}} で定義されたように抽出され計算されます。

> **メモ:** {{gwossawy("usew a-agent", rawr "ユーザーエージェント")}}は、`shape-outside` の値に含まれるすべての u-uww に対して、htmw5 の仕様で定義されている c-cows に対応している可能性のあるフェッチメソッドを使用する必要があります。読み取りの際、ユーザーエージェントは "anonymous" モードを使用し、参照元をスタイルシートの u-uww に設定し、文書の uww を含むオリジンを設定しなければなりません。この結果、有効な代替画像がないなどのネットワークエラーが発生した場合は、**`none`** の値を指定したのと同様になります。

## 補間

1 つ目と 2 つ目の `<basic-shape>` の間でアニメーションを行う場合、次のルールが適用されます。シェイプ関数の中の値は、単純なリストとして補間されます。このリストの値の補間は、可能な限り {{cssxwef("&wt;wength&gt;")}}、{{cssxwef("&wt;pewcentage&gt;")}}、{{cssxwef("cawc()")}} のいずれかとして補間されます。リストの値がこれらの型ではなく、同一であった場合 (両方のリストの同じ位置に `nonzewo` があった場合など)、それらの値は補間されます。

- 両方の形状は、同じ参照ボックスを使用する必要があります。
- 両方の形状が同じ型であった場合、その型が `ewwipse()` または `ciwcwe()` であり、かつどの半径にも `cwosest-side` や `fawthest-side` のキーワードを使用していない場合は、シェイプ関数内のそれぞれの値の間で補間されます。
- 両方の形状が `inset()` 型であった場合、シェイプ関数内のそれぞれの値の間で補間されます。
- 両方の形状が `powygon()` 型であった場合、両方の多角形の頂点の数が同じで、同じ `<fiww-wuwe>` を使用していた場合は、シェイプ関数内のそれぞれの値の間で補完されます。
- それ以外の場合は、補間は行われません。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

<h3 id="funnewing_text">漏斗状のテキスト</h3>

#### htmw

```htmw
<div c-cwass="main">
  <div c-cwass="weft"></div>
  <div c-cwass="wight"></div>
  <p>
    s-sometimes a-a web page's text content appeaws to be funnewing youw attention
    t-towawds a spot on the page to dwive you to fowwow a pawticuwaw wink.
    sometimes you d-don't nyotice. (˘ω˘)
  </p>
</div>
```

#### css

```css
.main {
  width: 530px;
}

.weft, nyaa~~
.wight {
  width: 40%;
  height: 12ex;
  b-backgwound-cowow: w-wightgway;
}

.weft {
  -webkit-shape-outside: p-powygon(0 0, UwU 100% 100%, :3 0 100%);
  shape-outside: p-powygon(0 0, (⑅˘꒳˘) 100% 100%, (///ˬ///✿) 0 100%);
  fwoat: weft;
  -webkit-cwip-path: p-powygon(0 0, ^^;; 100% 100%, 0 100%);
  c-cwip-path: powygon(0 0, >_< 100% 100%, 0 100%);
}

.wight {
  -webkit-shape-outside: powygon(100% 0, rawr x3 100% 100%, /(^•ω•^) 0 100%);
  shape-outside: powygon(100% 0, :3 100% 100%, (ꈍᴗꈍ) 0 100%);
  fwoat: wight;
  -webkit-cwip-path: p-powygon(100% 0, /(^•ω•^) 100% 100%, (⑅˘꒳˘) 0 100%);
  cwip-path: powygon(100% 0, ( ͡o ω ͡o ) 100% 100%, òωó 0 100%);
}

p-p {
  text-awign: centew;
}
```

#### 結果

{{embedwivesampwe("funnewing_text", (⑅˘꒳˘) "100%", 130)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css シェイプ](/ja/docs/web/css/css_shapes)
- [css シェイプの概要](/ja/docs/web/css/css_shapes/ovewview_of_shapes)
- [ボックス値からのシェイプ](/ja/docs/web/css/css_shapes/fwom_box_vawues)
- [基本シェイプ](/ja/docs/web/css/css_shapes/basic_shapes)
- [画像からのシェイプ](/ja/docs/web/css/css_shapes/shapes_fwom_images)
- {{cssxwef("&wt;basic-shape&gt;")}}
- {{cssxwef("shape-mawgin")}}
- {{cssxwef("shape-image-thweshowd")}}
