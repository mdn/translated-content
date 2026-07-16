---
title: "ARIA : attribut aria-relevant"
short-title: aria-relevant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-relevant
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Utilisé dans les régions ARIA dynamiques, l'attribut global `aria-relevant` indique quelles notifications l'agent utilisateur va déclencher lorsque l'{{Glossary("Accessibility_tree", "arbre d'accessibilité")}} d'une région dynamique est modifié.

## Description

Les [régions dynamiques ARIA](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions) sont des zones d'une page web qui sont mises à jour alors que l'attention de l'utilisateur·ice peut être ailleurs. Lorsqu'une mise à jour se produit en dehors de la sélection clavier de l'utilisateur·ice, les technologies d'assistance comme les lecteurs d'écran utilisent une région dynamique pour signaler les changements.

Exemples de régions dynamiques&nbsp;: bandeaux d'actualités, tickers boursiers, fenêtres de chat, tableaux de scores. Ces zones se mettent à jour sans interaction de l'utilisateur·ice. Certaines mises à jour sont importantes à signaler&nbsp;: elles sont pertinentes. D'autres ne le sont pas. L'attribut `aria-relevant` sert à décrire quels types de changements ont eu lieu dans une région [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live), et lesquels sont pertinents et doivent être annoncés.

La valeur est une liste d'espaces des types de changements, incluant `additions`, `removals` et `text`, avec le raccourci `all` qui signifie les trois à la fois.

Quand `aria-relevant` n'est pas défini, la valeur est héritée du plus proche ancêtre ayant une valeur définie. Les valeurs héritées ne sont pas additives&nbsp;: la valeur fournie sur un élément descendant remplace complètement toute valeur héritée d'un ancêtre. Lorsqu'une région dynamique n'a pas d'attribut `aria-relevant` et qu'aucun ancêtre n'en possède, la valeur par défaut est `additions text`, ce qui signifie que des nœuds d'élément sont ajoutés à l'arbre d'accessibilité dans la région dynamique, ET que du contenu textuel ou une alternative textuelle est ajoutée à tout descendant dans l'arbre d'accessibilité de la région dynamique. En général, les modifications de texte et les ajouts de nœuds sont pertinents, mais les suppressions de nœuds ne le sont pas.

Bien que non supportée, si la valeur `none` est la plus logique, la zone ne doit pas être une région dynamique.

Les valeurs `removals` et `all` doivent être utilisées avec parcimonie. Par exemple, lorsqu'un but est marqué lors de la Coupe du monde, le nouveau score (l'ajout) est important, l'ancien score (la suppression) ne l'est pas. Les technologies d'assistance n'ont besoin d'être informées d'une suppression de contenu que si celle-ci représente un changement important, comme lorsqu'un·e joueur·euse est retiré·e du jeu.

## Valeurs

- `additions`
  - : Des nœuds d'élément sont ajoutés à l'arbre d'accessibilité dans la région dynamique.
- `all`
  - : Raccourci pour `additions removals text`.
- `removals`
  - : Du contenu textuel, une alternative textuelle ou un nœud d'élément dans la région dynamique est supprimé de l'arbre d'accessibilité.
- `text`
  - : Du contenu textuel ou une alternative textuelle est ajouté à tout descendant dans l'arbre d'accessibilité de la région dynamique.

## Interfaces associées

- {{DOMxRef("Element.ariaRelevant")}}
  - : La propriété {{DOMxRef("Element.ariaRelevant", "ariaRelevant")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-relevant`.
- {{DOMxRef("ElementInternals.ariaRelevant")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaRelevant", "ariaRelevant")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-relevant`.

## Rôles associés

Utilisé dans **TOUS** les rôles.

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- L'attribut ARIA [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- L'attribut ARIA [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [Régions dynamiques ARIA](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions)
