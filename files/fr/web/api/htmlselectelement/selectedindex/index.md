---
title: "HTMLSelectElement : propriété selectedIndex"
short-title: selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
l10n:
  sourceCommit: a5e089d79bf681e27fc6bdb9e4026b2489ffa4d9
---

{{APIRef("HTML DOM")}}

La propriété **`selectedIndex`** de l'interface {{DOMxRef("HTMLSelectElement")}} correspond à l'indice numérique du premier élément HTML {{HTMLElement("option")}} sélectionné dans un élément HTML {{HTMLElement("select")}}, s'il y en a un, ou à `-1` si aucune `<option>` n'est sélectionnée. Définir cette propriété sélectionne l'option à cet indice et désélectionne toutes les autres options, tandis que la définir à `-1` désélectionne toutes les options actuellement sélectionnées.

## Valeur

Un nombre.

## Exemples

### HTML

```html
<p id="p">selectedIndex&nbsp;: 0</p>

<select id="select">
  <option selected>Option A</option>
  <option>Option B</option>
  <option>Option C</option>
  <option>Option D</option>
  <option>Option E</option>
</select>
```

### JavaScript

```js
const selectElem = document.getElementById("select");
const pElem = document.getElementById("p");

// Quand une nouvelle <option> est selectionnée
selectElem.addEventListener("change", () => {
  const index = selectElem.selectedIndex;
  // Rapporter cette donnée au <p>
  pElem.innerHTML = `selectedIndex&nbsp;: ${index}`;
});
```

{{EmbedLiveSample("Exemples", 200, 80)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLSelectElement")}}
- L'interface {{DOMxRef("HTMLOptionElement")}}
- L'interface {{DOMxRef("HTMLOptionsCollection")}}
