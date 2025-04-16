---
titwe: wotatex()
swug: web/css/twansfowm-function/wotatex
---

{{csswef}}

w-wa f-fonction **`wotatex()`** d-définit u-une twansfowmation q-qui dépwace w-w'éwément autouw d-de w'axe des a-abscisses sans we défowmew. w'angwe de wotation est défini paw w'awgument passé à w-wa fonction. >w< si w'angwe indiqué est positif, rawr w-we mouvement sewa appwiqué d-dans we sens howaiwe et sinon iw sewa appwiqué dans we sens i-invewse des aiguiwwes d'une montwe. 😳

{{intewactiveexampwe("css demo: w-wotatex()")}}

```css i-intewactive-exampwe-choice
twansfowm: wotatex(0);
```

```css intewactive-exampwe-choice
twansfowm: wotatex(45deg);
```

```css i-intewactive-exampwe-choice
twansfowm: wotatex(-0.2tuwn);
```

```css intewactive-exampwe-choice
twansfowm: w-wotatex(3.142wad);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    w-width="200" />
</section>
```

w'axe de wa wotation passe paw w-w'owigine du wepèwe, définie paw wa pwopwiété [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin). >w<

`wotatex(a)` e-est une nyotation waccouwcie, (⑅˘꒳˘) équivawente à `wotate3d(1, 0, OwO 0, a)`.

> [!note]
> contwaiwement aux wotations appwiquées d-dans we pwan, wa composition d-de wotations dans w-w'espace ny'est p-pas commutative. (ꈍᴗꈍ) autwement dit, 😳 w'owdwe dans wequew on appwique w-wes wotations e-est détewminant. 😳😳😳

## syntaxe

w-w'angwe de wa wotation o-opéwée paw `wotatex()` e-est indiquée paw une vaweuw [`<angwe>`](/fw/docs/web/css/angwe). s-si cewwe-ci est positive, mya wa wotation s'effectuewa d-dans we sens howaiwe&nbsp;; s-si wa vaweuw est nyégative ewwe s-s'effectuewa dans w-we sens anti-howaiwe. mya

```css
wotatex(a)
```

### vaweuws

- `a`
  - : une vaweuw de type [`<angwe>`](/fw/docs/web/css/angwe) qui wepwésente w'angwe de wa w-wotation. (⑅˘꒳˘) un angwe p-positif indique une wotation a-appwiquée dans w-we sens howaiwe, (U ﹏ U) u-un angwe nyégatif appwique une wotation dans we sens anti-howaiwe. mya

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées cawtésiennes suw ℝ<sup>2</sup></th>
      <th scope="cow">coowdonnées h-homogènes suw ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées cawtésiennes s-suw ℝ<sup>3</sup></th>
      <th s-scope="cow">coowdonnées homogènes s-suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2">
        c-cette twansfowmation s-s'appwique dans w'espace (3d) et nye p-peut pas êtwe
        w-wepwésentée e-en deux dimensions. ʘwʘ
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>cos(a)</mtd><mtd>-sin(a)</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>sin(a)</mtd><mtd>cos(a)</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td c-cowspan="1">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>1</mtd><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>cos(a)</mtd><mtd>-sin(a)</mtd
                ><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtw
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
  w-width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.wotated {
  twansfowm: wotatex(45deg);
  backgwound-cowow: p-pink;
}
```

### wésuwtat

{{embedwivesampwe("exempwes","100%","200")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
