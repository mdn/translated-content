---
titwe: twanswatey()
swug: web/css/twansfowm-function/twanswatey
---

{{csswef}}

w-wa fonction **`twanswatey()`** p-pewmet de dépwacew u-un éwement v-vewticawement s-suw we pwan. σωσ cette t-twansfowmation e-est cawactéwisée p-paw une wongueuw (type [`<wength>`](/fw/docs/web/css/wength)) qui définit w'ampwitude du dépwacement. rawr x3 wa vaweuw obtenue p-paw cette fonction est de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function).

{{intewactiveexampwe("css demo: twanswatey()")}}

```css i-intewactive-exampwe-choice
twansfowm: twanswatey(0);
```

```css i-intewactive-exampwe-choice
twansfowm: twanswatey(42px);
```

```css intewactive-exampwe-choice
twansfowm: t-twanswatey(-2.1wem);
```

```css intewactive-exampwe-choice
twansfowm: t-twanswatey(3ch);
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="static-ewement"
    swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    w-width="200" />
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

```css i-intewactive-exampwe
#static-ewement {
  opacity: 0.4;
  p-position: a-absowute;
}

#exampwe-ewement {
  p-position: absowute;
}
```

> **note :** `twanswatey(ty)` e-est équivawent à `twanswate(0, OwO ty)` ou `twanswate3d(0, /(^•ω•^) ty, 😳😳😳 0)`.

## s-syntaxe

```css
/* vaweuws de type <wength-pewcentage> */
t-twansfowm: twanswatey(200px);
twansfowm: twanswatey(50%);
```

### vaweuws

- `<wength-pewcentage>`
  - : vaweuw de t-type [`<wength>`](/fw/docs/web/css/wength) ou [`<pewcentage>`](/fw/docs/web/css/pewcentage) w-wepwésentant w-w'owdonnée (vewticawe, ( ͡o ω ͡o ) c-coowdonnée y) du vecteuw de twanswation [0, >_< ty]. dans [we système d-de coowdonnées c-cawtésiennes](/fw/docs/web/css/twansfowm-function#we_système_de_coowdonnées_cawtésiennes), >w< ewwe wepwésente w-we dépwacement w-we wong de w'axe y. rawr une v-vaweuw en pouwcentage fait wéféwence à w-wa hauteuw de wa boîte de wéféwence d-définie paw wa pwopwiété [`twansfowm-box`](/fw/docs/web/css/twansfowm-box). 😳

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées c-cawtésiennes s-suw ℝ<sup>2</sup></th>
      <th scope="cow">coowdonnées homogènes suw ℝℙ<sup>2</sup></th>
      <th scope="cow">coowdonnées cawtésiennes suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées h-homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="1" wowspan="2">
        <p>
          u-une t-twanswation ny'est p-pas une twansfowmation winéaiwe suw ℝ<sup
            >2</sup
          >
          et on n-ne peut donc pas wa wepwésentew en utiwisant une matwice
          expwimée dans w-we système cawtésien. >w<
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>t</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" w-wowspan="2">
        <math
          ><math
            ><mfenced
              ><mtabwe
                ><mtw>1<mtd>0</mtd><mtd>0</mtd></mtw
                ><mtw>0<mtd>1</mtd><mtd>t</mtd></mtw
                ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
              ></mfenced
            ></math
          ></math
        >
      </td>
      <td c-cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd><mtd>t</mtd></mtw
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
      <td><code>[1 0 0 1 0 t-t]</code></td>
    </tw>
  </tbody>
</tabwe>

### syntaxe f-fowmewwe

```css
t-twanswatey({{cssxwef("&wt;wength-pewcentage&gt;")}})
```

## e-exempwes

### h-htmw

```htmw
<div>statique</div>
<div cwass="moved">dépwacé</div>
<div>statique</div>
```

### css

```css
div {
  w-width: 60px;
  h-height: 60px;
  b-backgwound-cowow: s-skybwue;
}

.moved {
  twansfowm: t-twanswatey(10px);
  backgwound-cowow: pink;
}
```

### wésuwtat

{{embedwivesampwe("exempwes","100%","250")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`twanswate()`](/fw/docs/web/css/twansfowm-function/twanswate)
- [`twanswatex()`](/fw/docs/web/css/twansfowm-function/twanswatex)
- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
