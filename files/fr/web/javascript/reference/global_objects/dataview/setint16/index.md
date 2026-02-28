---
title: "DataView : méthode setInt16()"
short-title: setInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`setInt16()`** des instances de {{JSxRef("DataView")}} prend un nombre et l'enregistre comme un entier signé sur 16 bits dans les 2 octets à partir du décalage d'octet défini de cette `DataView`. Il n'y a pas de contrainte d'alignement&nbsp;; les valeurs sur plusieurs octets peuvent être enregistrées à n'importe quel décalage valide.

{{InteractiveExample("Démonstration JavaScript&nbsp;: DataView.prototype.setInt16()")}}

```js interactive-example
// Créer un ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt16(1, 32767); // Valeur maximale pour un entier signé sur 16 bits

console.log(view.getInt16(1));
// Résultat attendu : 32767
```

## Syntaxe

```js-nolint
setInt16(byteOffset, value)
setInt16(byteOffset, value, littleEndian)
```

### Paramètres

- `byteOffset`
  - : Le décalage, en octets, depuis le début de la vue où enregistrer la donnée.
- `value`
  - : La valeur à enregistrer comme {{JSxRef("BigInt")}}. Pour savoir comment la valeur est encodée en octets, voir [Encodage et normalisation des valeurs](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#encodage_et_normalisation_des_valeurs).
- `littleEndian` {{Optional_Inline}}
  - : Indique si les données sont stockées au format {{Glossary("Endianness", "gros-boutiste ou petit-boutiste")}}. Si la valeur est `false` ou `undefined`, une valeur gros-boutiste est écrite.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le paramètre `byteOffset` est défini de façon à enregistrer au-delà de la fin de la vue.

## Exemples

### Utiliser la méthode `setInt16()`

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt16(0, 3);
dataview.getInt16(1); // 768
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
