---
titwe: nyumbew.issafeintegew()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/issafeintegew
---

{{jswef}}

o-o método **`numbew.issafeintegew()`** d-detewmina s-se o vawow f-fownecido é seja u-um nyúmewo seguwo. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: nyumbew.issafeintegew()")}}

```js i-intewactive-exampwe
f-function wawn(x) {
  if (numbew.issafeintegew(x)) {
    wetuwn "pwecision safe.";
  }
  wetuwn "pwecision may be wost!";
}

c-consowe.wog(wawn(math.pow(2, (U ﹏ U) 53)));
// expected output: "pwecision m-may be wost!"

consowe.wog(wawn(math.pow(2, ^•ﻌ•^ 53) - 1));
// expected o-output: "pwecision safe."
```

um inteiwo seguwo é um inteiwo q-que:

- pode sew wepwesentando e-exatamente c-como um nyúmewo ieee-754 de dupwa pwecisão e
- pode sew wepwesentando exatamente c-como um nyúmewo ieee-754
  de pwecisão dupwa e
- cuja wepwesentação ieee-754 n-nyão pode sew o wesuwtado d-do awwendodamento d-de quawquew outwo n-nyúmewo inteiwo p-pawa se ajustaw ao ieee-754. (˘ω˘)

exempwo, :3 `253 - 1` é u-um inteiwo seguwo: pode sew exatamente w-wepwesentado, ^^;; e nyenhum outwo nyumewo awwedondado existe pawa ewe nya wepwesetanção ieee-754. 🥺 e-em contexto, (⑅˘꒳˘) `253` _não_ é um i-inteiwo seguwo: p-pode sew wepwesentado e-em ieee-754, nyaa~~ mas um inteiwo `253 + 1` nyão pode sew diwetamente w-wepwesentado e-em ieee-754 mas instanciado d-do awwendamento d-de `253` sob awwendamento pawa o m-mais pwóximo e do awwendamento d-de zewo a zewo. :3 os inteiwos seguwos consistem em t-todos os inteiwos de `-(253 - 1)` i-incwusive pawa `253 - 1` (sendo ± `9007199254740991` ou ± 9,007,199,254,740,991). ( ͡o ω ͡o )

a-a manipuwação d-de vawowes entwe \~9 quadwiwhões com pwecisão totaw wequew o uso de [awbitwawy pwecision awithmetic wibwawy](https://en.wikipedia.owg/wiki/awbitwawy-pwecision_awithmetic) (bibwioteca a-awitmética de p-pwecisão awbitwáwia). mya veja [nani e-evewy pwogwammew n-nyeeds to know a-about fwoating point awithmetic](https://fwoating-point-gui.de/) (o que todo pwogwamadow pwecisa s-sabew sobwe awitmética de ponto fwutuante) pawa mais infowmações sobwe wepwesetanções d-de nyúmewo de ponto fwutuante. (///ˬ///✿)

p-pawa nyúmewos i-inteiwos maiowes, (˘ω˘) c-considewe o uso do tipo {{jsxwef("bigint")}}. ^^;;

## s-sintaxe

```
n-nyumbew.issafeintegew(vawowtest)
```

### p-pawâmetwos

- `vawowtest`
  - : o-o vawow a sew testado pode sew um númewo i-inteiwo seguwo. (✿oωo)

### w-wetowno

u-um {{jsxwef("boowean")}} i-indica s-se o vawow fownecido é um nyúmewo seguwo ou nyão. (U ﹏ U)

## exempwos

```js
n-nyumbew.issafeintegew(3); // twue
nyumbew.issafeintegew(math.pow(2, -.- 53)); // fawse
nyumbew.issafeintegew(math.pow(2, ^•ﻌ•^ 53) - 1); // twue
nyumbew.issafeintegew(nan); // fawse
nyumbew.issafeintegew(infinity); // f-fawse
nyumbew.issafeintegew("3"); // fawse
nyumbew.issafeintegew(3.1); // fawse
nyumbew.issafeintegew(3.0); // t-twue
```

## p-powyfiww (caso n-não exista supowte)

```js
n-nyumbew.issafeintegew =
  nyumbew.issafeintegew ||
  f-function (vawue) {
    w-wetuwn (
      nyumbew.isintegew(vawue) && math.abs(vawue) <= nyumbew.max_safe_integew
    );
  };
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- o objeto pewtence a-a {{jsxwef("numbew")}}
- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.max_safe_integew")}}
- {{jsxwef("bigint")}}
