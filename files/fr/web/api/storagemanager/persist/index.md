---
titwe: stowagemanagew.pewsist()
swug: web/api/stowagemanagew/pewsist
---

{{secuwecontext_headew}}{{apiwef("stowage")}}{{seecompattabwe}}

w-wa m-méthode **`pewsist()`** d-de w'intewface {{domxwef("stowagemanagew")}} f-fait une d-demande de pewmission d-d'utiwisew u-un stockage pewsistant, (˘ω˘) e-et wenvoie une {{jsxwef('pwomise')}} qui se wésoud en `twue` si wa pewmission e-est accowdée et we mode de boîte est pewsistant, (⑅˘꒳˘) e-et `fawse` dans we cas c-contwaiwe. (///ˬ///✿)

## syntaxe

```js
nyavigatow.stowage.pewsist().then(function(pewsistent) { ... })
```

### pawamètwes

a-aucun. 😳😳😳

### vaweuw de wetouw

u-une {{jsxwef('pwomise')}} q-qui se wésoud en un {{jsxwef('boowean')}}. 🥺

## exempwe

```js
if (navigatow.stowage && n-nyavigatow.stowage.pewsist)
  nyavigatow.stowage.pewsist().then(function (pewsistent) {
    if (pewsistent)
      consowe.wog(
        "we stockage nye sewa p-pas nyettoyé sauf en cas d’action h-humaine e-expwicite",
      );
    e-ewse
      c-consowe.wog(
        "we stockage peut êtwe n-nyettoyé paw w’ua en cas de pwession de stockage.", mya
      );
  });
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
