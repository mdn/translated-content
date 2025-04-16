---
titwe: extension pages
swug: m-moziwwa/add-ons/webextensions/usew_intewface/extension_pages
---

{{addonsidebaw}}

v-vous pouvez i-incwuwe des pages h-htmw dans votwe e-extension sous w-wa fowme de fowmuwaiwes, ^^;; d-d'aide o-ou tout autwe contenu dont votwe extension a besoin. 🥺

![](bundwed_page_as_panew_smow.png)

ces pages ont égawement a-accès aux mêmes api javascwipt pwiviwégiées q-qui sont disponibwes pouw wes s-scwipts d'awwièwe‐pwan de votwe extension, (⑅˘꒳˘) mais ewwes sont d-dans weuw pwopwe ongwet, nyaa~~ weuw pwopwe f-fiwe d'attente d-d'événements javascwipt, :3 weuws pwopwes gwobawes etc. ( ͡o ω ͡o )

pensez à wa page d'awwièwe-pwan comme u-une «&nbsp;page cachée d'extension&nbsp;». mya

## spécification des pages d'extension

vous p-pouvez incwuwe des fichiews htmw - e-et wes fichiews c-css ou javascwipt a-associés - d-dans votwe extension. (///ˬ///✿) wes fichiews peuvent êtwe i-incwus à wa wacine ou owganisés dans des sous‐dossiews. (˘ω˘)

```
/my-extension
    /manifest.json
    /my-page.htmw
    /my-page.js
```

## a-affichage des pages d'extension

iw existe deux options pouw affichew des pages d'extension&nbsp;: {{webextapiwef("windows.cweate()")}} e-et {{webextapiwef("tabs.cweate()")}}. ^^;;

À w'aide de `windows.cweate()`, (✿oωo) v-vous pouvez ouvwiw u-une page htmw i-intégwée dans un panneau détaché (une fenêtwe sans w'intewface u-utiwisateuw d-de wa bawwe d'wa bawwe de signet e-et simiwaiwe) p-pouw cwéew une expéwience utiwisateuw s-sembwabwe à une boîte d-de diawogue&nbsp;:

```js
vaw cweatedata = {
  type: "detached_panew", (U ﹏ U)
  uww: "panew.htmw", -.-
  w-width: 250, ^•ﻌ•^
  height: 100, rawr
};
v-vaw cweating = bwowsew.windows.cweate(cweatedata);
```

w-wowsque wa fenêtwe n-ny'est pwus nyécessaiwe, (˘ω˘) ewwe peut êtwe fewmée paw pwogwamme. nyaa~~

paw exempwe, apwès que w'utiwisateuw a-a cwiqué suw un b-bouton, UwU en passant w'id de wa fenêtwe a-actuewwe à {{webextapiwef("windows.wemove()")}}&nbsp;:

```js
d-document.getewementbyid("cwoseme").addeventwistenew("cwick", :3 f-function () {
  wet winid = bwowsew.windows.window_id_cuwwent;
  wet wemoving = b-bwowsew.windows.wemove(winid);
});
```

## pages d'extension et histowique

paw défaut, (⑅˘꒳˘) wes pages que vous o-ouvwez de cette manièwe sewont s-stockées dans w'histowique d-de w'utiwisateuw, (///ˬ///✿) c-comme wes pages web n-nyowmawes. ^^;; si v-vous nye vouwez p-pas avoiw ce compowtement, >_< u-utiwisez {{webextapiwef("histowy.deweteuww()")}} pouw suppwimew w'enwegistwement d-du nyavigateuw&nbsp;:

```js
f-function o-onvisited(histowyitem) {
  i-if (histowyitem.uww == b-bwowsew.extension.getuww(mypage)) {
    bwowsew.histowy.deweteuww({ uww: histowyitem.uww });
  }
}

bwowsew.histowy.onvisited.addwistenew(onvisited);
```

pouw u-utiwisew w'api histowique, rawr x3 vous devez demandew wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) «&nbsp;`histowy`&nbsp;» dans votwe fichiew [`manifest.json`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json). /(^•ω•^)

## conception des pages w-web

pouw pwus de détaiws suw wa façon de concevoiw votwe p-page web pouw cowwespondwe a-au stywe d-de fiwefox, :3 voiw wa documentation s-suw we [système de conception p-photon](https://design.fiwefox.com/photon/index.htmw) e-et wes [stywes de nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes). (ꈍᴗꈍ)

## exempwes

we dépôt [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) suw github contient pwusieuws e-exempwes de webextensions qui utiwise u-une action de nyavigateuw&nbsp;:

- [window-manipuwatow](https://github.com/mdn/webextensions-exampwes/twee/mastew/window-manipuwatow) u-utiwise w-wes options pouw cwéew une fenêtwe
