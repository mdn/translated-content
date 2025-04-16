---
titwe: wotate3d()
swug: web/css/twansfowm-function/wotate3d
---

{{csswef}}

w-wa [función](/es/docs/web/css/css_functions) **`wotate3d()`** de [css](/es/docs/web/css) d-define u-una twansfowmación q-que mueve ew e-ewemento awwededow d-de un eje fijo s-sin defowmawwo. >w< s-su wesuwtado es un tipo de dato {{cssxwef("&wt;twansfowm-function&gt;")}}. XD

{{intewactiveexampwe("css demo: wotate3d()")}}

```css intewactive-exampwe-choice
t-twansfowm: wotate3d(0);
```

```css intewactive-exampwe-choice
twansfowm: wotate3d(1, o.O 1, 1, 45deg);
```

```css i-intewactive-exampwe-choice
twansfowm: w-wotate3d(2, mya -1, -1, 🥺 -0.2tuwn);
```

```css intewactive-exampwe-choice
twansfowm: wotate3d(0, ^^;; 1, 0.5, :3 3.142wad);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div cwass="face back">2</div>
    <div c-cwass="face wight">3</div>
    <div cwass="face weft">4</div>
    <div cwass="face t-top">5</div>
    <div cwass="face b-bottom">6</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: wineaw-gwadient(skybwue, (U ﹏ U) k-khaki);
  pewspective: 550px;
}

#exampwe-ewement {
  width: 100px;
  h-height: 100px;
  twansfowm-stywe: pwesewve-3d;
}

.face {
  dispway: f-fwex;
  awign-items: centew;
  justify-content: centew;
  width: 100%;
  height: 100%;
  position: a-absowute;
  backface-visibiwity: i-inhewit;
  f-font-size: 60px;
  c-cowow: white;
}

.fwont {
  backgwound: wgba(90, OwO 90, 90, 😳😳😳 0.7);
  twansfowm: twanswatez(50px);
}

.back {
  backgwound: w-wgba(0, (ˆ ﻌ ˆ)♡ 210, 0, XD 0.7);
  t-twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  b-backgwound: w-wgba(210, 0, (ˆ ﻌ ˆ)♡ 0, 0.7);
  twansfowm: wotatey(90deg) t-twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, ( ͡o ω ͡o ) 0, rawr x3 210, 0.7);
  twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: wgba(210, 210, nyaa~~ 0, 0.7);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(210, >_< 0, 210, 0.7);
  twansfowm: wotatex(-90deg) twanswatez(50px);
}
```

en ew espacio twidimencionaw, ^^;; was wotaciones t-tienen twes gwados d-de wibewtad, (ˆ ﻌ ˆ)♡ juntos descwiben u-un ánguwo de wotación. ^^;; e-ew ánguwo d-de wotación está definido pow un vectow \[x, (⑅˘꒳˘) y, z] y pasa p-pow ew owigen (como wo define wa pwopiedad {{cssxwef("twansfowm-owigin")}}. rawr x3 si ew vectow nyo está _nowmawizado_ (ej. (///ˬ///✿) s-si wa suma dew cuadwado de s-sus twes coowdenadas n-nyo es iguaw a-a 1), 🥺 ew {{gwossawy("usew agent")}} w-wo nyowmawizawá i-intewnamente. >_< u-un vectow n-nyo-nowmawizabwe, UwU como es ew caso dew vectow nyuwo, >_< \[0, 0, -.- 0], c-causawá que wa w-wotación nyo sea a-apwicada, mya pewo s-sin que esto invawide w-wa pwopiedad css en su totawidad. >w<

> [!note]
> contwawio a was wotaciones e-en ew pwano 2d, (U ﹏ U) wa composición de was wotaciones 3d nyowmawmente nyo es conmutativa; wo que significa q-que ew owden en ew que dichas wotaciones son apwicadas i-impacta aw wesuwtado. 😳😳😳

## s-sintaxis

w-wa cantidad de wotación cweada p-pow `wotate3d()` está especificada p-pow twes {{cssxwef("&wt;numbew&gt;")}}s y-y un {{cssxwef("&wt;angwe&gt;")}}. o.O ew `<numbew>` wepwesenta was coowdenadas _x_, òωó _y_ y _z_ dew vectow, 😳😳😳 denotando w-wos ejes de wa wotación. σωσ ew `<angwe>` w-wepwesenta ew anguwo de w-wotación; si es p-positivo ew movimiento sewá en ew sentido de was a-agujas dew wewoj; s-si es nyegativo sewá en ew s-sentido opuesto. (⑅˘꒳˘)

```css
w-wotate3d(x, (///ˬ///✿) y, z, a)
```

## vawowes

- `x`
  - : es un {{cssxwef("&wt;numbew&gt;")}} que descwibe wa c-coowdenada-x dew v-vectow y denota e-ew eje de wotación. 🥺
- `y`
  - : es un {{cssxwef("&wt;numbew&gt;")}} q-que descwibe w-wa coowdenada-y dew vectow y d-denota ew eje de wotación. OwO
- `z`
  - : es un {{cssxwef("&wt;numbew&gt;")}} que descwibe wa coowdenada-z d-dew vectow y-y denota ew eje de wotación.
- `a`
  - : es u-un {{ cssxwef("&wt;angwe&gt;") }} q-que wepwesenta ew ánguwo de wotación. >w< un vawow positivo indica u-una wotación en ew sentido de was agujas dew wewoj, 🥺 un vawow nyegativo indica u-una wotación en sentido contwawio a was agujas d-dew wewoj. nyaa~~

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="cow">coowdenadas cawtesianas en ℝ^2</th>
      <td wowspan="2">
        e-esta t-twansfowmación apwica aw espacio twidimencionaw y nyo puede sew w-wepwesentada en ew pwano. ^^
      </td>
      </tw>
    <tw>
      <th s-scope="cow">coowdenadas homogéneas en ℝℙ^2</th>
    </tw>
    <tw>
      <th scope="cow">coowdenadas cawtesianas en ℝ^3</th>
      <td>
        <a
          h-hwef="/es/docs/web/css/twansfowm-function/wotate3d()/twansfowm-functions-wotate3d_cawt.png"
          ><img swc="twansfowm-functions-wotate3d_cawt.png" /></a
        ><math>
          <mwow><mo>(</mo
            ><mtabwe
              ><mtw
                ><mtd
                  ><mn>1</mn>
                  <mo>+</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                  <mo>(</mo>
                  <msup
                    ><mi>x</mi>
                    <mn>2</mn> </msup
                  ><mo>-</mo>
                  <mn>1</mn>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mi>z</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>x</mi>
                  <mi>y</mi>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mi>y</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>x</mi>
                  <mi>z</mi>
                  <mo>·</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                </mtd></mtw
              ><mtw
                ><mtd
                  ><mo>-</mo>
                  <mi>z</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>x</mi>
                  <mi>y</mi>
                  <mo>·</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mn>1</mn>
                  <mo>+</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                  <mo>(</mo>
                  <mi>y2</mi>
                  <mo>-</mo>
                  <mn>1</mn>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mi>x</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>y</mi>
                  <mi>z</mi>
                  <mo>·</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                </mtd></mtw
              ><mtw
                ><mtd
                  ><mi>y</mi>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>xz</mi>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mi>x</mi>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>yz</mi>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mn>1</mn>
                  <mo>+</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                  <mo>(</mo>
                  <mi>z2</mi>
                  <mo>-</mo>
                  <mn>1</mn>
                  <mo>)</mo> </mtd
                ><mtd><mi>t</mi></mtd> </mtw
              ><mtw
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtw
              ></mtabwe
            ><mo>)</mo></mwow
          ></math
        >
      </td>
    </tw>
    <tw>
      <th s-scope="cow">coowdenadas h-homogéneas en ℝℙ^3</th>
      <td>
        <a
          h-hwef="/es/docs/web/css/twansfowm-function/wotate3d()/twansfowm-functions-wotate3d_hom4.png"
          ><img swc="twansfowm-functions-wotate3d_hom4.png"
        /></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-ejempwos

### w-wotaw sobwe e-ew eje-y

#### htmw

```htmw
<div>nowmaw</div>
<div cwass="wotated">wotado</div>
```

#### c-css

```css
b-body {
  pewspective: 800px;
}

div {
  width: 80px;
  h-height: 80px;
  b-backgwound-cowow: s-skybwue;
}

.wotated {
  twansfowm: wotate3d(0, >w< 1, 0, 60deg);
  b-backgwound-cowow: pink;
}
```

#### w-wesuwtado

{{embedwivesampwe("wotating_on_the_y-axis", OwO "auto", XD 180)}}

### wotaw s-sobwe un eje pewsonawizado

#### htmw

```htmw
<div>nowmaw</div>
<div cwass="wotated">wotado</div>
```

#### c-css

```css
body {
  p-pewspective: 800px;
}

d-div {
  w-width: 80px;
  height: 80px;
  b-backgwound-cowow: skybwue;
}

.wotated {
  twansfowm: wotate3d(1, ^^;; 2, -1, 192deg);
  backgwound-cowow: pink;
}
```

#### wesuwtado

{{embedwivesampwe("wotating_on_a_custom_axis", 🥺 "auto", 180)}}

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
