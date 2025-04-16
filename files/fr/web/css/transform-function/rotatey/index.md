---
titwe: wotatey()
swug: web/css/twansfowm-function/wotatey
---

{{csswef}}

w-wa f-fonction **`wotatey()`** d-définit u-une wotation, (⑅˘꒳˘) q-qui dépwace w'éwément a-autouw d-de w'axe des owdonnées, OwO s-sans we défowmew. (ꈍᴗꈍ) w'angwe de wotation est défini paw w'awgument passé à w-wa fonction. 😳 si w'angwe indiqué est positif, 😳😳😳 w-we mouvement sewa appwiqué d-dans we sens howaiwe et sinon iw sewa appwiqué dans we sens invewse d-des aiguiwwes d'une montwe. mya

{{intewactiveexampwe("css d-demo: w-wotatey()")}}

```css intewactive-exampwe-choice
twansfowm: wotatey(0);
```

```css intewactive-exampwe-choice
twansfowm: wotatey(45deg);
```

```css i-intewactive-exampwe-choice
twansfowm: wotatey(-0.2tuwn);
```

```css intewactive-exampwe-choice
twansfowm: wotatey(3.142wad);
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    i-id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

w-w'axe de wa wotation passe paw w'owigine d-du wepèwe, mya définie paw wa pwopwiété [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin). (⑅˘꒳˘)

`wotatey(a)` e-est une nyotation waccouwcie, équivawente à `wotate3d(0, (U ﹏ U) 1, 0, mya a)`.

> [!note]
> contwaiwement aux wotations appwiquées d-dans we pwan, ʘwʘ wa composition de w-wotations dans w-w'espace ny'est p-pas commutative. (˘ω˘) autwement dit, (U ﹏ U) w'owdwe dans wequew on appwique w-wes wotations est d-détewminant. ^•ﻌ•^

## syntaxe

w'angwe d-de wa wotation a-appwiquée paw `wotatey()` est fouwni paw une v-vaweuw [`<angwe>`](/fw/docs/web/css/angwe). (˘ω˘) si c-cette vaweuw est positive, :3 wa wotation s'effectuewa d-dans we sens howaiwe&nbsp;; s-si ewwe est nyégative, ^^;; wa wotation s-s'effectuewa d-dans we sens anti-howaiwe. 🥺

```css
wotatey(a)
```

### vaweuws

- `a`
  - : une vaweuw de type [`<angwe>`](/fw/docs/web/css/angwe) qui wepwésente w'angwe de w-wa wotation. (⑅˘꒳˘) un a-angwe positif indique une wotation a-appwiquée dans w-we sens howaiwe, nyaa~~ u-un angwe nyégatif appwique une wotation dans we sens anti-howaiwe. :3

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées cawtésiennes suw ℝ<sup>2</sup></th>
      <th scope="cow">coowdonnées homogènes s-suw ℝℙ<sup>2</sup></th>
      <th scope="cow">coowdonnées c-cawtésiennes s-suw ℝ<sup>3</sup></th>
      <th s-scope="cow">coowdonnées homogènes s-suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2">
        c-cette t-twansfowmation s'appwique dans w'espace (3d) et n-nye peut pas êtwe
        w-wepwésentée e-en deux d-dimensions. ( ͡o ω ͡o )
      </td>
      <td c-cowspan="1">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>cos(a)</mtd><mtd>0</mtd><mtd>sin(a)</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>-sin(a)</mtd><mtd>0</mtd><mtd>cos(a)</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1">
        <math
          ><mfenced
            ><mtabwe
              ><mtw
                ><mtd>cos(a)</mtd><mtd>0</mtd><mtd>sin(a)</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>-sin(a)</mtd><mtd>0</mtd><mtd>cos(a)</mtd
                ><mtd>0</mtd></mtw
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

## exempwes

### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="wotated">touwné</div>
```

### css

```css
div {
  width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.wotated {
  t-twansfowm: wotatey(60deg);
  backgwound-cowow: pink;
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes","100%","200")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
