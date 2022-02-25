---
title: WorkerGlobalScope.self
slug: Web/API/WorkerGlobalScope/self
translation_of: Web/API/WorkerGlobalScope/self
---
{{APIRef("Web Workers API")}}

La propriété en lecture seule **`self`** de l'interface {{domxref("WorkerGlobalScope")}} retourne une référence au `WorkerGlobalScope` lui-même. La plupart du temps il s'agit d'un contexte spécifique comme {{domxref("DedicatedWorkerGlobalScope")}},  {{domxref("SharedWorkerGlobalScope")}}, ou {{domxref("ServiceWorkerGlobalScope")}}.

## Syntaxe

```js
var selfRef = self;
```

### Valeur

Un objet global scope (qui diffère selon le type du worker concerné, comme indiqué ci-dessus).

## Exemple

Si vous appelez

```js
console.log(self);
```

au sein d'un worker, vous obtiendrez un worker global scope du même type que l'objet worker écrit sur la console — quelque chose comme ce qui suit :

```js
DedicatedWorkerGlobalScope {
undefined: undefined, Infinity: Infinity, Math: MathConstructor, NaN: NaN, Intl: Object…}
    Infinity: Infinity
    Array: function Array() { [native code] }
      arguments: null
      caller: null
      isArray: function isArray() { [native code] }
      length: 1
      name: "Array"
      observe: function observe() { [native code] }
      prototype: Array[0]
      unobserve: function unobserve() { [native code] }
      __proto__: function Empty() {}
      <function scope>
    ArrayBuffer: function ArrayBuffer() { [native code] }
    Blob: function Blob() { [native code] }
    Boolean: function Boolean() { [native code] }
    DataView: function DataView() { [native code] }
    Date: function Date() { [native code] }
    DedicatedWorkerGlobalScope: function DedicatedWorkerGlobalScope() { [native code] }
    Error: function Error() { [native code] }
// etc. etc.
```

Cette trace fournit la liste complète des objets disponibles dans le contexte d'un worker, et constitue un test très utile lorsqu'il s'agit de savoir ce qui est disponible ou non au sein d'un worker. Nous maintenons aussi une liste des [Fonctions et classes disponibles dans les Web Workers](/en-US/docs/Web/API/Worker/Functions_and_classes_available_to_workers).

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', '#dom-workerglobalscope-self', 'self')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.WorkerGlobalScope.self")}}

## Voir aussi

{{domxref("WorkerGlobalScope")}}
