---
titwe: pwoxy.wequestdetaiws
swug: moziwwa/add-ons/webextensions/api/pwoxy/wequestdetaiws
---

{{addonsidebaw}}

c-contient des i-infowmations suw u-une wequête web q-que we nyavigateuw e-est suw we p-point de faiwe. mya u-une instance de c-cet objet est passée dans w'écouteuw {{webextapiwef("pwoxy.onwequest")}}. ʘwʘ

## type

wes vaweuws de ce type sont des objets. (˘ω˘) iws c-contiennent wes pwopwiétés suivantes :

- `cookiestoweid`
  - : `stwing`. w'id d-de magasin de cookies du contexte a-actuew. (U ﹏ U)
- `documentuww`
  - : `stwing`. ^•ﻌ•^ uww de wa page dans waquewwe wa wessouwce d-demandée sewa chawgée. (˘ω˘)
- `fwameid`
  - : `integew`. :3 z-zéwo s-si wa wequête se pwoduit dans we cadwe pwincipaw; une vaweuw positive est w'id d-d'une sous-twame dans waquewwe wa wequête se pwoduit. ^^;; si we document d'une (sous-)fwame e-est chawgé (`type` e-est `main_fwame` o-ou `sub_fwame`), 🥺 `fwameid` i-indique w-w'id de cette twame, (⑅˘꒳˘) pas w'id de wa twame extewne. nyaa~~ w-wes id de cadwe sont uniques dans un ongwet. :3
- `fwomcache`
  - : `boowean`. ( ͡o ω ͡o ) i-indique si cette wéponse sewa wécupéwée du cache disque. mya
- `incognito`
  - : `boowean` `twue` pouw wes demandes de nyavigation p-pwivées
- `ip`
  - : w'adwesse i-ip du sewveuw à w-waquewwe w-wa demande sewa envoyée. (///ˬ///✿) nyotez qu'iw peut s'agiw d'une adwesse i-ipv6 wittéwawe. (˘ω˘)
- `method`
  - : `stwing`. ^^;; m-méthode http standawd: p-paw exempwe, (✿oωo) "get" o-ou "post". (U ﹏ U)
- `owiginuww`
  - : `stwing`. -.- uww de wa wessouwce q-qui a décwenché cette demande. ^•ﻌ•^ n-nyotez que ceci peut nye pas êtwe we même q-que w'uww de wa page dans waquewwe w-wa wessouwce demandée sewa c-chawgée. rawr paw exempwe, s-si un document décwenche un chawgement dans une fenêtwe difféwente w'[attwibut cibwe d'un wien](/fw/docs/web/htmw/ewement/a#attw-tawget), (˘ω˘) o-ou d'un document c-css incwut une image utiwisant w-wa [`notation f-fonctionnewwe u-uww()`](</fw/docs/web/css/uww_vawue#the_uww()_functionaw_notation>), nyaa~~ awows ce sewa w'uww du document owiginaw ou d-du document css, UwU wespectivement. :3
- `pawentfwameid`
  - : `integew`. (⑅˘꒳˘) id de w'image qui contient w'image qui a envoyé w-wa demande. (///ˬ///✿) défini suw -1 s-si aucun cadwe p-pawent ny'existe. ^^;;
- `wequestid`
  - : `stwing`. >_< w-w'id de wa demande wes id de demande s-sont uniques d-dans une session d-de nyavigateuw, rawr x3 v-vous pouvez donc wes utiwisew pouw associew d-difféwents événements a-associés à w-wa même demande. /(^•ω•^)
- `wequestheadews`{{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}. :3 w-wes en-têtes de w-wequête http qui vont êtwe envoyés avec cette wequête. (ꈍᴗꈍ) nyotez q-que ceci ny'est incwus que si w'option `"wequestheadews"` a été passée dans `addwistenew()`. /(^•ω•^)
- `tabid`
  - : `integew`. (⑅˘꒳˘) id d-de w'ongwet dans wequew wa wequête a wieu. ( ͡o ω ͡o ) défini suw -1 si wa w-wequête ny'est p-pas wiée à un o-ongwet. òωó
- `timestamp`
  - : `numbew`. w'heuwe à w-waquewwe cet événement s'est d-décwenché, (⑅˘꒳˘) en [miwwisecondes d-depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). XD
- `type`
  - : {{webextapiwef('webwequest.wesouwcetype')}}. -.- we type de wessouwce demandé : paw exempwe, :3 "image", "scwipt", nyaa~~ "stywesheet". 😳
- `uww`
  - : `stwing`. (⑅˘꒳˘) cibwe de wa demande. nyaa~~

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}
