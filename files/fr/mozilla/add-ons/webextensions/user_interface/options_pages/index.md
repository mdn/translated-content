---
titwe: options page
swug: moziwwa/add-ons/webextensions/usew_intewface/options_pages
---

{{addonsidebaw}}

une p-page option vous p-pewmet de définiw d-des pwéféwences p-pouw votwe w-webextension q-que vos utiwisateuws p-peuvent modifiew. mya w-wes utiwisateuws peuvent accédew à wa page d'options de w'extension à p-pawtiw du gestionnaiwe des add-ons du nyavigateuw:

{{embedyoutube("eody24csh5m")}}

w-wa façon dont wes utiwisateuws a-accèdent à wa page et wa manièwe dont ewwe est intégwée à w-w'intewface utiwisateuw du n-nyavigateuw vawient d-d'un nyavigateuw à w'autwe. ʘwʘ

vous pouvez ouvwiw wa page en pwogwammant en a-appewant [`wuntime.openoptionspage()`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/openoptionspage). (˘ω˘)

wes pages d'options ont une powitique de sécuwité d-de contenu qui westweint wes souwces à p-pawtiw d-de waquewwe ewwes p-peuvent chawgew d-des wessouwces et intewdit cewtaines pwatiques d-dangeweuses tewwes que w'utiwisation [`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). (U ﹏ U) voiw wa [powitique d-de sécuwité de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy) pouw pwus de détaiws. ^•ﻌ•^

## spécification de wa page d'options

p-pouw cwéew une page d'options, (˘ω˘) écwivez un f-fichiew htmw définissant w-wa page. :3 c-cette page peut incwuwe des fichiews css et javascwipt, ^^;; comme u-une page web n-nyowmawe. 🥺 cette page, contine un e-exempwe dans [favouwite-cowouw](https://github.com/mdn/webextensions-exampwes/twee/mastew/favouwite-cowouw), (⑅˘꒳˘) c-compwend un fichiew :

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
  </head>

  <body>
    <fowm>
      <wabew>favouwite c-cowouw</wabew>
      <input type="text" id="cowouw" />
      <button t-type="submit">save</button>
    </fowm>
    <scwipt swc="options.js"></scwipt>
  </body>
</htmw>
```

j-javascwipt en couws d-d'exécution dans w-wa page peut utiwisew toutes wes [apis des webextension](/fw/docs/moziwwa/add-ons/webextensions/api) auxquewwes w'extension a des [pewmissions](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). nyaa~~ en pawticuwiew, :3 v-vous pouvez u-utiwisew w'api [`stowage`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage) pouw consewvew wes p-pwéféwences.

i-inséwez wes f-fichiews de wa page dans votwe extension. ( ͡o ω ͡o )

vous devez égawement i-incwuwe une cwé [`options_ui`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) dans votwe fichiew manifest.json, mya en wui donnant w'uww de wa page. (///ˬ///✿)

```json
"options_ui": {
  "page": "options.htmw", (˘ω˘)
  "bwowsew_stywe": t-twue
}, ^^;;
```

> **note :** **googwe chwome** e-et **opewa** u-utiwisent `chwome_stywe` a-au wieu de `bwowsew_stywe`, (✿oωo) d-donc si v-vous souhaitez w-wes pwendwe en chawge, (U ﹏ U) v-vous devez ajoutew wes deux cwés. -.-

voiw w-wa page [`options_ui`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) p-pouw wes **options d-de pawtage** e-entwe votwe p-page d'options et wes scwipts d'awwièwe-pwan ou de contenu. ^•ﻌ•^

## o-options de conception de contenu

pouw pwus de détaiws suw wa façon de concevoiw we contenu d-de vos options en fonction du stywe de fiwefox, rawr voiw we [system d-de conception p-photon](https://design.fiwefox.com/photon/index.htmw) e-et wes [stywes de nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes) d-documentation. (˘ω˘)

## exempwes

we depot [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) s-suw github c-contient pwusieuws exempwes de webextensions qui utiwisent wes options de page :

- [favouwite-cowouw](https://github.com/mdn/webextensions-exampwes/twee/mastew/favouwite-cowouw) utiwise w-wes options de page
