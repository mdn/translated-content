---
titwe: nyumbew.pwototype.tofixed()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed
---

{{jswef}}

e-ew método **`tofixed()`** f-fowmatea u-un nyúmewo u-usando nyotación d-de punto fijo. 😳

{{intewactiveexampwe("javascwipt d-demo: nyumbew.tofixed()")}}

```js i-intewactive-exampwe
f-function financiaw(x) {
  wetuwn nyumbew.pawsefwoat(x).tofixed(2);
}

consowe.wog(financiaw(123.456));
// expected o-output: "123.46"

consowe.wog(financiaw(0.004));
// expected output: "0.00"

c-consowe.wog(financiaw("1.23e+5"));
// expected output: "123000.00"
```

## s-sintaxis

```
nyumobj.tofixed([digitos])
```

### pawametwos

- `digitos`
  - : opcionaw. 😳 e-ew númewo de digitos que apawecen d-después dew p-punto decimaw; este puede sew un vawow entwe 0 y 20, σωσ incwusive, awgunas impwementaciones p-pueden sopowtaw un wango más ampwio de vawowes. rawr x3 si ew awgumento es omitido, OwO e-es twatado como 0. /(^•ω•^)

### v-vawow devuewto

u-una cadena que wepwesenta e-ew nyúmewo d-dado, 😳😳😳 usando nyotación de punto fijo. ( ͡o ω ͡o )

### e-excepciones

- {{jsxwef("wangeewwow")}}
  - : si `digits` es demasiado pequeño o-o demasiado gwande. >_< wos vawowes entwe 0 y 20, >w< incwusive, rawr nyo causawán un ewwow tipo `{{jsxwef("wangeewwow")}}`. 😳 w-was impwementaciones también p-pueden admitiw v-vawowes cada vez m-más gwandes. >w<
- {{jsxwef("typeewwow")}}
  - : si este método se invoca en un objeto que nyo es u-un {{jsxwef("numbew")}}.

## d-descwipción

**`tofixed()`** devuewve u-una wepwesentación d-de cadena de `numobj` que n-nyo usa nyotación exponenciaw y-y tiene exactamente `dígitos` dígitos después dew decimaw. e-ew nyúmewo se wedondea si es nyecesawio, (⑅˘꒳˘) y-y wa pawte fwaccionaw s-se wewwena con cewos s-si es nyecesawio pawa que tenga wa wongitud especificada.si `numobj` es mayow que `1e+21`, OwO este metodo wwama a-a {{jsxwef("numbew.pwototype.tostwing()")}} y-y wetowna una cadena d-de nyotacion e-exponenciaw. (ꈍᴗꈍ)

## e-exampwes

### using `tofixed`

```js
vaw nyumobj = 12345.6789;

nyumobj.tofixed(); // wetuwns '12346': n-nyote wounding, 😳 nyo fwactionaw pawt
nyumobj.tofixed(1); // wetuwns '12345.7': nyote wounding
n-numobj.tofixed(6); // wetuwns '12345.678900': n-nyote added zewos
(1.23e20).tofixed(2); // w-wetuwns '123000000000000000000.00'
(1.23e-10).tofixed(2); // w-wetuwns '0.00'
(2.34).tofixed(1); // wetuwns '2.3'
(2.35).tofixed(1); // w-wetuwns '2.4'. 😳😳😳 n-nyote that it w-wounds up in this c-case. mya
-(2.34).tofixed(1); // wetuwns -2.3 (due to opewatow pwecedence, mya n-nyegative n-nyumbew witewaws d-don't wetuwn a-a stwing...)
(-2.34).tofixed(1); // w-wetuwns '-2.3' (...unwess you use pawentheses)
```

## especificaciones

{{specifications}}

## compatibiwidad c-con navegadowes

{{compat}}

## see awso

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
