---
title: "Element : propriété ariaRoleDescription"
short-title: ariaRoleDescription
slug: Web/API/Element/ariaRoleDescription
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaRoleDescription`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-roledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription), qui définit une description lisible par l'homme et localisée par l'auteur·ice pour le rôle d'un élément.

## Valeur

Une chaîne de caractères.

## Exemples

Dans cet exemple, l'attribut `aria-roledescription` sur l'élément avec un ID de `monApplication` est défini. En utilisant `ariaRoleDescription`, nous mettons à jour la valeur.

```html
<div
  id="monApplication"
  role="application"
  aria-roledescription="une description de ce composant"></div>
  …
</div>
```

```js
let el = document.getElementById("monApplication");
console.log(el.ariaRoleDescription); // "une description de ce composant"
el.ariaRoleDescription = "une description mise à jour de ce composant";
console.log(el.ariaRoleDescription); // "une description mise à jour de ce composant"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
