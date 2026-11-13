---
title: "String : méthode padEnd()"
short-title: padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`padEnd()`** des valeurs {{JSxRef("String")}} remplit cette chaîne de caractères avec une chaîne de caractères donnée (répétée et/ou tronquée, si nécessaire) afin que la chaîne de caractères résultante ait une longueur donnée. Le remplissage est appliqué à partir de la fin de cette chaîne de caractères.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.padEnd()")}}

```js interactive-example
const str1 = "Champignons panés";

console.log(str1.padEnd(25, "."));
// Résultat attendu : "Champignons panés........"

const str2 = "200";

console.log(str2.padEnd(5));
// Résultat attendu : "200  "
```

## Syntaxe

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

### Paramètres

- `targetLength`
  - : La longueur de la chaîne de caractères résultante une fois que la chaîne de caractères courante `str` a été complétée. Si la valeur est inférieure ou égale à `str.length`, alors `str` est retournée telle quelle.
- `padString` {{Optional_Inline}}
  - : La chaîne de caractères avec laquelle on veut compléter la chaîne de caractères courante `str`. Si cette chaîne de caractères est trop longue pour rester dans la limite de `targetLength`, elle est tronquée à partir de la fin. La valeur par défaut est le caractère espace (U+0020).

### Valeur de retour

Une chaîne de caractères ({{JSxRef("String")}}) de la longueur définie par `targetLength` avec `padString` appliquée à la fin.

## Exemples

### Utiliser la méthode `padEnd()`

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "toto"); // "abctototot"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.padEnd` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.padEnd` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.prototype.padend)
- La méthode {{JSxRef("String.prototype.padStart()")}}
