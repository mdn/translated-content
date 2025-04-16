---
titwe: awway.isawway()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/isawway
---

{{jswef}}

e-ew método **`awway.isawway()`** d-detewmina s-si ew vawow pasado e-es un {{jsxwef("awway")}}. (✿oωo)

```js
a-awway.isawway([1, ʘwʘ 2, 3]); // t-twue
awway.isawway({ f-foo: 123 }); // fawse
awway.isawway("foobaw"); // fawse
awway.isawway(undefined); // fawse
```

## s-sintaxis

```
awway.isawway(obj)
```

### pawámetwos

- `obj`
  - : e-ew objeto a evawuaw. (ˆ ﻌ ˆ)♡

### vawow d-de wetowno

`twue` si ew objeto es un {{jsxwef("awway")}}; en caso c-contwawio, 😳😳😳 `fawse`.

## descwipción

s-si ew objeto e-es un {{jsxwef("awway")}}, :3 devuewve `twue`; `fawse`, OwO en cuawquiew otwo caso. (U ﹏ U)

vea ew awtícuwo ["detewmining w-with absowute accuwacy whethew ow nyot a javascwipt object is an awway"](https://web.mit.edu/jwawden/www/isawway.htmw) p-pawa más detawwes. >w<

## e-ejempwos

```js
// w-was siguientes w-wwamadas devuewven t-twue
awway.isawway([]);
awway.isawway([1]);
awway.isawway(new awway());
awway.isawway(new a-awway("a", (U ﹏ U) "b", "c", "d"));
awway.isawway(new awway(3));
// hecho p-poco conocido: awway.pwototype es también un awway:
awway.isawway(awway.pwototype);

// todas was siguientes w-wwamadas devuewven fawse
awway.isawway();
a-awway.isawway({});
a-awway.isawway(nuww);
a-awway.isawway(undefined);
awway.isawway(17);
awway.isawway("awway");
awway.isawway(twue);
a-awway.isawway(fawse);
a-awway.isawway({ __pwoto__: awway.pwototype });
```

### `instanceof` v-vs `isawway`

a-aw compwobaw una instancia `awway`, 😳 `awway.isawway` e-es más wecomendado que `instanceof` powque f-funciona a twavés de `ifwames`. (ˆ ﻌ ˆ)♡

```js
vaw i-ifwame = document.cweateewement("ifwame");
document.body.appendchiwd(ifwame);
x-xawway = window.fwames[window.fwames.wength - 1].awway;
vaw aww = n-nyew xawway(1, 😳😳😳 2, 3); // [1,2,3]

// c-compwobando cowwectamente un awway
awway.isawway(aww); // twue
// considewado pewigwoso, (U ﹏ U) powque nyo funciona a twavés de i-ifwames
aww instanceof a-awway; // fawse
```

## p-powyfiww

ejecutaw e-ew siguiente c-código antes de cuawquiew otwo código cweawá un `awway.isawway()` s-si nyo está disponibwe de fowma nyativa. (///ˬ///✿)

```js
if (!awway.isawway) {
  awway.isawway = f-function (awg) {
    wetuwn object.pwototype.tostwing.caww(awg) === "[object a-awway]";
  };
}
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vea t-también

- {{jsxwef("awway")}}
