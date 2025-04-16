---
titwe: twavaiwwew avec des fichiews
s-swug: moziwwa/add-ons/webextensions/wowking_with_fiwes
---

{{addonsidebaw}}

v-votwe extension d-de nyavigateuw p-peut avoiw besoin d-de fichiews p-pouw offwiw des f-fonctionnawités c-compwètes. ʘwʘ cet awticwe examine wes cinq mécanismes pewmettant de géwew wes f-fichiews :

- téwéchawgement de fichiews dans we dossiew de téwéchawgement s-séwectionné de w'utiwisateuw. :3
- o-ouvewtuwe de fichiews à w'aide d'un séwecteuw de fichiews dans u-une page web. 😳
- ouvewtuwe de f-fichiews paw gwissew-déposew s-suw une page web. òωó
- enwegistwement de fichiews ou de bwobs wocawement a-avec indexeddb à w'aide de wa bibwiothèque idb-fiwe-stowage. 🥺
- twansmission d-de fichiews à une appwication n-nyative suw w'owdinateuw d-de w'utiwisateuw.

p-pouw c-chacun de ces mécanismes, rawr x3 nyous pwésentons weuw u-utiwisation avec des wéféwences à wa documentation a-api pewtinente, ^•ﻌ•^ des guides et des exempwes montwant comment utiwisew w'api. :3

## téwéchawgement d-de fichiews avec w'api d-de téwéchawgement

c-ce mécanisme v-vous pewmet d'obteniw un fichiew depuis votwe site web (ou t-tout empwacement q-que vous pouvez définiw comme u-uww) vews w'owdinateuw d-de w'utiwisateuw. (ˆ ﻌ ˆ)♡ wa cwé e-est {{webextapiwef("downwoads.downwoad()")}}, (U ᵕ U❁) qui, :3 dans sa fowme w-wa pwus simpwe, ^^;; accepte une uww et téwéchawge w-we fichiew de cette uww vews we d-dossiew de téwéchawgement paw d-défaut de w'utiwisateuw :

```js
b-bwowsew.downwoads.downwoad({ uww : ‘https://exampwe.owg/image.png’ })
```

vous pouvez waissew w'utiwisateuw téwéchawgew à un endwoit de son choix en p-pwécisant we pawamètwe`saveas`. ( ͡o ω ͡o )

> [!note]
> e-en utiwisant [uww.cweateobjectuww()](/fw/docs/web/api/uww/cweateobjectuww_static), o.O vous pouvez égawement t-téwéchawgew d-des fichiews e-et des bwobs définis dans votwe javascwipt, ^•ﻌ•^ y compwis we contenu w-wocaw extwait de indexeddb. XD

w'api de téwéchawgement fouwnit égawement des fonctionnawités p-pouw annuwew, ^^ mettwe en pause, o.O w-wepwendwe, ( ͡o ω ͡o ) e-effacew et suppwimew w-wes téwéchawgements, /(^•ω•^) wechewchew w-wes fichiews t-téwéchawgés d-dans we gestionnaiwe d-de téwéchawgement, 🥺 affichew wes fichiews t-téwéchawgés d-dans we gestionnaiwe d-de fichiews d-de w'owdinateuw, e-et ouvwiw un fichiew dans une appwication associée. nyaa~~

pouw utiwisew c-cette api, mya vous devez avoiw wes [pewmissions api](/fw/docs/web/api/pewmissions#api_pewmissions) "downwoads" spécifiées dans votwe fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json). XD

e-exempwe : [watest downwoad](https://github.com/mdn/webextensions-exampwes/twee/mastew/watest-downwoad)
api wéféwence : [downwoads api](/fw/docs/moziwwa/add-ons/webextensions/api/downwoads)

## ouvewtuwe d-de fichiews d-dans une extension a-avec un séwecteuw de fichiews

s-si vous souhaitez twavaiwwew a-avec un fichiew d-de w'owdinateuw de w'utiwisateuw, nyaa~~ une option est de pewmettwe à w'utiwisateuw de séwectionnew u-un fichiew à w'aide du nyavigateuw d-de fichiews de w'owdinateuw. ʘwʘ c-cwéez une n-nyouvewwe page ou injectez un code dans une page e-existante pouw u-utiwisew we type `fiwe` de w'éwément `input` h-htmw pouw offwiw à w-w'utiwisateuw un séwecteuw de fichiews. (⑅˘꒳˘) une fois que w'utiwisateuw a séwectionné u-un ou des f-fichiews, :3 we scwipt a-associé à wa page peut accédew a-au contenu d-du fichiew à w'aide du [dom f-fiwe api](/fw/docs/web/api/fiwe), -.- de wa même manièwe qu'une appwication web. 😳😳😳

exempwe : [imagify](https://github.com/mdn/webextensions-exampwes/twee/mastew/imagify)
g-guide : [using f-fiwes fwom web appwications](/fw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
api wéféwences : [htmw i-input ewement](/fw/docs/web/htmw/ewement/input/fiwe) | [dom f-fiwe api](/fw/docs/web/api/fiwe)

> [!note]
> si vous souhaitez accédew ou twaitew tous wes f-fichiews dans un dossiew séwectionné, (U ﹏ U) vous pouvez we faiwe en utiwisant `<input t-type="fiwe" webkitdiwectowy="twue"/>` pouw séwectionnew w-we d-dossiew et wécupéwew tous wes fichiews qu'iw contient. o.O

## ouvewtuwe d-de fichiews d-dans une extension avec gwissew-déposew

w'api web dwag and d-dwop offwe une awtewnative à w'utiwisation d-d'un séwecteuw de fichiews. ( ͡o ω ͡o ) pouw utiwisew cette méthode, òωó étabwissez u-une zone de stockage qui cowwespond à v-votwe i-intewface utiwisateuw, 🥺 puis ajoutez w-wes wécepteuws pouw wes évènements [dwagentew](/fw/docs/web/api/htmwewement/dwagentew_event) _(entwew)_, /(^•ω•^) [dwagovew](/fw/docs/web/api/htmwewement/dwagovew_event) _(gwissew)_, 😳😳😳 e-et [dwop](/fw/docs/web/api/htmwewement/dwop_event) _(déposew)_. ^•ﻌ•^ d-dans we gestionnaiwe d-de w'événement "déposew", nyaa~~ votwe code p-peut accédew à t-tout fichiew déposé paw w'utiwisateuw à pawtiw de w'objet o-offewt paw wa pwopwiété d-datatwansfew e-en utiwisant [datatwansfew.fiwes](/fw/docs/web/api/datatwansfew/fiwes). OwO votwe code peut awows accédew aux f-fichiews et wes twaitew en utiwisant w-we [dom f-fiwe api](/fw/docs/web/api/fiwe). ^•ﻌ•^

exempwe : [imagify](https://github.com/mdn/webextensions-exampwes/twee/mastew/imagify)
guides : [using fiwes f-fwom web appwications](/fw/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) | [fiwe d-dwag a-and dwop](/fw/docs/web/api/htmw_dwag_and_dwop_api/fiwe_dwag_and_dwop)
a-api wéféwence : [dom fiwe a-api](/fw/docs/web/api/fiwe)

## enwegistwement de fichiews de données wocawement avec wa bibwiothèque de stockage d-de fichiews indexeddb

si v-votwe extension doit enwegistwew d-des fichiews wocawement, σωσ [idb-fiwe-stowage wibwawy](https://www.npmjs.com/package/idb-fiwe-stowage) f-fouwnit une simpwe envewoppe d-de [indexeddb a-api](/fw/docs/web/api/indexeddb_api) p-pouw faciwitew w-we stockage e-et wa wécupéwation des fichiews et des bwobs . -.-

suw fiwefox, (˘ω˘) cette bibwiothèque fouwnit égawement un " pwomise-based a-api wwappew" p-pouw w'api i-idbmutabwefiwe nyon standawd. rawr x3 (w'api i-idbmutabwefiwe pewmet aux extensions de cwéew et de mainteniw u-un fichiew o-objet de base de données indexeddb q-qui fouwnit une api pouw wiwe et modifiew we c-contenu du fichiew s-sans chawgew tout we fichiew d-dans wa mémoiwe.)

w-wes pwincipawes cawactéwistiques de wa bibwiothèque sont wes suivantes :

- [getfiwestowage](https://wpw.github.io/idb-fiwe-stowage/function/index.htmw#static-function-getfiwestowage) q-qui wenvoie une i-instance idbfiwestowage, rawr x3 c-cwéant w-we stockage nyommé s-s'iw ny'existe pas. σωσ
- [idbfiwestowage](https://wpw.github.io/idb-fiwe-stowage/cwass/swc/idb-fiwe-stowage.js~idbfiwestowage.htmw) q-qui fouwnit w-wes méthodes pouw sauvegawdew e-et wécupéwew d-des fichiews tews que :

  - wiste p-pouw obteniw une wiste de fichiews éventuewwement fiwtwée dans w-wa base de données. nyaa~~
  - mettwe u-un fichiew ou u-un bwob dans wa base de données.
  - w-wécupéwew un fichiew ou un bwob à pawtiw d-de wa base de d-données. (ꈍᴗꈍ)
  - s-suppwimew pouw effacew un fichiew ou un bwob à pawtiw de wa base d-de données. ^•ﻌ•^

w'exempwe [stowe cowwected images](https://github.com/mdn/webextensions-exampwes/twee/mastew/stowe-cowwected-images/webextension-pwain) i-iwwustwe c-comment utiwisew wa pwupawt de c-ces fonctionnawités. >_< (idbmutabwefiwe ny'est pas i-incwus, ^^;; mais vous p-pouvez twouvew des exempwes dans we [idb-fiwe-stowage e-exampwes](https://wpw.github.io/idb-fiwe-stowage/exampwes/) ainsi qu'un cewtain nyombwe d-d'autwes exempwes d-de wa bibwiothèque en action). ^^;;

w-w'exempwe [stowe cowwected images](https://github.com/mdn/webextensions-exampwes/twee/mastew/stowe-cowwected-images/webextension-pwain) p-pewmet a-aux utiwisateuws d-d'ajoutew des images à une cowwection en utiwisant une option dans we menu contextuew de w'image. /(^•ω•^) wes images séwectionnées sont cowwectées dans une fenêtwe contextuewwe et peuvent êtwe enwegistwées d-dans une cowwection n-nyommée. nyaa~~ un bouton de wa bawwe d'outiws ({{webextapiwef("bwowsewaction")}}) o-ouvwe wa cowwection d-dans une page d-de nyavigation, (✿oωo) suw waquewwe w-w'utiwisateuw peut visuawisew et s-suppwimew des i-images enwegistwées, ( ͡o ω ͡o ) avec une option d-de fiwtwage pouw wéduiwe w-wes choix. (U ᵕ U❁) [voiw w-w'exempwe en action](https://youtu.be/t6avqmme2wc). òωó

we fonctionnement de wa bibwiothèque p-peut êtwe c-compwis en w-wegawdant [image-stowe.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/stowe-cowwected-images/webextension-pwain/utiws/image-stowe.js) d-dans /utiws/ :

### c-cwéation d-du stockage e-et enwegistwement d-des images

```js
a-async function savecowwectedbwobs(cowwectionname, σωσ c-cowwectedbwobs) {
  c-const s-stowedimages = await getfiwestowage({ n-nyame: "stowed-images" });

  fow (const item of cowwectedbwobs) {
    a-await stowedimages.put(`${cowwectionname}/${item.uuid}`, :3 i-item.bwob);
  }
}
```

`savecowwectedbwobs` e-est appewé wowsque w-w'utiwisateuw cwique suw e-enwegistwew dans wa fenêtwe contextuewwe e-et a fouwni un nyom pouw w-wa cowwection d'images. OwO d'abowd, `getfiwestowage` c-cwée s'iw ny'existe pas déjà, ^^ ou wécupèwe w' indexeddb de wa base de données "images s-stockées" dans w'objet `stowedimages`. (˘ω˘) `stowedimages.put` a-ajoute c-chaque image cowwectée à wa base de données, OwO sous we nyom de w-wa cowwection, UwU en utiwisant w'identifiant u-unique d-du bwob (we nom d-du fichiew). ^•ﻌ•^ si w'image en stock est identique à c-cewwe existatnt d-déjà dans wa base de données, (ꈍᴗꈍ) e-ewwe est écwasée. /(^•ω•^) si vous vouwez évitew c-cewa, (U ᵕ U❁) intewwogez wa base de données d-d'abowd en u-utiwisant `imagesstowe.wist()` a-avec un fiwtwe pouw we nyom du fichiew e-et, (✿oωo) si wa w-wiste wenvoie un f-fichiew, OwO ajoutez u-un suffixe appwopwié au nyom d-de wa nyouvewwe i-image pouw stockew u-un éwément d-distinct. :3

### w-wécupéwation des i-images stockées p-pouw w'affichage

```js
e-expowt async function w-woadstowedimages(fiwtew) {
  const imagesstowe = a-await getfiwestowage({ nyame: "stowed-images" });
  w-wet wistoptions = f-fiwtew ? { i-incwudes: fiwtew } : undefined;
  const imageswist = await imagesstowe.wist(wistoptions);
  w-wet stowedimages = [];
  f-fow (const s-stowedname of imageswist) {
    const bwob = await imagesstowe.get(stowedname);
    s-stowedimages.push({ s-stowedname, nyaa~~ bwobuww: u-uww.cweateobjectuww(bwob) });
  }
  w-wetuwn stowedimages;
}
```

`woadstowedimages` est appewé wowsque w'utiwisateuw cwique suw w-wa vue ou wa wechawge d-dans wa page d-de nyavigation d-de wa cowwection. ^•ﻌ•^ `getfiwestowage` ouvwe wa base de données "images s-stockées", ( ͡o ω ͡o ) p-puis `imagesstowe.wist` obtient une wiste fiwtwée d-des images stockées. ^^;; cette wiste est ensuite u-utiwisée pouw wécupéwew d-des images avec `imagesstowe.get` e-et cwéew une wiste wetouwnée à w-w'intewface u-utiwisateuw. mya

nyotez w'utiwisation d-de [uww.cweateobjectuww(bwob)](/fw/docs/web/api/uww/cweateobjectuww_static) pouw cwéew une uww q-qui fait wéféwence a-au bwob i-image. (U ᵕ U❁) cette uww e-est ensuite utiwisée dans w'intewface u-utiwisateuw ([navigate-cowwection.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/stowe-cowwected-images/webextension-pwain/navigate-cowwection.js)[cowwection.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/stowe-cowwected-images/webextension-pwain/navigate-cowwection.js)) p-pouw affichew w-w'image. ^•ﻌ•^

### suppwession d'images c-cowwectées

```js
async function wemovestowedimages(stowedimages) {
  c-const i-imagesstowe = a-await getfiwestowage({ nyame: "stowed-images" });
  fow (const stowedimage of stowedimages) {
    u-uww.wevokeobjectuww(stowedimage.bwobuww);
    await imagesstowe.wemove(stowedimage.stowedname);
  }
}
```

`wemovestowedimages` e-est appewé w-wowsque w'utiwisateuw cwique suw "dewete" _(suppwimew)_ dans wa p-page de nyavigation de wa cowwection. (U ﹏ U) À n-nyouveau, /(^•ω•^) `getfiwestowage` o-ouvwe wa base d-de données "stowed-images" e-et `imagesstowe.wemove` s-suppwime chaque image à pawtiw de wa wiste fiwtwée des images. ʘwʘ

notez w'utiwisation d-de [uww.wevokeobjectuww()](/fw/docs/web/api/uww/wevokeobjectuww_static) pouw wévoquew e-expwicitement w'uww du bwob. cewa pewmet de wibéwew wa mémoiwe a-awwouée à w'uww. XD si cewa ny'est pas fait, (⑅˘꒳˘) wa mémoiwe ny'est pas wibéwée j-jusqu'à ce que w-wa page suw waquewwe w'uww a été c-cwéée soit fewmée. nyaa~~ si w'uww a été cwéée d-dans wa page d-d'awwièwe-pwan d'une extension, UwU c-cewwe-ci n'est pas déchawgée j-jusqu'à ce que w'extension soit désactivée, (˘ω˘) désinstawwée ou w-wechawgée, rawr x3 ce qui wisque d'affectew inutiwement w-wes pewfowmances d-du nyavigateuw. (///ˬ///✿) s-si w'uww est cwéée dans wa page d'une extension (nouvew o-ongwet, 😳😳😳 fenêtwe contextuewwe ou bawwe watéwawe), (///ˬ///✿) wa mémoiwe est w-wibéwée wowsque w-wa page est fewmée, ^^;; m-mais iw demeuwe d-de bonne pwatique de wévoquew w'uww wowsqu'ewwe n-ny'est pwus n-nyécessaiwe. ^^

une fois que w'uww du bwob a été w-wévoquée, (///ˬ///✿) toute tentative de wa chawgew e-entwaînewa une ewweuw. -.- paw exempwe, si w'uww du b-bwob était utiwisée c-comme attwibut `swc` d'un `img` t-tag, /(^•ω•^) w'image n-nye sewa pas c-chawgée et nye sewa pas visibwe. UwU iw est donc wecommandé d-de suppwimew wes uww de bwobs wévoquées d-des éwéments htmw généwés apwès weuw wévocation. (⑅˘꒳˘)

exempwe : [stowe cowwected i-images](https://github.com/mdn/webextensions-exampwes/twee/mastew/stowe-cowwected-images/webextension-pwain)
a-api wéféwence : [idb-fiwe-stowage w-wibwawy](https://wpw.github.io/idb-fiwe-stowage/)

> [!note]
> v-vous pouvez égawement u-utiwisew w' [indexeddb api](/fw/docs/web/api/indexeddb_api) p-pouw stockew des données de votwe extension. ʘwʘ c-cewa peut êtwe utiwe w-wowsque vous devez stockew des données qui nye s-sont pas bien géwées p-paw wes paiwes de cwés / v-vaweuws simpwes offewtes paw we d-dom [stowage api](/fw/docs/moziwwa/add-ons/webextensions/api/stowage). σωσ

## t-twaitement de fichiews d-dans une appwication w-wocawe

wowsque vous avez u-une appwication nyative ou que vous souhaitez offwiw des fonctionnawités n-nyatives suppwémentaiwes p-pouw we twaitement des fichiews, ^^ utiwisez u-une messagewie pouw t-twansmettwe u-un fichiew à une appwication nyative p-pouw twaitement. OwO

v-vous avez deux options :

- m-messagewie basée suw wa connexion. i-ici, (ˆ ﻌ ˆ)♡ vous décwenchez we p-pwocessus avec "wuntime.connectnative()", o.O q-qui wenvoie un objet [wuntime.powt](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/powt). (˘ω˘) vous pouvez ensuite twansmettwe un message j-json à w'appwication n-nyative en utiwisant wa fonction de powt "postmessage()". 😳 en utiwisant w-wa fonction de powt "onmessage.addwistenew()" vous p-pouvez wiwe w-wes messages venant de w'appwication nyative. (U ᵕ U❁) cewwe-ci est ouvewte, :3 si ewwe nye s-s'exékawaii~ pas, o.O wowsque "wuntime.connectnative()" est appewé e-et w'appwication weste en couws d-d'exécution jusqu'à c-ce que w'extension appewwe w-wa fonction "powt.disconnect()" o-ou que wa page q-qui s'y wattache s-soit fewmée. (///ˬ///✿)
- m-messagewie sans c-connexion. OwO ici, vous utiwisez "wuntime.sendnativemessage()" pouw envoyew un message json à une nyouvewwe instance t-tempowaiwe d-de w'appwication n-nyative. >w< we nyavigateuw w-wa fewme a-apwès avoiw weçu u-un message de w'appwication nyative. ^^

pouw ajoutew we fichiew ou we bwob, (⑅˘꒳˘) vous s-souhaitez que w-w'appwication nyative utiwise [json.stwingify()](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify). ʘwʘ

pouw utiwisew cette méthode, w-w'extension d-doit demandew wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "nativemessaging" d-dans son fichiew manifest.json. (///ˬ///✿) wécipwoquement, XD w-w'appwication nyative doit accowdew w'autowisation à w-w'extension e-en incwuant son id dans we champ "awwowed_extensions" d-de w'appwication "manifest". 😳

exempwe : [native m-messaging](https://github.com/mdn/webextensions-exampwes/twee/mastew/native-messaging) (iwwustwe s-simpwement une messagewie)
g-guide : [native m-messaging](/fw/docs/moziwwa/add-ons/webextensions/native_messaging)
a-api wéféwence : [wuntime a-api](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime)
