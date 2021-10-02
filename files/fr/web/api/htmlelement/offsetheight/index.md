---
title: element.offsetHeight
slug: Web/API/HTMLElement/offsetHeight
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/HTMLElement/offsetHeight
---
{{ ApiRef() }}

### Résumé

Propriété DHTML permettant d'obtenir la hauteur d'un élément par rapport à la mise en page.

### Syntaxe

    var hauteurTotaleElem = document.getElementById(id).offsetHeight;

_hauteurTotalElem_ est une variable stockant un entier correspondant à la valeur en pixels de la hauteur totale de l'élément identifé par `id`. `offsetHeight` est une propriété en lecture seule.

### Description

Typiquement, la propriété **offsetHeight** d'un élément est une mesure qui comprend les bordures de l'élément, ses marges internes verticales (padding), la barre de défilement horizontale si présente et affichée, et la hauteur CSS de l'élément.

### Exemple

## Example

![](dimensions-offset.png)

L'exemple d'image ci-avant montre une barre de défilement et un décalage `offsetHeight` qui rentre dans la fenêtre. Toutefois, les éléments non-défilables peuvent avoir des valeurs `offsetHeight` élevées, voire plus élevéesque le contenu visible. Ces éléments sont généralement contenu au sein d'éléments défilables et, de fait, les éléments non-défilables peuvent être partiellement ou complètement invisible, selon la valeur de `scrollTop` pour le conteneur.

### Spécification

`offsetHeight` fait partie du modèle objet DHTML de Microsoft Internet Explorer. Elle ne fait partie d'aucune spécification ou recommandation technique du W3C.

### Notes

`offsetHeight` est une propriété du modèle objet DHTML introduite par Microsoft Internet Explorer. On l'appelle parfois la hauteur physique ou graphique d'un élément, ou sa hauteur « border-box » (bordure et boîte).

### Références

- [_offsetHeight definition_ sur MSDN](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/offsetheight.asp?frame=true)
- [_Measuring Element Dimension and Location_ sur MSDN](http://msdn.microsoft.com/workshop/author/om/measuring.asp)

### Voir aussi

- [`element.clientHeight`](/fr/DOM/element.clientHeight)
- [`element.scrollHeight`](/fr/DOM/element.scrollHeight)
- [`element.offsetWidth`](/fr/DOM/element.offsetWidth)
