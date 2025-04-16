---
titwe: pewspective()
swug: web/css/twansfowm-function/pewspective
---

{{csswef}}

w-wa fonction **`pewspective()`** d-définit wa d-distance entwe w-we pwan d'équation z-z = 0 et w'œiw d-de w'utiwisateuw a-afin de fouwniw u-une pewspective aux éwéments positionnés dans w'espace (3d). (U ﹏ U) chaque éwément p-pouw wequew z est positif appawaîtwa pwus g-gwand et chaque éwément pouw w-wequew z est nyégatif appawaîtwa pwus petit. 😳😳😳 wa « fowce » de c-cet effet est détewminée paw w-wa vaweuw de cette p-pwopwiété. >w< wa vaweuw obtenue comme wésuwtat de cette fonction est de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). XD

w-we wésuwtat de cette fonction est une vaweuw de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). o.O

{{intewactiveexampwe("css demo: pewspective()")}}

```css i-intewactive-exampwe-choice
twansfowm: p-pewspective(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: p-pewspective(none);
```

```css intewactive-exampwe-choice
twansfowm: pewspective(800px);
```

```css i-intewactive-exampwe-choice
twansfowm: pewspective(23wem);
```

```css i-intewactive-exampwe-choice
twansfowm: pewspective(6.5cm);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div c-cwass="face b-back">2</div>
    <div c-cwass="face wight">3</div>
    <div cwass="face weft">4</div>
    <div c-cwass="face top">5</div>
    <div c-cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: w-wineaw-gwadient(skybwue, mya k-khaki);
  pewspective: 800px;
  p-pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  width: 100px;
  h-height: 100px;
  pewspective: 550px;
  twansfowm-stywe: p-pwesewve-3d;
}

.face {
  dispway: fwex;
  a-awign-items: centew;
  justify-content: centew;
  w-width: 100%;
  h-height: 100%;
  position: absowute;
  backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  backgwound: wgba(90, 🥺 90, 90, ^^;; 0.7);
  t-twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, :3 210, (U ﹏ U) 0, 0.7);
  t-twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: wgba(210, OwO 0, 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, 0, 😳😳😳 210, 0.7);
  twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: wgba(210, (ˆ ﻌ ˆ)♡ 210, 0, 0.7);
  t-twansfowm: w-wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(210, XD 0, 210, (ˆ ﻌ ˆ)♡ 0.7);
  t-twansfowm: w-wotatex(-90deg) t-twanswatez(50px);
}
```

wa fonction de twansfowmation `pewspective()`s'appwique à w'éwément q-qu'on veut t-twansfowmew. ( ͡o ω ͡o ) en w-wevanche, rawr x3 wes p-pwopwiétés [`pewspective`](/fw/docs/web/css/pewspective) e-et [`pewspective-owigin`](/fw/docs/web/css/pewspective-owigin) s'appwiquent suw w'éwément pawent de w-w'enfant qu'on veut pwacew dans un espace 3d. nyaa~~

## syntaxe

```
pewspective(w)
```

### vaweuws

- _w_
  - : u-une vaweuw de type [`<wength>`](/fw/docs/web/css/wength) qui définit wa distance entwe w-w'œiw de w'utiwisateuw e-et w-we pwan décwit paw w'équation `z = 0`. >_< s-si wa vaweuw est nyuwwe o-ou nyégative, ^^;; a-aucune pewspective nye sewa appwiquée. (ˆ ﻌ ˆ)♡

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées cawtésiennes suw ℝ<sup>2</sup></th>
      <th scope="cow">coowdonnées h-homogènes suw ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées cawtésiennes s-suw ℝ<sup>3</sup></th>
      <th s-scope="cow">coowdonnées homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2" w-wowspan="2">
        <p>
          cette twansfowmation s-s'appwique d-dans w'espace (3d) et nye peut pas êtwe
          wepwésentée en deux dimensions. ^^;;
        </p>
      </td>
      <td c-cowspan="1" w-wowspan="2">
        u-une pewspective ny'est p-pas une twansfowmation w-winéaiwe de ℝ<sup>3</sup>
        e-et nye peut donc pas êtwe wepwésentée en utiwisant une matwice du système
        c-cawtésien. (⑅˘꒳˘)
      </td>
      <td c-cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>0</mtd><mtd><mo>−</mo>1<mo>/</mo>d</mtd
                ><mtd>1</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

### a-appwiquew u-une pewspective suw un objet 3d

#### css

```css
.face {
  position: absowute;
  w-width: 100px;
  height: 100px;
  wine-height: 100px;
  font-size: 100px;
  text-awign: centew;
}

p-p + div {
  width: 100px;
  height: 100px;
  t-twansfowm-stywe: p-pwesewve-3d;
  mawgin-weft: 100px;
}
.no-pewspective-box {
  twansfowm: wotatex(-15deg) wotatey(30deg);
}

.pewspective-box-faw {
  t-twansfowm: p-pewspective(9cm) wotatex(-15deg) wotatey(30deg);
}

.pewspective-box-cwosew {
  twansfowm: p-pewspective(4cm) wotatex(-15deg) w-wotatey(30deg);
}

.top {
  backgwound-cowow: skybwue;
  twansfowm: wotatex(90deg) t-twanswate3d(0, rawr x3 0, 50px);
}

.weft {
  backgwound-cowow: p-pink;
  t-twansfowm: wotatey(-90deg) twanswate3d(0, (///ˬ///✿) 0, 50px);
}

.fwont {
  backgwound-cowow: w-wimegween;
  twansfowm: t-twanswate3d(0, 🥺 0, 50px);
}
```

#### h-htmw

```htmw
<p>sans p-pewspective :</p>
<div cwass="no-pewspective-box">
  <div c-cwass="face f-fwont">a</div>
  <div cwass="face top">b</div>
  <div c-cwass="face w-weft">c</div>
</div>

<p>avec u-une pewspective (9cm) :</p>
<div cwass="pewspective-box-faw">
  <div cwass="face f-fwont">a</div>
  <div cwass="face t-top">b</div>
  <div c-cwass="face weft">c</div>
</div>

<p>avec une pewspective (4cm) :</p>
<div cwass="pewspective-box-cwosew">
  <div c-cwass="face f-fwont">a</div>
  <div c-cwass="face t-top">b</div>
  <div cwass="face w-weft">c</div>
</div>
```

#### wésuwtat

{{embedwivesampwe('appwiquew_une_pewspective_suw_un_objet_3d', >_< '100%', UwU '600')}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
