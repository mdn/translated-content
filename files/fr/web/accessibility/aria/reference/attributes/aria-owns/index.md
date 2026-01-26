---
title: "ARIA : attribut aria-owns"
short-title: aria-owns
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-owns
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-owns` identifie un ou plusieurs éléments afin de définir une relation visuelle, fonctionnelle ou contextuelle entre un parent et ses éléments enfants lorsque la hiérarchie DOM ne peut pas être utilisée pour représenter cette relation.

## Description

Chaque élément est le parent, un élément au même niveau ou l'enfant d'un autre élément. L'objet document, composé d'éléments HTML et de nœuds de texte, forme la base de l'arbre DOM. Le modèle d'objet d'accessibilité (<abbr title="Accessible Object Model">AOM</abbr>) s'appuie sur un DOM bien construit pour permettre aux technologies d'assistance de transmettre des informations pertinentes sur le contenu d'un document aux utilisateur·ice·s.

Il existe des circonstances où la mise en page visible à l'écran peut différer de la structure DOM sous-jacente en raison de la capacité de JavaScript à modifier le contenu et du CSS à modifier la mise en page. Dans ce cas, l'attribut `aria-owns` peut être utilisé pour recréer une relation significative pour les technologies d'assistance qui consomment le DOM.

Lorsque des éléments semblent liés visuellement mais ne sont pas associés dans le DOM, l'attribut `aria-owns` permet de créer dans la couche d'accessibilité la relation qui apparaît à l'écran pour être utilisée par les technologies d'assistance. La **seule** raison d'inclure `aria-owns` est d'exposer une relation contextuelle parent/enfant aux technologies d'assistance lorsque la construction du DOM ne peut pas fournir cette relation.

Un «&nbsp;élément propriétaire&nbsp;» est tout ancêtre DOM d'un élément. Si un élément semble visuellement, fonctionnellement ou contextuellement «&nbsp;posséder&nbsp;» (être un ancêtre de) un élément, mais n'est pas réellement un ancêtre de l'élément dans le DOM, incluez `aria-owns` pour créer cette relation. Ajoutez l'attribut à l'élément propriétaire en faisant référence à l'élément non-enfant possédé (ou aux éléments) pour indiquer aux technologies d'assistance qu'un élément doit être traité comme un enfant.

La référence à l'ID d'un ou plusieurs éléments permet à n'importe quel élément de «&nbsp;posséder&nbsp;» n'importe quel autre élément avec une déclaration `aria-owns`. La valeur de l'attribut `aria-owns` est une liste d'identifiants séparés par des espaces qui référence les identifiants d'un ou plusieurs éléments dans le document.

> [!NOTE]
> Un élément «&nbsp;possédé&nbsp;» est tout descendant DOM de l'élément, tout élément définit comme enfant via `aria-owns`, ou tout descendant DOM de l'enfant possédé. L'élément possédé par `aria-owns` devrait être un élément appartenant à un arbre parent séparé dans le DOM mais devant être traité comme un enfant de l'élément courant.

N'utilisez pas `aria-owns` comme substitut de la hiérarchie DOM. Si la relation est représentée dans le DOM, n'utilisez pas `aria-owns`.

Un élément enfant est, par défaut, la propriété de son parent DOM&nbsp;: dans ce cas, `aria-owns` ne doit pas être utilisé. Évitez d'utiliser l'attribut `aria-owns` pour réorganiser des éléments enfants existants dans un ordre différent.

Lors de l'utilisation de `aria-owns`, assurez-vous de [gérer l'ordre du focus <sup>(angl.)</sup>](https://css-tricks.com/focus-management-and-inert/). Assurez-vous que l'ordre visuel du focus correspond à cet ordre de lecture pour les technologies d'assistance.

Un exemple d'utilisation de `aria-owns` inclut les sous-menus contextuels qui apparaissent visuellement positionnés près d'un menu parent, mais qui ne peuvent pas être imbriqués dans le DOM à l'intérieur du menu parent car cela affecterait la présentation visuelle. Dans ce cas, utilisez `aria-owns` pour présenter le sous-menu comme un enfant du menu parent pour un lecteur d'écran.

> [!NOTE]
> L'attribut `aria-owns` ne doit être utilisé que lorsque la relation parent/enfant ne peut pas être déterminée à partir du DOM.

Si un élément possède à la fois `aria-owns` et des enfants dans le DOM, l'ordre des éléments enfants&nbsp;:

1. Les enfants DOM courant d'abord,
2. Ensuite, les éléments référencés dans `aria-owns`.

Cet ordre peut être modifié en incluant les références d'ID des enfants DOM courant dans la valeur `aria-owns`.

La propriété {{CSSxRef('order')}}, faisant partie des mises en page flex ou grid, peut être utilisée pour modifier l'ordre des éléments flex et grid, les faisant apparaître dans un ordre différent de leur ordre dans le document source, créant une divergence de l'ordre logique des éléments. Bien qu'il puisse être tentant d'ordonner la couche d'accessibilité afin de correspondre aux changements d'ordre créés avec la propriété CSS {{CSSxRef('order')}}, éviter à la fois la propriété `order` et l'attribut `aria-owns` est la meilleure option.

Assurez-vous que vos éléments possédés n'ont qu'un seul propriétaire. Ne spécifiez pas l'`id` d'un élément dans l'attribut `aria-owns` de plus d'un autre élément. Un élément ne peut avoir qu'un seul propriétaire.

> [!WARNING]
> Bien que [`aria-owns` soit maintenant pris en charge <sup>(angl.)</sup>](https://a11ysupport.io/tech/aria/aria-owns_attribute) dans tous les navigateurs modernes, `aria-owns` peut ne pas être exposé aux utilisateur·ice·s de macOS et iOS utilisant VoiceOver avant iOS 17.3 et macOS 14.3.

## Valeurs

- `id` list
  - : Liste d'identifiants séparés par des espaces correspondant aux éléments possédés par l'élément courant

## Interfaces associées

- {{DOMxRef("Element.ariaOwnsElements")}}
  - : La propriété `ariaOwnsElements` fait partie de l'interface de chaque élément.
    Sa valeur est un tableau de sous-classes de {{DOMxRef("Element")}} qui reflètent les références `id` dans l'attribut `aria-owns` ([avec quelques réserves](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchies)).
- {{DOMxRef("ElementInternals.ariaOwnsElements")}}
  - : La propriété `ariaOwnsElements` fait partie de l'interface de chaque élément personnalisé.
    Sa valeur est un tableau de sous-classes de {{DOMxRef("Element")}} qui reflètent les références `id` dans l'attribut `aria-owns` ([avec quelques réserves](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchies)).

## Rôles associés

Utilisé dans **TOUS** les rôles.

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [Prise en charge des navigateurs pour `aria-owns` <sup>(angl.)</sup>](https://a11ysupport.io/tech/aria/aria-owns_attribute)
