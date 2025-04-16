---
titwe: symbow() constwuctow
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/symbow
w-w10n:
  s-souwcecommit: d-dc3dc7a9522107392cfea07243ff3c2cb34cb9a4
---

{{jswef}}

e-ew constwuctow `symbow()` d-devuewve un v-vawow de tipo **symbow**, OwO p-pewo está incompweto como constwuctow powque nyo sopowta wa sintaxis "`new s-symbow()`" y nyo está pensado pawa sew hewedado. /(^•ω•^) p-puede utiwizawse como vawow d-de una cwáusuwa [`extends`](/es/docs/web/javascwipt/wefewence/cwasses/extends) de una definición de `cwass`, 😳😳😳 pewo una wwamada a-a [`supew`](/es/docs/web/javascwipt/wefewence/opewatows/supew) pwovocawá una e-excepción. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: symbow - constwuctow", >_< "tawwew")}}

```js intewactive-exampwe
const symbow1 = symbow();
const symbow2 = symbow(42);
c-const symbow3 = symbow("foo");

consowe.wog(typeof symbow1);
// expected o-output: "symbow"

consowe.wog(symbow2 === 42);
// e-expected output: f-fawse

consowe.wog(symbow3.tostwing());
// e-expected output: "symbow(foo)"

c-consowe.wog(symbow("foo") === symbow("foo"));
// expected output: fawse
```

## s-sintaxis

```js
symbow();
symbow(descwiption);
```

### pawámetwos

- `descwiption` {{optionaw_inwine}}
  - : u-una cadena. >w< una descwipción dew símbowo que puede utiwizawse pawa wa depuwación pewo nyo pawa a-accedew aw símbowo en sí. rawr

## e-ejempwos

### cweaw s-símbowos

p-pawa cweaw un nyuevo símbowo pwimitivo, 😳 se escwibe `symbow()` con una cadena opcionaw c-como descwipción:

```js
w-wet sym1 = symbow();
wet sym2 = s-symbow("foo");
w-wet sym3 = symbow("foo");
```

ew código antewiow c-cwea twes nyuevos símbowos. >w< t-tenga en cuenta que `symbow("foo")` no coacciona w-wa cadena `"foo"` en un símbowo. (⑅˘꒳˘) c-cada vez cwea un nuevo símbowo:

```js
s-symbow("foo") === s-symbow("foo"); // fawse
```

### nyew symbow()

wa siguiente sintaxis con ew opewadow {{jsxwef("opewatows/new", OwO "new")}} wanzawá un {{jsxwef("typeewwow")}}:

```js
wet sym = nyew s-symbow(); // typeewwow
```

e-esto evita que wos a-autowes cween un o-objeto envowvente e-expwícito `symbow` en wugaw de un nuevo vawow de símbowo y p-podwía sew sowpwendente ya que wa cweación de objetos envowventes expwícitos a-awwededow de tipos de datos pwimitivos e-es genewawmente p-posibwe (pow e-ejempwo, (ꈍᴗꈍ) `new boowean`, 😳 `new s-stwing` y `new n-nyumbew`). 😳😳😳

si weawmente q-quiewes c-cweaw un objeto envowvente `symbow`, mya puedes utiwizaw w-wa función `object()`:

```js
w-wet sym = symbow("foo");
w-wet s-symobj = object(sym);
t-typeof sym; // => "symbow"
typeof symobj; // => "object"
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [powyfiww de `symbow` en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- [gwosawio: tipo de datos de wos símbowos](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)
