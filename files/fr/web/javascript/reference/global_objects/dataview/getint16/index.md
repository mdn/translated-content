---
title: "DataView : méthode getInt16()"
short-title: getInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getInt16()`** des instances de {{JSxRef("DataView")}} lit 2 octets à partir du décalage d'octet défini de cette `DataView` et les interprète comme un entier signé sur 16 bits. Il n'y a pas de contrainte d'alignement&nbsp;; les valeurs sur plusieurs octets peuvent être obtenues depuis n'importe quel décalage valide.

{{InteractiveExample("Démonstration JavaScript&nbsp;: DataView.prototype.getInt16()")}}

```js interactive-example
// Créer un ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt16(1, 32767); // Entier signé sur 16 bits maximum

console.log(view.getInt16(1));
// Résultat attendu : 32767
```

## Syntaxe

```js-nolint
getInt16(byteOffset)
getInt16(byteOffset, littleEndian)
```

### Paramètres

- `byteOffset`
  - : La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.
- `littleEndian` {{Optional_Inline}}
  - : Indique si les données sont stockées au format {{Glossary("Endianness", "gros-boutiste ou petit-boutiste")}}. Si la valeur est `false` ou `undefined`, une valeur gros-boutiste est lue.

### Valeur de retour

Un entier compris entre -32768 et 32767 inclus.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le paramètre `byteOffset` est défini de façon à lire au-delà de la fin de la vue.

## Exemples

### Utiliser la méthode `getInt16()`

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getInt16(1)); // 258
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des tableaux typés JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("DataView")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("Int16Array")}}
