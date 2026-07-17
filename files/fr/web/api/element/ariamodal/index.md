---
title: "Element : propriété ariaModal"
short-title: ariaModal
slug: Web/API/Element/ariaModal
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaModal`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut `aria-modal`, qui indique si un élément est une fenêtre bloquante (<i lang="en">modal</i> en anglais) lorsqu'il est affiché. L'application de la propriété `aria-modal` à un élément avec `role="dialog"` remplace la technique consistant à utiliser `aria-hidden` sur l'arrière-plan pour informer les technologies d'assistance que le contenu en dehors d'une boîte de dialogue est inerte.

## Valeur

Une chaîne de caractères contenant l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : L'élément est une fenêtre bloquante.
- `"false"`
  - : L'élément n'est pas une fenêtre bloquante.

## Exemples

Dans cet exemple, l'attribut `aria-modal` sur l'élément avec un ID de `fenetre-adresse` est défini sur `"true"`, indiquant qu'il s'agit d'une boîte de dialogue bloquante. En utilisant `ariaModal`, nous mettons à jour la valeur à `"false"`.

```html
<div
  role="dialog"
  id="fenetre-adresse"
  aria-labelledby="titreDialogue1"
  aria-describedby="descriptionDialogue1"
  aria-modal="true"></div>
```

```js
let el = document.getElementById("fenetre-adresse");
console.log(el.ariaModal); // "true"
el.ariaModal = "false";
console.log(el.ariaModal); // "false"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
