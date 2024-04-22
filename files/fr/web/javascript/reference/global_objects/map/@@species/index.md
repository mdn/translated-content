---
title: get Map[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@species
---

{{JSRef}}

**`Map[@@species]`** renvoie le constructeur `Map`.

## Syntaxe

```js
Map[Symbol.species];
```

## Description

L'accesseur `species` renvoie le constructeur par défaut pour les objets `Map`. Les constructeurs des sous-classes peuvent surcharger ce constructeur afin de modifier ce qui est fait lors de la construction de l'objet et son affectation

## Exemples

La propriété `species` renvoie la fonction correspondant au constructeur par défaut. Pour les objets `Map`, ce sera le constructeur `Map` :

```js
Map[Symbol.species]; // function Map()
```

Pour des objets dérivés (par exemple un dictionnaire `MaMap` que vous auriez construit), la propriété `species` correspondra au constructeur `MaMap`. Si vous souhaitez surcharger cela pour renvoyer le constructeur parent `Map`, vous pourrez utiliser :

```js
class MaMap extends Map {
  // On surcharge le symbole species de MaMap
  // avec le constructeur Map parent
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

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
