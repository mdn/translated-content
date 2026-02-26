---
title: "HTMLTableRowElement : méthode deleteCell()"
short-title: deleteCell()
slug: Web/API/HTMLTableRowElement/deleteCell
l10n:
  sourceCommit: 712156520cf3aaca9f9b37d9a82831063eb9c87b
---

{{APIRef("HTML DOM")}}

La méthode **`deleteCell()`** de l'interface {{DOMxRef("HTMLTableRowElement")}} supprime une cellule spécifique d'une ligne donnée ({{HTMLElement("tr")}}).

## Syntaxe

```js-nolint
deleteCell(index)
```

### Paramètres

- `index`
  - : L'indice de la cellule à supprimer. Si `index` vaut `-1` ou est égal au nombre de cellules, la dernière cellule de la ligne est supprimée.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `IndexSizeError` {{DOMxRef("DOMException")}}
  - : Levée si `index` est supérieur au nombre de cellules ou s'il est inférieur à `-1`.

## Exemples

Cet exemple utilise {{DOMxRef("HTMLTableRowElement.insertCell()")}} pour ajouter une nouvelle cellule à une ligne.

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

- La méthode {{DOMxRef("HTMLTableElement.insertRow()")}}
- L'élément HTML représentant les cellules&nbsp;: {{DOMxRef("HTMLTableCellElement")}}
