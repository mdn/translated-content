---
title: "HTMLTableColElement : propriété span"
short-title: span
slug: Web/API/HTMLTableColElement/span
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

La propriété **`span`** de l'interface {{DOMxRef("HTMLTableColElement")}} représente le nombre de colonnes que ce {{HTMLElement("col")}} ou {{HTMLElement("colgroup")}} doit couvrir&nbsp;; cela permet à la colonne d'occuper l'espace de plusieurs colonnes du tableau. Elle reflète l'attribut [`span`](/fr/docs/Web/HTML/Reference/Elements/col#span).

## Valeur

Un nombre positif représentant le nombre de colonnes.

> [!NOTE]
> Lors de la définition d'une nouvelle valeur, celle-ci est _bornée_ à l'entier strictement positif le plus proche (jusqu'à 1000).

## Exemples

Cet exemple propose deux boutons pour modifier la portée de colonne de la première cellule du corps du tableau.

### HTML

```html
<table>
  <colgroup>
    <col />
    <col span="2" class="multiColumn" />
  </colgroup>
  <thead>
    <tr>
      <th></th>
      <th scope="col">C1</th>
      <th scope="col">C2</th>
      <th scope="col">C3</th>
      <th scope="col">C4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ligne 1</th>
      <td>cellule</td>
      <td>cellule</td>
      <td>cellule</td>
      <td>cellule</td>
    </tr>
  </tbody>
</table>
<button id="increase">Augmenter la portée de colonne</button>
<button id="decrease">Diminuer la portée de colonne</button>
<div>
  Le premier &lt;col&gt; couvre <output>2</output> colonne(s) réelle(s).
</div>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td,
table {
  border: 1px solid black;
}

button {
  margin: 1em 1em 1em 0;
}
```

### CSS

```css
.multiColumn {
  background-color: #d7d9f2;
}
```

### JavaScript

```js
// Récupère les éléments d'interface concernés
const col = document.querySelectorAll("col")[1];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  col.span += 1;

  // Met à jour l'affichage
  output.textContent = col.span;
});

decreaseButton.addEventListener("click", () => {
  col.span -= 1;

  // Met à jour l'affichage
  output.textContent = col.span;
});
```

### Résultat

{{EmbedLiveSample("Examples", "100%", 175)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTableCellElement.colSpan")}}
