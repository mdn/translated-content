---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
original_slug: Web/JavaScript/Reference/Objets_globaux/SharedArrayBuffer
browser-compat: javascript.builtins.SharedArrayBuffer
---
{{JSRef}}

L'objet **`SharedArrayBuffer`** est utilisé afin de représenter un tampon de données binaires brutes générique de longueur fixe. Il est semblable à l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), mais peut ici être utilisé pour créer différentes vues sur une même mémoire partagée. À la différence d'un `ArrayBuffer`, un `SharedArrayBuffer` n'est pas [un objet transférable](/fr/docs/Glossary/Transferable_objects).

## Description

### Allouer et partager la mémoire

Pour partager une zone mémoire entre plusieurs objets
`SharedArrayBuffer` d'un agent à un autre (ici un agent correspond au programme principal de la page web ou à l'un de ses <i lang="en">web workers</i>), on utilisera [`postMessage()`](/fr/docs/Web/API/Worker/postMessage) et [le clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

L'algorithme de clonage structuré permet d'envoyer des objets `SharedArrayBuffers` et `TypedArrays` vers des objets `SharedArrayBuffer`. Dans les deux cas, l'objet `SharedArrayBuffer` est transmis au récepteur, ce qui crée un nouvel objet `SharedArrayBuffer`, privé, au sein de l'agent qui reçoit (comme avec  [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)). Cependant, le bloc de mémoire référencé par les deux objets `SharedArrayBuffer` est bien le même bloc. Aussi, si un agent interagit avec cette zone, l'autre agent pourra voir les modifications.

```js
let sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

### Mettre à jour et synchroniser la mémoire partagée avec les opérations atomiques

La mémoire partagée peut être créée et mise à jour de façon simultanée entre les <i lang="en">workers</i> et le <i lang="en">thread</i> d'exécution principal. Selon le système (le processeur, le système d'exploitation, le navigateur), cela peut prendre du temps avant que le changement soit propagé sur l'ensemble des contextes. Pour que la synchronisation s'effectue, on doit utiliser [des opérations atomiques](/fr/docs/Web/JavaScript/Reference/Global_Objects/Atomics).

### Les API qui utilisent des objets `SharedArrayBuffer`

- [`WebGLRenderingContext.bufferData()`](/fr/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/fr/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/fr/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Contraintes de sécurité

La mémoire partagée et les chronomètres de haute précision ont été [désactivés début 2018](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) suite à la vulnérabilité [Spectre](https://fr.wikipedia.org/wiki/Spectre_(vuln%C3%A9rabilit%C3%A9)). En 2020, une nouvelle approche, sécurisée, a été mise en place afin de réactiver la mémoire partagée. En suivant quelques règles de sécurité, [`postMessage()`](/fr/docs/Web/API/Window/postMessage) ne lève plus d'exception pour les objets `SharedArrayBuffer` et une mémoire partagée entre les <i lang="en">threads</i> est disponible.

Pour commencer, le document doit être mis à disposition dans [un contexte sécurisé](/fr/docs/Web/Security/Secure_Contexts).

Pour les documents de plus haut niveau, deux en-têtes HTTP doivent être utilisés pour isoler le site des origines tierces&nbsp;:

- [`Cross-Origin-Opener-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) avec la valeur `same-origin` (ce qui protège l'origine des éventuels attaquants)
- [`Cross-Origin-Embedder-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) avec la valeur `require-corp` (ce qui protège les éventuelles victimes de votre origine)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Pour vérifier si l'isolation envers les origines tierces a réussi, vous pouvez vérifier la propriété [`crossOriginIsolated`](/fr/docs/Web/API/crossOriginIsolated) qui est disponible dans les contextes de la fenêtre et des <i lang="en">workers</i>&nbsp;:

```js
if (crossOriginIsolated) {
  // on poste le SharedArrayBuffer
} else {
  // on fait autre chose
}
```

Voir aussi [les changements prévus quant à la mémoire partagée](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes) pour les différents navigateurs.

### Obligation d'utiliser l'opérateur `new`

Les constructeurs `SharedArrayBuffer` doivent être utilisés avec l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Si on appelle un constructeur `SharedArrayBuffer` comme une fonction, sans `new`, cela lèvera une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

```js example-bad
var sab = SharedArrayBuffer(1024);
// TypeError: appeler le constructeur natif SharedArrayBuffer sans
// new est interdit
```

```js example-good
var sab = new SharedArrayBuffer(1024);
```

## Constructeur

- [`SharedArrayBuffer()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer)
  - : Crée un nouvel objet `SharedArrayBuffer`.

## Propriétés des instances

- [`SharedArrayBuffer.prototype.byteLength`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength)
  - : La taille du tableau, exprimée en octets. Celle-ci est déterminée à la construction du tableau et ne peut pas être modifiée par la suite, elle est accessible **en lecture seule uniquement**.

## Méthodes des instances

- [`SharedArrayBuffer.prototype.slice(debut, fin)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice)
  - : Renvoie un nouvel objet `SharedArrayBuffer` dont le contenu et une copie des octets de l'objet `SharedArrayBuffer` courant entre l'indice de début (inclus) et l'indice de fin (exclus). Si l'un des deux indices est négatif, il est relatif à la fin du tableau plutôt qu'au début.

## Exemples

### Créer un nouvel objet `SharedArrayBuffer`

```js
let sab = new SharedArrayBuffer(1024);
```

### Découper un objet `SharedArrayBuffer`

```js
sab.slice();     // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2);    // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2);   // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

### Utiliser un tampon WebGL

```js
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, sab, gl.STATIC_DRAW);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Atomics`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
- [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
- [Les <i lang="en">Web Workers</i>](/fr/docs/Web/API/Web_Workers_API)
- [`parlib-simple`](https://github.com/lars-t-hansen/parlib-simple) — une bibliothèque qui fournit des abstractions pour synchroniser et distribuer des tâches
- [La mémoire partagée — un rapide tutoriel (en anglais)](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md)
- [<i lang="en">A Taste of JavaScript's New Parallel Primitives</i> — Mozilla Hacks (en anglais)](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)
