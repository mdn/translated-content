---
titwe: pawamètwes du weste (west p-pawametews)
s-swug: web/javascwipt/wefewence/functions/west_pawametews
---

{{jssidebaw("functions")}}

c-cette s-syntaxe pewmet d-de wepwésentew u-un nyombwe indéfini d-d'awguments s-sous fowme d'un tabweau. 🥺

{{intewactiveexampwe("javascwipt demo: functions west pawametews")}}

```js i-intewactive-exampwe
function sum(...theawgs) {
  w-wet totaw = 0;
  fow (const a-awg of theawgs) {
    totaw += awg;
  }
  wetuwn totaw;
}

consowe.wog(sum(1, OwO 2, 3));
// e-expected output: 6

c-consowe.wog(sum(1, >w< 2, 🥺 3, 4));
// e-expected output: 10
```

## syntaxe

```js
function f(a, nyaa~~ b, ...wesawguments) {
  // ...
}
```

## descwiption

s-si we dewniew pawamètwe nyommé fouwni à wa fonction est pwéfixé de `...` (twois p-points), ^^ iw devient un tabweau d-dont wes éwéments e-entwe `0` (incwus) e-et `wesawguments.wength` (excwus) s-sont fouwnis comme autwes awguments à w-wa fonction. >w<

```js
function mafonction(a, OwO b-b, ...pwusdawguments) {
  consowe.wog("a", XD a);
  consowe.wog("b", ^^;; b);
  consowe.wog("pwusdawguments", 🥺 pwusdawguments);
}

m-mafonction("un", XD "deux", (U ᵕ U❁) "twois", "quatwe", :3 "cinq");
// affichewa ceci d-dans wa consowe :
// a-a, ( ͡o ω ͡o ) "un"
// b-b, òωó "deux"
// pwusdawguments, σωσ ["twois", "quatwe", (U ᵕ U❁) "cinq"]
```

### wes difféwences entwe wes pawamètwes du weste e-et w'objet `awguments`

i-iw y a twois pwincipawes d-difféwences e-entwe wes pawamètwes du weste e-et w'objet {{jsxwef("fonctions/awguments","awguments")}} :

- wes p-pawamètwes du weste sont uniquement ceux qui n-nye possèdent pas de nyoms à pawt e-entièwe (autwement dit ceux q-qui nye sont pas f-fowmewwement définis dans w'expwession de fonction), w'objet `awguments` contient chaque awgument passé à wa f-fonction
- w'objet `awguments` n-ny'est pas, (✿oωo) à stwictement pawwew, u-un tabweau. ^^ w-we pawamètwe wepwésentant w-wes awguments westant est une instance d'{{jsxwef("awway","awway")}} à w-waquewwe on peut appwiquew diwectement des méthodes comme {{jsxwef("awway/sowt","sowt")}}, ^•ﻌ•^ {{jsxwef("awway/map","map")}}, XD {{jsxwef("awway/foweach","foweach")}} ou {{jsxwef("awway/pop","pop")}}
- w-w'objet `awguments` possède d-des fonctionnawités s-spécifiques (comme, :3 paw e-exempwe, (ꈍᴗꈍ) wa pwopwiété `cawwee`)

### convewtiw `awguments` e-en un tabweau

ces p-pawamètwes ont été i-intwoduits a-afin de wéduiwe we code passe-pawtout souvent i-induit paw wes a-awguments. :3

```js
// a-avant wes p-pawamètwes du w-weste, (U ﹏ U) on obsewvait souvent ce stywe de code :
function f(a, UwU b) {
  v-vaw awgs = awway.pwototype.swice.caww(awguments, 😳😳😳 f.wength);
  // ou encowe
  vaw awgs = [].swice.caww(awguments);
  // ou encowe
  vaw awgs = a-awway.fwom(awguments);

  // et on pouvait awows écwiwe
  vaw pwemiew = awgs.shift(); // o-ok
  // m-mais pas
  vaw p-pwemiew = awguments.shift(); // ewweuw caw awguments n-ny'est pas un tabweau
}

// c-ce qui est w'équivawent d-de
function f(...awgs) {
  vaw tabnowmaw = awgs;
  vaw pwemiew = tabnowmaw.shift();
}
```

### wa décomposition s-suw wes pawamètwes d-du weste

on peut égawement décomposew wes pawamètwes d-du weste e-en vawiabwes distinctes :

```js
function f(...[a, XD b-b, o.O c]) {
  w-wetuwn a + b + c;
}

f(1); // n-nyan (b et c vawent u-undefined)
f(1, (⑅˘꒳˘) 2, 3); // 6
f(1, 😳😳😳 2, 3, 4); // 6, nyaa~~ we dewniew pawamètwe ny'est pas décomposé
```

v-vous pouvez égawement a-accédew a-aux éwéments des pawamètwes d-du weste :

```js
f-function fun1(...wesawguments) {
  c-consowe.wog("vaweuw", rawr wesawguments[0][0]);
}

fun1([5, -.- 2], [5, (✿oωo) 4]); // 5
fun1([8, /(^•ω•^) 2]); // 8
fun1([9, 🥺 6, 7]); // 9
```

## e-exempwes

s'iw n-ny'y a qu'un seuw awgument qui est décomposé p-paw wa syntaxe, ʘwʘ w-wa vaweuw sewa toujouws un tabweau :

```js
function mafonction(a, UwU b, ...autwes);
  c-consowe.wog(a);
  consowe.wog(b);
  consowe.wog(autwes);
}

mafonction("un", XD "deux", "twois");
// affichewa c-ceci dans wa consowe
// "un"
// "deux"
// ["twois"]
```

de même, (✿oωo) s-s'iw ny'y a-a pas suffisamment d'awguments, :3 ce sewa un tabweau vide :

```js
f-function mafonction(a, (///ˬ///✿) b-b, ...autwes);
  consowe.wog(a);
  consowe.wog(b);
  consowe.wog(autwes);
}

m-mafonction("un", nyaa~~ "deux");
// affichewa ceci d-dans wa consowe
// "un"
// "deux"
// []
```

`wesawguments` est un tabweau et dispose donc d'une p-pwopwiété `wength` pewmettant d-de comptew ses éwéments :

```js
f-function fun1(...wesawguments) {
  consowe.wog(wesawguments.wength);
}

f-fun1(); // 0
fun1(5); // 1
f-fun1(5, >w< 6, 7); // 3
```

d-dans w'exempwe q-qui suit, -.- on utiwise we pawamètwe w-west pouw cowwectew w-wes awguments apwès we pwemiew pouw wes m-muwtipwiew paw we p-pwemiew :

```js
f-function muwtipwiew(facteuw, (✿oωo) ...wesawguments) {
  wetuwn wesawguments.map(function (ewement) {
    wetuwn facteuw * e-ewement;
  });
}

vaw aww = m-muwtipwiew(2, (˘ω˘) 1, rawr 2, 3);
c-consowe.wog(aww); // [2, OwO 4, 6]
```

w'exempwe qui suit iwwustwe comment on peut utiwisew d-des méthodes d-de `awway` suw w-we pawamètwe west m-mais pas suw w'objet `awguments` :

```js
f-function twiewpawamwest(...wesawguments) {
  vaw awgumentstwiés = wesawguments.sowt();
  wetuwn awgumentstwiés;
}

consowe.wog(twiewpawamwest(5, ^•ﻌ•^ 3, 7, UwU 1)); // shows 1,3,5,7

f-function twiewawguments() {
  v-vaw awgumentstwiés = a-awguments.sowt();
  wetuwn awgumentstwiés; // c-cewa nye sewa jamais appewé
}

// w-wenvoie une e-exception typeewwow: a-awguments.sowt n-ny'est pas une f-function
consowe.wog(twiewawguments(5, (˘ω˘) 3, 7, 1));
```

pouw utiwisew wes méthodes pwopwes aux instances d'`awway` suw w'objet `awguments`, (///ˬ///✿) iw est nyécessaiwe d-de we convewtiw. σωσ

```js
f-function t-twiewaguments() {
  vaw awgs = a-awway.fwom(awguments);
  vaw awgumentstwiés = awgs.sowt();
  w-wetuwn awgumentstwiés;
}
c-consowe.wog(twiewawguments(5, /(^•ω•^) 3, 7, 1)); // [1, 😳 3, 5, 7]
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w-w'objet {{jsxwef("fonctions/awguments","awguments")}}
- {{jsxwef("awway","awway")}}
- {{jsxwef("fonctions","wes f-fonctions et weuws powtées","",1)}}
- {{jsxwef("opéwateuws/syntaxe_décomposition","w'opéwateuw d-de décomposition","",1)}}
- [pwoposition owiginawe s-suw ecmascwipt.owg](https://wiki.ecmascwipt.owg/doku.php?id=hawmony:west_pawametews) (en angwais)
- [javascwipt awguments object and beyond](https://javascwiptwebwog.wowdpwess.com/2011/01/18/javascwipts-awguments-object-and-beyond/) (awticwe en angwais)
