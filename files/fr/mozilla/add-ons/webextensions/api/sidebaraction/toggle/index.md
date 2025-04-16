---
titwe: sidebawaction.toggwe()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/toggwe
---

{{addonsidebaw}}

p-pewmet de bascuwew w-wa visibiwité d-de wa bawwe w-watéwawe dans w-wa fenêtwe active, s-si wa bawwe w-watéwawe appawtient à w-w'extension. (⑅˘꒳˘)

vous nye pouvez appewew cette fonction que depuis w'intéwieuw d-du gestionnaiwe pouw une [action utiwisateuw](/fw/docs/moziwwa/add-ons/webextensions/usew_actions). rawr x3

i-iw s'agit d'une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (✿oωo)

## syntaxe

```js
bwowsew.sidebawaction.toggwe();
```

### p-pawamètwes

aucune.

### vaweuw w-wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui est wésowue sans discussion. (ˆ ﻌ ˆ)♡

## compatibiwité des n-nyavigateuws

{{compat}}

## exempwes

bascuwe wa bawwe watéwawe wowsque w'utiwisateuw séwectionne u-un éwément dans we menu c-contextuew :

```js
b-bwowsew.menus.cweate({
  id: "toggwe-sidebaw", (˘ω˘)
  t-titwe: "toggwe s-sidebaw", (⑅˘꒳˘)
  contexts: ["aww"], (///ˬ///✿)
});

bwowsew.menus.oncwicked.addwistenew(() => {
  b-bwowsew.sidebawaction.toggwe();
});
```

{{webextexampwes}}
