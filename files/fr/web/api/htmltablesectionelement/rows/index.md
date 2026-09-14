---
title: "HTMLTableSectionElement : propriété rows"
short-title: rows
slug: Web/API/HTMLTableSectionElement/rows
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`rows`** de l'interface {{DOMxRef("HTMLTableSectionElement")}} retourne une collection ({{DOMxRef("HTMLCollection")}}) dynamique contenant les lignes de la section. L'objet `HTMLCollection` est dynamique et se met automatiquement à jour lorsque des lignes sont ajoutées ou supprimées.

## Valeur

Une collection ({{DOMxRef("HTMLCollection")}}) dynamique d'objets {{DOMxRef("HTMLTableRowElement")}}.

## Exemples

Dans cet exemple, deux boutons permettent d'ajouter et de supprimer des lignes de la section corps du tableau&nbsp;; il met également à jour un élément HTML {{HTMLElement("output")}} avec le nombre de lignes actuellement dans le tableau.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Col 1</th>
      <th>Col 2</th>
      <th>Col 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>X</td>
      <td>Y</td>
      <td>Z</td>
    </tr>
  </tbody>
</table>
<button id="add">Ajouter une ligne</button>
<button id="remove">Supprimer la dernière ligne</button>
<div>Le corps de ce tableau contient <output>1</output> ligne(s).</div>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
}

button {
  margin: 1em 1em 1em 0;
}
```

### JavaScript

```js
// Récupère les éléments d'interface pertinents
const bodySection = document.querySelectorAll("tbody")[0];
const rows = bodySection.rows; // La collection est dynamique, donc toujours à jour
const rowNumberDisplay = document.querySelectorAll("output")[0];

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

function updateRowNumber() {
  rowNumberDisplay.textContent = rows.length;
}

addButton.addEventListener("click", () => {
  // Ajoute une nouvelle ligne à la fin du corps
  const newRow = bodySection.insertRow();

  // Ajoute des cellules dans la nouvelle ligne
  ["A", "B", "C"].forEach(
    (elt) => (newRow.insertCell().textContent = `${elt}${rows.length}`),
  );

  // Met à jour le compteur de lignes
  updateRowNumber();
});

removeButton.addEventListener("click", () => {
  // Supprime la ligne du corps
  bodySection.deleteRow(-1);

  // Met à jour le compteur de lignes
  updateRowNumber();
});
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 175)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("text-align")}}
