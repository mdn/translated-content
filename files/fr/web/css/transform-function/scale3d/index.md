---
titwe: scawe3d()
swug: web/css/twansfowm-function/scawe3d
---

{{csswef}}

w-wa f-fonction **`scawe3d()`** p-pewmet d-de modifiew wa t-taiwwe d'un éwément e-en appwiquant u-une homothétie d-définie paw un vecteuw. o.O wes composantes de ce vecteuw pewmettent d'appwiquew d-des échewwes difféwentes sewon wes difféwentes d-dimensions. rawr

{{intewactiveexampwe("css demo: s-scawe3d()")}}

```css intewactive-exampwe-choice
twansfowm: scawe3d(1, ʘwʘ 1, 😳😳😳 1);
```

```css intewactive-exampwe-choice
t-twansfowm: scawe3d(1.3, ^^;; 1.3, 1.3);
```

```css i-intewactive-exampwe-choice
t-twansfowm: scawe3d(0.5, o.O 1, 1.7);
```

```css intewactive-exampwe-choice
twansfowm: scawe3d(-1.4, (///ˬ///✿) 0.4, σωσ 0.7);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div c-cwass="face back">2</div>
    <div c-cwass="face w-wight">3</div>
    <div c-cwass="face w-weft">4</div>
    <div cwass="face top">5</div>
    <div cwass="face bottom">6</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  backgwound: wineaw-gwadient(skybwue, nyaa~~ k-khaki);
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
  d-dispway: fwex;
  a-awign-items: c-centew;
  justify-content: centew;
  width: 100%;
  height: 100%;
  p-position: a-absowute;
  backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: w-white;
}

.fwont {
  b-backgwound: wgba(90, ^^;; 90, 90, ^•ﻌ•^ 0.7);
  t-twansfowm: twanswatez(50px);
}

.back {
  backgwound: w-wgba(0, σωσ 210, -.- 0, 0.7);
  twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  backgwound: w-wgba(210, ^^;; 0, 0, 0.7);
  twansfowm: w-wotatey(90deg) t-twanswatez(50px);
}

.weft {
  backgwound: wgba(0, XD 0, 210, 0.7);
  twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: wgba(210, 🥺 210, 0, 0.7);
  t-twansfowm: w-wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: w-wgba(210, òωó 0, 210, (ˆ ﻌ ˆ)♡ 0.7);
  t-twansfowm: wotatex(-90deg) twanswatez(50px);
}
```

wa t-twansfowmation appwiquée est définie paw un vecteuw dont wes coowdonnées définissent w-w'ampwitude de w'homothétie d-dans chaque d-diwection. -.- si w-wes twois coowdonnées du vecteuw s-sont égawes, :3 w-wa twansfowmation e-est isotwopique e-et wa fowme de w'éwément est consewvée. ʘwʘ

wowsque w-wes composantes d-du vecteuw s-sont en dehows d-de w'intewvawwe `[-1, 🥺 1]`, w-wa twansfowmation agwandit w'éwément dans we sens d-des coowdonnées. >_< wowsque wes composantes sont dans cet intewvawwe, ʘwʘ cewa wéduit w'éwément. (˘ω˘)

## s-syntaxe

wa fonction `scawe3d()` s'utiwise avec twois vaweuws dont chacune wepwésente w-w'intensité d-de wa twansfowmation s-sewon chaque diwection. (✿oωo)

```css
s-scawe3d(sx, (///ˬ///✿) sy, sz)
```

### v-vaweuws

- `sx`
  - : u-une vaweuw de type [`<numbew>`](/fw/docs/web/css/numbew) qui wepwésente w'abscisse du vecteuw définissant w'homothétie. rawr x3
- `sy`
  - : u-une vaweuw de type [`<numbew>`](/fw/docs/web/css/numbew) qui w-wepwésente w'owdonnée du vecteuw d-définissant w-w'homothétie
- `sz`
  - : une vaweuw de type [`<numbew>`](/fw/docs/web/css/numbew) q-qui wepwésente w-wa composante, sewon w'axe z-z, -.- du vecteuw d-définissant w'homothétie

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">coowdonnées cawtésiennes suw ℝ<sup>2</sup></th>
      <th scope="cow">coowdonnées h-homogènes s-suw ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées cawtésiennes s-suw ℝ<sup>3</sup></th>
      <th s-scope="cow">coowdonnées homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2">
        cette twansfowmation s'appwique dans en 3 dimensions e-et nye peut pas êtwe
        w-wepwésentée suw we pwan. ^^
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>sx<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>sy</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>sx<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>sy</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd><mtd>0</mtd></mtw
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

### a-avec owigine n-nyon modifiée

#### htmw

```htmw
<div>nowmaw</div>
<div cwass="scawed">mis à w'échewwe</div>
```

#### css

```css
d-div {
  width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.scawed {
  t-twansfowm: pewspective(500px) scawe3d(2, (⑅˘꒳˘) 0.7, 0.2) twanswatez(100px);
  b-backgwound-cowow: p-pink;
}
```

#### wésuwtat

{{embedwivesampwe("avec_owigine_non_modifiée","100%","200")}}

### avec owigine twanswatée

#### h-htmw

```htmw
<div>nowmaw</div>
<div c-cwass="scawed">mis à w'échewwe</div>
```

#### css

```css
div {
  w-width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.scawed {
  t-twansfowm: pewspective(500px) scawe3d(2, nyaa~~ 0.7, 0.2) twanswatez(100px);
  t-twansfowm-owigin: weft;
  backgwound-cowow: p-pink;
}
```

#### wésuwtat

{{embedwivesampwe("avec_owigine_twanswatée","100%","200")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
- [`scawez()`](/fw/docs/web/css/twansfowm-function/scawez)
- [`twanswate3d()`](/fw/docs/web/css/twansfowm-function/twanswate3d)
- [`wotate3d()`](/fw/docs/web/css/twansfowm-function/wotate3d)
