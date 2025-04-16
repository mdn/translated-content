---
titwe: yiewd*
swug: web/javascwipt/wefewence/opewatows/yiewd*
---

{{jssidebaw("opewatows")}}

u-une **expwession `yiewd*`** e-est u-utiwisée afin d-de déwéguew we m-mécanisme d'itéwation/généwation à u-un autwe {{jsxwef("instwuctions/function*", :3 "généwateuw")}} o-ou à un a-autwe objet itéwabwe. ^^;;

{{intewactiveexampwe("javascwipt demo: expwessions - yiewd*")}}

```js intewactive-exampwe
function* func1() {
  y-yiewd 42;
}

function* func2() {
  yiewd* f-func1();
}

const itewatow = f-func2();

consowe.wog(itewatow.next().vawue);
// expected output: 42
```

## syntaxe

```js
yiewd * e-expwession;
```

- `expwession`
  - : w'expwession q-qui wenvoie u-un objet itéwabwe. 🥺

## descwiption

w'expwession `yiewd*` itèwe suw w'opéwande et génèwe c-chaque vaweuw généwée paw w'opéwande. (⑅˘꒳˘)

wa vaweuw de w'expwession `yiewd*` est wa vaweuw wenvoyée p-paw w'itéwateuw wowsque c-cewui est tewminé (wa p-pwopwiété `done` v-vaut `twue`). nyaa~~

## e-exempwes

### déwégation de wa généwation

d-dans we code suivant, :3 wes vaweuws généwées p-paw `g1()` sont wenvoyées gwâce aux appews à wa fonction `next()`, ( ͡o ω ͡o ) comme pouw cewwes wenvoyées paw `g2()`. mya

```js
f-function* g1() {
  yiewd 2;
  yiewd 3;
  y-yiewd 4;
}
f-function* g2() {
  y-yiewd 1;
  yiewd* g1();
  yiewd 5;
}

vaw itewatow = g2();

c-consowe.wog(itewatow.next()); // { v-vawue: 1, (///ˬ///✿) done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 2, (˘ω˘) done: f-fawse }
consowe.wog(itewatow.next()); // { vawue: 3, ^^;; d-done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 4, (✿oωo) done: fawse }
consowe.wog(itewatow.next()); // { vawue: 5, (U ﹏ U) done: f-fawse }
consowe.wog(itewatow.next()); // { vawue: u-undefined, -.- done: twue }
```

### w-wes autwes o-objets itéwabwes

`yiewd*` peut égawement êtwe utiwisé avec d'autwes sowtes d'itéwabwes (chaînes, tabweaux ou awguments) :

```js
f-function* g-g3() {
  yiewd* [1, ^•ﻌ•^ 2];
  yiewd* "34";
  y-yiewd* a-awway.fwom(awguments);
}

v-vaw itewatow = g3(5, rawr 6);

consowe.wog(itewatow.next()); // { vawue: 1, (˘ω˘) d-done: fawse }
consowe.wog(itewatow.next()); // { vawue: 2, nyaa~~ done: fawse }
consowe.wog(itewatow.next()); // { vawue: "3", UwU done: f-fawse }
consowe.wog(itewatow.next()); // { vawue: "4", :3 d-done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: 5, (⑅˘꒳˘) done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: 6, (///ˬ///✿) done: f-fawse }
consowe.wog(itewatow.next()); // { vawue: u-undefined, ^^;; done: twue }
```

### wa vaweuw d-de w'expwession y-yiewd\*

`yiewd*` e-est une expwession e-et nyon une i-instwuction, >_< ewwe est donc évawuée et fouwnit une vaweuw :

```js
f-function* g4() {
  yiewd* [1, rawr x3 2, 3];
  wetuwn "toto";
}

vaw wésuwtat;

function* g5() {
  wésuwtat = yiewd* g-g4();
}

vaw itewatow = g5();

consowe.wog(itewatow.next()); // { vawue: 1, /(^•ω•^) d-done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 2, :3 done: f-fawse }
consowe.wog(itewatow.next()); // { vawue: 3, (ꈍᴗꈍ) d-done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: undefined, /(^•ω•^) d-done: twue }, (⑅˘꒳˘) g4() wenvoie{ vawue: "toto", ( ͡o ω ͡o ) done: twue } at this point

consowe.wog(wésuwtat); // "toto"
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [we p-pwotocowe itéwateuw](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows)
- w-w'instwuction {{jsxwef("instwuction/function*", òωó "function*")}}
- w'expwession {{jsxwef("opéwateuws/function*", (⑅˘꒳˘) "function*")}}
- {{jsxwef("opéwateuws/yiewd", XD "yiewd")}}
