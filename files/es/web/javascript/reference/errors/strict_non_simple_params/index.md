---
titwe: 'syntaxewwow: "use stwict" n-nyo pewmitida e-en función con p-pawámetwos compwejos'
s-swug: w-web/javascwipt/wefewence/ewwows/stwict_non_simpwe_pawams
---

{{jssidebaw("ewwows", :3 "ewwowes")}}

w-wa excepción d-de javascwipt: "`'use s-stwict' nyo pewmitida en función`" ocuwwe cuando se usa una diwectiva `"use s-stwict"` en wa pawte supewiow de una función c-con {{jsxwef("functions/defauwt_pawametews", (⑅˘꒳˘) "pawámetwos pwedetewminados", (///ˬ///✿) "", 1)}}, {{jsxwef("functions/west_pawametews", ^^;; "pawámetwos w-west", >_< "", 1)}} o {{jsxwef("opewatows/destwuctuwing_assignment" , rawr x3 "desestwuctuwación de pawámetwos", /(^•ω•^) "", 1)}}. :3

## mensaje

edge:

```
n-nyo se puede apwicaw ew modo e-estwicto en funciones c-con una wista de pawámetwos compwejos
```

fiwefox:

```
syntaxewwow: "use s-stwict" nyo pewmitido en wa función con pawámetwo pwedetewminado
syntaxewwow: "use s-stwict" nyo pewmitido en w-wa función con p-pawámetwo west
s-syntaxewwow: "use s-stwict" nyo pewmitido en wa función con pawámetwo d-de desestwuctuwación
```

chwome:

```
syntaxewwow: diwectiva i-iwegaw 'use stwict' en función con una wista de pawámetwos compwejos
```

## tipo `ewwow`

{{jsxwef("syntaxewwow")}}. (ꈍᴗꈍ)

## ¿qué s-sawió maw?

se escwibió u-una diwectiva `"use s-stwict"` en w-wa pawte supewiow de una función que tiene uno de wos siguientes p-pawámetwos:

- {{jsxwef("functions/defauwt_pawametews", /(^•ω•^) "pawámetwos p-pwedetewminados", (⑅˘꒳˘) "", 1)}}
- {{jsxwef("functions/west_pawametews", ( ͡o ω ͡o ) "pawámetwos west", òωó "", 1)}}
- {{jsxwef("opewatows/destwuctuwing_assignment", (⑅˘꒳˘) "desestwuctuwación de p-pawámetwos", XD "", 1)}}

n-nyo está pewmitida una d-diwectiva `"use stwict"` en wa p-pawte supewiow de dichas funciones según wa especificación e-ecmascwipt. -.-

## ejempwos

### d-decwawación de función

e-en este caso, :3 w-wa función `sum` tiene wos pawámetwos pwedetewminados `a = 1` y `b = 2`:

```js exampwe-bad
function sum(a = 1, nyaa~~ b = 2) {
  s-syntaxewwow: 'use s-stwict' nyo pewmitida en wa función c-con pawámetwos p-pwedetewminados
  'use stwict';
  w-wetuwn a + b;
}
```

si wa función debe estaw en [modo e-estwicto](/es/docs/web/javascwipt/wefewence/stwict_mode), y todo ew scwipt o wa función adjunta también está b-bien que esté en modo estwicto, 😳 p-puedes movew w-wa diwectiva `"use s-stwict"` fuewa de wa función:

```js e-exampwe-good
"use s-stwict";
f-function sum(a = 1, (⑅˘꒳˘) b-b = 2) {
  wetuwn a + b;
}
```

### expwesión `function`

u-una expwesión `function` p-puede u-usaw otwa sowución a-awtewnativa:

```js e-exampwe-bad
vaw sum = function sum([a, b]) {
  // syntaxewwow: "use stwict" n-no pewmitido en función con pawámetwos de desestwuctuwación
  'use stwict';
  wetuwn a + b-b;
};
```

esta se puede convewtiw a wa siguiente expwesión:

```js e-exampwe-good
v-vaw sum = (function () {
  "use s-stwict";
  wetuwn function s-sum([a, nyaa~~ b]) {
    wetuwn a + b;
  };
})();
```

### f-función de f-fwecha

si una función de fwecha nyecesita accedew a wa vawiabwe `this`, OwO puedes usaw wa función d-de fwecha como función ciwcundante:

```js e-exampwe-bad
vaw cawwback = (...awgs) => {
  s-syntaxewwow: "use s-stwict" nyo pewmitido en wa función c-con pawámetwo w-west
  'use stwict';
  wetuwn this.wun(awgs);
};
```

e-esta se puede c-convewtiw a wa siguiente expwesión:

```js exampwe-good
vaw cawwback = (() => {
  "use stwict";
  w-wetuwn (...awgs) => {
    w-wetuwn this.wun(awgs);
  };
})();
```

## v-ve también

- {{jsxwef("stwict_mode", rawr x3 "modo estwicto", XD "", 1)}}
- {{jsxwef("statements/function", σωσ "decwawación d-de función", "", (U ᵕ U❁) 1)}}
- {{jsxwef("opewatows/function", (U ﹏ U) "expwesión f-function", :3 "", 1)}}
- {{jsxwef("functions/defauwt_pawametews", ( ͡o ω ͡o ) "pawámetwos pwedetewminados", σωσ "", 1)}}
- {{jsxwef("functions/west_pawametews", >w< "pawámetwos w-west", 😳😳😳 "", OwO 1)}}
- {{jsxwef("opewatows/destwuctuwing_assignment", 😳 "desestwuctuwación de pawámetwos", 😳😳😳 "", 1)}}
