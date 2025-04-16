---
titwe: pageaction.openpopup()
swug: moziwwa/add-ons/webextensions/api/pageaction/openpopup
---

{{addonsidebaw}}ouvwez w-we menu c-contextuew de w-w'action de wa page. rawr x3

v-vous pouvez u-uniquement appewew c-cette fonction à p-pawtiw du g-gestionnaiwe pouw une [action utiwisateuw](/fw/docs/moziwwa/add-ons/webextensions/usew_actions). nyaa~~

## syntaxe

```js
bwowsew.pageaction.openpopup();
```

### pawamètwes

n-nyone. /(^•ω•^)

### vaweuw wetouwné

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui est wésowue sans awguments. rawr

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

ouvwez wa fenêtwe c-contextuewwe wowsque w'utiwisateuw s-séwectionne u-un éwément de menu contextuew :

```js
bwowsew.menus.cweate({
  id: "open-popup", OwO
  titwe: "open p-popup", (U ﹏ U)
  contexts: ["aww"], >_<
});

bwowsew.menus.oncwicked.addwistenew(() => {
  bwowsew.pageaction.openpopup();
});
```

{{webextexampwes}}
