---
title: "Element : propriété ariaDisabled"
short-title: ariaDisabled
slug: Web/API/Element/ariaDisabled
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaDisabled`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled), qui indique que l'élément est perceptible mais désactivé, donc il n'est pas modifiable ou autrement opérationnel.

> [!NOTE]
> Dans la mesure du possible, utilisez l'élément HTML {{HTMLElement("input")}} avec `type="button"` ou l'élément {{HTMLElement("button")}} — car ces éléments ont une sémantique intégrée et ne nécessitent pas d'attributs ARIA.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : L'élément et tous ses descendants sélectionnables sont désactivés, mais perceptibles, et leurs valeurs ne peuvent pas être modifiées par l'utilisateur·ice.
- `"false"`
  - : L'élément est activé.

## Exemples

Dans cet exemple, l'attribut `aria-disabled` sur l'élément avec un ID de `sauvegarderModifications` est défini sur `"true"`, indiquant que cet input est actuellement désactivé. En utilisant `ariaDisabled`, nous mettons à jour la valeur à `"false"`.

```html
<div
  id="sauvegarderModifications"
  tabindex="0"
  role="button"
  aria-disabled="true">
  Sauvegarder
</div>
```

```js
let el = document.getElementById("sauvegarderModifications");
console.log(el.ariaDisabled); // "true"
el.ariaDisabled = "false";
console.log(el.ariaDisabled); // "false"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
