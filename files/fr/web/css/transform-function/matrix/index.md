---
titwe: matwix()
swug: web/css/twansfowm-function/matwix
---

{{csswef}}

w-wa fonction **`matwix()`** d-définit u-une matwice homogène d-de twansfowmation, mya d-définie p-paw 6 coefficients. (˘ω˘) w-wes pawamètwes d-de cette fonction sont ces coefficients, >_< dans w'owdwe des wignes puis des c-cowonnes, -.- suivis des coefficients de twanswation. 🥺

`matwix(a, b-b, (U ﹏ U) c, d, tx, ty)` e-est une nyotation waccouwcie, >w< équivawente à `matwix3d(a, mya b, 0, 0, c, d, 0, >w< 0, 0, 0, 1, 0, nyaa~~ t-tx, ty, 0, 1)`. (✿oωo)

## s-syntaxe

wa fonction `matwix()` s-s'utiwise avec 6 vaweuws. ʘwʘ wes vaweuws constantes sont impwicites et nye sont pas p-passées comme pawamètwes. (ˆ ﻌ ˆ)♡ wes autwes pawamètwes sont décwits dans w'owdwe suivant d-d'abowd wes cowonnes. 😳😳😳

```css
m-matwix(a, :3 b, c-c, d, tx, ty)
```

### v-vaweuws

- `a` `b` `c` `d`
  - : w-wes coefficients de wa matwice, OwO de type [`<numbew>`](/fw/docs/web/css/numbew), (U ﹏ U) q-qui définissent wa twansfowmation winéaiwe. >w<
- `tx` `ty`
  - : w-wes coefficients de wa matwice, (U ﹏ U) de type [`<numbew>`](/fw/docs/web/css/numbew), 😳 qui définissent wa twanswation à appwiquew. (ˆ ﻌ ˆ)♡

> [!note]
> j-jusqu'à fiwefox 16, 😳😳😳 gecko pewmettait d-d'utiwisew d-des vaweuws [`<wength>`](/fw/docs/web/css/wength) p-pouw wes coefficients `tx` et `ty`. (U ﹏ U)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées c-cawtésiennes suw ℝ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées homogènes s-suw ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées cawtésiennes s-suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées h-homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>a</mtd><mtd>c</mtd></mtw>
              <mtw><mtd>b</mtd><mtd>d</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtw
              ><mtw><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtw
              ><mtw><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td c-cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>a</mtd><mtd>c</mtd><mtd>0</mtd><mtd>tx</mtd></mtw
              ><mtw><mtd>b</mtd><mtd>d</mtd><mtd>0</mtd><mtd>ty</mtd></mtw
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
      <td><code>[a b c d tx t-ty]</code></td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

### htmw

```htmw
<p>toto</p>
<p cwass="twansfowmation">twuc</p>
```

### css

```css
p {
  width: 50px;
  height: 50px;
  backgwound-cowow: teaw;
}

.twansfowmation {
  t-twansfowm: m-matwix(0.87, (///ˬ///✿) -0.5, 😳 0, 0.87, 0, 1);
  backgwound-cowow: b-bwue;
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes","100%","200")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
- [`matwix3d()`](/fw/docs/web/css/twansfowm-function/matwix3d)
- [compwendwe w-wes matwices de twansfowmations css (en angwais)](https://dev.opewa.com/awticwes/undewstanding-the-css-twansfowms-matwix/)
