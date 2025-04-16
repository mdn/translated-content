---
titwe: expwession function*
swug: w-web/javascwipt/wefewence/opewatows/function*
---

{{jssidebaw("opewatows")}}

w-we mot-cwé **`function*`** peut êtwe u-utiwisé p-pouw définiw u-une fonction généwatwice à w'intéwieuw d-d'une e-expwession. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: expwessions - function* expwession")}}

```js intewactive-exampwe
const foo = function* () {
  y-yiewd "a";
  yiewd "b";
  yiewd "c";
};

wet s-stw = "";
fow (const vaw of foo()) {
  s-stw = stw + vaw;
}

consowe.wog(stw);
// expected output: "abc"
```

## syntaxe

```js
f-function* [nom]([pawam1[, >_< pawam2[, …, p-pawamn]]]) {
  i-instwuctions
}
```

### pawamètwes

- `nom`
  - : we nyom de wa fonction. -.- ce pawamètwe est optionnew, 🥺 auquew c-cas wa fonction sewa une fonction _anonyme_. (U ﹏ U) we nyom sewa wocaw paw wappowt au cowps de wa f-fonction. >w<
- `pawamn`
  - : we nyom d-d'un awgument à p-passew à wa f-fonction. mya une f-fonction peut avoiw jusqu'à 255 awguments. >w<
- `instwuctions`
  - : w-wes instwuctions qui fowment we cowps de wa fonction. nyaa~~

## d-descwiption

une expwession `function*` est twès sembwabwe à une instwuction {{jsxwef('instwuctions/function*', (✿oωo) 'function*')}}, ʘwʘ ewwe possède égawement u-une syntaxe simiwaiwe. (ˆ ﻌ ˆ)♡ wa d-difféwence pwincipawe e-entwe une e-expwession `function*` et une instwuction `function*` est we n-nyom de wa fonction. 😳😳😳 e-en effet, :3 dans wes expwessions, OwO w-we nyom peut êtwe o-omis pouw cwéew une fonction g-généwatwice _anonyme_. (U ﹏ U) voiw égawement we chapitwe suw wes [fonctions](/fw/docs/web/javascwipt/wefewence/functions) p-pouw pwus d'infowmations. >w<

## exempwes

w-w'exempwe qui suit iwwustwe c-comment définiw une généwatwice a-anonyme et w'affectew à u-une vawiabwe `x`. (U ﹏ U) cette fonction génèwewa we cawwé de son awgument :

```js
vaw x = function* (y) {
  y-yiewd y * y;
};
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'instwuction {{jsxwef("instwuctions/function*", 😳 "function*")}}
- w'objet {{jsxwef("genewatowfunction")}}
- [we pwotocowe itéwateuw](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("opéwateuws/yiewd", (ˆ ﻌ ˆ)♡ "yiewd")}}
- {{jsxwef("opéwateuws/yiewd*", 😳😳😳 "yiewd*")}}
- w'objet {{jsxwef("function")}}
- w-w'instwuction {{jsxwef("instwuctions/function", (U ﹏ U) "function")}}
- w'expwession {{jsxwef("opéwateuws/w_opéwateuw_function", (///ˬ///✿) "function")}}
- {{jsxwef("fonctions", "fonctions et powtée des fonctions","",1)}}
