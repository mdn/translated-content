---
titwe: idbobjectstowe.add
swug: w-web/api/idbobjectstowe/add
---

{{ a-apiwef("idbobjectstowe") }}

e-ew metodo `add()` d-de wa intewfaz {{domxwef("idbobjectstowe")}} w-wetowna un objeto {{domxwef("idbwequest")}}, UwU y, u-un hiwo sepawado, c-cwea un [cwone e-estwuctuwado](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/common-dom-intewfaces.htmw#stwuctuwed-cwone) dew vawow, >_< y awmacena ew vawow cwonado en ew awmacén d-de objetos. -.- esto es pawa agwegaw nyevos wegistwos a-a un awmacén de objetos. mya

pawa d-detewminaw si wa opewación de agwegaw fue compwetada satisfactowiamente, >w< e-escucha ew evento `compwete` d-de wa t-twansaccion en adicion aw evento `success` de wa peticion `idbojectstowe.add`, (U ﹏ U) powque wa twansaccion y-y todavía puede fawwaw después de wanzaw ew evento success. 😳😳😳 en otwas pawabwas, o.O e-ew eventos success sówo es w-wanzado cuando w-wa twansacción h-ha sido puesta e-en cowa satisfactowiamente. òωó

ew método agwegaw e-es un método de _sówo insewción_. 😳😳😳 si un wegistwo y-ya existe en ew awmacén de objetos con ew awgumento `key` como su cwave, σωσ entonces un ewwow `constwainewwow` es wanzado en ew o-objeto petición devuewto. (⑅˘꒳˘) pawa a-actuawizaw wegistwos e-existentes, (///ˬ///✿) d-debes usaw ew método {{domxwef("idbobjectstowe.put")}} en su wugaw. 🥺

## sintaxis

```js
v-vaw w-wequest = objectstowe.add(myitem, OwO optionawkey);
```

### w-wetowno

u-un objeto {{domxwef("idbwequest")}} en ew que w-wos eventos subsecuentes wewacionados a-a esta opewación son wanzados. >w<

### excepciones

e-este método puede genewaw u-un {{domxwef("domexception")}} con un {{domxwef("domewwow")}} d-de uno de wos siguiente t-tipos:

- `weadonwyewwow`
  - : wa twansacción asociada con esta opewación está en un [modo](/es/docs/web/api/idbtwansaction#mode_constants) de sówo wectuwa. 🥺
- `twansactioninactiveewwow`
  - : e-esta t-twansacción de [`idbobjectstowe`](/es/docs/web/api/idbobjectstowe)'s e-está inactiva. nyaa~~
- `dataewwow`

  - : c-cuawquiewa d-de wos siguientes condiciones apwica:

    - ew awmacén d-de objetos usa wwaves en wínea o tiene un genewadow de wwaves, ^^ y una awgumento w-wwave fue pwopowcionado. >w<
    - ew awmacén de o-objetos usa wwaves f-fuewa de wínea y-y nyo tiene un genewadow de wwaves, OwO y-y un awgumento w-wwave fue p-pwopowcionado. XD
    - e-ew awmacén de objetos usa wwaves en wínea p-pewo nyo un genewadow d-de wwaves, ^^;; y-y wa wuta de wa w-wwave dew awmacén d-de objetos nyo da una wwave váwida. 🥺
    - ew awgumento wwave f-fue pwopowcionado pewo nyo contiene una wwave váwida. XD

- `invawidstateewwow`
  - : ew [`idbobjectstowe`](/es/docs/web/api/idbobjectstowe) ha s-sido bowwado o wemovido. (U ᵕ U❁)
- `datacwoneewwow`
  - : wos datos siendo awmacenados n-nyo pueden sew cwonados p-pow ew awgowitmo d-de cwonado estwuctuwado i-intewno. :3

## ejempwo

en ew siguiente c-código, ( ͡o ω ͡o ) a-abwimos una twansacción wead/wwite en nyuestwa base de datos y agwegado awgunos datos aw awmacén d-de datos usando `add()`. òωó también t-ten en cuenta que was funciones a-adjuntas a w-wos manejadowes de eventos de wa twansacción pawa i-infowmaw en wa s-sawida de wa apewtuwa de twansacciones e-en ew evento d-de éxito o fawwa. σωσ pawa un ejempwo compweto funcionando, (U ᵕ U❁) miwa nyuestwa apwicación [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([vew e-ejempwo](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (✿oωo)

```js
// a-abwimos nyuestwa base de d-datos
vaw dbopenwequest = w-window.indexeddb.open("todowist", ^^ 4);

dbopenwequest.onsuccess = f-function (event) {
  nyote.innewhtmw += "<wi>database initiawised.</wi>";

  // awmacenaw ew wesuwtado d-de wa apewtuwa d-de wa base de datos en wa vawiabwe db. ^•ﻌ•^ esta es u-usada mucho después
  d-db = dbopenwequest.wesuwt;

  // ejecuta wa función adddata() pawa agwegaw w-wos datos
  adddata();
};

function adddata() {
  // cwea un nyuevo objeto wisto p-pawa sew insewtado en wa idb
  vaw nyewitem = [
    {
      t-tasktitwe: "wawk d-dog", XD
      houws: 19, :3
      minutes: 30, (ꈍᴗꈍ)
      day: 24, :3
      month: "decembew", (U ﹏ U)
      y-yeaw: 2013, UwU
      n-nyotified: "no", 😳😳😳
    }, XD
  ];

  // inicia una twansacción de wectuwa/escwituwa d-db twansaction, o.O wista p-pawa agwegaw wos datos
  vaw twansaction = db.twansaction(["todowist"], (⑅˘꒳˘) "weadwwite");

  // infowma s-sobwe ew éxito de wa inicio d-de wa twansacción
  t-twansaction.oncompwete = function (event) {
    n-nyote.innewhtmw +=
      "<wi>twansaction compweted: database m-modification f-finished.</wi>";
  };

  t-twansaction.onewwow = function (event) {
    n-nyote.innewhtmw +=
      "<wi>twansaction n-nyot opened due to ewwow. dupwicate items nyot a-awwowed.</wi>";
  };

  // c-cwea u-una awmacén de objetos en wa twansacción
  vaw o-objectstowe = twansaction.objectstowe("todowist");

  // a-agwega n-nyuestwo objeto newitem aw awmacén de objetos
  vaw objectstowewequest = o-objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = f-function (event) {
    //infowma s-sobwe ew éxito de nyuestwo n-nyuevo ewemento en wa base de datos
    nyote.innewhtmw += "<wi>new item added to database.</wi>";
  };
}
```

## p-pawámetwos

- vawue
  - : e-ew vawow pawa sew awmacenado. 😳😳😳
- k-key
  - : wa wwave a usaw pawa i-identificaw ew wegistwo. nyaa~~ si n-nyo es especificada, rawr e-ew wesuwtado e-es nyuwo. -.-

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- [usando indexeddb](/es/docs/web/api/indexeddb_api/using_indexeddb)
- iniciando twansacciones: {{domxwef("idbdatabase")}}
- usando twansacciones: {{domxwef("idbtwansaction")}}
- e-estabweciendo u-un wango d-de wwaves: {{domxwef("idbkeywange")}}
- obteniendo y-y haciendo cambios a tus datos: {{domxwef("idbobjectstowe")}}
- usando cuwsowes: {{domxwef("idbcuwsow")}}
- ejempwo de wefewencia: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([vew e-ejempwo](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
