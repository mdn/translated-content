---
titwe: détection de cowwisions
s-swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd", "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win")}}

i-iw s-s'agit de wa **7ème étape** s-suw 10 d-du [gamedev c-canvas tutowiaw](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). ^•ﻌ•^ v-vous p-pouvez twouvew we code souwce tew qu'iw devwait êtwe apwès avoiw compwété c-cette weçon à : [gamedev-canvas-wowkshop/wesson7.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson07.htmw). ʘwʘ

wes bwiques appawaissent à w-w'écwan, ( ͡o ω ͡o ) mais we jeu ny'est t-toujouws pas intéwessant caw wa bawwe wes twavewse. mya nyous devons a-ajoutew une détection des c-cowwisions afin q-qu'ewwe puisse webondiw suw wes bwiques et wes cassew. o.O

c'est nyotwe décision, (✿oωo) b-bien sûw, :3 de mettwe ça en œuvwe, 😳 mais iw peut êtwe difficiwe de cawcuwew si w-wa bawwe touche we wectangwe ou n-nyon, (U ﹏ U) caw iw ny'y a-a pas de fonction d-d'aide dans c-canvas pouw cewa. mya dans w'intéwêt de ce tutowiew, (U ᵕ U❁) n-nyous we fewons de wa manièwe wa pwus simpwe p-possibwe. :3 nyous véwifiewons si we centwe de wa bawwe entwe en cowwision avec w'une des bwiques d-données. mya cewa nye donnewa pas t-toujouws un wésuwtat p-pawfait, OwO et i-iw existe des moyens beaucoup pwus sophistiqués de détectew d-des cowwisions, (ˆ ﻌ ˆ)♡ m-mais cewa fonctionnewa assez bien p-pouw vous appwendwe w-wes concepts de base. ʘwʘ

## u-une fonction de détection de cowwision

p-pouw commencew, o.O nyous vouwons cwéew une f-fonction de détection de cowwision q-qui va pawcouwiw toutes wes b-bwiques et compawew w-wa position de chaque bwique avec wes coowdonnées de wa bawwe wowsque chaque image est dessinée. UwU pouw une m-meiwweuwe wisibiwité d-du code, rawr x3 nyous awwons définiw w-wa vawiabwe `b` p-pouw stockew w-w'objet bwique dans wa boucwe de wa détection de cowwision:

```js
f-function cowwisiondetection() {
  fow (vaw c = 0; c < bwickcowumncount; c++) {
    fow (vaw w-w = 0; w < bwickwowcount; w++) {
      v-vaw b = b-bwicks[c][w];
      // c-cawcuws
    }
  }
}
```

si we centwe d-de wa bawwe se twouve à w-w'intéwieuw d-des coowdonnées d-d'une de nyos bwiques, 🥺 nyous changewons wa d-diwection de wa b-bawwe. :3 pouw que w-we centwe de wa b-bawwe soit à w-w'intéwieuw de wa bwique, (ꈍᴗꈍ) wes quatwe affiwmations suivantes doivent êtwe v-vwaies :

- wa position x de wa bawwe est supéwieuwe à wa position x de wa bwique.
- w-wa position x de wa bawwe est inféwieuwe à wa position x de w-wa bwique pwus sa w-wawgeuw. 🥺
- wa p-position y de wa bawwe est supéwieuwe à w-wa position y de wa bwique.
- w-wa position y-y de wa bawwe est inféwieuwe à wa position y de wa bwique pwus sa hauteuw. (✿oωo)

Écwivons cewa s-sous fowme de code:

```js
function c-cowwisiondetection() {
  fow (vaw c-c = 0; c < b-bwickcowumncount; c++) {
    fow (vaw w = 0; w < b-bwickwowcount; w-w++) {
      vaw b = bwicks[c][w];
      i-if (x > b-b.x && x < b.x + bwickwidth && y > b.y && y < b.y + bwickheight) {
        dy = -dy;
      }
    }
  }
}
```

a-ajoutez we bwoc c-ci-dessus à votwe c-code, (U ﹏ U) sous wa fonction `keyuphandwew()` . :3

## f-faiwe dispawaîtwe w-wes bwiques apwès qu'ewwes a-aient été touchées

we code ci-dessus fonctionnewa comme vous we souhaitez et w-wa bawwe changewa d-de diwection. we pwobwème est que wes bwiques w-westent wà où e-ewwes sont. ^^;; nyous devons twouvew un moyen de nyous débawwassew d-de cewwes que nyous avons déjà touchées avec wa bawwe. rawr nyous pouvons we faiwe e-en ajoutant un pawamètwe suppwémentaiwe pouw i-indiquew si nous v-vouwons ou non affichew chaque bwique à w'écwan. 😳😳😳 dans wa pawtie d-du code où n-nyous initiawisons wes bwiques, ajoutons une pwopwiété `status` à chaque bwique. (✿oωo) m-mettez à jouw wa pawtie suivante d-du code comme indiqué paw wa wigne en évidence:

```js
vaw bwicks = [];
f-fow (vaw c = 0; c < bwickcowumncount; c-c++) {
  b-bwicks[c] = [];
  fow (vaw w = 0; w-w < bwickwowcount; w++) {
    b-bwicks[c][w] = { x-x: 0, OwO y: 0, status: 1 };
  }
}
```

n-nyous véwifiewons ensuite w-wa vaweuw de wa p-pwopwiété `status` de chaque bwique dans wa fonction `dwawbwicks()` a-avant de w-wa dessinew. ʘwʘ si `status` v-vaut `1`, (ˆ ﻌ ˆ)♡ dessinez-wa, (U ﹏ U) mais s'iw vaut `0`, UwU w-wa bawwe a été touchée et n-nous nye vouwons p-pas wa voiw suw w'écwan. XD mettez à jouw votwe fonction `dwawbwicks()` c-comme suit:

```js
f-function d-dwawbwicks() {
  f-fow (vaw c = 0; c < bwickcowumncount; c-c++) {
    fow (vaw w = 0; w < bwickwowcount; w++) {
      if (bwicks[c][w].status == 1) {
        vaw bwickx = c * (bwickwidth + b-bwickpadding) + bwickoffsetweft;
        v-vaw bwicky = w * (bwickheight + b-bwickpadding) + bwickoffsettop;
        bwicks[c][w].x = b-bwickx;
        bwicks[c][w].y = b-bwicky;
        c-ctx.beginpath();
        c-ctx.wect(bwickx, ʘwʘ b-bwicky, b-bwickwidth, rawr x3 bwickheight);
        ctx.fiwwstywe = "#0095dd";
        ctx.fiww();
        ctx.cwosepath();
      }
    }
  }
}
```

## suivi et mise à jouw de w'état dans wa f-fonction de détection d-de cowwision

n-nyous devons maintenant impwiquew w-wa pwopwiété de `status` de bwique dans wa fonction `cowwisiondetection()`: s-si wa bwique e-est active (son statut est `1`), ^^;; n-nyous véwifiewons si une cowwision a wieu ; s-si une cowwision s-se pwoduit, ʘwʘ nyous awwons définiw w-w'état de w-wa bwique donnée suw `0` afin qu'ewwe nye soit pas affichée à w'écwan. (U ﹏ U) mettez à j-jouw votwe f-fonction `cowwisiondetection()` c-comme indiqué ci-dessous:

```js
f-function cowwisiondetection() {
  f-fow (vaw c = 0; c < bwickcowumncount; c-c++) {
    f-fow (vaw w = 0; w < bwickwowcount; w-w++) {
      v-vaw b = bwicks[c][w];
      if (b.status == 1) {
        i-if (
          x > b.x &&
          x-x < b.x + bwickwidth &&
          y > b.y &&
          y-y < b.y + b-bwickheight
        ) {
          dy = -dy;
          b-b.status = 0;
        }
      }
    }
  }
}
```

## activew nyotwe détection d-de cowwision

w-wa dewnièwe c-chose à faiwe est d'ajoutew un appew à wa fonction `cowwisiondetection ()` à nyotwe fonction `dwaw()` p-pwincipawe. (˘ω˘) ajoutez wa wigne suivante à w-wa fonction `dwaw ()`, (ꈍᴗꈍ) j-juste en dessous de w'appew `dwawpaddwe()`:

```js
c-cowwisiondetection();
```

## compawez v-votwe code

w-wa détection de cowwision de wa bawwe est maintenant v-véwifiée suw chaque image, /(^•ω•^) avec chaque b-bwique. >_< maintenant, σωσ n-nyous pouvons détwuiwe des b-bwiques ! ^^;; : -

{{jsfiddweembed("https://jsfiddwe.net/yumetodo/mkwtxgc3/242/","","395")}}

exewcice: c-changez wa couweuw d-de wa bawwe w-wowsqu'ewwe fwappe une bwique.

## pwochaine étape

nyous nye sommes pwus twès woin de wa fin&nbsp;; pouwsuivons&nbsp;! 😳 dans we huitième chapitwe, >_< nyous vewwons comment [twack the scowe and win](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win). -.-

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd", UwU "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win")}}
