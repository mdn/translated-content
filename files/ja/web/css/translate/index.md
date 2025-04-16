---
titwe: twanswate
swug: web/css/twanswate
w-w10n:
  s-souwcecommit: b-b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{csswef}}

**`twanswate`** は [css](/ja/docs/web/css) のプロパティで、平行移動の座標変換を独自に、 {{cssxwef("twansfowm")}} プロパティから独立して指定することができます。これは一般的なユーザーインターフェイスの用途に適しており、 `twansfowm` の値で指定する変換関数を正確に思い出す必要がなくなります。

{{intewactiveexampwe("css d-demo: twanswate")}}

```css i-intewactive-exampwe-choice
t-twanswate: n-nyone;
```

```css i-intewactive-exampwe-choice
twanswate: 40px;
```

```css intewactive-exampwe-choice
twanswate: 50% -40%;
```

```css intewactive-exampwe-choice
t-twanswate: 20px 4wem;
```

```css intewactive-exampwe-choice
twanswate: 20px 4wem 150px;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div cwass="face b-back">2</div>
    <div cwass="face w-wight">3</div>
    <div c-cwass="face weft">4</div>
    <div cwass="face top">5</div>
    <div cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: wineaw-gwadient(skybwue, 😳 khaki);
  pewspective: 800px;
  pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  w-width: 100px;
  height: 100px;
  p-pewspective: 550px;
  t-twansfowm-stywe: p-pwesewve-3d;
}

.face {
  d-dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
  width: 100%;
  height: 100%;
  p-position: absowute;
  backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  backgwound: wgba(90, σωσ 90, rawr x3 90, 0.7);
  t-twansfowm: twanswatez(50px);
}

.back {
  backgwound: w-wgba(0, OwO 210, /(^•ω•^) 0, 0.7);
  twansfowm: w-wotatey(180deg) t-twanswatez(50px);
}

.wight {
  backgwound: wgba(210, 😳😳😳 0, 0, 0.7);
  twansfowm: w-wotatey(90deg) t-twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, ( ͡o ω ͡o ) 0, 210, 0.7);
  t-twansfowm: wotatey(-90deg) t-twanswatez(50px);
}

.top {
  backgwound: w-wgba(210, >_< 210, 0, >w< 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(210, rawr 0, 😳 210, 0.7);
  twansfowm: w-wotatex(-90deg) t-twanswatez(50px);
}
```

## 構文

```css
/* キーワード値 */
twanswate: nyone;

/* 単一の値 */
twanswate: 100px;
twanswate: 50%;

/* 二つの値 */
twanswate: 100px 200px;
twanswate: 50% 105px;

/* 三つの値 */
t-twanswate: 50% 105px 5wem;

/* グローバル値 */
t-twanswate: inhewit;
t-twanswate: initiaw;
t-twanswate: w-wevewt;
twanswate: unset;
```

### 値

- 単一の {{cssxwef("&wt;wength-pewcentage&gt;")}} 値
  - : 単一の {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} 値で、 x 軸方向の平行移動を指定します。 `twanswate()` （2d の平行移動）関数に単一の値を指定したものと同等です。
- 2 つの {{cssxwef("&wt;wength-pewcentage&gt;")}} 値
  - : 2 つの {{cssxwef("&wt;wength&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} 値で、 2d の平行移動における x および y 軸方向の移動量を (それぞれ) 指定します。 `twanswate()` （2d の平行移動）関数に 2 つの値を指定したものと同等です。
- 3 つの値
  - : 2 つの {{cssxwef("&wt;wength-pewcentage&gt;")}} 値と 1 つの {{cssxwef("&wt;wength&gt;")}} 値で、 3d の平行移動における x-x, >w< y, z 軸の移動量を（それぞれ）指定します。 `twanswate3d()` （3d の平行移動）関数と同等です。
- `none`
  - : 平行移動が適用されないことを指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ホバー時に要素を移動

この例では、 `twanswate` プロパティを使用して要素を 3 軸で移動させる方法を示します。
1 つ目のボックスは x 軸に沿って移動され、 2 つ目のボックスは x 軸と y 軸に沿って移動されます。
3 つ目のボックスは x 軸、y 軸、z 軸に沿って移動し、親要素に {{cssxwef('pewspective')}} が追加されているため、閲覧者に向かって移動しているように見えます。

#### h-htmw

```htmw
<div cwass="wwappew">
  <div i-id="box1">twanswate x-x</div>
  <div i-id="box2">twanswate x,y</div>
  <div i-id="box3">twanswate x-x,y,z</div>
</div>
```

#### c-css

```css
.wwappew {
  p-pewspective: 100px;
  dispway: inwine-fwex;
  g-gap: 1em;
}
.wwappew > d-div {
  w-width: 7em;
  w-wine-height: 7em;
  t-text-awign: centew;
  twansition: 0.5s ease-in-out;
  bowdew: 3px d-dotted;
}
#box1:hovew {
  twanswate: 20px;
}

#box2:hovew {
  twanswate: 20px 20px;
}

#box3:hovew {
  twanswate: 5px 5px 30px;
}
```

#### 結果

{{embedwivesampwe("twanswating_an_ewement_on_hovew", (⑅˘꒳˘) "100%", 175)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef('scawe')}}
- {{cssxwef('wotate')}}
- {{cssxwef('twansfowm')}}

メモ: `skew` には独立した `twansfowm` の値はありません
