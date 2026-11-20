---
title: "String : méthode padStart()"
short-title: padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`padStart()`** des valeurs {{JSxRef("String")}} remplit cette chaîne de caractères avec une chaîne de caractères donnée (répétée et/ou tronquée, si nécessaire) afin que la chaîne de caractères résultante ait une longueur donnée. Le remplissage est appliqué depuis le début de cette chaîne de caractères.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.padStart()")}}

```js interactive-example
const str = "5";

console.log(str.padStart(2, "0"));
// Résultat attendu : "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// Résultat attendu : "************5581"
```

## Syntaxe

```js-nolint
padStart(targetLength)
padStart(targetLength, padString)
```

### Paramètres

- `longueurCible`
  - : La longueur de la chaîne qu'on souhaite obtenir. Si la longueur indiquée est inférieure à celle de la chaîne courante, cette dernière est renvoyée telle quelle.
- `chaîneComplémentaire` {{Optional_Inline}}
  - : La chaîne de caractères avec laquelle on veut compléter la chaîne courante. Si cette chaîne est trop longue, on prendra uniquement le début (la partie la plus à gauche quand la langue s'écrit de gauche à droite). La valeur par défaut de ce paramètre est l'espace " " (U+0020). Si cette chaîne est trop courte, elle sera répétée.

### Valeur de retour

Une chaîne de caractères ({{JSxRef("String")}}) dont la longueur est celle indiquée, complétée avec la chaîne fournie au début de la chaîne courante.

## Exemples

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "toto"); // "totototabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("String.prototype.padEnd()")}}
