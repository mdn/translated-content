---
title: 'Guide : ancrage du défilement (scroll anchoring)'
slug: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
tags:
  - CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
original_slug: Web/CSS/overflow-anchor/Guide_ancrage_défilement
---
{{CSSRef}}

Lorsque vous naviguez sur le Web avec une connexion plus ou moins performante, vous avez déjà pu rencontrer le problème suivant : vous faites défiler verticalement le contenu d'une page qui est en cours de chargement puis, au milieu de votre lecture, le contenu se décale brutalement plus bas (parce que des images au-dessus ou d'autres éléments ont fini de charger et s'affichent enfin).

L'ancrage du défilement (ou _scroll anchoring_ en anglais) est une fonctionnalité des navigateurs qui vise à résoudre ce problème de « saut » (qui se produit lorsque l'utilisateur a déjà suffisamment fait défiler le contenu pour arriver sur une autre partie du document).

## Comment cela fonctionne ?

L'ancrage du défilement ajuste la position du défilement pour compenser les modification apportées en dehors de la zone d'affichage (_viewport_). Cela signifie que l'emplacement atteint par l'utilisateur reste dans la zone d'affichage (la position de défilement se retrouve donc implicitement modifiée en termes de distance parcourue sur le document).

## Comment activer l'ancrage du défilement ?

Il n'y a rien à faire. Cette fonctionnalité est activée par défaut pour les navigateurs qui la prennent en charge. Dans la plupart des cas, ces sauts inattendus ne sont pas une expérience voulue.

## Si besoin, que faire pour le désactiver ?

La spécification fournit une nouvelle propriété : {{cssxref("overflow-anchor")}}. Celle-ci peut être utilisée pour désactiver explicitement l'ancrage du défilement sur une partie ou sur l'ensemble du document. Cette propriété sert de mécanisme pour ne pas utiliser le nouveau comportement.

Les valeurs utilisables pour cette propriété sont `auto` ou `none` :

- `auto` correspond à la valeur initiale : si c'est un navigateur compatible qui est utilisé, l'ancrage est activé et il devrait y avoir moins de déplacements brusques.
- `none` signifie qu'on choisit explicitement de ne pas utiliser l'ancrage du défilement pour tout ou partie du document.

Pour désactiver l'ancrage sur l'ensemble du document, on pourra appliquer la propriété sur l'élément {{htmlelement("body")}} :

```css
body {
  overflow-anchor: none;
}
```

Pour désactiver cette fonctionnalité sur une certaine partie du document, on ciblera `overflow-anchor: none` sur l'élément conteneur dans lequel l'utilisateur fait défiler le contenu :

```css
.container {
  overflow-anchor: none;
}
```

> **Note :** Dans la spécification, il est indiqué qu'il n'est pas possible de « revenir » avec l'ancrage dans un élément fils si l'ancrage a été désactivé sur un élément parent. Ainsi, si on désactive l'ancrage pour l'ensemble du document, on ne pourra pas appliquer (avec succès) `overflow-anchor: auto` à un autre endroit du document.

### Supression triggers

La spécification définit également certains évènements qui suppriment cette fonctionnalité où ça serait problématique. Si un évènement particulier se produit sur le nœud d'ancrage ou sur un ancêtre de celui-ci, l'ancrage est supprimé.

Les évènements en question sont les modifications des [valeurs calculées](/fr/docs/Web/CSS/Valeur_calculée) des propriétés suivantes :

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}} ou {{cssxref("bottom")}}
- {{cssxref("margin")}} ou {{cssxref("padding")}}
- Toute propriété relative à {{cssxref("width")}} ou à {{cssxref("height")}}
- {{cssxref("position")}}
- {{cssxref("transform")}}

## Compatibilité des navigateurs

Si vous souhaitez appliquer une amélioration progressive et détecter si cette fonctionnalité est disponible dans le navigateur utilisé, vous pouvez utiliser [les requêtes de fonctionnalité](/fr/docs/Web/CSS/@supports) afin de tester la prise en charge de la propriété `overflow-anchor`.

{{Compat("css.properties.overflow-anchor")}}

## Voir aussi

- [Document d'explication sur le site du WICG (en anglais)](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md)
- [L'ancrage du défilement pour les développeurs web - Blog Chromium (en anglais)](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html)
- [Implémenter un élément avec le défilement fixe en bas (en anglais)](https://blog.eqrion.net/pin-to-bottom/)
