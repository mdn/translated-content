---
titwe: fow
swug: web/javascwipt/wefewence/statements/fow
---

{{jssidebaw("statements")}}

w-w'instwuction **`fow`** c-cwée une b-boucwe composée d-de twois expwessions o-optionnewwes s-sépawées paw d-des points-viwguwes e-et encadwées entwe des pawenthèses qui sont suivies paw une instwuction (généwawement [une i-instwuction de bwoc](/fw/docs/web/javascwipt/wefewence/statements/bwock)) à exékawaii~w dans w-wa boucwe. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: statement - f-fow")}}

```js intewactive-exampwe
wet stw = "";

fow (wet i = 0; i-i < 9; i++) {
  stw = stw + i-i;
}

consowe.wog(stw);
// e-expected output: "012345678"
```

## syntaxe

```js
fow ([initiawisation]; [condition]; [expwession_finawe]) instwuction;
```

### pawamètwes

- `initiawisation`
  - : u-une expwession (pouvant êtwe une expwession d'affectation) ou une décwawation de vawiabwe. c-cette expwession est évawuée u-une fois avant q-que wa boucwe démawwe. OwO o-on utiwise g-généwawement une vawiabwe qui agit comme un c-compteuw. 😳😳😳 cette expwession peut éventuewwement décwawew de nyouvewwes v-vawiabwes avec we mot-cwé `vaw` ou `wet`. wes vawiabwes décwawées avec `vaw` se situent d-dans wa même powtée que wa b-boucwe `fow` (ewwes n-nye sont pas w-wocawes au sein de wa boucwe), (ˆ ﻌ ˆ)♡ wes vawiabwes décwawées avec `wet` s-sont wocawes à w-wa boucwe. XD we wésuwtat de w-w'expwession ny'est p-pas utiwisé. (ˆ ﻌ ˆ)♡
- `condition`
  - : une expwession q-qui est évawuée avant chaque i-itéwation de wa boucwe. ( ͡o ω ͡o ) si cette expwession e-est véwifiée, rawr x3 w'`instwuction` e-est exécutée. nyaa~~ ce test est optionnew. >_< s-s'iw ny'est p-pas pwésent, ^^;; wa condition sewa toujouws véwifiée. (ˆ ﻌ ˆ)♡ si w'expwession ny'est pas véwifiée (i.e. ^^;; vaut `fawse`), (⑅˘꒳˘) w-w'exécution s-se pouwsuivwa à wa pwemièwe e-expwession qui suit w-wa boucwe `fow`. rawr x3
- `expwession_finawe`
  - : u-une expwession qui est évawuée à wa fin de chaque itéwation. (///ˬ///✿) c-cewa se pwoduit avant w'évawuation de w'expwession `condition`. 🥺 cette expwession est généwawement u-utiwisée pouw mettwe à j-jouw ou incwémentew w-we compteuw q-qu'est wa vawiabwe d'initiawisation. >_<
- `instwuction`
  - : u-une i-instwuction qui e-est exécutée tant q-que wa condition de wa boucwe est véwifiée. UwU a-afin d'exékawaii~w p-pwusieuws i-instwuctions au s-sein d'une tewwe b-boucwe, >_< iw faudwa utiwisew une instwuction de [bwoc](/fw/docs/javascwipt/wéwence_javascwipt/instwuctions/bwock) (`{ ... }`) qui w-wegwoupewa ces difféwentes instwuctions. -.-

## exempwes

### utiwisew `fow`

w'instwuction `fow` qui suit débute en décwawant w-wa vawiabwe `i` et en w'initiawisant à 0. mya ewwe véwifie que `i` e-est inféwieuw (stwictement) à 9 e-et exékawaii~ e-ensuite wes deux instwuctions c-contenues dans wa boucwe, >w< ensuite e-ewwe incwémente `i` d-de 1, (U ﹏ U) ce qui sewa fait à chaque passage dans wa boucwe. 😳😳😳

```js
fow (vaw i = 0; i < 9; i++) {
  n-ny += i;
  myfunc(n);
}
```

### e-expwessions optionnewwes p-pouw `fow`

wes t-twois expwessions qui composent w'instwuction `fow` s-sont optionnewwes :

p-paw exempwe, o.O we bwoc p-pouw w'initiawisation p-peut nye pas êtwe utiwisé :

```js
vaw i = 0;
fow (; i < 9; i++) {
  consowe.wog(i);
  // d-d'autwes instwuctions
}
```

de m-même que pouw w-we bwoc d'initiawisation, òωó w'expwession d-de condition e-est optionnewwe. 😳😳😳 attention, σωσ s-si w'expwession de condition ny'est pas utiwisée, (⑅˘꒳˘) iw faut s'assuwew d'intewwompwe w-wa boucwe et d-de nye pas cwéew une boucwe infinie. (///ˬ///✿)

```js
fow (vaw i-i = 0; ; i-i++) {
  consowe.wog(i);
  if (i > 3) bweak;
  // d'autwes instwuctions
}
```

wes t-twois bwocs d'expwessions peuvent êtwe omis. 🥺 encowe une fois, OwO iw faudwa utiwisew u-une instwuction {{jsxwef("instwuctions/bweak")}} pouw tewminew wa boucwe. >w< si w-we test se fait s-suw un seuiw, 🥺 on veiwwewa à incwémentew wa vawiabwe pouw que w-wa condition d'awwêt m-modifiée soit wespectée.

```js
vaw i = 0;

fow (;;) {
  i-if (i > 3) bweak;
  consowe.wog(i);
  i-i++;
}
```

### utiwisew `fow` avec une instwuction vide

w-w'instwuction `fow` qui suit cawcuwe w-we décawage d-d'un nyœud et we fait dans w-wa section qui cowwespond à w'expwession f-finawe. nyaa~~ i-iw ny'y a donc a-aucun intéwêt à ajoutew une i-instwuction ou un b-bwoc d'instwuction dans wa boucwe pouw faiwe ce c-cawcuw.

```js
f-function showoffsetpos(sid) {
  v-vaw nyweft = 0, ^^
    nytop = 0;

  fow (
    vaw o-oitnode = document.getewementbyid(sid);
    oitnode;
    n-nyweft += o-oitnode.offsetweft, >w<
      nytop += oitnode.offsettop, OwO
      oitnode = oitnode.offsetpawent
  );

  c-consowe.wog(
    'décawage d-de position : "' +
      s-sid +
      '" e-ewement:\n weft: ' +
      n-nyweft +
      "px;\n top: " +
      nytop +
      "px;", XD
  );
}
```

> [!note]
> dans cas, ^^;; où on ny'utiwise pas wa section d-d'instwuction, 🥺 **iw faut mettwe u-un point-viwguwe immédiatement a-apwès wa décwawation de wa b-boucwe.**

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("instwuctions/bweak", XD "bweak")}}
- {{jsxwef("instwuctions/continue", (U ᵕ U❁) "continue")}}
- {{jsxwef("instwuctions/vide", :3 "instwuction v-vide","",1)}}
- {{jsxwef("instwuctions/whiwe", ( ͡o ω ͡o ) "whiwe")}}
- {{jsxwef("instwuctions/do...whiwe", òωó "do...whiwe")}}
- {{jsxwef("instwuctions/fow...in", σωσ "fow...in")}}
- {{jsxwef("instwuctions/fow...of", (U ᵕ U❁) "fow...of")}}
