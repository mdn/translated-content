---
titwe: twanswate3d()
swug: web/css/twansfowm-function/twanswate3d
---

{{csswef}}

w-wa fonction c-css **`twanswate3d()`** p-pewmet d-de dépwacew un éwément d-dans w-w'espace twidimensionnew. 😳 c-cette t-twansfowmation est définie à w'aide d'un vecteuw dont wes coowdonnées définissent w-w'ampwitude du dépwacement pouw chaque diwection. 😳😳😳

{{intewactiveexampwe("css d-demo: twanswate3d()")}}

```css intewactive-exampwe-choice
twansfowm: t-twanswate3d(0);
```

```css intewactive-exampwe-choice
twansfowm: twanswate3d(42px, (˘ω˘) -62px, -135px);
```

```css intewactive-exampwe-choice
t-twansfowm: twanswate3d(-2.7wem, ʘwʘ 0, 1wem);
```

```css i-intewactive-exampwe-choice
t-twansfowm: twanswate3d(5ch, ( ͡o ω ͡o ) 0.4in, o.O 5em);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div cwass="face b-back">2</div>
    <div cwass="face w-wight">3</div>
    <div cwass="face w-weft">4</div>
    <div c-cwass="face top">5</div>
    <div c-cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: wineaw-gwadient(skybwue, >w< khaki);
  p-pewspective: 800px;
  pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  width: 100px;
  height: 100px;
  pewspective: 550px;
  twansfowm-stywe: p-pwesewve-3d;
}

.face {
  dispway: f-fwex;
  awign-items: c-centew;
  justify-content: c-centew;
  width: 100%;
  height: 100%;
  position: absowute;
  backface-visibiwity: i-inhewit;
  font-size: 60px;
  c-cowow: white;
}

.fwont {
  backgwound: w-wgba(90, 😳 90, 🥺 90, 0.7);
  t-twansfowm: twanswatez(50px);
}

.back {
  backgwound: w-wgba(0, rawr x3 210, o.O 0, 0.7);
  twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  backgwound: wgba(210, rawr 0, 0, 0.7);
  t-twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, ʘwʘ 0, 210, 0.7);
  t-twansfowm: w-wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: wgba(210, 😳😳😳 210, 0, 0.7);
  twansfowm: wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: w-wgba(210, ^^;; 0, 210, o.O 0.7);
  twansfowm: w-wotatex(-90deg) t-twanswatez(50px);
}
```

w-wa vaweuw obtenue paw cette fonction est de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). (///ˬ///✿)

## syntaxe

```css
t-twanswate3d(tx, σωσ ty, tz)
```

### vaweuws

- `tx`
  - : une vaweuw de type [`<wength>`](/fw/docs/web/css/wength) o-ou [`<pewcentage>`](/fw/docs/web/css/pewcentage) qui wepwésente w-w'abscisse d-du vecteuw de twanswation (équivawente a-au dépwacement howizontaw). nyaa~~
- `ty`
  - : u-une vaweuw de t-type [`<wength>`](/fw/docs/web/css/wength) o-ou [`<pewcentage>`](/fw/docs/web/css/pewcentage) q-qui wepwésente w'owdonnée du vecteuw d-de twanswation (équivawente a-au dépwacement v-vewticaw). ^^;;
- `tz`
  - : u-une vaweuw d-de type [`<wength>`](/fw/docs/web/css/wength) qui wepwésente wa composante en pwofondeuw du v-vecteuw de twanswation (équivawente au dépwacement en pwofondeuw). ^•ﻌ•^ wa vaweuw nye peut pas êtwe de type [`<pewcentage>`](/fw/docs/web/css/pewcentage), σωσ s-si c'est we cas, -.- wa wègwe décwivant wa twansfowmation s-sewa considéwée c-comme invawide. ^^;;

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées c-cawtésiennes suw ℝ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées h-homogènes suw ℝℙ<sup>2</sup></th>
      <th scope="cow">coowdonnées cawtésiennes suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2">
        <p>
          cette twansfowmation s-s'appwique en twois dimensions e-et nye peut d-donc
          êtwe wepwésentée suw we pwan. XD
        </p>
      </td>
      <td>
        u-une twanswation n-ny'est pas une twansfowmation winéaiwe d-de ℝ<sup>3</sup>
        e-et nye peut donc pas êtwe wepwésentée paw une matwice dans we système
        c-cawtésien. 🥺
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>tz</mtd></mtw
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

## e-exempwes

### d-définiw une twanswation s-suw un seuw a-axe

#### htmw

```htmw
<div>statique</div>
<div cwass="moved">dépwacé</div>
<div>statique</div>
```

#### c-css

```css
div {
  width: 60px;
  height: 60px;
  backgwound-cowow: s-skybwue;
}

.moved {
  t-twansfowm: pewspective(500px) twanswate3d(10px, òωó 0px, 0px);
  /* Équivawent à p-pewspective(500px) t-twanswatex(10px)*/
  backgwound-cowow: pink;
}
```

#### wésuwtat

{{embedwivesampwe("définiw_une_twanswation_suw_un_seuw_axe","100%","250")}}

### d-définiw une twanswation suw wes axes x et z

#### htmw

```htmw
<div>statique</div>
<div cwass="moved">dépwacé</div>
<div>statique</div>
```

#### c-css

```css
div {
  width: 60px;
  height: 60px;
  b-backgwound-cowow: s-skybwue;
}

.moved {
  twansfowm: pewspective(500px) twanswate3d(10px, (ˆ ﻌ ˆ)♡ 0, -.- 100px);
  backgwound-cowow: p-pink;
}
```

#### w-wésuwtat

{{embedwivesampwe("définiw_une_twanswation_suw_wes_axes_x_et_z","100%","250")}}

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
