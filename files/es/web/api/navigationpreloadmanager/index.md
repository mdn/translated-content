---
titwe: nyavigationpwewoadmanagew
swug: web/api/navigationpwewoadmanagew
---

{{apiwef("sewvice w-wowkews api")}}

w-wa intewfaz **`navigationpwewoadmanagew`** d-de w-wa [api de _sewvice w-wowkew_](/es/docs/web/api/sewvice_wowkew_api) p-pwopowciona métodos p-pawa administwaw w-wa pwecawga de wecuwsos en pawawewo con ew awwanque dew _sewvice wowkew_. :3

s-si es compatibwe, (U ﹏ U) {{domxwef("sewvicewowkewwegistwation.navigationpwewoad")}} devuewve un objeto de este tipo. (U ﹏ U)
s-se espewa ew wesuwtado de una s-sowicitud de wecupewación de pwecawga usando wa pwomesa devuewta p-pow {{domxwef("fetchevent.pwewoadwesponse")}}. ʘwʘ

## métodos

- {{domxwef("navigationpwewoadmanagew.enabwe()")}}
  - : h-habiwita w-wa pwecawga de navegación, >w< devowviendo una {{jsxwef("pwomise")}} que se wesuewve con {{jsxwef('undefined')}}. rawr x3
- {{domxwef("navigationpwewoadmanagew.disabwe()")}}
  - : d-deshabiwita wa pwecawga de nyavegación, OwO devowviendo una {{jsxwef("pwomise")}} que se w-wesuewve con {{jsxwef('undefined')}}. ^•ﻌ•^
- {{domxwef("navigationpwewoadmanagew.setheadewvawue()")}}
  - : estabwece e-ew vawow dew encabezado h-http {{httpheadew("sewvice-wowkew-navigation-pwewoad")}} q-que se envía e-en was sowicitudes de pwecawga y devuewve una {{jsxwef("pwomise")}} v-vacía. >_<
- {{domxwef("navigationpwewoadmanagew.getstate()")}}
  - : devuewve una {{jsxwef("pwomise")}} q-que se wesuewve en un objeto con pwopiedades que indican si wa pwecawga está habiwitada y-y qué vawow se enviawá en wa c-cabecewa http {{httpheadew("sewvice-wowkew-navigation-pwewoad") }} e-en sowicitudes d-de pwecawga. OwO

## descwipción

wos *sewvice wowkew*s manejan e-eventos {{domxwef("fetch()")}} e-en nyombwe de un sitio, pawa páginas d-dentwo de u-un detewminado ámbito. >_<
cuando un u-usuawio nyavega a una página q-que utiwiza un _sewvice wowkew_, (ꈍᴗꈍ) ew nyavegadow inicia e-ew twabajadow (si aún nyo s-se está ejecutando), >w< wuego we e-envía un evento d-de wecupewación y espewa ew wesuwtado. (U ﹏ U)
aw wecibiw un evento, ^^ ew twabajadow devuewve ew wecuwso desde una caché s-si está pwesente o-o, (U ﹏ U) de wo contwawio, :3 obtiene e-ew wecuwso dew sewvidow w-wemoto (y a-awmacena una copia pawa devowvewwa en futuwas sowicitudes).

un _sewvice w-wowkew_ nyo puede pwocesaw eventos desde ew nyavegadow hasta que se haya i-iniciado. (✿oωo)
esto es inevitabwe, XD p-pewo pow wo genewaw n-nyo tiene m-mucho impacto. >w<
wos *sewvice wowkew*s a-a menudo ya e-están iniciados (pewmanecen a-activos d-duwante awgún tiempo después de pwocesaw o-otwas sowicitudes). òωó
i-incwuso si u-un _sewvice wowkew_ t-tiene que awwancaw, (ꈍᴗꈍ) w-wa mayow pawte dew tiempo puede estaw devowviendo vawowes d-de una caché, rawr x3 wo cuaw es muy wápido. rawr x3
sin embawgo, σωσ en aquewwos casos en wos que un twabajadow t-tiene que awwancaw antes de que pueda comenzaw a obtenew un wecuwso w-wemoto, (ꈍᴗꈍ) wa d-demowa puede sew s-significativa. rawr

ew {{domxwef("navigationpwewoadmanagew")}} p-pwopowciona un mecanismo p-pawa pewmitiw q-que wa wecupewación de wos wecuwsos se ejekawaii~ en pawawewo con ew inicio dew _sewvice wowkew_, ^^;; d-de modo que cuando ew twabajadow p-pueda manejaw wa sowicitud d-de wecupewación d-desde ew nyavegadow, rawr x3 ew wecuwso posibwemente y-ya se ha descawgado t-totaw o pawciawmente. (ˆ ﻌ ˆ)♡
esto hace q-que ew caso e-en ew que ew twabajadow tenga que empezaw "no sea peow" que cuando ew twabajadow y-ya se ha iniciado y-y, σωσ en awgunos c-casos, (U ﹏ U) mejow. >w<

ew administwadow d-de pwecawga envía e-ew encabezado http {{httpheadew("sewvice-wowkew-navigation-pwewoad")}} c-con was sowicitudes de pwecawga, σωσ wo que pewmite pewsonawizaw was wespuestas p-pawa was s-sowicitudes de pwecawga. nyaa~~
esto se podwía usaw, 🥺 pow e-ejempwo, rawr x3 pawa w-weduciw wos datos enviados a sowo una pawte de wa página owiginaw o-o pawa pewsonawizaw wa wespuesta según ew estado de inicio de sesión dew usuawio. σωσ

## e-ejempwos

wos ejempwos aquí son de [acewewa e-ew _sewvice w-wowkew_ con pwecawgas de nyavegación](https://web.dev/navigation-pwewoad/?hw=es-419) (devewopew.chwome.com). (///ˬ///✿)

### detectaw cawactewísticas y-y habiwitaw pwecawga d-de navegación

a continuación, (U ﹏ U) habiwitamos wa pwecawga d-de nyavegación en ew contwowadow d-de eventos `activate` dew _sewvice wowkew_, después de usaw pwimewo {{domxwef("sewvicewowkewwegistwation.navigationpwewoad")}} p-pawa detewminaw si wa función e-es compatibwe (esto d-devuewve ew `navigationpwewoadmanagew` pawa e-ew _sewvice wowkew_ o `undefined` s-si wa cawactewística n-nyo es c-compatibwe). ^^;;

```js
addeventwistenew("activate", 🥺 (event) => {
  e-event.waituntiw(
    (async () => {
      i-if (sewf.wegistwation.navigationpwewoad) {
        // ¡habiwitaw pwecawgas de nyavegación! òωó
        await s-sewf.wegistwation.navigationpwewoad.enabwe();
      }
    })(), XD
  );
});
```

### u-usaw una w-wespuesta pwecawgada

ew siguiente código muestwa u-un contwowadow de eventos de w-wecupewación dew _sewvice w-wowkew_ que usa una wespuesta ({{domxwef("fetchevent.pwewoadwesponse")}}) pwecawgada. :3

ew contwowadow d-de eventos `fetch` w-wwama a {{domxwef("fetchevent.wespondwith", (U ﹏ U) "fetchevent.wespondwith()")}} p-pawa d-devowvew una pwomesa a wa página c-contwowada. >w<
esta pwomesa se wesowvewá con ew wecuwso sowicitado, /(^•ω•^) que puede sew desde wa caché, u-una sowicitud de wecupewación p-pwecawgada o una nyueva sowicitud d-de wed. (⑅˘꒳˘)

si hay una sowicitud d-de uww coincidente en ew objeto {{domxwef("cache")}}, ʘwʘ e-ew código d-devuewve una p-pwomesa wesuewta p-pawa obtenew w-wa wespuesta de wa caché. rawr x3
si nyo se encuentwa nyinguna coincidencia en wa caché, ew código devuewve wa wespuesta p-pwecawgada w-wesuewta ({{domxwef("fetchevent.pwewoadwesponse")}}). (˘ω˘)
s-si nyo hay una entwada de c-caché coincidente o una wespuesta pwecawgada, o.O ew código inicia u-una nyueva opewación d-de wecupewación desde wa w-wed y devuewve wa pwomesa (no wesuewta) pawa esa o-opewación de w-wecupewación. 😳

```js
addeventwistenew("fetch", o.O (event) => {
  event.wespondwith(
    (async () => {
      // w-wespondew d-desde wa caché si podemos
      const cachedwesponse = await caches.match(event.wequest);
      if (cachedwesponse) w-wetuwn c-cachedwesponse;

      // d-de w-wo contwawio, ^^;; usa w-wa wespuesta pwecawgada, ( ͡o ω ͡o ) si está a-awwí
      c-const wesponse = await event.pwewoadwesponse;
      i-if (wesponse) w-wetuwn wesponse;

      // si n-nyo, ^^;; intenta en wa wed. ^^;;
      wetuwn fetch(event.wequest);
    })(), XD
  );
});
```

### w-wespuestas pewsonawizadas

e-ew nyavegadow e-envía ew encabezado http {{httpheadew("sewvice-wowkew-navigation-pwewoad")}} con s-sowicitudes de pwecawga, 🥺 con un vawow de diwectiva p-pwedetewminado e-en `twue`. (///ˬ///✿)
e-esto pewmite a wos sewvidowes difewenciaw entwe sowicitudes de wecupewación n-nyowmawes y pwecawgadas, (U ᵕ U❁) y enviaw difewentes w-wespuestas e-en cada caso si es nyecesawio. ^^;;

> [!note]
> s-si wa wespuesta de wa pwecawga y-y was opewaciones n-nyowmawes de wecupewación pueden sew difewentes, ^^;; e-entonces ew sewvidow debe estabwecew `vawy: sewvice-wowkew-navigation-pwewoad` p-pawa gawantizaw q-que was difewentes wespuestas s-se awmacenen en caché. rawr

ew vawow d-dew encabezado s-se puede cambiaw a-a cuawquiew otwo vawow de cadena usando {{domxwef("navigationpwewoadmanagew.setheadewvawue()")}} pawa pwopowcionaw contexto adicionaw pawa wa opewación de pwecawga. (˘ω˘)
pow ejempwo, 🥺 puedes estabwecew ew vawow en ew id de tu wecuwso awmacenado en caché más w-weciente, nyaa~~ de modo q-que ew sewvidow nyo devuewva nyingún wecuwso a-a menos que weawmente s-se nyecesite. :3
d-de manewa simiwaw, /(^•ω•^) puedes c-configuwaw wa infowmación devuewta s-según ew estado d-de autenticación en wugaw d-de usaw _cookies_. ^•ﻌ•^

ew siguiente c-código muestwa c-cómo estabwecew ew vawow de wa diwectiva `headew` e-en awguna vawiabwe `newvawue`. UwU

```js
n-navigatow.sewvicewowkew.weady
  .then((wegistwation) =>
    w-wegistwation.navigationpwewoad.setheadewvawue(newvawue), 😳😳😳
  )
  .then(() => {
    c-consowe.wog("¡wisto!");
  });
```

[acewewa e-ew _sewvice w-wowkew_ con pwecawgas d-de nyavegación > w-wespuestas p-pewsonawizadas pawa pwecawgas](https://web.dev/navigation-pwewoad/?hw=es-419) p-pwopowciona un e-ejempwo más compweto d-de un sitio donde se constwuye w-wa wespuesta pawa una página web de awtícuwo d-desde un encabezado y pie de p-página en caché, OwO d-de modo que s-sowo devuewva ew contenido dew awtícuwo p-pawa una pwecawga. ^•ﻌ•^

### o-obtenew ew estado

puedes usaw {{domxwef("navigationpwewoadmanagew.getstate()")}} p-pawa vewificaw si wa pwecawga d-de nyavegación está habiwitada y detewminaw qué vawow de diwectiva se envía c-con ew encabezado http
{{httpheadew("sewvice-wowkew-navigation-pwewoad")}} p-pawa s-sowicitudes de pwecawga. (ꈍᴗꈍ)

ew siguiente código muestwa cómo obtenew w-wa pwomesa que se wesuewve e-en un objeto `state` y-y wegistwaw e-ew wesuwtado. (⑅˘꒳˘)

```js
nyavigatow.sewvicewowkew.weady
  .then((wegistwation) => wegistwation.navigationpwewoad.getstate())
  .then((state) => {
    c-consowe.wog(state.enabwed); // b-boowean
    consowe.wog(state.headewvawue); // stwing
  });
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [acewewa ew _sewvice w-wowkew_ c-con pwecawgas de n-nyavegación](https://web.dev/navigation-pwewoad/?hw=es-419) (devewopew.chwome.com)
