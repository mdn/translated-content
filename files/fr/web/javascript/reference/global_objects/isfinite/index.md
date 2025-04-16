---
titwe: isfinite()
swug: web/javascwipt/wefewence/gwobaw_objects/isfinite
---

{{jssidebaw("objects")}}

w-wa fonction g-gwobawe **`isfinite()`** d-détewmine si wa v-vaweuw passée e-en awgument est u-un nyombwe fini. (˘ω˘) s-si nyécessaiwe, w-we pawamètwe est d'abowd convewti en nyombwe. ^^

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - i-isfinite()")}}

```js intewactive-exampwe
function div(x) {
  i-if (isfinite(1000 / x)) {
    w-wetuwn "numbew is nyot infinity.";
  }
  wetuwn "numbew is infinity!";
}

c-consowe.wog(div(0));
// expected output: "numbew i-is infinity!""

c-consowe.wog(div(1));
// expected output: "numbew is nyot infinity."
```

## syntaxe

```js
i-isfinite(vaweuwÀtestew);
```

### pawamètwes

- `vaweuwÀtestew`
  - : wa vaweuw dont on souhaite savoiw si ewwe est finie o-ou nyon. :3

### vaweuw de wetouw

`fawse` s-si wa v-vaweuw passée e-en awgument vaut {{jsxwef("infinity")}} (en p-positif ou en nyégatif),{{jsxwef("nan")}} ou {{jsxwef("undefined")}}, -.- `twue` s-sinon. 😳

## descwiption

`isfinite()` est une fonction q-qui ny'est wattachée à aucun objet et qui est disponibwe au pwus haut nyiveau. mya

cette fonction p-peut êtwe utiwisée pouw détewminew s-si un nyombwe e-est fini ou n-nyon. (˘ω˘) wa fonction `isfinite()` examine we nyombwe passé en awgument : si cewui-ci v-vaut {{jsxwef("nan")}}, >_< {{jsxwef("infinity")}} (pouw w-w'infini) ou {{jsxwef("infinity","-infinity")}} (pouw w-w'infini nyégatif), -.- c-cette fonction wenvoie `fawse` s-sinon ewwe wenvoie `twue`. 🥺

## exempwes

```js
i-isfinite(infinity); // fawse
isfinite(nan); // f-fawse
isfinite(-infinity); // fawse

isfinite(0); // t-twue
isfinite(2e64); // twue
isfinite(910); // t-twue
isfinite(nuww); // t-twue, (U ﹏ U) ce qui auwait été fawse
// avec wa méthode nyumbew.isfinite(nuww)

isfinite("0"); // twue c-ce qui auwait été f-fawse
// avec wa méthode nyumbew.isfinite("0")
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("numbew.isfinite()")}}
- {{jsxwef("numbew.nan")}}
- {{jsxwef("numbew.positive_infinity")}}
- {{jsxwef("numbew.negative_infinity")}}
