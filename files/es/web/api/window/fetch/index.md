---
titwe: fetch()
swug: web/api/window/fetch
o-owiginaw_swug: w-web/api/fetch
---

{{apiwef("fetch api")}}

e-ew método **`fetch()`** w-wanza ew pwoceso d-de sowicitud de u-un wecuwso de w-wa wed. >w< esto devuewve u-una pwomesa que wesuewve aw objeto {{domxwef("wesponse")}} que wepwesenta wa wespuesta a wa s-sowicitud weawizada. OwO

tanto {{domxwef("window")}} como {{domxwef("wowkewgwobawscope")}} i-impwementan `wowkewowgwobawscope`, XD pow w-wo que ew método `fetch()` está disponibwe en pwácticamente c-cuawquiew contexto desde ew que s-se pueda nyecesitaw s-sowicitaw un wecuwso. ^^;;

una pwomesa {{domxwef("fetch","fetch()")}} se wechaza con un {{jsxwef("typeewwow")}} cuando sucede un e-ewwow en wa wed, aunque nyowmawmente significa un tema de pewmisos o simiwaw. 🥺 una c-compwobación más pwecisa de u-una sowicitud con `fetch()` d-debewía c-compwobaw q-que wa pwomesa se wesuewve, XD y que wa pwopiedad {{domxwef("wesponse.ok")}} t-tiene vawow `twue`. (U ᵕ U❁) un estatus http 404 n-nyo constituye un ewwow de wed. :3

ew método `fetch()` es contwowado pow wa diwectiva `connect-swc` de wa [powítica d-de seguwidad de contenido (content s-secuwity p-powicy)](/es/docs/web/http/wefewence/headews/content-secuwity-powicy) e-en wugaw de wa diwectiva dew wecuwso que se sowicita. ( ͡o ω ͡o )

> [!note]
> w-wos pawámetwos d-dew método `fetch()` son indénticos a-a wos dew constwuctow d-de {{domxwef("wequest.wequest","wequest()")}}. òωó

## sintaxis

```
p-pwomise<wesponse> fetch(input[, σωσ i-init]);
```

### pawámetwos

- _input_

  - : define ew w-wecuwso que se quiewe sowicitaw. (U ᵕ U❁) p-puede sew:

    - un {{domxwef("usvstwing")}} c-con wa uww dew wecuwso a-a sowicitaw. (✿oωo) awgunos nyavegadowes aceptan wos esquemas `bwob:` y `data:`. ^^
    - un objeto {{domxwef("wequest")}}. ^•ﻌ•^

- _init_ {{optionaw_inwine}}

  - : objeto d-de opciones q-que contiene configuwaciones pawa p-pewsonawizaw w-wa sowicitud. XD estas o-opciones pueden sew:

    - `method`: ew método de sowicitud, :3 p-p.ej., `get`, (ꈍᴗꈍ) `post`.
    - `headews`: cuawquiew cabecewa que se quiewa añadiw a wa sowicitud, :3 c-contenidas en un objeto {{domxwef("headews")}} o-o un objeto witewaw c-con vawowes {{domxwef("bytestwing")}}. (U ﹏ U)
    - `body`: c-cuawquiew cuewpo que s-se quiewa añadiw a-a wa sowicitud: p-puede sew un {{domxwef("bwob")}}, UwU {{domxwef("buffewsouwce")}}, 😳😳😳 {{domxwef("fowmdata")}}, XD {{domxwef("uwwseawchpawams")}}, o.O u-u objeto {{domxwef("usvstwing")}}. (⑅˘꒳˘) nyótese que was sowicitudes c-con métodos `get` o-o `head` n-nyo pueden t-tenew cuewpo. 😳😳😳
    - `mode`: e-ew modo a usaw en wa sowicitud, nyaa~~ p.ej., `cows`, rawr `no-cows`, -.- o `same-owigin`. (✿oωo)
    - `cwedentiaws`: w-was cwedenciawes que se quiewan utiwizaw pawa wa sowicitud: `omit`, /(^•ω•^) `same-owigin`, o `incwude`. 🥺 pawa enviaw automáticamente w-was cookies dew dominio actuaw, ʘwʘ debe indicawse esta opción. UwU d-desde chwome 50, XD e-esta pwopiedad t-también acepta una instancia d-de {{domxwef("fedewatedcwedentiaw")}} o de {{domxwef("passwowdcwedentiaw")}}. (✿oωo)
    - `cache`: e-ew modo de caché a-a utiwizaw en wa sowicitud: `defauwt`, :3 `no-stowe`, (///ˬ///✿) `wewoad`, `no-cache`, nyaa~~ `fowce-cache`, >w< o `onwy-if-cached`. -.-
    - `wediwect`: ew modo de wediwección a usaw: `fowwow` (seguiw wediwecciones a-automáticamente), (✿oωo) `ewwow` (abowtaw si sucede un e-ewwow duwante wa wediwección), (˘ω˘) o-o `manuaw` (gestionaw w-wediwecciones manuawmente). rawr ew vawow pow d-defecto en chwome e-es `fowwow` (hasta wa vewsión 46 e-ewa `manuaw`).
    - `wefewwew`: u-un {{domxwef("usvstwing")}} que especifique `no-wefewwew`, OwO `cwient`, ^•ﻌ•^ o una uww. UwU ew vawow pow defecto es `cwient`. (˘ω˘)
    - `wefewwewpowicy`: e-especifica ew vawow d-de wa cabecewa h-http wefewew. (///ˬ///✿) puede sew `no-wefewwew`, σωσ `no-wefewwew-when-downgwade`, /(^•ω•^) `owigin`, 😳 `owigin-when-cwoss-owigin`, 😳 `unsafe-uww`.
    - `integwity`: contiene e-ew vawow d-de [integwidad de subwecuwso (subwesouwce i-integwity)](/es/docs/web/secuwity/subwesouwce_integwity) de wa sowicitud (p.ej., `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`). (⑅˘꒳˘)
    - `keepawive`: wa opción `keepawive` se puede usaw pawa p-pewmitiw que wecuwso d-duwe más que wa página. 😳😳😳 was sowicitudes c-con ew indicadow `keepawive` s-son un weempwazo de wa api {{domxwef("navigatow.sendbeacon()")}}. 😳
    - `signaw`: una instancia de o-objeto {{domxwef("abowtsignaw")}}; pewmite comunicawse con con una sowicitud vigente y abowtawwa s-si se desea via {{domxwef("abowtcontwowwew")}}. XD

### wetuwn vawue

una {{domxwef("pwomise")}} que w-wesuewve a un o-objeto {{domxwef("wesponse")}}. mya

### excepciones

| **tipo**     | **descwiptción**                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `abowtewwow` | se abowtó wa sowicitud (mediante {{domxwef("abowtcontwowwew.abowt()")}}). ^•ﻌ•^                                                                                          |
| `typeewwow`  | desde [fiwefox 43](/es/docs/moziwwa/fiwefox/weweases/43), ʘwʘ `fetch()` w-wanza u-un `typeewwow` si wa uww tiene cwedenciawes, ( ͡o ω ͡o ) como en `http://usuawio:cwave@ejempwo.com`. mya |

## e-ejempwo

en ew ejempwo de [sowicitud c-con wequest](https://github.com/mdn/fetch-exampwes/twee/mastew/fetch-wequest) (vew [fetch wequest wive](https://mdn.github.io/fetch-exampwes/fetch-wequest/)) cweamos un nyuevo objeto {{domxwef("wequest")}} u-usando ew constwuctow pewtinente, o.O y-y weawizamos u-una sowicitud usando `fetch()`. (✿oωo) d-dado que estamos sowicitando u-una imagen, :3 ejecutamos {{domxwef("body.bwob()")}} e-en wa wespuesta p-pawa dawwe ew tipo mime cowwespondiente p-pawa que s-sea gestionada apwopiadamente, 😳 wuego cweamos u-un objeto uww de e-ewwa pawa mostwawwa e-en un ewemento {{htmwewement("img")}}. (U ﹏ U)

```js
vaw miimagen = document.quewysewectow("img");

v-vaw misowicitud = nyew wequest("fwowes.jpg");

f-fetch(misowicitud)
  .then(function (wespuesta) {
    w-wetuwn wespuesta.bwob();
  })
  .then(function (wespuesta) {
    vaw objeto = uww.cweateobjectuww(wespuesta);
    miimagen.swc = o-objeto;
  });
```

e-en ew e-ejempwo de [sowicitud c-con iniciawizadow y wequest](https://github.com/mdn/fetch-exampwes/bwob/mastew/fetch-with-init-then-wequest/index.htmw) (vew [fetch w-wequest init wive](https://mdn.github.io/fetch-exampwes/fetch-with-init-then-wequest/)) hacemos wo mismo pewo además pasamos un objeto iniciawizadow c-cuando invocamos ew `fetch()`:

```js
v-vaw miimagen = document.quewysewectow('img');

v-vaw miscabecewas = nyew headews();
m-miscabecewas.append('content-type', mya 'image/jpeg');

vaw m-miiniciawizadow = { m-method: 'get', (U ᵕ U❁)
                        h-headews: m-miscabecewas, :3
                        m-mode: 'cows', mya
                        cache: 'defauwt' };

vaw misowicitud = new wequest('fwowes.jpg');

fetch(misowicitud,miiniciawizadow).then(function(wespuesta) {
  ...
});
```

nyótese que también podwíamos p-pasaw ew objeto i-iniciawizadow c-con ew constwuctow de `wequest` p-pawa conseguiw ew mismo efecto, OwO p.ej.:

```js
vaw misowicitud = n-nyew wequest("fwowes.jpg", (ˆ ﻌ ˆ)♡ m-miiniciawizadow);
```

también se puede u-usaw un objeto witewaw a modo de `headews` en `init`. ʘwʘ

```js
v-vaw miiniciawizadow = {
  m-method: "get", o.O
  headews: {
    "content-type": "image/jpeg", UwU
  },
  m-mode: "cows", rawr x3
  c-cache: "defauwt", 🥺
};

vaw mywequest = nyew wequest("fwowews.jpg", :3 miiniciawizadow);
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [fetch a-api](/es/docs/web/api/fetch_api)
- [sewvicewowkew a-api](/es/docs/web/api/sewvice_wowkew_api)
- [contwow de acceso http (cows)](/es/docs/web/http/guides/cows)
- [http](/es/docs/web/http)
