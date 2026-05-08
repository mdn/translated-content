---
title: WebAssembly.Memory()
slug: WebAssembly/Reference/JavaScript_interface/Memory
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

L'objet **`WebAssembly.Memory`** est un {{JSxRef("ArrayBuffer")}} ou {{JSxRef("SharedArrayBuffer")}} redimensionnable qui contient des octets bruts de mémoire accessibles par un objet [`WebAssembly.Instance`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Instance).

WebAssembly et JavaScript permettent tous deux de créer des objets `Memory`.
Si vous souhaitez accéder à la mémoire créée en JS depuis WebAssembly, ou inversement, vous pouvez exporter la mémoire du module vers JavaScript ou importer la mémoire de JavaScript vers le module lors de son [instanciation](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static).

À l'origine, vous ne pouviez effectuer des opérations de mémoire que sur une seule mémoire dans le module Wasm, donc bien que plusieurs objets `Memory` puissent être créés, cela n'avait aucun intérêt.
Les implémentations plus récentes permettent aux [instructions de mémoire](/fr/docs/WebAssembly/Reference/Memory) de WebAssembly d'opérer sur une mémoire définie.
Pour plus d'informations, voir [Mémoires multiples](/fr/docs/WebAssembly/Guides/Understanding_the_text_format#multiple_memories) dans _Comprendre le format texte WebAssembly_.

> [!NOTE]
> La mémoire WebAssembly est toujours au format petit-boutiste, quel que soit la plateforme sur laquelle elle est exécutée. Par conséquent, pour des raisons de portabilité, vous devez lire et écrire des valeurs multi-octets en JavaScript en utilisant {{JSxRef("DataView")}}.

## Constructeur

- [`WebAssembly.Memory()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)
  - : Crée un nouvel objet `Memory`.

## Propriétés d'instance

- [`Memory.prototype.buffer`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : Retourne le tampon contenu dans la mémoire.

## Méthodes d'instance

- [`Memory.prototype.grow()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)
  - : Augmente la taille de l'instance de mémoire d'un nombre défini de pages WebAssembly (chacune de 64 KiB). Détache le `buffer` précédent.

## Exemples

### Créer un nouvel objet `Memory`

Il existe deux façons d'obtenir un objet `WebAssembly.Memory`. La première consiste à le construire à partir de JavaScript. L'extrait suivant crée une nouvelle instance de mémoire WebAssembly avec une taille initiale de 10 pages (640 KiB) et une taille maximale de 100 pages (6,4 MiB). Sa propriété [`buffer`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) retourne un {{JSxRef("ArrayBuffer")}}.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

L'exemple suivant (voir [memory.html <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) sur GitHub, et [la voir en direct <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) récupère et instancie le code binaire chargé «&nbsp;memory.wasm&nbsp;» en utilisant la fonction [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), tout en important la mémoire créée à la ligne ci-dessus. Il stocke ensuite des valeurs dans cette mémoire, exporte une fonction, et utilise la fonction exportée pour additionner ces valeurs. Notez l'utilisation de {{JSxRef("DataView")}} pour accéder à la mémoire afin d'utiliser toujours le format petit-boutiste.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  const summands = new DataView(memory.buffer);
  for (let i = 0; i < 10; i++) {
    summands.setUint32(i * 4, i, true); // WebAssembly est petit boutiste
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

Une autre façon d'obtenir un objet `WebAssembly.Memory` est de l'avoir exporté par un module WebAssembly. Cette mémoire peut être accédée dans la propriété `exports` de l'instance WebAssembly (après que la mémoire ait été exportée dans le module WebAssembly). L'exemple suivant importe une mémoire exportée depuis WebAssembly avec le nom `memory`, puis affiche le premier élément de la mémoire, interprété comme un {{JSxRef("Uint32Array")}}.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new DataView(obj.instance.exports.memory.buffer);
  console.log(values.getUint32(0, true));
});
```

### Créer une mémoire partagée

Par défaut, les mémoires WebAssembly ne sont pas partagées. Vous pouvez créer une [mémoire partagée](/fr/docs/WebAssembly/Guides/Understanding_the_text_format#mémoires_partagées) depuis JavaScript en passant `shared: true` dans l'objet d'initialisation du constructeur&nbsp;:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

La propriété `buffer` de cette mémoire retournera un objet {{JSxRef("SharedArrayBuffer")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Un aperçu de [WebAssembly](/fr/docs/WebAssembly)
- [Les concepts associés à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
