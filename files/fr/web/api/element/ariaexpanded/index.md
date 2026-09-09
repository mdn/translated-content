---
title: "Element : propriété ariaExpanded"
short-title: ariaExpanded
slug: Web/API/Element/ariaExpanded
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaExpanded`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded), qui indique si un élément de regroupement possédé ou contrôlé par cet élément est développé ou réduit.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : L'élément de regroupement possédé ou contrôlé par cet élément est développé.
- `"false"`
  - : L'élément de regroupement possédé ou contrôlé par cet élément est réduit.
- `"undefined"`
  - : L'élément ne possède pas ou ne contrôle pas un élément de regroupement extensible.

## Exemples

Dans cet exemple, l'attribut `aria-expanded` sur l'élément avec un ID de `animal` est défini sur `"false"`. En utilisant `ariaExpanded`, nous mettons à jour la valeur à `"true"`.

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
console.log(el.ariaExpanded); // false
el.ariaExpanded = "true";
console.log(el.ariaExpanded); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
