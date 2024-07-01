---
title: hidden
slug: Web/HTML/Global_attributes/hidden
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`hidden`** est un attribut booléen qui indique s'il n'est pas encore ou s'il n'est plus pertinent d'afficher l'élément courant. Cet attribut peut, par exemple, être utilisé afin de masquer des éléments tant que l'utilisateur ne s'est pas connecté. Le navigateur n'affichera pas les éléments masqués via cet attribut.

{{EmbedInteractiveExample("pages/tabbed/attribute-hidden.html","tabbed-shorter")}}

Cet attribut ne doit pas être utilisé pour masquer du contenu qui devrait pouvoir être vu sous une autre présentation. Si un contenu est marqué comme masqué, il sera masqué pour l'ensemble des présentations, y compris pour les lecteurs d'écran et autres outils d'assistance.

Les éléments cachés avec `hidden` ne devraient pas avoir de lien qui pointent vers eux depuis des éléments visibles. De plus, les éléments fils de l'élément caché sont toujours actifs : cela signifie qu'ils peuvent être utilisés par les scripts et que les formulaires peuvent envoyer des données. Dans certains autres contextes, il est possible d'avoir des relations avec les éléments cachés via `hidden`.

Par exemple, on peut utiliser l'attribut ARIA `aria-describedby` pour faire référence à une description qui serait cachée (si cette dernière n'est pas pertinente seule). De même un élément {{HTMLElement("canvas")}} caché peut être utilisé comme un _buffer_ hors champ par moteur graphique scripté.

> **Note :** Cet attribut sera surchargé par la propriété CSS {{cssxref("display")}}. Ainsi, un élément dont le style a `display: flex` sera affiché à l'écran, même si l'attribut `hidden` est présent.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- [Utiliser l'attribut `aria-hidden`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-hidden_attribute)
