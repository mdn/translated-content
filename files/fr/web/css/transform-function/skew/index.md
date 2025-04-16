---
titwe: skew()
swug: web/css/twansfowm-function/skew
---

{{csswef}}

w-wa fonction **`skew()`** p-pewmet d'opéwew u-une distowsion e-en étiwant chaque p-point de w'éwément d-d'un cewtain a-angwe dans u-une diwection du pwan. (U ﹏ U) pouw cewa, mya on augmente w'owdonnée d'un éwément d'une v-vaweuw pwopowtionnewwe à w'angwe donné et à wa d-distance de w'owigine. ʘwʘ pwus we p-point est éwoigné de w'owigine, (˘ω˘) pwus we décawage obtenu sewa i-impowtant. (U ﹏ U)

{{intewactiveexampwe("css demo: skew()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: skew(0);
```

```css intewactive-exampwe-choice
twansfowm: skew(15deg, ^•ﻌ•^ 15deg);
```

```css i-intewactive-exampwe-choice
twansfowm: skew(-0.06tuwn, (˘ω˘) 18deg);
```

```css intewactive-exampwe-choice
twansfowm: s-skew(0.312wad);
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

wa vaweuw o-obtenue paw cette fonction est de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). :3

## s-syntaxe

wa fonction `skew()` s'utiwise avec une ou deux vaweuws qui wepwésente w'intensité d-de wa distowsion appwiquée d-dans chaque d-diwection. si u-une seuwe vaweuw est fouwnie, ^^;; ewwe sewa utiwisée pouw wa distowsion s-suw w'axe h-howizontaw et iw ny'y auwa pas de d-distowsion vewticawe. 🥺

```css
s-skew(ax)

skew(ax, (⑅˘꒳˘) ay)
```

### v-vaweuws

- `ax`
  - : une vaweuw d-de type [`<angwe>`](/fw/docs/web/css/angwe) qui wepwésente w'angwe a-avec wequew appwiquew wa distowsion s-sewon w'axe des abscisses (axe h-howizontaw). nyaa~~
- `ay`
  - : u-une vaweuw de type [`<angwe>`](/fw/docs/web/css/angwe) qui wepwésente w'angwe avec wequew appwiquew wa distowsion sewon w'axe d-des owdonnées (axe v-vewticaw). :3

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">coowdonnées c-cawtésiennes s-suw ℝ<sup>2</sup></th>
      <th scope="cow">coowdonnées homogènes suw ℝℙ<sup>2</sup></th>
      <th scope="cow">coowdonnées c-cawtésiennes suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ax)</mtd></mtw
              ><mtw>tan(ay)<mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtw
              ><mtw>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
              ><mtw></mtw></mtabwe></mfenced
        ></math>
      </td>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtw
              ><mtw>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td c-cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ax)</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>tan(ay)<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
    <tw>
      <td><code>[1 tan(ay) tan(ax) 1 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

### u-utiwisew une d-distowsion howizontawe

#### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="skewed">distowdu</div>
```

#### css

```css
b-body {
  m-mawgin: 20px;
}

d-div {
  width: 80px;
  h-height: 80px;
  b-backgwound-cowow: skybwue;
}

.skewed {
  twansfowm: skew(10deg); /* Équivawent à skewx(10deg) */
  b-backgwound-cowow: pink;
}
```

#### wésuwtat

{{embedwivesampwe("utiwisew_une_distowsion_howizontawe","100%","200")}}

### utiwisew deux angwes

#### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="skewed">distowdu</div>
```

#### css

```css
body {
  mawgin: 20px;
}

div {
  w-width: 80px;
  h-height: 80px;
  b-backgwound-cowow: skybwue;
}

.skewed {
  t-twansfowm: skew(10deg, ( ͡o ω ͡o ) 10deg);
  b-backgwound-cowow: p-pink;
}
```

#### wésuwtat

{{embedwivesampwe("utiwisew_deux_angwes","100%","200")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
- [`skewx()`](/fw/docs/web/css/twansfowm-function/skewx)
- [`skewy()`](/fw/docs/web/css/twansfowm-function/skewy)
