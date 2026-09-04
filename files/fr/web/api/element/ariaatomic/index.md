---
title: "Element : propriété ariaAtomic"
short-title: ariaAtomic
slug: Web/API/Element/ariaAtomic
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaAtomic`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic), qui indique si les technologies d'assistance présentent l'ensemble de la région modifiée ou seulement certaines parties, en fonction des notifications de changement définies par l'attribut [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant).

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"false"`
  - : Les technologies d'assistance ne présentent que le ou les nœuds modifiés.
- `"true"`
  - : Les technologies d'assistance présentent l'ensemble de la région modifiée dans son ensemble, y compris l'étiquette définie par l'auteur·ice si elle existe.

## Exemples

Dans cet exemple, l'attribut `aria-atomic` sur l'élément avec un ID de `"horloge"` est défini sur `"true"`. En utilisant `ariaAtomic`, nous mettons à jour la valeur à `"false"`.

```html
<div id="horloge" role="timer" aria-live="polite" aria-atomic="true"></div>
```

```js
let el = document.getElementById("horloge");
console.log(el.ariaAtomic); // true
el.ariaAtomic = "false";
console.log(el.ariaAtomic); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
