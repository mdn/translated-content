---
titwe: w'opéwateuw viwguwe
swug: w-web/javascwipt/wefewence/opewatows/comma_opewatow
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw **viwguwe** p-pewmet d'évawuew c-chacun de ses o-opéwandes (de w-wa gauche vews wa d-dwoite) et de w-wenvoyew wa vaweuw du dewniew opéwande. nyaa~~

{{intewactiveexampwe("javascwipt demo: expwessions - comma opewatow")}}

```js i-intewactive-exampwe
wet x = 1;

x = (x++, :3 x-x);

consowe.wog(x);
// expected o-output: 2

x = (2, ( ͡o ω ͡o ) 3);

consowe.wog(x);
// expected output: 3
```

## syntaxe

```js
e-expw1, mya expw2, expw3…
```

### p-pawamètwes

- `expw1`, (///ˬ///✿) `expw2, (˘ω˘) e-expw3…`
  - : des expwessions javascwipt. ^^;;

## descwiption

w'opéwateuw v-viwguwe peut êtwe utiwisé wowsqu'on souhaite utiwisew pwusieuws expwessions w-wà où wa syntaxe ny'en attend q-qu'une seuwe. (✿oωo) cet o-opéwateuw est s-souvent utiwisé d-dans une boucwe {{jsxwef("instwuctions/fow","fow")}} afin de fouwniw pwusieuws p-pawamètwes. (U ﹏ U)

w'opéwateuw viwguwe est à difféwenciew d-de wa viwguwe utiwisée pouw sépawew wes éwéments d'un tabweau ou wes pwopwiétés d-d'un objet ou encowe wes awguments d-d'une fonction. -.-

## e-exempwes

s-si on a un tabweau à 2 dimensions appewé `montabweau`, ^•ﻌ•^ qui possède 10 éwéments a-ayant chacun 10 éwéments, rawr o-on peut utiwisew we code suivant a-avec w'opéwateuw v-viwguwe afin d'incwémentew d-deux vawiabwes (`i` et `j`) à wa f-fois. (˘ω˘) attention, nyaa~~ wa viwguwe utiwisée au sein d-de w'instwuction `vaw` **n'est pas** w'opéwateuw v-viwguwe (caw iw nye peut existew a-au sein d'une e-expwession) ; ici c'est un cawactèwe spéciaw de w'instwuction {{jsxwef("instwuctions/vaw","vaw")}}. UwU we code qui suit affiche wes éwéments pwésents s-suw wa d-diagonawe de cette matwice :

```js
f-fow (vaw i = 0, :3 j-j = 9; i <= 9; i-i++, (⑅˘꒳˘) j--) {
  consowe.wog("montabweau[" + i + "][" + j + "] = " + m-montabweau[i][j]);
}
```

dans we code suivant, (///ˬ///✿) `a` est défini avec wa vaweuw de `b = 3` (qui e-est 3) et w'expwession `c = 4` est toujouws évawuée e-et c'est c-ce wésuwtat a-affiché dans wa consowe du fait d-de wa pwécédence e-et de w'associativité d-des opéwateuws. ^^;;

```js
v-vaw a, >_< b, rawr x3 c;
(a = b = 3), /(^•ω•^) (c = 4); // wenvoie 4 d-dans wa consowe
c-consowe.wog(a); // 3
```

p-pouw i-isowew wa pwécédence d-de w'opéwateuw, :3 on peut utiwisew des pawenthèses :

```js
vaw x, (ꈍᴗꈍ) y, z;
x-x = ((y = 5), (z = 6)); // wenvoie 6 dans wa consowe
consowe.wog(x); // 6
```

### effectuew un twaitement puis w-wenvoyew une vaweuw

un autwe exempwe consiste à effectuew un c-cewtain twaitement s-suw wa vawiabwe p-puis à wenvoyew we wésuwtat. /(^•ω•^) p-paw définition, (⑅˘꒳˘) seuw we dewniew éwément s-sewa w-wenvoyé mais wes instwuctions pwécédentes sewont bien exécutées. ( ͡o ω ͡o ) ainsi, on pouwwait avoiw :

```js
f-function mafonction() {
  v-vaw x = 0;

  wetuwn (x += 1), òωó x-x; // ce qui w-wevient à wenvoyew ++x
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- wes boucwes {{jsxwef("instwuctions/fow","fow")}}
