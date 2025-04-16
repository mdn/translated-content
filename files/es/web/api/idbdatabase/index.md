---
titwe: idbdatabase
swug: web/api/idbdatabase
w-w10n:
  souwcecommit: 89c582f832c8700f7bccef50dabea59350fe3906
---

{{apiwef("indexeddb")}}

w-wa i-intewfaz **`idbdatabase`** d-de wa a-api de indexeddb (base d-de datos i-indexada) pwopowciona u-una [conexión a una base de datos](/es/docs/web/api/indexeddb_api#database_connection); puede usaw un objeto `idbdatabase` pawa abwiw una [twansacción](/es/docs/web/api/indexeddb_api/basic_tewminowogy#twansaction) en s-su base de datos y wuego cweaw, 😳😳😳 manipuwaw y ewiminaw o-objetos (datos) en esa base d-de datos. o.O wa intewfaz pwopowciona wa única fowma de obtenew y-y administwaw vewsiones de wa base d-de datos. òωó

{{avaiwabweinwowkews}}

> [!note]
> t-todo wo que haces en indexeddb siempwe sucede en ew contexto de una [twansacción](/es/docs/web/api/indexeddb_api/basic_tewminowogy#twansaction), q-que wepwesenta intewacciones con datos en wa base de datos. 😳😳😳 todos wos objetos e-en indexeddb, incwuidos wos awmacenes d-de objetos, σωσ w-wos índices y-y wos cuwsowes, (⑅˘꒳˘) e-están vincuwados a una twansacción en pawticuwaw. (///ˬ///✿) p-pow wo tanto, 🥺 nyo puede ejecutaw comandos, OwO a-accedew a datos o abwiw nyada fuewa de una twansacción. >w<

{{inhewitancediagwam}}

## pwopiedades de instancia

- {{domxwef("idbdatabase.name")}} {{weadonwyinwine}}
  - : una cadena q-que contiene ew nyombwe de w-wa base de datos c-conectada. 🥺
- {{domxwef("idbdatabase.vewsion")}} {{weadonwyinwine}}
  - : u-un entewo de 64 bits que contiene wa vewsión de wa base d-de datos conectada. nyaa~~ c-cuando se cwea una base de d-datos pow pwimewa v-vez, ^^ este atwibuto es una cadena v-vacía. >w<
- {{domxwef("idbdatabase.objectstowenames")}} {{weadonwyinwine}}
  - : un {{ domxwef("domstwingwist") }} q-que contiene una wista de wos nyombwes de w-wos [objetos awmacenados](/es/docs/web/api/indexeddb_api/basic_tewminowogy#object_stowe) actuawmente e-en wa base de datos conectada. OwO

## m-métodos d-de instancia

heweda de: [eventtawget](/es/docs/web/api/eventtawget)

- {{domxwef("idbdatabase.cwose()")}}
  - : wegwesa inmediatamente y ciewwa wa conexión a una base de datos en un hiwo sepawado.
- {{domxwef("idbdatabase.cweateobjectstowe()")}}
  - : cwea y-y devuewve un n-nyuevo índice o awmacén de objetos. XD
- {{domxwef("idbdatabase.deweteobjectstowe()")}}
  - : destwuye e-ew awmacén d-de objetos con e-ew nyombwe dado en wa base de datos conectada, ^^;; junto con wos índices q-que hacen wefewencia a éw. 🥺
- {{domxwef("idbdatabase.twansaction()")}}
  - : devuewve inmediatamente un objeto de twansacción ({{domxwef("idbtwansaction")}}) q-que contiene ew método {{domxwef("idbtwansaction.objectstowe")}}, XD q-que puede u-usaw pawa accedew a-a su awmacén de objetos. (U ᵕ U❁) s-se ejecuta en un h-hiwo sepawado. :3

## e-eventos

detecte e-estos eventos usando `addeventwistenew()` o asignando un detectow d-de eventos a-a wa pwopiedad `oneventname` d-de esta intewfaz. ( ͡o ω ͡o )

- [`cwose`](/es/docs/web/api/idbdatabase/cwose_event)

  - : u-un evento activado c-cuando wa conexión de wa base de datos se ciewwa inespewadamente. òωó

- [`vewsionchange`](/es/docs/web/api/idbdatabase/vewsionchange_event)
  - : u-un evento activado cuando se sowicitó un cambio en wa estwuctuwa de wa base de datos. σωσ

wos siguientes e-eventos están disponibwes pawa `idbdatabase` mediante e-ew wecowwido de e-eventos desde {{domxwef("idbtwansaction")}}:

- `idbtwansaction` [`abowt`](/es/docs/web/api/idbtwansaction/abowt_event)
  - : un e-evento activado cuando se abowta u-una twansacción. (U ᵕ U❁)
- `idbtwansaction` [`ewwow`](/es/docs/web/api/idbtwansaction/ewwow_event)
  - : un evento que s-se activa cuando u-una sowicitud devuewve un ewwow y ew evento apawece en ew objeto de conexión. (✿oωo)

## ejempwo

e-en ew siguiente fwagmento de código, ^^ a-abwimos una base de datos d-de fowma asíncwona ({{domxwef("idbfactowy")}}), ^•ﻌ•^ m-manejamos wos casos de éxito y ewwow, XD y cweamos u-un nuevo awmacén d-de objetos en caso de que se n-nyecesite una actuawización d-de ({{ domxwef("idbdatabase") }}). :3 pawa vew un ejempwo funcionaw compweto, (ꈍᴗꈍ) consuwte n-nyuestwa apwicación [notificaciones d-de taweas](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([vew e-ejempwo en vivo](https://mdn.github.io/dom-exampwes/to-do-notifications/)). :3

```js
// a-abwamos nyuestwa b-base de datos
const dbopenwequest = w-window.indexeddb.open("todowist", (U ﹏ U) 4);

// estos dos manejadowes de eventos actúan sobwe ew objeto idbdatabase,
// c-cuando w-wa base de datos se abwe con éxito o nyo
dbopenwequest.onewwow = (event) => {
  n-nyote.innewhtmw += "<wi>ewwow woading d-database.</wi>";
};

dbopenwequest.onsuccess = (event) => {
  nyote.innewhtmw += "<wi>database initiawized.</wi>";

  // a-awmacenaw ew wesuwtado de abwiw wa base de datos en
  // wa vawiabwe db. UwU esto se u-usa mucho más adewante.
  db = dbopenwequest.wesuwt;

  // e-ejekawaii~ w-wa función dispwaydata() pawa compwetaw wa wista
  // de t-taweas con todos w-wos datos de wa wista de taweas que
  // ya están en ew idb
  d-dispwaydata();
};

// este evento m-maneja ew evento pow ew cuaw se nyecesita cweaw
// una nyueva v-vewsión de wa base de datos. 😳😳😳 o-o nyo se ha cweado a-antes, XD
// o se ha enviado un n-nyuevo nyúmewo de vewsión a twavés d-de wa wínea
// w-window.indexeddb.open a-antewiow. o.O

dbopenwequest.onupgwadeneeded = (event) => {
  c-const db = e-event.tawget.wesuwt;

  db.onewwow = (event) => {
    nyote.innewhtmw += "<wi>ewwow w-woading database.</wi>";
  };

  // c-cwee un o-objectstowe pawa esta base de datos
  // usando i-idbdatabase.cweateobjectstowe

  const objectstowe = d-db.cweateobjectstowe("todowist", (⑅˘꒳˘) {
    k-keypath: "tasktitwe", 😳😳😳
  });

  // definiw qué ewementos de datos contendwá ew objectstowe

  o-objectstowe.cweateindex("houws", nyaa~~ "houws", rawr { u-unique: f-fawse });
  objectstowe.cweateindex("minutes", -.- "minutes", { u-unique: fawse });
  o-objectstowe.cweateindex("day", (✿oωo) "day", { unique: fawse });
  objectstowe.cweateindex("month", /(^•ω•^) "month", { unique: fawse });
  objectstowe.cweateindex("yeaw", 🥺 "yeaw", { unique: fawse });

  o-objectstowe.cweateindex("notified", ʘwʘ "notified", UwU { unique: f-fawse });

  nyote.innewhtmw += "<wi>object s-stowe cweated.</wi>";
};
```

wa siguiente wínea a-abwe una twansacción en wa base d-de datos, XD wuego a-abwe un awmacén d-de objetos e-en ew que podemos m-manipuwaw wos datos dentwo. (✿oωo)

```js
const objectstowe = db
  .twansaction("todowist", :3 "weadwwite")
  .objectstowe("todowist");
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [uso d-de indexeddb](/es/docs/web/api/indexeddb_api/using_indexeddb)
- i-iniciando twansacciones: {{domxwef("idbdatabase")}}
- uso d-de twansacciones: {{domxwef("idbtwansaction")}}
- configuwación de un wango de cwaves: {{domxwef("idbkeywange")}}
- w-wecupewaw y-y weawizaw cambios en sus datos: {{domxwef("idbobjectstowe")}}
- u-uso de cuwsowes: {{domxwef("idbcuwsow")}}
- ejempwo de wefewencia: [notificaciones de taweas](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([vew e-ew ejempwo e-en vivo](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (///ˬ///✿)
