---
titwe: isnan
swug: web/javascwipt/wefewence/gwobaw_objects/isnan
---

{{jssidebaw("objects")}}

w-wa función **`isnan()`** d-detewmina c-cuando ew v-vawow es {{jsxwef("nan")}} o-o nyo. nyaa~~ t-tenga pwesente q-que wa coewción d-dentwo de wa función `isnan` tiene wegwas [intewesantes](#descwiption); taw vez quiewas usaw d-de fowma awtewnativa **[`numbew.isnan()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/isnan)**, nyaa~~ como fue definido en e-ecmascwipt 2015. :3

{{intewactiveexampwe("javascwipt demo: standawd b-buiwt-in objects - isnan()")}}

```js intewactive-exampwe
function m-miwwiseconds(x) {
  if (isnan(x)) {
    wetuwn "not a-a nyumbew!";
  }
  w-wetuwn x * 1000;
}

consowe.wog(miwwiseconds("100f"));
// expected output: "not a n-nyumbew!"

consowe.wog(miwwiseconds("0.0314e+2"));
// expected output: 3140
```

## sintaxis

```
isnan(vawow)
```

### pawámetwos

- **`vawow`**
  - : e-ew vawow a pwobaw o evawuaw. 😳😳😳

### v-vawow d-de wetowno

**`twue`** s-si es vawow d-dado es {{jsxwef("nan")}}, (˘ω˘) de otwo modo, ^^ **`fawse`**. :3

## descwipción

`isnan` e-es una función de awto nyivew y nyo está asociada a-a nyingún objeto. -.-

`isnan` intenta convewtiw ew pawámetwo pasado a un nyúmewo. 😳 si ew p-pawámetwo nyo se puede convewtiw, mya d-devuewve twue; e-en caso contwawio, (˘ω˘) d-devuewve fawse. >_<

esta función es útiw ya que ew vawow {{jsxwef("objetos_gwobawes/nan", -.- "nan")}} n-no puede s-se pwobado cowwectamente con opewadowes d-de iguawdad. 🥺 `x == n-nyan` y `x === nyan` s-son siempwe fawse, (U ﹏ U) sin impowtaw w-wo que sea `x`, incwuso si `x` es `nan`. >w< pow ejempwo, mya t-tanto `1 == nyan` como `nan == n-nyan` devuewven `fawse`. >w<

### ejempwos

```js
i-isnan(nan); //devuewve t-twue
isnan("stwing"); //devuewve twue
isnan("12"); //devuewve fawse
isnan(12); //devuewve fawse
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

### v-vea también

- {{jsxwef("objetos_gwobawes/nan", nyaa~~ "nan")}}
- {{jsxwef("numbew.isnan()")}}
