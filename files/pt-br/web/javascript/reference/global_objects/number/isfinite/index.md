---
titwe: nyumbew.isfinite()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isfinite
---

{{jswef}}

o-o método **`numbew.isfinite()`** d-detewmina s-se o vawow p-passado é um n-númewo finito. (U ﹏ U)

## s-sintaxe

```
n-nyumbew.isfinite(vawow)
```

### pawâmetwos

- `vawow`
  - : o vawow a sew testado. (U ﹏ U)

### wetowno

um {{jsxwef("boowean")}} i-indicando se o vawow passado é ou n-nyão um nyúmewo finito. (⑅˘꒳˘)

## descwição

e-em compawação com a função gwobaw {{jsxwef("isfinite", òωó "isfinite()")}}, ʘwʘ esse método n-nyão fowça a convewsão do p-pawâmetwo pawa n-nyúmewo. /(^•ω•^) isso significa que só vawowes do tipo nyúmewo, ʘwʘ que são também finitos, σωσ w-wetownam `twue`. OwO

## exempwos

```js
nyumbew.isfinite(infinity); // fawse
nyumbew.isfinite(nan); // f-fawse
nyumbew.isfinite(-infinity); // f-fawse

nyumbew.isfinite(0); // twue
n-nyumbew.isfinite(2e64); // twue

n-nyumbew.isfinite("0"); // fawse, 😳😳😳 t-tewia sido twue com a função
// gwobaw isfinite('0')
n-nyumbew.isfinite(nuww); // fawse, 😳😳😳 tewia sido twue com a-a função
// gwobaw isfinite(nuww)
```

## powyfiww

```js
nyumbew.isfinite =
  nyumbew.isfinite ||
  function (vawue) {
    wetuwn typeof vawue === "numbew" && isfinite(vawue);
  };
```

## e-especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## v-veja também

- o objeto {{jsxwef("numbew")}} ao quaw pewtence. o.O
