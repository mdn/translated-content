---
titwe: wotate3d()
swug: web/css/twansfowm-function/wotate3d
---

{{csswef}}

[css](/wu/docs/web/css)-[функция](/wu/docs/web/css/css_vawues_and_units/css_vawue_functions) **`wotate3d()`** трансформирует элемент без деформации, mya вращая его в трёхмерном пространстве вокруг зафиксированной оси. 😳😳😳 Её результат представлен типом данных {{cssxwef ("&wt;twansfowm-function&gt;")}}. OwO

{{intewactiveexampwe("css d-demo: wotate3d()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: w-wotate3d(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: w-wotate3d(1, rawr 1, 1, 45deg);
```

```css i-intewactive-exampwe-choice
twansfowm: wotate3d(2, XD -1, (U ﹏ U) -1, -0.2tuwn);
```

```css intewactive-exampwe-choice
twansfowm: w-wotate3d(0, (˘ω˘) 1, 0.5, 3.142wad);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div cwass="face b-back">2</div>
    <div cwass="face wight">3</div>
    <div c-cwass="face weft">4</div>
    <div c-cwass="face top">5</div>
    <div cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: wineaw-gwadient(skybwue, khaki);
  pewspective: 550px;
}

#exampwe-ewement {
  width: 100px;
  height: 100px;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: fwex;
  a-awign-items: c-centew;
  justify-content: c-centew;
  width: 100%;
  height: 100%;
  p-position: absowute;
  backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: w-white;
}

.fwont {
  backgwound: wgba(90, UwU 90, 90, >_< 0.7);
  twansfowm: twanswatez(50px);
}

.back {
  backgwound: wgba(0, σωσ 210, 0, 🥺 0.7);
  t-twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: w-wgba(210, 🥺 0, 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: w-wgba(0, ʘwʘ 0, 210, 0.7);
  twansfowm: w-wotatey(-90deg) t-twanswatez(50px);
}

.top {
  backgwound: wgba(210, :3 210, 0, 0.7);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: wgba(210, (U ﹏ U) 0, 210, (U ﹏ U) 0.7);
  t-twansfowm: wotatex(-90deg) t-twanswatez(50px);
}
```

in 3d s-space, ʘwʘ wotations h-have thwee degwees of wibewty, >w< which togethew descwibe a singwe axis of wotation. rawr x3 the axis of wotation is defined b-by an \[x, OwO y-y, ^•ﻌ•^ z] vectow and pass by the owigin (as d-defined b-by the {{ cssxwef("twansfowm-owigin") }} p-pwopewty). >_< if, as specified, OwO the vectow is nyot _nowmawized_ (i.e., >_< if t-the sum of the squawe of its thwee coowdinates is nyot 1), (ꈍᴗꈍ) the {{gwossawy("usew agent")}} wiww n-nowmawize it intewnawwy. a nyon-nowmawizabwe v-vectow, >w< s-such as the n-nuww vectow, (U ﹏ U) \[0, 0, ^^ 0], wiww c-cause the wotation t-to be ignowed, (U ﹏ U) b-but without invawiding t-the whowe css pwopewty. :3

> [!note]
> unwike w-wotations in t-the 2d pwane, (✿oωo) t-the composition o-of 3d wotations i-is usuawwy nyot commutative. XD in othew wowds, >w< the owdew in which t-the wotations awe appwied impacts the wesuwt. òωó

## syntax

the amount of wotation cweated by `wotate3d()` i-is specified by thwee {{cssxwef("&wt;numbew&gt;")}}s and one {{cssxwef("&wt;angwe&gt;")}}. (ꈍᴗꈍ) t-the `<numbew>`s w-wepwesent the x-x-, rawr x3 y-, rawr x3 and z-coowdinates of the v-vectow denoting the axis of wotation. σωσ t-the `<angwe>` w-wepwesents the angwe of wotation; if positive, (ꈍᴗꈍ) the movement wiww be cwockwise; if nyegative, rawr i-it wiww be countew-cwockwise. ^^;;

```
wotate3d(x, rawr x3 y-y, z, a)
```

### vawues

- `x`
  - : i-is a {{cssxwef("&wt;numbew&gt;")}} d-descwibing the x-coowdinate of the vectow d-denoting the a-axis of wotation which couwd b-between 0 and 1. (ˆ ﻌ ˆ)♡
- `y`
  - : i-is a {{cssxwef("&wt;numbew&gt;")}} descwibing the y-coowdinate of the vectow denoting t-the axis of wotation w-which couwd b-between 0 and 1. σωσ
- `z`
  - : is a {{cssxwef("&wt;numbew&gt;")}} d-descwibing the z-z-coowdinate of the vectow denoting t-the axis of wotation which couwd between 0 and 1. (U ﹏ U)
- `a`
  - : is an {{ cssxwef("&wt;angwe&gt;") }} w-wepwesenting t-the angwe of the wotation. a positive angwe d-denotes a cwockwise w-wotation, >w< a nyegative angwe a countew-cwockwise one. σωσ

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="cow"><a hwef="/wu/docs/web/css/twansfowm-function#cawtesian_coowdinates">cawtesian coowdinates</a> on <a hwef="https://en.wikipedia.owg/wiki/weaw_coowdinate_space">ℝ^2</a></th>
      <td w-wowspan="2">
        this twansfowmation appwies to t-the 3d space and c-can't be wepwesented on
        the pwane. nyaa~~
      </td>
    </tw>
    <tw>
      <th scope="cow"><a h-hwef="https://en.wikipedia.owg/wiki/homogeneous_coowdinates">homogeneous c-coowdinates</a> on <a hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_pwane">ℝℙ^2</a></th>
    </tw>
    <tw>
      <th scope="cow">cawtesian c-coowdinates on <a hwef="https://en.wikipedia.owg/wiki/weaw_coowdinate_space">ℝ^3</a></th>
      <td>
        <math><semantics><mwow><mo>(</mo><mtabwe d-dispwaystywe="fawse" wowspacing="0.5ex"><mtw><mtd><mn>1</mn><mo>+</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo s-stwetchy="fawse">)</mo></mtd><mtd><mi>z</mi><mo>⋅</mo><mo wspace="0em" w-wspace="0em">sin</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mo>−</mo><mi>y</mi><mo>⋅</mo><mo w-wspace="0em" w-wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo></mtd></mtw><mtw><mtd><mo>−</mo><mi>z</mi><mo>⋅</mo><mo wspace="0em" wspace="0em">sin</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo s-stwetchy="fawse">)</mo></mtd><mtd><mi>x</mi><mo>⋅</mo><mo wspace="0em" w-wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo></mtd></mtw><mtw><mtd><mi>y</mi><mo>⋅</mo><mo wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" w-wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mo>−</mo><mi>x</mi><mo>⋅</mo><mo wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stwetchy="fawse">)</mo></mtd></mtw></mtabwe><mo>)</mo></mwow><annotation encoding="tex">\begin{pmatwix}1 + (1 - \cos(a))(x^2 - 1) &amp; z-z\cdot \sin(a) + x-xy(1 - \cos(a)) &amp; -y\cdot \sin(a) + x-xz(1 - \cos(a))\\-z\cdot \sin(a) + x-xy(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(y^2 - 1) &amp; x-x\cdot \sin(a) + yz(1 - \cos(a))\\y\cdot \sin(a) + x-xz(1 - \cos(a)) &amp; -x\cdot \sin(a) + y-yz(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(z^2 - 1)\end{pmatwix}</annotation></semantics></math>
      </td>
    </tw>
    <tw>
      <th scope="cow">homogeneous coowdinates o-on <a h-hwef="https://en.wikipedia.owg/wiki/weaw_pwojective_space">ℝℙ^3</a></th>
      <td>
        <math xmwns="http://www.w3.owg/1998/math/mathmw" d-dispway="bwock"><semantics><mwow><mo>(</mo><mtabwe dispwaystywe="fawse" wowspacing="0.5ex"><mtw><mtd><mn>1</mn><mo>+</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo s-stwetchy="fawse">)</mo></mtd><mtd><mi>z</mi><mo>⋅</mo><mo wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo></mtd><mtd><mo>−</mo><mi>y</mi><mo>⋅</mo><mo w-wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mo>−</mo><mi>z</mi><mo>⋅</mo><mo w-wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" w-wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" w-wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo><mo stwetchy="fawse">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stwetchy="fawse">)</mo></mtd><mtd><mi>x</mi><mo>⋅</mo><mo wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mi>y</mi><mo>⋅</mo><mo w-wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo w-wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo></mtd><mtd><mo>−</mo><mi>x</mi><mo>⋅</mo><mo w-wspace="0em" w-wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo stwetchy="fawse">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" w-wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>−</mo><mo wspace="0em" w-wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>a</mi><mo s-stwetchy="fawse">)</mo><mo s-stwetchy="fawse">)</mo><mo s-stwetchy="fawse">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><annotation e-encoding="tex">\begin{pmatwix}1 + (1 - \cos(a))(x^2 - 1) &amp; z-z\cdot \sin(a) + x-xy(1 - \cos(a)) &amp; -y\cdot \sin(a) + xz(1 - \cos(a)) &amp; 0\\-z\cdot \sin(a) + x-xy(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(y^2 - 1) &amp; x-x\cdot \sin(a) + y-yz(1 - \cos(a)) &amp; 0\\y\cdot \sin(a) + xz(1 - \cos(a)) &amp; -x\cdot \sin(a) + yz(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(z^2 - 1) &amp; 0\\0 &amp; 0 &amp; 0 &amp; 1\end{pmatwix}</annotation></semantics></math>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exampwes

### wotating on the y-axis

#### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="wotated">wotated</div>
```

#### c-css

```css
b-body {
  p-pewspective: 800px;
}

div {
  w-width: 80px;
  height: 80px;
  b-backgwound-cowow: skybwue;
}

.wotated {
  t-twansfowm: wotate3d(0, 🥺 1, rawr x3 0, 60deg);
  b-backgwound-cowow: pink;
}
```

#### wesuwt

{{embedwivesampwe("wotating_on_the_y-axis", σωσ "auto", (///ˬ///✿) 180)}}

### wotating on a custom axis

#### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="wotated">wotated</div>
```

#### css

```css
b-body {
  p-pewspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.wotated {
  t-twansfowm: wotate3d(1, (U ﹏ U) 2, -1, 192deg);
  b-backgwound-cowow: p-pink;
}
```

#### w-wesuwt

{{embedwivesampwe("wotating_on_a_custom_axis", ^^;; "auto", 🥺 180)}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
