---
title: "HTMLTableRowElement : propriété cells"
short-title: cells
slug: Web/API/HTMLTableRowElement/cells
l10n:
  sourceCommit: e5cb967d09849f77746f82d3526243fa956fbd8b
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`cells`** de l'interface {{DOMxRef("HTMLTableRowElement")}} retourne une collection ({{DOMxRef("HTMLCollection")}}) dynamique contenant les cellules de la ligne. La `HTMLCollection` est dynamique et se met automatiquement à jour lorsque des cellules sont ajoutées ou supprimées.

## Valeur

Une collection ({{DOMxRef("HTMLCollection")}}) dynamique d'objets {{DOMxRef("HTMLTableCellElement")}}.

## Exemples

Cet exemple utilise `HTMLTableRowElement.cells` pour afficher le nombre de cellules dans une ligne.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>C1</th>
      <th>C2</th>
      <th>C3</th>
      <th>C4</th>
      <th>C5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cellule 1</td>
      <td>Cellule 2</td>
    </tr>
  </tbody>
</table>

<button id="add">Ajouter une cellule</button>
<button id="remove">Supprimer la dernière cellule</button>
<div>La première ligne contient <output>2</output> cellule(s).</div>
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

### JavaScript

```js
// Obtenir les éléments d'interface pertinents
const bodySection = document.querySelectorAll("tbody")[0];
const row = bodySection.rows[0]; // Sélectionner la première ligne de la section tbody
const cells = row.cells; // La collection est dynamique, donc toujours à jour
const cellNumberDisplay = document.querySelectorAll("output")[0];

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

function updateCellNumber() {
  cellNumberDisplay.textContent = cells.length;
}

addButton.addEventListener("click", () => {
  // Ajouter une nouvelle cellule à la fin de la première ligne
  const newCell = row.insertCell();
  newCell.textContent = `Cellule ${cells.length}`;

  // Mettre à jour le compteur de cellules
  updateCellNumber();
});

removeButton.addEventListener("click", () => {
  // Supprimer la cellule de la ligne
  row.deleteCell(-1);

  // Mettre à jour le compteur de cellules
  updateCellNumber();
});
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 175)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTableRowElement.insertCell()")}}
- La méthode {{DOMxRef("HTMLTableRowElement.deleteCell()")}}
