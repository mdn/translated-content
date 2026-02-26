---
title: "DataView : méthode getInt8()"
short-title: getInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt8
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getInt8()`** des instances de {{JSxRef("DataView")}} lit 1 octet au décalage d'octet défini de cette `DataView` et l'interprète comme un entier signé sur 8 bits.

{{InteractiveExample("Démonstration JavaScript&nbsp;: DataView.prototype.getInt8()")}}

```js interactive-example
// Créer un ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt8(1, 127); // Entier signé sur 8 bits maximum

console.log(view.getInt8(1));
// Résultat attendu : 127
```

## Syntaxe

```js-nolint
getInt8(byteOffset)
```

### Paramètres

- `byteOffset`
  - : La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.

### Valeur de retour

Un entier compris entre -128 et 127 inclus.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le paramètre `byteOffset` est défini de façon à lire au-delà de la fin de la vue.

## Exemples

### Utiliser la méthode `getInt8()`

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getInt8(1)); // 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des tableaux typés JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("DataView")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("Int8Array")}}
