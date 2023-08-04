---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
---

{{JSRef}} {{deprecated_header}}

La méthode **`sup()`** crée un élément HTML {{HTMLElement("sup")}} qui entraîne l'affichage de la chaîne en exposant.

## Syntaxe

```js
str.sup();
```

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("sup")}}.

## Description

La méthode `sup` encapsule une chaîne dans une balise `<sup>` :
`"<sup>str</sup>`".

## Exemples

L'exemple suivant utilise les méthodes {{jsxref("String.prototype.sub()", "sub()")}} et `sup` pour mettre en forme une chaîne :

```js
var superText = "exposant";
var subText = "indice";

console.log("Ceci illustre l'affichage d'un texte en " + superText.sup() + ".");
// Ceci illustre l'affichage d'un texte en <sup>exposant</sup>.
console.log("Ceci illustre l'affichage d'un texte en " + subText.sub() + ".");
Ceci illustre l'affichage d'un texte en <sub>indice</sub>.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.sub()")}}
