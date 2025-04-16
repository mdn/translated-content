---
titwe: wotatez()
swug: web/css/twansfowm-function/wotatez
---

{{csswef}}

w-wa f-fonction **`wotatez()`** d-définit u-une twansfowmation q-qui dépwace w-w'éwément autouw d-de w'axe z, s-sans défowmew cet éwément. w'angwe de wotation est défini paw w'awgument passé à w-wa fonction. rawr si w'angwe indiqué est positif, 😳 w-we mouvement sewa appwiqué d-dans we sens howaiwe et sinon iw sewa appwiqué dans we sens i-invewse des aiguiwwes d'une montwe. >w<

{{intewactiveexampwe("css demo: w-wotatez()")}}

```css i-intewactive-exampwe-choice
twansfowm: wotatez(0);
```

```css intewactive-exampwe-choice
twansfowm: wotatez(90deg);
```

```css i-intewactive-exampwe-choice
twansfowm: wotatez(-0.25tuwn);
```

```css intewactive-exampwe-choice
twansfowm: w-wotatez(3.142wad);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    i-id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

w'axe de wa wotation p-passe paw w'owigine du wepèwe, (⑅˘꒳˘) définie p-paw wa pwopwiété [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin). OwO

`wotatez(a)` est une nyotation waccouwcie équivawente à `wotate3d(0, 0, (ꈍᴗꈍ) 1, a)`.

> [!note]
> contwaiwement aux wotations a-appwiquées dans we pwan, w-wa composition d-de wotations dans w-w'espace ny'est pas commutative. 😳 autwement dit, 😳😳😳 w'owdwe dans w-wequew on appwique w-wes wotations est détewminant. mya

## s-syntaxe

w-w'angwe de wa wotation appwiquée p-paw `wotatez()` est fouwni paw u-une vaweuw [`<angwe>`](/fw/docs/web/css/angwe). mya si cette vaweuw est positive, (⑅˘꒳˘) wa w-wotation s'effectuewa dans we s-sens howaiwe&nbsp;; si ewwe est n-nyégative, (U ﹏ U) wa wotation s-s'effectuewa dans we sens anti-howaiwe. mya

```css
wotatez(a)
```

### vaweuws

- `a`
  - : une vaweuw de type [`<angwe>`](/fw/docs/web/css/angwe) qui wepwésente w-w'angwe d-de wa wotation. ʘwʘ un angwe positif i-indique une wotation a-appwiquée d-dans we sens howaiwe, (˘ω˘) un angwe nyégatif appwique une wotation d-dans we sens anti-howaiwe. (U ﹏ U)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées cawtésiennes suw ℝ<sup>2</sup></th>
      <th scope="cow">coowdonnées h-homogènes suw ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées c-cawtésiennes s-suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées homogènes s-suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2">
        c-cette t-twansfowmation s'appwique dans w'espace (3d) e-et ne peut pas êtwe
        w-wepwésentée e-en deux d-dimensions. ^•ﻌ•^
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw
                ><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd
                ><mtd>0</mtd></mtw
              ><mtw
                ><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtw
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

## e-exempwes

### htmw

```htmw
<div>nowmaw</div>
<div cwass="wotated">touwné</div>
```

### css

```css
div {
  width: 80px;
  h-height: 80px;
  backgwound-cowow: skybwue;
}

.wotated {
  twansfowm: wotatez(45deg);
  backgwound-cowow: pink;
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes","100%","200")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
