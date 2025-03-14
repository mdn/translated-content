---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
---

{{JSRef}}

La méthode **`Number.parseInt()`** analyse et convertit une chaine de caractères, fournie en argument, en un entier dans la base souhaitée.

{{InteractiveExample("JavaScript Demo: Number.parseInt()")}}

```js interactive-example
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(" 0xF", 16));
// Expected output: 1500

console.log(roughScale("321", 2));
// Expected output: 0
```

## Syntaxe

```js
Number.parseInt(chaîne [, base])
```

### Paramètres

- `chaîne`
  - : La valeur à convertir. Si `chaine` n'est pas une chaîne de caractères, elle sera convertie auparavant. Les blancs qui préfixent la chaîne sont ignorés.
- `base` {{optional_inline}}
  - : Paramètre optionnel. Un entier représentant la base dans laquelle est représentée la valeur de la chaîne. **Il faut toujours spécifier ce paramètre.** Cela permet que le code ne soit pas ambigü et permet de garantir un comportement prévisible. En effet les différentes implémentations peuvent fournir des résultats différents lorsque la base n'est pas spécifiée.

### Valeur de retour

Un entier construit à partir de l'analyse de la chaîne de caractères passée en argument. Si le premier caractère ne permet pas de conversion numérique, c'est la valeur {{jsxref("NaN")}} qui sera renvoyée.

## Description

Voir la page {{jsxref("Objets_globaux/parseInt", "parseInt()")}} pour plus de détails et d'exemples. Cette méthode se comporte de façon identique à la fonction globale {{jsxref("Objets_globaux/parseInt", "parseInt()")}} et fait partie d'ECMAScript 2015 (dans le but de « modulariser » les méthodes globales) et on aura :

```js
Number.parseInt === parseInt; // true
```

## Prothèse d'émulation (_polyfill_)

Si on souhaite bénéficier de cette fonction dans un environnement qui n'en dispose pas, on pourra donc l'émuler de la façon suivante :

```js
if (Number.parseInt === undefined) {
  Number.parseInt = parseInt;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{jsxref("Number")}} auquel appartient cette fonction.
- La méthode {{jsxref("Objets_globaux/parseInt","parseInt()")}} de l'objet global.
