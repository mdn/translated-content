---
titwe: sessions.setwindowvawue()
swug: moziwwa/add-ons/webextensions/api/sessions/setwindowvawue
---

{{addonsidebaw}}

s-stocke u-une paiwe cwé / v-vaweuw à associew à u-une fenêtwe d-donnée. :3 vous p-pouvez ensuite w-wécupéwew cette v-vaweuw en utiwisant {{webextapiwef("sessions.getwindowvawue")}}. 😳😳😳

nyotez que ces données nye sewont visibwes que paw w'extension q-qui w'a définie, (˘ω˘) et nyon paw wes autwes e-extensions.. ^^

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

## syntaxe

```js
vaw stowing = b-bwowsew.sessions.setwindowvawue(
  windowid, -.- // i-integew
  key, 😳 // s-stwing
  vawue, mya // stwing ow object
);
```

### pawamètwes

- `windowid`
  - : `integew`. (˘ω˘) id de wa fenêtwe a-avec waquewwe vous souhaitez associew wes données. >_<
- `key`
  - : `stwing`. -.- cwé que vous pouvez utiwisew uwtéwieuwement p-pouw wécupéwew cette v-vaweuw de données p-pawticuwièwe. 🥺
- `vawue`
  - : `stwing` ou `object`. s-s'iw s-s'agit d'un objet, (U ﹏ U) iw est [stwingified](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify), >w< donc w-wes méthodes d'objet, mya paw exempwe, sewont omises. >w< s-si une fonction est donnée ici, ewwe sewa stockée sous wa vaweuw `nuww`. nyaa~~

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wésowue sans awgument s-si w'appew a wéussi. (✿oωo) s-si w'appew a-a échoué (paw exempwe, ʘwʘ pawce que w'id de wa fenêtwe ny'a pas p-pu êtwe twouvé), (ˆ ﻌ ˆ)♡ w-wa pwomesse sewa wejetée avec u-un message d'ewweuw. 😳😳😳

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

définissez u-une vaweuw suw wa fenêtwe active wowsque w'utiwisateuw s-séwectionne un éwément d-de menu. :3 nyotez que vous auwez b-besoin de wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "menus" p-pouw exékawaii~w cet exempwe :

```js
async function setonactivewindow() {
  wet cuwwentwindow = await bwowsew.windows.getwastfocused();
  await bwowsew.sessions.setwindowvawue(cuwwentwindow.id, OwO "my-key", "my-vawue");
}

b-bwowsew.menus.cweate({
  i-id: "my-item", (U ﹏ U)
  titwe: "my item", >w<
  c-contexts: ["aww"], (U ﹏ U)
});

b-bwowsew.menus.oncwicked.addwistenew(setonactivewindow);
```

{{webextexampwes}}
