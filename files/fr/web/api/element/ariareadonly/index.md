---
title: "Element : propriété ariaReadOnly"
short-title: ariaReadOnly
slug: Web/API/Element/ariaReadOnly
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaReadOnly`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly), qui indique que l'élément n'est pas modifiable, mais reste autrement opérationnel.

> [!NOTE]
> Dans la mesure du possible, utilisez un élément HTML {{HTMLElement("input")}} avec `type="text"` ou un {{HTMLElement("textarea")}}, car ils ont une sémantique intégrée et ne nécessitent pas d'attributs ARIA.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : L'utilisateur·ice ne peut pas modifier la valeur de l'élément.
- `"false"`
  - : L'utilisateur·ice peut définir la valeur de l'élément.

## Exemples

Dans cet exemple, l'attribut `aria-readonly` sur l'élément avec un ID de `boiteSaisieTexte` est défini sur `"true"`, indiquant que cette entrée est actuellement en lecture seule. En utilisant `ariaReadOnly`, nous mettons à jour la valeur à `"false"`.

```html
<div id="etiquetteBoiteTexteMultiligne">
  Entrez les étiquettes pour l'article
</div>
<div
  role="textbox"
  id="boiteSaisieTexte"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="etiquetteBoiteTexteMultiligne"
  aria-readonly="true"></div>
```

```js
let el = document.getElementById("boiteSaisieTexte");
console.log(el.ariaReadOnly); // "true"
el.ariaReadOnly = "false";
console.log(el.ariaReadOnly); // "false"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
