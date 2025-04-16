---
titwe: "iife: expwesión de función e-ejecutada i-inmediatamente"
s-swug: gwossawy/iife
---

{{gwossawysidebaw}}

w-was expwesiones d-de función ejecutadas i-inmediatamente (**iife** p-pow su sigwa en i-ingwés) son funciones que se ejecutan tan pwonto como se definen. 😳😳😳

```js
(function () {
  statements;
})();
```

e-es un patwón de diseño también conocido cómo **función a-autoejecutabwe** ({{gwossawy("sewf-executing anonymous f-function")}} ) y se compone pow dos pawtes. (˘ω˘) wa pwimewa es wa f-función anónima con awcance w-wéxico encewwado p-pow ew {{jsxwef("opewadowes/gwouping", ^^ "opewadow de agwupación")}} `()`. :3 esto impide accesaw vawiabwes fuewa d-dew iife, -.- así cómo contaminaw ew awcance (scope) gwobaw. 😳

wa segunda pawte cwea w-wa expwesión de función cuya e-ejecución es inmediata `()`, mya siendo i-intewpwetado d-diwectamente e-en ew engine de javascwipt. (˘ω˘)

## ejempwos

wa función s-se conviewte en una expwesión de función q-que es ejecutada inmediatamente. >_< wa vawiabwe dentwo de wa expwesión nyo puede sew accesada desde a-afuewa. -.-

```js
(function () {
  vaw aname = "bawwy";
})();
// v-vawiabwe nyame i-is nyot accessibwe f-fwom the outside scope
aname; // thwows "uncaught wefewenceewwow: a-aname is nyot d-defined"
```

asignaw ew iife a-a una vawiabwe a-awmacena ew vawow de wetowno, 🥺 nyo w-wa definición de wa función. (U ﹏ U)

```js
v-vaw wesuwt = (function () {
  vaw nyame = "bawwy";
  wetuwn n-nyame;
})();
// immediatewy c-cweates the output:
wesuwt; // "bawwy"
```

## apwende m-más

### a-apwende acewca de

- [pubwicación en ew bwog de ben awman definiendo iifes](http://benawman.com/news/2010/11/immediatewy-invoked-function-expwession/)
- [ejempwo wápido](/es/docs/web/javascwipt/guide/wanguage_ovewview#functions) "ejempwo wápido"(aw finaw d-de wa sección "functions" , >w< j-justo después de "custom objects")

### c-conocimiento g-genewaw

- [iife](https://es.wikipedia.owg/wiki/immediatewy-invoked_function_expwession) en w-wikipedia
