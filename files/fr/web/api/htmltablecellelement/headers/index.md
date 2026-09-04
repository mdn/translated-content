---
title: "HTMLTableCellElement : propriété headers"
short-title: headers
slug: Web/API/HTMLTableCellElement/headers
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML DOM")}}

La propriété **`headers`** de l'interface {{DOMxRef("HTMLTableCellElement")}} contient une liste d'identifiants des éléments {{HTMLElement("th")}} qui sont des _entêtes_ pour cette cellule spécifique.

## Valeur

Une chaîne de caractères contenant des identifiants séparés par des espaces.

## Exemples

Cet exemple liste l'identifiant de la dernière cellule cliquée du tableau&nbsp;:

### HTML

```html
<table>
  <thead>
    <tr>
      <th rowspan="2" id="h">Devoirs (ID = h)</th>
      <th colspan="3" id="e">Examens (ID = e)</th>
      <th colspan="3" id="p">Projets (ID = p)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="e1" headers="e">1 (ID = e1)</th>
      <th id="e2" headers="e">2 (ID = e2)</th>
      <th id="ef" headers="e">Final (ID = ef)</th>
      <th id="p1" headers="p">1 (ID = p1)</th>
      <th id="p2" headers="p">2 (ID = p2)</th>
      <th id="pf" headers="p">Final (ID = pf)</th>
    </tr>
    <tr>
      <td headers="h">15%</td>
      <td headers="e e1">15%</td>
      <td headers="e e2">15%</td>
      <td headers="e ef">20%</td>
      <td headers="p p1">10%</td>
      <td headers="p p2">10%</td>
      <td headers="p pf">15%</td>
    </tr>
  </tbody>
</table>
Identifiants des entêtes de la dernière cellule cliquée&nbsp;:
<output>aucun</output>.
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
const table = document.querySelector("table");
const output = document.querySelector("output");

table.addEventListener("click", (ev) => {
  output.textContent = ev.target.headers ? ev.target.headers : "none";
});
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
