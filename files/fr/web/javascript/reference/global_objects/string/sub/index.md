---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
---

{{JSRef}}{{deprecated_header}}

La méthode **`sub()`** crée un élément HTML {{HTMLElement("sub")}} qui entraîne l'affichage de la chaîne en indice.

## Syntaxe

```js
str.sub();
```

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("sub")}}.

## Description

La méthode `sub` encapsule une chaîne dans une balise `<sub>` :
`"<sub>str</sub>`".

## Exemples

L'exemple suivant utilise les méthodes `sub()` et {{jsxref("String.prototype.sup()", "sup()")}} pour mettre en forme une chaîne :

```js
var superText = "exposant";
var subText = "indice";

console.log("Ceci illustre l'affichage d'un texte en " + superText.sup() + ".");
// "Ceci illustre l'affichage d'un texte en <sup>expostant</sup>

console.log("Ceci illustre l'affichage d'un texte en " + subText.sub() + ".");
// "Ceci illustre l'affichage d'un texte en <sub>indice</sub>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.sup()")}}
