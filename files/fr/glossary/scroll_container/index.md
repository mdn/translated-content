---
title: Conteneur de défilement
slug: Glossary/Scroll_container
l10n:
  sourceCommit: 1b3149a690cab7de2dfdfd24c273339a606982b0
---

Un **conteneur de défilement** (<i lang="en">scroll container</i> en anglais) est une boîte d'élément dont le contenu peut être défilé, que des barres de défilement soient présentes ou non. Une boîte d'élément devient un conteneur de défilement lorsque sa propriété CSS {{CSSxRef("overflow")}} (ou {{CSSxRef("overflow-x")}} ou {{CSSxRef("overflow-y")}}) est définie sur `scroll`, `auto` ou `hidden`.

Chaque valeur de `overflow` d'un conteneur de défilement contrôle quand les barres de défilement sont affichées&nbsp;:

- `scroll`&nbsp;: Les barres de défilement sont toujours affichées, si la plateforme les affiche.
- `auto`&nbsp;: Les barres de défilement ne sont affichées que lorsque le contenu déborde de la boîte.
- `hidden`&nbsp;: Aucune barre de défilement n'est affichée, et l'utilisateur·ice ne peut pas faire défiler le contenu directement, mais il peut toujours être défilé par programmation, par exemple avec {{DOMxRef("Element.scrollTo()")}} ou en focalisant un élément à l'intérieur.

Un conteneur de défilement&nbsp;:

- Établit un nouveau contexte de formatage de bloc, de sorte qu'il contient les flottants et que ses marges ne s'effondrent pas avec celles de ses enfants.
- Sert de boîte de référence pour les descendants dont la propriété CSS {{CSSxRef("position")}} est définie sur `sticky`.
- A une taille minimale automatique de 0 lorsqu'il s'agit d'un élément flexible ou en grille, de sorte qu'il peut rétrécir plus petit que son contenu.

## Zone défilable

Un conteneur de défilement a une **zone défilable** (<i lang="en">scrollport</i> en anglais) — c'est la partie visible d'un conteneur de défilement et elle coïncide avec la boîte de remplissage du conteneur de défilement. Le défilement déplace le contenu dans et hors de la zone défilable pour le visualiser.

## Voir aussi

- [Apprendre&nbsp;: Contenu débordant](/fr/docs/Learn_web_development/Core/Styling_basics/Overflow)
- [Alignement de défilement](/fr/docs/Glossary/Scroll_snap), y compris [conteneur d'alignement de défilement](/fr/docs/Glossary/Scroll_snap#scroll_snap_container)
- [Le module de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- [Le module de gestion du sur-défilement CSS](/fr/docs/Web/CSS/Guides/Overscroll_behavior)
- [Le module d'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Le module d'animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
