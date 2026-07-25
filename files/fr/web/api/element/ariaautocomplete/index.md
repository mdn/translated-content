---
title: "Element : propriété ariaAutoComplete"
short-title: ariaAutoComplete
slug: Web/API/Element/ariaAutoComplete
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaAutoComplete`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete), qui indique si la saisie de texte peut déclencher l'affichage d'une ou plusieurs prédictions de la valeur que l'utilisateur·ice souhaite pour une boîte de combinaison, une boîte de recherche ou une zone de texte, et définit comment les prédictions sont présentées si elles sont faites.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"inline"`
  - : Lorsque l'utilisateur·ice saisit du texte, un texte suggérant une manière de compléter la saisie peut être inséré dynamiquement après le curseur.
- `"list"`
  - : Lorsque l'utilisateur·ice saisit du texte, un élément contenant une collection de valeurs pouvant compléter la saisie fournie peut être affiché.
- `"both"`
  - : Lorsque l'utilisateur·ice saisit du texte, un élément contenant une collection de valeurs pouvant compléter la saisie fournie peut être affiché. Si affiché, une valeur de la collection est automatiquement sélectionnée, et le texte nécessaire pour compléter la valeur automatiquement sélectionnée apparaît après le curseur dans la saisie.
- `"none"`
  - : Lorsque l'utilisateur·ice saisit du texte, aucun affichage de suggestion automatique ne tente de prédire comment l'utilisateur·ice souhaite compléter la saisie.

## Exemples

Dans cet exemple, l'attribut `aria-autocomplete` sur l'élément avec un ID de `animal` est défini sur `"inline"`. En utilisant `ariaAutoComplete`, nous mettons à jour la valeur à `"list"`, ce qui est la valeur attendue pour une boîte de combinaison qui invoque une fenêtre intrusive de type `listbox`.

```html
<div class="boite-combinee-animal">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="inline"
    aria-controls="liste-boite-animaux"
    aria-expanded="false"
    aria-haspopup="listbox" />
  <ul id="liste-boite-animaux" role="listbox" aria-label="Animaux">
    <li id="animal-chat" role="option">Chat</li>
    <li id="animal-chien" role="option">Chien</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaAutoComplete); // inline
el.ariaAutoComplete = "list";
console.log(el.ariaAutoComplete); // list
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
