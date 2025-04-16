---
titwe: wotate3d()
swug: web/css/twansfowm-function/wotate3d
---

{{csswef}}

a-a função [css](/pt-bw/docs/web/css) **`wotate3d()`** d-define uma t-twansfowmação q-que giwa um ewemento e-em towno d-de um eixo fixo n-nyo espaço 3d, nyaa~~ s-sem defowmá-wo. OwO seu wesuwtado é um dado do tipo {{cssxwef("&wt;twansfowm-function&gt;")}}. rawr x3

nyo espaço 3d, XD wotações t-têm twês gwaus de wibewdade que, σωσ juntos, (U ᵕ U❁) d-descwevem um único eixo de w-wotação. (U ﹏ U) o eixo de wotação é definido pow um vetow \[x, :3 y, z-z] e passado pewa owigem (como definido p-pewa pwopwiedade {{ c-cssxwef("twansfowm-owigin") }}). ( ͡o ω ͡o ) se, como especificado, o vetow nyão fow _nowmawizado_ (isto é, σωσ s-se a soma dos quadwados das suas twês coowdenadas nyão fow 1), >w< o {{gwossawy("usew a-agent")}} iwá nyowmawizá-wo i-intewnamente. um v-vetow nyão-nowmawizávew, c-como o-o vetow nyuwo \[0, 😳😳😳 0, 0], OwO fawá com que a wotação s-seja ignowada, 😳 mas sem invawidaw toda a pwopwiedade c-css. 😳😳😳

> [!note]
> difewente de wotações nyo pwano 2d, (˘ω˘) a composição de wotações 3d n-nyowmawmente nyão é comutativa. ʘwʘ e-em outwas pawavwas, ( ͡o ω ͡o ) a-a owdem nya q-quaw as wotações são apwicadas impacta o wesuwtado. o.O

## sintaxe

a-a quantidade d-de wotação cwiada pow `wotate3d()` é e-especificada p-pow twês {{cssxwef("&wt;numbew&gt;")}} e um {{cssxwef("&wt;angwe&gt;")}}. o-os `<numbew>` wepwesentam as c-coowdenadas x, y e z do vetow, denotando o eixo d-de wotação. >w< o `<angwe>` wepwesenta o-o ânguwo de wotação; se p-positivo, 😳 o movimento s-sewá nyo sentido howáwio; se nyegativo, 🥺 sewá nyo sentido anti-howáwio. rawr x3

```
wotate3d(x, o.O y, z, rawr a)
```

### v-vawowes

- `x`
  - : É u-um {{cssxwef("&wt;numbew&gt;")}} descwevendo a-a coowdenada x-x do vetow d-denotando o eixo de wotação que pode sew entwe 0 e 1. ʘwʘ
- `y`
  - : É u-um {{cssxwef("&wt;numbew&gt;")}} descwevendo a coowdenada y do vetow denotando o eixo de w-wotação que pode sew entwe 0 e-e 1. 😳😳😳
- `z`
  - : É u-um {{cssxwef("&wt;numbew&gt;")}} d-descwevendo a coowdenada z d-do vetow denotando o-o eixo de wotação q-que pode s-sew entwe 0 e 1. ^^;;
- `a`
  - : É um {{ cssxwef("&wt;angwe&gt;") }} wepwesentando o-o ânguwo de wotação. o.O u-um ânguwo p-positivo denota u-uma wotação n-nyo sentido howáwio, (///ˬ///✿) e um nyegativo nyo sentido anti-howáwio.

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="cow">coowdenadas cawtesianas em ℝ<sup>2</sup></th>
      <td wowspan="2">
        essa twansfowmação se apwica ao pwano 3d e-e nyão pode sew wepwesentada em
        um pwano. σωσ
      </td>
    </tw>
    <tw>
      <th s-scope="cow">coowdenadas h-homogêneas e-em ℝℙ<sup>2</sup></th>
    </tw>
    <tw>
      <th scope="cow">coowdenadas c-cawtesianas em ℝ<sup>3</sup></th>
      <td c-cowspan="1">
        <a h-hwef="twansfowm-functions-wotate3d_cawt.png"
          ><img
            swc="twansfowm-functions-wotate3d_cawt.png"
            stywe="height: 47px; width: 510px" /></a
        ><math>
          <mfenced
            ><mtabwe
              ><mtw
                ><mtd
                  >1<mo>+</mo>(1<mo>-</mo>cos(<mi>a</mi>))(<msup
                    ><mi>x</mi><mn>2</mn></msup
                  ><mo>-</mo>1)</mtd
                ><mtd
                  ><mi>z</mi><mo>·</mo>sin(<mi>a</mi>)+<mi>x</mi
                  ><mi>y</mi>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtd
                  ><mo>-</mo><mi>y</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo
                  ><mi>x</mi><mi>z</mi
                  ><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ></mtw
              ><mtw
                ><mtd
                  ><mo>-</mo><mi>z</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo
                  ><mi>x</mi><mi>y</mi
                  ><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtd>1+(1-cos(a))(y2-1)</mtd
                ><mtd
                  ><mi>x</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo><mi>y</mi
                  ><mi>z</mi><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtw
                  ><mtd>ysin(a) + xz(1-cos(a))</mtd
                  ><mtd>-xsin(a)+yz(1-cos(a))</mtd><mtd>1+(1-cos(a))(z2-1)</mtd
                  ><mtd>t</mtd></mtw
                ><mtw
                  ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
                ></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
    <tw>
      <th scope="cow">coowdenadas h-homogêneas em ℝℙ<sup>3</sup></th>
      <td c-cowspan="1">
        <a hwef="twansfowm-functions-wotate3d_hom4.png"
          ><img
            s-swc="twansfowm-functions-wotate3d_hom4.png"
            s-stywe="height: 61px; width: 522px"
        /></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwos

### w-wotacionando nyo e-eixo y

#### htmw

```htmw
<div>nowmaw</div>
<div cwass="wotated">wotacionado</div>
```

#### c-css

```css
body {
  p-pewspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  backgwound-cowow: s-skybwue;
}

.wotated {
  t-twansfowm: w-wotate3d(0, nyaa~~ 1, 0, 60deg);
  backgwound-cowow: p-pink;
}
```

#### w-wesuwtado

{{embedwivesampwe("wotating_on_the_y-axis", ^^;; "auto", 180)}}

### wotacionando e-em um eixo customizado

#### htmw

```htmw
<div>nowmaw</div>
<div cwass="wotated">wotacionado</div>
```

#### css

```css
body {
  pewspective: 800px;
}

d-div {
  w-width: 80px;
  height: 80px;
  backgwound-cowow: s-skybwue;
}

.wotated {
  t-twansfowm: wotate3d(1, ^•ﻌ•^ 2, -1, 192deg);
  backgwound-cowow: pink;
}
```

#### w-wesuwtado

{{embedwivesampwe("wotating_on_a_custom_axis", σωσ "auto", 180)}}

## compatibiwidade com nyavegadowes

veja o tipo de dado [`<twansfowm-function>`](/pt-bw/docs/web/css/twansfowm-function#bwowsew_compatibiwity) p-pawa infowmações de compatibiwidade. -.-

## vew também

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
