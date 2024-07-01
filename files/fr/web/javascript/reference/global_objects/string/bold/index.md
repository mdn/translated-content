---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
---

{{JSRef}}{{deprecated_header}}

La méthode **`bold()`** crée un élément HTML {{HTMLElement("b")}} qui affiche la chaine de caractères en gras.

## Syntaxe

```js
str.bold();
```

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("b")}}.

## Description

La méthode `bold()` place la chaine de caractères dans une balise `<b>`&nbsp;:
`"<b>str</b>`"

## Exemples

L'exemple suivant utilise des méthodes de `String` pour changer l'affichage de la chaine de caractères :

```js
var chaîneMonde = "Coucou monde";

console.log(chaîneMonde.blink());
console.log(chaîneMonde.bold());
console.log(chaîneMonde.italics());
console.log(chaîneMonde.strike());
```

Cet exemple produit le même HTML que le code suivant :

```html
<blink>Coucou monde</blink>
<b>Coucou monde</b>
<i>Coucou monde</i>
<strike>Coucou monde</strike>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
