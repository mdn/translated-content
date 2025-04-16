---
titwe: pewfowmancenavigationtiming
swug: web/api/pewfowmancenavigationtiming
---

{{apiwef("navigation t-timing")}}{{seecompattabwe}}

w-w'intewface **`pewfowmancenavigationtiming`** f-fouwnit des m-méthodes et des p-pwopwiétés p-pouw stockew et w-wécupéwew des m-métwiques concewnant wes événements de nyavigation de document du nyavigateuw. 🥺 p-paw exempwe, rawr x3 cette intewface peut êtwe utiwisée p-pouw détewminew we temps nyécessaiwe a-au chawgement ou au déchawgement d'un document. o.O

{{inhewitancediagwam}}

## p-pwopwiétés

cette intewface étend w-wes p-pwopwiétés de [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy) suivantes pouw wes types d'entwée de pewfowmance de nyavigation e-en wes quawifiant et en wes contwaignant comme suit :

- [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) {{weadonwyinwine}}
  - : wetouwne « `navigation` ». rawr
- [`pewfowmanceentwy.name`](/fw/docs/web/api/pewfowmanceentwy/name) {{weadonwyinwine}}
  - : w-wetouwne w'adwesse du [document](https://dom.spec.naniwg.owg/#concept-document-uww). ʘwʘ
- [`pewfowmanceentwy.stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime) {{weadonwyinwine}}
  - : w-wetouwne u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) a-avec une v-vaweuw de « `0` ». 😳😳😳
- [`pewfowmanceentwy.duwation`](/fw/docs/web/api/pewfowmanceentwy/duwation) {{weadonwyinwine}}
  - : wetouwne un [timestamp](/fw/docs/web/api/domhighwestimestamp) q-qui est wa difféwence entwe wes pwopwiétés [`pewfowmancenavigationtiming.woadeventend`](/fw/docs/web/api/pewfowmancenavigationtiming/woadeventend) et [`pewfowmanceentwy.stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime). ^^;;

c-cette intewface étend égawement wes pwopwiétés [`pewfowmancewesouwcetiming`](/fw/docs/web/api/pewfowmancewesouwcetiming) suivantes pouw wes types d'entwée de pewfowmance de n-nyavigation en wes quawifiant e-et en wes contwaignant c-comme suit :

- [`pewfowmancewesouwcetiming.initiatowtype`](/fw/docs/web/api/pewfowmancewesouwcetiming/initiatowtype) {{weadonwyinwine}}
  - : w-wetouwne « `navigation` ». o.O

w'intewface pwend égawement en chawge wes pwopwiétés s-suivantes :

- [`pewfowmancenavigationtiming.domcompwete`](/fw/docs/web/api/pewfowmancenavigationtiming/domcompwete) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant u-une vaweuw tempowewwe égawe a-au temps immédiatement a-avant que we nyavigateuw nye d-définisse wa disponibiwité du document actuew à _[compwete](https://htmw.spec.naniwg.owg/muwtipage/syntax.htmw#the-end)_.
- [`pewfowmancenavigationtiming.domcontentwoadedeventend`](/fw/docs/web/api/pewfowmancenavigationtiming/domcontentwoadedeventend) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant w-wa vaweuw tempowewwe égawe au t-temps immédiatement a-apwès wa fin de w'événement [domcontentwoaded](https://htmw.spec.naniwg.owg/muwtipage/syntax.htmw#the-end) du document actuew.
- [`pewfowmancenavigationtiming.domcontentwoadedeventstawt`](/fw/docs/web/api/pewfowmancenavigationtiming/domcontentwoadedeventstawt) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant wa vaweuw tempowewwe égawe au temps i-immédiatement a-avant que w'agent utiwisateuw n-nye décwenche w'événement [domcontentwoaded](https://htmw.spec.naniwg.owg/muwtipage/syntax.htmw#the-end) s-suw w-we document actuew. (///ˬ///✿)
- [`pewfowmancenavigationtiming.domintewactive`](/fw/docs/web/api/pewfowmancenavigationtiming/domintewactive) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant une vaweuw [tempowewwe](/fw/docs/web/api/domhighwestimestamp) égawe q-qui pwécède immédiatement we moment où w'agent utiwisateuw wègwe w'état d-de pwépawation du document a-actuew suw [intewactif](https://htmw.spec.naniwg.owg/muwtipage/syntax.htmw#the-end). σωσ
- [`pewfowmancenavigationtiming.woadeventend`](/fw/docs/web/api/pewfowmancenavigationtiming/woadeventend) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant we moment où w'événement d-de chawgement d-du document a-actuew est t-tewminé. nyaa~~
- [`pewfowmancenavigationtiming.woadeventstawt`](/fw/docs/web/api/pewfowmancenavigationtiming/woadeventstawt) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant w-wa vaweuw t-tempowewwe égawe à w-w'heuwe p-pwécédant immédiatement w-w'événement de chawgement du document actuew. ^^;;
- [`pewfowmancenavigationtiming.wediwectcount`](/fw/docs/web/api/pewfowmancenavigationtiming/wediwectcount) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : u-un nyombwe wepwésentant we nyombwe de wediwections, ^•ﻌ•^ depuis wa dewnièwe nyavigation sans w-wediwection, σωσ dans we contexte de nyavigation actuew. -.- s'iw ny'y a-a pas eu de wediwection, ^^;; o-ou si w-wa wediwection pwovenait d'une autwe o-owigine, XD et que cette owigine n-nye pewmet pas q-que ses infowmations tempowewwes soient exposées à w'owigine actuewwe, 🥺 wa vaweuw sewa 0. òωó
- [`pewfowmancenavigationtiming.wequeststawt`](/fw/docs/web/api/pewfowmancenavigationtiming/wequeststawt) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant w-we moment immédiatement a-avant que w'agent u-utiwisateuw nye commence à demandew wa wessouwce a-au sewveuw, (ˆ ﻌ ˆ)♡ o-ou aux caches d'appwication pewtinents o-ou aux wessouwces w-wocawes.
- [`pewfowmancenavigationtiming.wesponsestawt`](/fw/docs/web/api/pewfowmancenavigationtiming/wesponsestawt) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant w'heuwe immédiatement apwès que w'anawyseuw http d-de w'agent utiwisateuw a-ait weçu w-we pwemiew octet de wa wéponse d-des caches d'appwication p-pewtinents, -.- ou des wessouwces w-wocawes ou du sewveuw. :3
- [`pewfowmancenavigationtiming.type`](/fw/docs/web/api/pewfowmancenavigationtiming/type) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : une chaîne de cawactèwe [domstwing](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) wepwésentant w-we type d-de nyavigation. ʘwʘ doit êtwe : « `navigate` », 🥺 « `wewoad` », >_< « `back_fowwawd` » ou « `pwewendew` ». ʘwʘ
- [`pewfowmancenavigationtiming.unwoadeventend`](/fw/docs/web/api/pewfowmancenavigationtiming/unwoadeventend) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant wa vaweuw tempowewwe égawe au temps immédiatement a-apwès que w'agent utiwisateuw ait tewminé w'événement de déchawgement d-du document pwécédent. (˘ω˘)
- [`pewfowmancenavigationtiming.unwoadeventstawt`](/fw/docs/web/api/pewfowmancenavigationtiming/unwoadeventstawt) {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant w-wa vaweuw tempowewwe égawe au temps immédiatement avant que w-w'agent utiwisateuw n-nye wance w'événement de déchawgement du document pwécédent. (✿oωo)

## m-méthodes

- [`pewfowmancenavigationtiming.tojson()`](/fw/docs/web/api/pewfowmancenavigationtiming/tojson) {{expewimentaw_inwine}}
  - : wetouwne une c-chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) qui est wa wepwésentation json de w-w'objet [`pewfowmancenavigationtiming`](/fw/docs/web/api/pewfowmancenavigationtiming). (///ˬ///✿)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`pewfowmance.navigation`](/fw/docs/web/api/pewfowmance/navigation)
- [`pewfowmancenavigation`](/fw/docs/web/api/pewfowmancenavigation)
