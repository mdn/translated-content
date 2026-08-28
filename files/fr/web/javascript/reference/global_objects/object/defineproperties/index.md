---
title: "Object : méthode statique defineProperties()"
short-title: defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.defineProperties()`** définit de nouvelles propriétés ou modifie des propriétés existantes directement sur un objet, en renvoyant l'objet.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.defineProperties()")}}

```js interactive-example
const object = {};

Object.defineProperties(object, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object.property1);
// Résultat attendu : 42
```

## Syntaxe

```js-nolint
Object.defineProperties(obj, props)
```

### Paramètres

- `obj`
  - : L'objet sur lequel définir ou modifier des propriétés.
- `props`
  - : Un objet dont les clés représentent les noms des propriétés à définir ou à modifier et dont les valeurs sont des objets décrivant ces propriétés. Chaque valeur dans `props` doit être soit un descripteur de données, soit un descripteur d'accesseur&nbsp;; elle ne peut pas être les deux (voir {{JSxRef("Object.defineProperty()")}} pour plus de détails).

    Les descripteurs de données et les descripteurs d'accesseurs peuvent éventuellement contenir les clés suivantes&nbsp;:
    - `configurable`
      - : `true` si et seulement si le type de ce descripteur de propriété peut être modifié et si la propriété peut être supprimée de l'objet correspondant.
        **Par défaut sur `false`.**
    - `enumerable`
      - : `true` si et seulement si cette propriété apparaît lors de l'énumération des propriétés de l'objet correspondant.
        **Par défaut sur `false`.**

    Un descripteur de données possède également les clés optionnelles suivantes&nbsp;:
    - `value`
      - : La valeur associée à la propriété. Peut être n'importe quelle valeur JavaScript valide (nombre, objet, fonction, etc.).
        **Par défaut sur {{JSxRef("undefined")}}.**
    - `writable`
      - : `true` si et seulement si la valeur associée à la propriété peut être modifiée avec un {{JSxRef("Operators#opérateurs_daffectation", "opérateur d'affectation", "", 1)}}.
        **Par défaut sur `false`.**

    Un descripteur d'accesseur possède également les clés optionnelles suivantes&nbsp;:
    - `get`
      - : Une fonction qui sert d'accesseur pour la propriété, ou {{JSxRef("undefined")}} s'il n'y a pas d'accesseur. La valeur de retour de la fonction est utilisée comme valeur de la propriété.
        **Par défaut sur {{JSxRef("undefined")}}.**
    - `set`
      - : Une fonction qui sert de mutateur pour la propriété, ou {{JSxRef("undefined")}} s'il n'y a pas de mutateur. La fonction reçoit comme seul argument la nouvelle valeur assignée à la propriété.
        **Par défaut sur {{JSxRef("undefined")}}.**

    Si un descripteur ne possède aucune des clés `value`, `writable`, `get` et `set`, il est traité comme un descripteur de données. Si un descripteur possède à la fois les clés `value` ou `writable` et les clés `get` ou `set`, une exception est levée.

### Valeur de retour

L'objet passé à la fonction, éventuellement modifié.

## Exemples

### Utiliser `Object.defineProperties()`

```js
const obj = {};
Object.defineProperties(obj, {
  propriete1: {
    value: true,
    writable: true,
  },
  propriete2: {
    value: "Bonjour",
    writable: false,
  },
  // etc. etc.
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.defineProperties` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- [La prothèse d'émulation es-shims de `Object.defineProperties` <sup>(angl.)</sup>](https://www.npmjs.com/package/object.defineproperties)
- La méthode statique {{JSxRef("Object.defineProperty()")}}
- La méthode statique {{JSxRef("Object.keys()")}}
- [Détention et énumération des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
