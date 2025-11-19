---
title: "HTMLImageElement : propriété x"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: e68530dbce2b661c8860e9c6a1c70b1caca5a199
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`x`** de l'interface {{domxref("HTMLImageElement")}} indique la coordonnée x du bord gauche de l'élément HTML {{HTMLElement("img")}} par rapport à l'origine de l'élément racine.

Les propriétés `x` et {{domxref("HTMLImageElement.y", "y")}} ne sont valides pour une image que si sa propriété {{cssxref("display")}} a pour valeur calculée `table-column` ou `table-column-group`. Cela signifie que l'une de ces valeurs est définie explicitement, héritée d'un élément parent, ou appliquée parce que l'image se trouve dans une colonne définie par {{HTMLElement("col")}} ou {{HTMLElement("colgroup")}}.

## Valeur

Un entier indiquant la distance en pixels entre le bord gauche de l'élément racine le plus proche et le bord gauche de la boîte de bordure de l'élément {{HTMLElement("img")}}. L'élément racine le plus proche est l'élément {{HTMLElement("html")}} le plus à l'extérieur qui contient l'image. Si l'image est dans un élément HTML {{HTMLElement("iframe")}}, sa valeur `x` est relative à ce cadre.

Dans le schéma ci-dessous, le bord gauche correspond au bord gauche de la zone de remplissage bleue. La valeur retournée par `x` est donc la distance entre ce point et le bord gauche de la zone de contenu.

![Schéma montrant les relations entre les différentes boîtes associées à un élément](boxmodel-3.png)

> [!NOTE]
> La propriété `x` n'est valide que si la valeur calculée de la propriété {{cssxref("display")}} de l'image est `table-column` ou `table-column-group`&nbsp;: soit l'une de ces valeurs est définie directement sur l'élément {{HTMLElement("img")}}, soit elle est héritée d'un parent, soit l'image se trouve dans une colonne définie par {{HTMLElement("col")}} ou {{HTMLElement("colgroup")}}.

## Exemple

L'exemple ci-dessous montre l'utilisation des propriétés `x` et {{domxref("HTMLImageElement.y", "y")}} de `HTMLImageElement`.

### HTML

Dans cet exemple, un tableau affiche des informations sur des utilisateur·ice·s d'un site web, dont leur identifiant, leur nom complet et leur avatar.

```html
<table id="userinfo">
  <colgroup>
    <col span="2" class="group1" />
    <col />
  </colgroup>
  <tr>
    <th>Identifiant utilisateur</th>
    <th>Nom</th>
    <th>Avatar</th>
  </tr>
  <tr>
    <td>12345678</td>
    <td>Johnny Rocket</td>
    <td>
      <img src="/shared-assets/images/examples/grapefruit-slice.jpg" />
    </td>
  </tr>
</table>
<pre id="log"></pre>
```

### JavaScript

Le code JavaScript ci-dessous récupère l'image du tableau et affiche ses valeurs `x` et `y`.

```js
const logBox = document.querySelector("pre");
const tbl = document.getElementById("userinfo");

const log = (msg) => {
  logBox.innerText += `${msg}\n`;
};

const cell = tbl.rows[1].cells[2];
const image = cell.querySelector("img");

log(`X global de l'image : ${image.x}`);
log(`Y global de l'image : ${image.y}`);
```

Ce code utilise la propriété {{domxref("HTMLTableElement.rows", "rows")}} de l'élément {{HTMLElement("table")}} pour obtenir la liste des lignes du tableau.
Il sélectionne la ligne d'index 1 (c'est-à-dire la deuxième ligne à partir du haut, car l'indexation commence à 0).
Ensuite, il regarde l'élément {{HTMLElement("tr")}} correspondant et utilise la propriété {{domxref("HTMLTableRowElement.cells", "cells")}} pour obtenir la liste des cellules de cette ligne.
La troisième cellule (index 2) est sélectionnée.

À partir de là, on récupère l'élément `<img>` de la cellule en appelant un {{domxref("Element.querySelector", "querySelector()")}} sur l'élément {{domxref("HTMLTableCellElement")}} correspondant.

Enfin, on affiche les valeurs des propriétés `x` et `y` de l'objet `HTMLImageElement`.

### CSS

Le CSS qui définit l'apparence du tableau&nbsp;:

```css
.group1 {
  background-color: #d7d9f2;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(100 100 100);
  font-family: sans-serif;
}

td,
th {
  border: 1px solid rgb(100 100 100);
  padding: 10px 14px;
}

td > img {
  max-width: 4em;
}
```

### Résultat

Le tableau résultant ressemble à ceci&nbsp;:

{{EmbedLiveSample("exemple", 600, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
