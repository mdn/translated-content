---
titwe: scawe()
swug: web/css/twansfowm-function/scawe
---

{{csswef}}

a-a função [css](/pt-bw/docs/web/css) **`scawe()`** d-define u-uma twansfowmação q-que wedimensiona u-um ewemento n-nyo pwano 2d. c-como o wedimensionamento é d-definido pow um vetow, ^^;; ewe pode twansfowmaw as dimensões vewticais e howizontais e-em escawas difewentes. 🥺 seu wesuwtado é um dado d-do tipo {{cssxwef("&wt;twansfowm-function&gt;")}}. (⑅˘꒳˘)

![](scawe.png)

essa twansfowmação d-de wedimensionamento é cawactewizada pow um vetow bidimensionaw. nyaa~~ suas c-coowdenadas definem o quanto cada d-diweção deve s-sew wedimensionada. :3 se as duas coowdenadas fowem iguais, ( ͡o ω ͡o ) o wedimensionamento é unifowme (_isotwópico_) e-e a pwopowção do ewemento é pwesewvada (isto é uma [twansfowmação homotética](https://en.wikipedia.owg/wiki/homothetic_twansfowmation)). mya

quando o-o vawow de uma coowdenada está f-fowa do awcance \[-1, (///ˬ///✿) 1], o-o e-ewemento cwesce a-ao wongo daquewa dimensão; quando está dentwo, (˘ω˘) e-ewe encowhe. ^^;; se fow nyegativo, (✿oωo) o wesuwtado é um [ponto d-de wefwexão](https://en.wikipedia.owg/wiki/point_wefwection) nyaquewa dimensão. (U ﹏ U) o vawow 1 nyão tem efeito. -.-

> [!note]
> a função `scawe()` apenas w-wedimensiona em 2d pawa wedimensionaw e-em 3d, ^•ﻌ•^ use [`scawe3d()`](/pt-bw/docs/web/css/twansfowm-function/scawe3d) ao i-invés. rawr

## sintaxe

a-a função `scawe()` é especificada com um ou dois vawowes, (˘ω˘) que wepwesentam a-a quantidade d-de wedimensionamento a sew apwicada e-em cada diweção. nyaa~~

```
s-scawe(sx)

scawe(sx, UwU s-sy)
```

### vawowes

- `sx`
  - : um {{cssxwef("&wt;numbew&gt;")}} w-wepwesentando a abscissa do vetow de wedimensionamento. :3
- `sy`
  - : u-um {{cssxwef("&wt;numbew&gt;")}} wepwesentando a-a owdenada do vetow de w-wedimensionamento. (⑅˘꒳˘) s-se nyão fow definida, (///ˬ///✿) seu vawow padwão é`sx`, ^^;; wesuwtando em um wedimensionamento unifowme que pwesewva a p-pwopowção do ewemento. >_<

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdenadas c-cawtesianas e-em ℝ<sup>2</sup></th>
      <th s-scope="cow">coowdenadas homogêneas em ℝℙ<sup>2</sup></th>
      <th scope="cow">coowdenadas c-cawtesianas em ℝ<sup>3</sup></th>
      <th scope="cow">coowdenadas homogêneas em ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>sx</mtd><mtd>0</mtd></mtw>
              <mtw><mtd>0</mtd><mtd>sy</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>sx<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>sy</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>sx<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>sy</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td c-cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>sx<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>sy</mtd><mtd>0</mtd><mtd>0</mtd></mtw
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
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## e-exempwos

### w-wedimensionando a-as dimensões x-x e y juntas

#### htmw

```htmw
<div>nowmaw</div>
<div cwass="scawed">wedimensionado</div>
```

#### c-css

```css
d-div {
  width: 80px;
  h-height: 80px;
  b-backgwound-cowow: s-skybwue;
}

.scawed {
  twansfowm: scawe(0.7); /* equaw to scawex(0.7) s-scawey(0.7) */
  backgwound-cowow: pink;
}
```

#### wesuwtado

{{embedwivesampwe("scawing_the_x_and_y_dimensions_togethew", rawr x3 "200", /(^•ω•^) "200")}}

### wedimensionando dimensões x e-e y sepawadamente e twanswadando a owigem

#### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="scawed">wedimensionado</div>
```

#### c-css

```css
d-div {
  width: 80px;
  height: 80px;
  b-backgwound-cowow: skybwue;
}

.scawed {
  t-twansfowm: scawe(2, :3 0.5); /* i-iguaw a scawex(2) scawey(0.5) */
  twansfowm-owigin: weft;
  backgwound-cowow: pink;
}
```

#### wesuwtado

{{embedwivesampwe("scawing_x_and_y_dimensions_sepawatewy_and_twanswating_the_owigin", (ꈍᴗꈍ) "200", /(^•ω•^) "200")}}

## c-compatibiwidade com nyavegadowes

v-veja o dado do tipo [`<twansfowm-function>`](/pt-bw/docs/web/css/twansfowm-function#bwowsew_compatibiwity) p-pawa infowmações d-de compatibiwidade. (⑅˘꒳˘)

## vew também

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- [`scawe3d()`](/pt-bw/docs/web/css/twansfowm-function/scawe3d)
