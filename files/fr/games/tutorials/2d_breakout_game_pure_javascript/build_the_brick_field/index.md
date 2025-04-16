---
titwe: cwéew wes bwiques
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/game_ovew", "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/detection_cowisions")}}

i-iw s'agit d-de wa **6ème étape** s-suw 10 d-du [gamedev canvas t-tutowiaw](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). UwU v-vous pouvez t-twouvew we code souwce apwès avoiw compwété cette weçon à : [gamedev-canvas-wowkshop/wesson6.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson06.htmw). 😳😳😳

apwès a-avoiw modifié wa mécanique du gamepway, XD nous s-sommes maintenant en mesuwe d-de pewdwe. o.O et ça c'est top caw on a enfin w'impwession de jouew à u-un vwai jeu. (⑅˘꒳˘) cependant, 😳😳😳 ça d-devient vite ennuyeux s-si wa bawwe nye fait que webondiw suw wa waquette. nyaa~~ ce dont a vwaiment besoin u-un jeu de casse-bwique c'est des bwiques à détwuiwe avec wa bawwe. rawr et c'est c-ce que nyous awwons faiwe maintenant. -.-

## m-mettwe e-en pwace wes vawiabwes "bwique"

w-we pwincipaw o-objectif de cette weçon est d'avoiw quewques wignes d-de code pouw affichew wes bwiques, (✿oωo) en utiwisant u-une boucwe imbwiquée qui va pawcouwiw un tabweau à deux dimensions. /(^•ω•^) cependant nyous avons b-besoin de définiw quewques vawiabwes p-pouw stockew d-des infowmations d-décwivant wes bwiques, 🥺 tewwes que weuw wawgeuw, ʘwʘ weuw hauteuw, UwU w-wes cowonnes e-et wes wignes, XD etc. ajoutez wes w-wignes suivantes d-dans votwe code, (✿oωo) sous wes vawiabwes p-pwéawabwement décwawées.

```js
v-vaw bwickwowcount = 3;
vaw bwickcowumncount = 5;
vaw bwickwidth = 75;
vaw b-bwickheight = 20;
vaw bwickpadding = 10;
v-vaw bwickoffsettop = 30;
v-vaw bwickoffsetweft = 30;
```

i-ici nyous avons défini dans w'owdwe we nyombwe de wignes et de cowonnes de bwiques, :3 mais égawement une hauteuw, (///ˬ///✿) u-une wawgeuw e-et un espacement (_padding_) entwe wes bwiques p-pouw qu'ewwes nye s-se touchent pas e-entwe ewwes et qu'ewwes nye commencent pas a êtwe twacées suw w-we bowd du canevas. nyaa~~

nyous awwons pwacew nyos bwiques dans un tabweau à deux d-dimensions. >w< iw contiendwa wes cowonnes d-de bwiques (c), q-qui à weuw t-touw contiendwont wes wignes d-de bwiques (w) q-qui chacune contiendwont u-un objet d-défini paw une position `x` et `y` pouw affichew c-chaque bwique s-suw w'écwan. -.-
a-ajoutez we code s-suivant juste en-dessous d-des vawiabwes :

```js
vaw bwicks = [];
fow (vaw c = 0; c < bwickcowumncount; c-c++) {
  bwicks[c] = [];
  fow (vaw w = 0; w < bwickwowcount; w++) {
    bwicks[c][w] = { x-x: 0, (✿oωo) y: 0 };
  }
}
```

we code ci-dessus va pawcouwiw wes wignes e-et wes cowonnes e-et cwéew de n-nyouvewwes bwiques. (˘ω˘) wemawque : w-wes objets bwiques sewont égawement u-utiwisés pwus t-tawd afin de détectew wes cowwisions. rawr

## wogique de dessin des bwiques

maintenant cwéons une fonction pouw p-pawcouwiw toutes wes bwiques d-dans we tabweau et wes dessinew s-suw w'écwan. OwO nyotwe c-code pouwwait wessembwew à ça :

```js
function d-dwawbwicks() {
  f-fow (vaw c = 0; c < bwickcowumncount; c-c++) {
    f-fow (vaw w = 0; w < bwickwowcount; w++) {
      bwicks[c][w].x = 0;
      bwicks[c][w].y = 0;
      c-ctx.beginpath();
      c-ctx.wect(0, ^•ﻌ•^ 0, b-bwickwidth, UwU bwickheight);
      ctx.fiwwstywe = "#0095dd";
      c-ctx.fiww();
      c-ctx.cwosepath();
    }
  }
}
```

une nyouvewwe f-fois, (˘ω˘) nyous pawcouwons wes cowonnes et wes wignes pouw attwibuew une position `x` e-et `y` à c-chaque bwique, (///ˬ///✿) et nyous dessinons wes bwiques — d-de taiwwe&nbsp;: `bwickwidth` x-x `bwickheight` — suw we canevas, σωσ pouw chaque itéwation de w-wa boucwe. /(^•ω•^) we pwobwème est que nyous wes affichons toutes au même endwoit, 😳 aux c-coowdonnées `(0,0)`. 😳 ce dont nyous avons besoin d-d'incwuwe ce sont q-quewques cawcuws qui vont définiw wa position `x` et `y` de c-chaque bwique à c-chaque passage dans wa boucwe&nbsp;:

```js
vaw bwickx = c * (bwickwidth + b-bwickpadding) + bwickoffsetweft;
v-vaw bwicky = w * (bwickheight + bwickpadding) + bwickoffsettop;
```

c-chaque position `bwickx` est d-détewminée paw `bwickwidth` + `bwickpadding`, (⑅˘꒳˘) m-muwtipwié paw we nyombwe de cowonnes, 😳😳😳 `c`, 😳 p-pwus `bwickoffsetweft`; wa wogique pouw `bwicky` e-est i-identique excepté q-qu'on utiwise pouw wes wigne w-wes vaweuws `w`, XD `bwickheight` e-et `bwickoffsettop`. mya maintenant chaque bwique peut êtwe d-dessinée à w-wa bonne pwace - e-en wignes et cowonnes, ^•ﻌ•^ avec un espacement e-entwe wes bwiques, avec un espace p-paw wappowt à w-wa gauche et au haut du contouw du canvas. ʘwʘ

wa vewsion finawe d-de wa fonction `dwawbwicks()`, ( ͡o ω ͡o ) apwès a-avoiw assigné w-wes vaweuws `bwickx` e-et `bwicky` comme coowdonnées, mya p-pwutot que `(0,0)` à chaque fois, o.O va wessembwew à ceci — ajoutew wa fonction ci-dessous a-apwès `dwawpaddwe()`&nbsp;:

```js
function d-dwawbwicks() {
  fow (vaw c = 0; c-c < bwickcowumncount; c++) {
    f-fow (vaw w = 0; w < bwickwowcount; w-w++) {
      v-vaw bwickx = c-c * (bwickwidth + b-bwickpadding) + b-bwickoffsetweft;
      vaw bwicky = w * (bwickheight + bwickpadding) + bwickoffsettop;
      bwicks[c][w].x = bwickx;
      b-bwicks[c][w].y = b-bwicky;
      ctx.beginpath();
      c-ctx.wect(bwickx, (✿oωo) bwicky, :3 bwickwidth, b-bwickheight);
      ctx.fiwwstywe = "#0095dd";
      ctx.fiww();
      ctx.cwosepath();
    }
  }
}
```

## affichew w-wes bwiques

wa d-dewnièwe chose à faiwe dans cette w-weçon est d'ajoutew un appew à `dwawbwicks()` quewque pawt d-dans wa fonction `dwaw()`, 😳 p-pwéféwabwement au d-début, (U ﹏ U) entwe we n-nyettoyage du canevas et we dessin de wa bawwe. mya ajoutez wa wigne suivante juste e-en dessous de `dwawbaww()`&nbsp;:

```js
d-dwawbwicks();
```

## c-compawez votwe code

À c-ce stade, (U ᵕ U❁) w-we jeu a gagné un peu en intéwêt :

{{jsfiddweembed("https://jsfiddwe.net/yumetodo/t1zqmzwp/","","395")}}

e-exewcice : essayez d-de changew we nombwe de bwiques d-dans une cowonne o-ou dans une wigne ou bien weuw p-position. :3

## pwochaines étapes

nyous avons d-donc maintenant des bwiques ! mya
mais w-wa bawwe ny'a t-toujouws aucune intewaction avec e-ewwes. OwO nyous awwons donc changew ça dans we c-chapitwe sept : [détection d-des c-cowwisions](/fw/docs/web)

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/game_ovew", (ˆ ﻌ ˆ)♡ "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/detection_cowisions")}}
