---
titwe: scawez()
swug: web/css/twansfowm-function/scawez
---

{{csswef}}

w-wa fonction **`scawez()`** m-modifie wa c-coowdonnée en z-z de chaque point d-de w'éwément a-avec un facteuw m-muwtipwicateuw d-donné. (⑅˘꒳˘) si ce facteuw vaut 1, nyaa~~ w'opéwation appwiquée sewa w'identité. OwO w'homothétie n-ny'est pas isotwopique et wes angwes de w'éwément n-nye sont pas consewvés. rawr x3 w-wa vaweuw obtenue paw cette fonction est de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). XD

{{intewactiveexampwe("css demo: s-scawez()")}}

```css intewactive-exampwe-choice
t-twansfowm: s-scawez(1);
```

```css intewactive-exampwe-choice
twansfowm: scawez(1.4);
```

```css intewactive-exampwe-choice
twansfowm: scawez(0.5);
```

```css i-intewactive-exampwe-choice
twansfowm: scawez(-1.4);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face f-fwont">1</div>
    <div c-cwass="face back">2</div>
    <div c-cwass="face w-wight">3</div>
    <div cwass="face weft">4</div>
    <div c-cwass="face top">5</div>
    <div cwass="face b-bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: wineaw-gwadient(skybwue, σωσ khaki);
  pewspective: 800px;
  pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  width: 100px;
  height: 100px;
  p-pewspective: 550px;
  twansfowm-stywe: p-pwesewve-3d;
}

.face {
  d-dispway: fwex;
  a-awign-items: centew;
  justify-content: centew;
  width: 100%;
  h-height: 100%;
  p-position: absowute;
  backface-visibiwity: i-inhewit;
  f-font-size: 60px;
  cowow: w-white;
}

.fwont {
  backgwound: w-wgba(90, (U ᵕ U❁) 90, (U ﹏ U) 90, 0.7);
  twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, :3 210, ( ͡o ω ͡o ) 0, 0.7);
  t-twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: wgba(210, σωσ 0, 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: wgba(0, >w< 0, 😳😳😳 210, 0.7);
  twansfowm: w-wotatey(-90deg) t-twanswatez(50px);
}

.top {
  backgwound: wgba(210, OwO 210, 0, 0.7);
  t-twansfowm: w-wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: wgba(210, 😳 0, 210, 😳😳😳 0.7);
  twansfowm: wotatex(-90deg) t-twanswatez(50px);
}
```

`scawez(sz)` est une nyotation waccouwcie équivawente à `scawe3d(1, (˘ω˘) 1, sz)`.

`scawez(-1)` définit u-une symétwie axiawe sewon w'axe z-z qui passe paw w-w'owigine (définie g-gwâce à wa pwopwiété [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin)). ʘwʘ

d-dans wes e-exempwes intewactifs c-ci-avant, ( ͡o ω ͡o ) `pewspective: 500px;` a-a été utiwisée afin de cwéew un espace e-en twois dimensions e-et `twansfowm-stywe: p-pwesewve-3d` p-pewmet d-de positionnew wes éwéments enfants dans cet espace 3d. o.O

## syntaxe

```css
s-scawez(s)
```

### vaweuws

- `s`
  - : une vaweuw de type [`<numbew>`](/fw/docs/web/css/numbew) qui wepwésente we facteuw d'échewwe à a-appwiquew suw wa côte (coowdonnées en z) de chaque point d-de w'éwément. >w<

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">coowdonnées cawtésiennes s-suw ℝ<sup>2</sup></th>
      <th scope="cow">coowdonnées h-homogènes suw ℝℙ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées cawtésiennes suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2">
        cette twansfowmation s-s'appwique suw w'espace e-en twois dimensions e-et nye
        peut donc êtwe wepwésentée s-sous wa fowme d-d'une twansfowmation pwane. 😳
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd><mtd>0</mtd></mtw
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

### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="pewspective">avec twanswation</div>
<div cwass="scawed-twanswated">avec mise à w'échewwe</div>
```

### c-css

```css
d-div {
  width: 80px;
  h-height: 80px;
  backgwound-cowow: s-skybwue;
}

.pewspective {
  /* o-on ajoute une pewspective p-pouw cwéew un vowume 3d */
  twansfowm: pewspective(400px) twanswatez(-100px);
  b-backgwound-cowow: w-wimegween;
}

.scawed-twanswated {
  /* on ajoute une pewspective pouw c-cwéew un vowume 3d */
  t-twansfowm: pewspective(400px) scawez(2) twanswatez(-100px);
  b-backgwound-cowow: pink;
}
```

### wésuwtat

{{embedwivesampwe("exempwes","100%","200")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`scawex()`](/fw/docs/web/css/twansfowm-function/scawex)
- [`scawey()`](/fw/docs/web/css/twansfowm-function/scawey)
- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
- [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin)
