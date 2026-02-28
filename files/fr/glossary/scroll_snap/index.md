---
title: Accrochage au défilement
slug: Glossary/Scroll_snap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le **défilement avec accrochage** (<i lang="en">scroll snapping</i> en anglais) désigne le fait que le contenu «&nbsp;s'accroche&nbsp;» à une position précise, plutôt que de s'arrêter à un point aléatoire, lorsqu'une opération de défilement se termine. Les opérations de défilement normales manquent de précision. Elles ne s'alignent pas sur un paragraphe, une phrase ou la bordure d'une image. Par exemple, dans un carrousel, une opération de défilement pourrait s'arrêter au milieu d'une image, la rendant partiellement visible. Les développeur·euse·s web ont longtemps compté sur des solutions basées sur JavaScript. Les navigateurs prennent désormais en charge les [fonctionnalités CSS de défilement avec accrochage](/fr/docs/Web/CSS/Guides/Scroll_snap) qui permettent de définir des conteneurs de défilement avec accrochage et des comportements d'accrochage.

Le défilement avec accrochage offre une expérience de défilement bien contrôlée, dans laquelle les développeur·euse·s définissent un élément comme un [conteneur de défilement](/fr/docs/Glossary/Scroll_container) avec des limites pour les opérations de défilement. Les opérations de défilement se terminent alors à ces limites de position d'accrochage, le contenu défilé venant s'aligner précisément. Dans l'exemple du carrousel ci-dessus, lorsque l'utilisateur·ice termine de faire défiler le carrousel, l'image visible s'aligne parfaitement.

- Conteneur de défilement avec accrochage
  - : Le **conteneur de défilement avec accrochage** est un conteneur de défilement auquel le défilement avec accrochage est appliqué. Par exemple, si une boîte a du contenu débordant et que {{CSSxRef("scroll-snap-type")}} est défini sur une valeur autre que `none`, alors la boîte capture les positions d'accrochage. Le conteneur de défilement avec accrochage d'une boîte est l'ancêtre le plus proche qui capture les positions d'accrochage. Si une boîte n'a pas de conteneur de défilement avec accrochage, ses positions d'accrochage, le cas échéant, ne déclencheront pas d'accrochage.
- Port d'accrochage
  - : Le **port d'accrochage** est la zone du [port de défilement](/fr/docs/Glossary/Scroll_container#port_de_défilement) utilisée comme conteneur d'alignement pour les zones d'accrochage lors du calcul des positions d'accrochage. Par défaut, il correspond à la fenêtre d'affichage visuelle du conteneur de défilement, mais il s'agit de la zone du port de défilement définie par la propriété {{CSSxRef("scroll-padding")}}. Les [zones d'accrochage](#zone_daccrochage) sont alignées sur le port de défilement.
- Zone d'accrochage
  - : La **zone d'accrochage** d'un élément dans un conteneur de défilement est la zone définie à l'aide des marges {{CSSxRef("scroll-margin")}} spécifiées sur l'élément. La zone d'accrochage sert à aligner l'élément sur son port d'accrochage.
- Cible d'accrochage
  - : Un élément descendant à l'intérieur d'un conteneur de défilement avec accrochage sur lequel l'accrochage se produit lorsque le conteneur défile. La propriété {{CSSxRef("scroll-snap-align")}} définit la position d'accrochage de chaque cible d'accrochage.

## Voir aussi

- La propriété CSS {{CSSxRef("scroll-snap-type")}}
- La propriété CSS {{CSSxRef("scroll-snap-align")}}
- La propriété CSS {{CSSxRef("scroll-padding")}}
- La propriété CSS {{CSSxRef("scroll-margin")}}
- [Le module d'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
