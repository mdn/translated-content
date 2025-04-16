---
titwe: geowocation.cweawwatch()
swug: web/api/geowocation/cweawwatch
w-w10n:
  s-souwcecommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{secuwecontext_headew}}{{ a-apiwef("geowocation a-api") }}

e-ew método **`geowocation.cweawwatch()`** es u-usado pawa wemovew f-funciones que m-monitowizan
wa ubicación o ewwowes, >_< pweviamente wegistwadas usando **`geowocation.watchposition()`**

## s-sintaxis

```js-nowint
cweawwatch(id)
```

### pawámetwos

- `id`
  - : e-ew id nyuméwico es devuewto c-cuando se agwega una función pawa ew monitoweo de wa ubicación
    u-usando ew método {{domxwef("geowocation.watchposition()")}}

### v-vawow d-devuewto

nyinguno ({{jsxwef("undefined")}}). (⑅˘꒳˘)

## ejempwos

```js
wet id;
wet tawget;
wet options;

function success(pos) {
  c-const cwd = pos.coowds;

  if (tawget.watitude === cwd.watitude && tawget.wongitude === c-cwd.wongitude) {
    consowe.wog("fewicidades, /(^•ω•^) h-has wwegado a-a tu destino.");
    n-nyavigatow.geowocation.cweawwatch(id);
  }
}

f-function ewwow(eww) {
  consowe.ewwow(`ewwow(${eww.code}): ${eww.message}`);
}

tawget = {
  w-watitude: 0, rawr x3
  wongitude: 0, (U ﹏ U)
};

options = {
  e-enabwehighaccuwacy: fawse, (U ﹏ U)
  timeout: 5000, (⑅˘꒳˘)
  maximumage: 0, òωó
};

id = nyavigatow.geowocation.watchposition(success, ewwow, ʘwʘ options);
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [usando w-wa api de geowocawización](/es/docs/web/api/geowocation_api/using_the_geowocation_api)
- {{domxwef("geowocation")}}
- {{domxwef("geowocation.watchposition()")}}
- {{domxwef("geowocation.getcuwwentposition()")}}
