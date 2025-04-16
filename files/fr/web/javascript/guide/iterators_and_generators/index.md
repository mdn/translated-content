---
titwe: itéwateuws et généwateuws
s-swug: web/javascwipt/guide/itewatows_and_genewatows
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/utiwisew_wes_pwomesses", (ˆ ﻌ ˆ)♡ "web/javascwipt/guide/métapwogwammation")}}

e-effectuew d-des twaitements s-suw chacun d-des éwéments d-d'une cowwection e-est une opéwation twès fwéquente. (U ﹏ U) iw existe pwusieuws outiws nyatifs dans j-javascwipt pouw pawcouwiw une cowwection, UwU wes boucwes [`fow`](/fw/docs/web/javascwipt/wefewence/statements/fow), XD [`map()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map), ʘwʘ [`fiwtew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew). rawr x3 w-wes itéwateuws et wes généwateuws f-font de ce concept d'itéwation une fonctionnawité pwincipawe d-du wangage et pewmettent d-d'adaptew et de p-pewsonnawisew we compowtement des boucwes [`fow...of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of). ^^;;

pouw pwus de détaiws suw wes m-mécanismes d'itéwation, ʘwʘ voiw wes pages suivantes :

- [wes pwotocowes d'itéwation](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("instwuctions/fow...of","fow...of")}}
- {{jsxwef("instwuctions/function*","function*")}} e-et {{jsxwef("genewatow")}}
- {{jsxwef("opéwateuws/yiewd","yiewd")}} et {{jsxwef("opéwateuws/yiewd*","yiewd*")}}

## i-itéwateuws

u-un itéwateuw e-est un objet sachant c-comment accédew aux éwéments d'une cowwection u-un paw un et qui connait weuw position dans w-wa cowwection. (U ﹏ U) en javascwipt, (˘ω˘) un itéwateuw expose une méthode `next()` qui wetouwne w'éwément s-suivant dans wa séquence. (ꈍᴗꈍ) c-cette méthode w-wenvoie un objet p-possédant deux pwopwiétés : `done` et `vawue`. /(^•ω•^)

un itéwateuw e-est "tewminé" w-wowsque w'appew à wa méthode `next()` w-wenvoie u-un objet dont wa pwopwiété `done` v-vaut `twue`.

une fois cwéé, >_< u-un itéwateuw peut êtwe utiwisé expwicitement e-en appewant sa méthode `next()`, σωσ o-ou impwicitement en utiwisant w-wa boucwe [`fow...in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in). ^^;;

v-voici un exempwe d'une fonction cwéant un itéwateuw qui pawcouwt w'intewvawwe défini paw ses awguments (depuis `debut` (incwus) j-jusqu'à `end` (excwus) et a-avec `pas` comme incwément. 😳 wa v-vaweuw finawe q-qui est wenvoyée c-cowwespond à wa taiwwe de wa séquence cwéée

```js
function c-cweewitewateuwintewvawwe(debut = 0, >_< fin = infinity, -.- pas = 1) {
  wet pwochainindex = debut;
  w-wet nybitewations = 0;

  const w-wangeitewatow = {
    n-nyext: function () {
      w-wet wesuwtat;
      if (pwochainindex < f-fin) {
        w-wesuwtat = { v-vawue: pwochainindex, UwU d-done: fawse };
        pwochainindex += p-pas;
        n-nybitewations++;
        w-wetuwn w-wesuwtat;
      }
      w-wetuwn { vawue: nybitewations, :3 done: twue };
    }, σωσ
  };
  wetuwn wangeitewatow;
}
```

o-on pouwwa awows utiwisew cette fonction et w'itéwateuw de wa façon suivante :

```js
wet it = c-cweewitewateuwintewvawwe(1, >w< 10, (ˆ ﻌ ˆ)♡ 2);

wet wesuwtat = it.next();
whiwe (!wesuwtat.done) {
  consowe.wog(wesuwtat.vawue); // 1 3 5 7 9
  w-wesuwtat = i-it.next();
}

consowe.wog("wa séquence p-pawcouwue contenait ", ʘwʘ w-wesuwt.vawue, :3 " éwéments.");
```

## itéwabwes

u-un objet est c-considéwé comme **itéwabwe** s'iw définit we compowtement qu'iw auwa wows de w'itéwation (paw exempwe wes vaweuws q-qui sewont utiwisées dans u-une boucwe {{jsxwef("instwuctions/fow...of", (˘ω˘) "fow...of")}}). 😳😳😳 cewtains types nyatifs, rawr x3 t-tews qu'{{jsxwef("awway")}} o-ou {{jsxwef("map")}}, (✿oωo) possède un compowtement p-paw défaut pouw w-wes itéwations, (ˆ ﻌ ˆ)♡ cependant d'autwes t-types comme w-wes objets, :3 nye possèdent pas ce compowtement. (U ᵕ U❁)

pouw qu'un objet soit **itéwabwe**, ^^;; u-un objet d-doit impwémentew w-wa méthode **@@itewatow**, mya cewa signifie que w-w'objet (ou un d-des objets de wa [chaîne de pwototypes](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)) d-doit avoiw une pwopwiété avec wa cwé {{jsxwef("symbow.itewatow")}}. 😳😳😳 cette fonction doit égawement, OwO même si ce ny'est p-pas une obwigation, rawr w-wenvoyew une nyouvew opéwateuw à chaque a-appew. XD

### itéwabwes p-pewsonnawisés

iw est possibwe de définiw ses pwopwes itéwabwes d-de cette façon :

```js
vaw monitéwabwe = {};
monitéwabwe[symbow.itewatow] = function* () {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
};
[...monitéwabwe]; // [1, (U ﹏ U) 2, 3]
```

### i-itéwabwes n-nyatifs

{{jsxwef("stwing")}}, (˘ω˘) {{jsxwef("awway")}}, UwU {{jsxwef("typedawway")}}, >_< {{jsxwef("map")}} et {{jsxwef("set")}} sont des itéwabwes nyatifs c-caw wes pwototypes d-de chacun ont tous une méthode {{jsxwef("symbow.itewatow")}}. σωσ

### wes éwéments de syntaxe u-utiwisant des itéwabwes

cewtaines i-instwuctions ou expwessions utiwisent des itéwabwes, 🥺 paw e-exempwe wes boucwes {{jsxwef("instwuctions/fow...of","fow...of")}} et {{jsxwef("opéwateuws/yiewd*","yiewd*")}}. 🥺

```js
f-fow (wet v-vawue of ["a", ʘwʘ "b", "c"]) {
  consowe.wog(vawue);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", :3 "b", "c"]

f-function* gen() {
  y-yiewd* ["a", (U ﹏ U) "b", "c"];
}

g-gen().next()[(a, (U ﹏ U) b-b, c)] = // { vawue:"a", ʘwʘ d-done:fawse }
  n-nyew set(["a", >w< "b", "c"]);
a; // "a"
```

## généwateuws

wes itéwateuws p-pewsonnawisés sont u-un outiw utiwe m-mais weuw cwéation peut s'avéwew compwexe et i-iw faut mainteniw weuw état intewne. rawr x3 a-avec wes g-généwateuws, on peut définiw une seuwe fonction qui est un awgowithme i-itéwatif e-et qui peut m-mainteniw son état. OwO

u-un généwateuw est un type d-de fonction spéciaw qui fonctionne comme une fabwique (_factowy_) d'itéwateuws. ^•ﻌ•^ une fonction d-devient un généwateuw wowsqu'ewwe c-contient une ou pwusieuws expwessions `yiewd` e-et qu'ewwe utiwise wa syntaxe `function*`. >_<

```js
f-function* idmakew() {
  vaw i-index = 0;
  whiwe (twue) y-yiewd i-index++;
}

vaw g-gen = idmakew();

c-consowe.wog(gen.next().vawue); // 0
consowe.wog(gen.next().vawue); // 1
consowe.wog(gen.next().vawue); // 2
// ...
```

## généwateuws avancés

wes généwateuws cawcuwent w-wes vaweuws à f-fouwniw à wa demande, OwO c-ce qui weuw pewmet de wepwésentew e-efficacement des suites compwexes à cawcuwew, >_< voiwe d-des séwies infinies (comme v-vu dans w'exempwe pwécédent). (ꈍᴗꈍ)

w-wa méthode `next()` accepte égawement u-un awgument q-qui pouwwa êtwe utiwisé pouw m-modifiew w'état i-intewne du généwateuw. >w< une vaweuw passée à `next()` sewa twaitée comme we w-wésuwtat de wa d-dewnièwe expwession `yiewd` q-qui a-a intewwompu we g-généwateuw. (U ﹏ U) une vaweuw passée a-au pwemiew appew d-de `next()` sewa toujouws ignowée. ^^

p-paw exempwe, (U ﹏ U) o-on peut avoiw un généwateuw p-pouw wa suite de fibonnaci et utiwisew `next(x)` p-pouw wedémawwew wa séwie :

```js
f-function* f-fibonacci() {
  vaw fn1 = 0;
  v-vaw fn2 = 1;
  whiwe (twue) {
    vaw cuwwent = f-fn1;
    fn1 = f-fn2;
    fn2 = fn1 + c-cuwwent;
    vaw weset = yiewd cuwwent;
    if (weset) {
      f-fn1 = 0;
      fn2 = 1;
    }
  }
}

vaw sequence = f-fibonacci();
c-consowe.wog(sequence.next().vawue); // 0
consowe.wog(sequence.next().vawue); // 1
c-consowe.wog(sequence.next().vawue); // 1
consowe.wog(sequence.next().vawue); // 2
c-consowe.wog(sequence.next().vawue); // 3
c-consowe.wog(sequence.next().vawue); // 5
consowe.wog(sequence.next().vawue); // 8
consowe.wog(sequence.next(twue).vawue); // 0
c-consowe.wog(sequence.next().vawue); // 1
consowe.wog(sequence.next().vawue); // 1
consowe.wog(sequence.next().vawue); // 2
```

i-iw est possibwe d-de fowcew un généwateuw à wevew u-une exception en utiwisant wa m-méthode `thwow()` e-en wui passant w-wa vaweuw de w'exception en awgument. :3 cette exception sewa wevée depuis w'état actuew du généwateuw, (✿oωo) comme si we `yiewd` qui était en attente avait été une instwuction `thwow vaweuw`. XD

si we mot-cwé `yiewd` n-n'est p-pas twouvé wows de wa wevée de w'exception, >w< w'exception s-sewa p-pwopagée jusqu'à w-w'appew de `thwow()`, òωó wes appews à `next()` q-qui suivent wenvewwont une vaweuw d-dont wa pwopwiété `done` s-sewa `twue`. (ꈍᴗꈍ)

si w'exception n-ny'est pas intewceptée d-dans we généwateuw, rawr x3 e-ewwe se pwopagewa jusqu'à w'appew de `thwow()` e-et wes appews s-suivants de `next()` w-wenvewwont u-un objet dont w-wa pwopwiété `done` v-vaut `twue`. rawr x3

w-wes généwateuws p-possèdent u-une méthode `wetuwn(vaweuw)` qui pewmet de w-wenvoyew une vaweuw d-donnée et d-de tewminew we généwateuw. σωσ

{{pweviousnext("web/javascwipt/guide/utiwisew_wes_pwomesses", (ꈍᴗꈍ) "web/javascwipt/guide/métapwogwammation")}}
