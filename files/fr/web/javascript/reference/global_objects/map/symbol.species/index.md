---
title: Map[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété inutilisée d'accesseur statique **`Map[Symbol.species]`** définit le constructeur à utiliser lors de la création de nouvelles instances dérivées d'une sous-classe de `Map`.

## Syntaxe

```js-nolint
Map[Symbol.species]
```

### Valeur de retour

La valeur du constructeur (`this`) sur lequel `get [Symbol.species]` a été appelé. La valeur de retour est utilisée pour construire des instances copiées de `Map`.

## Description

La propriété d'accesseur `[Symbol.species]` retourne le constructeur par défaut pour les objets `Map`. Les constructeurs des sous-classes peuvent le surcharger pour modifier l'affectation du constructeur.

> [!NOTE]
> Cette propriété n'est actuellement utilisée par aucune méthode de `Map`.

## Exemples

### Espèce dans les objets ordinaires

La propriété `[Symbol.species]` retourne la fonction constructeur par défaut, qui est le constructeur `Map` pour `Map`.

```js
Map[Symbol.species]; // function Map()
```

### Espèce dans les objets dérivés

Dans une instance d'une sous-classe personnalisée de `Map`, telle que `MaMap`, l'espèce de `MaMap` est le constructeur `MaMap`. Cependant, vous pouvez souhaiter remplacer cette valeur afin de retourner des objets `Map` parent dans les méthodes de votre sous-classe&nbsp;:

```js
class MaMap extends Map {
  // Surcharger l'espèce MaMap pour utiliser le constructeur parent Map
  static get [Symbol.species]() {
    return Map;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Map")}}
- La propriété statique {{JSxRef("Symbol.species")}}
