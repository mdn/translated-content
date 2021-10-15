---
title: Element.clientHeight
slug: Web/API/Element/clientHeight
translation_of: Web/API/Element/clientHeight
browser-compat: api.Element.clientHeight
---
{{APIRef("DOM")}}

La propriété en lecture seule **`Element.clientHeight`** vaut zéro pour les éléments sans CSS ou sans boîte de disposition en ligne/incise ; sinon elle vaut la hauteur interne d'un élément, exprimée en pixels. Cette hauteur inclut le remplissage (<i lang="en">padding</i>) mais exclut les bordures, les marges et les éventuelles barres de défilement horizontales.

`clientHeight` peut être calculée comme : _hauteur CSS_ + _remplissage CSS_ - _hauteur des barres de défilement horizontales_ s'il y en a.

Lorsque `clientHeight` est utilisée sur l'élément racine (l'élément `<html>`), (ou sur `<body>` si le document est en mode de compatibilité (<i lang="en">quirks mode</i>)), c'est la hauteur de la zone d'affichage (<i lang="en">viewport</i>) (sans tenir compte des barres de défilement) qui est renvoyée. [Il s'agit ici d'un cas aux limites pour `clientHeight`](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientheight).

> **Note :** Cette propriété sera arrondie en un entier. Si vous souhaitez utiliser une valeur décimale, vous pouvez utiliser [`element.getBoundingClientRect()`](/fr/docs/Web/API/Element/getBoundingClientRect).

## Syntaxe

```js
var intElemClientHeight = element.clientHeight;
```

`intElemClientHeight` est un entier correspondant à la valeur de `clientHeight` pour l'élément représenté par `element`, exprimée en pixels. La propriété `clientHeight` est uniquement accessible en lecture-seule.

## Exemples

![](dimensions-client.png)

## Spécifications

{{Specifications}}

### Notes

`clientHeight` est une propriété introduite par le modèle objet d'Internet Explorer.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`HTMLElement.offsetHeight`](/fr/docs/Web/API/HTMLElement/offsetHeight)
- [`Element.scrollHeight`](/fr/docs/Web/API/Element/scrollHeight)
- [Déterminer les dimensions des éléments](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
