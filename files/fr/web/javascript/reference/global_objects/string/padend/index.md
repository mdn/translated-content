---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
---

{{JSRef}}

La méthode **`padEnd()`** permet de compléter la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixée. Pour atteindre cette longueur, la chaîne complémentaire peut être répétée. La chaîne courante est complétée depuis la fin.

{{InteractiveExample("JavaScript Demo: String.padEnd()")}}

```js interactive-example
const str1 = "Breaded Mushrooms";

console.log(str1.padEnd(25, "."));
// Expected output: "Breaded Mushrooms........"

const str2 = "200";

console.log(str2.padEnd(5));
// Expected output: "200  "
```

## Syntaxe

```js
str.padEnd(longueurCible [, chaîneComplémentaire])
```

### Paramètres

- `longueurCible`
  - : La longueur de la chaîne qu'on souhaite obtenir. Si la longueur indiquée est inférieure à celle de la chaîne courante, cette dernière est renvoyée telle quelle.
- `chaîneComplémentaire` {{optional_inline}}
  - : La chaîne de caractères avec laquelle on veut compléter la chaîne courante. Si cette chaîne est trop longue, on prendra uniquement le début (la partie la plus à gauche pour les langues écrites de gauche à droite et la partie la plus à droite pour les langues écrites de droite à gauche). La valeur par défaut de ce paramètre est l'espace " " (U+0020). Si cette chaîne est trop courte, elle sera répétée.

### Valeur de retour

Une chaîne de caractères ({{jsxref("String")}}) dont la longueur est celle indiquée, complétée avec la chaîne fournie.

## Exemples

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

- {{jsxref("String.prototype.padStart()")}}
