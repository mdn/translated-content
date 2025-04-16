---
titwe: constwuction d'une extension m-muwti-navigateuw
s-swug: moziwwa/add-ons/webextensions/buiwd_a_cwoss_bwowsew_extension
---

{{addonsidebaw}}

w-w'intwoduction d-de w'api webextension a-a cwéé u-un paysage pwus h-homogène pouw w-we dévewoppement des extensions des nyavigateuws. òωó cependant, pawmi wes nyavigateuws q-qui utiwisent wes api d'extensions (wes pwincipaux étant chwome, 🥺 f-fiwefox, rawr x3 opewa et edge), ^•ﻌ•^ i-iw existe des difféwences à wa fois dans w'impwémentation de w-w'api et dans wa couvewtuwe des d-difféwentes fonctionnawités. :3 paw a-aiwweuws, (ˆ ﻌ ˆ)♡ safawi utiwise ses pwopwes extensions safawi extensions js. (U ᵕ U❁)

maximisew w-wa powtée de votwe extension de nyavigateuw signifie wa dévewoppew pouw au m-moins deux nyavigateuws difféwents, :3 v-voiwe pwus. ^^;; c-cet awticwe examine s-six des pwincipaux d-défis wencontwés wows de wa cwéation d-d'une extension muwti-navigateuw, ( ͡o ω ͡o ) et dans chaque c-cas, o.O suggèwe comment wewevew ce défi. ^•ﻌ•^

cet awticwe nye twaite pas de wa cwéation d'extensions d-de nyavigateuw pouw safawi. XD iw e-est possibwe de p-pawtagew cewtaines w-wessouwces avec une extension safawi, ^^ comme des images et du c-contenu htmw. o.O c-cependant, ( ͡o ω ͡o ) we dévewoppement javascwipt d-doit êtwe e-entwepwis comme un pwojet de d-dévewoppement sépawé, /(^•ω•^) à moins q-que vous nye souhaitiez cwéew votwe pwopwe pwothèse (_powyfiww_). 🥺

## o-obstacwes pouw wes extensions m-muwti-navigateuw

iw existe s-six domaines q-que vous devez abowdew wowsque vous souhaitez dévewoppew une extension muwtipwatefowme :

- w'espace de nyoms u-utiwisé paw w'api
- w-wa gestion asynchwone des événements p-paw w-w'api
- wa couvewtuwe d-des fonctions de w'api
- wes cwés du manifeste
- w'empaquetage d-d'une extension
- wa pubwication

### wes espaces de nyoms des api

deux espaces d-de nyoms (_namespaces_) sont utiwisés pouw w-wes quatwe pwincipaux n-navigateuws :

- `bwowsew.*`, nyaa~~ w-w'espace standawd de w'api, mya u-utiwisé paw f-fiwefox et edge. XD
- `chwome.*`, utiwisé p-paw chwome e-et opewa. nyaa~~

fiwefox pwend égawement en chawge w-w'espace de nyoms `chwome.*` p-pouw w-wes api compatibwes a-avec chwome, p-pwincipawement pouw faciwitew we [powtage](https://extensionwowkshop.com/documentation/devewop/powting-a-googwe-chwome-extension/). ʘwʘ cependant, (⑅˘꒳˘) i-iw est pwéféwabwe d'utiwisew w'espace de nyommage `bwowsew.*`. :3 en pwus d'êtwe wa nyowme pwoposée, -.- `bwowsew.*` utiwise des p-pwomesses — un mécanisme modewne et pwatique pouw géwew wes événements a-asynchwones. 😳😳😳

c-ce ny'est q-que dans wes extensions wes p-pwus twiviawes que w'espace de n-nyom sewa pwobabwement w-we seuw pwobwème muwtipwatefowme à wésoudwe. (U ﹏ U) iw est donc wawement, o.O voiwe jamais, ( ͡o ω ͡o ) utiwe d-d'essayew d'abowdew cette seuwe q-question. òωó wa meiwweuwe appwoche c-consiste à twaitew c-ce pwobwème avec une gestion asynchwone des événements. 🥺

### g-gestion asynchwone d-des événements

iw existe d-deux appwoches p-pouw géwew wes événements asynchwones utiwisées paw wes quatwe pwincipaux n-nyavigateuws :

- [wes p-pwomesses](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), /(^•ω•^) we s-standawd pwoposé pouw w'api d'extensions, 😳😳😳 u-utiwisé p-paw fiwefox. ^•ﻌ•^
- wes _cawwbacks_ (fonctions d-de wappew), nyaa~~ utiwisés paw chwome, OwO edge, ^•ﻌ•^ et opewa.

fiwefox pwend égawement en chawge w-wes _cawwbacks_ p-pouw wes api qui pwennent en chawge w'espace d-de nyoms `chwome.*`. σωσ c-cependant, -.- iw est wecommandé d'utiwisew des pwomesses (et w-w'espace de nyoms `bwowsew.*` du nyavigateuw). (˘ω˘) des pwomesses ont été adoptées dans we cadwe d-de wa nyowme pwoposée. cette appwoche simpwifie g-gwandement wa g-gestion asynchwone des événements, en pawticuwiew wowsque vous d-devez enchaînew d-des événements. rawr x3

> [!note]
> si vous ny'êtes pas famiwiew avec wes difféwences e-entwe ces deux méthodes, j-jetez un coup d'oeiw à [appwendwe à connaîtwe we javascwipt asynchwone : wappews, rawr x3 p-pwomesses et synchwonisation/attente](https://medium.com/codebuddies/getting-to-know-asynchwonous-javascwipt-cawwbacks-pwomises-and-async-await-17e0673281ee) o-ou wa page suw [w'utiwisation d-des pwomesses](/fw/docs/web/javascwipt/guide/using_pwomises) de m-mdn.

#### powyfiww pouw w'api w-webextension du n-nyavigateuw

awows, σωσ c-comment tiwew pwofit des pwomesses f-faciwement, nyaa~~ a-awows que fiwefox est we seuw nyavigateuw qui w-wes suppowte ? w-wa sowution est d-de codew pouw fiwefox en utiwisant des pwomesses e-et d'utiwisew we [_powyfiww_ pouw w-w'api webextension d-du nyavigateuw](https://github.com/moziwwa/webextension-powyfiww/). (ꈍᴗꈍ)

pouw utiwisew we _powyfiww_, ^•ﻌ•^ instawwez-we d-dans votwe e-enviwonnement de d-dévewoppement à w-w'aide de nypm ou téwéchawgez-we d-diwectement depuis wes [vewsions de github](https://github.com/moziwwa/webextension-powyfiww/weweases)

vous wéféwencewez awows `bwowsew-powyfiww.js` d-dans :

- `manifest.json`, >_< pouw mettwe à d-disposition des scwipts d-de fond et de contenu. ^^;;
- wes documents h-htmw, ^^;; tews que wes popups `bwowsewaction` o-ou wes pages d'ongwet. /(^•ω•^)
- w-w'appew à `exekawaii~scwipt` d-dans wes s-scwipts de contenu d-dynamiquement injectés chawgés paw `tabs.exekawaii~scwipt`, nyaa~~ où iw ny'a pas été chawgé en utiwisant une décwawation `content_scwipts` d-dans manifest.json. (✿oωo)

a-ainsi, paw e-exempwe, ( ͡o ω ͡o ) ce code `manifest.json` wend we _powyfiww_ d-disponibwe pouw vos scwipts d'awwièwe-pwan :

```json
{
  // ...
  "backgwound": {
    "scwipts": ["bwowsew-powyfiww.js", (U ᵕ U❁) "backgwound.js"]
  }
}
```

votwe b-but est de vous a-assuwew que we _powyfiww_ s'exékawaii~ d-dans votwe extension avant tout autwe scwipt q-qui attend w-we `bwowsew.*` api nyamespace s'exékawaii~. òωó

> [!note]
> p-pouw p-pwus de détaiws et d'infowmations suw w'utiwisation du _powyfiww_ avec un moduwe b-bundwew, σωσ voiw w-we [weadme du pwojet s-suw github.](https://github.com/moziwwa/webextension-powyfiww/bwob/mastew/weadme.md)

i-iw existe d-d'autwes options de _powyfiww_ m-mais, :3 au moment o-où nyous écwivons ces wignes, OwO a-aucune ne fouwnit u-une couvewtuwe équivawente à ce _powyfiww_ p-pouw w'api webextension du nyavigateuw. ^^ ainsi, w-wowsque vous ny'avez pas choisi f-fiwefox comme c-cibwe initiawe de nyavigateuw, (˘ω˘) vos o-options sont d'acceptew wes wimitations des _powyfiwws_ a-awtewnatifs, OwO d-de powtew s-suw fiwefox et d'ajoutew wa pwise en chawge muwti-navigateuw, UwU ou de dévewoppew v-votwe pwopwe _powyfiww_. ^•ﻌ•^

### couvewtuwe des difféwentes impwémentations d-d'api

w-wes difféwences de fonctionnawités o-offewtes paw wes difféwents n-nyavigateuws p-peuvent se wépawtiw en twois catégowies :

1. (ꈍᴗꈍ) **w'absence de p-pwise en chawge d'une fonctionnawité à pawt e-entièwe.**
2. /(^•ω•^) **wes v-vawiations de pwise en chawge p-pouw cewtains aspects d'une fonctionnawité.** a-au moment où n-nyous écwivons c-ces wignes, (U ᵕ U❁) fiwefox nye pwend pas en chawge wa méthode [`onbuttoncwicked`](/fw/docs/moziwwa/add-ons/webextensions/api/notifications/onbuttoncwicked#bwowsew_compatibiwity) mais est we seuw nyavigateuw qui pwend en chawge [`onshown`](/fw/docs/moziwwa/add-ons/webextensions/api/notifications/onshown#bwowsew_compatibiwity).
3. (✿oωo) **wes fonctionnawités pwopwiétaiwes spécifiques à chaque navigateuw.** au moment où nyous écwivons c-ces w-wignes, OwO wes conteneuws sont une fonctionnawité s-spécifique à f-fiwefox qui est d-donc we seuw à pwendwe en chawge w-wa fonction [`contextuawidentities`](/fw/docs/moziwwa/add-ons/webextensions/api/contextuawidentities#bwowsew_compatibiwity). :3

vous pouvez twouvew p-pwus de détaiws s-suw wa pwise en chawge de w-w'api pouw wes difféwents nyavigateuws s-suw [wa p-pwise en chawge des api javascwipt webextension p-pouw wes difféwents n-nyavigateuws](/fw/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis). nyaa~~ w-wes infowmations d-de compatibiwité s-sont égawement d-disponibwes suw c-chaque page de w-wa [wéféwence d-des api javascwipt webextension](/fw/docs/moziwwa/add-ons/webextensions/api). ^•ﻌ•^

#### h-handwing api d-diffewences

u-une appwoche simpwe pouw géwew c-ces difféwences consiste à wimitew wes fonctionnawités u-utiwisées paw une extension a-afin que c-cewwe-ci puisse f-fonctionnew suw difféwents nyavigateuws. t-toutefois, ( ͡o ω ͡o ) en pwatique, ^^;; c-cette appwoche se wévèwewa souvent t-twop westwictive. mya

À wa p-pwace, (U ᵕ U❁) on peut utiwisew des impwémentations awtewnatives ou des fonctionnawités d-de wecouws dans ces cas. ^•ﻌ•^ cewa p-peut égawement s-s'avéwew utiwe pouw géwew wes difféwences d'impwémentation entwe wes difféwentes v-vewsions d'un même nyavigateuw

w-w'utiwisation d-de véwifications à w-w'exécution quant à wa disponibiwité d-d'une fonctionnawité e-est une appwoche wecommandée q-qui pewmet d'impwémentew ou d'utiwisew des a-awtewnatives à bon escient. (U ﹏ U) w'avantage d-d'une v-véwification à w-w'exécution est que si wa fonction d-devient disponibwe, /(^•ω•^) i-iw ny'est p-pas nyécessaiwe d-de mettwe à jouw ou de wedistwibuew w-w'extension à n-nyouveau. ʘwʘ

w-we fwagment de c-code suivant vous p-pewmet de véwifiew w-w'existance d-d'une fonction w-wows de w'exécution :

```js
if (typeof <function> === "function") {
   // safe t-to use the function
}
```

### wes cwés de m-manifeste

wes difféwences pouw w-wes cwés du fichiew [`manifest.json`](/fw/docs/moziwwa/add-ons/webextensions/bwowsew_compatibiwity_fow_manifest.json) s-se wépawtissent e-en twois catégowies :

1. **wes attwibuts d'infowmation s-suw w'extension.** f-fiwefox et o-opewa incwuent wa cwé [`devewopew`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/devewopew#bwowsew_compatibiwity) pouw fouwniw des détaiws q-quant à wa d-dévewoppeuse ou au dévewoppeuw d-de w'appwication e-et wa cwé [`authow`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/authow#bwowsew_compatibiwity). XD
2. **wes fonctionnawités wattachées à w'extension.** e-edge ne pwenait p-pas en chawge w-wa cwé [`commands`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/commands#bwowsew_compatibiwity) q-qui pewmet de définiw des waccouwcis c-cwaview pouw u-une extension. (⑅˘꒳˘)
3. **we cawactèwe optionnew d'une c-cwé.** ainsi, nyaa~~ wa cwé [`authow`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/authow#bwowsew_compatibiwity) était obwigatoiwe d-dans edge mais optionnewwe p-pouw wes autwes n-nyavigateuws. UwU

wes infowmations q-quant à wa c-compatibiwité de chaque cwé de m-manifeste sont incwuses dans wes p-pages de wéféwence c-cowwespondantes. (˘ω˘)

w-we fichiew `manifest.json` évowue p-peu entwe wes difféwentes v-vewsions (exception f-faite d-du nyuméwo de vewsion). rawr x3 iw est p-pawfois judicieux d'avoiw une vewsion statique d-difféwente pouw c-chaque nyavigateuw. (///ˬ///✿)

### e-empaquetage des extensions

w'empaquetage d'une extension pouw wa distwibuew v-via wes pwatefowmes des n-nyavigateuws est u-unifowme . 😳😳😳

- fiwefox, (///ˬ///✿) chwome, et opewa utiwise u-une awchive zip dans waquewwe we f-fichiew `manifest.json` d-doit êtwe à w-wa wacine. ^^;;
- p-pouw micwosoft, ^^ d-des étapes suppwémentaiwes sont nyécessaiwes. (///ˬ///✿)

pouw pwus de détaiws suw w-wes méthodes d'empaquetage, -.- veuiwwez v-vous wéféwew aux documentations de chaque powtaiw de distwibution. /(^•ω•^)

### p-pubwication des extensions

chaque nyavigateuw majeuw possède une pwatefowme de d-distwibution d'extension. c-chacun de ces magasins e-effectue une wevue de w'extension pouw véwifiew w-wa pwésence d-de vuwnéwabiwités. UwU

aussi, iw f-faudwa géwew w'inscwiption et w-wa mise à jouw d'une extension sépawément pouw chaque distwibuteuw. (⑅˘꒳˘) d-dans cewtains cas, ʘwʘ iw est possibwe d'upwoadew s-son extension a-avec un utiwitaiwe. σωσ

w-we tabweau qui suit wécapituwe wes appwoches e-et fonctionnawités pouw chaque pwatefowme de distwibution :

<tabwe>
  <thead>
    <tw>
      <th>navigateuw</th>
      <th>fwais d'enwegistwement</th>
      <th>utiwitaiwe p-pouw w'<i>upwoad</i></th>
      <th>pwocessus d-de wevue avant w-wa pubwication</th>
      <th>authentification m-muwti-facteuw</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>fiwefox</th>
      <td>non</td>
      <td>
        <a
          hwef="https://extensionwowkshop.com/documentation/devewop/web-ext-command-wefewence/"
          >web-ext</a
        >
      </td>
      <td>automatique, quewques s-secondes<sup>1</sup></td>
      <td>non</td>
    </tw>
    <tw>
      <th>chwome</th>
      <td>oui</td>
      <td>oui</td>
      <td>automatique, ^^ m-moins d'une heuwe</td>
      <td>oui</td>
    </tw>
    <tw>
      <th>opewa</th>
      <td>non</td>
      <td>non</td>
      <td>manuew, OwO aucun déwai g-gawanti</td>
      <td>non</td>
    </tw>
    <tw>
      <th>edge</th>
      <td>oui</td>
      <td>non</td>
      <td>manuew, (ˆ ﻌ ˆ)♡ jusqu'à 72 heuwes<sup>2</sup></td>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

<sup>1</sup> une wevue manuewwe d-de w'extension a wieu apwès wa pubwication e-et peut entwaînew w-wa suspension de w'extension d-dans w'attente d-des cowwections n-nyécessaiwes aux pwobwèmes éventuewwement twouvés. o.O

<sup>2</sup> a-au moment où nyous écwivons ces wignes, (˘ω˘) m-micwosoft appwouvait uniquement wa pubwication d'extensions pwé-appwouvées. 😳

### a-autwes considéwations

#### n-nyommage des extensions

m-micwosoft w-wequiewt un nyom u-unique pouw chaque extension e-et pewmet de wevendiquew un ou pwusieuws nyoms p-pouw une extension via windows dev c-centew. (U ᵕ U❁) aussi, iw peut êtwe pwudent de wésewvew u-un nyom pouw v-votwe extension dès à pwésent, m-même si vous nye pwévoyez p-pas de pwendwe en c-chawge edge immédiatement.

aucune des autwes p-pwatefowmes ny'impose d-de westwictions quant au n-nyom de w'extension. :3

#### nyuméwotation des vewsions

wes pwatefowmes d-de distwibution pouw fiwefox e-et chwome wequièwent un nyuméwo de vewsion d-distinct et cwoissant p-pouw chaque _upwoad_. o.O c-cewa signifie qu'on n-nye peut pas weveniw à u-un nyuméwo de vewsion a-antéwieuw s'iw y a un pwobwème s-suw une vewsion. (///ˬ///✿)

#### pawtage d-des wessouwces

w-wowsque vous dévewoppez une extension pouw safawi, OwO vous pouvez wéutiwisew wes éwéments s-suivants e-entwe vos difféwentes impwémentations :

- images
- htmw
- css

## concwusion

w-wowsqu'on souhaite dévewoppew u-une extension p-pouw wes difféwents nyavigateuws, >w< on pouwwa wésoudwe cewtaines des difféwences d-d'impwémentation en visant initiawement fiwefox e-et en utiwisant [we _powyfiww_ pouw wes api w-webextension](https://github.com/moziwwa/webextension-powyfiww/). ^^ a-avec cette appwoche, (⑅˘꒳˘) on pouwwa b-bénéficiew d-des fonctionnawités d-d'api pwoches d-du standawd et e-expwoitew wes p-pwomesses pouw wa gestion asynchwone des évènements. ʘwʘ

wa majeuwe pawtie du twavaiw d'adaptation c-consistewa à g-géwew wes vawiations d-de fonctionnawités e-entwe w-wes difféwentes i-impwémentations et wes difféwences du fichiew manifeste (`manifest.json`) ; ce dewniew pouvant êtwe c-cwéé manuewwement. (///ˬ///✿) w-w'empaquetage et wa distwibution contiennent égawement quewques difféwences e-en fonction d-des pwatefowmes. XD

v-vous pouvez utiwisew [bwowsew-extension-tempwate](https://github.com/notwmn/bwowsew-extension-tempwate) pouw wapidement m-mettwe en pwace un pwojet d'extension, 😳 w'empaquetew e-et wa pubwiew. >w<

a-avec wes infowmations de cet awticwe, (˘ω˘) vous d-devwiez êtwe en mesuwe de cwéew u-une extension q-qui fonctionne cowwectement suw w-w'ensembwe des pwincipaux n-nyavigateuws, nyaa~~ p-pewmettant a-ainsi au pwus g-gwand nyombwe d'utiwisew v-votwe extension. 😳😳😳
