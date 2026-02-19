---
title: "DataView : propriété byteOffset"
short-title: byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

La propriété accesseur **`byteOffset`** des instances de {{JSxRef("DataView")}} retourne le décalage (en octets) de la vue du début de l'objet {{JSxRef("ArrayBuffer")}} ou {{JSxRef("SharedArrayBuffer")}} correspondant.

{{InteractiveExample("Démonstration JavaScript&nbsp;: DataView.prototype.byteOffset")}}

```js interactive-example
// Créer un ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer, 12, 4); // À partir de l'octet 12 pour les 4 octets suivants

console.log(view.byteOffset);
// Résultat attendu : 12
```

## Description

La propriété `byteOffset` est une propriété accesseur dont la fonction d'accesseur d'écriture est `undefined`, ce qui signifie que vous pouvez uniquement lire cette propriété. La valeur est définie lors de la construction du `DataView` et ne peut pas être modifiée. Cependant, la valeur de `byteOffset` devient 0 si le tampon sous-jacent est redimensionné de sorte que la plage visualisée n'est plus valide.

## Exemples

### Utiliser la propriété `byteOffset`

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteOffset; // 0 (aucun décalage)

const dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (décalage défini lors de la construction de la vue)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const dataviewLengthTracking = new DataView(buffer2, 4);
dataviewLengthTracking.byteOffset; // 4
buffer2.resize(3);
dataviewLengthTracking.byteOffset; // 0 (la plage visualisée n'est plus valide)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des tableaux typés JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("DataView")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("SharedArrayBuffer")}}
