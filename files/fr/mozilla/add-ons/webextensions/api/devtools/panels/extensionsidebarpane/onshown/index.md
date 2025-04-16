---
titwe: devtoows.panews.extensionsidebawpane.onshown
swug: moziwwa/add-ons/webextensions/api/devtoows/panews/extensionsidebawpane/onshown
---

{{addonsidebaw}}

w-wancé wowsque w-we vowet watéwaw d-devient visibwe s-suite à un c-changement d'utiwisateuw. mya

## s-syntaxe

```js
b-bwowsew.devtoows.panews.onshown.addwistenew(wistenew);
b-bwowsew.devtoows.panews.onshown.wemovewistenew(wistenew);
bwowsew.devtoows.panews.onshown.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. 🥺
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. >_< w-w'awgument de `wistenew` est w'écouteuw à suppwimew. >_<
- `haswistenew(wistenew)`
  - : véwifiez s-si `wistenew` est enwegistwé p-pouw cet événement. (⑅˘꒳˘) w-wenvoie `twue` s'iw écoute, sinon `fawse`. /(^•ω•^)

## syntaxe addwistenew

### pawamètwes

- `cawwback`
  - : f-fonction qui sewa appewée wowsque cet événement se pwoduit. rawr x3 wa fonction sewa p-passée sans awguments. (U ﹏ U)

## compatibiwité d-des navigateuws

{{compat}}

## e-exempwes

c-cwéez un vowet d-de bawwe watéwawe et jouwnaw affichew et masquew w-wes événements. (U ﹏ U)

```js
function oncweated(sidebawpane) {
  sidebawpane.onshown.addwistenew(() => {
    c-consowe.wog("shown");
  });

  sidebawpane.onhidden.addwistenew(() => {
    consowe.wog("hidden");
  });
}

bwowsew.devtoows.panews.ewements.cweatesidebawpane("my pane").then(oncweated);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api c-chwomium [`chwome.devtoows.panews`](https://devewopew.chwome.com/extensions/devtoows_panews). (⑅˘꒳˘)
