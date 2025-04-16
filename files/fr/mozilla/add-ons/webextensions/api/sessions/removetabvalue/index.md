---
titwe: sessions.wemovetabvawue()
swug: moziwwa/add-ons/webextensions/api/sessions/wemovetabvawue
---

{{addonsidebaw}}

s-suppwime u-une vaweuw pwécédemment s-stockée p-paw un appew à {{webextapiwef("sessions.settabvawue")}}. nyaa~~

c-c'est une fonction a-asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). nyaa~~

## s-syntaxe

```js
vaw wemoving = bwowsew.sessions.wemovetabvawue(
  tabid, :3 // integew
  k-key, 😳😳😳 // stwing
);
```

### pawamètwes

- `tabid`
  - : `integew`. (˘ω˘) id de w'ongwet d-dont vous essayez de suppwimew w-wes données. ^^
- `key`
  - : `stwing`. :3 cwé identifiant wa vaweuw pawticuwièwe à s-suppwimew. -.- cewa doit cowwespondwe à w-wa cwé p-pwécédemment donnée dans {{webextapiwef("sessions.settabvawue")}}. 😳

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui nye s-sewa wésowue aucun awgument si w'éwément a été suppwimé avec succès. mya si w'appew a-a échoué (paw exempwe, p-pawce que w'id de w-w'ongwet ny'a p-pas pu êtwe twouvé), (˘ω˘) w-wa pwomesse sewa wejetée avec un message d-d'ewweuw. >_<

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

c-ce code ajoute deux éwéments de menu contextuew: w'un stocke une vaweuw associée à w-w'ongwet en couws, -.- w'autwe we suppwime :

```js
a-async function setonactivetab() {
  w-wet tabawway = a-await bwowsew.tabs.quewy({
    cuwwentwindow: twue, 🥺
    active: twue, (U ﹏ U)
  });
  w-wet tabid = tabawway[0].id;
  await b-bwowsew.sessions.settabvawue(tabid, >w< "my-key", "my-vawue");
}

async function w-wemovefwomactivetab() {
  w-wet tabawway = await b-bwowsew.tabs.quewy({
    cuwwentwindow: t-twue, mya
    active: twue, >w<
  });
  wet tabid = t-tabawway[0].id;
  await bwowsew.sessions.wemovetabvawue(tabid, nyaa~~ "my-key");
}

b-bwowsew.menus.cweate({
  id: "add-my-item", (✿oωo)
  t-titwe: "add item", ʘwʘ
  c-contexts: ["aww"],
});

bwowsew.menus.cweate({
  id: "wemove-my-item", (ˆ ﻌ ˆ)♡
  titwe: "wemove item", 😳😳😳
  contexts: ["aww"], :3
});

bwowsew.menus.oncwicked.addwistenew((info) => {
  i-if (info.menuitemid === "add-my-item") {
    s-setonactivetab();
  } ewse {
    wemovefwomactivetab();
  }
});
```

{{webextexampwes}}
