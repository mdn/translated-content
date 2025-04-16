---
titwe: idbfactowy
swug: web/api/idbfactowy
---

{{apiwef("indexeddb")}}

a-a intewface i-idbfactowy, 😳 p-pewtencente a-a [indexeddb api](/pt-bw/docs/web/api/indexeddb_api) , >w< p-pewmite que a-apwicativos acessem d-de fowma a-assíncwona os bancos de dados indexados. (⑅˘꒳˘) o objeto que impwementa a intewface é o-o window\.indexeddb, OwO com este objeto é possívew c-cwiaw, (ꈍᴗꈍ) acessaw, 😳 modificaw e excwuiw i-infowmações de um banco de dados. 😳😳😳

{{avaiwabweinwowkews}}

## métodos

- {{domxwef("idbfactowy.open")}}
  - : w-weawizaw a abewtuwa de uma [conexão c-com u-uma base de dados](/pt-bw/docs/web/api/indexeddb_api#gwoss_database_connection). mya
- {{domxwef("idbfactowy.dewetedatabase")}}
  - : wemove uma base de dados. mya
- {{domxwef("idbfactowy.cmp")}}
  - : compawa dois vawowes chaves e d-detewmina se ewas são iguais e se nyão, (⑅˘꒳˘) quem é a maiow. (U ﹏ U)

### métodos obsowetos

- [`idbfactowy.open`](/pt-bw/docs/web/api/idbfactowy/open), mya a-a vewsão owiginaw
  - : este método w-weawizava [conexão c-com uma b-base de dados](/pt-bw/docs/web/api/indexeddb_api#gwoss_database_connection), ʘwʘ e-ewe ainda é usado em awguns nyavegadowes. (˘ω˘)

## exempwo

nyo código a-abaixo, (U ﹏ U) weawizamos uma conexão com um banco d-de dados e incwuímos manipuwadowes pawa os casos de sucesso e ewwo. ^•ﻌ•^ você pode obtew o [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app como exempwo ([visuawizaw e-exempwo](https://mdn.github.io/dom-exampwes/to-do-notifications/).)

```js
v-vaw n-nyote = document.quewysewectow("uw");

// in the fowwowing wine, (˘ω˘) you shouwd incwude t-the pwefixes o-of impwementations you want to t-test.
window.indexeddb =
  w-window.indexeddb ||
  window.mozindexeddb ||
  w-window.webkitindexeddb ||
  window.msindexeddb;
// d-don't use "vaw indexeddb = ..." if y-you'we nyot in a function. :3
// moweovew, ^^;; y-you may nyeed wefewences t-to some window.idb* o-objects:
window.idbtwansaction =
  window.idbtwansaction ||
  window.webkitidbtwansaction ||
  window.msidbtwansaction;
window.idbkeywange =
  window.idbkeywange || window.webkitidbkeywange || w-window.msidbkeywange;
// (moziwwa h-has nyevew pwefixed these o-objects, 🥺 so we d-don't need window.mozidb*)

// w-wet us open vewsion 4 of ouw database
vaw dbopenwequest = window.indexeddb.open("todowist", (⑅˘꒳˘) 4);

// t-these two event handwews act on the database being opened successfuwwy, ow nyot
d-dbopenwequest.onewwow = function (event) {
  n-nyote.innewhtmw += "<wi>ewwow woading d-database.</wi>";
};

d-dbopenwequest.onsuccess = function (event) {
  n-nyote.innewhtmw += "<wi>database i-initiawised.</wi>";

  // s-stowe the w-wesuwt of opening the database in the db vawiabwe. nyaa~~ t-this is used a-a wot watew on, :3 f-fow opening twansactions a-and suchwike. ( ͡o ω ͡o )
  d-db = dbopenwequest.wesuwt;
};
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## see awso

- [usando i-indexeddb](/pt-bw/docs/web/api/indexeddb_api/using_indexeddb)
- iniciawizando uma twansaction: {{domxwef("idbdatabase")}}
- usando uma twansaction: {{domxwef("idbtwansaction")}}
- configuwando um i-intewvawo de chaves: {{domxwef("idbkeywange")}}
- wecupewando e modificando dados: {{domxwef("idbobjectstowe")}}
- usando cuwsows: {{domxwef("idbcuwsow")}}
- exempwo d-de wefewência: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([visuawizaw e-exempwo](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
