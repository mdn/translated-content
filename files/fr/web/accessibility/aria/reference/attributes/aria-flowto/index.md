---
title: "ARIA : attribut aria-flowto"
short-title: aria-flowto
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-flowto
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut global `aria-flowto` identifie le ou les éléments suivants dans un ordre de lecture alternatif du contenu. Cela permet aux technologies d'assistance de remplacer, à la demande de l'utilisateur·ice, l'ordre de lecture par défaut du document (l'ordre source).

## Description

Les pages Web doivent être navigables de façon séquentielle. Pour cette raison, il est déconseillé aux développeur·euse·s d'utiliser l'attribut global [tabindex](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex), qui peut modifier l'ordre de tabulation, ainsi que la propriété CSS {{CSSXRef('order')}}, qui peut modifier l'ordre visuel par rapport à l'ordre du DOM. Cependant, dans de rares cas, un chemin de lecture différent de l'ordre source est nécessaire. Pour ces situations, l'attribut `aria-flowto` peut rendre le contenu plus accessible aux utilisateur·ice·s de technologies d'assistance.

L'attribut global `aria-flowto` permet à l'auteur·ice d'indiquer aux utilisateur·ice·s de technologies d'assistance quels éléments pourraient être ciblés ensuite, en fournissant un ordre de lecture alternatif à l'ordre source. Cela permet aux technologies d'assistance de lire un document dans un ordre différent de l'ordre de lecture source par défaut.

Lorsque `aria-flowto` contient une seule référence d'[identifiant](/fr/docs/Web/HTML/Reference/Global_attributes/id), il permet aux technologies d'assistance, à la demande de l'utilisateur·ice, d'aller vers l'élément ciblé via cet identifiant au lieu de lire le document dans l'ordre du DOM. Lorsque la valeur de `aria-flowto` utilise une liste d'identifiants séparés par des espaces, la technologie d'assistance peut proposer à l'utilisateur·ice une liste de choix de chemin, chaque identifiant référencé étant un choix. Les noms des choix de chemin sont déterminés par le nom accessible de chaque élément cible de l'attribut `aria-flowto`.

> [!NOTE]
> Définir `aria-flowto` n'a aucun impact sur l'ordre de tabulation du contenu. Cela offre simplement aux utilisateur·ice·s la possibilité de suivre un chemin de contenu qui ne correspond pas à l'ordre du DOM lorsqu'ils utilisent une technologie prenant en charge cet attribut.

## Valeurs

- `id`
  - : L'identifiant (`id`) de l'élément suivant dans l'ordre de lecture alternatif.
- Une liste d'identifiants (`id`)
  - : Liste d'identifiants séparés par des espaces, référant les éléments vers lesquels l'utilisateur·ice peut vouloir aller ensuite dans l'ordre de lecture alternatif du contenu.

## Interfaces associées

- {{domxref("Element.ariaFlowToElements")}}
  - : La propriété `ariaFlowToElements` fait partie de l'interface de chaque élément.
    Sa valeur est un tableau d'instances de sous-classes de l'interface {{domxref("Element")}} qui reflètent les identifiants référencés dans l'attribut `aria-flowto` ([avec certaines restrictions](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchies)).
- {{domxref("ElementInternals.ariaFlowToElements")}}
  - : La propriété `ariaFlowToElements` fait partie de l'interface de chaque élément personnalisé.
    Sa valeur est un tableau d'instances de sous-classes de l'interface {{domxref("Element")}} qui reflètent les identifiants référencés dans l'attribut `aria-flowto` ([avec certaines restrictions](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchies)).

## Rôles associés

Utilisé dans **TOUS** les rôles.

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut HTML [id](/fr/docs/Web/HTML/Reference/Global_attributes/id)
- L'attribut HTML [tabindex](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex)
- La propriété CSS {{CSSXRef('order')}}
- [WCAG&nbsp;: ordre source](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#règle_2.4_—_navigation_fournir_des_moyens_daider_les_utilisateurs_et_utilisatrices_à_naviguer_trouver_du_contenu_et_savoir_leur_position)
- [Utilisation de aria-flowto <sup>(angl.)</sup>](https://www.w3.org/WAI/GL/wiki/Using_aria-flowto) - Wiki du W3
