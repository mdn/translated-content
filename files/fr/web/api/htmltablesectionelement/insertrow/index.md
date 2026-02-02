---
title: "HTMLTableSectionElement : méthode insertRow()"
short-title: insertRow()
slug: Web/API/HTMLTableSectionElement/insertRow
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

La méthode **`insertRow()`** de l'interface {{DOMxRef("HTMLTableSectionElement")}} insère une nouvelle ligne ({{HTMLElement("tr")}}) dans l'élément de section de tableau donné ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} ou {{HTMLElement("tbody")}}), puis retourne une référence vers cette nouvelle ligne.

> [!NOTE]
> `insertRow()` insère la ligne directement dans la section. Il n'est pas nécessaire d'ajouter la ligne séparément comme ce serait le cas si {{DOMxRef("Document.createElement()")}} avait été utilisé pour créer le nouvel élément HTML `<tr>`.

## Syntaxe

```js-nolint
insertRow()
insertRow(index)
```

### Paramètres

- `index` {{Optional_Inline}}
  - : L'indice de la nouvelle ligne. Si `index` vaut `-1` ou est égal au nombre de lignes, la ligne est ajoutée en dernière position.
    Si `index` est omis, il prend la valeur `-1` par défaut.

### Valeur de retour

Un objet {{DOMxRef("HTMLTableRowElement")}} qui référence la nouvelle ligne.

### Exceptions

- `IndexSizeError` {{DOMxRef("DOMException")}}
  - : Levée si `index` est supérieur au nombre de lignes ou inférieur à `-1`.

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

- La méthode {{DOMxRef("HTMLTableRowElement.insertCell()")}}
- La méthode {{DOMxRef("HTMLTableElement.insertRow()")}}
