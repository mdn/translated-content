---
title: "DataView : méthode getUint32()"
short-title: getUint32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint32
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getUint32()`** des instances de {{JSxRef("DataView")}} lit 4 octets à partir du décalage d'octet défini de cette `DataView` et les interprète comme un entier non-signé sur 32 bits. Il n'y a pas de contrainte d'alignement&nbsp;; les valeurs sur plusieurs octets peuvent être obtenues depuis n'importe quel décalage valide.

{{InteractiveExample("Démonstration JavaScript&nbsp;: DataView.prototype.getUint32()")}}

```js interactive-example
// Créer un ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint32(1, 4294967295); // Entier non-signé sur 32 bits maximum

console.log(view.getUint32(1));
// Résultat attendu : 4294967295
```

## Syntaxe

```js-nolint
getUint32(byteOffset)
getUint32(byteOffset, littleEndian)
```

### Paramètres

- `byteOffset`
  - : La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.
- `littleEndian` {{Optional_Inline}}
  - : Indique si les données sont stockées au format {{Glossary("Endianness", "gros-boutiste ou petit-boutiste")}}. Si la valeur est `false` ou `undefined`, une valeur gros-boutiste est lue.

### Valeur de retour

Un entier compris entre 0 et 4294967295 inclus.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le paramètre `byteOffset` est défini de façon à lire au-delà de la fin de la vue.

## Exemples

### Utiliser la méthode `getUint32()`

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getUint32(1)); // 16909060
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des tableaux typés JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("DataView")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("Uint32Array")}}
