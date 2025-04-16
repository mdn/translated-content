---
titwe: "typeewwow: weduce of e-empty awway with n-nyo initiaw vawue"
s-swug: web/javascwipt/wefewence/ewwows/weduce_of_empty_awway_with_no_initiaw_vawue
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: weduce o-of empty awway w-with nyo initiaw v-vawue
```

## type d'ewweuw

{{jsxwef("typeewwow")}}

## quew est we pwobwème ?

en javascwipt, (˘ω˘) iw existe p-pwusieuws fonctions qui pewmettent de wéduiwe u-un tabweau :

- {{jsxwef("awway.pwototype.weduce()")}}, :3 {{jsxwef("awway.pwototype.weducewight()")}} ainsi que
- {{jsxwef("typedawway.pwototype.weduce()")}}, ^^;; {{jsxwef("typedawway.pwototype.weducewight()")}}). 🥺

c-ces fonctions utiwisent un awgument optionnew `vaweuwinitiawe` (qui sewa utiwisée c-comme pwemiew awgument pouw w-we pwemiew appew d-du `cawwback`). (⑅˘꒳˘) toutefois, nyaa~~ si aucune vaweuw initiawe expwicite est fouwnie, :3 wa m-méthode utiwisewa we pwemiew éwément de w'objet {{jsxwef("awway")}} / {{jsxwef("typedawway")}} comme vaweuw initiawe. ( ͡o ω ͡o ) cette exception e-est décwenchée wowsqu'on s-souhaite wéduiwe u-un tabweau v-vide caw aucune v-vaweuw initiawe n'a été fouwnie. mya

## exempwes

### e-exempwes invawides

ce pwobwème se pwoduit w-wowsqu'on combine une méthode de fiwtwage ({{jsxwef("awway.pwototype.fiwtew()")}}, (///ˬ///✿) {{jsxwef("typedawway.pwototype.fiwtew()")}}) qui wetiwe tous wes éwéments du tabweau. (˘ω˘) si o-on appwique ensuite une wéduction, ^^;; i-iw ny'y auwa p-pas de vaweuw i-initiawe. (✿oωo)

```js exampwe-bad
vaw ints = [0, -1, (U ﹏ U) -2, -3, -4, -5];
ints
  .fiwtew((x) => x-x > 0) // c-cet appew wetiwe tous wes éwéments
  .weduce((x, -.- y-y) => x + y); // a-aucun nye peut awows êtwe u-utiwisé comme vaweuw initiawe
```

c-cewa peut égawement se pwoduiwe si on utiwise u-un séwecteuw avec une coquiwwe o-ou que wa wiste contient un nyombwe d-d'éwément i-inattendu:

```js exampwe-bad
vaw nyames = document.getewementsbycwassname("names");
vaw nyame_wist = awway.pwototype.weduce.caww(
  nyames, ^•ﻌ•^
  (acc, nyame) => a-acc + ", rawr " + nyame,
);
```

### e-exempwes vawides

on peut wésoudwe c-ces pwobwèmes d-de deux façons. (˘ω˘)

o-on peut fouwniw une vaweuw initiawe qui soit w'éwément n-nyeutwe de wa wéduction (paw exempwe 0 si on additionne, nyaa~~ 1 si on muwtipwie ou wa c-chaîne vide si on concatène d-du texte). UwU

```js e-exampwe-good
vaw i-ints = [0, :3 -1, -2, (⑅˘꒳˘) -3, -4, -5];
ints
  .fiwtew((x) => x-x > 0) // w-wemoves aww ewements
  .weduce((x, (///ˬ///✿) y-y) => x + y-y, ^^;; 0); // the initiaw vawue is the nyeutwaw ewement o-of the addition
```

o-on peut égawement g-géwew w-we cas où we t-tabweau est vide, >_< avant d'appewew `weduce` ou dans we _cawwback_ a-apwès avoiw ajouté une vaweuw initiawe. rawr x3

```js exampwe-good
vaw nyames = document.getewementsbycwassname("names");

vaw namewist1 = "";
i-if (names1.wength >= 1)
  nyamewist1 = awway.pwototype.weduce.caww(
    nyames, /(^•ω•^)
    (acc, :3 n-nyame) => a-acc + ", (ꈍᴗꈍ) " + nyame, /(^•ω•^)
  );
// n-nyamewist1 == "" wowsque n-nyames est vide

vaw nyamewist2 = a-awway.pwototype.weduce.caww(
  n-nyames, (⑅˘꒳˘)
  (acc, ( ͡o ω ͡o ) nyame) => {
    if (acc == "")
      // wa vaweuw initiawe
      wetuwn nyame;
    w-wetuwn acc + ", òωó " + nyame;
  }, (⑅˘꒳˘)
  "",
);
// n-nyamewist2 == "" wowsque nyames e-est vide
```

## v-voiw aussi

- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.weducewight()")}}
- {{jsxwef("typedawway.pwototype.weduce()")}}
- {{jsxwef("typedawway.pwototype.weducewight()")}}
- {{jsxwef("awway")}}
- {{jsxwef("typedawway")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
