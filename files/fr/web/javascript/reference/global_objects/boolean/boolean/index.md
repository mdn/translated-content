---
title: Constructeur Boolean()
short-title: Boolean()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le **constructeur `Boolean()`** permet de créer des objets [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean).

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur Boolean()")}}

```js interactive-example
const flag = new Boolean();
console.log(typeof flag);
// Sortie attendue : object
console.log(flag === false);
// Sortie attendue : false

const flag2 = Boolean();
console.log(typeof flag2);
// Sortie attendue : boolean
console.log(flag2 === false);
// Sortie attendue : true
```

## Syntaxe

```js-nolint
new Boolean(value)
Boolean(value)
```

> [!NOTE]
> `Boolean()` peut être appelé avec ou sans [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new), mais avec des effets différents. Voir [Valeur de retour](#valeur_de_retour).

### Paramètres

- `value`
  - : La valeur initiale de l'objet `Boolean`.

### Valeur de retour

Lorsque `Boolean()` est appelé comme une fonction (sans [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new)), il retourne `value` [converti en valeur primitive booléenne](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean#conversion_en_booléen).

Lorsque `Boolean()` est appelé comme constructeur (avec `new`), il convertit `value` en valeur primitive booléenne et retourne un objet {{JSxRef("Boolean")}} enveloppant, qui **n'est pas** une valeur primitive.

> [!WARNING]
> Vous ne devriez presque jamais utiliser `Boolean` comme constructeur.

## Description

La valeur passée en premier paramètre est [convertie en valeur booléenne](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean#conversion_en_booléen). Si la valeur est omise ou vaut `0`, `-0`, `0n`, [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null), `false`, {{JSxRef("NaN")}}, {{JSxRef("undefined")}}, ou la chaîne vide (`""`), alors l'objet a une valeur initiale de `false`. Toutes les autres valeurs, y compris n'importe quel objet, un tableau vide (`[]`) ou la chaîne `"false"`, créent un objet avec une valeur initiale de `true`.

> [!NOTE]
> Lorsque la propriété non standard [`document.all`](/fr/docs/Web/API/Document/all) est utilisée comme argument pour ce constructeur, le résultat est un objet `Boolean` avec la valeur `false`. Cette propriété est historique et non standard et ne doit pas être utilisée.

## Exemples

### Créer des objets `Boolean` avec une valeur initiale à `false`

```js
const bPasDeParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bChaineVide = new Boolean("");
const bFalse = new Boolean(false);
```

### Créer des objets `Boolean` avec une valeur initiale à `true`

```js
const bTrue = new Boolean(true);
const bChaineTrue = new Boolean("true");
const bChaineFalse = new Boolean("false");
const bSuLin = new Boolean("Su Lin");
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'entrée de glossaire {{Glossary("Boolean", "Booléen")}}
