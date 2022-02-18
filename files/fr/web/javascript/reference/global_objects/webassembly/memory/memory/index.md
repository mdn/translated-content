---
title: Constructeur WebAssembly.Memory()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/Memory
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/Memory
browser-compat: javascript.builtins.WebAssembly.Memory.Memory
---
{{JSRef}}

Le constructeur **`WebAssembly.Memory()`** permet de créer un nouvel objet `Memory` dont la propriété [`buffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer) est un tableau tampon [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) redimensionnable ou un `SharedArrayBuffer` contenant les octets bruts de mémoire à laquelle accède une `Instance` WebAssembly.

Une mémoire créée par du code JavaScript ou WebAssembly sera accessible et modifiable depuis JavaScript ou WebAssembly.

## Syntaxe

```js
new WebAssembly.Memory(descripteurMemoire)
```

### Paramètres

- _descripteurMemoire_

  - : Un objet contenant les propriétés suivantes&nbsp;:

    - `initial`
      - : La taille initiale de la mémoire WebAssembly Memory, exprimée en nombre de pages WebAssembly.
    - `maximum` {{optional_inline}}
      - : La taille maximale que peut atteindre la mémoire WebAssembly, exprimée en nombre de pages WebAssembly. Lorsque ce paramètre est présent, il peut être utilisé comme indication par le moteur afin de réserver la mémoire d'avance. Toutefois, le moteur pourra ignorer cette réservation ou l'effectuer avec une taille moindre. Les mémoires WebAssembly qui ne sont pas partagées n'ont pas besoin de définir une propriété `maximum`, en revanche, c'est une propriété nécessaire pour les mémoires partagées.
    - `shared` {{optional_inline}}
      - : Une valeur booléenne qui définit si la mémoire est partagée ou non. Si elle vaut `true`, il s'agira d'une mémoire partagée. La valeur par défaut est `false`.

> **Note :** Une page WebAssembly mesure une taille constante de 65&nbsp;536 octets, soit 64Ko.

### Exceptions

- Si `descripteurMemoire` n'est pas un objet, une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) sera levée.
- Si `maximum` est indiqué et est inférieur à `initial`, une exception [`RangeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError) sera levée.

## Exemples

### Créer une nouvelle instance Memory

Il existe deux façons d'obtenir un objet `WebAssembly.Memory`. La première consiste à la construire depuis du code JavaScript. Dans l'exemple qui suit, on crée une nouvelle instance d'un objet `Memory` WebAssembly avec une taille initiale de 10 pages (640Ko) et une taille maximale de 100 pages (6,4Mo). Sa propriété [`buffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer) renverra un objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

```js
var memory = new WebAssembly.Memory({initial:10, maximum:100});
```

La deuxième méthode pour obtenir un objet `WebAssembly.Memory` consiste à l'exporter depuis un module WebAssembly. Dans l'exemple suivant (voir [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) sur GitHub pour le code source, ainsi que [la démonstration correspondante](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)), on récupère et on instancie le bytecode chargé memory.wasm avec la méthode [`WebAssembly.instantiateStreaming()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming) tout en important la mémoire créée à la ligne précédente. On stocke ensuite certaines valeurs dans cette mémoire et on exporte une fonction qu'on utilise pour additionner certaines des valeurs.

```js
WebAssembly.instantiateStreaming(fetch('memory.wasm'), { js: { mem: memory } })
.then(obj => {
  var i32 = new Uint32Array(memory.buffer);
  for (var i = 0; i < 10; i++) {
    i32[i] = i;
  }
  var sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

### Créer une mémoire partagée

Par défaut, les mémoires WebAssembly ne sont pas partagées. On peut créer une [mémoire partagée](/fr/docs/WebAssembly/Understanding_the_text_format) en passant `shared: true` dans l'objet d'initialisation du constructeur&nbsp;:

```js
let memory = new WebAssembly.Memory({initial:10, maximum:100, shared:true});
```

La propriété `buffer` de l'objet mémoire correspondant renverra alors un objet [`SharedArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La page  [WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
