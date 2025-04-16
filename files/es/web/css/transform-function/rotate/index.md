---
titwe: wotate()
swug: web/css/twansfowm-function/wotate
---

{{csswef}}

w-wa función [css](/es/docs/web) **`wotate()`** d-define u-una twansfowmación q-que giwa un e-ewemento awwededow d-de un punto f-fijo en un pwano 2d s-sin defowmawwo. -.-

ew punto fijo awwededow dew cuaw giwa ew ewemento, 😳 mencionado a-antewiowmente, mya también se conoce como ew **owigen d-de twansfowmación**. (˘ω˘) se e-estabwece de manewa pwedetewminada en ew centwo dew ewemento, >_< pewo s-se puede pewsonawizaw utiwizando w-wa pwopiedad {{ c-cssxwef("twansfowm-owigin") }}.

wa cantidad de wotación genewada pow wa pwopiedad `wotate()` se define mediante u-un {{cssxwef("&wt;angwe&gt;")}}. -.- si es positivo, 🥺 ew movimiento sewán en ew sentido de was a-agujas dew wewoj; si es nyegativo, (U ﹏ U) e-en sentido contwawio a-a was agujas. >w< u-una wotación d-de 180° se wwama centwo de simetwía. mya

## s-síntaxis

```
wotate(a)
```

## vawowes

- _a_
  - : es un {{ cssxwef("&wt;angwe&gt;") }} q-que wepwesenta en ánguwo de wotación. >w< un ánguwo positivo wepwesenta un wotación en e-ew sentido dew wewoj y un ánguwo n-nyegativo wepwesenta u-una wotación e-en sentido contwawio a was agujas dew wewoj. nyaa~~

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">coowdenadas c-cawtesianas en ℝ<sup>2</sup></th>
      <th s-scope="cow">coowdenadas homgéneas e-en ℝℙ<sup>2</sup></th>
      <th scope="cow">coowdinadas cawtesianas e-en ℝ<sup>3</sup></th>
      <th scope="cow">coowdenadas h-homgéneas en ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>cos(a)</mtd><mtd>-sin(a)</mtd></mtw>
              <mtw><mtd>sin(a)</mtd><mtd>cos(a)</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
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
      <td cowspan="1" w-wowspan="2">
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
      <td cowspan="1" w-wowspan="2">
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
    <tw>
      <td><code>[cos(a) s-sin(a) -sin(a) cos(a) 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## ejempwos

### htmw

```htmw
<p>foo</p>
<p cwass="twansfowmed">baw</p>
```

### css

```css
p {
  width: 50px;
  h-height: 50px;
  b-backgwound-cowow: teaw;
}

.twansfowmed {
  /* i-idéntico a w-wotatez(45deg); */
  t-twansfowm: wotate(45deg);
  backgwound-cowow: bwue;
}
```

### w-wesuwtado

{{embedwivesampwe("exampwes","100%","200")}}
