---
title: element.offsetWidth
slug: Web/API/HTMLElement/offsetWidth
---

{{ ApiRef() }}

### Résumé

Renvoie la largeur totale d'un élément.

### Syntaxe

```js
var offsetWidth = element.offsetWidth;
```

`offsetWidth` est une propriété en lecture seule.

### Description

Typiquement, l'attribut `offsetWidth` est une mesure qui comprend les bordures de l'élément, ses marges internes horizontales (padding), la barre de défilement verticale si présente et affichée, et la largeur CSS de l'élément.

## Exemple

![](dimensions-offset.png)

### Spécification

`offsetWidth` fait partie du modèle objet DHTML de Microsoft Internet Explorer. Elle ne fait partie d'aucune spécification ou recommandation technique du W3C.

### Notes

`offsetWidth` est une propriété du modèle objet DHTML provenant de Microsoft Internet Explorer. On l'appelle parfois la largeur physique ou graphique d'un élément, ou sa largeur «&nbsp;border-box&nbsp;» (bordure et boîte).

### Références

- [_offsetWidth definition_ sur MSDN](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/offsetwidth.asp?frame=true)
- [_Measuring Element Dimension and Location_ sur MSDN](http://msdn.microsoft.com/workshop/author/om/measuring.asp)
