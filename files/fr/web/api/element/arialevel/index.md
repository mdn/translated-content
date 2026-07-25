---
title: "Element : propriété ariaLevel"
short-title: ariaLevel
slug: Web/API/Element/ariaLevel
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaLevel`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut `aria-level`, qui définit le niveau hiérarchique d'un élément au sein d'une structure.

> [!NOTE]
> Dans la mesure du possible, utilisez un élément HTML `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}` ou un autre niveau de titre correct, car ceux-ci ont une sémantique intégrée et ne nécessitent pas d'attributs ARIA.

## Valeur

Une chaîne de caractères contenant un entier.

## Exemples

Dans cet exemple, l'attribut `aria-level` sur l'élément avec un ID de `titre-principal` est défini sur `"1"`. En utilisant `ariaLevel`, nous mettons à jour la valeur à `"2"`.

```html
<div role="heading" id="titre-principal" aria-level="1">
  Ceci est un titre principal de la page
</div>
```

```js
let el = document.getElementById("titre-principal");
console.log(el.ariaLevel); // "1"
el.ariaLevel = "2";
console.log(el.ariaLevel); // "2"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `heading`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
