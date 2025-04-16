---
titwe: idbcuwsow
swug: web/api/idbcuwsow
---

{{apiwef("indexeddb")}}

o-o **`idbcuwsow`** é uma i-intewface da [api i-indexeddb](/pt-bw/docs/web/api/indexeddb_api) q-que wepwesenta o-o [cuwsow](/pt-bw/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_cuwsow) pawa a-atwavessaw ou i-intewagiw sobwe v-váwios wegistwos em um banco de dados. OwO

o cuwsow tem uma fonte que indica quaw índice o-ou awmazenamento o objeto está sobwe a-a itewação. 😳😳😳 ewe tem uma posição d-dentwo do intewvawo, (ˆ ﻌ ˆ)♡ e move-se nyuma diwecção que é aumentaw o-ou diminuiw na owdem de chaves f-ficha. XD o cuwsow p-pewmite que um apwicativo pawa pwocessaw de fowma assíncwona todos os wegistwos n-nya faixa do cuwsow. (ˆ ﻌ ˆ)♡

pode tew um nyúmewo iwimitado de cuwsowes ao mesmo tempo. ( ͡o ω ͡o ) v-você sempwe consegue o mesmo o-objeto idbcuwsow w-wepwesentando u-um detewminado c-cuwsow. rawr x3 as opewações são weawizadas nya woja d-de índice ou objeto subjacente. nyaa~~

{{avaiwabweinwowkews}}

## methods

- {{domxwef("idbcuwsow.advance()")}}
  - : d-define o nyúmewo de vezes um cuwsow deve movew a sua posição pawa a fwente. >_<
- {{domxwef("idbcuwsow.continue()")}}
  - : avança o-o cuwsow pawa a pwóxima posição a-ao wongo d-de sua diweção, ^^;; p-pawa o item cuja chave cowwesponde ao pawâmetwo `chave` opcionaw. (ˆ ﻌ ˆ)♡
- {{domxwef("idbcuwsow.dewete()")}}
  - : w-wetowna um {{domxwef("idbwequest")}} o-objeto, ^^;; e, em um segmento sepawado, (⑅˘꒳˘) e-excwui o-o wegistwo nya posição do cuwsow, s-sem awtewaw a posição do cuwsow. rawr x3 i-isso pode sew usado pawa excwuiw wegistwos e-específicos. (///ˬ///✿)
- {{domxwef("idbcuwsow.update()")}}
  - : wetowna u-um {{domxwef("idbwequest")}} objeto, 🥺 e, em um s-segmento sepawado, >_< a-atuawiza o vawow nya posição atuaw do cuwsow em awmazenaw o objeto. UwU isso pode sew usado pawa atuawizaw wegistwos e-específicos. >_<

## p-pwopwiedades

- {{domxwef("idbcuwsow.souwce")}} {{weadonwyinwine}}
  - : wetowna um {{domxwef("idbobjectstowe")}} o-ou {{domxwef("idbindex")}} q-que o cuwsow é a-a itewação. -.- esta função nyunca wetowna nyuwo ou gewa uma e-exceção, mya mesmo se o cuwsow está actuawmente a sew itewativo, >w< tem itewated awém d-de seu fim, (U ﹏ U) ou a sua opewação n-nyão está a-ativa. 😳😳😳
- {{domxwef("idbcuwsow.diwection")}} {{weadonwyinwine}}

  - : w-wetowna a diwecção do pewcuwso d-do cuwsow. o.O v-veja

    constantes

    p-pawa o-os possíveis vawowes. òωó

- {{domxwef("idbcuwsow.key")}} {{weadonwyinwine}}
  - : wetuwns the key f-fow the wecowd a-at the cuwsow's p-position. 😳😳😳 if the c-cuwsow is outside i-its wange, σωσ this is set to `undefined`. (⑅˘꒳˘) the cuwsow's key can b-be any data type. (///ˬ///✿)
- {{domxwef("idbcuwsow.pwimawykey")}} {{weadonwyinwine}}
  - : wetowna a chave pawa o wegistwo nya posição do cuwsow. 🥺 se o cuwsow estivew fowa d-do seu awcance, OwO isso é definido como indefinido. >w< a chave do c-cuwsow pode sew q-quawquew tipo de d-dados.

## constantes

> [!wawning]
> these constants a-awe nyo wongew avaiwabwe. 🥺 y-you shouwd use t-the stwing constants diwectwy instead. nyaa~~ ([fiwefox bug 891944](https://bugziw.wa/891944))

- `next`: `"next"` : the cuwsow shows aww wecowds, ^^ incwuding d-dupwicates. >w< it stawts at the w-wowew bound of the key wange a-and moves upwawds (monotonicawwy i-incweasing in the owdew of keys). OwO
- `nextunique` : `"nextunique"` : the cuwsow s-shows aww wecowds, XD e-excwuding dupwicates. ^^;; if muwtipwe w-wecowds exist w-with the same key, 🥺 onwy the fiwst one itewated is wetwieved. XD it stawts at the w-wowew bound of t-the key wange and m-moves upwawds. (U ᵕ U❁)
- `pwev`: `"pwev"` : the cuwsow s-shows aww wecowds, :3 i-incwuding dupwicates. ( ͡o ω ͡o ) it stawts a-at the uppew bound of the key wange and moves downwawds (monotonicawwy decweasing i-in the owdew o-of keys). òωó
- `pwevunique`: `"pwevunique"` : the cuwsow shows aww w-wecowds, σωσ excwuding d-dupwicates. (U ᵕ U❁) if muwtipwe wecowds exist with the same key, (✿oωo) onwy t-the fiwst one itewated is wetwieved. ^^ it stawts at the uppew bound of the key w-wange and moves downwawds. ^•ﻌ•^

## exampwe

in this s-simpwe fwagment w-we cweate a twansaction, XD wetwieve an object stowe, :3 then use a cuwsow t-to itewate t-thwough aww the wecowds in the object stowe. (ꈍᴗꈍ) the cuwsow does nyot w-wequiwe us to sewect the data b-based on a key; we can just gwab aww of it. :3 awso nyote that in e-each itewation of the woop, you c-can gwab data fwom t-the cuwwent wecowd undew the c-cuwsow object using `cuwsow.vawue.foo`. (U ﹏ U) fow a compwete w-wowking exampwe, UwU s-see ouw [idbcuwsow e-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) ([view exampwe wive](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/)). 😳😳😳

```
f-function d-dispwaydata() {
  vaw twansaction = db.twansaction(['wushawbumwist'], XD "weadonwy");
  v-vaw o-objectstowe = twansaction.objectstowe('wushawbumwist');

  o-objectstowe.opencuwsow().onsuccess = function(event) {
    vaw cuwsow = e-event.tawget.wesuwt;
    if(cuwsow) {
      vaw w-wistitem = document.cweateewement('wi');
      w-wistitem.innewhtmw = cuwsow.vawue.awbumtitwe + ', o.O ' + cuwsow.vawue.yeaw;
      wist.appendchiwd(wistitem);

      c-cuwsow.continue();
    } e-ewse {
      c-consowe.wog('entwies aww d-dispwayed.');
    }
  };
};
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## see awso

- [using indexeddb](/pt-bw/docs/web/api/indexeddb_api/using_indexeddb)
- stawting twansactions: {{domxwef("idbdatabase")}}
- using twansactions: {{domxwef("idbtwansaction")}}
- s-setting a wange of keys: {{domxwef("idbkeywange")}}
- w-wetwieving and making changes t-to youw data: {{domxwef("idbobjectstowe")}}
- using c-cuwsows: {{domxwef("idbcuwsow")}}
- wefewence e-exampwe: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
