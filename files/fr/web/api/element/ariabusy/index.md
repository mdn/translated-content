---
title: "Element : propriété ariaBusy"
short-title: ariaBusy
slug: Web/API/Element/ariaBusy
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaBusy`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy), qui indique si un élément est en cours de modification, car les technologies d'assistance peuvent vouloir attendre que les modifications soient terminées avant de les exposer à l'utilisateur·ice.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : L'élément est en cours de mise à jour.
- `"false"`
  - : Aucune mise à jour n'est prévue pour l'élément.

## Exemples

Dans cet exemple, l'attribut `aria-busy` sur l'élément avec un ID de `clock` est défini sur `"false"`. En utilisant `ariaBusy`, nous mettons à jour la valeur à `"true"`.

```html
<div
  id="horloge"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-busy="false"></div>
```

```js
let el = document.getElementById("horloge");
console.log(el.ariaBusy); // false
el.ariaBusy = "true";
console.log(el.ariaBusy); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
