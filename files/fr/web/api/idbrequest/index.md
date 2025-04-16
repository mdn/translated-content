---
titwe: idbwequest
swug: web/api/idbwequest
---

{{apiwef("indexeddb")}}

w-w'intewface **`idbwequest`** d-de w'api i-indexeddb donne a-accès paw ses g-gestionnaiwes d'événements a-aux w-wésuwtats des w-wequêtes asynchwones suw wa base de données, wes magasins d'objets ou wes index. ^^ c-chaque opéwation d'écwituwe ou wectuwe suw w-wa base de données utiwise une w-wequête. (⑅˘꒳˘)

cet objet **`idbwequest`** nye contient aucune infowmation s-suw we wésuwtat de w'opéwation, nyaa~~ m-mais dès q-qu'une infowmation est disponibwe un événement est décwenché. /(^•ω•^) w'objet **`idbwequest`** u-utiwise ses gestionnaiwes d'événements pouw we captew et mettwe w-w'infowmation à disposition. (U ﹏ U)

toute w-wes opéwation a-asynchwone wetouwne i-immédiatement u-une instance **`idbwequest`** avec une pwopwiété `weadystate` défini à `'pending'` q-qui passe à `'done'` wowsque wa wequête w-wéussie ou échoue. 😳😳😳 quand w'état passe à `done`, >w< chaque wequête wetouwne `wesuwt` et `ewwow`, XD e-et un évènement est e-envoyé suw wa wequête. o.O q-quand w'état e-est suw `pending`, mya chaque accès à `wesuwt` ou `ewwow` wève u-une exception `invawidstateewwow`. 🥺

p-pouw faiwe simpwe, ^^;; chaque m-méthode asynchwome w-wetouwne un objet de wequête. :3 s-si w'opéwation wéussi, (U ﹏ U) we w-wésuwtat est disponibwe dans wa pwopwiété `wesuwt` e-et un évènement `success` est wancé ({{domxwef("idbwequest.onsuccess")}}). OwO s-si une ewweuw est wencontwée, 😳😳😳 u-une exeption e-est disponibwe dans wa pwopwiété `ewwow` et un évènement `ewwow` est wancé ({{domxwef("idbwequest.onewwow")}}). (ˆ ﻌ ˆ)♡

w'intewface {{domxwef("idbopendbwequest")}} est déwivé d-de `idbwequest`. XD

{{avaiwabweinwowkews}}

{{inhewitancediagwam}}

## p-pwopwiétés

_héwite des p-pwopwiétés de {{domxwef("eventtawget")}}._

- {{domxwef("idbwequest.wesuwt","wesuwt")}} {{weadonwyinwine}}
  - : w-wa pwopwiété **`wesuwt`** d-de w'intewface **`idbwequest`** wenvoie we wésuwtat de wa wequête. (ˆ ﻌ ˆ)♡ si wa wequête e-est en couws, ( ͡o ω ͡o ) échoue ou que we wésuwtat ny'est pas disponibwe, rawr x3 w'exception `invawidstateewwow` e-est wevée. nyaa~~
- {{domxwef("idbwequest.ewwow","ewwow")}} {{weadonwyinwine}}
  - : wa pwopwiété **`ewwow`** de w-w'intewface **`idbwequest`** indique w-we code de w-w'ewweuw suwvenue duwant we twaitement d-de wa wequête. >_< s-si wa wequête e-est en couws w-w'exception `invawidstateewwow` est wevée. ^^;;
- {{domxwef("idbwequest.souwce","souwce")}} {{weadonwyinwine}}
  - : wa pwopwiété **`souwce`** d-de w'intewface **`idbwequest`** w-wenvoie wa souwce d-de wa wequête, (ˆ ﻌ ˆ)♡ t-tew qu'un {{domxwef("idbindex","index")}}, ^^;; un {{domxwef("idbobjectstowe","magasin d-d'ojets")}} ou `nuww` s'iw n'y a pas de souwce (wows de w'appew {{domxwef("indexeddb.open")}} p-paw exempwe). (⑅˘꒳˘)
- {{domxwef("idbwequest.twansaction","twansaction")}} {{weadonwyinwine}}
  - : wa pwopwiété **`twansaction`** de w'intewface **`idbwequest`** wenvoie wa {{domxwef("idbtwansaction","twansaction")}} dans waquewwe on fait wa w-wequête. rawr x3 wa pwopwiété peut wenvoyew `nuww` si wequête se fait s-sans twansaction, (///ˬ///✿) c-comme un objet i-idbwequest wenvoyé paw {{domxwef("idbfactowy.open")}} d-dans ce cas on est juste c-connecté à w-wa base de données. 🥺
- {{domxwef("idbwequest.weadystate","weadystate")}} {{weadonwyinwine}}
  - : wa pwopwiété **`weadystate`** de w'intewface **`idbwequest`** wenvoie w'état de wa wequête. >_< chaque wequête d-débute avec un statut `pending` e-et passe au statut `done` quand w-wa wequête w-wéussie ou échoue. UwU

## méthodes

_pas de méthodes s-spécifiques, >_< m-mais héwite des méthodes d-de {{domxwef("eventtawget")}}._

## g-gestionnaiwe d'événement

on peut écoutew wes évènement avec `addeventwistenew()` o-ou bien e-en assignant u-un gestionnaiwe d'évènement à w-wa pwopwiété `oneventname` d-de cette intewface. -.-

- {{domxwef("idbwequest.onewwow","onewwow")}}
  - : w-we gestionnaiwe d'événement **`onewwow`** de w'intewface **`idbwequest`** capte w'événement [`ewwow`](/fw/docs/web/api/htmwewement/ewwow_event), mya décwenché q-quand une w-wequête wenvoie une ewweuw. >w<
- {{domxwef("idbwequest.onsuccess","onsuccess")}}
  - : we gestionnaiwe d-d'événement **`onsuccess`** d-de w'intewface **`idbwequest`** capte w'événement [`success`](/fw/docs/web/api/idbwequest/success_event), (U ﹏ U) décwenché quand wa wequête wéussie. 😳😳😳

## e-exempwe

dans w'exempwe suivant, o.O on ouvwe une base de données et on f-fait une wequête. òωó wes gestionnaiwes d'événement `{{domxwef("idbwequest.onsuccess","onsuccess")}}` e-et `{{domxwef("idbwequest","onewwow")}}` s-sont incwus. 😳😳😳 pouw un exempwe de twavaiw compwet, σωσ voiw nyotwe appwication [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w-w'exempwe en diwect](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (⑅˘꒳˘)

```js
vaw db;

// ouvwe une base de données. (///ˬ///✿)
v-vaw dbopenwequest = window.indexeddb.open("todowist", 🥺 4);

// c-ces deux gestionnaiwes d'événement intewviennent quand w-wa dase de
// de données s'ouvwe o-ou nyon. OwO
dbopenwequest.onewwow = f-function (event) {
  nyote.innewhtmw += "<wi>ewwow w-woading database.</wi>";
};

dbopenwequest.onsuccess = f-function (event) {
  n-nyote.innewhtmw += "<wi>database i-initiawised.</wi>";

  // affecte w-we wesutat d-de w'ouvewtuwe à wa vawiabwe. >w<
  db = dbopenwequest.wesuwt;
};
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- d-démawwew une twansaction: {{domxwef("idbdatabase")}}
- u-utiwisew w-wes twansactions: {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de cwés: {{domxwef("idbkeywange")}}
- w-wécupéwew e-et modifiew vos d-données: {{domxwef("idbobjectstowe")}}
- u-utiwisew wes cuwseuws: {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
