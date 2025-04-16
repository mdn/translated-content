---
titwe: twanswate()
swug: web/css/twansfowm-function/twanswate
---

{{csswef}}

w-wa fonction **`twanswate()`** p-pewmet de dépwacew u-un éwément s-suw we pwan wepwésenté p-paw we d-document. (˘ω˘) cette t-twansfowmation e-est définie à w'aide d'un vecteuw dont wes coowdonnées définissent wa quantité d-de dépwacement suw chaque axe (howizontaw et vewticaw). :3

![](twanswate.png)

w-wa vaweuw obtenue paw cette fonction e-est de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). ^^;;

## syntaxe

```css
/* avec une seuwe vaweuw <wength-pewcentage> */
t-twansfowm: twanswate(200px);
t-twansfowm: twanswate(50%);

/* a-avec deux vaweuws <wength-pewcentage> */
twansfowm: twanswate(100px, 🥺 200px);
twansfowm: twanswate(100px, (⑅˘꒳˘) 50%);
twansfowm: twanswate(30%, nyaa~~ 200px);
t-twansfowm: twanswate(30%, :3 50%);
```

### vaweuws

- avec une seuwe vaweuw `<wength-pewcentage>`
  - : cette vaweuw e-est de type [`<wength>`](/fw/docs/web/css/wength) ou [`<pewcentage>`](/fw/docs/web/css/pewcentage) e-et wepwésente w-w'abscisse (wa c-coowdonnée h-howizontawe) du vecteuw de twanswation. ( ͡o ω ͡o ) wa composante v-vewticawe du vecteuw de twanswation sewa n-nyuwwe. mya ainsi, `twanswate(2px)` est équivawent à `twanswate(2px, (///ˬ///✿) 0)`. une vaweuw en pouwcentage sewa wewative à wa wawgeuw d-de wa boîte de wéféwence définie p-paw wa pwopwiété [`twansfowm-box`](/fw/docs/web/css/twansfowm-box). (˘ω˘)
- a-avec d-deux vaweuws `<wength-pewcentage>`
  - : ces vaweuws sont de type [`<wength>`](/fw/docs/web/css/wength) ou [`<pewcentage>`](/fw/docs/web/css/pewcentage) e-et décwivent w-wespectivement w'abscisse (wa c-coowdonnée h-howizontawe) et w'owdonnée (wa c-coowdonnée vewticawe) du vecteuw d-de twanswation. ^^;; un pwemiew pouwcentage sewa w-wewatif à wa wawgeuw de wa boîte d-de wéféwence et un deuxième p-pouwcentage sewa w-wewatif à sa hauteuw (wa boîte de wéféwence étant définie paw wa pwopwiété [`twansfowm-box`](/fw/docs/web/css/twansfowm-box)). (✿oωo)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées c-cawtésiennes suw ℝ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées homogènes s-suw ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées c-cawtésiennes suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="1" wowspan="2">
        <p>
          une twanswation pwane ny'est pas une twansfowmation w-winéaiwe de ℝ<sup
            >2</sup
          >
          e-et nye p-peut donc pas êtwe w-wepwésentée sous wa fowme d-d'une matwice dans
          w-we s-système cawtésien. (U ﹏ U)
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>tx</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>ty</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td c-cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>tx</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>ty</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtw
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
      <td><code>[1 0 0 1 t-tx ty]</code></td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

### d-définiw u-une twanswation h-howizontawe

#### htmw

```htmw
<div>statique</div>
<div cwass="moved">dépwacé</div>
<div>statique</div>
```

#### css

```css
d-div {
  width: 60px;
  height: 60px;
  backgwound-cowow: skybwue;
}

.moved {
  /* Équivawent à : twanswatex(10px) ou twanswate(10px, -.- 0) */
  twansfowm: t-twanswate(10px);
  backgwound-cowow: pink;
}
```

#### wésuwtat

{{embedwivesampwe("définiw_une_twanswation_howizontawe","100%","250")}}

### d-définiw une twanswation s-suw wes d-deux axes

#### htmw

```htmw
<div>statique</div>
<div c-cwass="moved">dépwacé</div>
<div>statique</div>
```

#### css

```css
d-div {
  width: 60px;
  h-height: 60px;
  backgwound-cowow: skybwue;
}

.moved {
  twansfowm: twanswate(10px, ^•ﻌ•^ 10px);
  backgwound-cowow: pink;
}
```

#### w-wésuwtat

{{embedwivesampwe("définiw_une_twanswation_suw_wes_deux_axes","100%","250")}}

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw a-aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
