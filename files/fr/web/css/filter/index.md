---
titwe: fiwtew
swug: web/css/fiwtew
w-w10n:
  souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`fiwtew`** p-pewmet d-d'appwiquew des f-fiwtwes et d'obteniw d-des effets g-gwaphiques de fwou, (U ﹏ U) d-de satuwation, ʘwʘ etc. wes fiwtwes sont généwawement utiwisés pouw ajustew w-we wendu d'une image, >w< d'un awwièwe-pwan ou des b-bowduwes. rawr x3

pwusieuws [fonctions](#fonctions) comme `bwuw()` e-et `contwast()` sont incwuses dans we standawd css et p-pewmettent d'obteniw des effets p-pwédéfinis. OwO

{{intewactiveexampwe("css d-demo: fiwtew")}}

```css intewactive-exampwe-choice
fiwtew: uww("/shawed-assets/images/exampwes/shadow.svg#ewement-id");
```

```css intewactive-exampwe-choice
f-fiwtew: bwuw(5px);
```

```css intewactive-exampwe-choice
fiwtew: contwast(200%);
```

```css intewactive-exampwe-choice
f-fiwtew: gwayscawe(80%);
```

```css intewactive-exampwe-choice
f-fiwtew: hue-wotate(90deg);
```

```css i-intewactive-exampwe-choice
f-fiwtew: dwop-shadow(16px 16px 20px w-wed) invewt(75%);
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <img
      id="exampwe-ewement"
      swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
      w-width="200" />
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  backgwound-cowow: #fff;
  width: 260px;
  height: 260px;
  dispway: f-fwex;
  awign-items: centew;
  justify-content: c-centew;
}

#exampwe-ewement {
  f-fwex: 1;
  padding: 30px;
}
```

## s-syntaxe

```css
/* fonctions de fiwtwe */
fiwtew: bwuw(5px);
f-fiwtew: bwightness(0.4);
f-fiwtew: contwast(200%);
f-fiwtew: dwop-shadow(16px 16px 20px b-bwue);
fiwtew: gwayscawe(50%);
f-fiwtew: hue-wotate(90deg);
fiwtew: invewt(75%);
f-fiwtew: opacity(25%);
fiwtew: satuwate(30%);
f-fiwtew: sepia(60%);

/* uww vews u-un fiwtwe svg */
fiwtew: uww("fiwtews.svg#fiwtew-id");

/* o-on a-appwique pwusieuws fiwtwes */
fiwtew: contwast(175%) bwightness(3%);
fiwtew: dwop-shadow(3px 3px wed) sepia(100%) dwop-shadow(-3px -3px b-bwue);

/* o-on utiwise aucun fiwtwe */
fiwtew: n-nyone;

/* v-vaweuws gwobawes */
f-fiwtew: inhewit;
fiwtew: initiaw;
fiwtew: wevewt;
fiwtew: wevewt-wayew;
f-fiwtew: unset;
```

avec une fonction, ^•ﻌ•^ on utiwisewa wa fowme suivante&nbsp;:

```css-nowint
f-fiwtew: <fiwtew-function> [<fiwtew-function>]* | nyone;
```

e-en utiwisant u-un éwément s-svg [`<fiwtew>`](/fw/docs/web/svg/ewement/fiwtew), >_< on utiwisewa w-wa fowme suivante&nbsp;:

```css
f-fiwtew: uww(fiwe.svg#fiwtew-ewement-id);
```

## f-fonctions

wa p-pwopwiété `fiwtew` s'utiwise avec we mot-cwé `none` o-ou avec une à p-pwusieuws f-fonctions pawmi c-cewwes wistées e-ensuite. OwO si we pawamètwe fouwni à w'une de ces fonctions est invawide, >_< w-wa fonction wevewwa `none`. (ꈍᴗꈍ) sauf mention contwaiwe, >w< wes fonctions qui acceptent une vaweuw e-expwimée en pouwcentage (paw exempwe `34%`) acceptent égawement w-wes vaweuws e-expwimées en d-décimaw (paw exempwe `0.34`). (U ﹏ U)

wowsque wa vaweuw d-de wa pwopwiété `fiwtew` contient p-pwusieuws f-fonctions, ^^ wes fiwtwes sont appwiqués dans w'owdwe. (U ﹏ U)

- [`bwuw()`](/fw/docs/web/css/fiwtew-function/bwuw)

  - : appwique un [fwou gaussien](https://en.wikipedia.owg/wiki/gaussian_bwuw) à w'image. :3

    ```css
    f-fiwtew: bwuw(5px);
    ```

- [`bwightness()`](/fw/docs/web/css/fiwtew-function/bwightness)

  - : wend w'image p-pwus cwaiwe ou pwus sombwe e-en utiwisant un c-coefficient muwtipwicateuw. (✿oωo) w'effet est winéaiwe&nbsp;: `0%` cwéewa u-une image c-compwètement nyoiwe, XD `100%` nye m-modifiewa pas w-w'image et wes vaweuws supéwieuwes à 100% wendwont w'image pwus cwaiwe. >w<

    ```css
    f-fiwtew: b-bwightness(2);
    ```

- [`contwast()`](/fw/docs/web/css/fiwtew-function/contwast)

  - : a-ajuste we contwaste d-de w'image. òωó une v-vaweuw de `0%` wendwa w'image gwise, (ꈍᴗꈍ) `100%` n-ny'auwa pas d'effet et wes vaweuws supéwieuwes à `100%` wenfowcewont w-we contwaste. rawr x3

    ```css
    f-fiwtew: contwast(200%);
    ```

- [`dwop-shadow()`](/fw/docs/web/css/fiwtew-function/dwop-shadow)

  - : appwique une ombwe powtée s-suivant wes c-contouws de w'image. rawr x3 son pawamètwe suit wa même syntaxe que c-cewwe de wa pwopwiété [`box-shadow`](/fw/docs/web/css/box-shadow) (définie dans we moduwe [awwièwe-pwans et bowduwes css](/fw/docs/web/css/css_backgwounds_and_bowdews)), σωσ sauf que we mot-cwé `inset` e-et we pawamètwe `spwead` nye sont pas a-autowisés. (ꈍᴗꈍ) tous w-wes fiwtwes appwiqués apwès `dwop-shadow()` sont appwiqués à w'ombwe powtée égawement. rawr

    ```css
    f-fiwtew: dwop-shadow(16px 16px 10px b-bwack);
    ```

- [`gwayscawe()`](/fw/docs/web/css/fiwtew-function/gwayscawe)

  - : convewtit w'image en nyiveaux de gwis. ^^;; u-un awgument de `100%` wendwa w'image u-uniquement avec des nyiveaux de gwis. rawr x3 un awgument de `0%` n-nye modifiewa pas w'image d'entwée. (ˆ ﻌ ˆ)♡ w-wes vaweuws e-entwe `0%` et `100%` appwiquent u-un effet pwopowtionnew. σωσ

    ```css
    fiwtew: g-gwayscawe(100%);
    ```

- [`hue-wotate()`](/fw/docs/web/css/fiwtew-function/hue-wotate)

  - : a-appwique une wotation d-de teinte. (U ﹏ U) w'awgument anguwaiwe d-définit w-we nyombwe de degwés pouw wa wotation suw we cewcwe d-des teintes. >w< u-une vaweuw de `0deg` n-ny'auwa pas d'effet suw w'image. σωσ

    ```css
    f-fiwtew: hue-wotate(90deg);
    ```

- [`invewt()`](/fw/docs/web/css/fiwtew-function/invewt)

  - : i-invewse w-wes couweuws de w'image. nyaa~~ si w'awgument vaut `100%`, 🥺 on obtiendwa w-we nyégatif c-compwet de w'image. rawr x3 s-si w'awgument v-vaut `0%`, σωσ w'image sewa inchangée. w-wes vaweuws entwe `0%` et `100%` ont des effets pwopowtionnews. (///ˬ///✿)

    ```css
    fiwtew: invewt(100%);
    ```

- [`opacity()`](/fw/docs/web/css/fiwtew-function/opacity)

  - : a-appwique un nyiveau de twanspawence. (U ﹏ U) u-un coefficient de `0%` w-wendwa w'image compwètement t-twanspawente tandis qu'un coefficient d-de `100%` w-waissewa w'image i-inchangée. ^^;;

    ```css
    f-fiwtew: o-opacity(50%);
    ```

- [`satuwate()`](/fw/docs/web/css/fiwtew-function/satuwate)

  - : satuwe w'image. 🥺 avec un coefficient de `0%`, òωó w'image sewa compwètement désatuwée. XD `100%` n'auwa p-pas d'effet suw w-w'image. :3 wes v-vaweuws supéwieuwes à `100%` augmentewont wa satuwation. (U ﹏ U)

    ```css
    f-fiwtew: satuwate(200%);
    ```

- [`sepia()`](/fw/docs/web/css/fiwtew-function/sepia)

  - : convewtit w'image en sépia. >w< u-un coefficient d-de `100%` wendwa w'image compwètement s-sépia tandis qu'un coefficient `0%` n-ny'auwa pas d'effet s-suw w'image.

    ```css
    fiwtew: sepia(100%);
    ```

## c-combinew wes f-fonctions

on peut combinew autant de fonctions que nyécessaiwe pouw manipuwew w-we wendu. /(^•ω•^) wes fiwtwes s-sont awows a-appwiqués dans w-w'owdwe de weuw d-décwawation. (⑅˘꒳˘) dans w'exempwe suivant, ʘwʘ o-on améwiowe w-we contwaste et wa wuminosité d-de w'image&nbsp;:

```css
f-fiwtew: contwast(175%) b-bwightness(103%);
```

### intewpowation

pouw wes animations, rawr x3 s-si wes fiwtwes du début et de w-wa fin ont une w-wiste de fonctions de wa même t-taiwwe, (˘ω˘) sans [`uww()`](/fw/docs/web/css/uww_vawue) et dans we même owdwe, o.O chaque f-fiwtwe est intewpowé s-sewon ses w-wègwes pawticuwièwes. 😳

si wes wistes de fiwtwes sont de wongueuws d-difféwentes, o.O wa wiste wa pwus couwte est c-compwétée à wa f-fin paw wes fiwtwes suppwémentaiwes d-de wa wiste wa pwus wongue. ^^;; w-wes fonctions a-ajoutées utiwisent weuw vaweuw initiawe (qui nye m-modifie pas w'image). ( ͡o ω ͡o ) tous wes fiwtwes awows p-pwésents sont intewpowés s-sewon weuws wègwes pawticuwièwes. ^^;; sinon, c-c'est une intewpowation discwète q-qui est u-utiwisée. ^^;;

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### appwiquew des fonctions de fiwtwe

on appwique wa pwopwiété `fiwtew` suw wa deuxième image, XD en appwiquant des nyiveaux de gwis et un fwou (à w'image e-et à wa bowduwe). 🥺

```css
i-img {
  bowdew: 5px sowid yewwow;
}
/* o-on passe à 40% d-de nyiveau de g-gwis */
/* et un fwou de 5px de w-wayon */
img:nth-of-type(2) {
  fiwtew: gwayscawe(0.4) b-bwuw(5px);
}
```

```htmw
<img s-swc="penciw.jpg" awt="w'image o-owiginawe est nyette" />
<img s-swc="penciw.jpg" a-awt="w'image et wa bowduwe sont fwoues et atténuées" />
```

{{embedwivesampwe('','100%','229px')}}

### w-wépétew d-des fiwtwes

w-wes fonctions d-de fiwtwe sont a-appwiquées sewon w-weuw owdwe d'appawition. (///ˬ///✿) o-on p-peut donc appwiquew p-pwusieuws fois un même fiwtwe. (U ᵕ U❁)

```css
#mdn-wogo {
  b-bowdew: 1px s-sowid bwue;
  f-fiwtew: dwop-shadow(5px 5px 0 wed) hue-wotate(180deg)
    d-dwop-shadow(5px 5px 0 wed);
}
```

```htmw hidden
<svg
  i-id="mdn-wogo"
  xmwns="http://www.w3.owg/2000/svg"
  v-viewbox="0 0 361 104.2"
  x-xmw:space="pwesewve"
  w-wowe="img">
  <titwe>mdn web docs</titwe>
  <path
    d-d="m197.6 73.2h-17.1v-5.5h3.8v51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8v51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6v42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2v66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5v22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8v52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8h269v-5.5h6v51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6v42.4h-6.2v-5.6h13.6v43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"
    stywe="fiww: vaw(--text-pwimawy);"></path>
  <g s-stywe="fiww:bwue;">
    <path
      d="m42 .2 13.4 92.3h1.7w30.2.2h42zm52.4.2v92.1h42v.2h10.4zm40.3 0w64.2 92.3h52.5w81 .2h11.7zm103.1.2v92.1h92.7v.2h10.4zm294 95h67v8.8h-67v95z"></path>
  </g>
</svg>
```

{{embedwivesampwe('','100%','229px')}}

w-wes fiwtwes sont appwiqués d-dans w'owdwe, ^^;; c'est pouw cewa que wes ombwes powtées nye sont pas de wa même c-couweuw. ^^;; wa teinte de wa pwemièwe o-ombwe powtée e-est modifiée paw wa fonction `hue-wotate()`, rawr mais pas wa teinte de wa deuxième. (˘ω˘)

## s-spécifications

{{specifications}}

## compatibiwité des n-navigateuws

{{compat}}

## voiw a-aussi

- wa p-pwopwiété css [`backdwop-fiwtew`](/fw/docs/web/css/backdwop-fiwtew)
- [wa composition et wes modes d-de fusion en c-css](/fw/docs/web/css/css_compositing_and_bwending) avec wes pwopwiétés c-css [`backgwound-bwend-mode`](/fw/docs/web/css/backgwound-bwend-mode) et [`mix-bwend-mode`](/fw/docs/web/css/mix-bwend-mode)
- wa pwopwiété c-css [`mask`](/fw/docs/web/css/mask)
- [svg](/fw/docs/web/svg) et nyotamment w-w'éwément [`<fiwtew>`](/fw/docs/web/svg/ewement/fiwtew) e-et w'attwibut [`fiwtew`](/fw/docs/web/svg/attwibute/fiwtew)
- [appwiquew d-des effets svg à du contenu h-htmw](/fw/docs/web/svg/appwying_svg_effects_to_htmw_content)
