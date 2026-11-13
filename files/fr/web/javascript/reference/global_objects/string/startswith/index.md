---
title: "String : méthode startsWith()"
short-title: startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`startsWith()`** des valeurs {{JSxRef("String")}} détermine si cette chaîne de caractères commence par les caractères d'une chaîne de caractères définie, retournant `true` ou `false` selon le cas.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.startsWith()")}}

```js interactive-example
const str = "Programme pour samedi soir";

console.log(str.startsWith("Pro"));
// Résultat attendu : true

console.log(str.startsWith("Pro", 3));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
startsWith(searchString)
startsWith(searchString, position)
```

### Paramètres

- `searchString`
  - : Les caractères à rechercher au début de cette chaîne de caractères. Ne peut pas [être une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles). Toutes les valeurs qui ne sont pas des expressions rationnelles sont [converties en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), donc l'omission de ce paramètre ou le passage de `undefined` entraîne la recherche de la chaîne de caractères `"undefined"`, ce qui est rarement souhaité.
- `position` {{Optional_Inline}}
  - : La position de départ à laquelle `searchString` est censé être trouvé (l'index du premier caractère de `searchString`). Par défaut `0`.

### Valeur de retour

**`true`** si les caractères donnés se trouvent au début de la chaîne de caractères, y compris lorsque `searchString` est une chaîne de caractères vide&nbsp;; sinon, **`false`**.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `searchString` [est une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles).

## Description

Cette méthode permet de déterminer si une chaîne de caractères commence ou non par une autre chaîne de caractères. Cette méthode est sensible à la casse.

## Exemples

### Utiliser la méthode `startsWith()`

```js
const chaine = "Être, ou ne pas être : telle est la question.";

console.log(chaine.startsWith("Être")); // true
console.log(chaine.startsWith("pas être")); // false
console.log(chaine.startsWith("pas être", 12)); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.startsWith` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.startsWith` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.prototype.startswith)
- La méthode {{JSxRef("String.prototype.endsWith()")}}
- La méthode {{JSxRef("String.prototype.includes()")}}
- La méthode {{JSxRef("String.prototype.indexOf()")}}
- La méthode {{JSxRef("String.prototype.lastIndexOf()")}}
