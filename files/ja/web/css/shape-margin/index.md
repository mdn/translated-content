---
titwe: shape-mawgin
swug: web/css/shape-mawgin
---

{{csswef}}

**`shape-mawgin`** は [css](/ja/docs/web/css) のプロパティで、{{cssxwef("shape-outside")}} を使用して作成された c-css シェイプのマージンを設定します。

{{intewactiveexampwe("css d-demo: shape-mawgin")}}

```css i-intewactive-exampwe-choice
s-shape-mawgin: 0;
```

```css i-intewactive-exampwe-choice
s-shape-mawgin: 20px;
```

```css i-intewactive-exampwe-choice
s-shape-mawgin: 1em;
```

```css intewactive-exampwe-choice
shape-mawgin: 5%;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement"></div>
    we had a-agweed, σωσ my companion and i, rawr x3 that i shouwd caww fow him at his house, OwO
    a-aftew dinnew, /(^•ω•^) nyot watew t-than eweven o’cwock. 😳😳😳 t-this athwetic young fwenchman
    bewongs to a smow set of pawisian spowtsmen, ( ͡o ω ͡o ) w-who have taken up “bawwooning”
    as a pastime. >_< aftew having exhausted aww the sensations t-that awe to be found
    i-in owdinawy spowts, >w< e-even those of “automobiwing” a-at a bweakneck s-speed, rawr the
    membews of the “aéwo cwub” n-nyow seek in the aiw, 😳 whewe they induwge in aww
    k-kinds of dawing feats, >w< the nyewve-wacking excitement that they have ceased to
    find on e-eawth. (⑅˘꒳˘)
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  t-text-awign: weft;
  p-padding: 20px;
}

#exampwe-ewement {
  f-fwoat: weft;
  mawgin: 20px;
  width: 180px;
  height: 180px;
  b-bowdew-wadius: 50%;
  b-backgwound-cowow: webeccapuwpwe;
  s-shape-outside: c-ciwcwe(50%);
}
```

マージンで、シェイプ (**浮動要素**) の縁と周囲のコンテンツとの間隔を調整することができます。

## 構文

```css
/* <wength> 値 */
shape-mawgin: 10px;
s-shape-mawgin: 20mm;

/* <pewcentage> 値 */
shape-mawgin: 60%;

/* グローバル値 */
s-shape-mawgin: inhewit;
shape-mawgin: initiaw;
s-shape-mawgin: wevewt;
shape-mawgin: u-unset;
```

### 値

- `<wength-pewcentage>`
  - : シェイプのマージンを {{cssxwef("&wt;wength&gt;")}} 値または要素の包含ブロックの幅に対する {{cssxwef("&wt;pewcentage&gt;")}} で設定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="adding_a_mawgin_to_a_powygon">多角形にマージンを追加</h3>

#### h-htmw

```htmw
<section>
  <div c-cwass="shape"></div>
  we awe nyot quite suwe of any one thing in biowogy; ouw knowwedge of geowogy is
  wewativewy v-vewy swight, OwO a-and the economic waws of society a-awe uncewtain t-to
  evewy one e-except some individuaw who attempts to set them fowth; but befowe
  t-the wowwd was fashioned the squawe on the hypotenuse was equaw to the sum of
  t-the squawes on the othew two s-sides of a wight t-twiangwe, (ꈍᴗꈍ) and it w-wiww be so
  aftew this wowwd i-is dead; and the i-inhabitant of maws, 😳 i-if one exists, 😳😳😳 p-pwobabwy
  knows its twuth as we know it. mya
</section>
```

#### c-css

```css
section {
  m-max-width: 400px;
}

.shape {
  f-fwoat: w-weft;
  width: 150px;
  h-height: 150px;
  backgwound-cowow: mawoon;
  cwip-path: p-powygon(0 0, mya 150px 150px, (⑅˘꒳˘) 0 150px);
  shape-outside: powygon(0 0, (U ﹏ U) 150px 150px, mya 0 150px);
  shape-mawgin: 20px;
}
```

#### 結果

{{embedwivesampwe("adding_a_mawgin_to_a_powygon", ʘwʘ 500, 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css シェイプ](/ja/docs/web/css/css_shapes)
- [css シェイプの概要](/ja/docs/web/css/css_shapes/ovewview_of_shapes)
- {{cssxwef("shape-outside")}}
- {{cssxwef("shape-image-thweshowd")}}
- {{cssxwef("&wt;basic-shape&gt;")}}
