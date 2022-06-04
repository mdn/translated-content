---
title: WebAssembly
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly
tags:
  - API
  - JavaScript
  - Object
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly
---
{{JSRef}}

L'objet JavaScript **`WebAssembly`** est un objet global qui agit comme un espace de noms (_namespace_) pour les différentes fonctionnalités JavaScript relatives à [WebAssembly](/fr/docs/WebAssembly).

À la différence des autres objets globaux, `WebAssembly` n'est pas un constructeur (au même titre que {{jsxref("Math")}} qui agit comme un espace de noms pour les constantes et fonctions mathématiques ou comme {{jsxref("Intl")}} qui centralise les constructeurs et les opérations relatives à l'internationalisation).

## Description

L'objet `WebAssembly` est notamment utilisé pour :

- Charger du code WebAssembly grâce à la fonction {{jsxref("WebAssembly.instantiate()")}}
- Créer des zones mémoires et des instances de tableaux grâce aux constructeurs  {{jsxref("WebAssembly.Memory()")}}/{{jsxref("WebAssembly.Table()")}}.
- Fournir des outils de gestion d'erreur WebAssembly grâce aux constructeurs {{jsxref("WebAssembly.CompileError()")}}/{{jsxref("WebAssembly.LinkError()")}}/{{jsxref("WebAssembly.RuntimeError()")}}.

## Méthodes

- {{jsxref("WebAssembly.instantiate()")}}
  - : La méthode qu'on utilisera la plupart du temps pour compiler et instancier du code WebAssembly, elle renvoie une promesse qui est résolue en une `Instance` ou en une `Instance` et un `Module`.
- {{jsxref("WebAssembly.instantiateStreaming()")}}
  - : Cette méthode peremet de compiler et d'instancier un module WebAssembly à partir d'un flux source (_streamed source_). Elle renvoie à la fois un objet `Module` et sa première `Instance`.
- {{jsxref("WebAssembly.compile()")}}
  - : Cette méthode permet de compiler un {{jsxref("WebAssembly.Module")}} à partir de *bytecode*  WebAssembly, l'instanciation doit alors être effectuée dans une autre étape.
- {{jsxref("WebAssembly.compileStreaming()")}}
  - : Cette méthode permet de compiler un module {{jsxref("WebAssembly.Module")}} à partir d'un flux source (_streamed source_). L'instanciation devra alors être réalisée avec une autre étape.
- {{jsxref("WebAssembly.validate()")}}
  - : Cette méthode permet de valider un tableau typé censé contenir du _bytecode_ WebAssembly : elle renvoie `true` si les octets forment un code WebAssembly valide ou `false` sinon.

## Constructeurs

- {{jsxref("WebAssembly.Global()")}}
  - : Ce constructeur permet de créer un nouvel objet WebAssembly `Global`.
- {{jsxref("WebAssembly.Module()")}}
  - : Ce constructeur permet de créer un objet WebAssembly `Module`.
- {{jsxref("WebAssembly.Instance()")}}
  - : Ce constructeur permet de créer un objet WebAssembly `Instance`.
- {{jsxref("WebAssembly.Memory()")}}
  - : Ce constructeur permet de créer un objet WebAssembly `Memory`.
- {{jsxref("WebAssembly.Table()")}}
  - : Ce constructeur permet de créer un objet WebAssembly `Table`.
- {{jsxref("WebAssembly.CompileError()")}}
  - : Ce constructeur permet de créer un objet WebAssembly `CompileError`.
- {{jsxref("WebAssembly.LinkError()")}}
  - : Ce constructeur permet de créer un objet WebAssembly `LinkError`.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : Ce constructeur permet de créer un objet WebAssembly `RuntimeError`.

## Exemples

L'exemple suivant (cf. le fichier [`instantiate-streaming.html`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) sur GitHub et [le résultat obtenu](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) permet de récupérer le module WebAssembly via un flux depuis une source, de le compiler, puis de l'instancier. La promesse est résolue avec un objet `ResultObject`. La méthode `instantiateStreaming()` accepte une promesse pour l'argument {{domxref("Response")}}, on peut lui passer directement un appel à {{domxref("WindowOrWorkerGlobalScope.fetch()")}} qui passera ensuite la réponse à la fonction lors de la complétion de la promesse.

```js
var importObject = { imports: { imported_func: arg => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());
```

On accède alors à la propriété de l'instance `ResultObject` puis on appelle la fonction exportée.

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | --------------------------------- |
| {{SpecName('WebAssembly JS', '#the-webassembly-object', 'WebAssembly')}} | {{Spec2('WebAssembly JS')}} | Brouillon de définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
