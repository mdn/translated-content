---
title: "Element : propriété role"
short-title: role
slug: Web/API/Element/role
l10n:
  sourceCommit: 0b9c68dc63f9c6803cced8d9a76c31012d87b530
---

{{APIRef("DOM")}}

La propriété **`role`** de l'interface {{DOMxRef("Element")}} retourne le [rôle WAI-ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) explicitement défini pour l'élément.

Tous les éléments HTML ont un rôle ARIA implicite, même si ce rôle est [`generic`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role). Cette association sémantique permet aux outils de présenter et de prendre en charge l'interaction avec l'objet d'une manière cohérente avec les attentes des utilisateur·ice·s concernant d'autres objets de ce type. L'attribut `role` est utilisé pour définir explicitement le rôle ARIA de l'élément, remplaçant le rôle implicite. Par exemple, un {{HTMLElement("ul")}}, qui a un rôle [`list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) implicite, peut avoir [`role="treegrid"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) défini explicitement. La propriété `role` reflète la valeur explicitement définie de l'attribut `role` — dans ce cas `treegrid`&nbsp;; elle ne retourne pas le rôle `list` implicite de l'élément sauf si celui-ci est défini explicitement.

La liste complète des rôles ARIA définis se trouve sur la page de référence des [rôles ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles).

## Valeur

Une chaîne de caractères&nbsp;; la valeur de l'attribut `role` ou `null` si elle n'est pas définie explicitement.

## Exemples

Dans cet exemple, les images avec des attributs `alt` vides ou manquants se voient attribuer un `role` de [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)&nbsp;:

```js
const images = document.querySelectorAll("img");
images.forEach((image) => {
  if (!image.alt) {
    image.role = "presentation";
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("ElementInternals.role")}}
- [Les attributs ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes)
