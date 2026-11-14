---
title: "String : méthode isWellFormed()"
short-title: isWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/isWellFormed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`isWellFormed()`** des valeurs {{JSxRef("String")}} retourne un booléen indiquant si cette chaîne de caractères contient des [substituts isolés](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes).

## Syntaxe

```js-nolint
isWellFormed()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne `true` si cette chaîne de caractères ne contient aucun substitut isolé, `false` sinon.

## Description

Les chaînes de caractères en JavaScript sont encodées en UTF-16. L'encodage UTF-16 utilise le concept de _paires de substituts_, qui est présenté en détail dans la section [Caractères UTF-16, points de code Unicode et groupes de graphèmes](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes).

`isWellFormed()` vous permet de tester si une chaîne de caractères est bien formée (c'est-à-dire qu'elle ne contient aucun substitut isolé). Comparée à une implémentation personnalisée, `isWellFormed()` est plus efficace, car les moteurs peuvent accéder directement à la représentation interne des chaînes de caractères. Si vous devez convertir une chaîne de caractères en une chaîne de caractères bien formée, utilisez la méthode {{JSxRef("String/toWellFormed", "toWellFormed()")}}. `isWellFormed()` vous permet de traiter différemment les chaînes de caractères mal formées des chaînes de caractères bien formées, par exemple en lançant une erreur ou en la marquant comme invalide.

## Exemples

### Utiliser la méthode `isWellFormed()`

```js
const chainesCaracteres = [
  // Substitut isolé en tête
  "ab\uD800",
  "ab\uD800c",
  // Substitut isolé en queue
  "\uDFFFab",
  "c\uDFFFab",
  // Bien formée
  "abc",
  "ab\uD83D\uDE04c",
];

for (const chaine of chainesCaracteres) {
  console.log(chaine.isWellFormed());
}
// Journalise :
// false
// false
// false
// false
// true
// true
```

### Éviter les erreurs dans `encodeURI()`

{{JSxRef("encodeURI")}} lève une erreur si la chaîne de caractères passée n'est pas bien formée. Cela peut être évité en utilisant `isWellFormed()` pour tester la chaîne de caractères avant de la passer à `encodeURI()`.

```js
const malFormee = "https://example.com/search?q=\uD800";

try {
  encodeURI(malFormee);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

if (malFormee.isWellFormed()) {
  console.log(encodeURI(malFormee));
} else {
  console.warn("Chaînes de caractères mal formées rencontrées."); // Chaînes de caractères mal formées rencontrées.
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.isWellFormed` dans `core-js` <sup>(ang.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.isWellFormed` <sup>(ang.)</sup>](https://www.npmjs.com/package/string.prototype.iswellformed)
- La méthode {{JSxRef("String.prototype.toWellFormed()")}}
- La méthode {{JSxRef("String.prototype.normalize()")}}
