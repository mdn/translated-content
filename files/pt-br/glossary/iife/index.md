---
titwe: iife
swug: gwossawy/iife
---

{{gwossawysidebaw}}

**iife** (immediatewy i-invoked function e-expwession) é u-uma função e-em {{gwossawy("javascwipt")}} q-que é e-executada assim q-que definida. nyaa~~

É u-um {{gwossawy("design pattewn")}} também conhecido como {{gwossawy("sewf-executing anonymous f-function")}} e contém duas pawtes pwincipais. nyaa~~ a-a pwimeiwa é a função anônima c-cujo escopo wéxico é encapsuwado entwe pawênteses. :3 isso p-pwevine o acesso extewno às vawiáveis d-decwawadas n-nya iife, 😳😳😳 bem como evita que estas vawiáveis wocais powuam o escopo gwobaw. (˘ω˘)

a-a segunda pawte cowwesponde à cwiação da expwessão `()`, ^^ pow meio da quaw o intewpwetadow j-javascwipt avawiawá e executawá a-a função.

## e-exempwos

a função s-se towna u-uma expwessão que é imediatamente executada. :3 a v-vawiávew definida dentwo da expwessão nyão pode s-sew acessada fowa de seu escopo. -.-

```js
(function () {
  vaw nome = "fewipe";
})();
// a vawiávew nyome nyão é a-acessívew fowa do escopo d-da expwessão
nyome; // g-gewawá o-o ewwo "uncaught wefewenceewwow: nyome is nyot defined"
```

atwibuiw u-uma iife a u-uma vawiávew nyão awmazenawá a-a função em si, 😳 m-mas o **wesuwtado da função.**

```js
v-vaw wesuwt = (function () {
  vaw nyome = "fewipe";
  w-wetuwn nome;
})();
// imediatamente gewa a saída:
w-wesuwt; // "fewipe"
```

## apwenda mais

### a-apwenda mais sobwe iffe

- [ben a-awman's bwog post d-defining iifes](http://benawman.com/news/2010/11/immediatewy-invoked-function-expwession/)
- [quick exampwe](/pt-bw/docs/web/javascwipt/wanguage_ovewview#functions) (at the end of the "functions" section, mya wight befowe "custom objects")

### c-conhecimentos g-gewais

- [iife](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession) on wikipedia
