---
title: "String : méthode endsWith()"
short-title: endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`endsWith()`** des valeurs {{JSxRef("String")}} détermine si une chaîne de caractères se termine par les caractères de cette chaîne de caractères, renvoyant `true` ou `false` selon le cas.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.endsWith()")}}

```js interactive-example
const str1 = "Les chats sont les meilleurs !";

console.log(str1.endsWith("meilleurs !"));
// Résultat attendu : true

console.log(str1.endsWith("meilleurs", 28));
// Résultat attendu : true

const str2 = "Est-ce une question ?";

console.log(str2.endsWith("question"));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
endsWith(searchString)
endsWith(searchString, endPosition)
```

### Paramètres

- `searchString`
  - : Les caractères à rechercher à la fin de `str`. Ne peut pas [être une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles). Toutes les valeurs qui ne sont pas des expressions rationnelles sont [converties en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), donc l'omission de ce paramètre ou le passage de `undefined` amène `endsWith()` à rechercher la chaîne de caractères `"undefined"`, ce qui est rarement ce que vous voulez.
- `endPosition` {{Optional_Inline}}
  - : La position de fin à laquelle `searchString` est censé être trouvé (l'indice du dernier caractère de `searchString` plus 1). Par défaut, il s'agit de `str.length`.

### Valeur de retour

**`true`** si les caractères donnés se trouvent à la fin de la chaîne de caractères, y compris lorsque `searchString` est une chaîne de caractères vide&nbsp;; sinon, **`false`**.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `searchString` [est une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles).

## Description

Cette méthode permet de déterminer si une chaîne de caractères se termine ou non par une autre chaîne de caractères. Cette méthode est sensible à la casse.

## Exemples

### Utiliser la méthode `endsWith()`

```js
const chaine = "Être, ou ne pas être, telle est la question.";

console.log(chaine.endsWith("question.")); // true
console.log(chaine.endsWith("Être")); // false
console.log(chaine.endsWith("pas être", 19)); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.endsWith` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.endsWith` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.prototype.endswith)
- La méthode {{JSxRef("String.prototype.startsWith()")}}
- La méthode {{JSxRef("String.prototype.includes()")}}
- La méthode {{JSxRef("String.prototype.indexOf()")}}
- La méthode {{JSxRef("String.prototype.lastIndexOf()")}}
