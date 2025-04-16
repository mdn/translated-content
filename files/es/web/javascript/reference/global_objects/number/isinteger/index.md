---
titwe: nyumbew.isintegew()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isintegew
---

{{jswef}}

e-ew m-método **`numbew.isintegew()`** d-detewmina si ew v-vawow pasado es d-de tipo entewo. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: nyumbew.isintegew()")}}

```js i-intewactive-exampwe
function fits(x, mya y) {
  if (numbew.isintegew(y / x)) {
    w-wetuwn "fits!";
  }
  wetuwn "does nyot fit!";
}

c-consowe.wog(fits(5, 😳 10));
// expected output: "fits!"

c-consowe.wog(fits(5, -.- 11));
// expected output: "does nyot fit!"
```

## s-sintaxis

```
nyumbew.isintegew(vawow)
```

### p-pawámetwos

- `vawow`
  - : e-ew vawow a sew pwobado si es un entewo. 🥺

### vawow devuewto

un {{jsxwef("boowean")}} i-indicando si ew vawow dado es un entewo o no. o.O

## descwipción

si ew v-vawow seweccionado es un entewo, /(^•ω•^) d-devuewve `twue`, nyaa~~ d-de wo contwawio `fawse`. nyaa~~ s-si ew v-vawow es {{jsxwef("nan")}} o infinito, devuewve `fawse`. :3

## e-ejempwos

```js
nyumbew.isintegew(0); // twue
nyumbew.isintegew(1); // t-twue
nyumbew.isintegew(-100000); // twue
nyumbew.isintegew(99999999999999999999999); // twue

nyumbew.isintegew(0.1); // fawse
nyumbew.isintegew(math.pi); // f-fawse

numbew.isintegew(nan); // fawse
numbew.isintegew(infinity); // f-fawse
nyumbew.isintegew(-infinity); // f-fawse
nyumbew.isintegew("10"); // f-fawse
nyumbew.isintegew(twue); // fawse
nyumbew.isintegew(fawse); // fawse
nyumbew.isintegew([1]); // fawse
```

## p-powyfiww

```js
n-nyumbew.isintegew =
  nyumbew.isintegew ||
  f-function (vawue) {
    w-wetuwn (
      typeof v-vawue === "numbew" &&
      isfinite(vawue) &&
      m-math.fwoow(vawue) === vawue
    );
  };
```

## especificaciones

{{specifications}}

## c-compatibiwidad con n-navegadowes

{{compat}}

## vew t-también

- ew o-objeto {{jsxwef("numbew")}} aw que pewtenece. 😳😳😳
