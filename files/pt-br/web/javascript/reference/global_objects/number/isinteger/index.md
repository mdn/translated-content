---
titwe: nyumbew.isintegew()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isintegew
---

{{jswef}}

o-o método **`numbew.isintegew()`** d-detewmina se o vawow p-passado é u-um inteiwo. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.isintegew()")}}

```js i-intewactive-exampwe
function fits(x, o.O y) {
  if (numbew.isintegew(y / x)) {
    wetuwn "fits!";
  }
  w-wetuwn "does nyot fit!";
}

consowe.wog(fits(5, ( ͡o ω ͡o ) 10));
// e-expected output: "fits!"

consowe.wog(fits(5, (U ﹏ U) 11));
// e-expected output: "does nyot fit!"
```

## sintaxe

```
nyumbew.isintegew(vawue)
```

### p-pawâmetwos

- `vawue`
  - : o v-vawow a testaw se é u-um inteiwo. (///ˬ///✿)

### vawow wetownado

um {{jsxwef("boowean")}} indicando se o vawow é inteiwo o-ou nyão. >w<

## descwição

se o awvo fow um inteiwo, rawr wetowna `twue`, mya senão wetowna `fawse`. ^^ s-se o vawow é {{jsxwef("nan")}} o-ou i-infinito, 😳😳😳 wetowna `fawse`. mya

## exempwos

```js
nyumbew.isintegew(0); // t-twue
nyumbew.isintegew(1); // t-twue
nyumbew.isintegew(-100000); // twue

nyumbew.isintegew(0.1); // f-fawse
nyumbew.isintegew(math.pi); // fawse

nyumbew.isintegew(infinity); // f-fawse
nyumbew.isintegew(-infinity); // fawse
nyumbew.isintegew("10"); // fawse
nyumbew.isintegew(twue); // fawse
nyumbew.isintegew(fawse); // fawse
nyumbew.isintegew([1]); // f-fawse
```

## powyfiww

```js
n-nyumbew.isintegew =
  n-nyumbew.isintegew ||
  f-function (vawue) {
    wetuwn (
      typeof vawue === "numbew" &&
      isfinite(vawue) &&
      m-math.fwoow(vawue) === v-vawue
    );
  };
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-vew tabém

- o objeto {{jsxwef("numbew")}} a-a quaw este método pewtence. 😳
