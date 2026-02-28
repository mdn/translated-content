---
title: "DataView : méthode getFloat32()"
short-title: getFloat32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat32
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getFloat32()`** des instances de {{JSxRef("DataView")}} lit 4 octets à partir du décalage d'octet défini de cette `DataView` et les interprète comme un nombre flottant sur 32 bits. Il n'y a pas de contrainte d'alignement&nbsp;; les valeurs sur plusieurs octets peuvent être obtenues depuis n'importe quel décalage valide.

{{InteractiveExample("Démonstration JavaScript&nbsp;: DataView.prototype.getFloat32()")}}

```js interactive-example
// Créer un ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat32(1, Math.PI);

console.log(view.getFloat32(1));
// Résultat attendu : 3.1415927410125732
```

## Syntaxe

```js-nolint
getFloat32(byteOffset)
getFloat32(byteOffset, littleEndian)
```

### Paramètres

- `byteOffset`
  - : La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.
- `littleEndian` {{Optional_Inline}}
  - : Indique si les données sont stockées au format {{Glossary("Endianness", "gros-boutiste ou petit-boutiste")}}. Si la valeur est `false` ou `undefined`, une valeur gros-boutiste est lue.

### Valeur de retour

Un nombre flottant compris entre `-3.4e38` et `3.4e38`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le paramètre `byteOffset` est défini de façon à lire au-delà de la fin de la vue.

## Exemples

### Utiliser la méthode `getFloat32()`

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getFloat32(1)); // 2.387939260590663e-38
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des tableaux typés JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("DataView")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("Float32Array")}}
