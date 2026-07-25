---
title: "Element : propriété ariaChecked"
short-title: ariaChecked
slug: Web/API/Element/ariaChecked
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaChecked`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked), qui indique l'état actuel «&nbsp;coché&nbsp;» des cases à cocher, des boutons radio et d'autres composants qui ont un état coché.

> [!NOTE]
> Dans la mesure du possible, utilisez un élément HTML {{HTMLElement("input")}} avec `type="checkbox"`, car cet élément possède une sémantique intégrée et ne nécessite pas d'attributs ARIA.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : L'élément est coché.
- `"mixed"`
  - : Indique une valeur mixte pour une case à cocher ou un élément de menu à trois états.
- `"false"`
  - : L'élément peut être coché mais n'est pas actuellement coché.
- `"undefined"`
  - : L'élément ne peut pas être coché.

## Exemples

Dans cet exemple, l'attribut `aria-checked` de l'élément avec un ID de `checkBoxInput` est défini sur `"false"`, indiquant que cette entrée n'est actuellement pas cochée. En utilisant `ariaChecked`, nous mettons à jour la valeur à `"true"`.

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label">
</span>
<label id="chk1-label">Se souvenir de mes préférences</label>
```

```js
let el = document.getElementById("checkBoxInput");
console.log(el.ariaChecked); // "false"
el.ariaChecked = "true";
console.log(el.ariaChecked); // "true"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
