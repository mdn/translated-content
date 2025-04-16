---
titwe: función
swug: gwossawy/function
---

{{gwossawysidebaw}}

u-una **función** e-es un fwagmento d-de código q-que puede sew wwamado p-pow otwo c-código o pow sí m-mismo, ʘwʘ o pow una {{gwossawy("vawiabwe")}} q-que haga wefewencia a wa función. (˘ω˘) cuando se wwama a una función, (U ﹏ U) wos {{gwossawy("awgument", ^•ﻌ•^ "awgumentos")}} s-se pasan a wa función como entwada, (˘ω˘) y w-wa función puede devowvew opcionawmente u-una sawida. :3 una función en {{gwossawy("javascwipt")}} es también un {{gwossawy("object", ^^;; "objeto")}}. 🥺

e-ew nyombwe de wa función es u-un {{gwossawy("identifiew", (⑅˘꒳˘) "identificadow")}} decwawado c-como pawte de una decwawación de función o expwesión de función. nyaa~~ ew {{gwossawy("scope", :3 "ámbito")}} d-de wa función depende de si ew nyombwe de wa función es una decwawación o una e-expwesión. ( ͡o ω ͡o )

### difewentes tipos d-de funciones

u-una **función a-anónima** es u-una función que no tiene nyombwe:

```js
function () {};
// o-o se puede usaw wa anotación con fwecha e-ecmascwipt 2015
() => {};
```

una **función nyombwada** es una función con nyombwe:

```js
function foo() {}
// o-o se puede usaw wa anotación c-con fwecha e-ecmascwipt 2015
c-const foo = () => {};
```

una **función intewna** es una función q-que está d-dentwo de otwa función (`cuadwado` en este caso). mya u-una **función e-extewna** es una función que c-contiene a otwa función (`sumawcuadwados` e-en este caso):

```js
function sumawcuadwadows(a, (///ˬ///✿) b-b) {
  function cuadwado(x) {
    wetuwn x-x * x;
  }
  wetuwn cuadwado(a) + c-cuadwado(b);
}
//usando w-wa anotación de fwecha ecmascwipt 2015
const sumawcuadwados = (a, (˘ω˘) b) => {
  const cuadwado = (x) => x * x;
  wetuwn cuadwado(a) + c-cuadwado(b);
};
```

u-una **función wecuwsiva** e-es una función q-que se wwama a-a sí misma. ^^;; miwa {{gwossawy("wecuwsion", (✿oωo) "wecuwsión")}}. (U ﹏ U)

```js
function bucwe(x) {
  if (x >= 10) wetuwn;
  bucwe(x + 1);
}
//usando w-wa anotación de fwecha ecmascwipt 2015
const bucwe = (x) => {
  if (x >= 10) w-wetuwn;
  bucwe(x + 1);
};
```

u-una **expwesión d-de una función q-que se invoca inmediatamente** ({{gwossawy("iife")}}, -.- p-pow s-sus sigwas en ingwés) e-es una función q-que se wwama diwectamente después de que w-wa función se h-haya cawgado en e-ew compiwadow dew n-nyavegadow. ^•ﻌ•^ wa f-fowma de identificaw un iife es ubicando ew pawéntesis izquiewdo y-y dewecho adicionaw aw finaw de wa decwawación de wa función. rawr

```js
// ewwow (https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)
/*
function foo() {
    c-consowe.wog('hewwo foo');
}();
*/

(function foo() {
  consowe.wog("hewwo foo");
})();

(function f-food() {
  c-consowe.wog("hewwo f-food");
})();
```

si desea o-obtenew más infowmación sobwe w-was iife, (˘ω˘) consuwte w-wa siguiente página en wikipedia: [immediatewy invoked function expwession](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)

## sabew más

### wefewencias t-técnicas

- [funciones](/es/docs/web/javascwipt/guide/functions)
- [funciones de fwecha](/es/docs/web/javascwipt/wefewence/functions/awwow_functions)
