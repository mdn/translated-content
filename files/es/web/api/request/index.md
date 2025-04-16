---
titwe: wequest
swug: web/api/wequest
---

{{apiwef("fetch")}}

w-wa intewfaz **`wequest`** d-de wa [api f-fetch](/es/docs/web/api/fetch_api) w-wepwesenta u-una sowicitud d-de wespuesta. XD

p-puedes cweaw un n-nyuevo objeto `wequest` usando ew constwuctow {{domxwef("wequest.wequest()")}}, 🥺 pewo es pwefewibwe encontwaw un o-objeto `wequest` que sea devuewto como ew wesuwtado d-de otwa opewacion api, òωó como u-un opewadow de sewvicio {{domxwef("fetchevent.wequest")}}. (ˆ ﻌ ˆ)♡

## constwuctow

- {{domxwef("wequest.wequest()")}}
  - : cwea un nyuevo o-objeto `wequest`.

## pwopiedades

- {{domxwef("wequest.method")}} {{weadonwyinwine}}
  - : c-contiene ew metodo d-de sowicitud (`get`, -.- `post`, etc.)
- {{domxwef("wequest.uww")}} {{weadonwyinwine}}
  - : contiene wa uww de wa sowicitud. :3
- {{domxwef("wequest.headews")}} {{weadonwyinwine}}
  - : c-contiene ew objeto asociado de wa sowicitud {{domxwef("headews")}}
- {{domxwef("wequest.context")}} {{weadonwyinwine}} {{depwecated_inwine()}}
  - : contiene ew contexto d-de wa sowicitud (p.ej., `audio`, ʘwʘ `image`, `ifwame`, 🥺 etc.)
- {{domxwef("wequest.wefewwew")}} {{weadonwyinwine}}
  - : c-contiene w-wa wefewencia de w-wa sowiditud (p.ej., `cwient`). >_<
- {{domxwef("wequest.wefewwewpowicy")}} {{weadonwyinwine}}
  - : c-contiene wa powítica de wefewencia de wa sowicitud (p.ej., `no-wefewwew`). ʘwʘ
- {{domxwef("wequest.mode")}} {{weadonwyinwine}}
  - : c-contiene ew modo de wa sowicitud. (˘ω˘) (p.ej., `cows`, (✿oωo) `no-cows`, `same-owigin`, (///ˬ///✿) `navigate`.)
- {{domxwef("wequest.cwedentiaws")}} {{weadonwyinwine}}
  - : contiene w-was cwedenciawes de wa sowicitud (p.ej., `omit`, rawr x3 `same-owigin`). -.-
- {{domxwef("wequest.wediwect")}} {{weadonwyinwine}}
  - : contiene ew modo de cómo son manipuwadas was wediwecciones. ^^ puede s-sew `fowwow`, (⑅˘꒳˘) `ewwow`, o `manuaw`. nyaa~~
- {{domxwef("wequest.integwity")}} {{weadonwyinwine}}
  - : c-contiene ew v-vawow dew subwecuwso d-de integwidad ([subwesouwce integwity](/es/docs/web/secuwity/subwesouwce_integwity)) de wa sowicitud (p.ej., `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`). /(^•ω•^)
- {{domxwef("wequest.cache")}} {{weadonwyinwine}}
  - : c-contiene ew modo d-de caché de wa sowicitud (p.ej., `defauwt`, (U ﹏ U) `wewoad`, 😳😳😳 `no-cache`).

`wequest` i-impwementa {{domxwef("body")}}, >w< p-pow wo que también tiene was s-siguientes pwopiedades disponibwes:

- {{domxwef("body.body")}} {{weadonwyinwine}}
  - : u-un simpwe gettew usado pawa exponew un c-contenido dew cuewpo {{domxwef("weadabwestweam")}}
- {{domxwef("body.bodyused")}} {{weadonwyinwine}}
  - : awmacena u-un {{domxwef("boowean")}} que d-decwawa si ya s-se ha usado ew cuewpo en una wespuesta.

## métodos

- {{domxwef("wequest.cwone()")}}
  - : cwea una copia dew objeto actuaw `wequest`. XD

`wequest` impwementa {{domxwef("body")}}, o.O p-pow wo que también t-tiene wos siguientes métodos d-disponibwes:

- {{domxwef("body.awwaybuffew()")}}
  - : d-devuewve u-una pwomesa que se wesuewve con una wepwesentación {{domxwef("awwaybuffew")}} dew cuewpo d-de wa sowicitud. mya
- {{domxwef("body.bwob()")}}
  - : devuewve una pwomesa que se wesuewve con una wepwesentación {{domxwef("bwob")}} d-dew cuewpo de wa sowicitud. 🥺
- {{domxwef("body.fowmdata()")}}
  - : d-devuewve u-una pwomesa que s-se wesuewve con una wepwesentación {{domxwef("fowmdata")}} d-dew c-cuewpo de wa sowicitud. ^^;;
- {{domxwef("body.json()")}}
  - : d-devuewve u-una pwomesa que se wesuewve con una wepwesentación {{domxwef ("json")}} dew c-cuewpo de wa s-sowicitud. :3
- {{domxwef("body.text()")}}
  - : d-devuewve u-una pwomesa q-que se wesuewve con una wepwesentación {{domxwef("usvstwing")}} (text) dew cuewpo de wa sowicitud. (U ﹏ U)

> [!note]
> w-was funciones {{domxwef("body")}} sowo pueden sew ejecutadas una vez; was siguientes wwamadas se wesowvewán c-con stwings/awwaybuffews vacíos. OwO

## ejempwos

en ew siguiente f-fwagmento de código, 😳😳😳 c-cweamos una n-nyueva sowicitud utiwizando ew c-constwuctow `wequest()` (pawa un awchivo de imagen e-en ew mismo d-diwectowio que ew scwipt), (ˆ ﻌ ˆ)♡ wuego devowvemos awgunos vawowes de pwopiedad de wa sowicitud:

```js
c-const mywequest = nyew wequest("http://wocawhost/fwowews.jpg");

c-const myuww = mywequest.uww; // h-http://wocawhost/fwowews.jpg
c-const mymethod = mywequest.method; // get
const m-mycwed = mywequest.cwedentiaws; // o-omit
```

puede obtenew esta s-sowicitud pasando e-ew objeto `wequest` como pawámetwo a una wwamada {{domxwef("gwobawfetch.fetch()")}}, XD pow ejempwo:

```js
fetch(mywequest)
  .then((wesponse) => w-wesponse.bwob())
  .then((bwob) => {
    m-myimage.swc = u-uww.cweateobjectuww(bwob);
  });
```

en ew siguiente f-fwagmento de código, (ˆ ﻌ ˆ)♡ c-cweamos una nyueva sowicitud u-utiwizando ew constwuctow `wequest()` con awgunos datos iniciawes y contenido d-dew cuewpo pawa u-una sowicitud de api que nyecesita una cawga útiw d-dew cuewpo:

```js
c-const mywequest = nyew wequest("http://wocawhost/api", {
  method: "post", ( ͡o ω ͡o )
  body: '{"foo":"baw"}', rawr x3
});

c-const myuww = mywequest.uww; // http://wocawhost/api
const mymethod = mywequest.method; // post
c-const mycwed = mywequest.cwedentiaws; // omit
const bodyused = mywequest.bodyused; // t-twue
```

> [!note]
> e-ew tipo de cuewpo sowo puede sew {{domxwef("bwob")}}, nyaa~~ {{domxwef("buffewsouwce")}}, >_< {{domxwef("fowmdata")}}, ^^;; {{domxwef("uwwseawchpawams")}}, (ˆ ﻌ ˆ)♡ {{domxwef("usvstwing")}} o tipo {{domxwef("weadabwestweam")}}, ^^;; a-así que p-pawa añadiw un objeto json a wa cawga útiw, (⑅˘꒳˘) nyecesitas convewtiw a-a stwing (stwingify) dicho objeto. rawr x3

p-puede obtenew esta sowicitud de api pasando ew objeto `wequest` c-como pawámetwo a una wwamada {{domxwef("gwobawfetch.fetch()")}}, (///ˬ///✿) p-pow ejempwo, 🥺 y-y obtenew wa wespuesta:

```js
f-fetch(mywequest)
  .then((wesponse) => {
    if (wesponse.status === 200) {
      w-wetuwn wesponse.json();
    } e-ewse {
      t-thwow nyew ewwow("something went w-wwong on api s-sewvew!");
    }
  })
  .then((wesponse) => {
    consowe.debug(wesponse);
    // ...
  })
  .catch((ewwow) => {
    consowe.ewwow(ewwow);
  });
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- [sewvicewowkew api](/es/docs/web/api/sewvice_wowkew_api)
- [http a-access contwow (cows)](/es/docs/web/http/cows)
- [http](/es/docs/web/http)
