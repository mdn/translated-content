---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
---

{{JSRef}}{{deprecated_header}}

La méthode **`blink()`** crée un élément HTML {{HTMLElement("blink")}} qui affiche la chaine de caractères en clignotant.

> **Attention :** Les textes clignotants sont fortement déconseillés par de nombreux standards d'accessibilité. L'élément `<blink>` est lui-même non standard et obsolète !

## Syntaxe

```js
str.blink();
```

### Valeur de retour

Une chaine de caractères représentant un élément HTML {{HTMLElement("blink")}}.

## Description

La méthode `blink()` place la chaine de caractères dans une balise `<blink>` :
`"<blink>str</blink>`"

## Exemples

L'exemple suivant utilise des méthodes de `String` pour changer l'affichage d'une chaine de caractères :

```js
var chaîneMonde = "Coucou monde";

console.log(chaîneMonde.blink());
console.log(chaîneMonde.bold());
console.log(chaîneMonde.italics());
console.log(chaîneMonde.strike());
```

Cet exemple produira le code HTML suivant :

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

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
