---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
tags:
  - Constructeur
  - JavaScript
  - Mémoire partagée
  - Reference
  - SharedArrayBuffer
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
original_slug: Web/JavaScript/Reference/Objets_globaux/SharedArrayBuffer
---
{{JSRef}}

L'objet **`SharedArrayBuffer`** est utilisé afin de représenter un tampon de données binaires brutes générique de longueur fixe. Il est semblable à l'objet {{jsxref("ArrayBuffer")}} mais peut ici être utilisé pour créer différentes vues sur une même mémoire partagée. À la différence d'un `ArrayBuffer`, un `SharedArrayBuffer` ne peut pas être détaché.

> **Note :** L'objet `SharedArrayBuffer` a été désactivé le 5 janvier 2018 par défaut pour l'ensemble des principaux navigateurs afin de réduire [les failles Meltdown et Spectre](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/). [Chrome a réactivé cet objet avec la version 67](https://bugs.chromium.org/p/chromium/issues/detail?id=821270) pour les plateformes sur lesquelles des fonctionnalités sont présentes pour protéger des vulnérabilités telles que Spectre (« _site-isolation feature_ »)

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-constructor.html")}}

## Syntaxe

    new SharedArrayBuffer([length])

### Paramètres

- `longueur`
  - : La taille, exprimée en octets, du tampon (_buffer_) de données qu'on souhaite créer.

### Valeur de retour

Un nouvel objet `SharedArrayBuffer` de la taille donnée, dont les éléments sont initialisés à 0.

## Description

### Allouer et partager la mémoire

Pour partager une zone mémoire entre plusieurs objets {{jsxref("SharedArrayBuffer")}} d'un agent à un autre (ici un agent correspond au programme principal de la page web ou à l'un de ses _web workers_), on utilise [`postMessage`](/fr/docs/Web/API/Worker/postMessage) et [le clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

L'algorithme de clonage structuré permet d'envoyer des objets `SharedArrayBuffers` et `TypedArrays` vers `SharedArrayBuffers`. Dans les deux cas, l'objet `SharedArrayBuffer` est transmis au récepteur, ce qui crée un nouvel objet `SharedArrayBuffer`, privé, au sein de l'agent qui reçoit (comme avec  {{jsxref("ArrayBuffer")}}). Cependant, le bloc de mémoire référencé par les deux objets ` Shared``ArrayBuffer ` est bien le même bloc. Aussi, si un agent interagit avec cette zone, l'autre agent pourra voir les modifications.

```js
var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

### Mettre à jour et synchroniser la mémoire partagée avec les opérations atomiques

La mémoire partagée peut être créée et mise à jour de façon simultanée entre les _workers_ et le _thread_ d'exécution principal. Selon le système (le processeur, le système d'exploitation, le navigateur), cela peut prendre du temps avant que le changement soit propagé sur l'ensemble des contextes. Pour que la synchronisation s'effectue, on doit utiliser les opérations {{jsxref("Atomics", "atomiques", "", 1)}}.

### Les API qui utilisent des objets `SharedArrayBuffer`

- {{domxref("WebGLRenderingContext.bufferData()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- {{domxref("WebGL2RenderingContext.getBufferSubData()")}}

### Obligation d'utiliser l'opérateur `new`

Les constructeurs `SharedArrayBuffer` doivent être utilisés avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Si on appelle un constructeur `SharedArrayBuffer` comme une fonction, sans `new`, cela lèvera une exception {{jsxref("TypeError")}}.

```js example-bad
var sab = SharedArrayBuffer(1024);
// TypeError: appeler le constructeur natif SharedArrayBuffer sans
// new est interdit
```

```js example-good
var sab = new SharedArrayBuffer(1024);
```

## Propriétés

- `SharedArrayBuffer.length`
  - : La propriété de longueur pour le constructeur `SharedArrayBuffer` dont la valeur est 1.
- {{jsxref("SharedArrayBuffer.prototype")}}
  - : Le prototype permet d'ajouter des propriétés à l'ensemble des objets `SharedArrayBuffer`.

## Le prototype de `SharedArrayBuffer`

Toutes les instances de `SharedArrayBuffer` héritent de {{jsxref("SharedArrayBuffer.prototype")}}.

### Propriétés

{{page('fr/Web/JavaScript/Reference/Objets_globaux/SharedArrayBuffer/prototype','Propriétés')}}

### Méthodes

{{page('fr/Web/JavaScript/Reference/Objets_globaux/SharedArrayBuffer/prototype','Méthodes')}}

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-sharedarraybuffer-objects', 'SharedArrayBuffer')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ES8', '#sec-sharedarraybuffer-objects', 'SharedArrayBuffer')}}     | {{Spec2('ES8')}}         | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.SharedArrayBuffer")}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- [Web Workers](/fr/docs/Web/API/Web_Workers_API)
- [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – un bibliothèque simple qui fournit des abstractions pour synchroniser et distribuer des tâches
- [La mémoire partagée – un rapide tutoriel](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
- [A Taste of JavaScript’s New Parallel Primitives – Mozilla Hacks (en anglais)](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)
