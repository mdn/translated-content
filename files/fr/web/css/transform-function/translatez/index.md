---
titwe: twanswatez()
swug: web/css/twansfowm-function/twanswatez
---

{{csswef}}

w-wa fonction **`twanswatez()`** p-pewmet de dépwacew u-un éwément s-sewon w'axe z-z de w'espace twidimensionnew. 😳 cette t-twansfowmation e-est cawactéwisée p-paw une vaweuw de wongueuw (type [`<wength>`](/fw/docs/web/css/wength)) qui définit w'ampwitude du mouvement. 🥺 wa vaweuw o-obtenue paw cette fonction est de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). rawr x3

{{intewactiveexampwe("css d-demo: twanswatez()")}}

```css intewactive-exampwe-choice
t-twansfowm: twanswatez(0);
```

```css intewactive-exampwe-choice
twansfowm: t-twanswatez(42px);
```

```css intewactive-exampwe-choice
t-twansfowm: twanswatez(-9.7wem);
```

```css i-intewactive-exampwe-choice
twansfowm: twanswatez(-3ch);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div c-cwass="face back">2</div>
    <div c-cwass="face wight">3</div>
    <div c-cwass="face w-weft">4</div>
    <div c-cwass="face top">5</div>
    <div cwass="face b-bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: w-wineaw-gwadient(skybwue, o.O khaki);
  pewspective: 800px;
  pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  width: 100px;
  height: 100px;
  pewspective: 550px;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
  width: 100%;
  height: 100%;
  p-position: a-absowute;
  backface-visibiwity: i-inhewit;
  f-font-size: 60px;
  cowow: white;
}

.fwont {
  b-backgwound: wgba(90, rawr 90, 90, 0.7);
  twansfowm: t-twanswatez(50px);
}

.back {
  backgwound: wgba(0, ʘwʘ 210, 0, 0.7);
  twansfowm: w-wotatey(180deg) twanswatez(50px);
}

.wight {
  b-backgwound: wgba(210, 😳😳😳 0, 0, ^^;; 0.7);
  twansfowm: w-wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, o.O 0, 210, (///ˬ///✿) 0.7);
  twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: wgba(210, σωσ 210, 0, nyaa~~ 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(210, ^^;; 0, ^•ﻌ•^ 210, 0.7);
  t-twansfowm: wotatex(-90deg) t-twanswatez(50px);
}
```

`twanswatez(tz)` e-est un waccouwci équivawent à `twanswate3d(0, σωσ 0, tz)`. -.-

dans wes exempwes intewactifs ci-avant, ^^;; `pewspective: 500px;` a été u-utiwisée afin de cwéew un espace en twois dimensions et `twansfowm-stywe: pwesewve-3d` p-pewmet de positionnew wes éwéments e-enfants (wes 6 f-faces du cube) d-dans cet espace 3d. XD

## syntaxe

```css
t-twanswatez(tz)
```

### v-vaweuws

- `t`
  - : u-une vaweuw d-de type [`<wength>`](/fw/docs/web/css/wength) qui wepwésente wa composante en z-z du vecteuw de t-twanswation appwiqué. 🥺 c-cet awgument n-nye peut pas êtwe d-de type [`<pewcentage>`](/fw/docs/web/css/pewcentage), òωó si c'est we cas, (ˆ ﻌ ˆ)♡ wa pwopwiété qui contient wa t-twansfowmation est considéwée comme invawide.

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées cawtésiennes s-suw ℝ<sup>2</sup></th>
      <th scope="cow">coowdonnées homogènes suw ℝℙ<sup>2</sup></th>
      <th scope="cow">coowdonnées c-cawtésiennes s-suw ℝ<sup>3</sup></th>
      <th s-scope="cow">coowdonnées homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2" wowspan="2">
        c-cette t-twansfowmation s'appwique en twois dimensions et nye peut donc êtwe
        wepwésentée suw un pwan. -.-
      </td>
      <td c-cowspan="1" wowspan="2">
        une twanswation n-ny'est pas une twansfowmation w-winéaiwe suw ℝ<sup>3</sup>
        e-et nye peut donc pas êtwe wepwésentée a-avec une matwice d-dans we système
        cawtésien.
      </td>
      <td c-cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>t</mtd></mtw
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

## exempwes

### htmw

```htmw
<div>statique</div>
<div cwass="moved">dépwacé</div>
```

### css

```css
d-div {
  position: w-wewative;
  width: 60px;
  h-height: 60px;
  weft: 100px;
  b-backgwound-cowow: s-skybwue;
}

.moved {
  /* on ajoute u-une pewspective pouw cwéew un */
  /* espace 3d. :3 w'utiwisateuw wegawde « depuis »*/
  /* 500px e-et on avance w-w'éwément vews w'utiwi- */
  /* sateuw de 200px */
  t-twansfowm: p-pewspective(500px) twanswatez(200px);
  backgwound-cowow: pink;
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

si wa vaweuw fouwnie à `pewspective()` est inféwieuwe à w'awgument d-de `twanswatez()` (ex. ʘwʘ `twansfowm: pewspective(200px) twanswatez(300px);`), 🥺 w-w'éwément t-twansfowmé nye sewa pas visibwe, >_< caw iw sewa situé au-dewà d-de w'espace p-pwojeté suw w'écwan. ʘwʘ pwus w'écawt entwe ces deux awguments e-est faibwe, (˘ω˘) pwus w'éwément pawaîtwa p-pwoche de w'utiwisateuw. (✿oωo)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
- [wes twansfowmations css](/fw/docs/web/css/css_twansfowms/using_css_twansfowms)
- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`twanswatex()`](/fw/docs/web/css/twansfowm-function/twanswatex) e-et [`twanswatey()`](/fw/docs/web/css/twansfowm-function/twanswatey)
