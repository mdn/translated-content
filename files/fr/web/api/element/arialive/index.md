---
title: "Element : propriété ariaLive"
short-title: ariaLive
slug: Web/API/Element/ariaLive
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaLive`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live), qui indique qu'un élément est mis à jour et décrit les types de mises à jour que les agents utilisateurs, les technologies d'assistance et l'utilisateur·ice peuvent attendre de la [région dynamique](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions).

## Valeur

Une chaîne de caractères contenant l'une des valeurs suivantes&nbsp;:

- `"assertive"`
  - : Indique que les mises à jour de la région ont la plus haute priorité et doivent être présentées à l'utilisateur·ice immédiatement.
- `"off"`
  - : Indique que les mises à jour de la région ne doivent pas être présentées à l'utilisateur·ice sauf si celui-ci est actuellement concentré sur cette région.
- `"polite"`
  - : Indique que les mises à jour de la région doivent être présentées à la prochaine opportunité appropriée, par exemple à la fin de la lecture de la phrase en cours ou lorsque l'utilisateur·ice fait une pause dans la saisie.

## Exemples

Dans cet exemple, l'attribut [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) sur l'élément avec un ID de `infoPlanete` est défini sur `"polite"`. Nous mettons ensuite à jour la valeur à `"assertive"`.

```html
<div role="region" id="infoPlanete" aria-live="polite">
  <h2 id="titrePlanete">Aucune planète sélectionnée</h2>
  <p id="descriptionPlanete">
    Sélectionnez une planète pour voir sa description
  </p>
</div>
```

```js
let el = document.getElementById("infoPlanete");
console.log(el.ariaLive); // "polite"
el.ariaLive = "assertive";
console.log(el.ariaLive); // "assertive"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
