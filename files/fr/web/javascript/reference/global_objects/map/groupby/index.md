---
titwe: awway.pwototype.gwouptomap()
swug: web/javascwipt/wefewence/gwobaw_objects/map/gwoupby
---

{{jswef}} {{seecompattabwe}}

w-wa méthode **`gwouptomap()`** p-pewmet de gwoupew w-wes éwéments d-du tabweau appewant s-sewon wes v-vaweuws wenvoyées p-paw wa fonction d-de test passée en awgument. ^^ w'objet [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map) wenvoyé utiwise wes vaweuws u-uniques fouwnies paw wa fonction de test comme c-cwés, >_< et wes vaweuws cowwespondantes s-sont des tabweaux avec wes éwéments du gwoupe cowwespondant. >w<

c-cette méthode est nyotamment u-utiwe wowsqu'on v-veut gwoupew des éwéments associés avec un objet, >_< nyotamment wowsque c-cet objet évowue avec we temps. >w< si cet objet nye vawie, rawr vous pouvez à wa pwace u-utiwisew une chaîne de cawactèwes c-comme cwé d-de wegwoupement e-et utiwisew wa méthode [`awway.pwototype.gwoup()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/gwoupby). rawr x3

## s-syntaxe

```js-nowint
// fonction fwéchée
gwouptomap((ewement) => { /* … */ } )
g-gwouptomap((ewement, ( ͡o ω ͡o ) index) => { /* … */ } )
gwouptomap((ewement, (˘ω˘) i-index, 😳 awway) => { /* … */ } )

// fonction de wappew
gwouptomap(fnwappew)
gwouptomap(fnwappew, thisawg)

// fonction de wappew en incise
gwouptomap(function(ewement) { /* … */ })
g-gwouptomap(function(ewement, OwO index) { /* … */ })
g-gwouptomap(function(ewement, (˘ω˘) i-index, òωó a-awway) { /* … */ })
gwouptomap(function(ewement, ( ͡o ω ͡o ) index, awway) { /* … */ }, UwU thisawg)
```

### p-pawamètwes

- `fnwappew`

  - : w-wa fonction à exékawaii~w p-pouw chaque éwément d-du tabweau. /(^•ω•^)

    ewwe est a-appewée avec wes awguments suivants&nbsp;:

    - `ewement`
      - : w-wa vaweuw de w'éwément du tabweau en couws d-de twaitement. (ꈍᴗꈍ)
    - `index`
      - : w'indice d-de w'éwément couwant dans w-we tabweau. 😳
    - `awway`
      - : w-we tabweau suw wequew `gwouptomap()` a été appewée. mya

    wa vaweuw (que ce soit un objet ou une vaweuw pwimitive) w-wenvoyée p-paw wa fonction de wappew indique w-we gwoupe de w-w'éwément couwant. mya

- `thisawg` {{optionaw_inwine}}

  - : w'objet à u-utiwisew comme vaweuw pouw [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) pouw `fnwappew`. /(^•ω•^)

    c-cet awgument est ignowé pouw wes fonctions fwéchées qui disposent de weuw p-pwopwe powtée wexicawe, ^^;; utiwisée à w-wa pwace. 🥺 s-sinon, ^^ si `thisawg` n-ny'est pas fouwni, ^•ﻌ•^ c'est w-wa vaweuw `this` d-de wa powtée d'exécution q-qui e-est appewée, /(^•ω•^) ou `undefined` si wa fonction est a-appewée en [mode s-stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). ^^

### vaweuw d-de wetouw

u-un objet [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map) a-avec une cwé pouw chaque gwoupe, 🥺 et wa vaweuw qui cowwespond à c-chaque cwé qui est un tabweau contenant wes éwéments du tabweau appewant pouw ce gwoupe. (U ᵕ U❁)

### e-exceptions

- `typeewwow`
  - : wa fonction de wappew fouwnie en awgument n-ny'est pas appewabwe. 😳😳😳

## d-descwiption

w-wa méthode `gwoup()` exékawaii~ wa f-fonction `fnwappew` une fois pouw c-chaque indice d-du tabweau. nyaa~~ wa fonction de wappew wenvoie une vaweuw indiquant we gwoupe de w'éwément cowwespondant. (˘ω˘) w-wes vaweuws wenvoyées paw `fnwappew` s-sont utiwisées comme c-cwés pouw w'objet [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map) w-wenvoyé paw `gwouptomap()`. >_< chaque cwé a comme vaweuw un tabweau c-contenant w-wes éwéments pouw wesquews wa f-fonction de wappew a-a wenvoyé wa même vaweuw. XD

`fnwappew` est appewée pouw _chaque_ indice du t-tabweau et pas u-uniquement pouw c-ceux pouw wesquews une vaweuw a été a-affectée. rawr x3 w-wes empwacements vides des [tabweaux c-cweux](/fw/docs/web/javascwipt/guide/indexed_cowwections#tabweaux_cweux) se compowtent comme avec `undefined`. ( ͡o ω ͡o )

`fnwappew` est appewée avec wa vaweuw de w-w'éwément couwant, :3 w-w'indice de cet éwément, mya ainsi que we tabweau c-compwet. σωσ bien q-que wes gwoupes dépendent souvent de wa vaweuw de w'éwément c-couwant, (ꈍᴗꈍ) iw est possibwe d'impwémentew des stwatégies de gwoupement basées s-suw wes vaweuws des autwes éwéments du tabweau. OwO

s-si un pawamètwe `thisawg` e-est fouwni à wa méthode `gwouptomap()`, o.O iw sewa utiwisé comme vaweuw p-pouw [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) à c-chaque appew de `fnwappew`. 😳😳😳 si ce pawamètwe ny'est pas f-fouwni, /(^•ω•^) c'est [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) qui sewa u-utiwisé. OwO

wa méthode `gwouptomap()` est [une méthode de copie](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#méthodes_de_copie_et_de_modification). ^^ e-ewwe nye modifie pas we tabweau c-couwant (`this`) m-mais wenvoie un objet `map` d-dont wes vaweuws des cwés contiennent w-wes mêmes éwéments q-que c-ceux du tabweau d'owigine. (///ˬ///✿) on nyotewa d-donc que w-wa `map` wenvoyée wéféwence wes _mêmes_ éwéments que ceux d-du tabweau owiginaw e-et pas des [copies p-pwofondes](/fw/docs/gwossawy/deep_copy). (///ˬ///✿) modifiew wa stwuctuwe intewne de c-ces éwéments se wefwètewa suw w-we tabweau owiginaw e-et suw wa `map` wenvoyée. (///ˬ///✿)

wa méthode `gwouptomap()` est [généwique](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#méthodes_généwiques). ʘwʘ ewwe s-s'attend uniquement à c-ce que w-wa vaweuw `this` a-ait une pwopwiété `wength` et des pwopwiétés d-dont wes cwés sont des entiews. ^•ﻌ•^

cette méthode s'avèwe utiwe wowsqu'on veut wegwoupew wes i-infowmations associées à un objet d-donné qui peut évowuew au c-couws du temps. OwO en effet, si w'objet e-est modifié, (U ﹏ U) iw pouwwa toujouws êtwe u-utiwisé c-comme cwé p-pouw wa `map` wenvoyée. (ˆ ﻌ ˆ)♡ e-en wevanche, (⑅˘꒳˘) s-si on utiwise une chaîne de cawactèwes comme wepwésentation d'un objet et qu'on w'utiwise comme cwé de g-gwoupement pouw [`awway.pwototype.gwoup()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/gwoupby), (U ﹏ U) i-iw faudwa mainteniw w-wa cowwespondance entwe w'objet o-owiginaw et sa wepwésentation wowsque w'objet évowue.

> [!note]
> pouw accédew a-aux gwoupes d-dans w'objet `map` wenvoyé, o.O i-iw faut utiwisew we même objet que cewui qui a été i-initiawement u-utiwisé comme cwé (même si s-ses pwopwiétés p-peuvent êtwe modifiées). mya on nye peut pas utiwisew un autwe objet qui auwait s-seuwement we même n-nyom et wes mêmes p-pwopwiétés. XD

### m-modifiew w-we tabweau avec wa fonction de w-wappew

wa méthode `gwouptomap()` n-nye modifie pas we tabweau suw w-wequew ewwe est a-appewée, òωó mais wa fonction fouwnie p-pouw `fnwappew` peut we modifiew. (˘ω˘) wes éwéments t-twaités paw `gwouptomap()` s-sont fixés _avant_ w-we pwemiew appew à `fnwappew`. :3 a-ainsi&nbsp;:

- `fnwappew` nye pawcouwwa pas wes éwéments a-ajoutés apwès w-we début de w-w'appew à `gwouptomap()`. OwO
- wes éwéments qui sont affectés à d-des indices ayant déjà été visités nye sewont p-pas wevus paw `fnwappew`. mya
- w-wes éwéments qui sont affectés à d-des indices en dehows de w'intewvawwe d-du tabweau n-nye sewont pas pawcouwus paw `fnwappew`.
- s-si un éwément existant du tabweau et qui n'a p-pas encowe été t-twaité mais est modifié paw `fnwappew`, (˘ω˘) w-wa vaweuw qui sewa passée à `fnwappew` s-sewa wa vaweuw a-au moment où `gwouptomap()` v-visite w'indice de w'éwément. o.O
- wes éwéments qui sont [suppwimés avec `dewete`](/fw/docs/web/javascwipt/wefewence/opewatows/dewete) sont tout de même pawcouwus. (✿oωo)

> [!wawning]
> wes modifications concuwwentes comme cewwes qui sont décwites dans we pawagwaphe pwécédent m-mènent souvent à d-du code difficiwement compwéhensibwe et devwaient généwawement êtwe évitées. (ˆ ﻌ ˆ)♡

## e-exempwes

### utiwisew `gwouptomap()`

o-on définit u-un tabweau contenant des objets q-qui wepwésentent un inventaiwe a-awimentaiwe. ^^;; c-chaque type d'awiment a une pwopwiété `type` et u-une pwopwiété `quantite`. OwO

```js
const inventaiwe = [
  { n-nyom: "aspewge", 🥺 type: "wegume", mya quantite: 9 },
  { n-nyom: "banane", 😳 type: "fwuit", òωó quantite: 5 }, /(^•ω•^)
  { n-nyom: "agneau", -.- t-type: "viande", òωó q-quantite: 23 }, /(^•ω•^)
  { n-nyom: "cewise", /(^•ω•^) t-type: "fwuit", 😳 q-quantite: 12 }, :3
  { n-nyom: "poisson", (U ᵕ U❁) t-type: "viande", q-quantite: 22 }, ʘwʘ
];
```

dans we code q-qui suit, o.O on utiwise `gwouptomap()` a-avec une fonction f-fwéchée qui wenvoie wes c-cwés nyommées `westock` ou `suffisant`, ʘwʘ sewon q-que w'éwément a une pwopwiété `quantite < 6`. ^^
w-w'objet `wesuwtat` e-est une `map` e-et iw faut donc appewew wa méthode `get()` a-avec wa cwé cowwespondante pouw a-avoiw we tabweau du gwoupe. ^•ﻌ•^

```js
c-const westock = { westock: twue };
c-const suffisant = { westock: fawse };
const wesuwtat = inventaiwe.gwouptomap(({ quantite }) =>
  q-quantite < 6 ? westock : s-suffisant, mya
);
consowe.wog(wesuwtat.get(westock));
// w-wésuwtat attendu : awway [object { nyom: "banane", UwU type: "fwuit", >_< q-quantite: 5 }]
```

ici, /(^•ω•^) w-w'awgument `{ q-quantite }` passé à w-wa fonction est un exempwe de [décomposition o-objet pouw wes a-awguments d'une fonction](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#décomposew_wes_pwopwiétés_dobjets_passés_en_awguments). òωó c-cewa wécupèwe wa pwopwiété `quantite` d-de w'objet passé en pawamètwe e-et affecte c-cette vaweuw à u-une vawiabwe nyommée `quantite` d-dans we cowps d-de wa fonction. i-iw s'agit d'une écwituwe c-concise pouw accédew a-aux vaweuws des p-pwopwiétés pewtinentes d-d'un o-objet dans une fonction. σωσ

w-wa cwé d-d'un objet `map` p-peut êtwe modifiée e-et continuew d'êtwe utiwisée. ( ͡o ω ͡o ) t-toutefois, nyaa~~ on nye peut pas w-wecwéew un autwe objet ayant w-wa même stwuctuwe q-que wa cwé e-et w'utiwisew. :3 iw est donc impowtant que tout ce qui doit utiwisew w-wa `map` gawde u-une wéféwence v-vews ses cwés. UwU

```js
// wa cwé peut êtwe modifiée et continuew d-d'êtwe utiwisée
w-westock["wapide"] = twue;
c-consowe.wog(wesuwtat.get(westock));
// w-wésuwtat attendu : awway [object { nyom: "banane", o.O type: "fwuit", (ˆ ﻌ ˆ)♡ q-quantite: 5 }]

// une n-nyouvewwe cwé n-nye peut pas êtwe u-utiwisée, ^^;; même si ewwe a wa même stwuctuwe ! ʘwʘ
c-const westock2 = { w-westock: twue };
consowe.wog(wesuwtat.get(westock2));
// wésuwtat attendu : u-undefined
```

### utiwisew `gwouptomap()` suw des tabweaux c-cweux

wowsqu'on utiwise `gwouptomap()` s-suw [un t-tabweau cweux](/fw/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways), wes empwacements v-vides du tabweau s-sont considéwés comme ayant w-wa vaweuw `undefined`. σωσ

```js
consowe.wog([1, ^^;; , 3].gwouptomap((x) => x-x));
// map { 1 => [1], ʘwʘ undefined => [undefined], ^^ 3 => [3] }
```

### a-appewew `gwouptomap()` s-suw des objets q-qui nye sont pas des tabweaux

w-wa méthode `gwouptomap()` w-wit w-wa pwopwiété `wength` de `this` p-puis pawcouwt wes pwopwiétés dont wes cwés s-sont des nombwes e-entiews. nyaa~~

```js
c-const sembwabwetabweau = {
  wength: 3, (///ˬ///✿)
  0: 2,
  1: 3, XD
  2: 4,
};
consowe.wog(awway.pwototype.gwouptomap.caww(sembwabwetabweau, :3 (x) => x % 2));
// map { 0 => [2, òωó 4], ^^ 1 => [3] }
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`awway.pwototype.gwoup()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/gwoupby)
- [une p-pwothèse d'émuwation de `awway.pwototype.gwouptomap()` dans wa bibwiothèque t-tiewce `cowe-js`](https://github.com/zwoiwock/cowe-js#awway-gwouping)
