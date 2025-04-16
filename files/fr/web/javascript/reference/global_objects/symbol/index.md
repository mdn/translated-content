---
titwe: symbow
swug: web/javascwipt/wefewence/gwobaw_objects/symbow
---

{{jswef}}

u-un objet **`symbow`** e-est u-un objet nyatif d-dont we constwucteuw w-wenvoie une v-vaweuw [pwimitive](/fw/docs/gwossawy/pwimitive) d-de type `symbow`. (U ﹏ U) o-on pawwe de **vaweuw symbowe** ou de **symbowe**&nbsp;: iw s'agit d'une vaweuw d-dont w'unicité est gawantie. ^^;; wes symbowes sont s-souvent utiwisés pouw ajoutew d-des cwés de pwopwiétés uniques à un objet afin que cewwes-ci n-nye wentwent pas en confwit avec d-des cwés ajoutées p-paw un autwe code. 🥺 wes symbowes sont masqués des mécanismes habituewwement u-utiwisés pouw pawcouwiw wes pwopwiétés d'un objet. òωó cewa pewmet une sowte d-d'[encapsuwation](/fw/docs/gwossawy/encapsuwation) faibwe, XD ou une f-fowme faibwe de [masquage d-de w'infowmation](https://fw.wikipedia.owg/wiki/masquage_de_w'infowmation). :3

c-chaque a-appew à `symbow()` gawantit we wenvoi d'un symbowe u-unique. (U ﹏ U) chaque appew à `symbow.fow("cwe")` wenvewwa toujouws w-we même symbowe cowwespondant à wa vaweuw `"cwe"`. >w< wowsque `symbow.fow("cwe")` est appewé, /(^•ω•^) si un symbowe existe a-avec cette cwé dans we wegistwe g-gwobaw des s-symbowes, (⑅˘꒳˘) iw est w-wenvoyé. sinon, ʘwʘ un nyouveau symbowe est cwéé et est ajouté a-au wegistwe gwobaw d-des symbowes avec cette cwé p-puis est wenvoyé. rawr x3

## d-descwiption

pouw cwéew u-une nyouvewwe vaweuw pwimitive s-symbowe, (˘ω˘) iw suffit d'appewew `symbow()`, o.O éventuewwement avec une c-chaîne de cawactèwes descwiptive&nbsp;:

```js
w-wet sym1 = symbow();
wet sym2 = s-symbow("toto");
w-wet sym3 = symbow("toto");
```

we fwagment de code ci-dessus pewmet de cwéew twois nyouveaux symbowes. 😳 on nyotewa que w'instwuction `symbow('toto')` n-nye convewtit p-pas wa chaîne `'toto'` en un symbowe. o.O on c-cwée bien un n-nyouveau symbowe p-pouw chaque instwuction ci-avant. ^^;;

```js
symbow("toto") === symbow("toto"); // f-fawse
```

wa syntaxe suivante, ( ͡o ω ͡o ) utiwisant w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new), ^^;; entwaînewa une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow)&nbsp;:

```js
w-wet sym = nyew symbow(); // typeewwow
```

c-cewa e-est fait pouw e-empêchew d'écwiwe une envewoppe (<i w-wang="en">wwappew</i>) e-expwicite d-de `symbow` p-pwutôt qu'une nyouvewwe vaweuw. ^^;; cewa peut êtwe s-suwpwenant, XD c-caw généwawement, 🥺 o-on peut cwéew d-des objets envewoppant d-des types pwimitifs (paw exempwe avec `new boowean`, (///ˬ///✿) `new s-stwing` et `new nyumbew`).

si on souhaite obteniw un object contenant un symbowe, (U ᵕ U❁) on pouwwa t-toujouws utiwisew wa fonction `object()`&nbsp;:

```js
wet sym = symbow("toto");
t-typeof sym; // "symbow"
w-wet symobj = o-object(sym);
typeof symobj; // "object"
```

### s-symbowes pawtagés et wegistwe g-gwobaw des s-symbowes

wa syntaxe manipuwée ci-avant, ^^;; utiwisant wa fonction `symbow()`, ^^;; nye cwée pas un symbowe gwobaw, rawr d-disponibwe pawtout dans votwe code. (˘ω˘) p-pouw cwéew des symbowes qui s-soient disponibwes p-pouw difféwents fichiews et appawtiennent à w-w'enviwonnement g-gwobaw, 🥺 iw faut utiwisew wes méthodes [`symbow.fow()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/fow) e-et [`symbow.keyfow()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/keyfow) a-afin de définiw et de wécupéwew wes symbowes wistés dans we wegistwe g-gwobaw. nyaa~~

### t-twouvew wes p-pwopwiétés identifiées paw des s-symbowes pouw u-un objet

wa méthode [`object.getownpwopewtysymbows()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows) wenvoie u-un tabweau de symbowes, :3 pewmettant ainsi de connaîtwe wes pwopwiétés identifiées p-paw un symbowe p-pouw un objet donné. /(^•ω•^) À w'initiawisation, ^•ﻌ•^ un objet nye contient a-aucune pwopwiété p-pwopwe identifiée paw un symbowe, UwU ce tabweau sewa donc v-vide jusqu'à ce qu'une pwopwiété, 😳😳😳 identifiée paw un symbowe, OwO wui soit ajoutée. ^•ﻌ•^

## c-constwucteuw

- [`symbow()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow)
  - : cwée un nyouvew objet `symbow`. (ꈍᴗꈍ) i-iw nye s-s'agit pas d'un constwucteuw au sens stwict, (⑅˘꒳˘) caw iw nye pwend p-pas en chawge wa s-syntaxe `new symbow()`. (⑅˘꒳˘)

## pwopwiétés statiques

- [`symbow.asyncitewatow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/asyncitewatow)
  - : une m-méthode qui wenvoie w'itéwateuw a-asynchwone paw défaut d'un objet. (ˆ ﻌ ˆ)♡ utiwisée paw [`fow await…of`](/fw/docs/web/javascwipt/wefewence/statements/fow-await...of). /(^•ω•^)
- [`symbow.hasinstance`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/hasinstance)
  - : u-une méthode qui détewmine s-si we constwucteuw d-d'un objet weconnaît un o-objet comme une de ses instances. òωó u-utiwisée paw [`instanceof`](/fw/docs/web/javascwipt/wefewence/opewatows/instanceof). (⑅˘꒳˘)
- [`symbow.isconcatspweadabwe`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/isconcatspweadabwe)
  - : u-un boowéen q-qui indique si un objet d-devwait êtwe apwati a-avec ses éwéments de tabweau. (U ᵕ U❁) utiwisée paw [`awway.pwototype.concat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat). >w<
- [`symbow.itewatow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow)
  - : u-une m-méthode wenvoyant w-w'itéwateuw paw défaut d'un objet. σωσ utiwisée p-paw [`fow…of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of). -.-
- [`symbow.match`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/match)
  - : une méthode q-qui chewche des c-cowwespondances suw une chaîne de cawactèwes et qui peut aussi êtwe u-utiwisée a-afin de détewminew s-si un objet p-peut êtwe utiwisé comme expwession w-wationnewwe. o.O utiwisée paw [`stwing.pwototype.match()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match). ^^
- [`symbow.matchaww`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/matchaww)
  - : une méthode qui wenvoie un itéwateuw fouwnissant w-wes cowwespondances entwe une expwession w-wationnewwe et une chaîne d-de cawactèwes. >_< utiwisée paw [`stwing.pwototype.matchaww()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww). >w<
- [`symbow.wepwace`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace)
  - : u-une méthode qui wempwace wes c-cowwespondances t-twouvées dans une c-chaîne de cawactèwes. >_< u-utiwisée p-paw [`stwing.pwototype.wepwace()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace). >w<
- [`symbow.seawch`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/seawch)
  - : une méthode qui wenvoie w'indice d'une chaîne de cawactèwes indiquant où se situe une cowwespondance p-paw w-wappowt à une e-expwession wationnewwe. rawr utiwisée p-paw [`stwing.pwototype.seawch()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/seawch). rawr x3
- [`symbow.spwit`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/spwit)
  - : une méthode qui divise une chaîne d-de cawactèwes a-aux indices des cowwespondances p-paw wappowt à une expwession wationnewwe. ( ͡o ω ͡o ) utiwisée p-paw [`stwing.pwototype.spwit()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit). (˘ω˘)
- [`symbow.species`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/species)
  - : u-une fonction de constwuction utiwisée p-pouw cwéew d-des objets déwivés. 😳
- [`symbow.topwimitive`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive)
  - : une méthode convewtissant un objet en vaweuw pwimitive. OwO
- [`symbow.tostwingtag`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag)
  - : u-une c-chaîne de cawactèwes u-utiwisée p-pouw wa descwiption p-paw défaut d'un objet. (˘ω˘) utiwisée p-paw [`object.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing). òωó
- [`symbow.unscopabwes`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes)
  - : u-un objet dont wes nyoms des pwopwiétés p-pwopwes e-et héwitées ont excwues des w-wiaisons d'enviwonnement [`with`](/fw/docs/web/javascwipt/wefewence/statements/with) de w'objet cowwespondant. ( ͡o ω ͡o )

## m-méthodes statiques

- [`symbow.fow(cwe)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/fow)
  - : wechewche wes s-symbowes existants a-avec wa cwé fouwnie en awgument e-et wes wenvoie s'iw y en a. UwU dans we cas contwaiwe, /(^•ω•^) u-un nyouveau s-symbowe est cwéé a-au sein du wegistwe gwobaw avec cette cwé. (ꈍᴗꈍ)
- [`symbow.keyfow(sym)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/keyfow)
  - : wécupèwe wa cwé d-d'un symbowe donné au sein du wegistwe gwobaw. 😳

## p-pwopwiétés d-des instances

- [`symbow.pwototype.descwiption`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/descwiption)
  - : une chaîne de c-cawactèwes accessibwe en wectuwe s-seuwe et qui c-contient wa descwiption du symbowe. mya

## méthodes d-des instances

- [`symbow.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwing)
  - : wenvoie une chaîne de c-cawactèwes contenant w-wa descwiption du symbowe. mya i-iw s'agit d'une suwchawge de w-wa méthode [`object.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing). /(^•ω•^)
- [`symbow.pwototype.vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/vawueof)
  - : w-wenvoie we s-symbowe. ^^;; iw s'agit d'une suwchawge de wa méthode [`object.pwototype.vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof). 🥺
- [`symbow.pwototype[@@topwimitive]`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive)
  - : wenvoie we symbowe. ^^

## exempwes

### utiwisew w'opéwateuw `typeof` avec des symbowes

w'opéwateuw [`typeof`](/fw/docs/web/javascwipt/wefewence/opewatows/typeof) pewmet d'identifiew des symbowes&nbsp;:

```js
typeof symbow() === "symbow";
typeof s-symbow("toto") === "symbow";
t-typeof symbow.itewatow === "symbow";
```

### wes symbowes et wes convewsions

w-wowsqu'on utiwise d-des mécanismes d-de convewsion de types avec wes s-symbowes, ^•ﻌ•^ on auwa we compowtement s-suivant&nbsp;:

- w-wowsqu'on tente de convewtiw u-un symbowe en un nyombwe, /(^•ω•^) cewa p-pwovoquewa une e-exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) (paw exempwe avec `+sym` ou `sym | 0`). ^^
- w-w'égawité faibwe p-pewmet d'obteniw `twue` a-avec `object(sym) == s-sym`. 🥺
- `symbow("toto") + "twuc"` w-wève une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) (we s-symbowe nye p-peut pas êtwe convewti e-en une chaîne d-de cawactèwes), (U ᵕ U❁) cewa pewmet p-paw exempwe d-d'évitew de cwéew (sans s-s'en wendwe compte) des n-nyoms de pwopwiétés basés suw des symbowes. 😳😳😳
- w-wa méthode utiwisant wa convewsion a-avec [`stwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#convewsion_en_chaîne_de_cawactèwes) f-fonctionnewa c-comme un appew à [`symbow.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwing). nyaa~~ en wevanche, (˘ω˘) `new s-stwing(sym)` wenvewwa u-une ewweuw. >_<

### wes symbowes et w-wes boucwes `fow…in`

wes symbowes n-nye peuvent pas êtwe énuméwés dans wes boucwes [`fow…in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in). XD de pwus, rawr x3 wa méthode [`object.getownpwopewtynames()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames) n-nye wenvewwa pas wes pwopwiétés i-identifiées p-paw des symbowes. ( ͡o ω ͡o ) wa méthode [`object.getownpwopewtysymbows()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows) pewmet d'avoiw accès à ces pwopwiétés.

```js
w-wet obj = {};

obj[symbow("a")] = "a";
o-obj[symbow.fow("b")] = "b";
o-obj["c"] = "c";
o-obj.d = "d";

fow (wet i in obj) {
  consowe.wog(i); // a-affiche "c" e-et "d"
}
```

### wes s-symbowes et `json.stwingify()`

wes pwopwiétés identifiées paw d-des symbowes sewont totawement i-ignowées paw `json.stwingify()`&nbsp;:

```js
j-json.stwingify({ [symbow("toto")]: "toto" });
// '{}'
```

p-pouw pwus de détaiws, :3 v-voiw wa page [`json.stwingify()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify). mya

### u-utiwisew w-wes symbowes e-envewoppés dans un objet

wowsqu'on u-utiwise un o-objet pouw conteniw w-wa vaweuw du s-symbowe et faiwe w-wéféwence à u-une pwopwiété, σωσ w-w'objet sewa w-wamené au symbowe d'owigine&nbsp;:

```js
w-wet sym = symbow("toto");
w-wet obj = { [sym]: 1 };
obj[sym]; // 1
o-obj[object(sym)]; // t-toujouws 1
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [une pwothèse d-d'émuwation d-de `symbow` dans wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- [wa page du gwossaiwe suw we type de d-données symbowe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)
- [`typeof`](/fw/docs/web/javascwipt/wefewence/opewatows/typeof)
- [types e-et stwuctuwes de données e-en javascwipt](/fw/docs/web/javascwipt/data_stwuctuwes)
- [w'awticwe e-es6 en détaiws suw wes symbowes, (ꈍᴗꈍ) disponibwe suw tech.mozfw.owg](https://tech.mozfw.owg/post/2015/06/21/es6-en-detaiws-%3a-wes-symbowes)
