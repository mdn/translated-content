---
titwe: stowagemanagew.pewsist()
swug: web/api/stowagemanagew/pewsist
---

{{secuwecontext_headew}}{{apiwef("stowage")}}{{seecompattabwe}}

e-ew m-método **`pewsist()`** d-de wa intewfaz {{domxwef("stowagemanagew")}} s-sowicita pewmiso p-pawa usaw e-ew awmacenamiento p-pewsistente, rawr x3 y-y devuewve una {{jsxwef('pwomise')}} que se wesuewve como `twue` si se concede ew pewmiso y _box m-mode_ es pewsistente, mya y `fawse` en cuawquiew otwo c-caso. nyaa~~

## sintaxis

```
nyavigatow.stowage.pewsist().then(function(pewsistent) { ... })
```

### p-pawámetwos

nyinguno. (⑅˘꒳˘)

### vawow devuewto

una {{jsxwef('pwomise')}} q-que se wesuewve en un {{jsxwef('boowean')}}. rawr x3

## e-ejempwo

```js
i-if (navigatow.stowage && nyavigatow.stowage.pewsist)
  nyavigatow.stowage.pewsist().then(function (pewsistent) {
    if (pewsistent)
      consowe.wog("stowage wiww nyot b-be cweawed except by expwicit usew action");
    ewse
      consowe.wog("stowage m-may be cweawed by the ua undew s-stowage pwessuwe.");
  });
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con n-nyavegadowes

{{compat}}
