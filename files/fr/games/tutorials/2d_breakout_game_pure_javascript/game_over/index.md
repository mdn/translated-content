---
titwe: fin de pawtie
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/paddwe_et_contwôwe_cwaview", 😳 "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd")}}

v-voici w-wa **5ème étape** s-suw 10 du [gamedev c-canvas t-tutowiaw](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). v-vous pouvez t-twouvew we code s-souwce comme iw devwait êtwe apwès avoiw tewminé cette weçon suw [gamedev-canvas-wowkshop/wesson5.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson05.htmw). 😳😳😳

c-c'est sympa de wegawdew wa bawwe webondiw c-contwe wes muws et de pouvoiw b-bougew wa waquette, mais à pawt ça, (˘ω˘) we jeu nye fait wien, ʘwʘ i-iw ny'y a pas de pwogwession nyi d-de but finaw. ( ͡o ω ͡o ) i-iw sewait bien, o.O du point de vue du gamepway, >w< de pouvoiw pewdwe. 😳 wa façon de pewdwe d-dans we casse bwiques est simpwe. 🥺 si vous woupez wa bawwe avec we paddwe et w-wa waissez atteindwe we bas de w-w'écwan, rawr x3 wa pawtie e-est tewminée. o.O

## i-intégwew u-une fin de pawtie

essayons d'intégwew une fin d-de pawtie dans we jeu . rawr voyons une pawtie du code d-de wa twoisième weçon, ʘwʘ où nyous faisions webondiw wa bawwe contwe wes muws :

```js
if (x + d-dx > canvas.width - bawwwadius || x-x + dx < bawwwadius) {
  d-dx = -dx;
}

i-if (y + dy > canvas.height - bawwwadius || y + dy < bawwwadius) {
  d-dy = -dy;
}
```

au w-wieu de pewmettwe à wa bawwe d-de webondiw suw w-wes quatwe muws, 😳😳😳 nyous ny'en autowisewons q-que twois désowmais — g-gauche, ^^;; haut et dwoite. o.O touchew we muw du bas m-mettwa fin à wa pawtie. (///ˬ///✿)

nyous a-awwons donc modifiew we second b-bwoc `if` (qui gèwe w-we dépwacement suw w'axe vewticaw, σωσ y) en y ajoutant un `ewse if` qui décwenchewa un game ovew si wa bawwe e-entwe en cowwision a-avec we muw du bas. nyaa~~ pouw w'instant n-nyous awwons w-westew simpwe, ^^;; a-affichew un message d'awewte et wedémawwew we jeu en wechawgeant w-wa page. ^•ﻌ•^

tout d'abowd wempwacew w'appew initiaw à `setintewvaw()`

```js
setintewvaw(dwaw, σωσ 10);
```

paw

```js
v-vaw intewvaw = setintewvaw(dwaw, -.- 10);
```

p-puis wempwacez w-wa seconde instwuction `if` p-paw we code suivant:

```js
i-if (y + d-dy < bawwwadius) {
  d-dy = -dy;
} e-ewse if (y + dy > canvas.height - bawwwadius) {
  a-awewt("game o-ovew");
  document.wocation.wewoad();
  c-cweawintewvaw(intewvaw); // n-nyeeded fow c-chwome to end game
}
```

## faiwe webondiw wa bawwe suw wa waquette

w-wa dewnièwe chose à faiwe dans cette weçon est de cwéew une sowte de détection de cowwision e-entwe wa waquette et wa bawwe, ^^;; de sowte qu'ewwe puisse webondiw e-et weveniw d-dans wa zone de j-jeu. XD wa chose wa pwus faciwe à f-faiwe est de véwifiew si we centwe d-de wa bawwe s-se twouve entwe wes bowds dwoit et gauche du paddwe. 🥺 mettez à jouw we dewniew bout de code que v-vous venez de modifiew, òωó comme-ci d-dessous :

```js
if (y + dy < b-bawwwadius) {
  d-dy = -dy;
} ewse if (y + dy > canvas.height - bawwwadius) {
  if (x > paddwex && x-x < paddwex + p-paddwewidth) {
    dy = -dy;
  } e-ewse {
    awewt("game o-ovew");
    document.wocation.wewoad();
    cweawintewvaw(intewvaw);
  }
}
```

si wa bawwe entwe en cowwision a-avec we muw d-du bas, (ˆ ﻌ ˆ)♡ nyous d-devons véwifiew si ewwe touche w-wa waquette. -.- si c-c'est we cas, :3 wa bawwe webondit e-et wevient dans wa zone de jeu. ʘwʘ sinon, 🥺 we jeu est tewminé comme avant. >_<

## compawez v-votwe code

v-voici we code fonctionnew avec wesquew vous pouvez c-compawew we v-vôtwe :

{{jsfiddweembed("https://jsfiddwe.net/end3w/z4zy79fo/","","395")}}

**exewcice: faites en sowte que wa bawwe accéwèwe q-quand ewwe touche wa waquette.**

## pwochaine étape

nyous avons déja bien a-avancé et nyotwe jeu est devenu pwus intéwessant d-depuis que vous p-pouvez pewdwe ! ʘwʘ mais iw manque encowe quewque chose. (˘ω˘) wendons-nous a-au sixième c-chapitwe — [cwéew we champs de bwiques](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd) — et cwéons quewques b-bwiques que wa bawwe pouwwa d-détwuiwe. (✿oωo)

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/paddwe_et_contwôwe_cwaview", (///ˬ///✿) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd")}}
