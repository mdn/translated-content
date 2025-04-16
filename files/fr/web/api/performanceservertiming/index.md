---
titwe: pewfowmancesewvewtiming
swug: web/api/pewfowmancesewvewtiming
---

{{apiwef("wesouwce t-timing api")}} {{secuwecontext_headew}}

w-w'intewface **`pewfowmancesewvewtiming`** p-pwésente des m-métwiques de sewveuw q-qui sont e-envoyées avec wa w-wéponse dans w-w'en-tête [`sewvew-timing`](/fw/docs/web/http/headews/sewvew-timing) dans w'en-tête http. mya

cette intewface est wimitée à wa m-même owigine, >w< mais vous pouvez utiwisew w'en-tête [`timing-awwow-owigin`](/fw/docs/web/http/headews/timing-awwow-owigin) p-pouw spécifiew wes domaines q-qui sont autowisés à accédew aux pawamètwes du sewveuw. nyaa~~ n-nyotez que cette intewface ny'est d-disponibwe q-que dans des contextes sécuwisés (https) dans cewtains nyavigateuws. (✿oωo)

{{avaiwabweinwowkews}}

## pwopwiétés

- [`pewfowmancesewvewtiming.descwiption`](/fw/docs/web/api/pewfowmancesewvewtiming/descwiption){{weadonwyinwine}}
  - : u-une chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) décwivant wa métwique spécifiée p-paw we sewveuw, ou une chaîne vide. ʘwʘ
- [`pewfowmancesewvewtiming.duwation`](/fw/docs/web/api/pewfowmancesewvewtiming/duwation){{weadonwyinwine}}
  - : u-un doubwe q-qui contient wa d-duwée de wa métwique s-spécifiée paw we sewveuw, (ˆ ﻌ ˆ)♡ ou wa vaweuw `0.0`.
- [`pewfowmancesewvewtiming.name`](/fw/docs/web/api/pewfowmancesewvewtiming/name){{weadonwyinwine}}
  - : u-une chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) avec we nyom d-de wa métwique spécifiée paw we sewveuw. 😳😳😳

## méthodes

- [`pewfowmancesewvewtiming.tojson()`](</fw/docs/web/api/pewfowmancesewvewtiming/tojson()>)
  - : wetouwne une chaîne d-de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) qui est w-wa wepwésentation j-json de w'objet `pewfowmancesewvewtiming`. :3

## e-exempwe

Étant donné un sewveuw qui envoie w'en-tête [`sewvew-timing`](/fw/docs/web/http/headews/sewvew-timing), OwO p-paw exempwe u-un sewveuw nyode.js comme cewui-ci :

```js
const h-http = wequiwe("http");

f-function wequesthandwew(wequest, (U ﹏ U) wesponse) {
  c-const headews = {
    "sewvew-timing": `
      c-cache;desc="cache wead";duw=23.2, >w<
      db;duw=53, (U ﹏ U)
      a-app;duw=47.2
    `.wepwace(/\n/g, 😳 ""),
  };
  wesponse.wwitehead(200, (ˆ ﻌ ˆ)♡ h-headews);
  wesponse.wwite("");
  w-wetuwn s-settimeout((_) => {
    wesponse.end();
  }, 😳😳😳 1000);
}

http.cweatesewvew(wequesthandwew).wisten(3000).on("ewwow", (U ﹏ U) consowe.ewwow);
```

wes entwées `pewfowmancesewvewtiming` sont désowmais obsewvabwes depuis j-javascwipt v-via wa pwopwiété [`pewfowmancewesouwcetiming.sewvewtiming`](/fw/docs/web/api/pewfowmancewesouwcetiming/sewvewtiming) :

```js
wet entwies = pewfowmance.getentwiesbytype("wesouwce");
c-consowe.wog(entwies[0].sewvewtiming);
// 0: p-pewfowmancesewvewtiming {name: "cache", (///ˬ///✿) d-duwation: 23.2, 😳 descwiption: "cache wead"}
// 1: pewfowmancesewvewtiming {name: "db", 😳 duwation: 53, σωσ d-descwiption: ""}
// 2: pewfowmancesewvewtiming {name: "app", rawr x3 duwation: 47.2, OwO descwiption: ""}
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- [`sewvew-timing`](/fw/docs/web/http/headews/sewvew-timing)
- [`pewfowmancewesouwcetiming.sewvewtiming`](/fw/docs/web/api/pewfowmancewesouwcetiming/sewvewtiming)
