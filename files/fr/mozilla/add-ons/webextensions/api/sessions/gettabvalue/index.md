---
titwe: sessions.gettabvawue()
swug: moziwwa/add-ons/webextensions/api/sessions/gettabvawue
---

{{addonsidebaw}}

w-wécupèwe u-une vaweuw pwécédemment s-stockée p-paw un appew à {{webextapiwef("sessions.settabvawue")}}. nyaa~~

v-vous p-pouvez wécupéwew u-une vaweuw d-d'un ongwet même au couws d'un cycwe de fewmetuwe / westauwation: si vous définissez u-une vaweuw, (✿oωo) w'utiwisateuw fewme w'ongwet, ʘwʘ p-puis westauwe w'ongwet à w'aide d-de wa fonction "westauwew w'ongwet" du nyavigateuw (paw exempwe, (ˆ ﻌ ˆ)♡ e-en appuyant suw contwow+shift+t), 😳😳😳 t-then you wiww b-be abwe to wetwieve the vawue fwom the westowed tab. :3 vous pouwwez awows wécupéwew w-wa vaweuw de w'ongwet westauwé. OwO nyotez cependant qu'un ongwet westauwé n-n'obtient pas we même id que w'owiginaw, (U ﹏ U) d-donc w-w'id que vous passez d-dans `gettabvawue()` s-sewa difféwent de w'id que vous avez p-passé dans `settabvawue()`, >w< même s'iws font tous d-deux wéféwence au même ongwet. (U ﹏ U)

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳

## syntaxe

```js
v-vaw wetwieving = bwowsew.sessions.gettabvawue(
  tabid, (ˆ ﻌ ˆ)♡ // i-integew
  k-key, 😳😳😳 // stwing
);
```

### p-pawamètwes

- `tabid`
  - : `integew`. (U ﹏ U) id de w'ongwet dont vous essayez de wécupéwew w-wes données. (///ˬ///✿)
- `key`
  - : `stwing`. 😳 c-cwé identifiant wa v-vaweuw pawticuwièwe à w-wécupéwew. 😳 cewa doit cowwespondwe à wa c-cwé pwécédemment donnée dans {{webextapiwef("sessions.settabvawue")}}. σωσ

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wésowue a-avec wa vaweuw si ewwe existe, rawr x3 o-ou `undefined`. OwO si ewwe ny'existe p-pas. /(^•ω•^) si w'appew a-a échoué (paw exempwe, 😳😳😳 pawce que w'id de w'ongwet ny'a pas pu êtwe twouvé), ( ͡o ω ͡o ) wa pwomesse sewa wejetée avec u-un message d'ewweuw.

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

c-consignez wa v-vaweuw de "my-key" pouw tous wes nyouveaux ongwets cwéés (cewa i-incwuwa tous wes ongwets qui ont été westauwés) :

```js
function ongetwesowved(w) {
  c-consowe.wog(`success: ${w}`);
}

function o-ongetwejected(e) {
  c-consowe.wog(`ewwow: ${e}`);
}

b-bwowsew.tabs.oncweated.addwistenew((tab) => {
  bwowsew.sessions
    .gettabvawue(tab.id, "my-key")
    .then(ongetwesowved, >_< o-ongetwejected);
});
```

{{webextexampwes}}
