---
title: "Element : propriété ariaHasPopup"
short-title: ariaHasPopup
slug: Web/API/Element/ariaHasPopup
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaHasPopup`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), qui indique la disponibilité et le type d'élément interactif de fenêtre bloquante, tel qu'un menu ou une boîte de dialogue, qui peut être déclenché par un élément.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"false"`
  - : L'élément n'a pas de fenêtre bloquante.
- `"true"`
  - : L'élément a une fenêtre bloquante qui est un menu.
- `"menu"`
  - : L'élément a une fenêtre bloquante qui est un menu.
- `"listbox"`
  - : L'élément a une fenêtre bloquante qui est une liste.
- `"tree"`
  - : L'élément a une fenêtre bloquante qui est un arbre.
- `"grid"`
  - : L'élément a une fenêtre bloquante qui est une grille.
- `"dialog"`
  - : L'élément a une fenêtre bloquante qui est une boîte de dialogue.

> [!WARNING]
> Soyez conscient que la prise en charge des différentes valeurs de `aria-haspopup` peut varier en fonction de l'élément auquel l'attribut est défini. Assurez-vous que lors de l'utilisation de `aria-haspopup`, c'est fait conformément à la spécification ARIA, et que cela se comporte comme prévu lors des tests avec les navigateurs et les technologies d'assistance nécessaires.

## Exemples

Dans cet exemple, l'attribut `aria-haspopup` sur l'élément avec un ID de `animal` est défini sur `"true"`. En utilisant `ariaHasPopup`, nous mettons à jour la valeur à `"listbox"`, qui est la valeur attendue pour une boîte combinée qui invoque une fenêtre bloquante de type `listbox`.

```html
<div class="boite-combinee-animal">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="list"
    aria-controls="liste-boite-animaux"
    aria-expanded="false"
    aria-haspopup="true" />
  <ul id="liste-boite-animaux" role="listbox" aria-label="Animaux">
    <li id="animal-chat" role="option">Chat</li>
    <li id="animal-chien" role="option">Chien</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaHasPopup); // true
el.ariaHasPopup = "listbox";
console.log(el.ariaHasPopup); // listbox
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
