---
title: "Element : propriété ariaRelevant"
short-title: ariaRelevant
slug: Web/API/Element/ariaRelevant
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}{{Non-standard_Header}}

La propriété **`ariaRelevant`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant), qui indique quelles notifications l'agent utilisateur déclenche lorsque l'arbre d'accessibilité à l'intérieur d'une région active est modifié. Cela permet de décrire quels changements dans une région `aria-live` sont pertinents et doivent être annoncés.

## Valeur

Une chaîne de caractères contenant une ou plusieurs des valeurs suivantes, séparées par des espaces&nbsp;:

- `"additions"`
  - : Ajouts de nœuds d'élément dans la région active doivent être considérés comme pertinents.
- `"removals"`
  - : Suppression de nœuds de la région active doit être considérée comme pertinente.
- `"text"`
  - : Modifications du contenu textuel des nœuds existants doivent être considérées comme pertinentes.
- `"all"`
  - : Équivalent à `"additions removals text"`.

## Exemples

Dans cet exemple, l'attribut [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) sur l'élément avec un ID de `horloge` est défini sur `"all"`. En utilisant `ariaRelevant`, nous mettons à jour la valeur à `"text"`.

```html
<div
  id="horloge"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-relevant="all"></div>
```

```js
let el = document.getElementById("horloge");
console.log(el.ariaRelevant); // all
el.ariaRelevant = "text";
console.log(el.ariaRelevant); // text
```

## Compatibilité des navigateurs

{{Compat}}
