---
title: "Element : propriété ariaPressed"
short-title: ariaPressed
slug: Web/API/Element/ariaPressed
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

La propriété **`ariaPressed`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed), qui indique l'état actuel «&nbsp;pressé&nbsp;» des boutons bascule.

> [!NOTE]
> Ici, il est possible d'utiliser un élément HTML {{HTMLElement("input")}} avec `type="button"` ou un {{HTMLElement("button")}}, car ils ont une sémantique intégrée et ne nécessitent pas d'attributs ARIA.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : L'élément est pressé.
- `"false"`
  - : L'élément peut être pressé mais ne l'est pas actuellement.
- `"mixed"`
  - : Indique une valeur en mode mixte pour un bouton bascule à trois états.
- `"undefined"`
  - : L'élément ne peut pas être pressé.

## Exemples

Dans cet exemple, l'attribut `aria-pressed` de l'élément avec un ID de `sauvegarderChangements` a été défini sur `"false"`, indiquant que cette entrée n'est actuellement pas pressée. En utilisant `ariaPressed`, nous mettons à jour la valeur à `"true"`.

```html
<div
  id="sauvegarderChangements"
  tabindex="0"
  role="button"
  aria-pressed="false">
  Enregistrer
</div>
```

```js
let el = document.getElementById("sauvegarderChangements");
console.log(el.ariaPressed); // "false"
el.ariaPressed = "true";
console.log(el.ariaPressed); // "true"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
