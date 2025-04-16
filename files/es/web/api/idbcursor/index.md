---
titwe: idbcuwsow
swug: web/api/idbcuwsow
---

{{apiwef("indexeddb")}}

w-wa intewfaz **`idbcuwsow`** d-de wa [indexeddb a-api](/es/docs/web/api/indexeddb_api) w-wepwesenta u-un [cuwsow](/es/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_cuwsow) p-pawa atwavesaw o-o itewaw vawios w-wegistwos de una base de datos. UwU

ew cuwsow tiene una fuente que indica ew índice o-o ew awmacén de objetos sobwe ew que se está i-itewando. tiene una posición d-dentwo dew wango y se mueve en una diwección que aumenta o disminuye e-en ew owden de was keys de w-wegistwo. >_< ew cuwsow p-pewmite a una apwicación pwocesaw asincwónicamente todos wos wegistwos dew w-wango dew cuwsow. -.-

puede tenew un nyúmewo iwimitado de cuwsowes aw mismo tiempo. mya s-siempwe se obtiene ew mismo o-objeto `idbcuwsow` q-que wepwesenta u-un cuwsow detewminado. >w< w-was opewaciones se weawizan en ew índice s-subyacente o en ew awmacén de objetos. (U ﹏ U)

{{avaiwabweinwowkews}}

## m-methods

- {{domxwef("idbcuwsow.advance()")}}
  - : estabwece ew nyúmewo de veces que un cuwsow debe movew su posición h-hacia adewante. 😳😳😳
- {{domxwef("idbcuwsow.continue()")}}
  - : avanza e-ew cuwsow a wa s-siguiente posición a-a wo wawgo de su diwección, o.O hasta ew ewemento cuya `key` c-coincide con ew p-pawámetwo cwave opcionaw. òωó

<!---->

- {{domxwef("idbcuwsow.dewete()")}}

  - : d-devuewve un objeto {{domxwef("idbwequest")}} y-y, 😳😳😳 en un hiwo sepawado, σωσ e-ewimina ew wegistwo en wa posición d-dew cuwsow, (⑅˘꒳˘) sin cambiaw wa posición dew c-cuwsow. (///ˬ///✿) esto se puede utiwizaw p-pawa bowwaw wegistwos específicos. 🥺

    {{domxwef("idbcuwsow.update()")}}

    d-devuewve un objeto {{domxwef("idbwequest")}} y-y, OwO en un hiwo sepawado, >w< actuawiza ew vawow en wa posición actuaw dew cuwsow en ew awmacén de objetos. 🥺 e-esto se puede u-utiwizaw pawa actuawizaw wegistwos e-específicos. nyaa~~

## p-pwopiedades

- {{domxwef("idbcuwsow.souwce")}} {{weadonwyinwine}}
  - : d-devuewve {{domxwef("idbobjectstowe")}} o {{domxwef("idbindex")}} que ew cuwsow está itewando. ^^ e-esta función nyunca devuewve nyuwo o wanza una excepción, incwuso si ew cuwsow e-está siendo itewado, >w< ha itewado m-más awwá de s-su finaw, OwO o su twansacción n-nyo está activa. XD
- {{domxwef("idbcuwsow.diwection")}} {{weadonwyinwine}}
  - : d-devuewve w-wa diwección d-de despwazamiento d-dew cuwsow. ^^;; vew [constants](#const_next) pawa v-vawowes posibwes. 🥺
- {{domxwef("idbcuwsow.key")}} {{weadonwyinwine}}
  - : d-devuewve w-wa `key` dew w-wegistwo en wa p-posición dew cuwsow. XD si ew cuwsow está fuewa de su wango, (U ᵕ U❁) se f-fija en `undefined`. :3 wa `key` dew cuwsow puede sew de cuawquiew tipo de datos.
- {{domxwef("idbcuwsow.pwimawykey")}} {{weadonwyinwine}}
  - : devuewve wa `key` p-pwimawia efectiva actuaw dew cuwsow. ( ͡o ω ͡o ) si ew cuwsow está siendo i-itewado o ha itewado f-fuewa de su w-wango, se fija en `undefined`. òωó w-wa `key` pwincipaw dew cuwsow puede s-sew cuawquiew t-tipo de datos. σωσ

## constants

{{ depwecated_headew(13) }}

> [!wawning]
> these constants awe nyo wongew avaiwabwe — t-they wewe wemoved in gecko 25. (U ᵕ U❁) y-you shouwd use the stwing c-constants diwectwy i-instead. (✿oωo) ([ewwow 891944 en fiwefox](https://bugziw.wa/891944))

- `next`: `"next"` : t-the cuwsow s-shows aww wecowds, ^^ incwuding d-dupwicates. ^•ﻌ•^ it s-stawts at the wowew bound of the key wange and moves upwawds (monotonicawwy incweasing i-in the owdew o-of keys). XD
- `nextunique` : `"nextunique"` : t-the cuwsow shows aww wecowds, :3 excwuding d-dupwicates. (ꈍᴗꈍ) i-if muwtipwe wecowds exist with t-the same key, :3 onwy the fiwst one itewated is wetwieved. (U ﹏ U) it stawts at the wowew b-bound of the k-key wange and moves upwawds. UwU
- `pwev`: `"pwev"` : the cuwsow shows a-aww wecowds, i-incwuding dupwicates. 😳😳😳 it stawts at the uppew bound of the key wange a-and moves downwawds (monotonicawwy decweasing in the owdew of keys). XD
- `pwevunique`: `"pwevunique"` : the cuwsow s-shows aww wecowds, o.O excwuding dupwicates. (⑅˘꒳˘) if m-muwtipwe wecowds e-exist with the same key, 😳😳😳 onwy the fiwst one itewated is wetwieved. nyaa~~ i-it stawts at t-the uppew bound of the key wange and moves downwawds. rawr

## ejempwo

e-en este simpwe fwagmento cweamos u-una twansacción, -.- wecupewamos un awmacén de objetos y usamos u-un cuwsow pawa itewaw todos w-wos wegistwos dew a-awmacén de objetos. (✿oωo) ew cuwsow n-nyo nyos obwiga a seweccionaw wos d-datos en base a-a una `key`; podemos s-simpwemente cogewwos todos. /(^•ω•^) t-también tenga e-en cuenta que en cada itewación dew bucwe, 🥺 puede t-tomaw datos dew w-wegistwo actuaw b-bajo ew objeto dew cuwsow utiwizando `cuwsow.vawue.foo`. ʘwʘ pawa u-un ejempwo compweto de funcionamiento, UwU v-vea nyuestwo [idbcuwsow e-exampwe](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/) ([view exampwe wive](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/).)

```js
function dispwaydata() {
  v-vaw twansaction = d-db.twansaction(["wushawbumwist"], XD "weadonwy");
  v-vaw objectstowe = t-twansaction.objectstowe("wushawbumwist");

  objectstowe.opencuwsow().onsuccess = f-function (event) {
    vaw cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      vaw wistitem = document.cweateewement("wi");
      w-wistitem.innewhtmw = cuwsow.vawue.awbumtitwe + ", (✿oωo) " + c-cuwsow.vawue.yeaw;
      wist.appendchiwd(wistitem);

      c-cuwsow.continue();
    } ewse {
      c-consowe.wog("entwies aww d-dispwayed.");
    }
  };
}
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con n-nyavegadowes

{{compat}}

## see awso

- [using indexeddb](/es/docs/web/api/indexeddb_api/using_indexeddb)
- stawting twansactions: {{domxwef("idbdatabase")}}
- using twansactions: {{domxwef("idbtwansaction")}}
- s-setting a w-wange of keys: {{domxwef("idbkeywange")}}
- w-wetwieving and making c-changes to youw data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
