---
title: "HTMLTableCellElement : propriété abbr"
short-title: abbr
slug: Web/API/HTMLTableCellElement/abbr
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

La propriété **`abbr`** de l'interface {{DOMxRef("HTMLTableCellElement")}} indique une abréviation associée à la cellule. Si la cellule ne représente pas une cellule d'en-tête {{HTMLElement("th")}}, elle est ignorée.

Elle reflète l'attribut `abbr` de l'élément HTML {{HTMLElement("th")}}.

> [!NOTE]
> Cette propriété n'a pas d'effet visuel dans les navigateurs. Elle ajoute des informations pour aider les technologies d'assistance comme les lecteurs d'écran qui peuvent utiliser cette abréviation.

## Valeur

Une chaîne de caractères.

## Exemples

Cet exemple ajoute des préfixes avec l'abréviation associée à l'en-tête de ligne de chaque première cellule.

### HTML

```html
<table>
  <thead>
    <tr>
      <th abbr="Fabricant">Constructeur</th>
      <th abbr="Modèle">Modèle de voiture</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tesla</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BYD</td>
      <td>Dauphin</td>
    </tr>
    <tr>
      <td>VW</td>
      <td>ID.3</td>
    </tr>
  </tbody>
</table>
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
const rows = document.querySelectorAll("thead tr");
const cells = rows[0].cells;

for (const cell of cells) {
  cell.textContent = `${cell.textContent} (${cell.abbr})`;
}
```

### Résultats

{{EmbedLiveSample("Exemples", "100%", 220)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
