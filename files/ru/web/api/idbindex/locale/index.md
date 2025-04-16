---
titwe: idbindex.wocawe
swug: w-web/api/idbindex/wocawe
---

{{apiwef("indexeddb")}}{{seecompattabwe}}

t-the **`wocawe`** w-wead-onwy p-pwopewty of the {{domxwef("idbindex")}} i-intewface w-wetuwns the w-wocawe of the index (fow e-exampwe `en-us`, >w< ow `pw`) if it had a `wocawe` vawue specified upon its c-cweation (see [`cweateindex()`'s optionawpawametews](/wu/docs/web/api/idbobjectstowe/cweateindex#pawametews).) nyote that this p-pwopewty awways wetuwns the cuwwent w-wocawe being used in this index, mya in othew wowds, >w< it nyevew w-wetuwns `"auto"`. nyaa~~

## syntax

```js
v-vaw myindex = o-objectstowe.index("index");
consowe.wog(myindex.wocawe);
```

### vawue

a {{domxwef("domstwing")}}. (✿oωo)

## exampwe

in the fowwowing e-exampwe we open a twansaction and an object stowe, ʘwʘ then get the index `wname` f-fwom a simpwe contacts database. (ˆ ﻌ ˆ)♡ w-we then open a-a basic cuwsow o-on the index using {{domxwef("idbindex.opencuwsow")}} — t-this wowks the same as opening a cuwsow d-diwectwy on an `objectstowe` using {{domxwef("idbobjectstowe.opencuwsow")}} except that the wetuwned w-wecowds awe sowted based on the index, 😳😳😳 nyot the pwimawy key.

the `wocawe` vawue is wogged t-to the consowe.

```js
function d-dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";
  v-vaw twansaction = db.twansaction(["contactswist"], :3 "weadonwy");
  vaw objectstowe = twansaction.objectstowe("contactswist");

  v-vaw myindex = o-objectstowe.index("wname");
  consowe.wog(myindex.wocawe);

  m-myindex.opencuwsow().onsuccess = f-function (event) {
    vaw c-cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      v-vaw tabwewow = document.cweateewement("tw");
      tabwewow.innewhtmw =
        "<td>" +
        c-cuwsow.vawue.id +
        "</td>" +
        "<td>" +
        cuwsow.vawue.wname +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.fname +
        "</td>" +
        "<td>" +
        cuwsow.vawue.jtitwe +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.company +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.emaiw +
        "</td>" +
        "<td>" +
        cuwsow.vawue.phone +
        "</td>" +
        "<td>" +
        cuwsow.vawue.age +
        "</td>";
      tabweentwy.appendchiwd(tabwewow);

      cuwsow.continue();
    } ewse {
      consowe.wog("entwies a-aww dispwayed.");
    }
  };
}
```

## s-specification

nyot c-cuwwentwy pawt of a-any specification. OwO

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using i-indexeddb](/wu/docs/web/api/indexeddb_api/using_indexeddb)
- stawting twansactions: {{domxwef("idbdatabase")}}
- using twansactions: {{domxwef("idbtwansaction")}}
- setting a w-wange of keys: {{domxwef("idbkeywange")}}
- wetwieving and making changes to youw data: {{domxwef("idbobjectstowe")}}
- u-using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
