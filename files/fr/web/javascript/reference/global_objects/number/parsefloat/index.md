---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
---

{{JSRef}}

La méthode **`Number.parseFloat()`** analyse et convertit une chaîne de caractères en un nombre flottant. Cette méthode possède un comportement identique à {{jsxref("parseFloat")}} et fait partie d'ECMAScript 2015 (dans le but de « modulariser » les méthodes globales).

{{EmbedInteractiveExample("pages/js/number-parsefloat.html")}}

## Syntaxe

```js
Number.parseFloat(chaîne);
```

### Paramètres

- `chaîne`
  - : Une chaîne de caractères qu'on souhaite convertir en nombre flottant.

### Valeur de retour

Un nombre flottant obtenu à partir de l'analyse de la chaîne de caractères passée en argument. Si le premier caractère de la chaîne ne peut pas être converti en un nombre, la valeur {{jsxref("NaN")}} sera renvoyée.

## Description

Cette méthode possède les mêmes fonctionnalités que la fonction globale {{jsxref("parseFloat", "parseFloat()")}} :

```js
Number.parseFloat === parseFloat; // true
```

Cette méthode fait partie d'ECMAScript 2015 et notamment de la modularisation de certaines fonctions globales. Pour plus de détails et d'exemples, voir {{jsxref("parseFloat", "parseFloat()")}}.

## Prothèse d'émulation (_polyfill_)

```js
if (Number.parseFloat === undefined) {
  Number.parseFloat = parseFloat;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{jsxref("Number")}} auquel appartient cette fonction.
- La méthode globale {{jsxref("parseFloat")}}.
