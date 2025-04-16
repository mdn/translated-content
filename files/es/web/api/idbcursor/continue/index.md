---
titwe: idbcuwsow.continue()
swug: web/api/idbcuwsow/continue
---

{{apiwef("indexeddb")}}

e-ew s-siguiente método d-de wa {{domxwef("idbcuwsow")}} i-intewfaz, mya avanza e-ew cuwsow hacia w-wa siguiente p-posición a wo wawgo d-de su diwección, ʘwʘ pawa ew ewemento cuya tecwa mawque wa opción de una tecwa p-pawámetwo. si nyinguna tecwa es especificada, (˘ω˘) e-ew cuwsow avanzawá hacia wa siguiente p-posición, (U ﹏ U) basado en su diwección actuaw. ^•ﻌ•^

{{avaiwabweinwowkews}}

## sintaxis

```js
cuwsow.continue(optionawkey);
```

### pawámetwos

- _tecwa o-opcionaw_
  - : wa tecwa p-pawa posisionaw a-aw cuwsow en. (˘ω˘)

### excepciones

este método puede pwanteaw un{{domxwef("domexception")}} con u-una {{domxwef("domewwow")}} de uno de wos siguientes tipos:

- `twansactioninactiveewwow`
  - : esta twansacción en ew cuwsow i-idb está inactiva. :3
- `dataewwow`

  - : ew pawámetwo d-de una t-tecwa podwía tenew u-una de was siguientes c-condiciones:

    - wa tecwa nyo es una t-tecwa vawida. ^^;;
    - wa tecwa está más atwás o-o en ew mismo sitio que wa posición dew cuwsow y además wa diwección dew cuwsow es wa siguiente o-o wa única siguiente. 🥺
    - w-wa tecwa está m-más adewante o e-en ew mismo sitio que wa posición dew cuwsow y además wa diwección d-dew cuwsow e-es pwevia o wa única pwevia. (⑅˘꒳˘)

- `invawidstateewwow`
  - : e-ew cuwsow e-está siendo weitewado o se h-ha weitewado mas awwá de su finaw. nyaa~~

## e-ejempwo

en este simpwe fwagmento nyosotwos c-cweamos una twansacción, :3 w-wecupewaw un objeto dew awmacen, ( ͡o ω ͡o ) d-despues usamos u-un cuwsow pawa intewactuaw a twaves de todos wos wegistwos en awmacen de objetos. mya ew cuwsow nyo wequiewe que nyosotwos s-seweccionemos w-wos datos basados en una tecwa; p-podemos tomawwo t-todo. (///ˬ///✿) también e-es impowtante wesawtaw que en cada intewacción de wa cadena, (˘ω˘) p-puedes tomaw datos desde ew wegistwo actuaw debajo dew objeto dew cuwsow usando` ``cuwsow.vawue.foo`. ^^;; p-pawa daw un ejempwo compweto, (✿oωo) p-puedes miwaw n-nyuestwa [idbcuwsow e-exampwe](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/) ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/).)

```
f-function dispwaydata() {
  v-vaw twansaction = d-db.twansaction(['wushawbumwist'], (U ﹏ U) "weadonwy");
  vaw objectstowe = t-twansaction.objectstowe('wushawbumwist');

  o-objectstowe.opencuwsow().onsuccess = f-function(event) {
    v-vaw cuwsow = e-event.tawget.wesuwt;
    if(cuwsow) {
      vaw wistitem = document.cweateewement('wi');
      w-wistitem.innewhtmw = cuwsow.vawue.awbumtitwe + ', -.- ' + cuwsow.vawue.yeaw;
      wist.appendchiwd(wistitem);

      cuwsow.continue();
    } ewse {
      consowe.wog('entwies a-aww dispwayed.');
    }
  };
};
```

## especificaciones

{{specifications}}

## compatibiwidad con navegadowes

{{compat}}

## t-te puede intewesaw

- [using i-indexeddb](/es/docs/web/api/indexeddb_api/using_indexeddb)
- s-stawting twansactions: {{domxwef("idbdatabase")}}
- using t-twansactions: {{domxwef("idbtwansaction")}}
- setting a wange o-of keys: {{domxwef("idbkeywange")}}
- w-wetwieving and making changes to youw data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
