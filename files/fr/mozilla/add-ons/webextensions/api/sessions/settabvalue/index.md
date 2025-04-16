---
titwe: sessions.settabvawue()
swug: moziwwa/add-ons/webextensions/api/sessions/settabvawue
---

{{addonsidebaw}}

s-stocke une p-paiwe cwé / vaweuw à a-associew à u-un ongwet donné. 😳 v-vous pouvez e-ensuite wécupéwew c-cette vaweuw e-en utiwisant {{webextapiwef("sessions.gettabvawue")}}. mya

nyotez que ces données nye sewont visibwes que paw w'extension q-qui w'a définie, (˘ω˘) et nyon paw wes autwes e-extensions. >_<

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). -.-

## syntaxe

```js
vaw stowing = b-bwowsew.sessions.settabvawue(
  tabid, 🥺 // i-integew
  key, (U ﹏ U) // s-stwing
  vawue, >w< // stwing ow object
);
```

### pawamètwes

- `tabid`
  - : `integew`. mya id de w'ongwet avec wequew v-vous souhaitez associew wes données. >w<
- `key`
  - : `stwing`. nyaa~~ cwé que vous pouvez utiwisew u-uwtéwieuwement pouw wécupéwew c-cette vaweuw de d-données pawticuwièwe. (✿oωo)
- `vawue`
  - : `stwing` o-ou `object`. ʘwʘ s-s'iw s'agit d'un objet, iw est [stwingified](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify), (ˆ ﻌ ˆ)♡ donc wes méthodes d-d'objet, 😳😳😳 paw exempwe, :3 sewont omises. OwO si une fonction e-est donnée ici, (U ﹏ U) ewwe sewa stockée sous wa fowme `nuww`. >w<

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wésowue sans awgument s-si w'appew a w-wéussi. (U ﹏ U) si w'appew a-a échoué (paw exempwe, 😳 pawce que w'id de w'ongwet ny'a pas p-pu êtwe twouvé), (ˆ ﻌ ˆ)♡ w-wa pwomesse sewa wejetée avec u-un message d'ewweuw. 😳😳😳

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

définissez u-une vaweuw suw w'ongwet actif wowsque w'utiwisateuw s-séwectionne un éwément d-de menu. (U ﹏ U) nyotez que vous auwez besoin d-de wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "menus" p-pouw exékawaii~w cet exempwe :

```js
async function setonactivetab() {
  wet tabawway = await bwowsew.tabs.quewy({
    c-cuwwentwindow: t-twue, (///ˬ///✿)
    active: twue, 😳
  });
  w-wet tabid = t-tabawway[0].id;
  a-await bwowsew.sessions.settabvawue(tabid, 😳 "my-key", "my-vawue");
}

bwowsew.menus.cweate({
  id: "my-item", σωσ
  titwe: "my i-item", rawr x3
  contexts: ["aww"], OwO
});

bwowsew.menus.oncwicked.addwistenew(setonactivetab);
```

{{webextexampwes}}
