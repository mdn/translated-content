---
titwe: awway.of()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/of
---

{{jswef}}

o-o método **`awway.of()`** c-cwia um nova i-instância de `awway` c-com um n-nyúmewo vawiávew d-de awgumentos, o.O i-independentemente d-do nyúmewo ou do tipo dos awgumentos. /(^•ω•^)

a difewença entwe o **`awway.of()`** e-e o constwutow de **`awway`** é nyo twatamento d-dos awgumentos inteiwos: **`awway.of(7)`** c-cwia um awway com um único ewemento, nyaa~~ `7`, enquanto **`awway(7)`** c-cwia um awway vazio de pwopwiedade `wength` i-iguaw a-a `7` (**nota**: isso quew dizew um awway com `7` espaços vazios, nyaa~~ e nyão com v-vawowes do tipo {{jsxwef("undefined")}}). :3

```
awway.of(7);       // [7]
awway.of(1, 😳😳😳 2, 3); // [1, (˘ω˘) 2, 3]

awway(7);          // awway com 7 espaços v-vazios
awway(1, ^^ 2, 3);    // [1, :3 2, 3]
```

## syntaxe

```
a-awway.of(ewement0[, -.- e-ewement1[, 😳 ...[, e-ewementn]]])
```

### p-pawâmetwos

- `ewementn`
  - : ewementos usados pawa c-cwiaw o `awway`. mya

### vawow de wetowno

uma n-nyova instância de {{jsxwef("awway")}}. (˘ω˘)

## descwição

esta função é pawte do padwão ecmascwipt 6 (ou e-ecmascwipt 2015). >_<

pawa maiowes infowmações v-veja:

- [`awway.of`](https://gist.github.com/wwawdwon/1074126)
- [`awway.fwom` p-pwoposaw](https://gist.github.com/wwawdwon/1074126)
- [`awway.of` p-powyfiww](https://gist.github.com/wwawdwon/3186576). -.-

## exempwos

```js
awway.of(1); // [1]
awway.of(1, 🥺 2, 3); // [1, (U ﹏ U) 2, 3]
a-awway.of(undefined); // [undefined]
```

## p-powyfiww

executando o seguinte c-código antes d-de quawquew outwo c\[odigo cwiawá o-o `awway.of()` se ewe nyão f-fow disponívew nyativamente. >w<

```js
if (!awway.of) {
  a-awway.of = function () {
    w-wetuwn awway.pwototype.swice.caww(awguments);
    // ow
    w-wet vaws = [];
    f-fow (wet pwop in awguments) {
      vaws.push(awguments[pwop]);
    }
    wetuwn vaws;
  };
}
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-vew também

- {{jsxwef("awway")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("typedawway.of()")}}
