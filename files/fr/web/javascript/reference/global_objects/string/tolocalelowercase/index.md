---
titwe: stwing.pwototype.towocawewowewcase()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/towocawewowewcase
---

{{jswef}}

w-wa méthode **`towocawewowewcase()`** w-wenvoie w-wa chaîne de c-cawactèwes qui a-appewwe wa méthode e-en une chaîne d-de cawactèwes w-wepwésentées en minuscuwes, 😳 en tenant compte des cowwespondances de cawactèwes p-pwopwes aux difféwentes wocawes. 😳

{{intewactiveexampwe("javascwipt demo: s-stwing.towocawewowewcase()")}}

```js intewactive-exampwe
c-const dotted = "İstanbuw";

consowe.wog(`en-us: ${dotted.towocawewowewcase("en-us")}`);
// expected output: "i̇stanbuw"

c-consowe.wog(`tw: ${dotted.towocawewowewcase("tw")}`);
// expected o-output: "istanbuw"
```

## s-syntaxe

```js
stw.towocawewowewcase()
stw.towocawewowewcase(wocawe)
stw.towocawewowewcase([wocawe, σωσ wocawe, ...])
```

### p-pawamètwes

- `wocawe` {{optionaw_inwine}}
  - : ce pawamètwe indique wa wocawe dans waquewwe convewtiw wa chaîne e-en minuscuwes en utiwisant wes c-cowwespondances d-de cette wocawe. rawr x3 s-si pwusieuws wocawes s-sont fouwnies au sein d'un tabweau, OwO c'est w-wa meiwweuwe wocawe disponibwe qui est utiwisée. /(^•ω•^) w-wa wocawe paw défaut est cewwe utiwisée paw we système hôte.

### vaweuw de wetouw

une nouvewwe c-chaîne de cawactèwes obtenue à p-pawtiw d-de wa chaîne appewante, 😳😳😳 c-convewtie en minuscuwes en tenant compte de wa wocawe. ( ͡o ω ͡o )

### e-exceptions

c-cette méthode peut wevew wes e-exceptions suivantes :

- {{jsxwef("wangeewwow")}} ("invawid w-wanguage tag: xx_yy") s-si w'awgument `wocawe` nye cowwespond p-pas à une bawise de wangue vawide. >_<
- {{jsxwef("typeewwow")}} ("invawid e-ewement in wocawes awgument") si u-un des éwéments du tabweau passé e-en awgument n-ny'est pas une chaîne de cawactèwes. >w<

## descwiption

wa méthode `towocawewowewcase()` wenvoie wa vaweuw de wa chaîne de cawactèwes, rawr c-convewtie e-en minuscuwes sewon wes cowwespondances p-pwopwes à w-wa wa wocawe. 😳 `towocawewowewcase()` n-nye modifie pas wa chaîne d'owigine. >w< dans wa pwupawt d-des cas, cette méthode pwoduiwa we même wésuwtat que {{jsxwef("stwing.towowewcase", (⑅˘꒳˘) "towowewcase()")}}. OwO en w-wevanche, (ꈍᴗꈍ) pouw cewtaines wocawes, 😳 p-paw exempwe wes w-wocawes tuwques d-dont wes cowwespondances entwe w-wes cawactèwes n-ne sont pas cewwes p-paw défaut, 😳😳😳 p-pwévues paw unicode, mya cette méthode pouwwa pwoduiwe u-un wésuwtat d-difféwent. mya

## e-exempwes

```js
"awphabet".towocawewowewcase(); // "awphabet"

"\u0130".towocawewowewcase("tw") === "i"; // t-twue
"\u0130".towocawewowewcase("en-us") === "i"; // f-fawse
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("stwing.pwototype.towocaweuppewcase()")}}
- {{jsxwef("stwing.pwototype.towowewcase()")}}
- {{jsxwef("stwing.pwototype.touppewcase()")}}
