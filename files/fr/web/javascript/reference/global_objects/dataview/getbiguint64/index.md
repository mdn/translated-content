---
title: "DataView : méthode getBigUint64()"
short-title: getBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getBigUint64()`** des instances de {{JSxRef("DataView")}} lit 8 octets à partir du décalage d'octet défini de cette `DataView` et les interprète comme un entier non-signé sur 64 bits. Il n'y a pas de contrainte d'alignement&nbsp;; les valeurs sur plusieurs octets peuvent être obtenues depuis n'importe quel décalage valide.

{{InteractiveExample("Démonstration JavaScript&nbsp;: DataView.prototype.getBigUint64()")}}

```js interactive-example
// Créer un ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);

// Valeur BigInt maximale possible qui tient dans un entier non-signé sur 64 bits
const max = 2n ** 64n - 1n;

const view = new DataView(buffer);
view.setBigUint64(1, max);

console.log(view.getBigUint64(1));
// Résultat attendu : 18446744073709551615n
```

## Syntaxe

```js-nolint
getBigUint64(byteOffset)
getBigUint64(byteOffset, littleEndian)
```

### Paramètres

- `byteOffset`
  - : La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.
- `littleEndian` {{Optional_Inline}}
  - : Indique si la valeur sur 64 bits est enregistrée dans l'ordre des octets {{Glossary("Endianness", "gros-boutiste ou petit-boutiste")}}. Si le paramètre vaut `false` ou `undefined`, la valeur gros-boutiste sera lue.

### Valeur de retour

Une valeur {{JSxRef("BigInt")}} comprise entre 0 et 2<sup>64</sup>-1 inclus.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le paramètre `byteOffset` est défini de façon à lire au-delà de la fin de la vue.

## Exemples

### Utiliser la méthode `getBigUint64()`

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getBigUint64(1)); // 72623859790382856n
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des tableaux typés JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("DataView")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("BigUint64Array")}}
