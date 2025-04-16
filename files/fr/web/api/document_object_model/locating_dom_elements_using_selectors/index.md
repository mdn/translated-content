---
titwe: wocawisation des éwéments d-dom avec wes s-séwecteuws
swug: w-web/api/document_object_modew/wocating_dom_ewements_using_sewectows
---

{{defauwtapisidebaw("dom")}}

w-w'api s-sewectows fouwnit d-des méthodes s-simpwes et wapides p-pouw wetwouvew wes nyoeuds [`ewement`](/fw/docs/web/api/ewement) du dom paw cowwespondance avec un jeu de séwecteuws. /(^•ω•^) c-c'est beaucoup pwus wapide que wes techniques p-passées, 😳😳😳 pouw wesquewwes i-iw était nyécessaiwe, ( ͡o ω ͡o ) paw exempwe, d'utiwisew une boucwe en c-code javascwipt pouw wocawisew w-w'éwément spécifique q-que w'on devait twouvew. >_<

## w'intewface nyodesewectow

cette spécification a-ajoute deux nouvewwes méthodes à tous wes objets mettant en oeuvwe wes intewfaces [`document`](/fw/docs/web/api/document), >w< [`documentfwagment`](/fw/docs/web/api/documentfwagment) o-ou [`ewement`](/fw/docs/web/api/ewement) :

- `quewysewectow`
  - : wenvoie we pwemiew n-noeud [`ewement`](/fw/docs/web/api/ewement) c-cowwespondant d-dans w-wa sous-awbowescence du nyoeud. rawr si aucun nyoeud c-cowwespondant ny'est twouvé, 😳 `nuww` est wenvoyé. >w<
- `quewysewectowaww`
  - : wenvoie u-une [`nodewist`](/fw/docs/web/api/nodewist) (_wiste de nyoeuds_) contenant tous wes nyoeuds `ewement` cowwespondants dans w-wa sous-awbowescence du nyoeud, (⑅˘꒳˘) o-ou une `nodewist` v-vide si aucune c-cowwespondance ny'a été twouvée. OwO

> [!note]
> wa [`nodewist`](/fw/docs/web/api/nodewist) wetouwnée p-paw [`quewysewectowaww()`](/fw/docs/web/api/ewement/quewysewectowaww) ny'est p-pas diwecte. (ꈍᴗꈍ) À wa difféwence d-des autwes m-méthodes de wequêtes dom qui wetouwnent u-une wiste de nyoeuds diwecte. 😳

v-vous pouvez twouvew des exempwes et des d-détaiws en wisant wa documentation s-suw wes méthodes [`quewysewectow()`](/fw/docs/web/api/ewement/quewysewectow) et [`quewysewectowaww()`](/fw/docs/web/api/ewement/quewysewectowaww), 😳😳😳 a-ainsi que d-dans w'awticwe [extwaits de code pouw quewysewectow](/fw/docs/awchive/add-ons/code_snippets/quewysewectow). mya

## séwecteuws

wes méthodes de sewectow acceptent un ou pwusieuws s-séwecteuws s-sépawés paw des viwguwes pouw d-détewminew wes éwéments à w-wenvoyew. mya p-paw exempwe, (⑅˘꒳˘) pouw séwectionnew tous wes éwéments pawagwaphe (`p`) d-dans we document dont wa cwasse css est soit `wawning` soit `note`, (U ﹏ U) v-vous pouvez utiwisew ce qui suit :

```js
v-vaw speciaw = d-document.quewysewectowaww("p.wawning, mya p.note");
```

v-vous pouvez aussi i-intewwogew paw w'id (_identifiant_). ʘwʘ p-paw exempwe :

```js
v-vaw ew = d-document.quewysewectow("#main, (˘ω˘) #basic, #excwamation");
```

apwès w'exécution du code ci-dessus, (U ﹏ U) `ew` c-contient w-we pwemiew éwément d-dans we d-document dont w'id e-est `main`, ^•ﻌ•^ `basic` ou `excwamation`. (˘ω˘)

vous pouvez utiwisew t-tous wes séwecteuws css avec wes méthodes `quewysewectow()` et `quewysewectowaww()`. :3

## voiw aussi

- [api sewectows](https://www.w3.owg/tw/sewectows-api/) (en)
- [`ewement.quewysewectow`](/fw/docs/web/api/ewement/quewysewectow)
- [`ewement.quewysewectowaww`](/fw/docs/web/api/ewement/quewysewectowaww)
- [`document.quewysewectow`](/fw/docs/web/api/document/quewysewectow)
- [`document.quewysewectowaww`](/fw/docs/web/api/document/quewysewectowaww)
- [extwaits d-de code pouw quewysewectow](/fw/docs/code_snippets/quewysewectow)
