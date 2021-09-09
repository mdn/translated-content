---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
tags:
  - Déprécié
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/fontcolor
original_slug: Web/JavaScript/Reference/Objets_globaux/String/fontcolor
---
{{JSRef}}{{deprecated_header}}

La méthode **`fontcolor()`** permet de créer un élément {{HTMLElement("font")}} qui permet d'afficher la chaine de caractères dans une fonte utilisant la couleur donnée.

> **Note :** L'élément \<font> a été retiré dans [HTML5](/fr/docs/Web/Guide/HTML/HTML5) et ne devrait plus être utilisé. Les propriétés [CSS](/fr/docs/Web/CSS) permettent de modifier les aspects de mise en forme et doivent donc être utilisées à la place.

## Syntaxe

    str.fontcolor(couleur)

### Paramètres

- `couleur`
  - : Une chaîne de caractères représentant la couleur en une valeur hexadécimale RGB ou comme un littéral. Les différents littéraux utilisables pour les noms de couleurs sont listés dans la [référence des couleurs CSS](/fr/docs/Web/CSS/color_value#Valeurs).

### Valeur de retour

Une chaîne de caractères représentant un élément HTML {{HTMLElement("font")}}.

## Description

Si la couleur est représentée sous forme d'un triplet RVB, le format attendu est `rrvvbb`. Ainsi, pour représenter un rose saumon, les différentes composantes seront rouge = FA,  vert = 80, et bleu = 72, le triplet s'écrit donc "`FA8072`".

## Exemples

L'exemple qui suit illustre comment utiliser la méthode `fontcolor()` pour modifier la couleur d'une chaîne de caractères en créant une balise `<font>` qui encadre la chaîne.

```js
var worldString = "Coucou monde";

console.log(worldString.fontcolor("red") +  " avec le littéral red sur cette ligne");
// '<font color="red">Coucou monde</font> avec le littéral red sur cette ligne'

console.log(worldString.fontcolor("FF00") + " avec la valeur hexadécimale sur cette ligne");
// '<font color="FF00">Coucou monde</font> avec la valeur hexadécimale sur cette ligne'
```

L'objet {{domxref("HTMLElement.style", "element.style")}} permet d'utiliser l'attribut `style` de l'élément et de le manipuler de façon générique. Par exemple :

```js
document.getElementById('IDdeVotreElement').style.color = 'red'
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-string.prototype.fontcolor', 'String.prototype.fontcolor')}}     | {{Spec2('ES6')}}         | Définition initiale. Implémentée dans JavaScript 1.0. Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web. |
| {{SpecName('ESDraft', '#sec-string.prototype.fontcolor', 'String.prototype.fontcolor')}} | {{Spec2('ESDraft')}} | Définie dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web.                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.fontcolor")}}

## Voir aussi

- {{jsxref("String.prototype.fontsize()")}}
