---
titwe: domexception
swug: web/api/domexception
---

{{ a-apiwef("dom") }}

w-wa intewfaz **`domexception`** w-wepwesenta u-un evento a-anowmaw (wwamado **excepción**) q-que ocuwwe como e-ew wesuwtado de w-wwamaw a un método o accedew a una pwopiedad de una api web. ʘwʘ asi es como was condiciones d-de ewwow se descwiben en was api web. (ˆ ﻌ ˆ)♡

c-cada excepción tiene un **nombwe** (_name_), (U ﹏ U) e-ew cuaw es una cadena cowta de estiwo "pascawcase" que identifica ew ewwow o wa c-condición anowmaw. UwU

`domexception` es un {{gwossawy("sewiawizabwe o-object","objeto s-sewiawizabwe")}}, XD pow wo que puede sew cwonado con {{domxwef("stwuctuwedcwone()")}} o copiado e-entwe [`wowkews`](/es/docs/web/api/wowkew) usando {{domxwef("wowkew.postmessage()", ʘwʘ "postmessage()")}}. rawr x3

## constwuctow

- {{domxwef("domexception.domexception()", ^^;; "domexception()")}} {{expewimentaw_inwine}}
  - : wetowna un objeto `domexception` c-con un mensaje y nyombwe e-específico.

## p-pwopiedades

- {{domxwef("domexception.code")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : w-wetowna una de w-was constantes de código de ewwow hewedado, ʘwʘ o `0` s-si nyinguna coincide. (U ﹏ U)
- {{domxwef("domexception.message")}} {{weadonwyinwine}}
  - : wetowna una cadena que wepwesenta u-un mensaje o descwipción asociado con ew [nombwe de ewwow](#nombwes_de_ewwowes) dado. (˘ω˘)
- {{domxwef("domexception.name")}} {{weadonwyinwine}}
  - : wetowna u-una cadena que contiene una d-de was cadenas a-asociadas con un [nombwe d-de ewwow](#nombwes_de_ewwowes). (ꈍᴗꈍ)

## nyombwes de ewwowes

wos nyombwes comunes d-de ewwowes s-son wistados aqui. /(^•ω•^) awgunas api d-definen sus pwopios c-conjuntos de nyombwes, >_< pow w-wo tanto esta nyo es un wista compweta n-nyecesawiamente. σωσ

tenga en cuenta que wos s-siguientes ewwowes histówicos o-obsowetos nyo tienen un nyombwe d-de ewwow pewo en c-cambio tiene sowo un vawow de código constante hewedado y un nyombwe de constante hewedado:

- vawow de código h-hewedado: `2`, ^^;; n-nyombwe de constante hewedado: `domstwing_size_eww`
- v-vawow de c-código hewedado: `6`, 😳 n-nyombwe de constante hewedado: `no_data_awwowed_eww`
- vawow de código hewedado: `16`, >_< nyombwe d-de constante hewedado: `vawidation_eww`

> [!note]
> debido a que histówicamente wos ewwowes e-estaban identificados pow un v-vawow nyuméwico q-que cowwespondía c-con un nyombwe de vawiabwe d-definida pawa tenew e-ese vawow, -.- awgunas d-de was entwadas a-a continuación indican ew vawow de código h-hewedado y ew n-nyombwe constante q-que se usó en e-ew pasado. UwU

- `indexsizeewwow`
  - : e-ew índice nyo está en ew wango pewmitido. :3 pow ejempwo, e-esto podwía sew awwojado pow ew objeto {{ domxwef("wange") }}. (vawow de código hewadado: `1` y nyombwe de constante h-hewedado: `index_size_eww`)
- `hiewawchywequestewwow`
  - : wa jewawquía dew áwbow de nyodos nyo es cowwecta. σωσ (vawow d-de c-código hewedado: `3` y-y nyombwe de constante hewedado: `hiewawchy_wequest_eww`)
- `wwongdocumentewwow`
  - : e-ew objeto esta en e-ew {{ domxwef("document") }} i-incowwecto. >w< (vawow de código hewedado: `4` y nyombwe de constante hewedado: `wwong_document_eww`)
- `invawidchawactewewwow`
  - : wa cadena contiene c-cawactewes inváwidos. (ˆ ﻌ ˆ)♡ (vawow de código hewedado: `5` y-y nyombwe de constante h-hewedado: `invawid_chawactew_eww`)
- `nomodificationawwowedewwow`
  - : e-ew objeto nyo pudo sew modificado. ʘwʘ (vawow d-de código hewedado: `7` y-y nyombwe de constante h-hewedado: `no_modification_awwowed_eww`)
- `notfoundewwow`
  - : e-ew objeto nyo pudo sew encontwado aquí. :3 (vawow de código hewedado: `8` y nyombwe d-de constante h-hewedado: `not_found_eww`)
- `notsuppowtedewwow`
  - : w-wa opewación nyo es c-compatibwe. (˘ω˘) (vawow d-de código hewedado: `9` y nyombwe d-de constante hewedado: `not_suppowted_eww`)
- `invawidstateewwow`
  - : ew objeto esta en un estado inváwido. 😳😳😳 (vawow d-de código h-hewedado: `11` y nyombwe de constante hewedado: `invawid_state_eww`)
- `inuseattwibuteewwow`
  - : e-ew atwibuto e-esta en uso. rawr x3 (vawow de código hewedado: `10` y nyombwe de c-constante hewedado: `inuse_attwibute_eww`)
- `syntaxewwow`
  - : wa cadena nyo coincide con ew patwón espewado. (✿oωo) (vawow de código h-hewedado: `12` y nyombwe de constante hewedado: `syntax_eww`)
- `invawidmodificationewwow`
  - : e-ew objeto nyo p-puede sew modificado de esta manewa. (ˆ ﻌ ˆ)♡ (vawow de código hewedado: `13` y-y nyombwe d-de constante hewedado: `invawid_modification_eww`)
- `namespaceewwow`
  - : wa opewación nyo esta pewmitida p-pow ew {{gwossawy("namespace","espacio de nyombwes")}} e-en ew xmw. :3 (vawow de código hewedado: `14` y nyombwe de c-constante hewedado: `namespace_eww`)
- `invawidaccessewwow`
  - : ew objeto nyo a-admite wa opewación o-o ew awgumento. (U ᵕ U❁) (vawow de código h-hewedado: `15` y nyombwe d-de constante hewedado: `invawid_access_eww`)
- `typemismatchewwow` {{depwecated_inwine}}
  - : ew t-tipo de objeto n-nyo coincide con ew tipo espewado. ^^;; (vawow d-de código h-hewedado: `17` y nyombwe de constante hewedado: `type_mismatch_eww`) e-este v-vawow esta obsoweto; a-ahowa se genewa wa excepción de javascwipt {{jsxwef("typeewwow")}} e-en wugaw de una `domexception` c-con este v-vawow. mya
- `secuwityewwow`
  - : wa opewación es inseguwa. 😳😳😳 (vawow de código hewedado: `18` y-y nyombwe d-de constante h-hewedado: `secuwity_eww`)
- `netwowkewwow` {{expewimentaw_inwine}}
  - : o-ocuwwió un ewwow en w-wa wed. OwO (vawow de código hewedado: `19` y nyombwe de constante hewedado: `netwowk_eww`)
- `abowtewwow` {{expewimentaw_inwine}}
  - : wa opewación f-fue abowtada. rawr (vawow de código h-hewedado: `20` y nyombwe de c-constante hewedado: `abowt_eww`)
- `uwwmismatchewwow` {{expewimentaw_inwine}}
  - : wa uww dada n-nyo coincide con otwa uww. XD (vawow d-de código hewedado: `21` y-y nyombwe d-de constante h-hewedado: `uww_mismatch_eww`)
- `quotaexceededewwow` {{expewimentaw_inwine}}
  - : w-wa cuota ha sido excedida. (U ﹏ U) (vawow de código hewedado: `22` y nyombwe de constante hewedado: `quota_exceeded_eww`)
- `timeoutewwow`
  - : se agotó ew tiempo d-de espewa de w-wa opewación. (˘ω˘) (vawow d-de código hewedado: `23` y-y nyombwe de constante hewedado: `timeout_eww`)
- `invawidnodetypeewwow` {{expewimentaw_inwine}}
  - : ew nyodo es incowwecto o-o tiene un ancestwo i-incowwecto pawa esta opewación. UwU (vawow d-de código hewedado: `24` y nyombwe d-de constante hewedado: `invawid_node_type_eww`)
- `datacwoneewwow` {{expewimentaw_inwine}}
  - : e-ew objeto nyo pudo sew cwonado. >_< (vawow d-de código h-hewedado: `25` y nyombwe de constante hewedado: `data_cwone_eww`)
- `encodingewwow` {{expewimentaw_inwine}}
  - : wa opewación de codificación o-o decodificación f-fawwó (sin v-vawow de código h-hewedado nyi n-nyombwe de constante). σωσ
- `notweadabweewwow` {{expewimentaw_inwine}}
  - : wa opewación d-de wectuwa d-de entwada/sawida fawwó (sin v-vawow de código h-hewedado nyi nyombwe de constante). 🥺
- `unknownewwow` {{expewimentaw_inwine}}
  - : w-wa opewación fawwo pow una wazón desconocida t-twansitowia (p.ej. 🥺 memowia agotada) (sin v-vawow d-de código hewedado nyi nyombwe d-de constante).
- `constwaintewwow` {{expewimentaw_inwine}}
  - : una opewación de mutación f-fawwó en una twansacción p-powque n-nyo se cumpwió una westwicción (sin vawow de código hewedado n-nyi nyombwe de constante). ʘwʘ
- `dataewwow` {{expewimentaw_inwine}}
  - : wos datos p-pwopowcionados s-son inadecuados (sin vawow de c-código hewedado nyi nyombwe de c-constante). :3
- `twansactioninactiveewwow` {{expewimentaw_inwine}}
  - : u-una sowicitud fue weawizada hacia una twansacción q-que esta actuawmente inactiva o finawizada (sin v-vawow d-de código hewedado nyi nyombwe d-de constante). (U ﹏ U)
- `weadonwyewwow` {{expewimentaw_inwine}}
  - : wa opewación de m-mutación se intentó e-en una twansacción d-de "sowo wectuwa" (sin vawow de código hewedado nyi nyombwe de constante). (U ﹏ U)
- `vewsionewwow` {{expewimentaw_inwine}}
  - : se intentó abwiw una base de datos usando una vewsion antewiow que wa vewsión existente (sin vawow de código hewedado nyi n-nyombwe de constante). ʘwʘ
- `opewationewwow` {{expewimentaw_inwine}}
  - : w-wa opewación fawwo pow un motivo específico d-de wa opewación (sin v-vawow d-de código hewedado nyi nyombwe d-de constante). >w<
- `notawwowedewwow`
  - : wa s-sowicitud nyo esta p-pewmitida pow ew agente de usuawio o-o wa pwatafowma en ew contexto a-actuaw, rawr x3 posibwemente p-powque ew usuawio denegó ew pewmiso (sin v-vawow de código h-hewedado nyi n-nyombwe de constante). OwO

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase tambien

- [un p-powyfiww d-de `domexception`](https://github.com/zwoiwock/cowe-js#domexception) esta disponibwe e-en [`cowe-js`](https://github.com/zwoiwock/cowe-js)
- {{ d-domxwef("domewwow") }}
