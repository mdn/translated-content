---
title: "ARIA : attribut aria-label"
short-title: aria-label
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-label
l10n:
  sourceCommit: f81599343ec5bd4571b3adaa1c6e4d5ded60b8e1
---

L'attribut `aria-label` définit une chaîne de caractères qui peut servir à nommer un élément, tant que le rôle de l'élément n'[interdit pas la nomination](#rôles_associés).

## Description

Parfois, le {{Glossary("accessible_name", "nom accessible")}} par défaut d'un élément est absent ou n'est pas suffisamment descriptif, et aucun contenu visible dans le DOM ne peut être associé à l'objet pour lui donner du sens. Un exemple courant est un bouton contenant une icône SVG sans texte.

Dans le cas où un élément qui n'est pas dans la [liste des rôles interdits](#rôles_associés), n'a pas de nom accessible ou que ce nom n'est pas pertinent, et qu'aucun contenu visible dans le DOM ne peut être référencé via l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), l'attribut `aria-label` permet de définir une chaîne de caractères qui nomme l'élément interactif sur lequel il est appliqué. Cela fournit à l'élément un nom accessible.

L'exemple ci-dessous montre comment utiliser l'attribut `aria-label` pour fournir un nom accessible à un élément `<button>`. Ce bouton contient un graphique SVG et n'a pas de contenu textuel, rendant l'attribut `aria-label` essentiel pour que les utilisateur·ice·s de lecteurs d'écran comprennent sa fonction, ici «&nbsp;Fermer&nbsp;».

```html
<button aria-label="Fermer">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="black" />
  </svg>
</button>
```

```js
document.querySelector("button").addEventListener("click", () => {
  myDialog.close();
});
```

> [!NOTE]
> `aria-label` est destiné à nommer les éléments dont le rôle implicite ou explicite n'interdit pas la nomination. Il est fortement recommandé de privilégier l'utilisation de `aria-labelledby` plutôt que `aria-label` si un libellé visible existe et peut être référencé pour nommer l'élément.

La plupart des contenus possèdent un nom accessible généré à partir du texte de leur élément englobant. Les noms accessibles peuvent aussi être créés par certains attributs ou éléments associés.

Par défaut, le nom accessible d'un bouton est le contenu entre les balises {{HTMLElement('button')}} ouvrante et fermante, celui d'une image est le contenu de son attribut [`alt`](/fr/docs/Web/HTML/Reference/Elements/img#alt), et celui d'un champ de formulaire est le contenu de l'élément HTML {{HTMLElement('label')}} associé.

Si aucune de ces options n'est disponible ou si le nom accessible par défaut n'est pas pertinent, utilisez l'attribut `aria-label` pour définir le nom accessible de l'élément.

> [!NOTE]
> Bien que `aria-label` puisse être utilisé sur tout élément pouvant avoir un nom accessible, en pratique il n'est pris en charge que sur les éléments interactifs, les [widgets](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#rôles_de_widgets), les [repères](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#rôles_de_repères), les images et les cadres (<i lang="en">iframes</i> en anglais).

Lors de l'utilisation de `aria-label`, il faut aussi considérer [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)&nbsp;:

- `aria-label` peut être utilisé lorsque le texte qui pourrait nommer l'élément n'est _pas_ visible. Si un texte visible nomme l'élément, utilisez plutôt `aria-labelledby`.
- Le but de `aria-label` est le même que celui de `aria-labelledby`. Les deux fournissent un nom accessible à un élément. S'il n'existe pas de nom visible pouvant être référencé, utilisez `aria-label` pour fournir un nom accessible reconnaissable à l'utilisateur·ice. Si un texte de libellé est disponible dans le DOM et peut être référencé pour une expérience utilisateur·ice satisfaisante, privilégiez `aria-labelledby`. N'utilisez pas les deux sur le même élément, car `aria-labelledby` prendra le dessus sur `aria-label` si les deux sont présents.

Gardez à l'esprit les recommandations suivantes lors de l'utilisation de `aria-label`&nbsp;:

- L'attribut `aria-label` peut être utilisé avec les éléments HTML sémantiques classiques&nbsp;; il n'est pas limité aux éléments ayant un [rôle ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) assigné.
- N'abusez pas de `aria-label`. Rappelez-vous qu'il est principalement destiné aux technologies d'assistance. Pour fournir des instructions supplémentaires ou clarifier l'interface, utilisez du texte visible avec `aria-describedby` ou [`aria-description`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), et non `aria-label`. Les instructions doivent être accessibles à tous·tes, pas uniquement aux utilisateur·ice·s de lecteurs d'écran (ou mieux, rendez votre interface plus intuitive).

  > [!NOTE]
  > Le contenu de `aria-label` n'est pas affiché en dehors des technologies d'assistance, pensez à rendre les informations importantes visibles pour tous·tes.

- Tous les éléments ne peuvent pas recevoir un nom accessible. Ni `aria-label` ni `aria-labelledby` ne doivent être utilisés avec les rôles structurels en ligne comme `code`, `term` et `emphasis`, ni avec les rôles non mappés à l'API d'accessibilité, dont `none`. L'attribut `aria-label` est destiné aux éléments tels que les liens, vidéos, contrôles de formulaire, et ceux ayant des [rôles de repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#rôles_de_repères) ou [rôles de widget](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#rôles_de_widget)&nbsp;; `aria-label` fournit un nom accessible lorsqu'aucun libellé visible n'existe dans le DOM.
- Si vous attribuez un `title` à une {{HTMLElement('iframe')}}, un attribut `alt` à une {{HTMLElement('img')}}, ou un {{HTMLElement('label')}} à un {{HTMLElement('input')}}, `aria-label` n'est pas nécessaire. Cependant, si un attribut `aria-label` est présent, il prendra le dessus sur le `title` de l'iframe, le `alt` de l'image ou le texte du `<label>` de l'entrée comme nom accessible de l'élément.

## Valeurs

- `<string>`
  - : Une chaîne de caractères qui sera le nom accessible de l'objet.

## Interfaces associées

- {{DOMxRef("Element.ariaLabel")}}
  - : La propriété [`ariaLabel`](/fr/docs/Web/API/Element/ariaLabel), faisant partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-label`.
- {{DOMxRef("ElementInternals.ariaLabel")}}
  - : La propriété [`ariaLabel`](/fr/docs/Web/API/ElementInternals/ariaLabel), faisant partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-label`.

## Rôles associés

Utilisé dans presque tous les rôles **sauf** ceux pour lesquels l'auteur·ice ne peut pas fournir de nom accessible.

L'attribut `aria-label` n'est **PAS** pris en charge dans&nbsp;:

- [`caption`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`code`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`definition`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`generic`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [`insertion`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`mark`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role)
- [`paragraph`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) et [`none`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`strong`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`suggestion`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role)
- [`superscript`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`term`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`time`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('label')}}
- L'attribut ARIA [`aria-description`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- L'attribut ARIA [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Utiliser les rôles de repère HTML pour améliorer l'accessibilité](/fr/blog/aria-accessibility-html-landmark-roles/) sur le blog MDN (2023)
