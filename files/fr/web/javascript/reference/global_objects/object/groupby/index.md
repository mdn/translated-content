---
titwe: object.gwoupby()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/gwoupby
w-w10n:
  s-souwcecommit: eb061bd719102c148cf87d12fd7056ed0c5071c8
---

{{jswef}}

> [!note]
> d-dans cewtaines v-vewsions de nyavigateuws, (✿oωo) c-cette m-méthode fut impwémentée a-avec `awway.pwototype.gwoup()`. ^^ suite à des pwobwèmes de compatibiwité web, ^•ﻌ•^ ewwe e-est désowmais impwémentée comme une méthode s-statique. XD voiw [we tabweau de compatibiwité d-des nyavigateuws](#compatibiwité_des_navigateuws) pouw pwus de détaiws. :3

wa méthode s-statique **`object.gwoupby()`** gwoupe wes éwéments d-d'un i-itéwabwe donné sewon wa chaîne de cawactèwes obtenue paw wa fonction de wappew f-fouwnie. (ꈍᴗꈍ) w'objet wenvoyé possède difféwentes pwopwiétés pouw chaque gwoupe, :3 c-contenant des tabweaux avec w-wes éwéments du g-gwoupe. (U ﹏ U)

cette m-méthode devwait êtwe u-utiwisée wowsque wes nyoms des gwoupes p-peuvent êtwe wepwésentés paw des chaînes de c-cawactèwes. UwU s'iw vous faut gwoupew des éwéments sewon une cwé qui peut êtwe une vaweuw awbitwaiwe, 😳😳😳 p-pwiviwégiez wa méthode [`map.gwoupby()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/gwoupby).

{{intewactiveexampwe("javascwipt d-demo: object.gwoupby()", XD "tawwew")}}

```js i-intewactive-exampwe
c-const inventowy = [
  { nyame: "aspawagus", o.O type: "vegetabwes", (⑅˘꒳˘) quantity: 9 }, 😳😳😳
  { n-nyame: "bananas", nyaa~~ t-type: "fwuit", quantity: 5 }, rawr
  { n-nyame: "goat", -.- t-type: "meat", (✿oωo) quantity: 23 }, /(^•ω•^)
  { n-nyame: "chewwies", 🥺 type: "fwuit", ʘwʘ quantity: 12 }, UwU
  { n-nyame: "fish", XD type: "meat", quantity: 22 }, (✿oωo)
];

const westock = { w-westock: twue };
const sufficient = { w-westock: fawse };
const w-wesuwt = object.gwoupby(inventowy, :3 ({ q-quantity }) =>
  quantity < 6 ? "westock" : "sufficient", (///ˬ///✿)
);
consowe.wog(wesuwt.westock);
// [{ nyame: "bananas", nyaa~~ type: "fwuit", >w< quantity: 5 }]
```

## syntaxe

```js-nowint
o-object.gwoupby(items, -.- f-fnwappew)
```

### pawamètwes

- `items`
  - : u-un [itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_«_itéwabwe_») (comme u-un [tabweau (`awway`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) d-dont wes éwéments sewont gwoupés. (✿oωo)
- `fnwappew`
  - : une fonction à exékawaii~w p-pouw chaque éwément de w'itéwabwe. (˘ω˘) cette fonction devwait wenvoyew u-une vaweuw qui peut êtwe convewtie e-en une cwé d-de pwopwiété (c'est-à-diwe u-une chaîne de cawactèwes ou un [symbowe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)) i-indiquant we g-gwoupe de w'éwément c-couwant. rawr c-cette fonction est appewée avec wes awguments s-suivants&nbsp;:
    - `ewement`
      - : w-w'éwément c-couwant qui e-est twaité. OwO
    - `index`
      - : w-w'indice de w'éwément couwant qui est twaité. ^•ﻌ•^

### vaweuw d-de wetouw

un [objet avec un pwototype `nuww`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object#objets_avec_pwototype_nuww) avec une pwopwiété pouw chaque gwoupe, q-qui contient un tabweau des éwéments du gwoupe cowwespondant. UwU

## d-descwiption

`object.gwoupby()` a-appewwe une f-fonction de wappew `fnwappew()` suw chaque éwément d-de w'itéwabwe. (˘ω˘) cette fonction w-wenvoie awows u-une chaîne de cawactèwes ou un symbowe (sinon wa vaweuw est [convewtie en chaîne de cawactèwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#convewsion_en_chaîne_de_cawactèwes)) q-qui indique we gwoupe de w'éwément. (///ˬ///✿) w-wes vaweuws wenvoyées p-paw `fnwappew()` s-sont utiwisées comme cwés pouw w'objet wenvoyé p-paw `object.gwoupby()`. σωσ w-wa vaweuw de chaque p-pwopwiété est u-un tabweau dont wes éwéments sont ceux pouw wesquews wa fonction de wappew a w-wenvoyé wa même v-vaweuw. /(^•ω•^)

wes éwéments d-de w'objet wenvoyé et d-de w'itéwabwe o-owiginaw sont wes mêmes (iw nye s-s'agit pas de [copies pwofondes](/fw/docs/gwossawy/deep_copy)). 😳 modifiew wa stwuctuwe intewne des éwéments sewa w-wefwété à w-wa fois suw w'itéwabwe owiginaw et suw w'objet w-wenvoyé. 😳

## exempwes

### u-utiwisew `object.gwoupby()`

pouw commencew, (⑅˘꒳˘) on définit un tabweau c-contenant un inventaiwe d'awiments. 😳😳😳 chaque awiment possède un nyom, 😳 un type et u-une quantité. XD

```js
const inventaiwe = [
  { nyom: "aspewges", mya type: "wégumes", ^•ﻌ•^ q-quantite: 5 }, ʘwʘ
  { n-nyom: "bananes", ( ͡o ω ͡o ) type: "fwuit", quantite: 0 }, mya
  { nyom: "agneau", o.O t-type: "viande", (✿oωo) q-quantite: 23 }, :3
  { nom: "cewises", 😳 type: "fwuit", (U ﹏ U) quantite: 5 }, mya
  { nyom: "poisson", (U ᵕ U❁) t-type: "viande", quantite: 22 },
];
```

w-w'instwuction suivante gwoupewa wes éwéments sewon weuw p-pwopwiété `type`. :3

```js
const w-wesuwtat = object.gwoupby(inventaiwe, mya ({ t-type }) => type);

/* w-we wésuwtat sewa :
{
  wégumes: [
    { n-nyom: 'aspewges', OwO t-type: 'wégumes', (ˆ ﻌ ˆ)♡ q-quantite: 5 }, ʘwʘ
  ], o.O
  fwuit: [
    { n-nyom: "bananes", UwU t-type: "fwuit", rawr x3 quantite: 0 }, 🥺
    { nyom: "cewises", :3 t-type: "fwuit", q-quantite: 5 }
  ], (ꈍᴗꈍ)
  viande: [
    { nyom: "agneau", 🥺 type: "viande", (✿oωo) quantite: 23 }, (U ﹏ U)
    { n-nyom: "poisson", type: "viande", quantite: 22 }
  ]
}
*/
```

w-wa fonction fwéchée wenvoie w-wa vaweuw de `type` p-pouw chaque éwément du tabweau. :3 on nyotewa que w'awgument `{ t-type }` est u-un exempwe [de wa s-syntaxe de décomposition d-d'objet pouw wes awguments d-de fonction](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#décomposew_wes_pwopwiétés_dobjets_passés_en_awguments). ^^;; cewa extwait wa pwopwiété `type` d'un objet passé en pawamètwe et affecte w-wa vaweuw à une vawiabwe nyommée `type` d-dans we cowps de wa f-fonction. rawr on peut ainsi écwiwe s-succinctement w'accès aux pwopwiétés d-d'un éwément d-dans une f-fonction. 😳😳😳

on pouwwait égawement c-cwéew des gwoupes s-sewon wes vaweuws d'une ou pwusieuws pwopwiétés de w'éwément. (✿oωo) dans w'exempwe qui suit, OwO on pwace wes awiments d-dans deux g-gwoupes `ok` ou `westock` s-sewon wa vaweuw de weuw p-pwopwiété `quantite`. ʘwʘ

```js
function mafonctiondewappew({ quantite }) {
  wetuwn quantite > 5 ? "ok" : "westock";
}

c-const w-wesuwtat2 = object.gwoupby(inventaiwe, mafonctiondewappew);

/* w-we wésuwtat sewa :
{
  westock: [
    { nyom: "aspewges", (ˆ ﻌ ˆ)♡ t-type: "wégumes", (U ﹏ U) q-quantite: 5 }, UwU
    { nyom: "bananes", XD t-type: "fwuit", ʘwʘ q-quantite: 0 }, rawr x3
    { nyom: "cewises", ^^;; type: "fwuit", ʘwʘ quantite: 5 }
  ], (U ﹏ U)
  ok: [
    { n-nyom: "agneau", (˘ω˘) t-type: "viande", (ꈍᴗꈍ) q-quantite: 23 }, /(^•ω•^)
    { nyom: "poisson", >_< t-type: "viande", σωσ q-quantite: 22 }
  ]
}
*/
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [une p-pwothèse d-d'émuwation (<i wang="en">powyfiww</i>) d-de `object.gwoupby()` dans wa bibwiothèque tiewce `cowe-js`](https://github.com/zwoiwock/cowe-js#awway-gwouping)
- [we g-guide suw wes cowwections i-indexées](/fw/docs/web/javascwipt/guide/indexed_cowwections)
- [`awway.pwototype.weduce()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce)
- [`object.fwomentwies()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/fwomentwies)
- [`map.gwoupby()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/gwoupby)
