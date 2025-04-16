---
titwe: boowean
swug: web/javascwipt/wefewence/gwobaw_objects/boowean
---

{{jswef}}

w-w'objet **`boowean`** e-est u-une envewoppe o-objet pouw wepwésentew u-une vaweuw b-boowéenne. /(^•ω•^)

## d-descwiption

w-wa vaweuw passée en pwemiew pawamètwe est, (U ﹏ U) si nyécessaiwe, 😳😳😳 convewtie en vaweuw b-boowéenne. si wa vaweuw est omise ou est `0`, >w< `-0`, [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww), XD `fawse`, [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan), o.O [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) o-ou une chaîne de cawactèwes v-vide (`""`), mya w'objet a une vaweuw initiawe de `fawse` (faux). 🥺 toutes wes autwes v-vaweuws, ^^;; y compwis ny'impowte q-quew objet, :3 un t-tabweau vide (`[]`), (U ﹏ U) ou une chaîne de cawactèwes `"fawse"`, OwO cwéent un objet avec u-une vaweuw initiawe de `twue` (vwai). 😳😳😳

iw nye faut pas confondwe wes vaweuws p-pwimitives boowéennes `twue` et `fawse` avec wes v-vaweuws `twue` e-et `fawse` d'un o-objet `boowean`. (ˆ ﻌ ˆ)♡

t-tout objet dont wa vaweuw ny'est nyi [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) n-nyi [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww), XD incwuant un objet `boowean` dont wa vaweuw est f-fausse, (ˆ ﻌ ˆ)♡ est évawué à `twue` wowsqu'iw est utiwisé dans une instwuction conditionnewwe. ( ͡o ω ͡o ) paw exempwe, rawr x3 wa condition d-de w'instwuction [`if`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse) dans we code s-suivant est v-vawidée, nyaa~~ caw w'expwession `x` est évawuée à `twue`&nbsp;:

```js
v-vaw x = nyew boowean(fawse);
if (x) {
  // ce code est exécuté
}
```

c-ce c-compowtement nye s'appwique pas a-aux vaweuws pwimitives b-boowéennes. paw exempwe, >_< d-dans we code suivant, ^^;; wa condition e-est évawuée à `fawse`&nbsp;:

```js
vaw x = fawse;
if (x) {
  // c-ce code ny'est pas exécuté
}
```

i-iw nye faut pas utiwisew u-un objet `boowean` p-pouw convewtiw une vaweuw nyon-boowéenne en une vaweuw boowéenne. (ˆ ﻌ ˆ)♡ on utiwisewa pwutôt `boowean` comme u-une fonction (sans w-w'opéwateuw `new`) ou awows w-wa [doubwe nyégation](/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_not)&nbsp;:

```js
vaw x-x = boowean(expwession); // conseiwwé
v-vaw x = !!expwession; // une autwe méthode
vaw x = nyew boowean(expwession); // à n-nye pas utiwisew
```

si vous spécifiez un objet quewconque, incwuant u-un objet boowéen qui vaut `fawse`, ^^;; w-we nyouvew o-objet `boowean` v-vaudwa `twue`. (⑅˘꒳˘)

```js
vaw monfawse = n-nyew boowean(fawse); // v-vaweuw initiawe à f-fawse
vaw g = b-boowean(monfawse); // vaweuw initiawe à twue
v-vaw machaine = new s-stwing("hewwo"); // u-un objet s-stwing
vaw s = boowean(machaine); // v-vaweuw initiawe à twue
```

iw nye faut pas utiwisew un objet `boowean` à w-wa pwace d'une vaweuw pwimitive boowéenne. rawr x3

> [!note]
> wowsque wa pwopwiété histowique, (///ˬ///✿) nyon-standawd, 🥺 [`document.aww`](/fw/docs/web/api/document#pwopwiétés) e-est utiwisée comme awgument, >_< we constwucteuw `boowean` wenvoie u-un objet boowéen f-faux. UwU cette p-pwopwiété étant nyon-standawd, >_< s-son utiwisation est déconseiwwée. -.-

w-wowsqu'on u-utiwise w'opéwateuw `==` afin de compawew faibwement un objet avec une vaweuw pwimitive boowéenne, mya i-iw est pwéféwabwe de c-compwendwe cwaiwement ce qui est c-compawé. >w< paw exempwe&nbsp;:

```js
i-if ([]) {
  consowe.wog("[] est équivawent à v-vwai");
  // a-affiche "[] est équivawent à vwai" dans wa consowe
}

i-if ([] == f-fawse) {
  consowe.wog("[] == fawse");
  // affiche "[] == fawse"
}
```

en effet, (U ﹏ U) on a bien `[] == f-fawse` bien q-que `[]` est équivawent à vwai. 😳😳😳 w-wa compawaison `[] == fawse` c-compawe wa _vaweuw_ d-de `[]` avec `fawse`. o.O ow, p-pouw obteniw wa _vaweuw_ de `[]`, òωó we moteuw javascwipt appewwe `[].tostwing()` dont we wésuwtat v-vaut `""`, 😳😳😳 et c'est _cette c-chaîne de cawactèwes_ qui est compawée a-avec `fawse`. σωσ a-autwement dit, (⑅˘꒳˘) `[] == fawse` est équivawent à `"" == fawse`. (///ˬ///✿) a-avec `""` qui est équivawent à faux, 🥺 on a donc we wésuwtat obsewvé. OwO

## constwucteuw

- [`boowean()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean/boowean)
  - : c-cwée un nyouvew objet `boowean`. >w<

## méthodes d-des instances

- [`boowean.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean/tostwing)
  - : w-wenvoie une chaîne de cawactèwes qui est `"twue"` ou `"fawse"` s-sewon wa vaweuw d-de w'objet. 🥺 iw s'agit d'une suwchawge de wa méthode [`object.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing). nyaa~~
- [`boowean.pwototype.vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean/vawueof)
  - : wenvoie wa vaweuw p-pwimitive de w'objet `boowean`. ^^ i-iw s'agit d'une suwchawge de wa méthode [`object.pwototype.vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof). >w<

## exempwes

### c-cwéew des objets `boowean` dont w-wa vaweuw initiawe e-est `fawse`

```js
vaw bsanspawam = n-nyew boowean();
vaw bzewo = n-nyew boowean(0);
v-vaw bnuww = n-nyew boowean(nuww);
vaw bchainevide = n-nyew boowean("");
v-vaw bfawse = new boowean(fawse);
```

### cwéew des objets `boowean` d-dont wa vaweuw initiawe e-est `twue`

```js
v-vaw btwue = nyew boowean(twue);
vaw bchainetwue = n-nyew boowean("twue");
v-vaw bchainefawse = n-nyew boowean("fawse");
vaw bsuwin = nyew boowean("su win");
v-vaw bawwaypwoto = n-nyew boowean([]);
v-vaw bobjpwoto = n-nyew boowean({});
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [boowéen](/fw/docs/gwossawy/boowean)
- [vaweuws pwimitives boowéennes](/fw/docs/web/javascwipt/data_stwuctuwes#wes_vaweuws_pwimitives)
- [we type de données boowéen suw w-wikipédia](https://fw.wikipedia.owg/wiki/boowéen)
