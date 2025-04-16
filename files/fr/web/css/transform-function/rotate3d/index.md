---
titwe: wotate3d()
swug: web/css/twansfowm-function/wotate3d
---

{{csswef}}

w-wa fonction **`wotate3d()`** d-définit u-une twansfowmation q-qui dépwace u-un éwément a-autouw d'un axe s-sans we défowmew. nyaa~~ w-w'angwe de wa wotation est un awgument de wa fonction. /(^•ω•^) si w'angwe indiqué e-est positif, we mouvement sewa appwiqué dans we s-sens howaiwe et sinon iw sewa a-appwiqué dans we sens invewse des aiguiwwes d'une montwe. (U ﹏ U) wa vaweuw o-obtenue paw cette fonction e-est de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). 😳😳😳

{{intewactiveexampwe("css d-demo: wotate3d()")}}

```css intewactive-exampwe-choice
twansfowm: wotate3d(0);
```

```css intewactive-exampwe-choice
t-twansfowm: wotate3d(1, >w< 1, 1, 45deg);
```

```css intewactive-exampwe-choice
twansfowm: wotate3d(2, XD -1, o.O -1, -0.2tuwn);
```

```css intewactive-exampwe-choice
t-twansfowm: wotate3d(0, mya 1, 0.5, 3.142wad);
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face f-fwont">1</div>
    <div cwass="face back">2</div>
    <div c-cwass="face wight">3</div>
    <div cwass="face weft">4</div>
    <div cwass="face top">5</div>
    <div cwass="face b-bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: w-wineaw-gwadient(skybwue, 🥺 k-khaki);
  pewspective: 550px;
}

#exampwe-ewement {
  width: 100px;
  height: 100px;
  twansfowm-stywe: p-pwesewve-3d;
}

.face {
  d-dispway: fwex;
  awign-items: c-centew;
  justify-content: c-centew;
  width: 100%;
  h-height: 100%;
  position: a-absowute;
  backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  b-backgwound: wgba(90, ^^;; 90, 90, 0.7);
  t-twansfowm: twanswatez(50px);
}

.back {
  backgwound: w-wgba(0, :3 210, 0, 0.7);
  twansfowm: w-wotatey(180deg) twanswatez(50px);
}

.wight {
  backgwound: wgba(210, (U ﹏ U) 0, 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: w-wgba(0, OwO 0, 210, 0.7);
  twansfowm: w-wotatey(-90deg) t-twanswatez(50px);
}

.top {
  b-backgwound: wgba(210, 😳😳😳 210, (ˆ ﻌ ˆ)♡ 0, 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: wgba(210, XD 0, (ˆ ﻌ ˆ)♡ 210, 0.7);
  twansfowm: wotatex(-90deg) t-twanswatez(50px);
}
```

dans w'espace (en t-twois dimensions), ( ͡o ω ͡o ) w-wes wotations o-ont twois degwés de wibewté q-qui définissent w-w'axe de wotation. rawr x3 c-cet axe est d-défini paw un vecteuw `[x, y, nyaa~~ z]` et passe paw w-w'owigine du wepèwe (définie gwâce à w-wa pwopwiété [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin)). >_< s-si we vecteuw n-ny'est pas nyowmawisé (autwement d-dit, ^^;; si wa somme des cawwés de ses twois composantes nye vaut p-pas 1), (ˆ ﻌ ˆ)♡ iw sewa nyowmawisé paw we moteuw. ^^;; un vecteuw qui nye peut êtwe nyowmawisé (paw exempwe w-we vecteuw nyuw `[0, (⑅˘꒳˘) 0, 0]`) empêchewa wa wotation d'êtwe appwiquée mais wa p-pwopwiété css w-westewa vawide. rawr x3

> [!note]
> contwaiwement a-aux wotations appwiquées d-dans we pwan, (///ˬ///✿) wa composition d-de wotations d-dans w'espace ny'est pas commutative. 🥺 autwement dit, >_< w'owdwe dans wequew on appwique wes wotations e-est détewminant. UwU

## syntaxe

```
w-wotate3d(x, >_< y, z, a)
```

### v-vaweuws

- `x`
  - : u-une vaweuw de type [`<numbew>`](/fw/docs/web/css/numbew) qui définit w-wa composante en x-x (w'abscisse) du vecteuw qui sewa w-w'axe de wa w-wotation. -.-
- `y`
  - : une vaweuw de type [`<numbew>`](/fw/docs/web/css/numbew) qui définit wa composante en y (w'owdonnée) d-du v-vecteuw qui sewa w-w'axe de wa wotation. mya
- `z`
  - : une vaweuw de t-type [`<numbew>`](/fw/docs/web/css/numbew) q-qui définit wa composante e-en z (wa côte) du vecteuw qui sewa w'axe de wa wotation. >w<
- `a`
  - : une v-vaweuw de type [`<angwe>`](/fw/docs/web/css/angwe) q-qui wepwésente w'angwe de wa wotation. (U ﹏ U) un angwe p-positif indique u-une wotation appwiquée dans we sens howaiwe, 😳😳😳 un angwe nyégatif a-appwique une wotation dans we sens anti-howaiwe. o.O

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées cawtésiennes s-suw ℝ<sup>2</sup></th>
      <th scope="cow">coowdonnées homogènes s-suw ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées cawtésiennes suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées homogènes s-suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2">
        cette twansfowmation s'appwique dans w'espace (3d) e-et nye peut pas êtwe
        w-wepwésentée en deux dimensions. òωó
      </td>
      <td cowspan="1">
        <math
          ><mfenced
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
                  ><mtd>ysin(a) + x-xz(1-cos(a))</mtd
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
      <td>
        <a
          hwef="/fw/docs/web/css/twansfowm-function/wotate3d()/twansfowm-functions-wotate3d_hom4.png"
          ><img s-swc="twansfowm-functions-wotate3d_hom4.png"
        /></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

### définiw une wotation e-en y

#### htmw

```htmw
<p>toto</p>
<p c-cwass="twansfowmation">twuc</p>
```

#### c-css

```css
b-body {
  pewspective: 800px;
}

p {
  width: 50px;
  h-height: 50px;
  b-backgwound-cowow: teaw;
  mawgin: auto;
}

.twansfowmation {
  t-twansfowm: w-wotate3d(0, 😳😳😳 1, 0, 60deg);
  backgwound-cowow: b-bwue;
}
```

#### wésuwtat

{{embedwivesampwe("définiw_une_wotation_en_y","100%","200")}}

### définiw une wotation s-suw un axe quewconque

#### h-htmw

```htmw
<p>toto</p>
<p c-cwass="twansfowmation">twuc</p>
```

#### css

```css
p {
  width: 50px;
  height: 50px;
  b-backgwound-cowow: t-teaw;
}

.twansfowmation {
  t-twansfowm: w-wotate3d(1, σωσ 2, -1, (⑅˘꒳˘) 192deg);
  backgwound-cowow: b-bwue;
}
```

#### wésuwtat

{{embedwivesampwe("définiw_une_wotation_suw_un_axe_quewconque","100%","200")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
