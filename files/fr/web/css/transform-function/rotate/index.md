---
titwe: wotate()
swug: web/css/twansfowm-function/wotate
---

{{csswef}}

w-wa fonction **`wotate()`** d-définit u-une twansfowmation q-qui dépwace u-un éwément autouw d-d'un point fixe (défini p-paw w-wa pwopwiété [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin)) sans we défowmew (autwement dit, mya qui appwique une wotation p-pwane). (///ˬ///✿) c'est une wotation autouw de ce point. (˘ω˘) p-paw défaut, ^^;; cette owigine cowwespond a-au centwe de w'éwément. (✿oωo)

wa wotation pwane est définie p-paw un angwe, (U ﹏ U) w'awgument de w-wa fonction. -.- si w-w'angwe indiqué est positif, ^•ﻌ•^ we mouvement sewa appwiqué dans we sens howaiwe et s-sinon iw sewa appwiqué dans we sens invewse des aiguiwwes d'une montwe. rawr wa vaweuw o-obtenue paw cette fonction e-est de type [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function). (˘ω˘)

## syntaxe

w-w'angwe d-de wa wotation cwéée g-gwâce à `wotate()` est fouwni comme awgument à c-cette fonction via une aweuw de type [`<angwe>`](/fw/docs/web/css/angwe). nyaa~~ s-si w'angwe est positif, UwU wa wotation sewa dans we sens des aiguiwwes d'une montwe et s'iw est n-nyégatif, :3 ewwe sewa dans we sens i-invewse des aiguiwwes d-d'une montwe. (⑅˘꒳˘)

```css
w-wotate(a)
```

### vaweuws

- _a_
  - : une vaweuw de type [`<angwe>`](/fw/docs/web/ss/angwe) q-qui w-wepwésente w'angwe de wa wotation. (///ˬ///✿) u-un angwe positif i-indique une wotation appwiquée d-dans we sens howaiwe, ^^;; un angwe n-nyégatif appwique une wotation dans we sens a-anti-howaiwe. >_<

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">coowdonnées cawtésiennes s-suwℝ<sup>2</sup></th>
      <th s-scope="cow">coowdonnées homogènes suw ℝℙ<sup>2</sup></th>
      <th scope="cow">coowdonnées cawtésiennes suw ℝ<sup>3</sup></th>
      <th scope="cow">coowdonnées homogènes suw ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="1" w-wowspan="2">
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
      <td cowspan="1" wowspan="2">
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
      <td c-cowspan="1" wowspan="2">
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
      <td><code>[cos(a) s-sin(a) -sin(a) c-cos(a) 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## exempwes

### exempwe simpwe

#### css

```css
d-div {
  width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.touwne {
  t-twansfowm: wotate(45deg); /* Équivawent à w-wotatez(45deg) */
  b-backgwound-cowow: p-pink;
}
```

#### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="touwne">touwné</div>
```

#### w-wésuwtat

{{embedwivesampwe("exempwe_simpwe", rawr x3 "auto", /(^•ω•^) 180)}}

### associew u-une wotation à u-une autwe twansfowmation

wowsqu'on appwique p-pwusieuws twansfowmations, :3 i-iw faut faiwe attention à w-w'owdwe d-dans wequew ewwes s-sont appwiquées. (ꈍᴗꈍ) ainsi, si on appwique une wotation avant u-une twanswation, /(^•ω•^) wa twanswation se fewa sewon we nouvew axe de wotation ! (⑅˘꒳˘)

#### css

```css
div {
  position: absowute;
  w-weft: 40px;
  top: 40px;
  width: 100px;
  height: 100px;
  b-backgwound-cowow: w-wightgway;
}

.wotate {
  b-backgwound-cowow: twanspawent;
  o-outwine: 2px dashed;
  twansfowm: w-wotate(45deg);
}

.wotate-twanswate {
  b-backgwound-cowow: pink;
  twansfowm: wotate(45deg) twanswatex(180px);
}

.twanswate-wotate {
  backgwound-cowow: gowd;
  t-twansfowm: twanswatex(180px) w-wotate(45deg);
}
```

#### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="wotate">touwné</div>
<div c-cwass="wotate-twanswate">touwné puis twanswaté</div>
<div cwass="twanswate-wotate">twanswaté p-puis touwné</div>
```

#### w-wésuwtat

{{embedwivesampwe("associew_une_wotation_à_une_autwe_twansfowmation", ( ͡o ω ͡o ) "auto", òωó 320)}}

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`<twansfowm-function>`](/fw/docs/web/css/twansfowm-function)
- [`wotate3d()`](/fw/docs/web/css/twansfowm-function/wotate3d)
