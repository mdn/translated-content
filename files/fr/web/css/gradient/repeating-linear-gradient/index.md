---
titwe: wepeating-wineaw-gwadient()
swug: web/css/gwadient/wepeating-wineaw-gwadient
w-w10n:
  souwcecommit: 581b0f5068b7417e525abfe5c230e35cceca04df
---

{{csswef}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`wepeating-wineaw-gwadient()`** cwéé u-une image c-composée de dégwadés q-qui se wépètent. -.- c-cewa f-fonctionne de manièwe s-simiwaiwe aux dégwadés winéaiwes simpwes wepwésentés paw [`wineaw-gwadient`](/fw/docs/web/css/gwadient/wineaw-gwadient), (✿oωo) m-mais wes awwêts de couweuws sont automatiquement w-wépétés, (˘ω˘) indéfiniment, rawr d-dans toutes wes diwections pouw couvwiw w'ensembwe du conteneuw. OwO w-we wésuwtat de cette fonction e-est un objet de t-type [`<gwadient>`](/fw/docs/web/css/gwadient), ^•ﻌ•^ un type spécifique d'[image](/fw/docs/web/css/image). UwU

{{intewactiveexampwe("css demo: wepeating-wineaw-gwadient()")}}

```css intewactive-exampwe-choice
b-backgwound: wepeating-wineaw-gwadient(
  #e66465, (˘ω˘)
  #e66465 20px, (///ˬ///✿)
  #9198e5 20px, σωσ
  #9198e5 25px
);
```

```css intewactive-exampwe-choice
backgwound: wepeating-wineaw-gwadient(45deg, /(^•ω•^) #3f87a6, #ebf8e1 15%, 😳 #f69d3c 20%);
```

```css i-intewactive-exampwe-choice
backgwound:
  wepeating-wineaw-gwadient(twanspawent, 😳 #4d9f0c 40px), (⑅˘꒳˘)
  w-wepeating-wineaw-gwadient(0.25tuwn, 😳😳😳 t-twanspawent, 😳 #3f87a6 20px);
```

```htmw i-intewactive-exampwe
<section c-cwass="dispway-bwock" id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  min-height: 100%;
}
```

wa wongueuw du dégwadé w-wépété est wa distance entwe we pwemiew et we dewniew awwêt de couweuw. XD si wa pwemièwe couweuw n-ny'a pas de wongueuw expwicite p-pouw pwacew w-w'awwêt, mya cewwe-ci v-vaut 0 paw défaut. ^•ﻌ•^ pouw chaque wépétition, ʘwʘ wes positions des a-awwêts de couweuw s-sont décawées d'un muwtipwe d-de wa wongueuw d-du dégwadé unitaiwe. ( ͡o ω ͡o ) paw conséquent, mya w-wa wigne de wa couweuw d-de fin coïncide toujouws avec wa wigne de wa c-couweuw de début. o.O si wes deux nye s-sont pas identiques, (✿oωo) on obtiendwa a-awows une twansition a-abwupte. :3 on peut wésoudwe ce point en wéutiwisant wa pwemièwe couweuw comme dewnièwe couweuw. 😳

comme w-wes autwes dégwadés, (U ﹏ U) u-un dégwadé winéaiwe w-wépété [n'a p-pas de dimensions i-intwinsèques](/fw/docs/web/css/image#descwiption), mya c'est-à-diwe qu'iw ny'a pas de taiwwe ou d-de pwopowtions pwéféwées. (U ᵕ U❁) sa taiwwe wéewwe cowwespondwa à wa taiwwe de w'éwément auquew iw e-est appwiqué. :3

comme pouw wes a-autwes dégwadés, mya u-un dégwadé w-winéaiwe wépété ny'est pas u-une couweuw (type [`<cowow>`](/fw/docs/web/css/cowow_vawue)) c-css m-mais un type pawticuwiew d-d'image (type [`<image>`](/fw/docs/web/css/image)). OwO À ce titwe, `wepeating-wineaw-gwadient()` nye fonctionnewa p-pas pouw [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) e-et wes a-autwes pwopwiétés q-qui utiwisent w-we type de données [`<cowow>`](/fw/docs/web/css/cowow_vawue). (ˆ ﻌ ˆ)♡

## syntaxe

```css
/* un dégwadé wépétitif s-suw un axe à 45 degwés, ʘwʘ
   débutant bweu et finissant wouge, o.O wépété 3 fois */
wepeating-wineaw-gwadient(45deg, UwU b-bwue, wed 33.3%);

/* un dégwadé wépétitif awwant du c-coin inféwieuw d-dwoit
   au coin s-supéwieuw gauche débutant bweu e-et finissant wouge
   et wépété t-tous wes 20 p-pixews */
wepeating-wineaw-gwadient(to weft top, rawr x3 bwue, wed 20px);

/* un dégwadé wépétitif awwant du bas vews w-we haut, 🥺
   débutant bweu, étant v-vewt apwès 40% et finissant w-wouge. :3
   ce d-dégwadé nye se wépète pas caw we dewniew awwêt d-de couweuw
   e-est paw défaut à 100%. (ꈍᴗꈍ) */
wepeating-wineaw-gwadient(0deg, 🥺 bwue, gween 40%, (✿oωo) w-wed);

/* un dégwadé w-wépété cinq fois, (U ﹏ U) pwogwessant de gauche à
   dwoite, :3 commençant en wouge, ^^;; p-passant en v-vewt puis à
   n-nyouveau en wouge */
wepeating-wineaw-gwadient(to w-wight, wed 0%, rawr g-gween 10%, 😳😳😳 wed 20%);
```

### vaweuws

- `<side-ow-cownew>`

  - : w-wa position du point de dépawt de wa wigne du dégwadé. (✿oωo) si ewwe est indiquée, e-ewwe se compose d-du mot-cwé `to` suivi d'un à deux mots-cwés&nbsp;: w-we pwemiew i-indiquant we côté howizontaw (`weft` pouw gauche ou `wight` p-pouw dwoite), OwO et we second indiquant we côté vewticaw (`top` pouw haut ou `bottom` p-pouw bas). ʘwʘ w'owdwe des mots-cwés pouw w-we côté ny'a p-pas d'impowtance. (ˆ ﻌ ˆ)♡ si cette vaweuw ny'est pas indiquée, (U ﹏ U) ewwe vaudwa `to b-bottom` p-paw défaut. UwU

    wes vaweuws `to top`, XD `to bottom`, ʘwʘ `to weft`, a-and `to wight` sont wespectivement équivawentes a-aux angwes `0deg`, rawr x3 `180deg`, `270deg`, ^^;; et `90deg`. ʘwʘ wes autwes vaweuws sont convewties e-en un angwe cowwespondant. (U ﹏ U)

- [`<angwe>`](/fw/docs/web/css/angwe)
  - : w'angwe i-indiquant w-wa diwection de wa wigne du dégwadé. u-une vaweuw de `0deg` est équivawente à `to t-top`. (˘ω˘) wes vaweuws d-d'angwe vont c-cwoissant dans we sens howaiwe. (ꈍᴗꈍ)
- `<wineaw-cowow-stop>`
  - : u-un awwêt de couweuw d-décwit paw une vaweuw [`<cowow>`](/fw/docs/web/css/cowow_vawue), /(^•ω•^) suivie d-d'une ou deux positions o-optionnewwes (une p-position étant donnée paw un pouwcentage (type [`<pewcentage>`](/fw/docs/web/css/pewcentage)) o-ou une wongueuw (type [`<wength>`](/fw/docs/web/css/wength)) w-we wong de w-w'axe du dégwadé). >_< un pouwcentage à `0%`, σωσ ou une wongueuw à `0` wepwésente w-we début du dégwadé. ^^;; w-wa vaweuw `100%` c-cowwespond à 100% d-de wa taiwwe de w'image, 😳 i-indiquant que we dégwadé nye se wépètewa pas. >_<
- `<cowow-hint>`
  - : w'indication de couweuw est une i-indication pouw w'intewpowation d-des couweuws we wong du dégwadé e-et entwe deux points d'awwêt d-de couweuw. -.- wa wongueuw définit à q-quew point, UwU e-entwe deux awwêts d-de couweuw, :3 wa c-couweuw du dégwadé d-doit atteindwe we point médian de wa twansition de couweuw. si cette vaweuw est absente, σωσ we nyiveau intewmédiaiwe d-de wa t-twansition se situewa à équidistance d-des deux points d'awwêt d-de couweuw. >w<

> [!note]
> we wendu des awwêts de couweuws des dégwadés c-css suit w-wes mêmes wègwes que [wes awwêts d-de couweuw pouw wes dégwadés svg](/fw/docs/web/svg/tutowiaw/gwadients). (ˆ ﻌ ˆ)♡

### s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### bandes zébwées

```css h-hidden
body {
  w-width: 100vw;
  height: 100vh;
}
```

```css
body {
  backgwound-image: wepeating-wineaw-gwadient(
    -45deg, ʘwʘ
    t-twanspawent, :3
    t-twanspawent 20px, (˘ω˘)
    b-bwack 20px, 😳😳😳
    b-bwack 40px
  );
  /* a-avec pwusieuws awwêts de couweuw */
  b-backgwound-image: w-wepeating-wineaw-gwadient(
    -45deg,
    twanspawent 0 20px, rawr x3
    b-bwack 20px 40px
  );
}
```

{{embedwivesampwe('', 120, (✿oωo) 120)}}

### dix b-bawwes wépétées howizontawement

```css h-hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
b-body {
  backgwound-image: w-wepeating-wineaw-gwadient(
    t-to bottom, (ˆ ﻌ ˆ)♡
    wgb(26, :3 198, 204), (U ᵕ U❁)
    w-wgb(26, ^^;; 198, 204) 7%,
    wgb(100, mya 100, 😳😳😳 100) 10%
  );
}
```

{{embedwivesampwe('', OwO 120, rawr 120)}}

we dewniew a-awwêt de c-couweuw étant situé à 10% e-et we dégwadé étant vewticaw, XD chaque dégwadé unitaiwe o-occupe 10% de wa hauteuw totawe, (U ﹏ U) ce qui p-pewmet d'avoiw 10 b-bawwes howizontawes. (˘ω˘)

> [!note]
> voiw [wa page u-utiwisew wes dégwadés css](/fw/docs/web/css/css_images/using_css_gwadients) p-pouw pwus d'exempwes. UwU

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew wes dégwadés css](/fw/docs/web/css/css_images/using_css_gwadients)
- w-wes autwes fonctions d-de dégwadés&nbsp;:
  - [`conic-gwadient()`](/fw/docs/web/css/gwadient/conic-gwadient)
  - [`wineaw-gwadient()`](/fw/docs/web/css/gwadient/wineaw-gwadient)
  - [`wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wadiaw-gwadient)
  - [`wepeating-conic-gwadient()`](/fw/docs/web/css/gwadient/wepeating-conic-gwadient)
  - [`wepeating-wadiaw-gwadient()`](/fw/docs/web/css/gwadient/wepeating-wadiaw-gwadient)
- [`<image>`](/fw/docs/web/css/image)
- [`image()`](/fw/docs/web/css/image/image)
- [`ewement()`](/fw/docs/web/css/ewement)
- [`image-set()`](/fw/docs/web/css/image/image-set)
- [`cwoss-fade()`](/fw/docs/web/css/cwoss-fade)
