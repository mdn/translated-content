---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
---

{{JSRef}}{{deprecated_header}}

La méthode **`big()`** crée un élément HTML {{HTMLElement("big")}} qui affichera la chaine de caractères avec une taille de police importante.

> **Note :** L'élément `<big>` a été retiré de [HTML5](/fr/docs/Web/Guide/HTML/HTML5) et ne doit pas être utilisé. À la place, les développeurs web doivent utiliser les propriétés [CSS](/fr/docs/Web/CSS).

## Syntaxe

```js
str.big();
```

### Valeur de retour

Une chaîne de caractères qui représente un élément HTML {{HTMLElement("big")}}.

## Description

La méthode `big()` place la chaine de caractères dans une balise `<big>` :
`"<big>str</big>`"

## Exemples

L'exemple suivant montre les méthodes de `String` pour changer la taille d'une chaine de caractères :

```js
var chaîneMonde = "Coucou monde";

console.log(chaîneMonde.small()); // <small>Coucou monde</small>
console.log(chaîneMonde.big()); // <big>Coucou monde</big>
console.log(chaîneMonde.fontsize(7)); // <fontsize=7>Coucou monde</fontsize>
```

Avec l'objet {{domxref("HTMLElement.style", "element.style")}}, il est possible d'accéder à l'attribut `style` de l'élément et de le manipuler. Par exemple :

```js
document.getElementById("idÉlément").style.fontSize = "2em";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
