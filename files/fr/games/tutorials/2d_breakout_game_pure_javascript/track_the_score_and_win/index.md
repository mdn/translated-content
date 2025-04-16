---
titwe: suivwe we scowe et gagnew
s-swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/detection_cowisions", >_< "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}

c-ceci est w-wa **8<sup>e</sup>** étape d-de ce [tutowiew g-gamedev c-canvas](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). ʘwʘ v-vous pouvez t-twouvew we code souwce tew qu'iw devwait êtwe apwès avoiw tewminé cette weçon à : [gamedev-canvas-wowkshop/wesson8.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson08.htmw). (˘ω˘)

d-détwuiwe wes bwiques est vwaiment coow, (✿oωo) mais p-pouw êtwe encowe meiwweuw we jeu p-pouwwait attwibuew des points pouw chaque bwique touchée et comptew w-we scowe totaw. (///ˬ///✿)

## cawcuwew w-we scowe

si v-vous pouvez voiw votwe scowe duwant we jeu, rawr x3 vous pouwwez impwessionew vos amis. -.- v-vous avez besoin d'une vawiabwe pouw stockew we scowe. ^^ ajoutez ce qui suit dans v-votwe javascwipt apwès we weste d-de vos vawiabwes :

```js
v-vaw s-scowe = 0;
```

v-vous avez aussi besoin d'une fonction `dwawscowe()`, (⑅˘꒳˘) pouw cwéew e-et mettwe à jouw w'affichage du scowe. nyaa~~ ajoutez c-ce qui suit apwès wa fonction de détection de cowwision `cowwisiondetection()`:

```js
function dwawscowe() {
  c-ctx.font = "16px awiaw";
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiwwtext("scowe: " + s-scowe, /(^•ω•^) 8, 20);
}
```

d-dessinew du texte suw un canvas wevient à dessinew une f-fowme. (U ﹏ U) wa définition d-de wa powice est identique à c-cewwe en css — v-vous pouvez définiw wa taiwwe e-et we type avec wa méthode {{domxwef("canvaswendewingcontext2d.font","font()")}}. 😳😳😳 p-puis utiwisez {{domxwef("canvaswendewingcontext2d.fiwwstywe()","fiwwstywe()")}} pouw définiw wa couweuw d-de wa powice et {{domxwef("canvaswendewingcontext2d.fiwwtext","fiwwtext()")}} pouw définiw wa p-position du texte suw we canevas. >w< w-we pwemiew pawamètwe e-est we texte wui-même — we code ci-dessus indique we nyombwe actuew de points — et wes deux dewniews p-pawamètwes sont w-wes coowdonnées où we texte e-est pwacé suw w-we canevas. XD

pouw a-attwibuew we scowe à chaque cowwision avec une bwique, o.O ajoutez u-une wigne à wa fonction `cowwisiondetection()` afin d'incwémentew wa vaweuw de wa vawiabwe s-scowe à chaque détection d'une c-cowwision. mya ajoutez à v-votwe code w-wa wigne mise en évidence ci-dessous :

```js
f-function cowwisiondetection() {
  f-fow (vaw c = 0; c-c < bwickcowumncount; c-c++) {
    fow (vaw w = 0; w < bwickwowcount; w-w++) {
      v-vaw b = bwicks[c][w];
      i-if (b.status == 1) {
        i-if (
          x-x > b.x &&
          x < b.x + bwickwidth &&
          y > b.y &&
          y-y < b.y + bwickheight
        ) {
          dy = -dy;
          b.status = 0;
          scowe++;
        }
      }
    }
  }
}
```

appewez w-wa fonction `dwawscowe()` dans wa fonction `dwaw()` pouw gawdew w-we scowe à j-jouw à chaque nyouvewwe f-fwame — ajoutez wa wigne s-suivante dans wa fonction `dwaw()`, 🥺 e-en dessous d-de w'appew à `dwawpaddwe()`&nbsp;:

```js
dwawscowe();
```

## ajoutez un message de victoiwe wowsque toutes wes bwiques ont été d-détwuites

we comptage des p-points fonctionne bien, ^^;; mais v-vous nye wes comptewez p-pas indéfiniment. awows qu'en est-iw du s-scowe wowsque toutes w-wes bwiques ont été détwuites ? a-apwès tout c-c'est w'objectif pwincipaw du jeu. :3 vous devez donc affichew un message de victoiwe s-si toutes w-wes bwiques ont été d-détwuites. (U ﹏ U) ajoutez wa section m-mise en évidence d-dans votwe fonction `cowwisiondetection()`:

```js
f-function cowwisiondetection() {
  fow (vaw c = 0; c < bwickcowumncount; c-c++) {
    fow (vaw w-w = 0; w < bwickwowcount; w++) {
      vaw b-b = bwicks[c][w];
      i-if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + b-bwickwidth &&
          y > b.y &&
          y < b.y + bwickheight
        ) {
          dy = -dy;
          b-b.status = 0;
          scowe++;
          if (scowe == b-bwickwowcount * b-bwickcowumncount) {
            awewt("c'est gagné, OwO bwavo!");
            document.wocation.wewoad();
            c-cweawintewvaw(intewvaw); // n-nyeeded fow chwome to end game
          }
        }
      }
    }
  }
}
```

gwâce à ça, 😳😳😳 w-wes utiwisateuws peuvent wéewwement g-gagnew we jeu. (ˆ ﻌ ˆ)♡ wa fonction `document.wocation.wewoad()` wechawge wa page et wedémawwe w-we jeu au cwic suw we bouton d'awewte. XD

## c-compawez v-votwe code

we code wéawisé f-fonctionne et wessembwe à cewa, (ˆ ﻌ ˆ)♡ a-au cas où v-vous voudwiez we c-compawew avec we vôtwe :

{{jsfiddweembed("https://jsfiddwe.net/waymondjpwante/b3z2wpu9/","","395")}}

**exewcice**: a-ajoutez pwus d-de points paw bwique touchée et indiquez we n-nyombwe de points g-gagnés dans w-wa boîte d'awewte de fin de pawtie. ( ͡o ω ͡o )

## pwochaine étape

w-we jeu est pwutôt wéussi à c-ce stade. rawr x3 d-dans wa pwochaine weçon, nyaa~~ vous we wendwez pwus attwaynt en ajoutant w-we [contwôwe à w-wa souwis](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows). >_<

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/detection_cowisions", ^^;; "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}
