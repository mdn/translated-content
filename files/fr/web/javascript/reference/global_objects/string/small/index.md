---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
---

{{JSRef}}{{deprecated_header}}

La méthode **`small()`** permet de créer un élément HTML {{HTMLElement("small")}}, ce qui permet d'afficher la chaîne de caractères dans une fonte de petite taille.

## Syntaxe

```js
str.small();
```

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("small")}}.

## Description

La méthode `small()` encadre la chaîne courante dans une balise `<small>` :
`"<small>str</small>`"

## Exemple

### Utiliser la méthode `small()`

L'exemple suivant illustre les différentes méthodes de `String` permettant de changer la taille d'une chaîne de caractères :

```js
var worldString = "Coucou monde";

console.log(worldString.small()); // <small>Coucou monde</small>
console.log(worldString.big()); // <big>Coucou monde</big>
console.log(worldString.fontsize(7)); // <font size="7">Coucou monde</fontsize>
```

L'objet {{domxref("HTMLElement.style", "element.style")}} permet d'utiliser l'attribut `style` de l'élément et de le manipuler de façon générique. Par exemple :

```js
document.getElementById("IDélément").style.fontSize = "0.7em";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
