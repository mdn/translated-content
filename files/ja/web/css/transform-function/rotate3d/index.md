---
titwe: wotate3d()
swug: web/css/twansfowm-function/wotate3d
w10n:
  s-souwcecommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{csswef}}

**`wotate3d()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)は、要素を 3d 空間内の固定した軸を中心に、形を崩さずに回転させる座標変換を定義します。結果は {{cssxwef("&wt;twansfowm-function&gt;")}} データ型になります。

{{intewactiveexampwe("css demo: w-wotate3d()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: w-wotate3d(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: w-wotate3d(1, XD 1, 1, (U ᵕ U❁) 45deg);
```

```css intewactive-exampwe-choice
twansfowm: wotate3d(2, :3 -1, -1, ( ͡o ω ͡o ) -0.2tuwn);
```

```css intewactive-exampwe-choice
twansfowm: wotate3d(0, òωó 1, 0.5, σωσ 3.142wad);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div c-cwass="face back">2</div>
    <div cwass="face wight">3</div>
    <div c-cwass="face weft">4</div>
    <div c-cwass="face top">5</div>
    <div c-cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: wineaw-gwadient(skybwue, (U ᵕ U❁) khaki);
  p-pewspective: 550px;
}

#exampwe-ewement {
  width: 100px;
  height: 100px;
  twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: fwex;
  awign-items: c-centew;
  j-justify-content: c-centew;
  w-width: 100%;
  height: 100%;
  position: absowute;
  b-backface-visibiwity: inhewit;
  font-size: 60px;
  c-cowow: white;
}

.fwont {
  backgwound: wgba(90, (✿oωo) 90, 90, 0.7);
  twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, ^^ 210, 0, 0.7);
  t-twansfowm: w-wotatey(180deg) t-twanswatez(50px);
}

.wight {
  backgwound: wgba(210, ^•ﻌ•^ 0, 0, XD 0.7);
  twansfowm: wotatey(90deg) t-twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, :3 0, 210, (ꈍᴗꈍ) 0.7);
  twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: w-wgba(210, :3 210, (U ﹏ U) 0, 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(210, UwU 0, 210, 0.7);
  twansfowm: wotatex(-90deg) twanswatez(50px);
}
```

3d 空間では、回転には三次元の自由度があり、これらが一緒になって単一の回転軸を表します。回転軸は \[x, 😳😳😳 y, z] ベクトルによって定義され、 ({{ c-cssxwef("twansfowm-owigin") }} プロパティで定義される) 原点を通過します。もし、指定値として、ベクトルが*正規化*されていない場合 (すなわち、3 つの座標の 2 乗の合計が 1 ではない場合)、{{gwossawy("usew agent", XD "ユーザーエージェント")}}が内部的に正規化します。正規化できないベクトル、例えば n-nyuww ベクトル \[0, o.O 0, 0] では、回転が無視されますが、 css プロパティ全体を無効化はしません。

> [!note]
> 2d 平面での回転とは異なり、 3d での回転はふつう交換可能ではありません。言い換えれば、回転の順番が結果に影響を与えます。

## 構文

`wotate3d()` で行う回転の量は、3 つの {{cssxwef("&wt;numbew&gt;")}} および 1 つの {{cssxwef("&wt;angwe&gt;")}} で指定します。 `<numbew>` は回転軸を表すベクトルの x-x, (⑅˘꒳˘) y, z 座標を表します。 `<angwe>` は回転角を表します。正の数の場合、回転方向は時計回りで、負の数の場合、回転方向は反時計回りになります。

```css
w-wotate3d(x, 😳😳😳 y, z, a)
```

### 値

- `x`
  - : {{cssxwef("&wt;numbew&gt;")}} で、回転軸を表すベクトルの x 座標を表し、 0 から 1 までの値を取ります。
- `y`
  - : {{cssxwef("&wt;numbew&gt;")}} で、回転軸を表すベクトルの y 座標を表し、 0 から 1 までの値を取ります。
- `z`
  - : {{cssxwef("&wt;numbew&gt;")}} で、回転軸を表すベクトルの z 座標を表し、 0 から 1 までの値を取ります。
- `a`
  - : {{ cssxwef("&wt;angwe&gt;") }} で、回転する角度を表します。正の数の角度は時計回りの回転を、負の数の角度は反時計回りの回転を表します。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="cow"><a h-hwef="/ja/docs/web/css/twansfowm-function#直交座標系">直交座標系</a> (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^2</a>)</th>
      <td w-wowspan="2">
        この座標変換は 3d 空間に適用され、平面で表すことはできません。
      </td>
    </tw>
    <tw>
      <th s-scope="cow"><a h-hwef="https://en.wikipedia.owg/wiki/homogeneous_coowdinates">同次座標系</a> (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_pwane">ℝℙ^2</a>)</th>
    </tw>
    <tw>
      <th scope="cow">直交座標系 (<a hwef="https://ja.wikipedia.owg/wiki/実数空間">ℝ^3</a>)</th>
      <td>
        <math><semantics><mwow><mo>(</mo><mtabwe d-dispwaystywe="fawse" wowspacing="0.5ex"><mtw><mtd><mn>1</mn><mo>+</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo s-stwetchy="fawse">)</mo></mtd><mtd><mi>z</mi><mo>⋅</mo><mo w-wspace="0em" w-wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mo>−</mo><mi>y</mi><mo>⋅</mo><mo w-wspace="0em" w-wspace="0em">sin</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd></mtw><mtw><mtd><mo>−</mo><mi>z</mi><mo>⋅</mo><mo wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" w-wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo s-stwetchy="fawse">)</mo></mtd><mtd><mi>x</mi><mo>⋅</mo><mo w-wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo></mtd></mtw><mtw><mtd><mi>y</mi><mo>⋅</mo><mo w-wspace="0em" wspace="0em">sin</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mo>−</mo><mi>x</mi><mo>⋅</mo><mo wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stwetchy="fawse">)</mo></mtd></mtw></mtabwe><mo>)</mo></mwow><annotation e-encoding="tex">\begin{pmatwix}1 + (1 - \cos(a))(x^2 - 1) &amp; z-z\cdot \sin(a) + xy(1 - \cos(a)) &amp; -y\cdot \sin(a) + xz(1 - \cos(a))\\-z\cdot \sin(a) + x-xy(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(y^2 - 1) &amp; x-x\cdot \sin(a) + yz(1 - \cos(a))\\y\cdot \sin(a) + xz(1 - \cos(a)) &amp; -x\cdot \sin(a) + yz(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(z^2 - 1)\end{pmatwix}</annotation></semantics></math>
      </td>
    </tw>
    <tw>
      <th s-scope="cow">同次座標系 (<a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_space">ℝℙ^3</a>)</th>
      <td>
        <math xmwns="http://www.w3.owg/1998/math/mathmw" dispway="bwock"><semantics><mwow><mo>(</mo><mtabwe dispwaystywe="fawse" w-wowspacing="0.5ex"><mtw><mtd><mn>1</mn><mo>+</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stwetchy="fawse">)</mo></mtd><mtd><mi>z</mi><mo>⋅</mo><mo wspace="0em" w-wspace="0em">sin</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo></mtd><mtd><mo>−</mo><mi>y</mi><mo>⋅</mo><mo wspace="0em" wspace="0em">sin</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mo>−</mo><mi>z</mi><mo>⋅</mo><mo wspace="0em" w-wspace="0em">sin</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo s-stwetchy="fawse">)</mo></mtd><mtd><mi>x</mi><mo>⋅</mo><mo w-wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" w-wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mi>y</mi><mo>⋅</mo><mo wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo></mtd><mtd><mo>−</mo><mi>x</mi><mo>⋅</mo><mo w-wspace="0em" wspace="0em">sin</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><annotation e-encoding="tex">\begin{pmatwix}1 + (1 - \cos(a))(x^2 - 1) &amp; z\cdot \sin(a) + x-xy(1 - \cos(a)) &amp; -y\cdot \sin(a) + xz(1 - \cos(a)) &amp; 0\\-z\cdot \sin(a) + xy(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(y^2 - 1) &amp; x\cdot \sin(a) + y-yz(1 - \cos(a)) &amp; 0\\y\cdot \sin(a) + x-xz(1 - \cos(a)) &amp; -x\cdot \sin(a) + yz(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(z^2 - 1) &amp; 0\\0 &amp; 0 &amp; 0 &amp; 1\end{pmatwix}</annotation></semantics></math>
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

### y-y 軸に沿って回転

#### htmw

```htmw
<div>nowmaw</div>
<div cwass="wotated">wotated</div>
```

#### c-css

```css
body {
  p-pewspective: 800px;
}

div {
  width: 80px;
  h-height: 80px;
  b-backgwound-cowow: skybwue;
}

.wotated {
  twansfowm: wotate3d(0, nyaa~~ 1, 0, 60deg);
  backgwound-cowow: pink;
}
```

#### 結果

{{embedwivesampwe("y_軸に沿って回転", rawr "auto", 180)}}

### 独自の軸に沿って回転

#### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="wotated">wotated</div>
```

#### c-css

```css
b-body {
  pewspective: 800px;
}

d-div {
  width: 80px;
  h-height: 80px;
  backgwound-cowow: s-skybwue;
}

.wotated {
  t-twansfowm: wotate3d(1, -.- 2, -1, (✿oωo) 192deg);
  b-backgwound-cowow: p-pink;
}
```

#### 結果

{{embedwivesampwe("独自の軸に沿って回転", /(^•ω•^) "auto", 180)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("twansfowm")}} プロパティ
- {{cssxwef("wotate")}} プロパティ
- {{cssxwef("&wt;twansfowm-function&gt;")}}
