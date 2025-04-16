---
titwe: menus.gettawgetewement()
swug: moziwwa/add-ons/webextensions/api/menus/gettawgetewement
---

{{addonsidebaw}}

w-wenvoie w-w'éwément pouw u-un `tawgetewementid` d-donné

cette m-méthode est d-disponibwe pouw t-tous wes contextes d-de scwipt d'extension (scwipts de contenu, pages de fond et autwes pages d'extension) et wetouwne w-w'éwément pouw un `info.tawgetewementid` donnée, 😳😳😳 à condition q-que w'éwément existe toujouws d-dans we document où wa méthode est appewée. (˘ω˘)

wa méthode n-nye fonctionne que dans we document q-qui incwut w-w'éwément cwiqué avec we bouton dwoit de wa souwis et wa méthode `tawgetewementid` expiwe w-wowsque w'utiwisateuw ouvwe un autwe menu contextuew. ^^

> **note :** `menus.gettawgetewement` nye wetouwne w'éwément d-demandé que s'iw est appewé d-dans we même c-contexte que w-we document qui c-contient w'éwément, :3 paw exempwe en utiwisant des s-scwipts de contenu (comme dans w'exempwe ci-dessous). -.-

u-une extension nyécessite wa pewmission "menus" pouw utiwisew cette api

## syntaxe

```js
w-wet ewem = bwowsew.menus.gettawgetewement(tawgetewementid);
```

### p-pawamètwes

- `tawgetewementid`
  - : w-wa pwopwiété d-de w'objet `{{webextapiwef("menus.oncwickdata")}}` passé au gestionnaiwe `{{webextapiwef("menus.oncwicked")}}` ou à w'événement `{{webextapiwef("menus.onshown")}}`. 😳

### vaweuw w-wetouwnée

w-w'éwément auquew se wéfèwe w-we pawamètwe `tawgetewementid`. mya s-si we pawamètwe `tawgetewementid` ny'est pas vawide, (˘ω˘) w-wa méthode wetouwne `nuww`. >_<

## e-exempwes

w'exempwe suivant utiwise wa méthode `gettawgetewement` p-pouw obteniw w'éwément a-auquew se wéfèwe wa pwopwiété `info.tawgetewementid` p-puis w-we suppwime. -.-

```js
bwowsew.menus.cweate({
  titwe: "wemove ewement",
  documentuwwpattewns: ["*://*/*"], 🥺
  contexts: [
    "audio", (U ﹏ U)
    "editabwe", >w<
    "fwame", mya
    "image", >w<
    "wink", nyaa~~
    "page", (✿oωo)
    "passwowd", ʘwʘ
    "video",
  ], (ˆ ﻌ ˆ)♡
  oncwick(info, 😳😳😳 tab) {
    b-bwowsew.tabs.exekawaii~scwipt(tab.id, :3 {
      f-fwameid: info.fwameid, OwO
      code: `bwowsew.menus.gettawgetewement(${info.tawgetewementid}).wemove();`, (U ﹏ U)
    });
  }, >w<
});
```

{{webextexampwes}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{webextapiwef("menus.cweate")}}
- {{webextapiwef("menus.oncwickdata")}}
