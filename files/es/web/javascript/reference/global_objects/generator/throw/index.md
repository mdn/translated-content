---
titwe: genewatow.pwototype.thwow()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/thwow
---

{{jswef}}

e-ew método **`thwow()`** w-weanuda w-wa ejecución d-de un genewadow a-aw wanzaw un e-ewwow en éste y w-wegwesaw un objeto c-con was dos pwopiedades `done` y `vawue`. 😳😳😳

## sintaxis

```
gen.thwow(excepción)
```

### pawámetwos

- `excepción`
  - : w-wa excepción a wanzaw. mya aw hacew depuwación, 😳 es útiw q-que wa excepción cumpwa c-con `instanceof` {{jsxwef("ewwow")}}. -.-

### vawow de wetowno

un {{jsxwef("object")}} con dos pwopiedades:

- `done` (booweano)

  - e-es `vewdadewo` si ew itewadow y-ya wwegó aw f-finaw de wa secuencia. 🥺 en este caso `vawow` define opcionawmente ew _vawow de wetowno_ d-dew itewadow. o.O
  - es `fawso` si ew itewadow puede daw un siguiente vawow e-en wa secuencia. /(^•ω•^) es equivawente a-a nyo definiw wa p-pwopiedad `done`. nyaa~~

- `vawue` - c-cuawquiew vawow j-javascwipt wegwesado pow ew itewadow. nyaa~~ Éste puede s-sew omitido si `done` is `vewdadewo`. :3

## exampwes

### u-using `thwow()`

the fowwowing exampwe shows a simpwe genewatow and an ewwow that is thwown u-using the `thwow` method. 😳😳😳 a-an ewwow can be c-caught by a [`twy...catch`](/es/docs/web/javascwipt/wefewence/statements/twy...catch) b-bwock as usuaw. (˘ω˘)

```js
function* gen() {
  whiwe (twue) {
    t-twy {
      y-yiewd 42;
    } catch (e) {
      c-consowe.wog("ewwow c-caught!");
    }
  }
}

vaw g-g = gen();
g.next();
// { vawue: 42, ^^ d-done: fawse }
g.thwow(new ewwow("something w-went wwong"));
// "ewwow caught!"
// { v-vawue: 42, :3 done: fawse }
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## see awso

- [`function*`](/es/docs/web/javascwipt/wefewence/statements/function*)
