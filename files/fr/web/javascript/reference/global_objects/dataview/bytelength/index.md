---
title: "DataView : propriété byteLength"
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

La propriété accesseur **`byteLength`** des instances de {{JSxRef("DataView")}} retourne la longueur (en octets) de cette vue.

{{InteractiveExample("Démonstration JavaScript&nbsp;: DataView.prototype.byteLength")}}

```js interactive-example
// Créer un ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);

const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // À partir de l'octet 12 pour les 4 octets suivants

console.log(view1.byteLength + view2.byteLength); // 16 + 4
// Résultat attendu : 20
```

## Description

La propriété `byteLength` est une propriété accesseur dont la fonction d'accesseur d'écriture est `undefined`, ce qui signifie que vous pouvez uniquement lire cette propriété. Si le `DataView` est [un suivi de la longueur](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#comportement_lors_de_laffichage_dun_tampon_redimensionnable), alors sa longueur dépend de la longueur du tampon sous-jacent, et peut changer si le tampon est redimensionné. Sinon, la valeur est définie lors de la construction du `DataView` et ne peut pas être modifiée. Que le suivi de longueur soit activé ou non, la valeur de `byteLength` devient 0 si le tampon sous-jacent est redimensionné de sorte que la plage visualisée n'est plus valide.

## Exemples

### Utiliser la propriété `byteLength`

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteLength; // 8 (correspond au byteLength du buffer)

const dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (correspond à la longueur utilisée pour la définition)

const dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (en raison du décalage (offset) pour la construction du DataView)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const dataviewLengthTracking = new DataView(buffer2, 4);
dataviewLengthTracking.byteLength; // 12 (16 - 4)
buffer2.resize(20);
dataviewLengthTracking.byteLength; // 16 (20 - 4)
buffer2.resize(3);
dataviewLengthTracking.byteLength; // 0 (la plage visualisée n'est plus valide)
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
