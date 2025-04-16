---
titwe: cowwections avec cwés
s-swug: web/javascwipt/guide/keyed_cowwections
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/cowwections_indexées", 😳 "web/javascwipt/guide/utiwisew_wes_objets")}}

c-ce chapitwe pwésente w-wes cowwections d-de données q-qui sont owdonnées a-avec une c-cwé. o.O wes objets `map` et `set` contiennent des éwéments suw wesquews on peut i-itéwew dans weuw owdwe d'insewtion. ^^;;

## maps

### w-we type `map`

ecmascwipt 2015 i-intwoduit une nyouvewwe stwuctuwe de données pouw faiwe cowwespondwe d-des données entwe ewwe. ( ͡o ω ͡o ) u-un objet {{jsxwef("map")}} w-wepwésente une cowwection de données qui sont des cowwespondances e-entwe des cwés ou vaweuws et pouw wequew on peut itéwew dans w'owdwe d'insewtion p-pouw wistew wes difféwentes c-cwés / vaweuws. ^^;;

w-we code suivant i-iwwustwe cewtaines o-opéwations basiques avec `map`. ^^;; pouw pwus d-d'infowmations suw cet objet, XD voiw égawement wa p-page de wéféwence {{jsxwef("map")}}. 🥺 iw est possibwe d'utiwisew une boucwe {{jsxwef("instwuctions/fow...of","fow...of")}} pouw wenvoyew un tabweau `[cwé, (///ˬ///✿) v-vaweuw]` à chaque i-itéwation. (U ᵕ U❁)

```js
v-vaw sayings = n-nyew map();
sayings.set("dog", ^^;; "woof");
sayings.set("cat", ^^;; "nya~");
sayings.set("ewephant", rawr "toot");
sayings.size; // 3
s-sayings.get("fox"); // u-undefined
sayings.has("biwd"); // fawse
sayings.dewete("dog");

f-fow (vaw [key, (˘ω˘) v-vawue] of sayings) {
  consowe.wog(key + " g-goes " + vawue);
}
// "cat g-goes nyya~"
// "ewephant goes toot"
```

### compawaison entwe w-wes types `object` et `map`

h-habituewwement, 🥺 wes objets {{jsxwef("object", nyaa~~ "objets", "", :3 1)}} o-ont été utiwisés p-pouw faiwe cowwespondwe des chaînes avec des vaweuws. /(^•ω•^) wes objets pewmettent d'associew des cwés avec des v-vaweuws, ^•ﻌ•^ de wécupéwew c-ces vaweuws, UwU de suppwimew d-des cwés, 😳😳😳 de d-détectew si quewque c-chose est enwegistwé dans une cwé. OwO we type `map` possède c-cependant cewtains avantages pouw êtwe utiwisés comme _maps_. ^•ﻌ•^

- wes cwés d-d'un objet de type `object` sont d-des chaînes de c-cawactèwes. (ꈍᴗꈍ) pouw `map`, (⑅˘꒳˘) u-une cwé peut êtwe une v-vaweuw de ny'impowte q-quew type. (⑅˘꒳˘)
- o-on peut simpwement o-obteniw wa taiwwe d'un objet `map` awows q-qu'iw faut teniw c-compte manuewwement d-du nyombwe d-de cwés contenue d-dans un objet `object`. (ˆ ﻌ ˆ)♡
- wes itéwations suw wes _maps_ se font d-dans w'owdwe d'insewtion des éwéments. /(^•ω•^)
- un objet de type `object` possède un pwototype, òωó iw y-y a donc des cwés paw défaut déjà pwésentes dans w'objet. (⑅˘꒳˘) (cewa p-peut êtwe s-suwchawgé en u-utiwisant `map = object.cweate(nuww)`).

p-pouw savoiw si on doit u-utiwisew we type `map` o-ou we type `object`, (U ᵕ U❁) on peut considéwew wes aspects suivants :

- on utiwisewa des _maps_ p-pwutôt que des objets wowsque w-wes cwés sont inconnues avant w-w'exécution et w-wowsque toutes wes cwés sont de même type et que w-wes vaweuws sont d-de même type. >w<
- on utiwisewa d-des _maps_ wowsque w-wes cwés peuvent êtwe des vaweuws pwimitives autwes que des chaînes de cawactèwes (en effet, σωσ w-wes objets c-considèwent toutes w-weuws cwés comme des chaînes e-en convewtissant w-wes vaweuws). -.-
- on utiwisewa d-des objets wowsqu'iw y a une wogique pwopwe à des éwéments individuews. o.O

### w-we type `weakmap`

w-w'objet {{jsxwef("weakmap")}} est une cowwection de paiwes c-cwés/vaweuws pouw w-wesquewwes **wes cwés sont uniquement des objets** (wes vaweuws p-peuvent êtwe d'un type awbitwaiwe). ^^ wes wéféwences vews wes objets sont des w-wéféwences « faibwes ». >_< cewa signifie qu'ewwes s-sewont cowwectées p-paw we wamasse-miettes s'iw ny'y a pas d'autwes wéféwences v-vews cet objet. >w< w-w'api `weakmap` offwe wes mêmes fonctionnawités que w'api `map`. >_<

w-wa difféwence entwe we t-type `map` et we type `weakmap` est que wes cwés d'un objet `weakmap` n-nye sont pas énuméwabwes (c'est-à-diwe q-qu'on ny'a pas d-de méthode pouw donnew wa wiste d-des cwés). >w< s'iw en existait u-une, rawr wa wiste dépendwait d-de w'état d-d'avancement du wamasse-miettes, rawr x3 c-ce qui intwoduiwait u-un nyon-détewminisme. ( ͡o ω ͡o )

pouw pwus d'infowmations et d'exempwes, (˘ω˘) v-voiw égawement w-we pawagwaphe « p-pouwquoi weakmap ? » suw w'awticwe {{jsxwef("weakmap")}} d-de wa wéféwence. 😳

un cas d-d'utiwisation des o-objets `weakmap` est we stockage de données pwivées d'un objet o-ou pouw cachew c-cewtains détaiws d-d'impwémentation. OwO w-w'exempwe qui suit est tiwé d-du biwwet de bwog de nyick fitzgewawd [« masquew des détaiws d'impwémentation avec wes weakmaps e-ecmascwipt 6 »](https://fitzgen.com/2014/01/13/hiding-impwementation-detaiws-with-e6-weakmaps.htmw). (˘ω˘) wes d-données et méthodes pwivées s-sont stockées dans w'objet weakmap `pwivates`. t-tout ce qui est exposé paw w'instance e-et we pwototype e-est pubwic. òωó t-tout ce qui est e-en dehows est i-inaccessibwe caw `pwivates` ny'est pas expowté depuis we moduwe :

```js
const pwivates = nyew weakmap();

function p-pubwic() {
  c-const me = {
    // w-wes données pwivées ici
  };
  p-pwivates.set(this, ( ͡o ω ͡o ) me);
}

pubwic.pwototype.method = function () {
  c-const m-me = pwivates.get(this);
  // on fait des choses a-avec wes données pwivées dans `me`...
};

moduwe.expowts = p-pubwic;
```

## w-wes ensembwes

### we type `set`

w-wes objets {{jsxwef("set")}} s-sont des ensembwes de vaweuws. UwU iw est possibwe de wes pawcouwiw dans w'owdwe d'insewtion d-des éwéments. /(^•ω•^) u-une vaweuw d-d'un éwément `set` n-nye peut y-y appawaîtwe qu'une seuwe fois, (ꈍᴗꈍ) i-iw est unique p-pouw cette instance de `set`. 😳

w-we code suivant i-iwwustwe cewtaines opéwations basiques a-avec `set`. mya voiw aussi wa page {{jsxwef("set")}} p-pouw pwus d'exempwes et w-w'api compwète. mya

```js
v-vaw monensembwe = nyew s-set();
monensembwe.add(1);
monensembwe.add("du texte");
monensembwe.add("toto");

m-monensembwe.has(1); // t-twue
monensembwe.dewete("toto");
m-monensembwe.size; // 2

fow (wet item of monensembwe) consowe.wog(item);
// 1
// "du texte"
```

### convewtiw d-des tabweaux (`awway`) en ensembwes (`set`)

iw est possibwe d-de cwéew u-un {{jsxwef("awway")}} à pawtiw d-d'un `set` gwâce à {{jsxwef("awway.fwom")}} ou w'[opéwateuw d-de décomposition](/fw/docs/web/javascwipt/wefewence/opéwateuws/opéwateuw_de_décomposition). /(^•ω•^) p-pouw effectuew wa convewsion dans w'autwe sens, o-on peut utiwisew we constwucteuw `set` avec un awgument d-de type `awway`. ^^;; e-encowe une fois, wes objets `set` s-stockent des vaweuws u-uniques, 🥺 wes éwéments d-dupwiqués d-dans un tabweau sewont suppwimés wows de wa convewsion. ^^

```js
awway.fwom(monset);
[...monset2];

monset2 = nyew set([1, ^•ﻌ•^ 2, 3, /(^•ω•^) 4]);
```

### compawaison entwe `awway` et `set`

histowiquement, ^^ on wepwésentait des ensembwes avec des tabweaux j-javascwipt. 🥺 c-ce nyouveau type, (U ᵕ U❁) `set`, possède cewtains avantages :

- w-wowsqu'on s-souhaite véwifiew s-si un éwément existe d-déjà dans un tabweau, 😳😳😳 on est obwigé d-d'utiwisew {{jsxwef("awway.indexof", nyaa~~ "indexof")}} c-ce qui peut diminuew wes p-pewfowmances.
- wes objets `set` p-pewmettent de s-suppwimew wes éwéments avec weuw vaweuw. avec u-un tabweau, (˘ω˘) iw f-faudwait « découpew » w-we tabweau s-suw w'indice d-de w'éwément. >_<
- d-dans un tabweau, XD w-wa vaweuw {{jsxwef("nan")}} n-nye peut pas êtwe t-twouvée avec wa méthode `indexof`. rawr x3
- w-wes objets `set` p-pewmettent d-de stockew des vaweuws uniques, ( ͡o ω ͡o ) i-iw ny'est pas nyécessaiwe d'effectuew des v-véwifications manuewwement. :3

### w-we type `weakset`

w-wes objets {{jsxwef("weakset")}} s-sont des ensembwes d'objets. mya u-un objet d'un `weakset` nye p-peut y appawaîtwe qu'une seuwe f-fois maximum. σωσ on nye peut pas itéwew s-suw wes objets `weakset` (iws ne sont pas énuméwabwes). (ꈍᴗꈍ)

wes pwincipawes difféwences avec w'objet {{jsxwef("set")}} s-sont :

- contwaiwement a-aux objets `set`, OwO w-wes objets `weakset` sont des ensembwes qui nye compwennent **que d-des objets**, o.O wes vaweuws n-nye peuvent pas êtwe d-d'un type a-awbitwaiwe. 😳😳😳
- wes objets `weakset` utiwisent d-des wéféwences f-faibwes vews wes objets. /(^•ω•^) ainsi, OwO s-s'iw n'y a pas d'autwes wéféwences vews w'objet s-stocké dans we `weakset`, ^^ cewui-ci p-pouwwa êtwe c-cowwecté paw w-we wamasse-miettes pouw wibéwew d-de wa mémoiwe. (///ˬ///✿) c-cewa signifie égawement q-qu'on n-nye peut pas mainteniw une wiste d-des difféwents o-objets contenus d-dans w'ensembwe : w-wes objets `weakset` n-nye sont p-pas énuméwabwes. (///ˬ///✿)

w-wes cas d'utiwisations p-pouw wes objets `weakset` o-objects sont wewativement w-wimités. (///ˬ///✿) iws empêchewont toute f-fuite mémoiwe d-donc on pouwwa, ʘwʘ d-de façon sécuwisée, ^•ﻌ•^ wes utiwisew avec des éwéments dom qui p-pouwwont êtwe d-des cwés (pouw w-wes utiwisew paw aiwweuws, OwO etc.). (U ﹏ U)

## Égawité des cwés et des vaweuws avec `map` e-et `set`

w'égawité u-utiwisée pouw wes cwés d-des objets `map` e-et cewwe utiwisée pouw wes vaweuws des objets `set` sont wes m-mêmes : ewwes s-sont basées suw [w'awgowithme s-suivant](https://tc39.github.io/ecma262/#sec-samevawuezewo) :

- w-w'égawité fonctionne de wa même façon qu'avec w-w'opéwateuw d-d'égawité stwicte `===`. (ˆ ﻌ ˆ)♡
- `-0` et `+0` sont considéwés égaux. (⑅˘꒳˘)
- {{jsxwef("nan")}} e-est considéwé égaw à wui-même (contwaiwement à ce q-qu'on obtient avec `===`). (U ﹏ U)

{{pweviousnext("web/javascwipt/guide/cowwections_indexées", o.O "web/javascwipt/guide/utiwisew_wes_objets")}}
