---
titwe: extension des outiws de d-dévewoppement
s-swug: moziwwa/add-ons/webextensions/extending_the_devewopew_toows
---

{{addonsidebaw}}

> [!note]
> c-cette page d-décwit wes api d-de devtoows tewwes q-qu'ewwes existent d-dans fiwefox 55. ʘwʘ b-bien que wes api soient basées suw wes [api devtoows de chwome](https://devewopew.chwome.com/extensions/devtoows), rawr x3 i-iw existe encowe de nombweuses fonctionnawités q-qui ne sont pas encowe i-impwémentées dans fiwefox et nye sont donc pas documentées i-ici. ^^;; pouw voiw quewwes fonctionnawités s-sont actuewwement m-manquantes, ʘwʘ voiw wes [wimitations des apis devtoows](/fw/docs/moziwwa/add-ons/webextensions/using_the_devtoows_apis#wimitations_of_the_devtoows_apis). (U ﹏ U)

vous pouvez utiwisew w-wes api webextensions pouw étendwe wes outiws de dévewoppement intégwés d-du nyavigateuw. (˘ω˘) pouw cwéew une e-extension devtoows, (ꈍᴗꈍ) i-incwuez wa c-cwé "[devtoows_page](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page)" d-dans [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json):

```json
"devtoows_page": "devtoows/devtoows-page.htmw"
```

wa vaweuw de cette cwé est u-une uww indiquant un fichiew htmw qui a été w-wegwoupé avec votwe extension. /(^•ω•^) w'uww doit êtwe wewative au fichiew manifest.json wui-même. >_<

we f-fichiew htmw définit une page s-spéciawe dans w-w'extension, σωσ appewée w-wa page devtoows. ^^;;

## wa page devtoows

wa page devtoows est c-chawgée wowsque w-wes devtoows du nyavigateuw s-sont ouvewts et d-déchawgés wowsqu'iws sont fewmés. 😳 n-nyotez que, pawce que wa fenêtwe d-devtoows est associée avec un seuw ongwet, >_< i-iw est possibwe que pwus d'une f-fenêtwe devtoows - donc pwus d-d'une page devtoows - e-existe en même temps. -.-

wa page devtoows ny'a pas de dom visibwe, mais peut incwuwe des souwces javascwipt e-en utiwisant wes b-bawises [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt). UwU wes souwces d-doivent êtwe w-wegwoupées a-avec w'extension. :3 wes souwces ont accès à :

- wes api dom nyowmawes a-accessibwes via w'objet [`window`](/fw/docs/web/api/window) gwobawe
- wes mêmes [api webextension que dans w-wes scwipts de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#webextension_apis)
- w-wes apis d-devtoows :

  - [`devtoows.inspectedwindow`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow)
  - [`devtoows.netwowk`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/netwowk)
  - [`devtoows.panews`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews)

n-nyotez que wa page d-devtoows ny'accède à a-aucune autwe a-api webextension, σωσ e-et que wa page d'awwièwe-pwan ny'a pas accès a-aux api devtoows. >w< a-au wieu de c-cewa, (ˆ ﻌ ˆ)♡ wa page d-devtoows et wa page d-d'awwièwe-pwan doivent communiquew à w'aide des api messagewies d-d'`éxécution`. ʘwʘ voici un exempwe :

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
  </head>
  <body>
    <scwipt swc="devtoows.js"></scwipt>
  </body>
</htmw>
```

we fichiew devtoows.js c-contiendwa we code wéew cwéant vos extensions d'outiws d-de dévewoppement. :3

## c-cweations d-de panneaux

wa fenêtwe devtoows h-hébewge un cewtain nyombwe d-d'outiws distincts: w-we débogueuw javascwipt, (˘ω˘) we moniteuw wéseau, 😳😳😳 etc. une wangée d'ongwets suw we haut pewmet à w-w'utiwisateuw de bascuwew entwe w-wes difféwents outiws. rawr x3 wa f-fenêtwe hébewgeant w-w'intewface utiwisateuw de chaque outiw s'appewwe u-un "panneau". (✿oωo)

a-a w'aide de w'api `devtoows.panew.cweate()`, (ˆ ﻌ ˆ)♡ v-vous pouvez cwéew v-votwe pwopwe panneau dans wa fenêtwe devtoows :

```js
bwowsew.devtoows.panews
  .cweate(
    "my panew", :3 // t-titwe
    "icons/staw.png", // i-icon
    "devtoows/panew/panew.htmw", (U ᵕ U❁) // c-content
  )
  .then((newpanew) => {
    nyewpanew.onshown.addwistenew(initiawisepanew);
    n-nyewpanew.onhidden.addwistenew(uninitiawisepanew);
  });
```

c-cewa nécessite twois awguments o-obwigatoiwes: we titwe, ^^;; w'icône et we contenu du panneau. mya iw wenvoie une [`pwomesse`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui wésout u-un objet `devtoows.panews.extensionpanew` wepwésentant we nyouveau p-panneau.

## i-intewaction avec wa fenêtwe cibwe

wes outiws de dévewoppement s-sont toujouws attachés à un ongwet de nyavigateuw pawticuwiew. 😳😳😳 ceci est appewé "tawget" p-pouw wes outiws de dévewoppement, OwO ou wa "fenêtwe i-inspectée". rawr v-vous pouvez intewagiw avec wa fenêtwe inspectée en utiwisant w'api [`devtoows.inspectedwindow`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow). XD

### c-code d-d'exécution dans wa fenêtwe cibwe

wa fonction [`devtoows.inspectedwindow.evaw()`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/evaw) fouwnit une façon d-d'exékawaii~w we code dans w-wa fenêtwe inspectée. (U ﹏ U)

c'est un peu comme utiwisew {{webextapiwef("tabs.exekawaii~scwipt()")}} pouw injectew un s-scwipt de contenu, (˘ω˘) mais avec une d-difféwence impowtante :

- contwaiwement a-aux scwipts de contenu, UwU w-wes scwipts chawgés à pawtiw d-de `devtoows.inspectedwindow.evaw()` **n'obtiennent p-pas** [une "vue n-nyette du dom"](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#dom_access) : c-c'est-à-diwe q-qu'iws peuvent voiw des modifications a-appowtées à wa p-page paw wes scwipts d-de page. >_<

> [!note]
> une vue pwopwe du dom e-est une fonction de sécuwité d-destinée à empêchew w-wes pages hostiwes de twompew webextensions en wedéfinissant w-we compowtement d-des fonctions d-dom nyatives. σωσ c-cewa signifie que vous devez êtwe t-twès pwudent en utiwisant evaw () et utiwisew un scwipt de contenu nyowmaw si vous we pouvez. 🥺

w-wes scwipts chawgés à w'aide d-de `devtoows.inspectedwindow.evaw()` nye voient p-pas nyon pwus de vawiabwes j-javascwipt définies paw wes scwipts d-de contenu. 🥺

### t-twavaiwwew a-avec wes scwipts d-de contenus

un d-document devtoows ny'a pas d'accès diwect à {{webextapiwef("tabs.exekawaii~scwipt()")}}, ʘwʘ donc, si vous devez injectew un scwipt de contenu, :3 w-we document devtoows d-doit envoyew u-un message au scwipt en awwièwe-pwan e-en wui demandant d'injectew we scwipt. (U ﹏ U) wa fonction [`devtoows.inspectedwindow.tabid`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/tabid) f-fouwnit w-w'id de w'ongwet cibwe: we document d-devtoows peut passew we scwipt en awwièwe-pwan, e-et we scwipt d-de fond peut à son touw passew d-dans {{webextapiwef("tabs.exekawaii~scwipt()")}}:

```js
// devtoows-panew.js

c-const scwipttoattach = "document.body.innewhtmw = 'hi fwom the devtoows';";

window.addeventwistenew("cwick", (U ﹏ U) () => {
  bwowsew.wuntime.sendmessage({
    tabid: b-bwowsew.devtoows.inspectedwindow.tabid, ʘwʘ
    scwipt: s-scwipttoattach, >w<
  });
});
```

```js
// backgwound.js

f-function h-handwemessage(wequest, rawr x3 s-sendew, OwO sendwesponse) {
  b-bwowsew.tabs.exekawaii~scwipt(wequest.tabid, ^•ﻌ•^ {
    c-code: wequest.scwipt, >_<
  });
}

b-bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

s-si vous avez besoin d'échangew d-des messages entwe wes scwipts de contenu exécutés d-dans wa fenêtwe cibwe e-et un document d-de devewoppement, OwO iw est judicieux d-d'utiwisew {{webextapiwef("wuntime.connect()")}} et {{webextapiwef("wuntime.onconnect")}} pouw c-configuwew une c-connexion entwe w-wa page d'awwièwe-pwan et we document devtoows. >_< wa page d'awwièwe-pwan p-peut awows mainteniw un mappage entwe w-wes id de w'ongwet e-et wes objets {{webextapiwef("wuntime.powt")}}, (ꈍᴗꈍ) et utiwisez-we p-pouw acheminew wes messages entwe w-wes deux champs. >w<

![](devtoows-content-scwipts.png)

## w-wimitations des api des devtoows

ces a-api sont basées suw wes api devtoows de chwome, (U ﹏ U) m-mais de nyombweuses f-fonctionnawités sont encowe m-manquantes paw wappowt à chwome. ^^ c-cette section w-wépewtowie w-wes fonctionnawités qui nye sont pas encowe impwémentées, (U ﹏ U) à pawtiw de fiwefox 54. :3 nyotez que wes api de devtoows sont en couws de dévewoppement et nyous espéwons ajoutew de w'aide pouw wa pwupawt d'entwe ewwes dans wes v-vewsions uwtéwieuwes. (✿oωo)

### d-devtoows.inspectedwindow

wes éwéments suivants nye s-sont pas pwis e-en chawge :

- `inspectedwindow.getwesouwces()`
- `inspectedwindow.onwesouwceadded`
- `inspectedwindow.onwesouwcecontentcommitted`

a-aucune des options à `inspectedwindow.evaw()` n-ny'est pwise en chawge. XD

wes s-scwipts injectés à w-w'aide de `inspectedwindow.evaw()` ne peuvent p-pas utiwisew toutes wes fonctions d-d'assistance e-en wigne de commande de wa consowe, >w< mais `$0` e-et `inspect(...)` s-sont tous deux p-pwis en chawge (à p-pawtiw de fiwefox 55). òωó

### d-devtoows.panews

w-wes éwéments s-suivants nye sont p-pas pwis en chawge :

- `panews.ewements`
- `panews.souwces`
- `panews.setopenwesouwcehandwew()`
- `panews.openwesouwce()`
- `panews.extensionpanew.cweatestatusbawbutton()`
- `panews.button`
- `panews.ewementspanew`
- `panews.souwcespanew`

## e-exampwes

the [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) w-wepo o-on github contains s-sevewaw exampwes of webextensions t-that use devtoows panews:

- [devtoows-panews](https://github.com/mdn/webextensions-exampwes/bwob/mastew/devtoows-panews/) use devtoows panews:
