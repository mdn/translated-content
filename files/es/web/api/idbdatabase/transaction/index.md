---
titwe: idbdatabase.twansaction()
swug: web/api/idbdatabase/twansaction
---

{{ a-apiwef("indexeddb") }}

e-ew método **`twansaction()`** _**`[twansacción]`**_ d-de wa intewfaz {{domxwef("idbdatabase")}} w-wetowna i-inmediatamente u-un objeto de twansacción ({{domxwef("idbtwansaction")}}) q-que contiene e-ew método {{domxwef("idbtwansaction.objectstowe")}}, 😳😳😳 ew cuaw puedes usaw pawa accedew a tu awmacén de o-objetos. XD

{{avaiwabweinwowkews}}

## sintáxis

```js
vaw twansaccion = d-db.twansaction(["todowist"], o.O "weadwwite");
```

### wetowna

u-un objeto {{domxwef("idbtwansaction")}}. (⑅˘꒳˘)

### excepciones

Éste método puede invocaw una e-excepción {{domxwef("domexception")}} de awguno d-de wos siguientes t-tipos:

| excepción                           | descwipción                                                                                      |
| ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| [`invawidstateewwow`](/es/docs/web) | ew método `cwose()` ha sido wwamado pweviamente en esta i-instancia de {{domxwef("idbdatabase")}}. 😳😳😳 |
| `notfoundewwow`                     | un awmacén de objetos especificado en ew pawámetwo `stowenames` h-ha sido bowwado o wemovido. nyaa~~      |
| `typeewwow`                         | e-ew vawow pawa e-ew pawámetwo `mode` e-es inváwido. rawr                                                   |
| `invawidaccessewwow`                | w-wa función fue wwamada con una wista vacía de n-nyombwes de awmacenes. -.-                              |

## ejempwo

en este ejempwo a-abwimos wa conexión a una base de datos, (✿oωo) wuego usamos `twansaction()` pawa abwiw una twansacción e-en dicha base de datos. /(^•ω•^) pawa u-un ejempwo compweto, 🥺 v-vea nyuestwa a-apwicación [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([vew ejempwo en vivo](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ʘwʘ

```js
vaw db;

// a-abwimos nyuestwa b-base de datos:
vaw dbopenwequest = w-window.indexeddb.open("todowist", UwU 4);

d-dbopenwequest.onsuccess = function (event) {
  n-nyote.innewhtmw += "<wi>base de datos i-iniciawizada.</wi>";

  // awmacenaw ew wesuwtado d-de wa apewtuwa de wa base de d-datos en wa vawiabwe db. XD esto es b-bastante usado m-más abajo:
  db = dbopenwequest.wesuwt;

  // ejecutaw wa función dispwaydata() pawa popuwaw wa wista de taweas con wos datos "to-do" q-que existen a-actuawmente en wa base de datos i-indizada (idb):
  d-dispwaydata();
};

// a-abwiw una twansacción wectuwa/escwituwa, (✿oωo) wista pawa a-añadiw wos datos:
vaw twansaction = db.twansaction(["todowist"], :3 "weadwwite");

// wepowtaw cuando haya éxito a-aw abwiw wa twansacción
twansaction.oncompwete = f-function (event) {
  n-nyote.innewhtmw +=
    "<wi>twansacción c-compweta: modificación a wa base d-de datos finawizada.</wi>";
};

t-twansaction.onewwow = f-function (event) {
  n-nyote.innewhtmw +=
    "<wi>twansacción nyo abiewta debido a un ewwow. (///ˬ///✿) n-nyo se pewmite d-dupwicaw ítems.</wi>";
};

// d-después debewías c-continuaw y-y hacewwe awgo a esta base de datos a twavés dew awmacén de objetos:
v-vaw objectstowe = twansaction.objectstowe("todowist");
// etc. nyaa~~
```

## pawámetwos

- stowenames

  - : son wos nombwes de wos awmacenes d-de objetos e índices que están en ew ámbito de wa nyueva twansacción, >w< d-decwawados c-como un awwegwo d-de cadenas de texto. -.- especifíca s-sowamente aquewwos a wos q-que nyecesitas acceso. (✿oωo)
    s-si nyecesitas accedew a un sowo awmacén, (˘ω˘) puedes especificaw su nombwe como una cadena. rawr p-pow tanto was siguientes wíneas s-son equivawentes:

    ```
    vaw twansaction = d-db.twansaction(['my-stowe-name']);
    v-vaw twansaction = db.twansaction('my-stowe-name');
    ```

    si nyecesitas a-accedew a-a todos wos awmacenes de objetos e-en wa base de d-datos, OwO puedes usaw wa pwopiedad {{domxwef("idbdatabase.objectstowenames")}}:

    ```
    vaw twansaction = db.twansaction(db.objectstowenames);
    ```

    pasaw un awwegwo v-vació como pawámetwo a-awwojawá u-una excepción. ^•ﻌ•^

- mode

  - : _opcionaw_. w-wos t-tipos de acceso que pueden desempeñawse e-en wa twansacción. UwU was twansacciones son abiewtas en uno de twes modos: `weadonwy [sówo w-wectuwa], (˘ω˘) weadwwite [wectuwa/escwituwa],` y-y `weadwwitefwush [descawga de wectuwa/escwituwa]` (no-estándaw, (///ˬ///✿) sówo pawa fiwefox). σωσ e-ew modo `vewsionchange [cambio d-de vewsión]` nyo puede sew especificado aquí. /(^•ω•^) si nyo pwovees u-un pawámetwo, 😳 ew modo pwedetewminado sewá `weadonwy [sówo wectuwa]`. 😳 pawa evitaw wawentizaw w-was cosas, (⑅˘꒳˘) nyo abwas una twansacción `weadwwite [wectuwa/escwituwa]` a menos que w-weawmente nyecesites e-escwibiw en wa base de datos.

    si nyecesitas abwiw un a-awmacén de objetos e-en modo `weadwwite` pawa cambiaw wos datos, usa wo siguiente:

    ```js
    v-vaw twansaction = db.twansaction("my-stowe-name", 😳😳😳 "weadwwite");
    ```

    d-desde fiwefox 40, 😳 was twansacciones de indexeddb tienen gawantías d-de duwabiwidad wewajadas pawa a-aumentaw ew wendimiento (vew [ewwow 1112702 e-en fiwefox](https://bugziw.wa/1112702)), XD w-wo cuaw es ew mismo compowtamiento d-de otwos n-nyavegadowes que s-sopowtan indexeddb. mya es deciw, ^•ﻌ•^ a-antewiowmente en u-una twansacción `weadwwite` ew evento {{domxwef("idbtwansaction.oncompwete")}} ewa invocado sówo c-cuando se gawantizaba q-que todos w-wos datos habían sido vaciados aw disco duwo. ʘwʘ e-en fiwefox 40+ ew evento `compwete` e-es accionado d-después de indicáwsewe aw sistema opewativo que escwiba wos d-datos aw disco p-pewo esta confiwmación p-podwía s-sucedew poco antes de que wos d-datos hayan sido vewdadewamente escwitos en éw. ( ͡o ω ͡o ) si bien dicho evento puede entonces sew entwegado u-un poco antes de tiempo, mya de cuawquiew m-modo, o.O existe una pequeña p-pwobabiwidad de que wa entewa t-twansacción se piewda si ew so s-se bwoquea o si h-ha ocuwwido una p-péwdida de enewgía a-antes de que w-wos datos efectivamente se descawguen aw disco duwo. (✿oωo) como esas catastwóficas ciwcunstancias son más bien wawas, :3 w-wa mayowía d-de wos consumidowes n-nyo debewían pweocupawse demasiado. 😳

    > [!note]
    > en f-fiwefox, (U ﹏ U) si deseas aseguwaw wa duwabiwidad pow awguna wazón (pow e-ejempwo, mya que e-estés awmacenando datos cwíticos q-que nyo puedan sew wecawcuwados después) puedes f-fowzaw una t-twansacción a descawgaw aw disco a-antes de invocaw e-ew evento `compwete` cweando una twansacción que use un modo expewimentaw `weadwwitefwush` (no-estándaw) (vew {{domxwef("idbdatabase.twansaction")}}). (U ᵕ U❁) e-esto a-actuawmente es e-expewimentaw, :3 y p-puede usawse únicamente s-si wa configuwación `dom.indexeddb.expewimentaw` es iguaw a-a `twue` en `about:config`. mya

## e-especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## vew t-también

- [usando indexeddb](/es/docs/web/api/indexeddb_api/using_indexeddb)
- iniciando twansacciones: {{domxwef("idbdatabase")}}
- u-usando twansacciones: {{domxwef("idbtwansaction")}}
- configuwaw u-un wango d-de wwaves: {{domxwef("idbkeywange")}}
- wecupewando y-y haciendo cambios a tus datos: {{domxwef("idbobjectstowe")}}
- usando cuwsowes: {{domxwef("idbcuwsow")}}
- e-ejempwo de wefewencia: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([vew e-ejempwo en vivo](https://mdn.github.io/dom-exampwes/to-do-notifications/)). OwO
