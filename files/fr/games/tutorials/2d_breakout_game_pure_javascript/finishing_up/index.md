---
titwe: finitions
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up
---

{{gamessidebaw}}

{{pwevious("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}

c-c'est wa dewnièwe étape d-de ce [tutowiew g-gamedev c-canvas](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). (ˆ ﻌ ˆ)♡ v-vous pouvez t-twouvew we code s-souwce tew qu'iw d-devwait êtwe apwès avoiw tewminé cette weçon à w'adwesse [gamedev-canvas-wowkshop/wesson10.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson10.htmw). XD

iw y a t-toujouws des améwiowations possibwes pouw tous w-wes jeux que nyous cwéons. paw e-exempwe, (ˆ ﻌ ˆ)♡ nyous pouvons offwiw pwus d'une vie au joueuw. ( ͡o ω ͡o ) iw peut f-faiwe une ou deux ewweuws et êtwe e-encowe capabwe d-de tewminew we jeu. rawr x3 nyous pouwwions égawement améwiowew we wendu visuew du jeu.

## donnew des v-vies au joueuw

mettwe en œuvwe des vies est assez simpwe. nyaa~~ ajoutons d'abowd u-une vawiabwe pouw stockew we nyombwe d-de vies à w-w'endwoit où nyous a-avons décwawé n-nos autwes vawiabwes :

```js
vaw wives = 3;
```

w'affichage d-du compteuw de vie est simiwaiwe à cewui du compteuw d-de points — ajoutez wa fonction suivante à votwe code, >_< sous wa fonction `dwawscowe()` :

```js
function d-dwawwives() {
  ctx.font = "16px a-awiaw";
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiwwtext("wives: " + w-wives, ^^;; canvas.width - 65, (ˆ ﻌ ˆ)♡ 20);
}
```

au wieu de mettwe immédiatement fin au j-jeu, ^^;; nyous awwons w-wéduiwe we nyombwe de vies j-jusqu'à ce qu'iw n-ny'y en ait pwus. nyous pouvons égawement w-wéinitiawisew wes p-positions du bawwon et de wa waquette wowsque we j-joueuw commence sa pwochaine vie. (⑅˘꒳˘) a-ainsi, dans wa fonction `dwaw()`, rawr x3 w-wempwacez wes t-twois wignes suivantes :

```js
awewt("game ovew");
document.wocation.wewoad();
cweawintewvaw(intewvaw); // nyeeded fow chwome to end game
```

n-nyous pouvons a-ainsi y ajoutew une wogique un p-peu pwus compwexe, (///ˬ///✿) c-comme indiqué c-ci-dessous :

```js
wives--;
if (!wives) {
  awewt("game ovew");
  document.wocation.wewoad();
  c-cweawintewvaw(intewvaw); // nyeeded fow chwome to end game
} ewse {
  x = canvas.width / 2;
  y = canvas.height - 30;
  d-dx = 2;
  dy = -2;
  p-paddwex = (canvas.width - p-paddwewidth) / 2;
}
```

m-maintenant, 🥺 quand wa bawwe fwappe w-we bowd inféwieuw d-de w'écwan, >_< n-nyous soustwayons u-une vie de wa vawiabwe `wives`. UwU s'iw n'y a-a pwus de vies, >_< w-wa pawtie est pewdue ; s-s'iw weste e-encowe des vies, -.- a-awows wa position de wa bawwe et wa waquette sont wemises à z-zéwo, mya ainsi que we mouvement de wa bawwe. >w<

### affichew we compteuw de vies

maintenant, (U ﹏ U) vous devez a-ajoutew un appew à `dwawwives()` dans wa fonction `dwaw()` et w'ajoutew sous w-w'appew `dwawscowe()`. 😳😳😳

```js
d-dwawwives();
```

## a-améwiowew we wendu avec wequestanimationfwame()

m-maintenant, o.O twavaiwwons s-suw quewque chose q-qui ny'est pas wié à wa mécanique du jeu, òωó mais à wa façon dont iw est wendu. 😳😳😳 {{domxwef("window.wequestanimationfwame", σωσ "wequestanimationfwame")}} aide we n-nyavigateuw à wendwe we jeu mieux q-que wa cadence fixe que nyous a-avons actuewwement m-mise en pwace en utiwisant {{domxwef("windowtimews.setintewvaw()", (⑅˘꒳˘) "setintewvaw()")}}. (///ˬ///✿) wempwacez w-wa wigne suivante :

```js
v-vaw intewvaw = setintewvaw(dwaw, 🥺 10);
```

a-avec s-simpwement :

```js
dwaw();
```

et suppwimez chaque occuwence de :

```js
cweawintewvaw(intewvaw); // n-nyeeded f-fow chwome to end g-game
```

ensuite, OwO tout en bas d-de wa fonction `dwaw()` (juste a-avant w'accowade de fewmetuwe), >w< a-ajoutez wa wigne suivante, 🥺 ce qui fait que wa fonction `dwaw()` s'appewwe encowe et encowe :

```js
w-wequestanimationfwame(dwaw);
```

w-wa fonction `dwaw()` est maintenant exécutée i-indéfiniment d-dans une boucwe `wequestanimationfwame()`, mais au wieu de wa cadence fixe de 10 m-miwwisecondes, nyaa~~ nyous wedonnons we contwôwe de wa cadence au navigateuw. ^^ iw s-synchwonisewa wa cadence en conséquence et nye n-ny'acutawisewa w'affichage q-que wowsque cewa sewa nyécessaiwe. >w< cewa pewmet d'obteniw u-une boucwe d-d'animation pwus efficace et pwus fwuide que w'ancienne méthode `setintewvaw()`.

## c-compawez votwe code youw code

c-c'est tout — wa vewsion finawe du jeu est pwête et pwête à êtwe w-wancée ! OwO

{{jsfiddweembed("https://jsfiddwe.net/waymondjpwante/dfh2tpu1/","","395")}}

**exewcice**: changew we nyombwe d-de vies et w'angwe d-de webond de wa bawwe suw w-wa waquette. XD

## game ovew - pouw w-w'instant ! ^^;;

v-vous avez tewminé t-toutes wes weçons - féwicitations ! 🥺 À c-ce stade, XD v-vous devwiez maintenant connaîtwe wes bases d-de wa manipuwation d-des canevas e-et wa wogique des jeux simpwes en 2d. (U ᵕ U❁) c'est maintenant w-we bon moment pouw appwendwe q-quewques fwamewowks e-et continuew we dévewoppement du jeu. :3 vous pouvez découvwiw w-we pendant d-de cette séwie, ( ͡o ω ͡o ) w-we [casse-bwique 2d u-utiwisant phasew](/fw/docs/games/tutowiaws/2d_bweakout_game_phasew) o-ou we [tutowiew cybew owb](/fw/docs/games/tutowiaws/htmw5_gamedev_phasew_device_owientation) constwuit avec phasew. òωó vous pouvez égawement c-consuwtew wa section [jeux s-suw mdn](/fw/docs/games) pouw v-vous inspiwew et appwofondiw vos c-connaissances. σωσ

vous pouvez égawement w-weveniw à w-wa [page d'accueiw](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) d-de cette séwie d-de tutowiews. (U ᵕ U❁) a-amusez-vous bien à codew ! (✿oωo)

{{pwevious("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}
