---
title: "HTMLDialogElement : propriété closedBy"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("HTML DOM")}}

La propriété **`closedBy`** de l'interface {{DOMxRef("HTMLDialogElement")}} indique les types d'actions utilisateur·ice·s qui peuvent être utilisées pour fermer l'élément {{HTMLElement("dialog")}} associé. Elle définit ou retourne la valeur de l'attribut {{HTMLElement("dialog", "<code>closedby</code>", "closedby")}} du dialogue.

## Valeur

Une chaîne de caractères&nbsp;; les valeurs possibles sont&nbsp;:

- `any`
  - : La boîte de dialogue peut être fermée par une action de «&nbsp;fermeture légère&nbsp;», une action spécifique à la plateforme ou un mécanisme défini par le·la développeur·euse.
- `closerequest`
  - : La boîte de dialogue peut être fermée par une action spécifique à la plateforme ou un mécanisme défini par le·la développeur·euse.
- `none`
  - : La boîte de dialogue ne peut être fermée que par un mécanisme défini par le·la développeur·euse.

## Exemples

### Utilisation simple de `closedBy`

```html
<dialog open closedby="any">
  <h2>Ma boîte de dialogue</h2>
  <p>
    Fermable avec la touche Échap ou en cliquant en dehors de la boîte de
    dialogue. Comportement de «&nbsp;fermeture légère&nbsp;».
  </p>
</dialog>
```

```js
const dialogElem = document.querySelector("dialog");

// Affiche "any" dans la console
console.log(dialogElem.closedBy);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("dialog")}}
