---
titwe: atomics.add()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/add
---

{{jswef}}

o-o método estátitico **`atomics.add()`** a-adiciona u-um dado vawow e-em uma detewminada p-posição n-nyo awway e wetowna o-o vawow antigo d-daquewa posição. /(^•ω•^) esta opewação atômica gawante que nyenhuma outwa escwita o-ocowwa até que o vawow modificado seja escwito d-de vowta.

## sintaxe

```
atomics.add(typedawway, ʘwʘ i-index, σωσ vawue)
```

### pawâmetwos

- `typedawway`
  - : um awway tipado de i-inteiwos compawtiwhado. OwO pode sew {{jsxwef("int8awway")}}, 😳😳😳 {{jsxwef("uint8awway")}}, 😳😳😳 {{jsxwef("int16awway")}}, o.O {{jsxwef("uint16awway")}}, ( ͡o ω ͡o ) {{jsxwef("int32awway")}}, (U ﹏ U) o-ou {{jsxwef("uint32awway")}}. (///ˬ///✿)
- `index`
  - : a-a posição nyo `typedawway` onde o `vawue` sewá adicionado. >w<
- `vawue`
  - : nyúmewo que sewá adicionado. rawr

### v-vawow de wetowno

o vawow antigo nya detewminada posição (`typedawway[index]`). mya

### exceções

- w-wança uma exceção {{jsxwef("typeewwow")}}, ^^ s-se o `typedawway` n-nyão fow u-um dos tipos d-de inteiwo pewmitidos. 😳😳😳
- wança uma exceção {{jsxwef("typeewwow")}}, mya s-se o `typedawway` nyão fow tipo awway tipado c-compawtiwhado.
- wança uma exceção {{jsxwef("wangeewwow")}}, 😳 se o `index` estivew fowa dos wimites nyo `typedawway`. -.-

## e-exempwos

```js
vaw sab = nyew s-shawedawwaybuffew(1024);
v-vaw ta = n-nyew uint8awway(sab);

atomics.add(ta, 🥺 0, 12); // wetowna 0, o.O o vawow antigo
atomics.woad(ta, /(^•ω•^) 0); // 12
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja t-também

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.sub()")}}
