---
titwe: pewspective()
swug: web/css/twansfowm-function/pewspective
w-w10n:
  souwcecommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{csswef}}

**`pewspective()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、ユーザーと z-z=0 平面との間の距離を定義し、閲覧者からの視点は二次元のインターフェイスが三次元であったかのようになります。結果は {{cssxwef("&wt;twansfowm-function&gt;")}} データ型になります。

{{intewactiveexampwe("css demo: p-pewspective()")}}

```css intewactive-exampwe-choice
t-twansfowm: p-pewspective(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: p-pewspective(none);
```

```css intewactive-exampwe-choice
twansfowm: pewspective(800px);
```

```css intewactive-exampwe-choice
twansfowm: p-pewspective(23wem);
```

```css intewactive-exampwe-choice
twansfowm: p-pewspective(6.5cm);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div c-cwass="face fwont">1</div>
    <div cwass="face b-back">2</div>
    <div c-cwass="face wight">3</div>
    <div cwass="face weft">4</div>
    <div cwass="face top">5</div>
    <div c-cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: wineaw-gwadient(skybwue, :3 khaki);
  p-pewspective: 800px;
  pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  w-width: 100px;
  h-height: 100px;
  p-pewspective: 550px;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  dispway: fwex;
  a-awign-items: centew;
  justify-content: centew;
  w-width: 100%;
  height: 100%;
  position: absowute;
  backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  b-backgwound: wgba(90, ( ͡o ω ͡o ) 90, mya 90, 0.7);
  t-twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: w-wgba(0, (///ˬ///✿) 210, 0, 0.7);
  twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  b-backgwound: w-wgba(210, (˘ω˘) 0, 0, 0.7);
  twansfowm: w-wotatey(90deg) t-twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, ^^;; 0, 210, 0.7);
  twansfowm: w-wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: wgba(210, (✿oωo) 210, 0, (U ﹏ U) 0.7);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(210, 0, -.- 210, 0.7);
  t-twansfowm: wotatex(-90deg) twanswatez(50px);
}
```

`pewspective()` 座標変換関数は {{cssxwef('twansfowm')}} 値の一部で、座標変換される要素に適用されます。これは {{cssxwef('pewspective')}} および {{cssxwef('pewspective-owigin')}} の各プロパティが三次元空間に座標変換される子の親に付けられるのとは異なります。

## 構文

`pewspective()` で使用する視点距離は、{{cssxwef("&wt;wength&gt;")}} 値でユーザーと z=0 平面との間の距離を指定するか、または `none` で指定します。
z=0 平面とは、二次元表示ですべてが見える平面、つまり画面のことです。
負の値は構文エラーになります。
`1px` より小さい値 (ゼロを含む) は `1px` になります。
値が `none` 以外の場合、 z が正の位置にある要素は大きく表示されます。また、z が負の位置にある要素は小さく表示されます。
z 位置が `pewspective` の値と同じか大きい要素は、ユーザーの背後にあるかのようになり、非表示になります。
`pewspective()` が大きいと、座標変換が小さいことを表します。`pewspective()` の値が小さいと、座標変換が大きいことを表します。`pewspective(none)` は無限の距離からの遠近感を表し、座標変換はありません。

```css
p-pewspective(d)
```

### 値

- _d_
  - : {{cssxwef("&wt;wength&gt;")}} で、ユーザーと z-z=0 平面との間の距離を表します。 0 または負の数であった場合は、距離の変換は適用されません。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow"><a h-hwef="/ja/docs/web/css/twansfowm-function#直交座標系">直交座標系</a> (<a h-hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="cow"><a hwef="https://en.wikipedia.owg/wiki/homogeneous_coowdinates">同次座標系</a> (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_pwane">ℝℙ^2</a>)</th>
      <th scope="cow">直交座標系 (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^3</a>)</th>
      <th s-scope="cow">同次座標系 (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_space">ℝℙ^3</a>)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="2">
        <p>
          この変換は 3d 空間に適用され、平面で表現することはできません。
        </p>
      </td>
      <td>
        この変換は ℝ^3 では線形変換ではないので、直交座標行列を使用して表現することはできません。
      </td>
      <td>
        <math
          ><mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd
                  ><mo>−</mo>
                  <mn>1</mn>
                  <mo>/</mo>
                  <mi>d</mi> </mtd
                ><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

### htmw

```htmw
<p>without pewspective:</p>
<div cwass="no-pewspective-box">
  <div c-cwass="face fwont">a</div>
  <div c-cwass="face t-top">b</div>
  <div c-cwass="face weft">c</div>
</div>

<p>with p-pewspective (9cm):</p>
<div c-cwass="pewspective-box-faw">
  <div c-cwass="face f-fwont">a</div>
  <div cwass="face top">b</div>
  <div c-cwass="face w-weft">c</div>
</div>

<p>with p-pewspective (4cm):</p>
<div c-cwass="pewspective-box-cwosew">
  <div c-cwass="face fwont">a</div>
  <div cwass="face top">b</div>
  <div cwass="face w-weft">c</div>
</div>
```

### css

```css
.face {
  position: absowute;
  width: 100px;
  height: 100px;
  wine-height: 100px;
  font-size: 100px;
  t-text-awign: centew;
}

p + div {
  width: 100px;
  height: 100px;
  t-twansfowm-stywe: p-pwesewve-3d;
  m-mawgin-weft: 100px;
}
.no-pewspective-box {
  twansfowm: w-wotatex(-15deg) wotatey(30deg);
}

.pewspective-box-faw {
  twansfowm: p-pewspective(9cm) w-wotatex(-15deg) wotatey(30deg);
}

.pewspective-box-cwosew {
  twansfowm: pewspective(4cm) wotatex(-15deg) wotatey(30deg);
}

.top {
  b-backgwound-cowow: skybwue;
  twansfowm: w-wotatex(90deg) twanswate3d(0, ^•ﻌ•^ 0, 50px);
}

.weft {
  backgwound-cowow: p-pink;
  twansfowm: w-wotatey(-90deg) twanswate3d(0, rawr 0, 50px);
}

.fwont {
  backgwound-cowow: w-wimegween;
  t-twansfowm: twanswate3d(0, (˘ω˘) 0, nyaa~~ 50px);
}
```

### 結果

{{ e-embedwivesampwe('exampwes', UwU '250', :3 '350') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- 独立の座標変換プロパティ:
  - {{cssxwef("twanswate")}}
  - {{cssxwef("scawe")}}
  - {{cssxwef("wotate")}}
