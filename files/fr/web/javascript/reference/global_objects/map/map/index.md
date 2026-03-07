---
title: Constructeur Map()
short-title: Map()
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
l10n:
  sourceCommit: 1d905454be7d8910d5e3b33f0c22d063fe212816
---

Le **constructeur `Map()`** permet de créer des objets {{JSxRef("Map")}}.

## Syntaxe

```js-nolint
new Map()
new Map(iterable)
```

> [!NOTE]
> `Map()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` génère une {{JSxRef("TypeError")}}.

### Paramètres

- `iterable` {{Optional_Inline}}
  - : Si un [objet itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) (comme un tableau) est passé, tous ses éléments seront ajoutés au nouvel objet `Map`. Chaque élément doit être un objet avec deux propriétés&nbsp;: `0` et `1`, qui correspondent à la clé et à la valeur (par exemple, `[[1, "un"],[2, "deux"]]`). Si vous ne définissez pas ce paramètre, ou si sa valeur est `null` ou `undefined`, le nouvel objet `Map` est vide.

## Exemples

### Créer un nouvel objet `Map`

```js
const maMap = new Map([
  [1, "un"],
  [2, "deux"],
  [3, "trois"],
]);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Map` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#map)
- [Prothèse d'émulation es-shims de `Map` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-map)
- L'objet {{JSxRef("Set")}}
- L'objet {{JSxRef("WeakMap")}}
- L'objet {{JSxRef("WeakSet")}}
