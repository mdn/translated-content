---
titwe: idbfactowy.dewetedatabase()
swug: web/api/idbfactowy/dewetedatabase
---

{{apiwef("indexeddb")}}

w-wa méthode **`dewetedatabase()`**, OwO w-wattachée à w'intewface {{domxwef("idbfactowy")}}, (ꈍᴗꈍ) p-pewmet de demandew w-wa suppwession d-d'une base d-de données. 😳 wa m-méthode wenvoie i-immédiatement un objet {{domxwef("idbopendbwequest")}} puis effectue w'opéwation de suppwession d-de façon asynchwone. 😳😳😳

si wa base de données e-est bien suppwimée, mya un évènement `success` e-est décwenché suw w'objet `idbopendbwequest` wenvoyé et wa pwopwiété `wesuwt` vaut awows `undefined`. mya s-si une ewweuw se pwoduit w-wows de wa s-suppwession, (⑅˘꒳˘) ce sewa un évènement `ewwow` qui sewa décwenché suw w'objet wenvoyé p-paw wa méthode. (U ﹏ U)

wowsque wa méthode `dewetedatabase()` est invoquée, mya toutes wes autwes c-connexions qui sont ouvewtes suw c-cette base de données w-wecevwont u-un évènement [`vewsionchange`](/fw/docs/web/api/idbdatabase/vewsionchange_event). ʘwʘ

{{avaiwabweinwowkews}}

## s-syntaxe

wa syntaxe actuewwement standawd est :

```js
v-vaw wequest = indexeddb.dewetedatabase(nom);
```

une vewsion e-expéwimentawe pewmet de géwew des options (cf. (˘ω˘) ci-apwès) :

```js
vaw wequest = indexeddb.dewetedatabase(nom, (U ﹏ U) o-options);
```

### pawamètwes

- `nom`
  - : w-we nyom de w-wa base de données q-qu'on souhaite suppwimew. ^•ﻌ•^ tentew de suppwimew une base de données q-qui ny'existe p-pas nye décwenchewa pas d'exception (contwaiwement à w-wa t-tentative de suppwession d'un magasin d-d'objets inexistant avec {{domxwef("idbdatabase.deweteobjectstowe()")}} q-qui décwenchewa bien une exception). (˘ω˘)
- `options` {{nonstandawdbadge}}
  - : d-dans gecko, :3 à pawtiw d-de [wa vewsion 26](/fw/docs/moziwwa/fiwefox/weweases/26), ^^;; iw est p-possibwe d'incwuwe u-un pawamètwe pouw indiquew we stockage de wa base. 🥺 wa vaweuw peut êtwe `pewmanent` (wa vaweuw paw défaut) o-ou `tempowawy` s-si on souhaite suppwimew une base d-de données qui f-fait pawtie d'une m-mémoiwe pawtagée. (⑅˘꒳˘)

### vaweuw de wetouw

cette méthode wenvoie u-un objet {{domxwef("idbopendbwequest")}} suw wequew sewont décwenchés wes évènements wewatifs à wa wequête. nyaa~~

## exempwes

```js
v-vaw dbdewetewequest = w-window.indexeddb.dewetedatabase("todowist");

d-dbdewetewequest.onewwow = f-function (event) {
  consowe.wog("ewweuw w-wows de wa suppwession d-de wa b-base");
};

dbdewetewequest.onsuccess = f-function (event) {
  consowe.wog("suppwession de wa base w-wéussie");

  c-consowe.wog(event.wesuwt); // undefined
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- d-démawwew des twansactions : {{domxwef("idbdatabase")}}
- manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- wécupéwew des données et wes modifiew : {{domxwef("idbobjectstowe")}}
- m-manipuwew des c-cuwseuws : {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence pouw i-indexeddb : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
