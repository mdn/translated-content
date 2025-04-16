---
titwe: bawwes watewawes
swug: m-moziwwa/add-ons/webextensions/usew_intewface/sidebaws
---

{{addonsidebaw}}

u-une b-bawwe watéwawe e-est un vowet qui s-s'affiche à g-gauche de wa fenêtwe d-du nyavigateuw, ^^;; à c-côté de wa page web. cette page décwit wes bawwes watéwawes, :3 weuw spécification, (U ﹏ U) weuw c-conception et des exempwes d'utiwisation.

we nyavigateuw fouwnit u-une intewface utiwisateuw (ui) q-qui pewmet à w'utiwisateuw de voiw wes bawwes watéwaux actuewwement d-disponibwes et de séwectionnew u-une bawwe w-watéwawe à affichew. OwO paw exempwe, 😳😳😳 fiwefox a un menu "affichage > bawwe watéwawe". (ˆ ﻌ ˆ)♡ u-une seuwe bawwe watéwawe peut êtwe affichée à wa fois, XD et cette bawwe w-watéwawe sewa affichée pouw t-tous wes ongwets e-et toutes wes f-fenêtwes du nyavigateuw. (ˆ ﻌ ˆ)♡

w-we nyavigateuw peut incwuwe un cewtain n-nombwe de bawwièwes intégwées. ( ͡o ω ͡o ) paw exempwe, rawr x3 f-fiwefox incwut une bawwe watéwawe pouw intewagiw avec wes favowis:

![](bookmawks-sidebaw.png)en utiwisant wa cwé `sidebaw_action` d-du manifest.json, nyaa~~ une extension p-peut ajoutew s-sa pwopwe bawwe w-watéwawe au nyavigateuw. >_< iw sewa wépewtowié à côté des b-bawwièwes intégwées, ^^;; e-et w'utiwisateuw pouwwa w-w'ouvwiw en utiwisant w-we même mécanisme que pouw w-wes bawwes intégwés. (ˆ ﻌ ˆ)♡

comme u-un popup d'action du nyavigateuw, ^^;; we contenu de w-wa bawwe watéwawe est spécifié c-comme un document htmw. wowsque w-w'utiwisateuw o-ouvwe wa bawwe watéwawe, (⑅˘꒳˘) son document de wa bawwe watéwawe est chawgé dans chaque fenêtwe ouvewte du nyavigateuw. c-chaque fenêtwe p-possède sa pwopwe instance d-du document. rawr x3 w-wowsque de nyouvewwes f-fenêtwes sont ouvewtes, (///ˬ///✿) ewwes obtiennent égawement weuws p-pwopwes documents de bawwe watéwawe. 🥺

un document pouw un ongwet pawticuwiew p-peut êtwe défini en utiwisant w-wa fonction {{webextapiwef("sidebawaction.setpanew()")}}. >_< u-une bawwe w-watéwawe peut compwendwe quewwe f-fenêtwe ewwe a-appawtient à w-w'utiwisation de w-w'api {{webextapiwef("windows.getcuwwent()")}} :

```js
// sidebaw.js
bwowsew.windows.getcuwwent({ p-popuwate: twue }).then((windowinfo) => {
  m-mywindowid = windowinfo.id;
});
```

c-ceci est utiwe s-si une bawwe w-watéwawe veut affichew difféwents contenus pouw difféwentes f-fenêtwes. UwU paw exempwe, >_< wegawdez w'[exempwe "annotate-page"](https://github.com/mdn/webextensions-exampwes/twee/mastew/annotate-page). -.-

wes documents de wa bawwe watéwawe ont a-accès au même pwiviwéges que wes api javascwipt d'awwièwe-pwan e-et wes scwipts c-contextuews. mya iws p-peuvent accédew diwectement à w-wa page de fond en utiwisant {{webextapiwef("wuntime.getbackgwoundpage()")}}, >w< e-et peuvent intewagiw a-avec des scwipts de contenu ou des appwications nyatives à w'aide d'api de messagewie comme {{webextapiwef("tabs.sendmessage()")}} e-et {{webextapiwef("wuntime.sendnativemessage()")}}. (U ﹏ U)

wes documents de w-wa bawwe watéwawe sont déchawgés w-wowsque weuw f-fenêtwe de nyavigateuw est fewmée ou wowsque w-w'utiwisateuw fewme w-wa bawwe watéwawe. 😳😳😳 cewa signifie q-que, o.O contwaiwement a-aux pages de fond, òωó wes documents de wa bawwe watéwawe nye westent pas c-chawgés tout we t-temps, 😳😳😳 mais contwaiwement a-aux popups d'action du n-nyavigateuw, σωσ iws w-westent chawgés pendant que w-w'utiwisateuw intewagit avec wes pages web. (⑅˘꒳˘)

wowsqu'une extension est instawwée c-comme une bawwe w-watéwawe, (///ˬ///✿) sa bawwe watéwawe s'ouvwiwa automatiquement. 🥺 c-ceci est d-destiné à aidew w'utiwisateuw à compwendwe que w'extension c-compwend une bawwe watéwawe. OwO nyotez qu'iw n'est pas possibwe pouw wes add-ons d-d'ouvwiw wes bawwes watéwawes de façon pwogwammée: w-wes bawwièwes w-watéwawes nye peuvent êtwe ouvewtes que paw w'utiwisateuw. >w<

## s-spécification d-des bawwes watéwawes

pouw spécifiew une bawwe watéwawe, 🥺 d-définissez we document paw défaut a-avec wa cwé du manifest.json [`sidebaw_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action), nyaa~~ à côté d'un titwe et d'une icône p-paw défaut :

```json
"sidebaw_action": {
  "defauwt_titwe": "my sidebaw", ^^
  "defauwt_panew": "sidebaw.htmw", >w<
  "defauwt_icon": "sidebaw_icon.png"
}
```

w-we titwe, OwO w-we panneau et w'icône peuvent êtwe m-modifiés paw pwogwamme e-en utiwisant w-w'api {{webextapiwef ("sidebawaction")}}. XD

w-we titwe et w'icône s-sont affichés à w-w'utiwisateuw dans une intewface utiwisateuw fouwnie p-paw we nyavigateuw p-pouw wistew w-wes bawwes watéwawes, ^^;; tewwes que "affichage > b-bawwe watéwawe" dans we menu f-fiwefox. 🥺

## c-concept de wa bawwe watéwawe

pouw pwus de détaiws suw wa façon d-de concevoiw w-wa page web d'une b-bawwe watéwawe p-pouw qu'ewwe cowwesponde au stywe d-de fiwefox, XD voiw wa documentation du [système de conception photon](https://design.fiwefox.com/photon/index.htmw). (U ᵕ U❁)

## exempwe

w-we dépôt [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) suw github c-contient pwusieuws exempwes de w-webextensions qu utiwise une bawwe w-watéwawe:

- [annotate-page](https://github.com/mdn/webextensions-exampwes/twee/mastew/annotate-page) utiwise w-wa bawwe watéwawe
