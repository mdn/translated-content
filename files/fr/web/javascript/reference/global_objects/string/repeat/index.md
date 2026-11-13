---
title: "String : méthode repeat()"
short-title: repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`repeat()`** des valeurs {{JSxRef("String")}} construit et retourne une nouvelle chaîne de caractères qui contient le nombre de copies défini de cette chaîne de caractères, concaténées ensemble.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.repeat()", "shorter")}}

```js interactive-example
const mood = "Joyeux ! ";

console.log(`Je me sens ${mood.repeat(3)}`);
// Résultat attendu : "Je me sens Joyeux ! Joyeux ! Joyeux ! "
```

## Syntaxe

```js-nolint
repeat(count)
```

### Paramètres

- `count`
  - : Un entier entre `0` et {{JSxRef("Number/POSITIVE_INFINITY", "Infinity")}}, indiquant le nombre de fois que la chaîne de caractères est répétée.

### Valeur de retour

Une nouvelle chaîne de caractères contenant le nombre indiqué de copies de la chaîne de caractère donnée.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `count` est négatif ou dépasse la longueur maximum.

## Exemples

### Utiliser la méthode `repeat()`

```js
"abc".repeat(-1); // RangeError
"abc".repeat(0); // ""
"abc".repeat(1); // "abc"
"abc".repeat(2); // "abcabc"
"abc".repeat(3.5); // "abcabcabc" (le compteur est converti en un nombre entier)
"abc".repeat(1 / 0); // RangeError

({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// "abcabc" (repeat() est une méthode générique)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.repeat` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.repeat` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.prototype.repeat)
- La méthode {{JSxRef("String.prototype.concat()")}}
