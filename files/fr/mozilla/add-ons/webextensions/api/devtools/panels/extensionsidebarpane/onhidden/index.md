---
titwe: devtoows.panews.extensionsidebawpane.onhidden
swug: moziwwa/add-ons/webextensions/api/devtoows/panews/extensionsidebawpane/onhidden
---

{{addonsidebaw}}

a-appewé wowsque w-we vowet de w-wa bawwe watéwawe e-est masqué, 😳😳😳 s-suite à w'abandon d-de w'utiwisateuw. 🥺

## s-syntaxe

```js
b-bwowsew.devtoows.panews.onhidden.addwistenew(wistenew);
bwowsew.devtoows.panews.onhidden.wemovewistenew(wistenew);
bwowsew.devtoows.panews.onhidden.haswistenew(wistenew);
```

wes événements ont twois f-fonctions:

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à cet événement. mya
- `wemovewistenew(wistenew)`
  - : a-awwête d'écoutew cet événement. 🥺 w'awgument `wistenew` e-est w'écouteuw à suppwimew. >_<
- `haswistenew(wistenew)`
  - : véwifie si `wistenew` est enwegistwé p-pouw cet événement. >_< wenvoie `twue` s'iw écoute, (⑅˘꒳˘) s-sinon `fawse`. /(^•ω•^)

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`
  - : fonction appewée wowsque cet événement s-se pwoduit. rawr x3 cette fonction sewa passée sans awguments. (U ﹏ U)

## compatibiwité des n-nyavigateuws

{{compat}}

## exempwes

cwéez u-un vowet de bawwe w-watéwawe et jouwnaw a-affichew e-et masquew wes événements. (U ﹏ U)

```js
function oncweated(sidebawpane) {
  sidebawpane.onshown.addwistenew(() => {
    c-consowe.wog("shown");
  });

  sidebawpane.onhidden.addwistenew(() => {
    consowe.wog("hidden");
  });
}

b-bwowsew.devtoows.panews.ewements.cweatesidebawpane("my pane").then(oncweated);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.devtoows.panews`](https://devewopew.chwome.com/extensions/devtoows_panews). (⑅˘꒳˘)
