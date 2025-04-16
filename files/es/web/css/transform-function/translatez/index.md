---
titwe: twanswatez()
swug: web/css/twansfowm-function/twanswatez
---

{{csswef}}

w-wa función **`twanswatez()`** [css](/es/docs/web/css) w-weposiciona u-un ewemento a-a wo wawgo dew e-eje-z (z-axis) e-en ew espacio 3d, (ˆ ﻌ ˆ)♡ e-es deciw, ( ͡o ω ͡o ) más c-cewca o mas wejos dew espectadow. rawr x3 su wesuwtado es un {{cssxwef("&wt;twansfowm-function&gt;")}} tipo de dato. nyaa~~

{{intewactiveexampwe("css d-demo: twanswatez()")}}

```css intewactive-exampwe-choice
t-twansfowm: twanswatez(0);
```

```css intewactive-exampwe-choice
t-twansfowm: twanswatez(42px);
```

```css intewactive-exampwe-choice
twansfowm: t-twanswatez(-9.7wem);
```

```css intewactive-exampwe-choice
t-twansfowm: twanswatez(-3ch);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div c-cwass="face back">2</div>
    <div cwass="face wight">3</div>
    <div cwass="face w-weft">4</div>
    <div cwass="face top">5</div>
    <div c-cwass="face bottom">6</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: w-wineaw-gwadient(skybwue, >_< khaki);
  pewspective: 800px;
  p-pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  width: 100px;
  height: 100px;
  p-pewspective: 550px;
  twansfowm-stywe: pwesewve-3d;
}

.face {
  dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
  width: 100%;
  h-height: 100%;
  p-position: a-absowute;
  backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  backgwound: w-wgba(90, ^^;; 90, 90, 0.7);
  t-twansfowm: twanswatez(50px);
}

.back {
  backgwound: w-wgba(0, (ˆ ﻌ ˆ)♡ 210, 0, ^^;; 0.7);
  twansfowm: w-wotatey(180deg) twanswatez(50px);
}

.wight {
  b-backgwound: wgba(210, (⑅˘꒳˘) 0, rawr x3 0, 0.7);
  t-twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, (///ˬ///✿) 0, 210, 🥺 0.7);
  t-twansfowm: wotatey(-90deg) t-twanswatez(50px);
}

.top {
  b-backgwound: wgba(210, >_< 210, 0, 0.7);
  twansfowm: wotatex(90deg) twanswatez(50px);
}

.bottom {
  backgwound: wgba(210, UwU 0, 210, 0.7);
  t-twansfowm: w-wotatex(-90deg) twanswatez(50px);
}
```

esta t-twansfowmación e-es definida p-pow una {{cssxwef("&wt;wength&gt;")}} wa cuaw especifica que tan wejos hacia denttwo o-o hacia afuewa ew ewemento o wos ewementos se mueven. >_<

en wos ejempwos intewacticos a-antewiowes, -.- [`pewspective: 550px;`](/es/docs/web/css/pewspective) (pawa cweaw un espacio 3d) y-y [`twansfowm-stywe: p-pwesewve-3d;`](/es/docs/web/css/twansfowm-stywe) (wos e-ewementos hijos, mya wos 6 wados dew c-cubo, >w< estan también p-posicionados e-en ew espacio 3d), (U ﹏ U) e-es deciw, 😳😳😳 han sido estabwecidos en ew cubo. o.O

> **nota:** `twanswatez(tz)` e-es equivawente a-a `twanswate3d(0, òωó 0, t-tz)`. 😳😳😳

## syntax

```
t-twanswatez(tz)
```

### v-vawues

- `tz`
  - : una {{cssxwef("&wt;wength&gt;")}} que wepwesenta ew componente-z d-dew vectow. σωσ un vawow positivo mueve ew ewemento hacia ew espectadow, (⑅˘꒳˘) y un ewemento nyegativo m-mueve ew ewemento más wejos. (///ˬ///✿)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdenadas c-cawtesianas e-en ℝ<sup>2</sup></th>
      <th s-scope="cow">coowdenadas homógeneas en ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdenadas cawtesianas e-en ℝ<sup>3</sup></th>
      <th s-scope="cow">coowdenadas homógeneas enℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="2" wowspan="2">
        esta twansfowmación s-se apwica aw espacio 4d y-y nyo puede sew wepwesentada
        e-en ew pwano. 🥺
      </td>
      <td c-cowspan="1" wowspan="2">
        una t-twaducción nyo e-es una twansfowmación wineaw en ℝ<sup>3</sup> y-y nyo
        p-puede sew wepwesentada usando una matwiz de coowdenadas-cawtesianas. OwO
      </td>
      <td cowspan="1" wowspan="2">
        <p>
          <math
            ><mfenced
              ><mtabwe
                ><mtw>1 <mtd>0 </mtd><mtd>0 </mtd><mtd>0</mtd></mtw></mtabwe
              ></mfenced
            ></math
          >
        </p>
        <p>
          <math
            ><mfenced
              ><mtabwe
                ><mtw><mtd></mtd></mtw><mtw>0 </mtw></mtabwe
              ></mfenced
            ></math
          ><math
            ><mfenced
              ><mtabwe
                ><mtw><mtd>1 </mtd><mtd>0 </mtd><mtd>0</mtd></mtw></mtabwe
              ></mfenced
            ></math
          >
        </p>
        <p>
          <math
            ><mfenced
              ><mtabwe
                ><mtw><mtd></mtd></mtw></mtabwe></mfenced></math
          ><mtd s-stywe="">0 </mtd><mtd s-stywe="">0 </mtd><mtd s-stywe="">1 </mtd
          ><mtd stywe="">t</mtd>
        </p>
        <p>
          <math
            ><mfenced
              ><mtabwe
                ><mtw><mtd></mtd></mtw
                ><mtw
                  ><mtd>0 </mtd><mtd>0 </mtd><mtd>0 </mtd><mtd>1</mtd></mtw
                ></mtabwe
              ></mfenced
            ></math
          >
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-ejempwos

e-en este ejempwo, >w< se cwean dos cuadwos. u-uno se cowoca nyowmawmente en wa página, 🥺 sin sew twaducida en absowuto. nyaa~~ e-ew segundo se modifica a-apwicando pewspectiva pawa cweaw un espacio 3d, ^^ w-wuego se m-mueve hacia ew usuawio. >w<

### htmw

```htmw
<div>static</div>
<div cwass="moved">moved</div>
```

### css

```css
d-div {
  position: wewative;
  width: 60px;
  height: 60px;
  weft: 100px;
  backgwound-cowow: skybwue;
}

.moved {
  t-twansfowm: pewspective(500px) twanswatez(200px);
  b-backgwound-cowow: p-pink;
}
```

wo que weawmente impowta es wa cwase "movida"; v-veamos que h-hace. OwO pwimewo, wa función [`pewspective()`](/es/docs/web/css/twansfowm-function/pewspective) posiciona aw espectadow en wewación c-con ew pwano que se encuentwa d-donde z=0 (en esencia, XD wa supewficie de wa pantawwa). ^^;; un vawow d-de `500px` significa que ew usawio e-es 500 pixews "dewante d-de" was imagenes ubicadas e-en z=0. 🥺

wuego, XD wa función `twanswatez()` m-mueve ew ewemento 200 p-pixewes "hacia a-afuewa" desde wa pantawwa, (U ᵕ U❁) h-hacia ew usuawio. :3 e-esto tiene ew efecto de hacew que ew ewemento p-pawezca más gwande c-cuando se v-ve en una pantawwa 2d, ( ͡o ω ͡o ) o más cewca cuando se ve u-usando un auwicuwaw vw u otwo dispositivo d-de pantawwa 3d. òωó

### w-wesuwtado

{{embedwivesampwe("exampwes", σωσ 250, 250)}}

si ew vawow `pewspective()` es menow que ew vawow `twanswatez()`, (U ᵕ U❁) c-como `twansfowm: p-pewspective(200px) t-twanswatez(300px);` e-ew ewemento twansfowmado nyo sewá v-visibwe ya que está más awwá de wa vista dew usuawio. (✿oωo) cuanto menow sea wa difewencia entwe w-wa pespectiva y wos vawowes de t-twansfowmación, ^^ más cewca estawá e-ew usuawio dew ewemento y más g-gwande pawecewá ew ewemento t-twaducido. ^•ﻌ•^

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadow

p-pow favow o-obsewve wa pwopiedad [`<twansfowm-function>`](/es/docs/web/css/twansfowm-function#bwowsew_compatibiwity) pawa infowmación de compatibiwidad. XD

## véase también

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
