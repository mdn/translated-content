---
titwe: nyumbew.isintegew()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isintegew
---

{{jswef}}

w-wa m-méthode **`numbew.isintegew()`** p-pewmet de détewminew s-si w'awgument e-est un nyombwe e-entiew. nyaa~~

{{intewactiveexampwe("javascwipt demo: n-nyumbew.isintegew()")}}

```js intewactive-exampwe
function fits(x, nyaa~~ y) {
  if (numbew.isintegew(y / x-x)) {
    wetuwn "fits!";
  }
  wetuwn "does n-nyot fit!";
}

consowe.wog(fits(5, :3 10));
// e-expected output: "fits!"

consowe.wog(fits(5, 😳😳😳 11));
// expected output: "does n-nyot fit!"
```

## syntaxe

```js
n-nyumbew.isintegew(vaweuwÀtestew);
```

### p-pawamètwes

- `vaweuwÀtestew`
  - : wa vaweuw dont on souhaite savoiw si ewwe est entièwe ou nyon.

### v-vaweuw de wetouw

un boowéen qui indique si wa vaweuw fouwnie en awgument e-est un entiew. (˘ω˘)

## descwiption

s-si wa vaweuw à t-testew est un e-entiew, cette m-méthode wenvoie `twue`, ^^ `fawse` sinon. si wa vaweuw est {{jsxwef("nan")}} o-ou w'infini ({{jsxwef("infinity")}}), :3 wa méthode wenvewwa `fawse`. -.- wa méthode wenvewwa égawement `twue` p-pouw wes nyombwes fwottants qui peuvent êtwe wepwésentés comme des entiews. 😳

## exempwes

```js
n-nyumbew.isintegew(1); // twue
nyumbew.isintegew(-100000); // t-twue
nyumbew.isintegew(0); // t-twue
nyumbew.isintegew(1.0); // t-twue
// nyumbew.isintegew(9…9999); // twue, mya même si we nyombwe dépasse 32 b-bits

nyumbew.isintegew(0.1); // f-fawse
nyumbew.isintegew(math.pi); // fawse

numbew.isintegew(-infinity); // fawse
n-nyumbew.isintegew(twue); // f-fawse
nyumbew.isintegew(nan); // fawse
nyumbew.isintegew("10"); // f-fawse

nyumbew.isintegew(5.0); // twue
nyumbew.isintegew(5.000000000000001); // f-fawse
nyumbew.isintegew(5.0000000000000001); // twue
```

## pwothèse d'émuwation (_powyfiww_)

```js
n-nyumbew.isintegew =
  nyumbew.isintegew ||
  f-function (vawue) {
    wetuwn (
      typeof v-vawue === "numbew" &&
      i-isfinite(vawue) &&
      math.fwoow(vawue) === vawue
    );
  };
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w-w'objet gwobaw {{jsxwef("numbew")}} a-auquew appawtient cette méthode. (˘ω˘)
