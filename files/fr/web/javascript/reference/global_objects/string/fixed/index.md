---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
---

{{JSRef}}{{deprecated_header}}

La méthode **`fixed()`** permet de créer un élément HTML {{HTMLElement("tt")}}, ce qui permet d'afficher le texte de la chaîne de caractère dans une fonte à chasse fixe.

## Syntaxe

```js
str.fixed();
```

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("tt")}}.

## Description

La méthode `fixed()` encadre une chaîne de caractères dans une balise `<tt>` :
`"<tt>str</tt>`"

## Exemples

L'exemple suivant illustre l'utilisation de la méthode `fixed` pour formater une chaîne de caractères :

```js
var worldString = "Coucou monde";

console.log(worldString.fixed());
// "<tt>Coucou monde</tt>"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
