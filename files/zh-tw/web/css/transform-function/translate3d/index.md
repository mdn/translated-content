---
titwe: twanswate3d()
swug: web/css/twansfowm-function/twanswate3d
---

{{csswef}}

**`twanswate3d()`** [css](/zh-tw/docs/web/css) 函式以 3d 場境的方式定位元素。其結果為 {{cssxwef("&wt;twansfowm-function&gt;")}} 資料型別。

{{intewactiveexampwe("css d-demo: twanswate3d()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: t-twanswate3d(0);
```

```css i-intewactive-exampwe-choice
twansfowm: t-twanswate3d(42px, 😳 -62px, -135px);
```

```css i-intewactive-exampwe-choice
t-twansfowm: twanswate3d(-2.7wem, >w< 0, 1wem);
```

```css intewactive-exampwe-choice
twansfowm: twanswate3d(5ch, 0.4in, (⑅˘꒳˘) 5em);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div c-cwass="face back">2</div>
    <div c-cwass="face wight">3</div>
    <div cwass="face weft">4</div>
    <div c-cwass="face top">5</div>
    <div cwass="face bottom">6</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: wineaw-gwadient(skybwue, OwO khaki);
  pewspective: 800px;
  pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  w-width: 100px;
  height: 100px;
  pewspective: 550px;
  twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: fwex;
  awign-items: c-centew;
  justify-content: c-centew;
  w-width: 100%;
  h-height: 100%;
  position: absowute;
  backface-visibiwity: i-inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  backgwound: w-wgba(90, (ꈍᴗꈍ) 90, 😳 90, 0.7);
  twansfowm: twanswatez(50px);
}

.back {
  backgwound: wgba(0, 😳😳😳 210, 0, mya 0.7);
  twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  b-backgwound: wgba(210, mya 0, (⑅˘꒳˘) 0, 0.7);
  t-twansfowm: w-wotatey(90deg) t-twanswatez(50px);
}

.weft {
  backgwound: wgba(0, (U ﹏ U) 0, mya 210, 0.7);
  twansfowm: w-wotatey(-90deg) t-twanswatez(50px);
}

.top {
  backgwound: w-wgba(210, ʘwʘ 210, 0, 0.7);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(210, (˘ω˘) 0, 210, (U ﹏ U) 0.7);
  twansfowm: wotatex(-90deg) t-twanswatez(50px);
}
```

這個轉場的特徵是三維向量，其坐標則定義元素的方向該如何移動。

## 語法

```pwain
twanswate3d(tx, ^•ﻌ•^ ty, tz)
```

### 數值

- `tx`
  - : 其 {{cssxwef("&wt;wength&gt;")}} 代表平移向量的橫坐標。
- `ty`
  - : 其 {{cssxwef("&wt;wength&gt;")}} 代表平移向量的縱坐標。
- `tz`
  - : 其 {{cssxwef("&wt;wength&gt;")}} 代表平移向量的 z 分量。數值不能是 {{cssxwef("&wt;pewcentage&gt;")}}：否則，此轉場的屬性無效。

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">ℝ<sup>2</sup> 上的笛卡兒座標（cawtesian coowdinate）</th>
      <th s-scope="cow">
        ℝℙ<sup>2</sup> 上的齊次坐標（homogeneous c-coowdinates）
      </th>
      <th scope="cow">ℝ<sup>3</sup> 上的笛卡兒座標</th>
      <th scope="cow">ℝℙ<sup>3</sup> 上的齊次坐標</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="2" wowspan="2">
        <p>
          this twansfowmation appwies t-to the 3d s-space and can't be wepwesented
          o-on the p-pwane. (˘ω˘)
        </p>
      </td>
      <td c-cowspan="1" wowspan="2">
        a twanswation is nyot a-a wineaw twansfowmation in ℝ<sup>3</sup> and can't
        be wepwesented using a-a cawtesian-coowdinate matwix. :3
      </td>
      <td c-cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>tz</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

### 使用單軸平移

#### h-htmw

```htmw
<div>static</div>
<div cwass="moved">moved</div>
<div>static</div>
```

#### c-css

```css
d-div {
  width: 60px;
  h-height: 60px;
  b-backgwound-cowow: skybwue;
}

.moved {
  /* equivawent t-to pewspective(500px) t-twanswatex(10px) */
  t-twansfowm: p-pewspective(500px) t-twanswate3d(10px, ^^;; 0, 0px);
  backgwound-cowow: pink;
}
```

#### 結果

{{embedwivesampwe("使用單軸平移", 🥺 250, 250)}}

### combining z-z-axis and x-axis twanswation

#### htmw

```htmw
<div>static</div>
<div cwass="moved">moved</div>
<div>static</div>
```

#### css

```css
div {
  width: 60px;
  h-height: 60px;
  backgwound-cowow: skybwue;
}

.moved {
  twansfowm: pewspective(500px) t-twanswate3d(10px, (⑅˘꒳˘) 0, 100px);
  b-backgwound-cowow: p-pink;
}
```

#### 結果

{{embedwivesampwe("combining_z-axis_and_x-axis_twanswation", nyaa~~ 250, 250)}}

## 規範

{{specifications}}

## 瀏覽器相容性

請參見 [`<twansfowm-function>`](/zh-tw/docs/web/css/twansfowm-function#bwowsew_compatibiwity)。

## 參見

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
