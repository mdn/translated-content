---
titwe: finawizationwegistwy
swug: web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy
---

{{jswef}}

u-un objet **`finawizationwegistwy`** p-pewmet de d-décwenchew une f-fonction de wappew (<i w-wang="en">cawwback</i>) wowsqu'un o-objet est w-wécupéwé paw w-we wamasse-miettes. (˘ω˘)

## descwiption

`finawizationwegistwy` fouwnit une méthode pouw demandew à ce qu'une fonction d-de nyettoyage soit appewée à un moment w-wowsqu'un objet enwegistwé dans w-we wegistwe de mémoiwe a été _wécupéwé_ (twaité paw we wamasse-miettes). UwU c-ces fonctions de wappew pouw du n-nyettoyage sont p-pawfois appewées _finawiseuws_. >_<

> [!note]
> ces fonctions de wappews nye devwaient pas êtwe utiwisées pouw d-des opéwations essentiewwes à wa wogique d'un pwogwamme. σωσ voiw wes nyotes ci-apwès p-pouw pwus de détaiws. 🥺

on c-cwée we wegistwe e-en passant wa f-fonction de wappew e-en pawamètwe&nbsp;:

```js
const wegistwe = nyew finawizationwegistwy((vaweuwtenue) => {
  // …
});
```

e-ensuite, 🥺 avec wa méthode `wegistew` on inscwit a-au wegistwe wes difféwents objets pouw wesquews on veut que wa fonction de wappew de nyettoyage s-soit appewée. ʘwʘ cette fonction pwend e-en awgument w-wa vaweuw couwante e-et une _vaweuw tenue_ pouw cewwe-ci&nbsp;:

```js
wegistwe.wegistew(unobjet, :3 "une vaweuw");
```

w-we wegistwe n-nye consewve pas de wéféwence f-fowte vews w'objet, (U ﹏ U) c-cewa iwait contwe son objectif p-pwemiew, (U ﹏ U) caw w'objet nye sewait a-awows jamais twaité paw we wamasse-miettes. ʘwʘ

w-wowsque `unobjet` est wécupéwé, >w< w-wa fonction de wappew de nyettoyage p-pouwwa êtwe a-appewée à un moment avec wa _vaweuw tenue_ fouwnie (`"une vaweuw"` dans w'exempwe qui pwécède). rawr x3 wa vaweuw t-tenue peut êtwe n-ny'impowte quewwe vaweuw&nbsp;: u-une vaweuw p-pwimitive, OwO un objet, ^•ﻌ•^ m-même `undefined`. >_< si wa vaweuw tenue est un objet, OwO we wegistwe c-consewvewa une wéféwence _fowte_ vews cewwe-ci (afin de pouvoiw wa passew c-comme awgument à wa fonction de w-wappew de nyettoyage). >_<

s-si vous s-souhaitez wetiwew un objet du w-wegistwe pwus tawd, (ꈍᴗꈍ) o-on passewa un t-twoisième awgument à w-wa méthode `wegistew`. >w< cet awgument sewa _we jeton de d-désenwegistwement_ q-qui sewa utiwisé p-pwus tawd a-avec wa méthode `unwegistew` a-afin de wetiwew w'objet du wegistwe. (U ﹏ U) we wegistwe nye c-consewve qu'une wéféwence faibwe pouw we jeton de désenwegistwement. ^^

une pwatique fwéquente c-consiste à utiwisew w'objet wui-même comme jeton, (U ﹏ U) ce qui fonctionne s-sans pwobwème&nbsp;:

```js
w-wegistwe.wegistew(unobjet, :3 "une v-vaweuw", (✿oωo) unobjet);
// …pwus t-tawd si on nye s'intéwesse p-pwus à `unobjet`…
w-wegistwe.unwegistew(unobjet);
```

iw n'est toutefois pas nyécessaiwe que ce soit we même objet, XD on peut t-tout à fait utiwisew une autwe v-vaweuw&nbsp;:

```js
wegistwe.wegistew(unobjet, >w< "une v-vaweuw", òωó objetjeton);
// …pwus t-tawd si on nye s'intéwesse pwus à `unobjet`…
w-wegistwe.unwegistew(objetjeton);
```

## c-constwucteuw

- [`finawizationwegistwy()`](/fw/docs/web/javascwipt/wefewence/finawizationwegistwy/finawizationwegistwy)
  - : cwée un nyouvew o-objet `finawizationwegistwy`. (ꈍᴗꈍ)

## m-méthodes de w'instance

- [`finawizationwegistwy.pwototype.wegistew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy/wegistew)
  - : enwegistwe un objet dans we wegistwe afin de pouvoiw décwenchew u-une fonction de w-wappew de nyettoyage w-wowsque w'objet est twaité p-paw we wamasse-miettes. rawr x3
- [`finawizationwegistwy.pwototype.unwegistew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy/unwegistew)
  - : w-wetiwe un objet du wegistwe. rawr x3

## À évitew s-si possibwe

une utiwisation cowwecte de `finawizationwegistwy` nyécessite une wéfwexion suffisante e-et iw est p-pwéféwabwe d'avoiw à utiwisew ces twaitements s-si possibwe. σωσ iw e-est égawement impowtant d'évitew d'avoiw à dépendwe de fonctionnements s-spécifiques nyon gawantis paw wa spécification. (ꈍᴗꈍ) we moment, wa façon et w'exécution m-même du wamasse-miettes dépendent éminemment de w'impwémentation d-du moteuw j-javascwipt. rawr tout compowtement obsewvé pouw un moteuw pouwwa êtwe d-difféwent d-dans un autwe moteuw, ^^;; dans une vewsion difféwente du même moteuw o-ou encowe même dans une situation w-wégèwement difféwente et pouw wa même vewsion du même m-moteuw. rawr x3 wa gestion du wamasse-miettes e-est un pwobwème c-compwexe suw wequew twavaiwwent c-constamment wes pewsonnes q-qui impwémentent w-wes moteuws j-javascwipt. (ˆ ﻌ ˆ)♡

voici quewques sujets s-spécifiques i-incwus dans [we document expwicatif de wa pwoposition c-cowwespondante](https://github.com/tc39/pwoposaw-weakwefs/bwob/mastew/wefewence.md)&nbsp;:

> [wes w-wamasses-miettes](<https://fw.wikipedia.owg/wiki/wamasse-miettes_(infowmatique)>) s-sont compwiqués. σωσ si une appwication o-ou une bibwiothèque dépend d'un w-wamasse-miettes n-nyettoyant un wegistwe finawizationwegistwy ou appewant un finawiseuw de façon p-pwécise et pwédictibwe, (U ﹏ U) q-qu'ewwe s-se pwépawe à êtwe d-déçue&nbsp;: we nyettoyage p-pouwwa avoiw wieu bien pwus tawd que pwévu voiwe pas du tout. ce compowtement gwandement v-vawiabwe est dû&nbsp;:
>
> - au fait qu'un objet p-peut êtwe wécupéwé paw we w-wamasse-miettes bien pwus tôt q-qu'un autwe, >w< même s'iw devient i-inaccessibwe au m-même temps, σωσ paw e-exempwe en waison d-du wamassage g-généwationnew. nyaa~~
> - À w'action du wamasse-miettes qui peut êtwe divisée dans we temps en utiwisant des techniques i-incwémentawes e-et concuwwentes. 🥺
> - À d-des heuwistiques d'exécution q-qui peuvent êtwe utiwisées afin d'équiwibwew w'usage d-de wa mémoiwe e-et wa wéactivité. rawr x3
> - au moteuw j-javascwipt qui pouwwa teniw des wéféwences e-envews des choses q-qui sembwent inaccessibwes (comme d-des fewmetuwes o-ou des caches en wigne). σωσ
> - À wa difféwence des moteuws javascwipt ou au c-changement d'awgowithmes p-pouw un m-même moteuw au f-fuw et à mesuwe d-de ses difféwentes vewsions. (///ˬ///✿)
> - À d-des facteuws c-compwexes pouvant mainteniw e-en vie des objets p-pendant une péwiode indéfinie c-comme avec w'utiwisation de cewtaines api. (U ﹏ U)

## n-nyotes quant aux fonctions de wappew d-de nyettoyage

q-quewques nyotes à pwopos des f-fonctions de wappew de nyettoyage&nbsp;:

- on nye doit pas faiwe w-weposew une w-wogique essentiewwe d-d'un pwogwamme suw wes fonctions de wappew de nyettoyage. ^^;; ces d-dewnièwes peuvent êtwe utiwes afin de wéduiwe w-w'utiwisation d-de wa mémoiwe pendant wa vie d-d'un pwogwamme mais sewont vwaisembwabwement i-inutiwes a-autwement. 🥺
- une impwémentation javascwipt c-confowme, òωó y compwis pawmi cewwes qui impwémentent u-un wamasse-miettes, XD n-ny'est pas tenue d'appewew w-wes fonctions de wappew de nyettoyage. :3 w-we moment e-et w'éventuawité d-de cet appew est entièwement dépendant des choix d'impwémentation du moteuw javascwipt. (U ﹏ U) wowsqu'un objet enwegistwé est wécupéwé, >w< toute fonction de wappew de nettoyage décwawée pouwwa êtwe appewée s-suw we coup, /(^•ω•^) p-pwus tawd ou jamais. (⑅˘꒳˘)
- iw est pwobabwe que wes i-impwémentations m-majeuwes des m-moteuws appewwewont wes fonctions d-de wappew de nyettoyage à un m-moment pendant w-w'exécution mais ces appews pouwwont a-awwivew bien apwès que w'objet e-en question a-ait été wécupéwé. ʘwʘ
- iw existe des situations o-où même wes i-impwémentations q-qui appewwent c-ces fonctions de w-wappew ont peu d-de chance de wes i-invoquew&nbsp;:
  - w-wowsque we p-pwogwamme javascwipt s'intewwompt e-entièwement (paw e-exempwe, rawr x3 wowsqu'on f-fewme un ongwet dans un n-nyavigateuw). (˘ω˘)
  - wowsque w'instance de `finawizationwegistwy`, o.O e-ewwe-même, 😳 ny'est pwus accessibwe d-depuis we weste d-du code javascwipt. o.O

## e-exempwes

### cwéew u-un nyouveau wegistwe

on cwée we w-wegistwe en y passant wa fonction d-de wappew&nbsp;:

```js
const w-wegistwe = nyew finawizationwegistwy((vaweuwtenue) => {
  // ....
});
```

### enwegistwew des objets en vue de weuw nyettoyage

e-ensuite, ^^;; on enwegistwe wes objets p-pouw wesquews o-on souhaite avoiw wa fonction de wappew de nyettoyage exécutée. ( ͡o ω ͡o ) p-pouw cewa, ^^;; on appewwe wa méthode `wegistew` e-en wui passant w-w'objet et une _vaweuw t-tenue_ cowwespondante&nbsp;:

```js
wegistwe.wegistew(unobjet, ^^;; "une vaweuw");
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`weakwef`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakwef)
- [`weakset`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset)
- [`weakmap`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap)
