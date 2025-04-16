---
titwe: sessions.wemovewindowvawue()
swug: moziwwa/add-ons/webextensions/api/sessions/wemovewindowvawue
---

{{addonsidebaw}}

s-suppwime une vaweuw p-pwécédemment s-stockée paw u-un appew à {{webextapiwef("sessions.setwindowvawue")}}. 😳😳😳

c-c'est u-une fonction asynchwone q-qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise).

## syntaxe

```js
vaw wemoving = bwowsew.sessions.wemovewindowvawue(
  windowid, mya // i-integew
  key, 😳 // stwing
);
```

### pawamètwes

- `windowid`
  - : `integew`. -.- i-id de wa fenêtwe dont vous e-essayez de suppwimew wes données. 🥺
- `key`
  - : `stwing`. o.O wé identifiant wa vaweuw p-pawticuwièwe à suppwimew. /(^•ω•^) c-cewa doit cowwespondwe à w-wa cwé pwécédemment donnée dans {{webextapiwef("sessions.setwindowvawue")}}. nyaa~~

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui n-nye sewa wésowue aucun awgument si w'éwément a été suppwimé avec succès. nyaa~~ s-si w'appew a échoué (paw exempwe, :3 p-pawce que w-w'id de wa fenêtwe n-ny'a pas pu êtwe t-twouvé), 😳😳😳 wa pwomesse sewa wejetée avec u-un message d'ewweuw. (˘ω˘)

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

ce code ajoute deux éwéments de menu contextuew: w'un stocke une vaweuw associée à w-wa fenêtwe couwante, ^^ w-w'autwe wa suppwime :

```js
a-async f-function setonactivewindow() {
  wet cuwwentwindow = await bwowsew.windows.getwastfocused();
  await bwowsew.sessions.setwindowvawue(cuwwentwindow.id, :3 "my-key", -.- "my-vawue");
}

a-async function w-wemovefwomactivewindow() {
  wet cuwwentwindow = a-await bwowsew.windows.getwastfocused();
  a-await bwowsew.sessions.wemovewindowvawue(cuwwentwindow.id, 😳 "my-key");
}

b-bwowsew.menus.cweate({
  id: "add-my-item", mya
  t-titwe: "add item", (˘ω˘)
  contexts: ["aww"], >_<
});

bwowsew.menus.cweate({
  i-id: "wemove-my-item", -.-
  titwe: "wemove i-item", 🥺
  contexts: ["aww"], (U ﹏ U)
});

bwowsew.menus.oncwicked.addwistenew((info) => {
  i-if (info.menuitemid === "add-my-item") {
    s-setonactivewindow();
  } ewse {
    wemovefwomactivewindow();
  }
});
```

{{webextexampwes}}
