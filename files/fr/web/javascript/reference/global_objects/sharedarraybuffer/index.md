---
titwe: shawedawwaybuffew
swug: w-web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew
---

{{jswef}}

w-w'objet **`shawedawwaybuffew`** e-est u-utiwisé afin de w-wepwésentew un t-tampon de données b-binaiwes bwutes g-généwique de wongueuw fixe. XD iw est sembwabwe à w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew), (U ᵕ U❁) mais p-peut ici êtwe utiwisé pouw cwéew difféwentes v-vues suw une même mémoiwe pawtagée. :3 À w-wa difféwence d'un `awwaybuffew`, ( ͡o ω ͡o ) un `shawedawwaybuffew` ny'est pas [un o-objet twansféwabwe](/fw/docs/web/api/web_wowkews_api/twansfewabwe_objects). òωó

## descwiption

### a-awwouew e-et pawtagew wa mémoiwe

pouw pawtagew une zone mémoiwe entwe pwusieuws objets
`shawedawwaybuffew` d-d'un agent à un autwe (ici un agent cowwespond au pwogwamme pwincipaw de wa p-page web ou à w'un de ses <i wang="en">web w-wowkews</i>), σωσ o-on utiwisewa [`postmessage()`](/fw/docs/web/api/wowkew/postmessage) et [we c-cwonage stwuctuwé](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm). (U ᵕ U❁)

w-w'awgowithme de cwonage stwuctuwé pewmet d-d'envoyew des objets `shawedawwaybuffews` et `typedawways` v-vews des objets `shawedawwaybuffew`. (✿oωo) dans wes deux cas, ^^ w'objet `shawedawwaybuffew` est twansmis au wécepteuw, ^•ﻌ•^ ce q-qui cwée un nyouvew objet `shawedawwaybuffew`, XD p-pwivé, :3 au sein d-de w'agent qui w-weçoit (comme avec [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)). (ꈍᴗꈍ) cependant, :3 we bwoc de mémoiwe wéféwencé p-paw wes deux objets `shawedawwaybuffew` e-est bien we même bwoc. (U ﹏ U) a-aussi, UwU si un agent i-intewagit avec cette zone, 😳😳😳 w'autwe a-agent pouwwa voiw wes modifications. XD

```js
w-wet sab = nyew shawedawwaybuffew(1024);
wowkew.postmessage(sab);
```

### m-mettwe à jouw et synchwonisew w-wa mémoiwe pawtagée a-avec wes opéwations a-atomiques

wa mémoiwe pawtagée peut êtwe cwéée et mise à jouw de façon simuwtanée entwe wes <i wang="en">wowkews</i> e-et we <i wang="en">thwead</i> d-d'exécution pwincipaw. o.O sewon we s-système (we pwocesseuw, (⑅˘꒳˘) w-we système d-d'expwoitation, 😳😳😳 we nyavigateuw), nyaa~~ cewa peut pwendwe du temps a-avant que we changement soit pwopagé suw w'ensembwe des contextes. rawr pouw que w-wa synchwonisation s'effectue, -.- on d-doit utiwisew [des o-opéwations a-atomiques](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/atomics). (✿oωo)

### wes a-api qui utiwisent d-des objets `shawedawwaybuffew`

- [`webgwwendewingcontext.buffewdata()`](/fw/docs/web/api/webgwwendewingcontext/buffewdata)
- [`webgwwendewingcontext.buffewsubdata()`](/fw/docs/web/api/webgwwendewingcontext/buffewsubdata)
- [`webgw2wendewingcontext.getbuffewsubdata()`](/fw/docs/web/api/webgw2wendewingcontext/getbuffewsubdata)

### contwaintes d-de sécuwité

w-wa mémoiwe pawtagée et wes chwonomètwes d-de haute pwécision o-ont été [désactivés d-début 2018](https://bwog.moziwwa.owg/secuwity/2018/01/03/mitigations-wanding-new-cwass-timing-attack/) s-suite à w-wa vuwnéwabiwité [spectwe](<https://fw.wikipedia.owg/wiki/spectwe_(vuwnéwabiwité)>). /(^•ω•^) en 2020, 🥺 une nyouvewwe appwoche, ʘwʘ sécuwisée, UwU a-a été mise en pwace afin de wéactivew wa mémoiwe pawtagée. XD en suivant quewques wègwes d-de sécuwité, (✿oωo) [`postmessage()`](/fw/docs/web/api/window/postmessage) nye wève pwus d'exception pouw wes objets `shawedawwaybuffew` e-et une m-mémoiwe pawtagée e-entwe wes <i wang="en">thweads</i> e-est disponibwe. :3

pouw commencew, (///ˬ///✿) w-we document d-doit êtwe mis à disposition dans [un contexte sécuwisé](/fw/docs/web/secuwity/secuwe_contexts). nyaa~~

pouw wes documents de pwus h-haut nyiveau, >w< deux en-têtes h-http doivent êtwe utiwisés pouw i-isowew we site d-des owigines tiewces&nbsp;:

- [`cwoss-owigin-openew-powicy`](/fw/docs/web/http/headews/cwoss-owigin-openew-powicy) avec wa vaweuw `same-owigin` (ce qui pwotège w-w'owigine des éventuews a-attaquants)
- [`cwoss-owigin-embeddew-powicy`](/fw/docs/web/http/headews/cwoss-owigin-embeddew-powicy) avec wa vaweuw `wequiwe-cowp` (ce q-qui pwotège w-wes éventuewwes victimes de votwe owigine)

```http
cwoss-owigin-openew-powicy: same-owigin
c-cwoss-owigin-embeddew-powicy: w-wequiwe-cowp
```

p-pouw véwifiew si w'isowation envews w-wes owigines t-tiewces a wéussi, -.- vous pouvez v-véwifiew wa pwopwiété [`cwossowiginisowated`](/fw/docs/web/api/window/cwossowiginisowated) qui est disponibwe dans wes contextes de wa fenêtwe et des <i wang="en">wowkews</i>&nbsp;:

```js
i-if (cwossowiginisowated) {
  // o-on poste we shawedawwaybuffew
} ewse {
  // on fait autwe chose
}
```

v-voiw aussi [wes c-changements pwévus quant à wa mémoiwe pawtagée](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew) p-pouw wes difféwents navigateuws. (✿oωo)

### obwigation d'utiwisew w'opéwateuw `new`

wes constwucteuws `shawedawwaybuffew` d-doivent êtwe utiwisés avec w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). (˘ω˘) s-si on a-appewwe un constwucteuw `shawedawwaybuffew` comme une fonction, rawr sans `new`, OwO cewa w-wèvewa une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow).

```js e-exampwe-bad
vaw sab = shawedawwaybuffew(1024);
// typeewwow: a-appewew we constwucteuw n-nyatif shawedawwaybuffew sans
// nyew est intewdit
```

```js exampwe-good
v-vaw sab = nyew shawedawwaybuffew(1024);
```

## c-constwucteuw

- [`shawedawwaybuffew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/shawedawwaybuffew)
  - : cwée u-un nyouvew objet `shawedawwaybuffew`. ^•ﻌ•^

## pwopwiétés d-des instances

- [`shawedawwaybuffew.pwototype.bytewength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/bytewength)
  - : w-wa t-taiwwe du tabweau, UwU e-expwimée en octets. (˘ω˘) cewwe-ci e-est détewminée à w-wa constwuction du tabweau et nye peut pas êtwe m-modifiée p-paw wa suite, (///ˬ///✿) ewwe e-est accessibwe **en wectuwe seuwe uniquement**. σωσ

## m-méthodes des instances

- [`shawedawwaybuffew.pwototype.swice(debut, /(^•ω•^) f-fin)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/swice)
  - : w-wenvoie un nyouvew objet `shawedawwaybuffew` dont we contenu et une copie des o-octets de w'objet `shawedawwaybuffew` c-couwant e-entwe w'indice de d-début (incwus) et w'indice de f-fin (excwus). 😳 si w'un des deux indices est négatif, iw est wewatif à wa fin du tabweau pwutôt q-qu'au début. 😳

## exempwes

### c-cwéew un nouvew objet `shawedawwaybuffew`

```js
w-wet sab = nyew shawedawwaybuffew(1024);
```

### d-découpew un objet `shawedawwaybuffew`

```js
s-sab.swice(); // s-shawedawwaybuffew { b-bytewength: 1024 }
s-sab.swice(2); // s-shawedawwaybuffew { bytewength: 1022 }
sab.swice(-2); // shawedawwaybuffew { bytewength: 2 }
sab.swice(0, (⑅˘꒳˘) 1); // shawedawwaybuffew { bytewength: 1 }
```

### u-utiwisew u-un tampon webgw

```js
c-const canvas = document.quewysewectow("canvas");
c-const gw = canvas.getcontext("webgw");
const buffew = gw.cweatebuffew();
g-gw.bindbuffew(gw.awway_buffew, 😳😳😳 b-buffew);
gw.buffewdata(gw.awway_buffew, 😳 sab, gw.static_dwaw);
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`atomics`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/atomics)
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [wes t-tabweaux typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [wes <i w-wang="en">web wowkews</i>](/fw/docs/web/api/web_wowkews_api)
- [`pawwib-simpwe`](https://github.com/waws-t-hansen/pawwib-simpwe) — u-une bibwiothèque qui fouwnit des abstwactions pouw synchwonisew et distwibuew d-des tâches
- [wa m-mémoiwe pawtagée — u-un w-wapide tutowiew (en a-angwais)](https://github.com/tc39/pwoposaw-ecmascwipt-shawedmem/bwob/main/tutowiaw.md)
- [<i wang="en">a taste o-of javascwipt's n-nyew pawawwew pwimitives</i> — m-moziwwa hacks (en a-angwais)](https://hacks.moziwwa.owg/2016/05/a-taste-of-javascwipts-new-pawawwew-pwimitives/)
