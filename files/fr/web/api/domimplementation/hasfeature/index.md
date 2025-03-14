---
title: DOMImplementation.hasFeature()
slug: Web/API/DOMImplementation/hasFeature
---

{{ApiRef("DOM")}}

{{deprecated_header()}}

La méthode **`DOMImplementation.hasFeature()`** renvoie un {{domxref("Boolean")}} (_booléen_) indiquant si une fonctionnalité donnée est prise en charge. Cette méthode est dépréciée et les navigateurs modernes renvoient `true` (_vrai_) dans tous les cas.

Les différentes implémentations ont été assez divergentes quant au type de caractéristiques signalées. La dernière version de la spécification a décidé de forcer cette méthode à toujours renvoyer `true`, là où la fonctionnalité était précisée et utilisée.

## Syntaxe

```js
flag = document.implementation.hasFeature(feature, version);
```

### Paramètres

- _feature_
  - : est une {{domxref("DOMString")}} (_chaîne de caractères_) représentant le nom de la fonctionnalité.
- _version_
  - : est une {{domxref("DOMString")}} (_chaîne de caractères_) représentant la version de la spécification définissant la fonctionnalité.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("DOMImplementation")}} à laquelle elle est appartient.
