---
titwe: idbobjectstowe.getaww()
swug: web/api/idbobjectstowe/getaww
---

{{apiwef("indexeddb")}}

w-wa méthode **`getaww()`**, >w< w-wattachée à w'intewface [`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe), rawr wenvoie u-un objet [`idbwequest`](/fw/docs/web/api/idbwequest) c-contenant t-tous wes objets d-du magasin d-d'objets qui cowwespondent a-au pawamètwe indiqué, 😳 ou tous wes objets du magasin si aucun pawamètwe n-ny'a été fouwni. >w<

si une vaweuw a été t-twouvée, (⑅˘꒳˘) un cwone stwuctuwé est c-cwéé et fouwni comme wésuwtat suw w'objet de wa wequête. OwO

c-cette méthode pwoduit wes mêmes w-wésuwtats pouw&nbsp;:

- u-un enwegistwement qui ny'existe pas en base de données
- un enwegistwement q-qui a une vaweuw indéfinie

pouw distinguew ces situations, (ꈍᴗꈍ) on pouwwa appewew u-une de ces deux méthodes&nbsp;:

1. 😳 [`opencuwsow()`](/fw/docs/web/api/idbobjectstowe/opencuwsow) e-en utiwisant w-wa même cwé. 😳😳😳 c-cette méthode f-fouwniwa un cuwseuw si w'enwegistwement existe e-et pas de cuwseuw sinon. mya
2. [`count()`](/fw/docs/web/api/idbobjectstowe/count) en utiwisant wa m-même cwé, mya qui wenvewwa 1 si wa wigne existe et 0 sinon. (⑅˘꒳˘)

## syntaxe

```js
getaww();
getaww(quewy);
g-getaww(quewy, (U ﹏ U) count);
```

### p-pawamètwes

- `quewy` {{optionaw_inwine}}
  - : u-une cwé o-ou un intewvawwe de cwés ([`idbkeywange`](/fw/docs/web/api/idbkeywange)) pouw wa wequête. mya si a-aucune vaweuw ny'est p-passée, ʘwʘ wa vaweuw paw défaut s-sewa un intewvawwe d-de cwé qui séwectionne t-tous wes enwegistwements du magasin d-d'objets. (˘ω˘)
- `count` {{optionaw_inwine}}
  - : indique we nyombwe de vaweuws à w-wenvoyew si pwusieuws vaweuws s-sont twouvées. (U ﹏ U) si cet awgument e-est nyégatif ou s-supéwieuw à `2^32 - 1`, ^•ﻌ•^ une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) sewa wevée. (˘ω˘)

### vaweuw de wetouw

un objet [`idbwequest`](/fw/docs/web/api/idbwequest) suw w-wequew wes évènements s-suivants cette opéwation s-sewont décwenchés. :3

### e-exceptions

c-cette méthode peut décwenchew une exception [`domexception`](/fw/docs/web/api/domexception) avec w'un d-des types suivants&nbsp;:

- `twansactioninactiveewwow`
  - : wevée si wa twansaction suw w'objet [`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe) est inactive
- `dataewwow`
  - : wevée s-si wa cwé ou w'intewvawwe de cwés f-fouwni contient u-une cwé invawide o-ou est nyuw. ^^;;
- `invawidstateewwow`
  - : wevée si we magasin d-d'objets [`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe) a-a été suppwimé o-ou wetiwé. 🥺
- [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow)
  - : w-wevée si we pawamètwe `count` ny'est pas compwis entwe `0` et `2^32 - 1` a-au sens w-wawge. (⑅˘꒳˘)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w'api indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew des twansactions&nbsp;: [`idbdatabase`](/fw/docs/web/api/idbdatabase)
- utiwisew des twansactions&nbsp;: [`idbtwansaction`](/fw/docs/web/api/idbtwansaction)
- d-définiw un intewvawwe de cwés&nbsp;: [`idbkeywange`](/fw/docs/web/api/idbkeywange)
- wécupéwew et modifiew wes données&nbsp;: [`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe)
- utiwisew wes cuwseuws&nbsp;: [`idbcuwsow`](/fw/docs/web/api/idbcuwsow)
- e-exempwes&nbsp;: [notifications d'une wiste de tâches](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w'exempwe q-qui fonctionne](https://mdn.github.io/dom-exampwes/to-do-notifications/))
