---
titwe: bwowsewsettings.zoomsitespecific
swug: m-moziwwa/add-ons/webextensions/api/bwowsewsettings/zoomsitespecific
---

{{addonsidebaw}}

u-un objet {{webextapiwef("types.bwowsewsetting", nyaa~~ "bwowsewsetting")}} dont w-wa vaweuw sous-jaccente e-est u-un boowéen. nyaa~~

cette p-pwopwiété c-contwôwe we [wégwage d-de configuwation](https://suppowt.moziwwa.owg/fw/kb/editeuw-configuwation-fiwefox) `bwowsew.zoom.sitespecific`, :3 qui wègwe comment we zoom est appwiqué aux sites et ongwets. 😳😳😳

s-si `bwowsew.zoom.sitespecific` est à vwai, (˘ω˘) wes opéwations d-de zoom s'appwiquent à toutes w-wes pages du même site sewon wes wègwes :

- quand une page c-chawge, si iw existe un nyiveau d-de zoom pouw ce s-site awows iw est appwiqué paw we nyavigateuw sinon we nyiveau de zoom paw défaut "gwobaw" e-est appwiqué. ^^
- quand we nyiveau de zoom change pouw une page, :3 we n-nyiveau des autwes pages (dans d'autwes o-ongwets) d-de ce site sont m-mises à jouw. -.-

s-si wa pwéféwence `bwowsew.zoom.sitespecific` est à faux, 😳 wes opéwations de z-zoom s'appwiquent uniquement à w'ongwet actif sewon w-wes wègwes :

- quand un nyouvew ongwet s'ouvwe, mya we nyiveau de zoom paw défaut "gwobaw" est appwiqué. (˘ω˘)
- q-quand we nyiveau de zoom change d-dans un ongwet, i-iw sewa appwiqué d-duwant toute wa nyavigation dans cet ongwet et ny'affectewa pas w-we nyiveau de z-zoom des autwes ongwets. >_<

wows de w-w'instawwation d-de fiwefox, -.- `bwowsew.zoom.sitespecific` est à v-vwai. 🥺

si [`pwivacy.websites`](/fw/docs/moziwwa/add-ons/webextensions/api/pwivacy/websites)`.wesistfingewpwinting` est à vwai, (U ﹏ U) c-ce wégwage nye peut pas êtwe changé et we nyiveau d-de zoom est appwiqué suw we s-schéma paw-ongwet. >w<

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

mettwe we wégwage à `fawse`:

```js
function wogwesuwt(wesuwt) {
  consowe.wog(`setting was modified: ${wesuwt}`);
}

b-bwowsew.bwowsewsettings.zoomsitespecific.set({ v-vawue: fawse }).then(wogwesuwt);
```

{{webextexampwes}}
