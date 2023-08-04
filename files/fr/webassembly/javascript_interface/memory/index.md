---
title: WebAssembly.Memory()
slug: WebAssembly/JavaScript_interface/Memory
---

{{WebAssemblySidebar}}

Le constructeur **`WebAssembly.Memory()`** crée un nouvel objet `Memory` dont la propriété {{jsxref("WebAssembly/Memory/buffer","buffer")}} est un {{jsxref("ArrayBuffer")}} redimensionnable qui contient les octets de mémoire bruts accessibles par une instance WebAssembly.

Un espace mémoire créé depuis du code JavaScript ou depuis du code WebAssembly sera accessible et modifiable (_mutable_) depuis JavaScript **et** depuis WebAssembly.

## Syntaxe

```js
var maMemoire = new WebAssembly.Memory(descripteurMemoire);
```

### Paramètres

- `descripteurMemoire`

  - : Un objet qui contient les propriétés suivantes :

    - `initial`
      - : La taille initiale de cet espace mémoire WebAssembly, exprimée en nombre de pages WebAssembly.
    - `maximum` {{optional_inline}}
      - : La taille maximale autorisée pour cet espace mémoire WebAssembly, exprimée en nombre de pages WebAssembly. Lorsque ce paramètre est utilisé, il est fournit comme indication au moteur pour que celui-ci réserve l'espace mémoire correspondant. Toutefois, le moteur peut choisir d'ignorer cette indication. Dans la plupart des cas, il n'est pas nécessaire d'indiquer un maximum pour les modules WebAssembly.

> **Note :** Une page mémoire WebAssembly correspond à une taille fixe de 65 536 octets, soit environ 64 Ko.

### Exceptions

- Si `descripteurMemoire` n'est pas un objet, une exception {{jsxref("TypeError")}} sera levée.
- Si `maximum` est indiqué et qu'il est inférieur à `initial`, une exception {{jsxref("RangeError")}} sera levée.

## Méthodes du constructeur `Memory`

Aucune.

## Instances de `Memory`

Toutes les instances de `Memory` héritent des propriétés du [prototype du constructeur](/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory/prototype) `Memory()` qui peut être utilisé afin de modifier le comportement de l'ensemble des instances de `Memory`.

### Propriétés

- `Memory.prototype.constructor`
  - : Renvoie la fonction qui a créé l'instance de l'objet. Par défaut, c'est le constructeur {{jsxref("WebAssembly.Memory()")}}.
- {{jsxref("WebAssembly/Memory/buffer","Memory.prototype.buffer")}}
  - : Une propriété d'accesseur qui renvoie le tampon contenu dans l'espace mémoire.

### Méthodes

- {{jsxref("WebAssembly/Memory/grow","Memory.prototype.grow()")}}
  - : Cette méthode permet d'augmenter la taille de l'espace mémoire d'un nombre de pages donné (dont chacune mesure 64 Ko).

## Exemples

Il existe deux façons de créer un objet `WebAssembly.Memory`. La première consiste à le créer explicitement en JavaScript. Avec l'instruction qui suit, on crée un espace mémoire avec une taille initiale de 10 pages (soit 640 Ko) et une taille maximale de 100 pages (soit 6,4 Mo).

```js
var memoire = new WebAssembly.Memory({ initial: 10, maximum: 100 });
```

La seconde méthode permettant d'obtenir un objet `WebAssembly.Memory` est de l'exporter depuis un module WebAssembly. Dans l'exemple suivant (cf. le fichier [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) sur GitHub ainsi que [le résultat obtenu](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) on récupère et on instancie le _bytecode_ `memory.wasm` grâce à la méthode {{jsxref("WebAssembly.instantiateStreaming()")}} tout en important la mémoire créée à la ligne précédente. Ensuite, on enregistre des valeurs au sein de cette mémoire puis on exporte une fonction qu'on utilise pour additionner certaines valeurs.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  var i32 = new Uint32Array(memory.buffer);
  for (var i = 0; i < 10; i++) {
    i32[i] = i;
  }
  var sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
