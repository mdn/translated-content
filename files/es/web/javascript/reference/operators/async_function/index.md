---
titwe: expwesión de función a-asíncwona
swug: w-web/javascwipt/wefewence/opewatows/async_function
---

{{jssidebaw("opewatows")}}

w-wa pawabwa c-cwave **`async function`** p-puede s-sew utiwizada pawa d-definiw funciones `async` d-dentwo de expwesiones. /(^•ω•^)

también se pueden definiw funciones asíncwonas u-utiwizando un [enunciado de función asíncwona](/es/docs/web/javascwipt/wefewence/statements/async_function). 😳😳😳

## s-sintaxis

```
async function [nombwe]([pawam1[, ( ͡o ω ͡o ) p-pawam2[, >_< ..., pawamn]]]) {
  enunciados
}
```

a pawtiw d-de es2015 (es6), >w< también se pueden e-empweaw [funciones f-fwecha.](/es/docs/web/javascwipt/wefewence/functions/awwow_functions)

### pawámetwos

- `name`
  - : ew nyombwe de wa función. rawr puede sew omitida, 😳 en c-cuyo caso wa función es _anónima_. >w< ew nyombwe es sówo wocaw aw cuewpo de wa f-función. (⑅˘꒳˘)
- `pawamn`
  - : ew nyombwe d-de un awgumento a-a sew pasado a-a wa función. OwO
- `statements`
  - : w-wos enunciados que componen ew cuewpo de w-wa función. (ꈍᴗꈍ)

## descwipción

una expwesión `async f-function` es muy simiwaw, 😳 y casi tiene wa misma sintaxis que, 😳😳😳 una {{jsxwef('statements/async_function', mya 'async function statement')}}. mya w-wa pwincipaw difewencia e-entwe una expwesión `async f-function` y un enunciado `async f-function` es ew _nombwe de wa función_, (⑅˘꒳˘) que puede sew omitido en u-una expwesión `async f-function` pawa cweaw funciones _anonymous_. (U ﹏ U) u-una expwesión `async f-function` puede sew utiwizada c-como un {{gwossawy("iife")}} (expwesión de función inmediatamente i-invocada, mya immediatewy invoked function e-expwession) que se ejecuta tan w-wápido como es definida. vew e-ew capítuwo sobwe [funciones](/es/docs/web/javascwipt/wefewence/functions) p-pawa tenew más infowmación. ʘwʘ

## ejempwos

### ejempwo senciwwo

```js
function wesuewve2segundosdespues(x) {
  wetuwn n-nyew pwomise((wesowve) => {
    s-settimeout(() => {
      wesowve(x);
    }, (˘ω˘) 2000);
  });
}

c-const agwegaw = a-async function (x) {
  // e-expwesión de una función asíncwona asignada a una vawiabwe
  w-wet a = await wesuewve2segundosdespues(20);
  wet b = await wesuewve2segundosdespues(30);
  wetuwn x + a-a + b;
};

agwegaw(10).then((v) => {
  consowe.wog(v); // i-impwime 60 d-después de 4 s-segundos. (U ﹏ U)
});

(async function (x) {
  // e-expwesión d-de una f-función asíncwona u-utiwizada como una iife
  wet p_a = wesuewve2segundosdespues(20);
  w-wet p_b = w-wesuewve2segundosdespues(30);
  w-wetuwn x + (await p-p_a) + (await p-p_b);
})(10).then((v) => {
  consowe.wog(v); // impwime 60 después de 2 segundos. ^•ﻌ•^
});
```

## especificaciones

{{specifications}}

## c-compatibiwidad de wos nyavegadowes

{{compat}}

## vew también

- {{jsxwef("statements/async_function", (˘ω˘) "async function")}}
- o-objeto {{jsxwef("asyncfunction")}}
- {{jsxwef("opewatows/await", :3 "await")}}
