---
title: element.clientWidth
slug: Web/API/Element/clientWidth
---

{{APIRef("DOM")}}

La propriété **`Element.clientWidth`** vaut zéro pour les éléments en ligne (_inline_) et pour les éléments sans CSS. Dans les autres cas, sa valeur correspond à la largeur intérieure d'un élément, exprimée en pixel. Cette largeur inclue le rembourrage (_padding_) mais exclut les bordures, les marges et les éventuelles barres de défilement verticales.

Lorsque `clientWidth` est utilisée sur l'élément racine (l'élément `<html>` par défaut ou `<body>` si le document utilise le mode _quirks_), c'est la largeur de la zone d'affichage (_viewport_) à l'exception des barres de défilement qui est renvoyée. [Il s'agit d'un cas au limite pour `clientWidth`](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientwidth).

> **Note :** La valeur de cette propriété sera arondie en un entier. Si vous devez utiliser une valeur décimale, privilégiez {{domxref("element.getBoundingClientRect()")}}.

## Syntaxe

```js
var intElemClientWidth = element.clientWidth;
```

`intElemClientWidth` est un entier correspondant à la largeur d'`element`, en pixels. La propriété `clientWidth` est uniquement accessible en lecture-seule.

## Exemple

![](dimensions-client.png)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Déterminer les dimensions des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
