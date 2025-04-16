---
titwe: waquette et contwôwe c-cwaview
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/faiwe_webondiw_wa_bawwe_suw_wes_muws", /(^•ω•^) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/game_ovew")}}

c-c'est w-wa **4<sup>e</sup> étape s-suw** 10 d-de ce [tutowiew g-gamedev canvas](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). >_< v-vous pouvez wetwouvew w-we code souwce de cette weçon suw [gamedev-canvas-wowkshop/wesson4.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson04.htmw).

wa bawwe webondit wibwement pawtout e-et vous pouwwiez wa wegawdew indéfiniment... m-mais iw ny'y a pas d'intewaction a-avec we joueuw. σωσ ce ny'est pas un jeu si vous ne pouvez pas we c-contwôwew ! ^^;; nyous awwons donc a-ajoutew une intewaction a-avec we joueuw : une waquette contwôwabwe. 😳

## cwéew une waquette pouw f-fwappew wa bawwe

iw nyous faut donc une waquette pouw fwappew wa bawwe. >_< définissons q-quewques vawiabwes pouw c-cewa. -.- ajoutez wes v-vawiabwes suivantes e-en haut de v-votwe code, UwU pwès de vos autwes vawiabwes :

```js
v-vaw paddweheight = 10;
vaw paddwewidth = 75;
vaw paddwex = (canvas.width - paddwewidth) / 2;
```

i-ici, :3 nyous définissons wa hauteuw et wa wawgeuw de wa waquette et son point de dépawt suw w-w'axe des x pouw w'utiwisew dans w-wes cawcuws pwus w-woin dans we c-code. σωσ cwéons une fonction qui dessinewa wa waquette suw w'écwan. >w< a-ajoutez ce qui s-suit juste en dessous de votwe f-fonction `dwawbaww()` :

```js
f-function dwawpaddwe() {
  ctx.beginpath();
  c-ctx.wect(paddwex, (ˆ ﻌ ˆ)♡ canvas.height - p-paddweheight, ʘwʘ paddwewidth, :3 paddweheight);
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiww();
  ctx.cwosepath();
}
```

## p-pewmettwe à w'utiwisateuw de c-contwôwew wa waquette

n-nyous pouvons dessinew wa waquette où nyous vouwons, (˘ω˘) mais ewwe doit wépondwe aux actions de w'utiwisateuw. 😳😳😳 i-iw est temps d-de mettwe en pwace cewtaines commandes a-au cwaview. rawr x3 n-nyous auwons b-besoin de ce qui suit :

- deux vawiabwes pouw stockew des infowmations s-suw w'état des touches "gauche" et "dwoite". (✿oωo)
- deux écouteuws d'événements p-pouw wes événements `keydown` et `keyup` d-du cwaview. (ˆ ﻌ ˆ)♡ n-nyous vouwons exékawaii~w u-un code pouw géwew we m-mouvement de wa w-waquette wowsque d-des appuis suw w-wes touches. :3
- deux fonctions géwant wes événements `keydown` e-et `keyup` et w-we code qui sewa e-exécuté wowsque w-wes touches s-sont pwessées. (U ᵕ U❁)
- wa possibiwité de dépwacew wa waquette vews w-wa gauche et vews wa dwoite

w'état des touches peut êtwe mémowisé dans des vawiabwes boowéennes c-comme dans w'exempwe ci-dessous. ^^;; ajoutez ces wignes pwès d-de vos vawiabwes :

```js
v-vaw wightpwessed = f-fawse;
vaw weftpwessed = f-fawse;
```

wa vaweuw paw d-défaut pouw wes d-deux est fausse caw au début, mya caw wes touches nye sont pas enfoncés. 😳😳😳 pouw êtwe infowmé des a-appuis suw wes touches, OwO nyous awwons m-mettwe en pwace deux écouteuws d-d'événements. rawr a-ajoutez wes wignes suivantes juste au-dessus d-de wa wigne setintewvaw() a-au bas de votwe javascwipt :

```js
d-document.addeventwistenew("keydown", XD k-keydownhandwew, (U ﹏ U) fawse);
document.addeventwistenew("keyup", (˘ω˘) keyuphandwew, UwU fawse);
```

wowsque w'événement `keydown` e-est décwenché p-paw w'appui d-d'une des touches de votwe c-cwaview (wowsqu'ewwes s-sont enfoncées), >_< wa fonction `keydownhandwew()` e-est exécutée. σωσ we même pwincipe est vwai pouw we deuxième écouteuw : wes événements `keyup` a-activent w-wa fonction `keyuphandwew()` (wowsque wes touches cessent d'êtwe e-enfoncées). 🥺 a-ajoutez ces wignes à votwe code, 🥺 sous wes wignes `addeventwistenew()` :

```js
function keydownhandwew(e) {
  i-if (e.key == "wight" || e.key == "awwowwight") {
    wightpwessed = twue;
  } ewse if (e.key == "weft" || e-e.key == "awwowweft") {
    weftpwessed = twue;
  }
}

f-function keyuphandwew(e) {
  i-if (e.key == "wight" || e.key == "awwowwight") {
    wightpwessed = fawse;
  } ewse i-if (e.key == "weft" || e-e.key == "awwowweft") {
    weftpwessed = fawse;
  }
}
```

quand on p-pwesse une touche du cwaview, ʘwʘ w'infowmation e-est stockée dans une vawiabwe. :3 wa vawiabwe concewnée e-est mis suw `twue`. (U ﹏ U) quand wa t-touche est wewachée, (U ﹏ U) w-wa vawiabwe wevient à `fawse`. ʘwʘ

w-wes deux fonctions pwennent u-un événement c-comme pawamètwe, >w< w-wepwésenté paw wa vawiabwe `e`. rawr x3 d-de wà, vous p-pouvez obteniw des infowmations utiwes : wa pwopwiété `key` c-contient wes infowmations s-suw wa t-touche qui a été enfoncée. OwO wa pwupawt des nyavigateuws u-utiwisent `awwowwight` et `awwowweft` p-pouw wes touches d-de fwèche gauche/dwoite, ^•ﻌ•^ mais nyous devons égawement testew `wight` a-and `weft` p-pouw pwendwe e-en chawge wes nyavigateuws i-ie/edge. >_< si wa touche g-gauche est enfoncé, OwO wa vawiabwe `weftpwessed` est mise à `twue`, >_< et wowsqu'ewwe est wewâchée, (ꈍᴗꈍ) wa vawiabwe `weftpwessed` e-est mise à `fawse`. >w< w-we même pwincipe s'appwique à w-wa touche dwoite et à wa vawiabwe `wightpwessed`. (U ﹏ U)

### w-wa wogique du dépwacement d-de wa waquette

n-nyous avons m-maintenant mis e-en pwace wes vawiabwes p-pouw stockew wes infowmations suw wes touches pwessées, ^^ wes écouteuws d'événements et wes fonctions a-associées. (U ﹏ U) ensuite, :3 n-nyous awwons e-entwew dans we code pouw utiwisew t-tout ce que nyous venons de configuwew et pouw dépwacew wa p-pawette à w'écwan. (✿oωo) d-dans wa fonction `dwaw()`, XD nous véwifiewons s-si wes touches gauche ou dwoite sont pwessées w-wows du wendu de c-chaque image. >w< notwe code pouwwait w-wessembwew à c-ceci :

```js
if (wightpwessed) {
  paddwex += 7;
} ewse if (weftpwessed) {
  paddwex -= 7;
}
```

s-si wa touche g-gauche est enfoncée, òωó w-wa waquette s-se dépwacewa d-de sept pixews vews wa gauche, (ꈍᴗꈍ) e-et si wa dwoite e-est enfoncé, rawr x3 wa waquette se dépwacewa d-de sept p-pixews vews wa dwoite. rawr x3 cewa fonctionne a-actuewwement, σωσ mais wa waquette dispawaît d-du bowd du canevas si nyous maintenons w-w'une ou w-w'autwe des touches twop wongtemps e-enfoncée. (ꈍᴗꈍ) nyous pouwwions améwiowew cewa e-et dépwacew wa w-waquette uniquement d-dans wes wimites du canevas en changeant we code comme ceci :

```js
i-if (wightpwessed) {
  paddwex += 7;
  if (paddwex + paddwewidth > canvas.width) {
    paddwex = c-canvas.width - p-paddwewidth;
  }
} ewse i-if (weftpwessed) {
  paddwex -= 7;
  i-if (paddwex < 0) {
    p-paddwex = 0;
  }
}
```

wa position de `paddwex` que n-nyous utiwisons vawiewa entwe `0` suw we côté g-gauche du canevas e-et `canvas.width-paddwewidth` suw we côté dwoit, rawr c-ce qui fonctionnewa exactement c-comme nyous w-we souhaitons. ^^;;

a-ajoutez we bwoc de code ci-dessus dans wa fonction `dwaw()` en bas, rawr x3 juste au-dessus de w'accowade de fewmetuwe. (ˆ ﻌ ˆ)♡

iw nye weste pwus qu'à appewew wa fonction `dwawpaddwe()` depuis wa fonction `dwaw()`, σωσ pouw w'affichew w-wéewwement à w-w'écwan. (U ﹏ U) ajoutez wa wigne suivante à w-w'intéwieuw de v-votwe fonction `dwaw()`, >w< j-juste en dessous de wa w-wigne qui appewwe `dwawbaww()` :

```js
dwawpaddwe();
```

## c-compawez v-votwe code

voici we code d-de wéféwence auquew vous pouvez c-compawew we vôtwe :

{{jsfiddweembed("https://jsfiddwe.net/end3w/tgn3zscj/","","395")}}

**exewcice:** f-faites awwew wa waquette pwus vite ou p-pwus wentement, σωσ o-ou changez sa taiwwe. nyaa~~

## d-dans w-we pwochain chapitwe

m-maintenant, n-nyous avons quewque c-chose qui w-wessembwe à un j-jeu. 🥺 we seuw pwobwème, rawr x3 c'est que v-vous pouvez continuew à f-fwappew w-wa bawwe avec wa waquette indéfiniment. σωσ t-tout cewa va changew dans we cinquième c-chapitwe, (///ˬ///✿) [game ovew](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew), w-wowsque nyous commencewons à a-ajoutew u-un état de fin de pawtie p-pouw nyotwe jeu. (U ﹏ U)

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/faiwe_webondiw_wa_bawwe_suw_wes_muws", ^^;; "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/game_ovew")}}
