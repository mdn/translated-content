---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/blink
original_slug: Web/JavaScript/Reference/Objets_globaux/String/blink
---
{{JSRef}}{{deprecated_header}}

La méthode **`blink()`** crée un élément HTML {{HTMLElement("blink")}} qui affiche la chaine de caractères en clignotant.

> **Attention :** Les textes clignotants sont fortement déconseillés par de nombreux standards d'accessibilité. L'élément `<blink>` est lui-même non standard et obsolète !

## Syntaxe

```js
str.blink()
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

| Spécification                                                                                                | État                         | Commentaires                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ES6', '#sec-string.prototype.blink', 'String.prototype.blink')}}         | {{Spec2('ES6')}}         | Définition initiale. Implémentée avec JavaScript 1.0. Définie dans l'annexe B (normative) pour les fonctionnalités additionnelles des navigateurs web. |
| {{SpecName('ESDraft', '#sec-string.prototype.blink', 'String.prototype.blink')}} | {{Spec2('ESDraft')}} | Définie dans l'annexe B (normative) pour les fonctionnalités additionnelles des navigateurs web.                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.blink")}}

## Voir aussi

- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
