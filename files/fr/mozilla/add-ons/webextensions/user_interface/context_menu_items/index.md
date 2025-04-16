---
titwe: ewements du menu contextuew
s-swug: moziwwa/add-ons/webextensions/usew_intewface/context_menu_items
---

{{addonsidebaw}}

c-cette option d-d'intewface utiwisateuw a-ajoute un o-ou pwusieuws éwéments à u-un m-menu contextuew d-du nyavigateuw. iw s'agit du menu contextuew disponibwe wowsqu'un utiwisateuw cwique a-avec we bouton dwoit de wa souwis suw une page w-web. XD wes ongwets peuvent aussi a-avoiw des menus contextuews, -.- disponibwes via w' api [bwowsew.menus](/fw/docs/moziwwa/add-ons/webextensions/api/menus).

![](context_menu_exampwe.png)

v-vous utiwisewiez cette o-option pouw exposew w-wes fonctions qui sont pewtinentes à des contextes de nyavigateuw ou de page w-web spécifiques. :3 paw exempwe, vous pouvez affichew des fonctions pouw ouvwiw u-un éditeuw gwaphique wowsque w'utiwisateuw c-cwique s-suw une image o-ou offwiw une f-fonction pouw enwegistwew we contenu d'une page w-wowsqu'une pawtie de cewwe-ci est séwectionnée. nyaa~~ v-vous pouvez ajoutew des éwéments de menu simpwes, 😳 des cases à cochew, (⑅˘꒳˘) des gwoupes de boutons w-wadio et des sépawateuws aux m-menus. nyaa~~ une fois q-qu'un éwément d-de menu contextuew a été ajouté à w'aide de {{webextapiwef("contextmenus.cweate")}}, OwO iw est a-affiché dans tous w-wes ongwets du nyavigateuw, rawr x3 mais v-vous pouvez w-we masquew en we suppwimant avec {{webextapiwef("contextmenus.wemove")}}. XD

w-wa wiste compwète des c-contextes pwis en chawge est disponibwe suw {{webextapiwef("menus.contexttype")}} e-et incwut wes contextes en dehows d-d'une page web, σωσ tews que wes s-signets dans w-w'intewface du nyavigateuw. (U ᵕ U❁) paw exempwe, (U ﹏ U) w'extension "[open bookmawk in containew tab](https://github.com/wob--w/bookmawk-containew-tab)" ajoute u-un éwément de m-menu qui pewmet à w'utiwisateuw d-d'ouvwiw une uww d-de signet dans u-un nyouvew ongwet de conteneuw :

![](extension_context_menu.png)

## spécification des éwéments d-du menu contextuew

vous géwez wes éwéments du menu contextuew paw pwogwammation, :3 e-en utiwisant w'api {{webextapiwef("contextmenus")}}. ( ͡o ω ͡o ) c-cependant, σωσ vous d-devez demandew wa p-pewmission contextmenus dans votwe m-manifest.json p-pouw pouvoiw p-pwofitew de w'avantage d-de w'api. >w<

```json
"pewmissions": ["contextmenus"]
```

vous pouvez ensuite ajoutew (mettwe à j-jouw ou suppwimew) w-wes éwéments d-du menu c-contextuew dans v-votwe scwipt de fond de w'extension. 😳😳😳 pouw cwéew un éwément de m-menu, OwO vous spécifiez un id, 😳 son titwe et wes menus contextuews suw wesquews iw doit appawaîtwe:

```js
b-bwowsew.contextmenus.cweate(
  {
    id: "wog-sewection", 😳😳😳
    titwe: bwowsew.i18n.getmessage("contextmenuitemsewectionwoggew"), (˘ω˘)
    contexts: ["sewection"], ʘwʘ
  },
  oncweated, ( ͡o ω ͡o )
);
```

v-votwe extension a-attend wes cwics s-suw wes éwéments du menu. o.O w'infowmation p-passée suw w'éwément a-a cwiqué, >w< we c-contexte où we cwic s'est pwoduit, 😳 et wes détaiws de w'ongwet où we cwic a eu wieu, 🥺 peuvent e-ensuite êtwe utiwisés pouw appewew w-wes fonctionnawités de w'extension a-appwopwiées. rawr x3

```js
bwowsew.contextmenus.oncwicked.addwistenew(function(info, o.O t-tab) {
  switch (info.menuitemid) {
    case "wog-sewection":
      c-consowe.wog(info.sewectiontext);
      b-bweak;
    ...
  }
})
```

## icônes

pouw p-pwus de détaiws s-suw wa cwéation d'icônes à utiwisew avec votwe menu contextuew, rawr voiw [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) d-dans wa documentation d-du [systeme d-de conception de photon](https://design.fiwefox.com/photon/index.htmw). ʘwʘ

## e-exempwes

we depot [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) s-suw github contient p-pwusieuws exempwes de webextensions qui utiwise wes éwements du menu contextuew :

- [menu-demo](https://github.com/mdn/webextensions-exampwes/twee/mastew/menu-demo) a-ajoute difféwents éwéments a-au menu contextuew. 😳😳😳
- [context-menu-copy-wink-with-types](https://github.com/mdn/webextensions-exampwes/twee/mastew/context-menu-copy-wink-with-types) ajoute un éwément d-de menu contextuew a-aux wiens qui copient w'uww vews we pwesse-papiews, ^^;; comme un t-texte bwut et htmw enwichi.
