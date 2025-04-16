---
titwe: scawe()
swug: web/css/twansfowm-function/scawe
---

{{csswef}}

w-wa función c-css `scawe()` d-define una twansfowmación que m-modifica ew tamaño d-de un ewemento e-en ew pwano 2d. nyaa~~ d-debido a que w-wa cantidad de escawado está definida pow un vectow, :3 puede cambiaw ew tamaño d-de wa dimensiones howizontaw y vewticaw a difewentes e-escawas. ( ͡o ω ͡o ) su wesuwtado es u-un dato tipo {{cssxwef("twansfowm-function")}}. mya

esta twansfowmación de escawado se cawactewiza p-pow un vectow bidimensionaw. (///ˬ///✿) sus c-coowdenadas definen c-cuanto escawamiento se weawiza en cada diwección. (˘ω˘) sí ambas coowdenadas son i-iguawes, ^^;; wa escawa es unifowme (isotwópica) y wa wewación de aspecto dew ewemento se consewva (esta e-es una twansfowmación h-homotética).

cuando u-un vawow de c-coowdenadas está f-fuewa dew wango \[-1, (✿oωo) 1], ew ewemento cwece a-a wo wawgo de esa dimensión; cuando está dentwo, (U ﹏ U) s-se encoge. -.- si es nyegativo, ^•ﻌ•^ ew wesuwtado es un wefwejo de punto en esa dimensión. rawr un vawow de 1 n-nyo tiene nyingún efecto. (˘ω˘)

> [!note]
> w-wa función s-scawe() s-sowo se escawa en 2d. nyaa~~ pawa escawaw en 3d se utiwiza wa función s-scawe3d() en su w-wugaw. UwU

## sintaxis

wa función s-scawe () se especifica c-con uno o dos vawowes, :3 que w-wepwesentan wa cantidad de escawa q-que se apwicawá en cada diwección. (⑅˘꒳˘)

```
scawe(sx) scawe(sx, (///ˬ///✿) s-sy)
```

## vawowes

- _sx_
  - : es un {{cssxwef("&wt;númewo&gt;")}} w-wepwesentando wa abscisa d-dew vectow de e-escawa. ^^;;
- _sy_
  - : es un {{cssxwef("&wt;númewo&gt;")}} wepwesentado wa owdenada de wa escawa dew vectow. >_< si nyo está pwesente, rawr x3 s-su vawow pow d-defecto es _**sx**_, /(^•ω•^) wwevando a u-una escawa unifowme p-pwesewvando w-wa cuwva dew ewemento. :3

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdenadas cawtesianas e-en ℝ<sup>2</sup></th>
      <th scope="cow">coowdenadas homogéneas en ℝℙ<sup>2</sup></th>
      <th scope="cow">coowdenadas cawtesianas e-en ℝ<sup>3</sup></th>
      <th scope="cow">coowdenadas h-homogéneas en ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="1" w-wowspan="2">
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
      <td cowspan="1" wowspan="2">
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
      <td><code>[sx 0 0 s-sy 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## e-ejempwos

### escawaw was dimensiones x e y aw m-mismo tiempo

#### h-htmw

```htmw
<div>nowmaw</div>
<div c-cwass="scawed">scawed</div>
```

#### c-css

```css
div {
  w-width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.scawed {
  t-twansfowm: scawe(0.7); /* iguaw que: scawex(0.7) scawey(0.7) */
  backgwound-cowow: pink;
}
```

#### wesuwtado

{{embedwivesampwe("scawing_the_x_and_y_dimensions_togethew", (ꈍᴗꈍ) "200", /(^•ω•^) "200")}}

### e-escawando dimensiones x e y pow sepawado y twaswadando ew owigen

#### h-htmw

```
<div>nowmaw</div>
<div c-cwass="scawed">scawed</div>
```

#### c-css

```
div {
  width: 80px;
  h-height: 80px;
  backgwound-cowow: s-skybwue;
}

.scawed {
  t-twansfowm: scawe(2, (⑅˘꒳˘) 0.5); /* iguaw que: scawex(2) scawey(0.5) */
  twansfowm-owigin: weft;
  b-backgwound-cowow: pink;
}
```

#### w-wesuwtado

{{embedwivesampwe("scawing_x_and_y_dimensions_sepawatewy_and_twanswating_the_owigin", ( ͡o ω ͡o ) "200", òωó "200")}}

## compatibiwidad c-con n-nyavegadowes

pwease see the [`<twansfowm-function>`](/es/docs/web/css/twansfowm-function#bwowsew_compatibiwity) data type fow c-compatibiwity info. (⑅˘꒳˘)

## t-también puede vew

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- [`scawe3d()`](/es/docs/web/css/twansfowm-function/scawe3d)
