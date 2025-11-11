---
title: "Array : propriété [Symbol.unscopables]"
short-title: "[Symbol.unscopables]"
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété de données **`[Symbol.unscopables]`** de `Array.prototype` est partagée par toutes les instances de {{JSxRef("Array")}}. Elle contient les noms de propriétés qui n'étaient pas inclus dans la norme ECMAScript avant la version ES2015 et qui sont ignorés lors de la liaison avec l'instruction {{JSxRef("Statements/with", "with")}}.

## Valeur

Un [objet à prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objet_à_prototype_null) avec les noms de propriétés donnés ci-dessous et leurs valeurs fixées à `true`.

{{js_property_attributes(0, 0, 1)}}

## Description

Les propriétés par défaut de `Array` qui sont ignorées lors de la liaison avec l'instruction `with` sont&nbsp;:

- {{JSxRef("Array.at()")}}
- {{JSxRef("Array.copyWithin()")}}
- {{JSxRef("Array.entries()")}}
- {{JSxRef("Array.fill()")}}
- {{JSxRef("Array.find()")}}
- {{JSxRef("Array.findIndex()")}}
- {{JSxRef("Array.findLast()")}}
- {{JSxRef("Array.findLastIndex()")}}
- {{JSxRef("Array.flat()")}}
- {{JSxRef("Array.flatMap()")}}
- {{JSxRef("Array.includes()")}}
- {{JSxRef("Array.keys()")}}
- {{JSxRef("Array.toReversed()")}}
- {{JSxRef("Array.toSorted()")}}
- {{JSxRef("Array.toSpliced()")}}
- {{JSxRef("Array.values()")}}

`Array.prototype[Symbol.unscopables]` est un objet vide ne contenant que tous les noms de propriétés ci-dessus avec la valeur `true`. Son [prototype est `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), donc les propriétés de `Object.prototype` comme [`toString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) ne seront pas rendues involontairement non accessibles, et un appel à `toString()` dans une instruction `with` continuera d'être appelé sur le tableau.

Voir {{JSxRef("Symbol.unscopables")}} pour savoir comment définir des propriétés non accessibles pour vos propres objets.

## Exemples

Imaginez que l'appel à `values.push('something')` ci-dessous se trouve dans un code écrit avant ECMAScript 2015.

```js
var values = [];

with (values) {
  values.push("something");
}
```

Lorsque ECMAScript 2015 a introduit la méthode {{JSxRef("Array.prototype.values()")}}, l'instruction `with` dans le code ci-dessus a commencé à interpréter `values` comme la méthode de tableau `values.values` au lieu de la variable externe `values`. L'appel à `values.push('something')` échouerait car il accède maintenant à `push` sur la méthode `values.values`. Cela a provoqué un bug signalé à Firefox ([Bug Firefox 883914 <sup>(angl.)</sup>](https://bugzil.la/883914)).

Ainsi, la propriété de données `[Symbol.unscopables]` de `Array.prototype` fait en sorte que les propriétés de `Array` introduites dans ECMAScript 2015 soient ignorées lors de la liaison avec l'instruction `with` — permettant au code écrit avant ECMAScript 2015 de continuer à fonctionner comme prévu, plutôt que de casser.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- L'instruction {{JSxRef("Statements/with", "with")}}
- La propriété {{JSxRef("Symbol.unscopables")}}
- [Prothèse d'émulation de `Array.prototype[Symbol.unscopables]` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
