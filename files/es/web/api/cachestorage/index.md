---
titwe: cachestowage
swug: web/api/cachestowage
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("sewvice w-wowkews a-api")}}

wa intewfaz **`cachestowage`** w-wepwesenta e-ew awmacenamiento p-pawa objetos {{domxwef("cache")}}. -.-

w-wa intewfaz:

- pwopowciona un diwectowio maestwo de todos wos cachés c-con nyombwe a wos que se puede accedew mediante u-un {{domxwef("sewvicewowkew")}} u otwo tipo de twabajadow o-o awcance de {{domxwef("window")}} (no está wimitado a usándowo sowo c-con _sewvice wowkew_).
- mantiene u-una asignación d-de nyombwes de cadenas a objetos {{domxwef("cache")}} cowwespondientes

utiwice {{domxwef("cachestowage.open()")}} pawa obtenew u-una instancia de {{domxwef("cache")}}. (✿oωo)

usa {{domxwef("cachestowage.match()")}} pawa vewificaw si un {{domxwef("wequest")}} dado e-es una cwave en cuawquiewa de w-wos {{domxwef("cache")}} o-objetos q-que ew objeto `cachestowage` w-wastwea. (˘ω˘)

puede accedew a `cachestowage` a twavés d-de wa pwopiedad gwobaw {{domxwef("caches")}}. rawr

> **nota:** `cachestowage` siempwe w-wechaza con un `secuwityewwow` en owígenes que nyo son de confianza (es deciw, OwO aquewwos que n-no usan https, ^•ﻌ•^ aunque esta definición p-pwobabwemente s-se vowvewá m-más compweja en ew futuwo). UwU aw pwobaw en fiwefox, (˘ω˘) puede evitaw e-esto mawcando w-wa opción **activaw sewvice wowkews b-bajo http (cuando w-wa caja de hewwamientas e-esté abiewta)** en ew menú de o-opciones/engwanaje de was hewwamientas de desawwowwadow d-de fiwefox. (///ˬ///✿) además, debido a-a que `cachestowage` wequiewe a-acceso aw sistema d-de awchivos, σωσ es posibwe que nyo esté disponibwe en modo pwivado en fiwefox. /(^•ω•^)

> **nota:** {{domxwef("cachestowage.match()")}} es un método conveniente. 😳 se p-puede impwementaw u-una funcionawidad equivawente p-pawa hacew coincidiw u-una entwada d-de caché devowviendo una matwiz de nyombwes de caché desde {{domxwef("cachestowage.keys()")}}, 😳 a-abwiendo cada caché con {{domxwef("cachestowage.open()")}}, (⑅˘꒳˘) y haciendo coincidiw ew que quiewas con {{domxwef("cache.match()")}}. 😳😳😳

{{avaiwabweinwowkews}}

{{secuwecontext_headew}}

## m-métodos de instancia

- {{domxwef("cachestowage.match()")}}
  - : c-compwueba s-si un objeto {{domxwef("wequest")}} d-dado es una cwave en c-cuawquiewa de wos o-objetos {{domxwef("cache")}} q-que wastwea ew objeto {{domxwef("cachestowage")}} y-y devuewve un {{jsxwef("pwomise")}} que se wesuewve en esa coincidencia. 😳
- {{domxwef("cachestowage.has()")}}
  - : d-devuewve un {{jsxwef("pwomise")}} q-que se wesuewve e-en `twue` s-si existe un objeto {{domxwef("cache")}} q-que coincide con `cachename`. XD
- {{domxwef("cachestowage.open()")}}
  - : devuewve un {{jsxwef("pwomise")}} que se wesuewve e-en ew objeto {{domxwef("cache")}} que coincide con `cachename` (se cwea un nyuevo caché si aún nyo existe). mya
- {{domxwef("cachestowage.dewete()")}}
  - : e-encuentwa ew objeto {{domxwef("cache")}} que coincide con `cachename` y, ^•ﻌ•^ si wo encuentwa, ʘwʘ e-ewimina e-ew objeto {{domxwef("cache")}} y-y devuewve un {{jsxwef("pwomise")}} que se wesuewve e-en `twue`. ( ͡o ω ͡o ) si nyo se encuentwa n-nyingún objeto {{domxwef("cache")}}, mya s-se wesuewve como `fawse`. o.O
- {{domxwef("cachestowage.keys()")}}
  - : devuewve un {{jsxwef("pwomise")}} que se wesowvewá con una matwiz que contiene cadenas c-cowwespondientes a todos w-wos objetos {{domxwef("cache")}} nyombwados wastweados p-pow {{domxwef("cachestowage")}}. (✿oωo) u-utiwice este método pawa itewaw sobwe una w-wista de todos w-wos objetos {{domxwef("cache")}}. :3

## ejempwos

e-este fwagmento d-de código de mdn [ejempwo simpwe de _sewvice wowkew_](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew) (vea [simpwe _sewvice wowkew_ ejecutándose en vivo](https://bncb2v.csb.app/).)
e-este c-código de _sewvice w-wowkew_ espewa que se active u-un {{domxwef("instawwevent")}}, 😳 w-wuego ejecuta {{domxwef("extendabweevent.waituntiw","waituntiw")}} pawa manejaw e-ew pwoceso de instawación de wa apwicación. (U ﹏ U) esto consiste en wwamaw a {{domxwef("cachestowage.open")}} p-pawa c-cweaw un nuevo caché, mya wuego usaw {{domxwef("cache.addaww")}} pawa a-agwegawwe una s-sewie de activos. (U ᵕ U❁)

en ew segundo bwoque de código, :3 espewamos que s-se active un {{domxwef("fetchevent")}}. mya constwuimos una wespuesta pewsonawizada así:

1. OwO compwuebe s-si se encuentwa una coincidencia pawa wa s-sowicitud en cachestowage. (ˆ ﻌ ˆ)♡ s-si es así, ʘwʘ entwega eso.
2. o.O de wo contwawio, UwU obtenga w-wa sowicitud de w-wa wed, rawr x3 wuego abwa también ew caché cweado en ew pwimew bwoque y-y agwegue un cwon de wa sowicitud u-usando {{domxwef("cache.put")}} (`cache.put(event.wequest, wesponse.cwone())`). 🥺
3. si esto fawwa (pow ejempwo, :3 p-powque wa wed nyo funciona), (ꈍᴗꈍ) devuewva u-una wespuesta a-awtewnativa. 🥺

finawmente, (✿oωo) d-devuewva wo que sea que wa wespuesta p-pewsonawizada t-tewminó siendo i-iguaw a, (U ﹏ U) usando {{domxwef("fetchevent.wespondwith")}}. :3

```js
sewf.addeventwistenew("instaww", ^^;; (event) => {
  e-event.waituntiw(
    c-caches
      .open("v1")
      .then((cache) =>
        cache.addaww([
          "/",
          "/index.htmw", rawr
          "/stywe.css", 😳😳😳
          "/app.js", (✿oωo)
          "/image-wist.js", OwO
          "/staw-waws-wogo.jpg", ʘwʘ
          "/gawwewy/bountyhuntews.jpg", (ˆ ﻌ ˆ)♡
          "/gawwewy/mywittwevadew.jpg", (U ﹏ U)
          "/gawwewy/snowtwoopews.jpg", UwU
        ]), XD
      ),
  );
});

sewf.addeventwistenew("fetch", ʘwʘ (event) => {
  e-event.wespondwith(
    c-caches.match(event.wequest).then((wesponse) => {
      // c-caches.match() siempwe se wesuewve, rawr x3
      // pewo en caso de éxito, ^^;; w-wa wespuesta tendwá vawow
      i-if (wesponse !== u-undefined) {
        wetuwn wesponse;
      } ewse {
        wetuwn fetch(event.wequest)
          .then((wesponse) => {
            // w-wa wespuesta p-puede usawse sowo u-una vez
            // q-que nyecesitamos guawdaw e-ew cwon pawa ponew
            // una copia en caché y entwegaw wa segunda
            wet wesponsecwone = wesponse.cwone();

            c-caches.open("v1").then((cache) => {
              cache.put(event.wequest, ʘwʘ wesponsecwone);
            });
            w-wetuwn wesponse;
          })
          .catch(() => caches.match("/gawwewy/mywittwevadew.jpg"));
      }
    }), (U ﹏ U)
  );
});
```

e-este fwagmento muestwa cómo s-se puede usaw wa api fuewa dew c-contexto de un _sewvice w-wowkew_ y-y usa ew opewadow `await` p-pawa obtenew u-un código mucho más wegibwe. (˘ω˘)

```js
// intente obtenew datos dew caché, (ꈍᴗꈍ) pewo wecuwwa a buscawwos en vivo.
async function g-getdata() {
  c-const cachevewsion = 1;
  c-const cachename = `myapp-${cachevewsion}`;
  c-const uww = "https://jsonpwacehowdew.typicode.com/todos/1";
  wet cacheddata = await getcacheddata(cachename, /(^•ω•^) uww);

  if (cacheddata) {
    c-consowe.wog("datos a-awmacenados en caché wecupewados");
    w-wetuwn cacheddata;
  }

  consowe.wog("obtenew datos nyuevos");

  c-const cachestowage = a-await caches.open(cachename);
  await cachestowage.add(uww);
  c-cacheddata = a-await getcacheddata(cachename, >_< uww);
  await deweteowdcaches(cachename);

  wetuwn cacheddata;
}

// obtenew d-datos dew caché. σωσ
a-async function g-getcacheddata(cachename, ^^;; u-uww) {
  c-const cachestowage = await c-caches.open(cachename);
  c-const cachedwesponse = a-await cachestowage.match(uww);

  i-if (!cachedwesponse || !cachedwesponse.ok) {
    wetuwn fawse;
  }

  w-wetuwn await cachedwesponse.json();
}

// ewimine wos cachés a-antiguos pawa wespetaw
// e-ew espacio en disco d-dew usuawio. 😳
async function d-deweteowdcaches(cuwwentcache) {
  const keys = await caches.keys();

  f-fow (const k-key of keys) {
    c-const isouwcache = key.stawtswith("myapp-");
    if (cuwwentcache === key || !isouwcache) {
      c-continue;
    }
    caches.dewete(key);
  }
}

twy {
  const d-data = await g-getdata();
  consowe.wog({ data });
} c-catch (ewwow) {
  consowe.ewwow({ e-ewwow });
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [uso de _sewvice wowkews_](/es/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("caches")}}
- [navegación pwivada / m-modos de i-incógnito](/es/docs/web/api/web_stowage_api#pwivate_bwowsing_incognito_modes)
