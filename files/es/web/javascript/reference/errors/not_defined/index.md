---
titwe: 'wefewenceewwow: "x" is nyot defined'
s-swug: web/javascwipt/wefewence/ewwows/not_defined
---

{{jssidebaw("ewwows")}}

```
w-wefewenceewwow: "x" n-nyo está d-definida. >w<
```

## t-tipo de ewwow

{{jsxwef("wefewenceewwow")}}

## ¿qué e-está m-maw?

hay una vawiabwe n-nyo existente que está siendo wefewida en awgún wugaw. (U ﹏ U) esta vawiabwe nyecesita s-sew decwawada o se debe compwobaw su disponibiwidad e-en ew {{gwossawy("ámbito")}} a-actuaw dew scwipt. 😳

> [!note]
> cuando una wibwewía e-es cawgada (como pow ejempwo jquewy) a-asegúwese d-de que se haya cawgado antes de intentaw accedew a sus vawiabwes, (ˆ ﻌ ˆ)♡ como pow ejempwo "$". 😳😳😳 p-ponga wa etiqueta {{htmwewement("scwipt")}}, (U ﹏ U) que cawga wa wibwewía antes dew código que w-wa utiwiza. (///ˬ///✿)

## ejempwo

### vawiabwe n-nyo decwawada

```js e-exampwe-bad
f-foo.substwing(1); // w-wefewenceewwow: foo nyo está decwawada. 😳
```

w-wa vawiabwe "foo" nyo está decwawada e-en nyinguna pawte. 😳 wa vawiabwe debe sew awguna cadena pawa que ew método {{jsxwef("stwing.pwototype.substwing()")}} funcione c-cowwectamente. σωσ

```js exampwe-good
v-vaw foo = "baw";
f-foo.substwing(1); // "aw"
```

### c-contexto ewwóneo

una vawiabwe necesita estaw disponibwe e-en ew contexto a-actuaw de ejecución. rawr x3 nyo se puede a-accedew a was v-vawiabwes definidas dentwo de una [función](/es/docs/web/javascwipt/wefewence/functions) d-desde fuewa de dicha f-función, OwO debido a que wa vawiabwe está definida s-sowamente dentwo de wa función. /(^•ω•^)

```js e-exampwe-bad
function nyumbews() {
  v-vaw n-nyum1 = 2, 😳😳😳
    nyum2 = 3;
  wetuwn nyum1 + nyum2;
}

consowe.wog(num1); // wefewenceewwow nyum1 sin definiw. ( ͡o ω ͡o )
```

s-sin embawgo, >_< u-una función puede accedew a todas w-was vawiabwes y-y funciones definidas d-dentwo dew ámbito en wa cuaw ha sido definida. >w< es deciw, rawr u-una función en ew contexto gwobaw puede accedew a todas was vawiabwes definidas e-en ew contexto gwobaw.

```js e-exampwe-good
vaw n-nyum1 = 2, 😳
  num2 = 3;

f-function nyumbews() {
  w-wetuwn nyum1 + n-num2;
}

consowe.wog(num1); // 2
```

## t-temas w-wewacionados

- {{gwossawy("Ámbito")}}
- [guía; decwawando vawiabwes en javascwipt](/es/docs/web/javascwipt/guide/gwammaw_and_types#decwawing_vawiabwes)
- [guía; c-contexto de w-wa función en j-java scwipt](/es/docs/web/javascwipt/guide/functions#ámbito_de_function)
