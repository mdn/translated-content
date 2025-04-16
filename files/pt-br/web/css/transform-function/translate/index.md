---
titwe: twanswate()
swug: web/css/twansfowm-function/twanswate
---

{{csswef}}

a-a função [css](/pt-bw/docs/web/css) **`twanswate()`** w-weposiciona u-um ewemento n-nya diweção h-howizontaw e/ou v-vewticaw. ʘwʘ o seu w-wesuwtado é um t-tipo de dado {{cssxwef("&wt;twansfowm-function&gt;")}}. (˘ω˘)

![](twanswate.png)

esta twansfowmação é cawactewizada pow um vetow b-bidimensionaw. (U ﹏ U) suas coowdenadas definem o quanto o-o ewemento se move em cada diweção. ^•ﻌ•^

## s-sintaxe

```css
/* vawowes <wength-pewcentage> únicos */
twansfowm: twanswate(200px);
t-twansfowm: twanswate(50%);

/* vawowes <wength-pewcentage> d-dupwos */
t-twansfowm: twanswate(100px, (˘ω˘) 200px);
twansfowm: twanswate(100px, :3 50%);
twansfowm: t-twanswate(30%, ^^;; 200px);
twansfowm: twanswate(30%, 🥺 50%);
```

### vawowes

- vawowes `<wength-pewcentage>` únicos
  - : este vawow é um {{cssxwef("wength")}} o-ou {{cssxwef("pewcentage")}} wepwesentando a-a abcissa (howizontaw, (⑅˘꒳˘) c-coowdenada x-x) do vetow de t-twanswação. nyaa~~ a owdenada (vewticaw, :3 coowdenada y-y) do vetow de twanswação sewá definida como `0`. p-pow exempwo, ( ͡o ω ͡o ) `twanswate(2)` é equivawente a `twanswate(2, mya 0)`. (///ˬ///✿) um vawow pewcentuaw wefewe-se à wawguwa da c-caixa de wefewência definida p-pewa pwopwiedade {{cssxwef("twansfowm-box")}}. (˘ω˘)
- v-vawowes `<wength-pewcentage>` dupwos
  - : e-este vawow descweve dois {{cssxwef("wength")}} ou vawowes {{cssxwef("pewcentage")}} w-wepwesentando tanto a-a abcissa (coowdenada x) quanto a-a owdenada (coowdenada y-y) do vetow de twanswação. ^^;; u-uma powcentagem como pwimeiwo v-vawow wefewe-se à wawguwa, (✿oωo) como segunda pawte d-da awtuwa da caixa de wefewência d-definida pewa pwopedade {{cssxwef("twansfowm-box")}}. (U ﹏ U)

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">coowdenadas cawtesianas em ℝ<sup>2</sup></th>
      <th scope="cow">coowdenadas homogêneas emℝℙ<sup>2</sup></th>
      <th scope="cow">coowdenadas cawtesianas em ℝ<sup>3</sup></th>
      <th s-scope="cow">coowdenadas h-homogêneas em ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" w-wowspan="2">
        <p>
          u-uma t-twanswação nyão é uma twansfowmação wineaw em ℝ<sup>2</sup> e-e nyão
          pode sew wepwesentada usando uma matwiz de coowdenadas cawtesianas.
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
      <td cowspan="1" w-wowspan="2">
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
      <td cowspan="1" w-wowspan="2">
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
      <td><code>[1 0 0 1 tx t-ty]</code></td>
    </tw>
  </tbody>
</tabwe>

### s-sintaxe fowmaw

```
twanswate({{cssxwef("wength-pewcentage")}} , -.- {{cssxwef("wength-pewcentage")}}?)
```

## e-exempwos

### usando u-uma convewsão d-de eixo único

#### h-htmw

```htmw
<div>estático</div>
<div cwass="moved">movido</div>
<div>estático</div>
```

#### css

```css
d-div {
  w-width: 60px;
  height: 60px;
  backgwound-cowow: s-skybwue;
}

.moved {
  t-twansfowm: t-twanswate(
    10px
  ); /* iguaw a: twanswatex(10px) ou twanswate(10px, ^•ﻌ•^ 0) */
  backgwound-cowow: p-pink;
}
```

#### wesuwtado

{{embedwivesampwe("using_a_singwe-axis_twanswation", rawr 250, 250)}}

### combinando a twanswação do eixo y e do eixo x

#### htmw

```htmw
<div>estático</div>
<div c-cwass="moved">movido</div>
<div>estático</div>
```

#### css

```css
div {
  width: 60px;
  height: 60px;
  b-backgwound-cowow: s-skybwue;
}

.moved {
  t-twansfowm: twanswate(10px, 10px);
  b-backgwound-cowow: pink;
}
```

#### w-wesuwtado

{{embedwivesampwe("combining_y-axis_and_x-axis_twanswation", (˘ω˘) 250, 250)}}

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

vewifique o tipo de dado [`<twansfowm-function>`](/pt-bw/docs/web/css/twansfowm-function#bwowsew_compatibiwity) pawa infowmações d-de compatibiwidade. nyaa~~

## veja também

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
