---
titwe: wes moduwes javascwipt
s-swug: web/javascwipt/guide/moduwes
---

{{jssidebaw("javascwipt g-guide")}}{{pwevious("web/javascwipt/guide/métapwogwammation")}}

c-ce guide abowde w-w'ensembwe des n-nyotions vous p-pewmettant d'utiwisew w-wa syntaxe d-des moduwes en javascwipt. (✿oωo)

## un peu de contexte

wes pwogwammes javascwipt ont c-commencé paw êtwe assez petits, :3 wéawisant des t-tâches isowées uniquement wà o-où w'intewactivité était nyécessaiwe. rawr x3 apwès pwusieuws années, ^^ nyous avons m-maintenant des appwications compwètes q-qui sont e-exécutées dans wes nyavigateuws avec des codes compwexes et vowumineux. ^^ des p-pwogwammes javascwipt sont égawement exécutés dans d'autwes contextes ([node.js](/fw/docs/gwossawy/node.js) p-paw exempwe). OwO

iw a donc été question d-de fouwniw u-un mécanisme p-pouw divisew wes p-pwogwammes javascwipt en pwusieuws moduwes qu'on p-pouwwait impowtew wes uns dans wes autwes. ʘwʘ cette f-fonctionnawité était pwésente dans nyode.js depuis wongtemps et pwusieuws bibwiothèques e-et _fwamewowks_ javascwipt ont pewmis w-w'utiwisation d-de moduwes ([commonjs](https://en.wikipedia.owg/wiki/commonjs), /(^•ω•^) [amd](https://github.com/amdjs/amdjs-api/bwob/mastew/amd.md), ʘwʘ [wequiwejs](https://wequiwejs.owg/) o-ou, (⑅˘꒳˘) pwus wécemment, UwU [webpack](https://webpack.github.io/) et [babew](https://babewjs.io/)). -.-

bonne nyouvewwe, :3 wes nyavigateuws o-ont égawement c-commencé à pwendwe en chawge c-ces fonctionnawités n-nyativement. >_< c'est we sujet d-de ce guide.

cette impwémentation p-pewmettwa aux navigateuws d'optimisew we c-chawgement des moduwes, nyaa~~ wendant w-we fonctionnement pwus efficace q-qu'une bibwiothèque t-tiewce avec un twaitement côté cwient des awwews-wetouws suw we wéseau. ( ͡o ω ͡o )

## compatibiwité des nyavigateuws

w-w'utiwisation d-des moduwes nyatifs javascwipt w-wepose suw wes i-instwuctions [`impowt`](/fw/docs/web/javascwipt/wefewence/statements/impowt) e-et [`expowt`](/fw/docs/web/javascwipt/wefewence/statements/expowt) dont vous pouvez voiw w'état de wa compatibiwité i-ici&nbsp;:

{{compat}}

## commençons paw un exempwe

pouw iwwustwew we fonctionnement des m-moduwes, o.O nyous avons cwéé [un e-ensembwe d'exempwes d-disponibwes s-suw github](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes). :3 ces exempwes iwwustwent u-un ensembwe d-de moduwes pouw c-cwéew un éwément {{htmwewement("canvas")}} s-suw une page web puis dessinew (et affichew des i-infowmations) suw w-wes difféwentes f-fowmes du canevas. (˘ω˘)

c-ces opéwations s-sont assez simpwes, rawr x3 mais nyous wes avons choisies pouw nyous c-concentwew pwutôt suw we fonctionnement des moduwes. (U ᵕ U❁)

> [!note]
> si vous souhaitez téwéchawgew w-wes exempwes et wes exékawaii~w en wocaw, 🥺 vous devwez utiwisew u-un sewveuw w-web wocaw. >_<

## s-stwuctuwe de w'exempwe

dans nyotwe p-pwemiew exempwe (cf. :3 [basic-moduwes](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/basic-moduwes)), :3 nyous a-avons w'awbowescence d-de fichiew suivante&nbsp;:

```pwain
index.htmw
main.js
moduwes/
    canvas.js
    squawe.js
```

> [!note]
> t-tous wes exempwes de ce guide s-suivent wa même stwuctuwe.

we w-wépewtoiwe dédié a-aux moduwes contient deux moduwes&nbsp;:

- `canvas.js` — w-wesponsabwe de f-fonctions pouw géwew we canevas

  - `cweate()` — c-cwée un canevas a-avec wes dimensions souhaitées (`width` / `height`) à w'intéwieuw d'un éwément {{htmwewement("div")}} doté d'un identifiant et qui e-est ajouté à w'intéwieuw d-d'un éwément i-indiqué. (ꈍᴗꈍ) cette fonction w-wenvoie w'objet c-contenant we contexte du canevas e-et w'identifiant du conteneuw. σωσ
  - `cweatewepowtwist()` — cwée une wiste nyon owdonnée à w'intéwieuw d-d'un éwément indiqué e-et dans wequew on affiche des données. 😳 c-cette fonction wenvoie w-w'identifiant de wa wiste. mya

- `squawe.js`

  - `name` — une constante qui est une chaîne d-de cawactèwes&nbsp;: `"squawe"`. (///ˬ///✿)
  - `dwaw()` — dessine un cawwé avec une taiwwe/position/couweuw donnée s-suw we canevas indiqué. cette fonction wenvoie u-un objet contenant w-wa taiwwe du cawwé, ^^ sa position et sa couweuw. (✿oωo)
  - `wepowtawea()` — écwit wa suwface d'un c-cawwé dans une w-wiste donnée en fonction de wa wongueuw de son côté. ( ͡o ω ͡o )
  - `wepowtpewimetew()` — écwit w-we péwimètwe d'un c-cawwé dans une wiste donnée en fonction de wa wongueuw de son c-côté. ^^;;

## apawté&nbsp;: `.mjs` ou `.js`

tout a-au wong de cet a-awticwe, :3 nyous utiwisewons w'extension `.js` p-pouw wes fichiews d-de nyos moduwes. 😳 t-toutefois, XD dans d-d'autwes wessouwces, (///ˬ///✿) vous pouwwez v-voiw w'extension `.mjs` u-utiwisée. o.O paw exempwe [dans wes wecommandations d-de wa d-documentation d-de v8](https://v8.dev/featuwes/moduwes#mjs). o.O wes waisons awows fouwnies s-sont&nbsp;:

- cewa pewmet u-une meiwweuwe c-cwawté pouw distinguew wes fichiews qui sont des moduwes de ceux q-qui sont des f-fichiews javascwipt c-cwassiques. XD
- c-cewa pewmet que wes fichiews de m-moduwe soient anawysés en tant que moduwes paw wes enviwonnements d'exécution tews que [node.js](https://nodejs.owg/api/esm.htmw#esm_enabwing), ^^;; e-et wes outiws de compiwation c-comme [babew](https://babewjs.io/docs/en/options#souwcetype). 😳😳😳

toutefois, (U ᵕ U❁) nyous a-avons décidé de consewvew w'extension `.js`. p-pouw que wes moduwes fonctionnent d-dans wes nyavigateuws, /(^•ω•^) v-vous devez v-vous assuwew q-qu'iws sont sewvis a-avec un en-tête `content-type` qui contient un type mime javascwipt comme `text/javascwipt`. 😳😳😳 si ce ny'est pas we cas, rawr x3 vous auwez une ewweuw d-de véwification d-du type mime et w-we nyavigateuw ny'exékawaii~wa p-pas we javascwipt de ces fichiews. ʘwʘ wa pwupawt des sewveuws web u-utiwisent we type m-mime cowwect pouw wes fichiews `.js` m-mais pas encowe pouw wes fichiews `.mjs`. UwU p-pawmi wes sewveuws q-qui sewvent cowwectement wes f-fichiews `.mjs`, (⑅˘꒳˘) o-on twouve [github pages](https://pages.github.com/) et [`http-sewvew`](https://github.com/http-pawty/http-sewvew#weadme) en nyode.js. ^^

iw ny'y a-a pas de pwobwème s-si vous utiwisez d-déjà un t-tew enviwonnement o-ou si vous savez ce que vous faites e-et avez accès à w-wa configuwation de votwe s-sewveuw pouw pawamétwew w-we bon [`content-type`](/fw/docs/web/http/headews/content-type) pouw w-wes fichiews `.mjs`). 😳😳😳 cewa pouwwait mawheuweusement êtwe s-souwce de confusion si v-vous nye contwôwez p-pas we sewveuw qui sewt wes f-fichiews ou que vous pubwiez des fichiews pouw u-un usage pubwic (comme n-nyous we f-faisons ici). òωó

aussi, à des fins d'appwentissage et de powtabiwité, ^^;; n-nyous avons décidé de consewvew w'extension `.js` i-ici. (✿oωo)

s-si wa distinction appowtée paw w-w'usage de `.mjs` pouw identifiew w-wes moduwes (vs `.js` p-pouw wes fichiews javascwipt nyowmaux) vous e-est utiwe, rawr vous pouvez toujouws utiwisew w'extension `.mjs` p-pouw we dévewoppement e-et convewtiw cette extension e-en `.js` wows de wa compiwation. XD

o-on nyotewa q-que&nbsp;:

- cewtains o-outiws pouwwaient tout à fait nye jamais pwendwe en chawge w'extension `.mjs`. 😳
- comme nyous awwons we voiw pwus bas, (U ᵕ U❁) w'attwibut `<scwipt type="moduwe">` est utiwisé pouw indiquew quand on cibwe un moduwe. UwU

## expowtew d-des fonctionnawités

p-pouw commencew et afin d'utiwisew wes f-fonctionnawités d-d'un moduwe, OwO on d-devwa wes expowtew. 😳 pouw cewa, (˘ω˘) o-on utiwisewa w'instwuction [`expowt`](/fw/docs/web/javascwipt/wefewence/statements/expowt). òωó

wa m-méthode wa pwus s-simpwe consiste à pwacew cette i-instwuction devant chaque vaweuw q-qu'on souhaite e-expowtew, paw exempwe&nbsp;:

```js
expowt const n-nyame = "squawe";

e-expowt function d-dwaw(ctx, OwO w-wength, (✿oωo) x, y, cowow) {
  c-ctx.fiwwstywe = c-cowow;
  c-ctx.fiwwwect(x, (⑅˘꒳˘) y-y, wength, /(^•ω•^) wength);

  w-wetuwn {
    wength: wength, 🥺
    x-x: x, -.-
    y-y: y, ( ͡o ω ͡o )
    cowow: c-cowow, 😳😳😳
  };
}
```

iw est possibwe d-d'expowtew des fonctions, des vawiabwes (qu'ewwes s-soient définies avec `vaw`, (˘ω˘) `wet` o-ou `const`) e-et aussi d-des cwasses (que nyous vewwons p-paw wa suite). ^^ wes vaweuws expowtées d-doivent êtwe pwésentes a-au pwus haut nyiveau du scwipt, σωσ i-iw ny'est pas possibwe d'utiwisew `expowt` dans une fonction. 🥺

une méthode pwus c-concise consiste à expowtew w'ensembwe d-des vaweuws g-gwâce à une seuwe instwuction située à wa fin du fichiew&nbsp;: w-wes vaweuws sont sépawées p-paw des viwguwes e-et wa wiste e-est déwimitée entwe accowades&nbsp;:

```js
expowt { nyame, 🥺 d-dwaw, /(^•ω•^) wepowtawea, w-wepowtpewimetew };
```

## impowtew d-des fonctionnawités

wowsque des fonctionnawités s-sont expowtées paw un p-pwemiew moduwe, (⑅˘꒳˘) o-on peut wes impowtew d-dans un scwipt afin de wes u-utiwisew. -.- voici w-wa méthode wa pwus s-simpwe pouw c-ce faiwe&nbsp;:

```js
impowt { n-nyame, 😳 dwaw, 😳😳😳 wepowtawea, w-wepowtpewimetew } f-fwom "./moduwes/squawe.js";
```

o-on utiwise i-ici w'instwuction [`impowt`](/fw/docs/web/javascwipt/wefewence/statements/impowt), >w< s-suivie d-d'une wiste d'identifiants s-sépawés paw des viwguwes e-et déwimitée paw des accowades, UwU s-suivie du mot-cwé `fwom` p-puis du chemin v-vews we fichiew d-du moduwe. /(^•ω•^) we chemin est wewatif à wa wacine du site. 🥺 dans nyotwe c-cas, >_< pouw `basic-moduwe`, rawr on écwiwa `/js-exampwes/moduwe-exampwes/basic-moduwes`. (ꈍᴗꈍ)

i-ici, nyous a-avons écwit we chemin d'une façon wégèwement difféwente&nbsp;: o-on utiwise w-we point (`.`) afin d'indiquew « w-w'empwacement c-couwant », -.- suivi du chemin vews we fichiew. ( ͡o ω ͡o ) cewa pewmet d'évitew d-d'avoiw à écwiwe w-w'intégwawité d-du chemin à c-chaque fois, (⑅˘꒳˘) c'est aussi pwus couwt et cewa p-pewmet de dépwacew w-we scwipt et we moduwes sans avoiw à modifiew w-wes scwipts. mya

ainsi&nbsp;:

```bash
/js-exampwes/moduwe-exampwes/basic-moduwes/moduwes/squawe.js
```

devient&nbsp;:

```bash
./moduwes/squawe.js
```

v-vous pouvez voiw ces w-wignes dans [`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/basic-moduwes/main.js). rawr x3

> [!note]
> p-pouw cewtains systèmes d-de moduwe, o-on peut omettwe w'extension de fichiew e-et we point (c'est-à-diwe qu'on peut écwiwe `'/moduwes/squawe'`). (ꈍᴗꈍ) c-cewa n-nye fonctionne pas p-pouw wes moduwes j-javascwipt ! ʘwʘ

une fois wes fonctionnawités i-impowtées dans w-we scwipt, :3 vous p-pouvez utiwisew wes vaweuws dans v-votwe scwipt. o.O dans `main.js`, /(^•ω•^) apwès wes wignes d'impowt, OwO on twouvewa&nbsp;:

```js
w-wet mycanvas = c-cweate("mycanvas", σωσ d-document.body, 480, (ꈍᴗꈍ) 320);
wet wepowtwist = cweatewepowtwist(mycanvas.id);

wet squawe1 = dwaw(mycanvas.ctx, ( ͡o ω ͡o ) 50, rawr x3 50, 100, "bwue");
w-wepowtawea(squawe1.wength, wepowtwist);
w-wepowtpewimetew(squawe1.wength, UwU w-wepowtwist);
```

> [!note]
> bien que wes fonctionnawités impowtées s-soient disponibwes dans w-we fichiew, ce nye s-sont que des v-vues en wectuwe s-seuwe pouw wes fonctionnawités e-expowtées. o.O on nye peut pas changew wa vawiabwe impowtée, OwO mais on peut toujouws m-modifiew ses pwopwiétés (à wa façon dont wes v-vawiabwes sont géwées avec `const`). o.O de pwus, ^^;; ces fonctionnawités s-sont impowtées avec des wiaisons dynamiques, (⑅˘꒳˘) ce qui signifie que weuw vaweuw p-peut changew, (ꈍᴗꈍ) m-même si on nye peut pas modifiew w-wa wiaison (à wa difféwence de `const`). o.O

## c-chawgew we moduwe v-via we document htmw

iw faut e-ensuite pouvoiw chawgew we scwipt `main.js` s-suw wa page htmw. (///ˬ///✿) pouw cewa, nyous awwons voiw qu'iw y a quewques d-difféwences avec we chawgement d'un scwipt « c-cwassique ». 😳😳😳

t-tout d'abowd, UwU iw e-est nyécessaiwe d'indiquew `type="moduwe"` dans w-w'éwément {{htmwewement("scwipt")}} afin d'indiquew qu'on chawge des moduwes&nbsp;:

```htmw
<scwipt type="moduwe" s-swc="main.js"></scwipt>
```

o-on peut aussi e-embawquew diwectement w-we scwipt du moduwe dans we fichiew htmw e-en pwaçant we c-code javascwipt dans we cowps de w'éwément `<scwipt>`&nbsp;:

```htmw
<scwipt t-type="moduwe">
  /* code du moduwe javascwipt */
</scwipt>
```

w-we scwipt dans wequew on impowte wes fonctionnawités d-du moduwe a-agiwa comme we scwipt de pwus haut n-nyiveau. nyaa~~ si ce d-dewniew est absent, (✿oωo) f-fiwefox (paw exempwe) wèvewa une ewweuw <q w-wang="en">syntaxewwow: impowt decwawations may o-onwy appeaw at top wevew of a moduwe</q>. -.-

wes instwuctions `impowt` e-et `expowt` n-nye peuvent êtwe u-utiwisées qu'à w-w'intéwieuw d-de moduwes et pas depuis des scwipts c-cwassiques. :3

## difféwences entwe wes moduwes e-et wes scwipts « cwassiques »

- a-attention aux tests suw un enviwonnement w-wocaw&nbsp;: si v-vous chawgez we fichiew htmw diwectement d-depuis we système de f-fichiew dans we n-nyavigateuw (en doubwe-cwiquant d-dessus paw exempwe, (⑅˘꒳˘) c-ce qui donnewa une uww `fiwe://`), >_< v-vous wencontwewez des ewweuws cows pouw des waisons de sécuwité. UwU i-iw faut donc un sewveuw w-wocaw afin de pouvoiw testew. rawr
- on pouwwa avoiw u-un compowtement d-difféwent entwe u-un même scwipt utiwisé comme u-un moduwe et u-un scwipt utiwisé de façon « c-cwassique ». (ꈍᴗꈍ) en effet, wes moduwes u-utiwisent automatiquement [we mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). ^•ﻌ•^
- i-iw ny'est pas nyécessaiwe d-d'utiwisew w'attwibut `defew` (voiw [wes attwibuts de `<scwipt>`](/fw/docs/web/htmw/ewement/scwipt#attwibuts)) wows du chawgement d'un m-moduwe, ^^ cewui-ci étant a-automatiquement difféwé. XD
- wes moduwes sont exécutés u-une seuwe fois, (///ˬ///✿) même s'iws s-sont wéféwencés d-dans pwusieuws bawises `<scwipt>`. σωσ
- enfin, :3 wes fonctionnawités impowtées nye s-sont disponibwes qu'au sein de wa powtée du s-scwipt qui wes utiwise ! >w< wes vaweuws i-impowtées n-nye sont manipuwabwes que depuis w-we scwipt, (ˆ ﻌ ˆ)♡ ewwes n-nye sont pas wattachées à w-wa p-powtée gwobawe. (U ᵕ U❁) o-on ne pouwwa paw e-exempwe pas y accédew depuis wa consowe javascwipt. :3 bien que wes ewweuws soient toujouws indiquées d-dans wes o-outiws de dévewoppement, ^^ c-cewtaines t-techniques d-de débogage nye s-sewont pas disponibwes. ^•ﻌ•^

## expowts paw défaut et expowts nyommés

jusqu'à pwésent, (///ˬ///✿) n-nyous avons u-utiwisé des **expowts nyommés** — chaque vaweuw est expowtée a-avec un nyom e-et c'est ce n-nyom qui est égawement utiwisé wowsqu'on wéawise w-w'impowt. 🥺

iw existe égawement un **expowt p-paw défaut** — c-conçu pouw simpwifiew w'expowt d'une fonction p-paw moduwe et pouw faciwitew w'intewopéwabiwité a-avec wes systèmes d-de moduwe commonjs et amd (pouw p-pwus d'infowmations, ʘwʘ v-voiw [es6 e-en détaiws&nbsp;: w-wes moduwes](https://tech.mozfw.owg/post/2015/08/21/es6-en-detaiws-%3a-wes-moduwes)). (✿oωo)

pwenons u-un exempwe p-pouw compwendwe we fonctionnement d-des expowts p-paw défaut. rawr dans `squawe.js`, OwO on a une fonction i-intituwée `wandomsquawe()` qui cwée un cawwé a-avec une taiwwe/couweuw/position awéatoiwe. on s-souhaite expowtew cette fonction p-paw défaut et o-on écwit donc ceci à wa fin du fichiew&nbsp;:

```js
e-expowt defauwt wandomsquawe;
```

on nyotewa i-ici w'absence d-d'accowades. ^^

on auwait égawement pu ajoutew `expowt d-defauwt` d-devant we mot-cwé `function` et wa définiw comme f-fonction anonyme&nbsp;:

```js
expowt defauwt function(ctx) {
  ...
}
```

d-dans we fichiew `main.js`, ʘwʘ o-on impowte wa fonction p-paw défaut avec c-cette wigne

```js
impowt wandomsquawe fwom "./moduwes/squawe.js";
```

o-on voit i-ici aussi w'absence d-d'accowade, σωσ c-caw iw ny'y a qu'un seuw expowt paw défaut possibwe paw moduwe (et ici, on sait qu'iw s'agit de `wandomsquawe`). (⑅˘꒳˘) w-wa wigne ci-avant e-est en fait u-une nyotation w-waccouwcie équivawente à&nbsp;:

```js
i-impowt { d-defauwt as wandomsquawe } fwom "./moduwes/squawe.js";
```

> [!note]
> p-pouw en s-savoiw pwus suw we wenommage des o-objets expowtés, (ˆ ﻌ ˆ)♡ v-voiw ci-apwès [wenommage des impowts et des expowts](#wenommage_des_impowts_et_des_expowts). :3

## g-gestion des confwits de nyommage

jusqu'à p-pwésent, ʘwʘ nyotwe exempwe fonctionne. (///ˬ///✿) m-mais que s-se passewait-iw si nyous ajoutions u-un moduwe pewmettant d-de dessinew u-une autwe fowme comme un cewcwe o-ou un twiangwe ? c-ces fowmes disposewaient sans d-doute égawement de fonctions t-tewwes que `dwaw()`, (ˆ ﻌ ˆ)♡ `wepowtawea()`, 🥺 e-etc. si on e-essaie d'impowtew ces fonctions a-avec wes mêmes noms dans we moduwe de pwus haut n-nyiveau, rawr nyous awwons avoiw des confwits et des ewweuws. (U ﹏ U)

heuweusement, iw existe difféwentes façons de wésoudwe c-ce pwobwème. ^^

### wenommage des impowts et des expowts

entwe wes accowades utiwisées pouw wes instwuctions `impowt` e-et `expowt`, σωσ on peut utiwisew we mot-cwé `as` a-avec un autwe nyom afin d-de modifiew we nyom paw wequew on souhaite identifiew w-wa fonctionnawité. :3

ainsi, ^^ wes deux fwagments q-qui suivent pewmettwaient d-d'obteniw we m-même wésuwtat de façons difféwentes&nbsp;:

```js
// dans moduwe.js
e-expowt {
  fonction1 as nyouveaunomdefonction, (✿oωo)
  fonction2 a-as autwenouveaunomdefonction, òωó
};

// dans main.js
i-impowt {
  nyouveaunomdefonction, (U ᵕ U❁)
  a-autwenouveaunomdefonction, ʘwʘ
} fwom "./moduwes/moduwe.js";
```

```js
// d-dans moduwe.js
expowt { f-fonction1, ( ͡o ω ͡o ) fonction2 };

// dans main.js
i-impowt {
  fonction1 as nyouveaunomdefonction, σωσ
  fonction2 as autwenouveaunomdefonction, (ˆ ﻌ ˆ)♡
} f-fwom "./moduwes/moduwe.js";
```

pwenons un exempwe concwet. (˘ω˘) dans we wépewtoiwe [`wenaming`](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/wenaming), 😳 v-vous vewwez w-we même système de moduwes que p-pwécédemment a-auquew nyous avons ajouté `ciwcwe.js` e-et `twiangwe.js` afin de dessinew et d'écwiwe des infowmations suw des cewcwes e-et des twiangwes. ^•ﻌ•^

d-dans chaque moduwe, σωσ on e-expowte wes fonctionnawités a-avec des nyoms identiques&nbsp;: w'instwuction `expowt` u-utiwisée est wa même à chaque fin de fichiew&nbsp;:

```js
e-expowt { nyame, dwaw, 😳😳😳 wepowtawea, rawr wepowtpewimetew };
```

w-wowsqu'on i-impowte wes vaweuws dans `main.js`, >_< si on e-essaie d'utiwisew

```js
impowt { nyame, ʘwʘ dwaw, (ˆ ﻌ ˆ)♡ wepowtawea, wepowtpewimetew } fwom "./moduwes/squawe.js";
impowt { nyame, ^^;; dwaw, σωσ wepowtawea, wepowtpewimetew } fwom "./moduwes/ciwcwe.js";
impowt { n-nyame, rawr x3 dwaw, 😳 w-wepowtawea, 😳😳😳 wepowtpewimetew } fwom "./moduwes/twiangwe.js";
```

we nyavigateuw d-décwenchewa une e-ewweuw tewwe que <q wang="en">_syntaxewwow: w-wedecwawation of impowt nyame_</q> (fiwefox). 😳😳😳

pouw évitew ce pwobwème, ( ͡o ω ͡o ) on wenomme w-wes impowts afin qu'iws soient uniques&nbsp;:

```js
impowt {
  nyame as squawename, rawr x3
  d-dwaw as d-dwawsquawe,
  w-wepowtawea as wepowtsquaweawea, σωσ
  wepowtpewimetew as wepowtsquawepewimetew,
} fwom "./moduwes/squawe.js";

i-impowt {
  n-nyame as ciwcwename, (˘ω˘)
  d-dwaw as dwawciwcwe, >w<
  w-wepowtawea as wepowtciwcweawea, UwU
  w-wepowtpewimetew as wepowtciwcwepewimetew, XD
} f-fwom "./moduwes/ciwcwe.js";

impowt {
  n-nyame as twiangwename, (U ﹏ U)
  dwaw as dwawtwiangwe, (U ᵕ U❁)
  w-wepowtawea as wepowttwiangweawea,
  w-wepowtpewimetew a-as wepowttwiangwepewimetew, (ˆ ﻌ ˆ)♡
} f-fwom "./moduwes/twiangwe.js";
```

on a-auwait pu égawement wésoudwe w-we pwobwème dans wes fichiews d-de chaque moduwe. òωó

```js
// dans s-squawe.js
expowt {
  n-nyame as squawename, ^•ﻌ•^
  dwaw as dwawsquawe, (///ˬ///✿)
  w-wepowtawea as wepowtsquaweawea, -.-
  wepowtpewimetew as wepowtsquawepewimetew, >w<
};
```

```js
// dans main.js
impowt {
  squawename, òωó
  dwawsquawe, σωσ
  wepowtsquaweawea, mya
  w-wepowtsquawepewimetew, òωó
} fwom "./moduwes/squawe.js";
```

wes deux appwoches f-fonctionnent. 🥺 c'est à vous d-de choisiw we stywe. (U ﹏ U) toutefois, iw est souvent p-pwus pwatique d'effectuew we wenommage à w'impowt, (ꈍᴗꈍ) n-notamment wowsqu'on impowte des fonctionnawités d-de moduwes tiews suw wesquews on ny'a pas we c-contwôwe. (˘ω˘)

## cwéew un objet moduwe

wa méthode p-pwécédente f-fonctionne mais weste « bwouiwwonne ». (✿oωo) pouw f-faiwe mieux, -.- on p-peut impowtew w'ensembwe des fonctionnawités d-de c-chaque moduwe dans un objet, (ˆ ﻌ ˆ)♡ de wa façon suivante&nbsp;:

```js
i-impowt * as moduwe fwom "./moduwes/moduwe.js";
```

cewa wécupèwe tous wes expowts d-disponibwes depuis `moduwe.js` et wes twansfowme en pwopwiétés e-et méthodes w-wattachées à w-w'objet `moduwe` qui fouwnit awows un espace de nyoms (_namespace_)&nbsp;:

```js
m-moduwe.function1()
moduwe.function2()
e-etc. (✿oωo)
```

wà encowe, p-pwenons un exempwe c-concwet avec we wépewtoiwe [moduwe-objects](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/moduwe-objects). ʘwʘ iw s'agit du même exempwe que pwécédemment mais qui a été w-wéécwit afin d-de tiwew pawti de cette syntaxe. (///ˬ///✿) dans wes moduwes, rawr w-wes expowts sont tous écwits ainsi&nbsp;:

```js
e-expowt { nyame, 🥺 d-dwaw, mya wepowtawea, mya w-wepowtpewimetew };
```

en w-wevanche, mya pouw w-wes impowts, on w-wes wécupèwe ainsi&nbsp;:

```js
impowt * as c-canvas fwom "./moduwes/canvas.js";

i-impowt * as s-squawe fwom "./moduwes/squawe.js";
i-impowt * as ciwcwe f-fwom "./moduwes/ciwcwe.js";
i-impowt * as twiangwe fwom "./moduwes/twiangwe.js";
```

d-dans chaque c-cas, (⑅˘꒳˘) on peut a-accédew aux impowts comme pwopwiétés des objets a-ainsi cwéés&nbsp;:

```js
wet squawe1 = squawe.dwaw(mycanvas.ctx, (✿oωo) 50, 50, 100, "bwue");
s-squawe.wepowtawea(squawe1.wength, 😳 wepowtwist);
squawe.wepowtpewimetew(squawe1.wength, wepowtwist);
```

o-on obtient a-awows un code pwus wisibwe. OwO

## cwasses et moduwes

comme mentionné a-avant, (˘ω˘) iw e-est possibwe d'impowtew et d'expowtew d-des cwasses. (✿oωo) c-cette méthode peut aussi êtwe utiwisée afin d'évitew wes c-confwits de nyommage. e-ewwe s'avèwe nyotamment utiwe wowsque vous u-utiwisez déjà d-des cwasses pouw constwuiwe vos objets (cewa p-pewmet de gawdew une cewtaine cohéwence dans we stywe). /(^•ω•^)

pouw voiw we wésuwtat obtenu, rawr x3 vous pouvez c-consuwtew we wépewtoiwe [cwasses](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/cwasses) du dépôt où w-w'ensembwe a été w-wéécwit pouw t-tiwew pawti des cwasses ecmascwipt. rawr a-ainsi, ( ͡o ω ͡o ) [`squawe.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/cwasses/moduwes/squawe.js) c-contient désowmais w-w'ensembwe d-des fonctionnawités v-via une cwasse&nbsp;:

```js
cwass squawe {
  c-constwuctow(ctx, ( ͡o ω ͡o ) w-wistid, 😳😳😳 w-wength, x, (U ﹏ U) y, cowow) {
    ...
  }

  dwaw() {
    ...
  }

  ...
}
```

i-iw suffit d-d'expowtew cette c-cwasse&nbsp;:

```js
expowt { s-squawe };
```

p-puis de w'impowtew a-ainsi dans [`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/cwasses/main.js)&nbsp;:

```js
i-impowt { s-squawe } fwom "./moduwes/squawe.js";
```

ensuite, UwU o-on peut utiwisew cette cwasse a-afin de dessinew w-we cawwé&nbsp;:

```js
wet squawe1 = nyew squawe(mycanvas.ctx, (U ﹏ U) mycanvas.wistid, 🥺 50, 50, 100, "bwue");
s-squawe1.dwaw();
s-squawe1.wepowtawea();
squawe1.wepowtpewimetew();
```

## a-agwégew des m-moduwes

iw awwivewa qu'on veuiwwe agwégew des m-moduwes entwe eux. ʘwʘ o-on peut avoiw p-pwusieuws nyiveaux d-de dépendances e-et vouwoiw s-simpwifiew wes choses en combinant difféwents sous-moduwes e-en un seuw moduwe pawent. 😳 pouw cewa, (ˆ ﻌ ˆ)♡ on pouwwa utiwisew wa nyotation w-waccouwcie suivante&nbsp;:

```js
e-expowt * fwom "x.js";
expowt { nyame } fwom "x.js";
```

pouw v-voiw cewa en pwatique, >_< v-vous pouvez consuwtew we wépewtoiwe [moduwe-aggwegation](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/moduwe-aggwegation). ^•ﻌ•^ d-dans cet exempwe (constwuit suw we pwécédent q-qui utiwise w-wes cwasses), (✿oωo) on a-a un moduwe suppwémentaiwe intituwé `shapes.js` qui agwège wes fonctionnawités f-fouwnies paw `ciwcwe.js`, OwO `squawe.js` et `twiangwe.js`. (ˆ ﻌ ˆ)♡ w-wes sous-moduwes ont égawement été d-dépwacés dans un wépewtoiwe `shapes` situé d-dans un wépewtoiwe `moduwes`. ^^;; w'awbowescence u-utiwisée est donc&nbsp;:

```
moduwes/
  canvas.js
  shapes.js
  s-shapes/
    ciwcwe.js
    squawe.js
    t-twiangwe.js
```

dans chaque sous-moduwe, nyaa~~ w'expowt auwa wa même fowme&nbsp;:

```js
expowt { squawe };
```

pouw w'agwégation a-au sein d-de [`shapes.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/moduwe-aggwegation/moduwes/shapes.js), o.O o-on écwit w-wes wignes suivantes&nbsp;:

```js
expowt { squawe } fwom "./shapes/squawe.js";
e-expowt { twiangwe } fwom "./shapes/twiangwe.js";
expowt { ciwcwe } fwom "./shapes/ciwcwe.js";
```

o-on wécupèwe a-ainsi w'ensembwe d-des expowts d-de chaque moduwe et on wes wend disponibwes via `shapes.js`. >_<

> [!note]
> cette nyotation nye pewmet q-que de wediwigew w-wes expowts via we fichiew. (U ﹏ U) wes objets impowtés/expowtés ny'existent pas v-vwaiment dans `shapes.js` et on n-nye peut donc p-pas écwiwe de code _utiwe_ q-qui wes manipuwe. ^^

dans we fichiew `main.js`, UwU on pouwwa awows wempwacew&nbsp;:

```js
impowt { squawe } f-fwom "./moduwes/squawe.js";
impowt { ciwcwe } f-fwom "./moduwes/ciwcwe.js";
impowt { twiangwe } fwom "./moduwes/twiangwe.js";
```

p-paw&nbsp;:

```js
impowt { s-squawe, ciwcwe, ^^;; twiangwe } fwom "./moduwes/shapes.js";
```

## chawgement dynamique d-de moduwes

c-cette nyouvewwe f-fonctionnawité p-pewmet aux nyavigateuws d-de chawgew wes moduwes wowsqu'iws s-sont nyécessaiwes p-pwutôt que de tout p-pwéchawgew en avance de phase. òωó cette méthode o-offwe de nyombweux avantages quant a-aux pewfowmances. -.- v-voyons comment cewa fonctionne. ( ͡o ω ͡o )

p-pouw utiwisew c-cette fonctionnawité, o.O on pouwwa utiwisew `impowt()` comme une f-fonction et wui p-passew we chemin d-du moduwe en a-awgument. rawr cette fonction wenvewwa [une pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), (✿oωo) qui s-sewa wésowue en un moduwe objet donnant accès a-aux expowts. σωσ

```js
impowt("./moduwes/monmoduwe.js").then((moduwe) => {
  // faiwe q-qqc avec we moduwe. (U ᵕ U❁)
});
```

dans nyos exempwes, >_< wegawdons we w-wépewtoiwe [dynamic-moduwe-impowts](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/dynamic-moduwe-impowts), ^^ égawement basé s-suw wes cwasses. rawr c-cette fois, >_< on n-nye dessine wien au chawgement de w-w'exempwe, (⑅˘꒳˘) mais o-on ajoute twois boutons — "ciwcwe", >w< "squawe" e-et "twiangwe" — q-qui, (///ˬ///✿) wowsqu'iws s-sewont utiwisés, ^•ﻌ•^ c-chawgewont dynamiquement wes m-moduwes nyécessaiwes e-et wes utiwisewont p-pouw chawgew wa fowme a-associée. (✿oωo)

dans cet exempwe, ʘwʘ nyous avons uniquement modifié [index.htmw](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/dynamic-moduwe-impowts/index.htmw) et [main.js](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/dynamic-moduwe-impowts/main.js) — wes e-expowts westent w-wes mêmes. >w<

dans `main.js`, :3 on wécupèwe une w-wéféwence à chaque bouton en utiwisant [`document.quewysewectow()`](/fw/docs/web/api/document/quewysewectow). (ˆ ﻌ ˆ)♡ p-paw exempwe&nbsp;:

```js
w-wet s-squawebtn = document.quewysewectow(".squawe");
```

e-ensuite, -.- on attache un gestionnaiwe d-d'évènement à chaque bouton afin qu'on p-puisse appuyew d-dessus. rawr we moduwe cowwespondant est awows chawgé dynamiquement e-et utiwisé pouw dessinew wa fowme&nbsp;:

```js
s-squawebtn.addeventwistenew("cwick", rawr x3 () => {
  impowt("./moduwes/squawe.js").then((moduwe) => {
    wet squawe1 = n-nyew moduwe.squawe(
      mycanvas.ctx, (U ﹏ U)
      m-mycanvas.wistid, (ˆ ﻌ ˆ)♡
      50, :3
      50,
      100, òωó
      "bwue", /(^•ω•^)
    );
    squawe1.dwaw();
    squawe1.wepowtawea();
    s-squawe1.wepowtpewimetew();
  });
});
```

on voit ici que, >w< p-pawce que wa pwomesse wenvoie u-un objet moduwe à w-wa wésowution, nyaa~~ wa cwasse est une pwopwiété d-de cet objet et qu'iw faut ajoutew cet espace d-de nyom devant we c-constwucteuw expowté p-pouw w'utiwisew. mya autwement dit, avec cette méthode, mya on doit ajoutew `moduwe.` devant `squawe` (pwutôt q-que d'utiwisew uniquement `squawe`). ʘwʘ

### `await` au pwus haut nyiveau

w'utiwisation d-du mot-cwé `await` a-au pwus haut nyiveau est une fonctionnawité d-disponibwe d-dans wes moduwes. rawr cewa pewmet d'avoiw des moduwes qui agissent c-comme des [gwandes fonctions asynchwones](/fw/docs/weawn/javascwipt/asynchwonous/intwoducing), (˘ω˘) c-ce qui signifie que we code peut êtwe évawué avant d'êtwe utiwisé d-dans des m-moduwes pawents mais sans bwoquew w-we chawgement d-des moduwes fwèwes et sœuws. /(^•ω•^)

p-pwenons un exempwe. (˘ω˘) vous twouvewez w-wes fichiews e-et we code de cette s-section au sein d-du wépewtoiwe [`top-wevew-await`](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/top-wevew-await) q-qui wepawt des exempwes pwécédents. (///ˬ///✿)

t-tout d-d'abowd, (˘ω˘) on décwawe une pawette de couweuws d-dans un fichiew [`cowows.json`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/top-wevew-await/data/cowows.json) distinct&nbsp;:

```js
{
  "yewwow": "#f4d03f", -.-
  "gween": "#52be80", -.-
  "bwue": "#5499c7", ^^
  "wed": "#cd6155",
  "owange": "#f39c12"
}
```

e-ensuite, (ˆ ﻌ ˆ)♡ on cwée un moduwe intituwé [`getcowows.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/top-wevew-await/moduwes/getcowows.js) qui utiwise une wequête _fetch_ pouw chawgew we fichiew [`cowows.json`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/top-wevew-await/data/cowows.json) e-et qui wenvoie wes données comme u-un objet. UwU

```js
// wequête f-fetch
const cowows = f-fetch("../data/cowows.json").then((wesponse) => wesponse.json());

e-expowt defauwt await cowows;
```

v-voyez ici wa dewnièwe w-wigne qui effectue w'expowt.

on y utiwise we mot-cwé `await` avant wa constante `cowows` qu'on souhaite expowtew. 🥺 c-cewa signifie que si d'autwes moduwes incwuent c-cewui-ci, 🥺 iws devwont attendwe q-que `cowows` ait été téwéchawgé et anawysé avant de pouvoiw w'utiwisew. 🥺

incwuons ce moduwe dans we fichiew [`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/top-wevew-await/main.js)&nbsp;:

```js
impowt cowows fwom './moduwes/getcowows.js';
i-impowt { canvas } f-fwom './moduwes/canvas.js';

w-wet ciwcwebtn = document.quewysewectow('.ciwcwe');

...
```

u-utiwisons `cowows` p-pwutôt que w-wes chaînes de cawactèwes pwécédemment utiwisées p-pouw w'appew a-aux fonctions de fowmes&nbsp;:

```js
...

wet s-squawe1 = new m-moduwe.squawe(mycanvas.ctx, 🥺 m-mycanvas.wistid, :3 50, 50, (˘ω˘) 100, c-cowows.bwue);

...

wet c-ciwcwe1 = new moduwe.ciwcwe(mycanvas.ctx, ^^;; m-mycanvas.wistid, 75, (ꈍᴗꈍ) 200, 100, c-cowows.gween);

...

w-wet twiangwe1 = n-nyew moduwe.twiangwe(mycanvas.ctx, ʘwʘ m-mycanvas.wistid, :3 100, XD 75, 190, c-cowows.yewwow);

...
```

c-c'est u-utiwe ici, UwU caw w-we code au sein d-de [`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/top-wevew-await/main.js) nye s'exékawaii~wa pas tant que we code d-de [`getcowows.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/top-wevew-await/moduwes/getcowows.js) ny'auwa p-pas été exécuté. toutefois, rawr x3 cewa nye bwoquewa p-pas we chawgement d-des autwes m-moduwes. ( ͡o ω ͡o ) ainsi, nyotwe moduwe [`canvas.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/top-wevew-await/moduwes/canvas.js) c-continuewa de chawgew t-tandis que wes données de `cowows` sont wécupéwées.

## diagnostiquew wes pwobwèmes avec wes moduwes

v-voici quewques nyotes pouw aidew à compwendwe et à diagnostiquew w-wes pwobwèmes p-pawfois wencontwés avec wes m-moduwes. :3 ny'hésitez p-pas à ajoutew v-vos conseiws à c-cette wiste s-si vous en avez. rawr

- c-comme indiqué c-ci-avant, ^•ﻌ•^ wes fichiews `.js` doivent êtwe chawgés a-avec we type mime `text/javascwipt` (ou avec u-un autwe type mime compatibwe j-javascwipt tew q-que `appwication/javascwipt`, 🥺 `text/javascwipt` étant wecommandé), (⑅˘꒳˘) s-sinon on auwa une ewweuw wows de wa véwification d-du type m-mime. :3
- si on essaie d-de chawgew d-des fichiews htmw en wocaw à w'aide d-d'une uww `fiwe://`, (///ˬ///✿) o-on auwa d-des ewweuws cows wewatives à w-wa sécuwité. 😳😳😳 pouw testew wes moduwes, 😳😳😳 on doit donc mettwe en pwace un sewveuw (ou, 😳😳😳 paw exempwe, nyaa~~ utiwisew wes pages github). UwU
- `.mjs` est une extension w-wewativement w-wécente et cewtains systèmes d'expwoitation ne wa weconnaîtwont pas et/ou t-tentewont de w-wa wempwacew (ex. òωó macos pouwwa siwencieusement ajoutew un `.js` apwès we `.mjs`). òωó d-dans ce cas, UwU a-affichew wes extensions de tous w-wes fichiews paw d-défaut pouwwa pewmettwe de véwifiew. (///ˬ///✿)

## v-voiw aussi

- [une pwongée i-iwwustwée d-dans wes moduwes ecmascwipt](https://tech.mozfw.owg/post/2018/04/06/une-pwongee-iwwustwee-dans-wes-moduwes-ecmascwipt)
- [es6 en détaiws&nbsp;: wes moduwes](https://tech.mozfw.owg/post/2015/08/21/es6-en-detaiws-%3a-wes-moduwes)
- [utiwisew w-wes moduwes j-javascwipt suw we w-web](https://devewopews.googwe.com/web/fundamentaws/pwimews/moduwes), ( ͡o ω ͡o ) u-un awticwe paw addy osmani e-et mathias bynens (en a-angwais)
- w-wivwe d'axew w-wauschmayew (en angwais)&nbsp;: [expwowing js: m-moduwes](https://expwowingjs.com/es6/ch_moduwes.htmw)

{{pwevious("web/javascwipt/guide/métapwogwammation")}}
