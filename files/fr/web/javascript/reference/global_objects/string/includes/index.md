---
title: "String : méthode includes()"
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`includes()`** des valeurs {{JSxRef("String")}} effectue une recherche sensible à la casse pour déterminer si une chaîne de caractères donnée peut être trouvée dans cette chaîne de caractères, retournant `true` ou `false` selon le cas.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.includes()", "shorter")}}

```js interactive-example
const sentence = "Le renard brun rapide saute par-dessus le chien paresseux.";

const word = "renard";

console.log(
  `Le mot « ${word} » ${
    sentence.includes(word) ? "est" : "n'est pas"
  } dans la phrase`,
);
// Résultat attendu : "Le mot « renard » est dans la phrase"
```

## Syntaxe

```js-nolint
includes(searchString)
includes(searchString, position)
```

### Paramètres

- `searchString`
  - : Une chaîne de caractères à rechercher dans `str`. Ne peut pas [être une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles). Toutes les valeurs qui ne sont pas des expressions rationnelles sont [converties en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), donc l'omission de ce paramètre ou le passage de `undefined` entraîne la recherche de la chaîne de caractères `"undefined"`, ce qui est rarement souhaité.
- `position` {{Optional_Inline}}
- : La position dans la chaîne de caractères à partir de laquelle commencer la recherche de `searchString`. (Par défaut, `0`.)

### Valeur de retour

**`true`** si la chaîne de caractères recherchée est trouvée n'importe où dans la chaîne de caractères donnée, y compris lorsque `searchString` est une chaîne de caractères vide&nbsp;; sinon **`false`**.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `searchString` [est une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles).

## Description

Cette méthode détermine si une chaîne de caractères est contenue dans une autre.

### Sensibilité à la case

`includes()` est sensible à la casse. Par exemple, l'expression suivante nous retourne `false` &nbsp;:

```js
"Baleine bleue".includes("baleine"); // retourne false
```

Vous pouvez contourner cette contrainte en transformant à la fois la chaîne de caractères originale et la chaîne de caractères de recherche en minuscules&nbsp;:

```js
"Baleine bleue".toLowerCase().includes("bleue"); // retourne true
```

## Exemples

### Utiliser la méthode `includes()`

```js
const chaine = "Être ou ne pas être, telle est la question.";

console.log(chaine.includes("Être")); // true
console.log(chaine.includes("question")); // true
console.log(chaine.includes("pléonasme")); // false
console.log(chaine.includes("Être", 1)); // false
console.log(chaine.includes("ÊTRE")); // false
console.log(chaine.includes("")); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.includes` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.includes` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.prototype.includes)
- La méthode {{JSxRef("Array.prototype.includes()")}}
- La méthode {{JSxRef("TypedArray.prototype.includes()")}}
- La méthode {{JSxRef("String.prototype.indexOf()")}}
- La méthode {{JSxRef("String.prototype.lastIndexOf()")}}
- La méthode {{JSxRef("String.prototype.startsWith()")}}
- La méthode {{JSxRef("String.prototype.endsWith()")}}
