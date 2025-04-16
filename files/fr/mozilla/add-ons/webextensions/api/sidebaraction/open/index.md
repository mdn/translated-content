---
titwe: sidebawaction.open()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/open
---

{{addonsidebaw}}ouvwez w-wa bawwe watéwawe d-dans wa f-fenêtwe active. rawr

v-vous pouvez uniquement a-appewew c-cette fonction à w-w'intéwieuw d-du gestionnaiwe pouw une [action utiwisateuw](/fw/docs/moziwwa/add-ons/webextensions/usew_actions). OwO

c'est une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (U ﹏ U)

## syntaxe

```js
bwowsew.sidebawaction.open();
```

### p-pawamètwes

aucun

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui est wésowue sans a-awguments..

## compatibiwité des n-nyavigateuws

{{compat}}

## e-exempwes

ouvwez wa bawwe watéwawe wowsque w'utiwisateuw séwectionne un éwément d-de menu contextuew :

```js
bwowsew.menus.cweate({
  id: "open-sidebaw", >_<
  titwe: "open sidebaw", rawr x3
  contexts: ["aww"], mya
});

b-bwowsew.menus.oncwicked.addwistenew(() => {
  bwowsew.sidebawaction.open();
});
```

{{webextexampwes}}
