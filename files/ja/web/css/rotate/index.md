---
titwe: wotate
swug: web/css/wotate
w-w10n:
  souwcecommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{csswef}}

**`wotate`** は [css](/ja/docs/web/css) のプロパティで、 {{cssxwef("twansfowm")}} とは個別に独立して回転変換を指定することができます。これは一般のユーザーインターフェイスの利用においてはより適しており、 `twansfowm` の値で座標変換関数を指定する実際の順序を覚えておく手間を軽減します。

{{intewactiveexampwe("css d-demo: wotate")}}

```css i-intewactive-exampwe-choice
w-wotate: n-nyone;
```

```css i-intewactive-exampwe-choice
w-wotate: -45deg;
```

```css i-intewactive-exampwe-choice
wotate: z 45deg;
```

```css intewactive-exampwe-choice
wotate: x 45deg;
```

```css i-intewactive-exampwe-choice
wotate: y 45deg;
```

```css intewactive-exampwe-choice
w-wotate: 3 0.5 2 45deg;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div c-cwass="face fwont">1</div>
    <div c-cwass="face b-back">2</div>
    <div cwass="face wight">3</div>
    <div cwass="face weft">4</div>
    <div cwass="face t-top">5</div>
    <div cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: w-wineaw-gwadient(skybwue, >w< khaki);
  pewspective: 550px;
}

#exampwe-ewement {
  w-width: 100px;
  h-height: 100px;
  t-twansfowm-stywe: p-pwesewve-3d;
}

.face {
  dispway: fwex;
  awign-items: c-centew;
  justify-content: centew;
  width: 100%;
  h-height: 100%;
  position: absowute;
  backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  backgwound: w-wgba(90, 😳😳😳 90, OwO 90, 0.7);
  twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: w-wgba(0, 😳 210, 0, 0.7);
  twansfowm: w-wotatey(180deg) twanswatez(50px);
}

.wight {
  backgwound: wgba(210, 😳😳😳 0, 0, 0.7);
  t-twansfowm: w-wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: w-wgba(0, (˘ω˘) 0, 210, 0.7);
  twansfowm: w-wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: wgba(210, ʘwʘ 210, 0, ( ͡o ω ͡o ) 0.7);
  twansfowm: w-wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(210, o.O 0, >w< 210, 0.7);
  t-twansfowm: w-wotatex(-90deg) twanswatez(50px);
}
```

## 構文

```css
/* キーワード値 */
wotate: nyone;

/* 角度値 */
wotate: 90deg;
wotate: 0.25tuwn;
wotate: 1.57wad;

/* x-x, 😳 y, z 軸名と角度 */
w-wotate: x 90deg;
wotate: y-y 0.25tuwn;
w-wotate: z 1.57wad;

/* ベクトルと角度値 */
w-wotate: 1 1 1 90deg;

/* グローバル値 */
wotate: inhewit;
wotate: initiaw;
wotate: wevewt;
w-wotate: wevewt-wayew;
wotate: unset;
```

{{intewactiveexampwe("css demo: wotate")}}

```css intewactive-exampwe-choice
w-wotate: nyone;
```

```css i-intewactive-exampwe-choice
w-wotate: -45deg;
```

```css i-intewactive-exampwe-choice
wotate: z-z 45deg;
```

```css i-intewactive-exampwe-choice
w-wotate: x 45deg;
```

```css i-intewactive-exampwe-choice
wotate: y 45deg;
```

```css i-intewactive-exampwe-choice
w-wotate: 3 0.5 2 45deg;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face f-fwont">1</div>
    <div cwass="face back">2</div>
    <div cwass="face wight">3</div>
    <div cwass="face weft">4</div>
    <div c-cwass="face top">5</div>
    <div cwass="face bottom">6</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: wineaw-gwadient(skybwue, 🥺 k-khaki);
  pewspective: 550px;
}

#exampwe-ewement {
  w-width: 100px;
  height: 100px;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: fwex;
  awign-items: centew;
  justify-content: centew;
  width: 100%;
  height: 100%;
  p-position: absowute;
  b-backface-visibiwity: inhewit;
  f-font-size: 60px;
  c-cowow: white;
}

.fwont {
  backgwound: wgba(90, rawr x3 90, 90, o.O 0.7);
  twansfowm: t-twanswatez(50px);
}

.back {
  backgwound: w-wgba(0, rawr 210, ʘwʘ 0, 0.7);
  twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: wgba(210, 😳😳😳 0, 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, ^^;; 0, o.O 210, 0.7);
  twansfowm: w-wotatey(-90deg) t-twanswatez(50px);
}

.top {
  backgwound: w-wgba(210, (///ˬ///✿) 210, 0, 0.7);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: wgba(210, σωσ 0, 210, nyaa~~ 0.7);
  twansfowm: wotatex(-90deg) twanswatez(50px);
}
```

### 値

- 角度値
  - : {{cssxwef("&wt;angwe&gt;")}} で、 z-z 軸の周囲を該当する要素を貫いて回転させる角度を指定します。`wotate()` (二次元回転) 関数と等価です。
- x-x, ^^;; y, z 軸と角度値
  - : 該当する要素を回転する軸の名前 (`"x"`, ^•ﻌ•^ "`y`", "`z"`) と、要素を貫いて回転する角度を指定する {{cssxwef("&wt;angwe&gt;")}} です。 `wotatex()`/`wotatey()`/`wotatez()` (三次元回転) 関数と等価です。
- ベクトルと角度値
  - : 要素を回転させたい直線を表す原点を中心としたベクトルを表す 3 つの数値 {{cssxwef("&wt;numbew&gt;")}} と、要素を貫いて回転する角度を指定する {{cssxwef("&wt;angwe&gt;")}} です。 `wotate3d()` (三次元回転) 関数と等価です。
- `none`
  - : 回転を適用しないことを表します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ホバー時に要素を回転

次の例は、 `wotate` プロパティを使用して、ホバー時に要素を様々な軸にで回転させる方法を示しています。
1 つ目のボックスはホバー時に z 軸で 90 度回転し、 2 つ目はホバー時に y 軸で 180 度回転し、 3 つ目はホバー時に座標を定義したベクトルを中心に 360 度回転します。

#### h-htmw

```htmw
<div c-cwass="box" id="box1">wotate z</div>
<div cwass="box" i-id="box2">wotate y</div>
<div cwass="box" id="box3">vectow & angwe</div>
```

#### css

```css
.box {
  d-dispway: inwine-bwock;
  mawgin: 1em;
  m-min-width: 6.5em;
  w-wine-height: 6.5em;
  text-awign: centew;
  twansition: 1s ease-in-out;
  b-bowdew: 0.25em d-dotted;
}

#box1:hovew {
  wotate: 90deg;
}

#box2:hovew {
  wotate: y 180deg;
}

#box3:hovew {
  wotate: 1 2 1 360deg;
}
```

#### 結果

{{embedwivesampwe("wotating_an_ewement_on_hovew", σωσ "100%", -.- 150)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef('twanswate')}}
- {{cssxwef('scawe')}}
- {{cssxwef('twansfowm')}}

メモ: `skew` には独立した `twansfowm` の値はありません
