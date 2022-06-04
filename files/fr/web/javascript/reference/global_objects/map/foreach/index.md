---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/forEach
original_slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
---
{{JSRef}}

La méthode **`forEach()`** exécute une fonction donnée sur chaque élément clé-valeur de l'objet `Map` dans l'ordre d'insertion.

{{EmbedInteractiveExample("pages/js/map-prototype-foreach.html")}}

## Syntaxe

```js
maMap.forEach(callback[, thisArg])
```

### Paramètres

- `callback`
  - : La fonction à exécuter pour chaque élément.
- `thisArg`
  - : La valeur à utiliser comme contexte `this` lors de l'exécution de `callback`.

### Valeur de retour

{{jsxref("undefined")}}

## Description

La méthode `forEach` exécute la fonction `callback` donnée sur chacune des clés qui existe. Elle n'est pas appelée pour les clés qui ont été supprimées. En revanche, elle est appelée pour les valeurs qui sont présentes mais qui sont égales à `undefined`.

`callback` est appelé avec **trois arguments** :

- la **valeur de l'élément**
- la **clé de l'élément**
- l'objet **`Map` parcouru**

Si un argument `thisArg` est fourni à la méthode `forEach`, il sera passé au `callback` quand il sera appelé et celui-ci l'utilisera comme valeur `this`. Dans les autres cas, la valeur `undefined` sera utilisée comme contexte `this`. La valeur `this` observée par la fonction `callback` est déterminée selon [les règles appliquées à l'opérateur `this`](/fr/docs/JavaScript/Reference/Opérateurs/Opérateurs_spéciaux/L'opérateur_this).

Chacune des valeurs sera traitée une fois sauf si celle-ci a été supprimée puis réajoutée avant la fin de `forEach`. `callback` n'est pas appelé pour les valeurs qui sont supprimés avant le passage de la fonction. Les valeurs qui sont ajoutées avant que `forEach` ait parcouru l'ensemble seront traitées.

`forEach` exécute la fonction `callback` une fois pour chaque élément de l'objet `Map` : il ne renvoie pas de valeur.

## Exemples

Le fragment de code suivant enregistre une ligne pour chaque élément d'un objet` Map `:

```js
function logMapElements(valeur, clé, map) {
    console.log(`map.get('${clé}') = ${value}`);
}


new Map([["toto", 3], ["truc", {}], ["bidule", undefined]]).forEach(logMapElements);
// affichera dans la console :
// "map.get('toto') = 3"
// "map.get('truc') = [object Object]"
// "map.get('bidule') = undefined"
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-map.prototype.foreach', 'Map.prototype.forEach')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-map.prototype.foreach', 'Map.prototype.forEach')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Map.forEach")}}

## Voir aussi

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
