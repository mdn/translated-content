---
title: "ArrayBuffer : méthode statique isView()"
short-title: isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`ArrayBuffer.isView()`** détermine si la valeur passée est une des vues d'`ArrayBuffer`, comme les [objets de tableau typé](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) ou un objet {{JSxRef("DataView")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: ArrayBuffer.isView()", "shorter")}}

```js interactive-example
// Crée un objet ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);

console.log(ArrayBuffer.isView(new Int32Array()));
// Résultat attendu : true
```

## Syntaxe

```js-nolint
ArrayBuffer.isView(value)
```

### Paramètres

- `value`
  - : La valeur à vérifier.

### Valeur de retour

`true` si l'argument donné est une des vues de {{JSxRef("ArrayBuffer")}}&nbsp;; sinon, `false`.

## Exemples

```js
ArrayBuffer.isView(); // false
ArrayBuffer.isView([]); // false
ArrayBuffer.isView({}); // false
ArrayBuffer.isView(null); // false
ArrayBuffer.isView(undefined); // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array()); // true
ArrayBuffer.isView(new Float32Array()); // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

const buffer = new ArrayBuffer(2);
const dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
