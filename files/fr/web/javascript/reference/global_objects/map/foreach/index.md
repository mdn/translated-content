---
title: "Map : méthode forEach()"
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`forEach()`** des instances de {{JSxRef("Map")}} exécute une fonction fournie une fois pour chaque paire clé/valeur de cette `Map`, dans l'ordre d'insertion.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.forEach()")}}

```js interactive-example
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map([
  ["toto", 3],
  ["truc", {}],
  ["tata", undefined],
]).forEach(logMapElements);

// Sortie attendue : "m[toto] = 3"
// Sortie attendue : "m[truc] = [object Object]"
// Sortie attendue : "m[tata] = undefined"
```

## Syntaxe

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque entrée du tableau associatif. La fonction est appelée avec les arguments suivants&nbsp;:
    - `value`
      - : Valeur de chaque itération.
    - `key`
      - : Clé de chaque itération.
    - `map`
      - : Le tableau associatif parcouru.
- `thisArg` {{Optional_Inline}}
  - : Une valeur à utiliser comme `this` lors de l'exécution de `callbackFn`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Description

La méthode `forEach` exécute la fonction `callback` donnée sur chacune des clés qui existe. Elle n'est pas appelée pour les clés qui ont été supprimées. En revanche, elle est appelée pour les valeurs qui sont présentes mais qui sont égales à `undefined`.

`callback` est appelé avec **trois arguments**&nbsp;:

- l'entrée `value`
- l'entrée `key`
- **l'objet `Map`** parcouru

Si un argument `thisArg` est fourni à la méthode `forEach`, il sera passé au `callback` quand il sera appelé et celui-ci l'utilisera comme valeur `this`. Dans les autres cas, la valeur `undefined` sera utilisée comme contexte `this`. La valeur `this` observée par la fonction `callback` est déterminée selon [les règles appliquées à l'opérateur `this`](/fr/docs/Web/JavaScript/Reference/Operators/this).

Chacune des valeurs sera traitée une fois sauf si celle-ci a été supprimée puis réajoutée avant la fin de `forEach`. `callback` n'est pas appelé pour les valeurs qui sont supprimés avant le passage de la fonction. Les valeurs qui sont ajoutées avant que `forEach` ait parcouru l'ensemble seront traitées.

## Exemples

### Afficher le contenu d'un objet `Map`

Le fragment de code suivant enregistre une ligne pour chaque élément d'un objet `Map`&nbsp;:

```js
function logMapElements(valeur, cle, tableAssoc) {
  console.log(`tableAssoc.get('${cle}') = ${valeur}`);
}

new Map([
  ["toto", 3],
  ["truc", {}],
  ["bidule", undefined],
]).forEach(logMapElements);
// Affiche :
// "tableAssoc.get('toto') = 3"
// "tableAssoc.get('truc') = [object Object]"
// "tableAssoc.get('bidule') = undefined"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Array.prototype.forEach()")}}
- La méthode {{JSxRef("Set.prototype.forEach()")}}
