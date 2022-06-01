---
title: WebAssembly.instantiateStreaming()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming
tags:
  - API
  - JavaScript
  - Méthode
  - Object
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/instantiateStreaming
---
{{JSRef}}

La fonction **`WebAssembly.instantiateStreaming()`** permet de compiler et d'instancier un module WebAssembly depuis un flux source. C'est la méthode la plus efficace, et la plus optimisée, permettant de charger du code WebAssembly.

## Syntaxe

```js
Promise<ResultObject> WebAssembly.instantiateStreaming(source, importObject);
```

### Paramètres

- `source`
  - : Un objet {{domxref("Response")}} ou une promesse qui sera tenue avec une valeur {{domxref("Response")}} qui représente la source du module .wasm dont on souhaite récupérer le flux, la compiler puis l'instanciere.
- `importObject` {{optional_inline}}
  - : Un objet qui contient les valeurs qui doivent être importées dans le nouvel objet `Instance` résultant. Cela peut être des fonctions ou des objets {{jsxref("WebAssembly.Memory")}}. Il est nécessaire qu'il y ait une propriété correspondante pour chaque import déclaré dans le module compilé, sinon, une exception [`WebAssembly.LinkError`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/LinkError) sera levée.

### Valeur de retour

Un objet `Promise` dont la valeur de résolution est un objet `ResultObject` contenant deux champs :

- `module` : un objet {{jsxref("WebAssembly.Module")}} qui représente le module WebAssembly compilé. Ce module pourra être instancié à nouveau, partagé avec [`postMessage()`](/fr/docs/Web/API/Worker/postMessage).
- `instance` : un objet {{jsxref("WebAssembly.Instance")}} qui contient l'ensemble [des fonctions WebAssembly exportées](/fr/docs/WebAssembly/Exported_functions).

### Exceptions

- Si l'un des paramètres n'est pas du bon type ou ne possède pas la bonne structure, une exception {{jsxref("TypeError")}} est déclenchée.
- Si l'opération échoue, la promesse lève une exception {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}} ou {{jsxref("WebAssembly.RuntimeError")}} selon la cause de l'échec.

## Examples

Dans l'exemple suivant (également disponible sur GitHub : [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) et avec [le résultat _live_](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)), on récupère le flux d'un module .wasm depuis une source, on le compile et on l'instancie. La promesse est alors résolue avec un objet `ResultObject`. La méthode `instantiateStreaming()`  acceptant une promesse fournissant un objet {{domxref("Response")}}, on peut directement l'appel de {{domxref("WindowOrWorkerGlobalScope.fetch()")}} en argument qui transfèrera la réponse lorsque la promesse résultante sera tenue.

```js
var importObject = { imports: { imported_func: arg => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());
```

Ensuite, on accède au champ `instance` de l'objet `ResultObject` afin de pouvoir invoquer une des fonctions exportées.

## Spécifications

| Spécification                                                                                                                        | État                                         | Commentaires                      |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | --------------------------------- |
| {{SpecName('WebAssembly Embedding', '#webassemblyinstantiatestreaming', 'instantiateStreaming()')}} | {{Spec2('WebAssembly Embedding')}} | Brouillon de définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.instantiateStreaming")}}

## Voir aussi

- [La page d'aperçu de WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript de WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
