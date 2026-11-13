---
title: WebAssembly
slug: WebAssembly/Reference/JavaScript_interface
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

L'objet JavaScript **`WebAssembly`** sert d'espace de noms pour toutes les fonctionnalités liées à [WebAssembly](/fr/docs/WebAssembly).

À la différence des autres objets globaux, `WebAssembly` n'est pas un constructeur (ce n'est pas un objet fonction). Vous pouvez le comparer à {{JSxRef("Math")}}, qui est également un objet espace de noms pour les constantes et fonctions mathématiques, ou à {{JSxRef("Intl")}}, qui est l'objet espace de noms pour les constructeurs d'internationalisation et autres fonctions sensibles à la langue.

## Description

L'objet `WebAssembly` est notamment utilisé pour&nbsp;:

- Charger du code WebAssembly grâce à la fonction [`WebAssembly.instantiate()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- Créer de nouvelles instances de mémoire et de tableau avec les constructeurs [`WebAssembly.Memory()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table).
- Fournir des outils pour gérer les erreurs survenant dans WebAssembly avec les constructeurs [`WebAssembly.CompileError()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError).

## Interfaces

- [`WebAssembly.CompileError`](/fr/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Indique une erreur lors du décodage ou de la validation de WebAssembly.
- [`WebAssembly.Global`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Représente une instance de variable globale, accessible à la fois depuis JavaScript et importable/exportable entre une ou plusieurs instances de [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module). Cela permet le lien dynamique de plusieurs modules.
- [`WebAssembly.Instance`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Est une instance exécutable et avec état d'un [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module)
- [`WebAssembly.LinkError`](/fr/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Indique une erreur lors de l'instanciation d'un module (autre que les [pièges de capture <sup>(angl.)</sup>](https://webassembly.github.io/simd/core/intro/overview.html#trap) de la fonction de démarrage).
- [`WebAssembly.Memory`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Un objet dont la propriété [`buffer`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) est un objet {{JSxRef("ArrayBuffer")}} redimensionnable qui contient les octets bruts de la mémoire accessible par une `Instance` WebAssembly.
- [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Contient du code WebAssembly sans état qui a déjà été compilé par le navigateur et peut être efficacement [partagé avec des Workers](/fr/docs/Web/API/Worker/postMessage), et instancié plusieurs fois.
- [`WebAssembly.RuntimeError`](/fr/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Type d'erreur qui est levé chaque fois que WebAssembly définit un [piège <sup>(angl.)</sup>](https://webassembly.github.io/simd/core/intro/overview.html#trap).
- [`WebAssembly.Table`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Une structure de type tableau représentant une table WebAssembly, qui stocke des [références <sup>(angl.)</sup>](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype), telles que des références de fonctions.
- [`WebAssembly.Tag`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : Un objet qui représente un type d'exception WebAssembly.
- [`WebAssembly.Exception`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : Un objet d'exception WebAssembly qui peut être levé, capturé et relancé à la fois à l'intérieur et à travers les frontières WebAssembly/JavaScript.

## Méthodes statiques

- [`WebAssembly.compile()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : Compile un [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module) à partir de code binaire WebAssembly, laissant l'instanciation comme une étape séparée.
- [`WebAssembly.compileStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : Compile un [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module) directement à partir d'une source sous-jacente en flux, laissant l'instanciation comme une étape séparée.
- [`WebAssembly.instantiate()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : L'API principale pour compiler et instancier du code WebAssembly, retournant à la fois un `Module` et sa première `Instance`.
- [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : Compile et instancie directement un module WebAssembly à partir d'une source sous-jacente en flux, retournant à la fois un `Module` et sa première `Instance`.
- [`WebAssembly.validate()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : Valide un tableau typé donné de code binaire WebAssembly, renvoyant `true` si les octets sont un code WebAssembly valide ou `false` sinon.

## Exemples

### Diffuser un module WebAssembly puis le compiler et l'instancier

L'exemple suivant (voir notre démonstration [instantiate-streaming.html <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) sur GitHub, et [la voir en direct <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) également) diffuse directement un module WebAssembly depuis une source sous-jacente, puis le compile et l'instancie, la promesse étant résolue en un `ResultObject`. Comme la fonction `instantiateStreaming()` accepte une promesse pour un objet [`Response`](/fr/docs/Web/API/Response), vous pouvez lui passer directement un appel à [`fetch()`](/fr/docs/Web/API/Window/fetch), et elle transmettra la réponse à la fonction lorsque la promesse sera résolue.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

On accède ensuite à la propriété `.instance` du `ResultObject`, puis on invoque la fonction exportée qu'elle contient.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Un aperçu de [WebAssembly](/fr/docs/WebAssembly)
- [Les concepts associés à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
