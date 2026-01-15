---
title: "ARIA : rôle grid"
short-title: grid
slug: Web/Accessibility/ARIA/Reference/Roles/grid_role
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

Le rôle `grid` est destiné à un widget qui contient une ou plusieurs lignes de cellules. La position de chaque cellule est significative et peut être mise au point à l'aide de l'entrée au clavier.

## Description

Le rôle `grid` est un widget composite contenant une collection d'une ou plusieurs lignes avec une ou plusieurs cellules où certaines ou toutes les cellules de la grille sont accessibles par des méthodes de navigation bidimensionnelle, telles que les touches fléchées directionnelles.

```html
<table role="grid" aria-labelledby="id-select-your-seat">
  <caption id="id-select-your-seat">
    Sélectionnez votre siège
  </caption>
  <tbody role="presentation">
    <tr role="presentation">
      <td></td>
      <th>Ligne A</th>
      <th>Ligne B</th>
    </tr>
    <tr>
      <th scope="row">Allée 1</th>
      <td tabindex="0">
        <button id="1a" tabindex="-1">1A</button>
      </td>
      <td tabindex="-1">
        <button id="1b" tabindex="-1">1B</button>
      </td>
      <!-- More Columns -->
    </tr>
    <tr>
      <th scope="row">Allée 2</th>
      <td tabindex="-1">
        <button id="2a" tabindex="-1">2A</button>
      </td>
      <td tabindex="-1">
        <button id="2b" tabindex="-1">2B</button>
      </td>
      <!-- More Columns -->
    </tr>
  </tbody>
</table>
```

Un widget de grille contient une ou plusieurs lignes avec une ou plusieurs cellules de contenu interactif thématiquement lié. Bien qu'il n'implique pas de présentation visuelle spécifique, il implique une relation entre les éléments. Les utilisations se répartissent en deux catégories : la présentation d'informations tabulaires (grilles de données) et le regroupement d'autres widgets (grilles de mise en page). Même si les grilles de données et les grilles de mise en page utilisent les mêmes rôles, états et propriétés ARIA, les différences dans leur contenu et leur objectif font ressortir des facteurs importants à prendre en compte dans la conception de l'interaction au clavier. Voir [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) pour plus de détails.

Les éléments de cellule ont le rôle [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), sauf s'ils sont un en-tête de ligne ou de colonne, auquel cas, les éléments sont [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) et [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), respectivement. Les éléments de cellule doivent être possédés par des éléments avec un rôle [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role). Les lignes peuvent être regroupées à l'aide du rôle [`rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).

Si la grille est utilisée comme un widget interactif, des [interactions au clavier](#keyboard_interactions) doivent être mises en œuvre.

### Propriétés, états et rôles ARIA associés

#### Rôles

- [treegrid](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) (sous-classe)
  - : Si une grille a des colonnes qui peuvent être développées ou réduites, un treegrid peut être utilisé.
- [row](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Une ligne à l'intérieur de la grille.
- [rowgroup](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Un groupe contenant une ou plusieurs [row](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role).

#### États et propriétés

- [aria-level](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
  - : Indique le niveau hiérarchique de la grille au sein d'autres structures.
- [aria-multiselectable](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Si `aria-multiselectable` est défini sur `true`, plusieurs éléments de la grille peuvent être sélectionnés. La valeur par défaut est `false`.
- [aria-readonly](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Si l'utilisateur·ice peut naviguer dans la grille mais ne peut pas modifier la valeur ou les valeurs de la grille, l'attribut [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) doit être défini sur `true`. La valeur par défaut est `false`.

> [!NOTE]
> Pour de nombreux cas d'utilisation, un élément HTML {{HTMLElement('table')}} est suffisant car il et les différents éléments de tableau incluent déjà de nombreux rôles ARIA.

### Interactions au clavier

Lorsqu'un·e utilisateur·ice de clavier rencontre une grille, il navigue dans les lignes et les colonnes à l'aide des touches <kbd>gauche</kbd>, <kbd>droite</kbd>, <kbd>haut</kbd> et <kbd>bas</kbd>. Pour activer le composant interactif, il utilisera les touches <kbd>entrée</kbd> et <kbd>espace</kbd>.

| Touche                             | Action                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>→</kbd>                       | Déplace la sélection d'une cellule vers la droite. En option (grilles de mise en page), si la sélection est sur la cellule la plus à droite de la ligne, la sélection peut passer à la première cellule de la ligne suivante. Si la sélection est sur la dernière cellule de la grille, la sélection ne bouge pas.               |
| <kbd>←</kbd>                       | Déplace la sélection d'une cellule vers la gauche. En option (grilles de mise en page), si la sélection est sur la cellule la plus à gauche de la ligne, la sélection peut passer à la dernière cellule de la ligne précédente. Si la sélection est sur la première cellule de la grille, la sélection ne bouge pas.             |
| <kbd>↓</kbd>                       | Déplace la sélection d'une cellule vers le bas. En option (grilles de mise en page), si la sélection est sur la cellule du bas de la colonne, la sélection peut passer à la cellule du haut de la colonne suivante. Si la sélection est sur la dernière cellule de la grille, la sélection ne bouge pas.                         |
| <kbd>↑</kbd>                       | Déplace la sélection d'une cellule vers le haut. En option (grilles de mise en page), si la sélection est sur la cellule du haut de la colonne, la sélection peut passer à la cellule du bas de la colonne précédente. Si la sélection est sur la première cellule de la grille, la sélection ne bouge pas.                      |
| <kbd>Page&nbsp;bas</kbd>           | Déplace la sélection vers le bas d'un nombre de lignes déterminé par l'auteur, faisant généralement défiler la grille pour que la dernière ligne de l'ensemble de lignes actuellement visibles devienne l'une des premières lignes visibles. Si la sélection est sur la dernière ligne de la grille, la sélection ne bouge pas.  |
| <kbd>Page&nbsp;haut</kbd>          | Déplace la sélection vers le haut d'un nombre de lignes déterminé par l'auteur, faisant généralement défiler la grille pour que la première ligne de l'ensemble de lignes actuellement visibles devienne l'une des dernières lignes visibles. Si la sélection est sur la première ligne de la grille, la sélection ne bouge pas. |
| <kbd>Début</kbd>                   | Déplace la sélection vers la première cellule de la ligne contenant la sélection.                                                                                                                                                                                                                                                |
| <kbd>Fin</kbd>                     | Déplace la sélection vers la dernière cellule de la ligne contenant la sélection.                                                                                                                                                                                                                                                |
| <kbd>Ctrl</kbd> + <kbd>Début</kbd> | Déplace la sélection vers la première cellule de la première ligne.                                                                                                                                                                                                                                                              |
| <kbd>Ctrl</kbd> + <kbd>Fin</kbd>   | Déplace la sélection vers la dernière cellule de la dernière ligne.                                                                                                                                                                                                                                                              |

Si des cellules, des lignes ou des colonnes peuvent être sélectionnées, les combinaisons de touches suivantes sont couramment utilisées&nbsp;:

| Combinaison de touches              | Action                                                                                                                                                                                                                                                           |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Ctrl</kbd> + <kbd>Espace</kbd> | Sélectionne la colonne contenant la sélection.                                                                                                                                                                                                                   |
| <kbd>Maj</kbd> + <kbd>Espace</kbd>  | Sélectionne la ligne contenant la sélection. Si la grille comprend une colonne avec des cases à cocher pour sélectionner des lignes, cette combinaison de touches peut être utilisée pour cocher cette case même si la sélection n'est pas sur la case à cocher. |
| <kbd>Ctrl</kbd> + <kbd>A</kbd>      | Sélectionne toutes les cellules.                                                                                                                                                                                                                                 |
| <kbd>Maj</kbd> + <kbd>→</kbd>       | Étend la sélection d'une cellule vers la droite.                                                                                                                                                                                                                 |
| <kbd>Maj</kbd> + <kbd>←</kbd>       | Étend la sélection d'une cellule vers la gauche.                                                                                                                                                                                                                 |
| <kbd>Maj</kbd> + <kbd>↓</kbd>       | Étend la sélection d'une cellule vers le bas.                                                                                                                                                                                                                    |
| <kbd>Maj</kbd> + <kbd>↑</kbd>       | Étend la sélection d'une cellule vers le haut.                                                                                                                                                                                                                   |

## Exemples

### Exemple de calendrier

{{EmbedLiveSample("exemple_de_calendrier", "100%", "300")}}

#### HTML

```html
<table role="grid" aria-labelledby="calendarheader">
  <caption id="calendarheader">
    Septembre 2018
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <td></td>
      <th role="columnheader" aria-label="Lundi">L</th>
      <th role="columnheader" aria-label="Mardi">M</th>
      <th role="columnheader" aria-label="Mercredi">M</th>
      <th role="columnheader" aria-label="Jeudi">J</th>
      <th role="columnheader" aria-label="Vendredi">V</th>
      <th role="columnheader" aria-label="Samedi">S</th>
      <th role="columnheader" aria-label="Dimanche">D</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <th scope="row" role="rowheader">Semaine 1</th>
      <td>27</td>
      <td>28</td>
      <td>29</td>
      <td>30</td>
      <td>31</td>
      <td role="gridcell" tabindex="-1">1</td>
      <td role="gridcell" tabindex="-1">2</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Semaine 2</th>
      <td role="gridcell" tabindex="-1">3</td>
      <td role="gridcell" tabindex="-1">4</td>
      <td role="gridcell" tabindex="-1">5</td>
      <td role="gridcell" tabindex="-1">6</td>
      <td role="gridcell" tabindex="-1">7</td>
      <td role="gridcell" tabindex="-1">8</td>
      <td role="gridcell" tabindex="-1">9</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Semaine 3</th>
      <td role="gridcell" tabindex="-1">10</td>
      <td role="gridcell" tabindex="-1">11</td>
      <td role="gridcell" tabindex="-1">12</td>
      <td role="gridcell" tabindex="-1">13</td>
      <td role="gridcell" tabindex="-1">14</td>
      <td role="gridcell" tabindex="-1">15</td>
      <td role="gridcell" tabindex="-1">16</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Semaine 4</th>
      <td role="gridcell" tabindex="-1">17</td>
      <td role="gridcell" tabindex="-1">18</td>
      <td role="gridcell" tabindex="-1">19</td>
      <td role="gridcell" tabindex="-1">20</td>
      <td role="gridcell" tabindex="-1">21</td>
      <td role="gridcell" tabindex="-1">22</td>
      <td role="gridcell" tabindex="-1">23</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Semaine 5</th>
      <td role="gridcell" tabindex="-1">24</td>
      <td role="gridcell" tabindex="-1">25</td>
      <td role="gridcell" tabindex="-1">26</td>
      <td role="gridcell" tabindex="-1">27</td>
      <td role="gridcell" tabindex="-1">28</td>
      <td role="gridcell" tabindex="-1">29</td>
      <td role="gridcell" tabindex="-1">30</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Semaine 6</th>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  margin: 0;
  border-collapse: collapse;
  font-variant-numeric: tabular-nums;
}

tbody th,
tbody td {
  padding: 5px;
}

tbody td {
  border: 1px solid black;
  text-align: right;
  color: #767676;
}

tbody td[role="gridcell"] {
  color: black;
}

tbody td[role="gridcell"]:hover,
tbody td[role="gridcell"]:focus {
  background-color: #f6f6f6;
  outline: 3px solid blue;
}
```

#### JavaScript

```js
const selectables = document.querySelectorAll('table td[role="gridcell"]');

selectables[0].setAttribute("tabindex", 0);

const trs = document.querySelectorAll("table tbody tr");
let rowIndex = 0;
let colIndex = 0;
let maxRow = trs.length - 1;
let maxCol = 0;

trs.forEach((row) => {
  row.querySelectorAll("td").forEach((el) => {
    el.dataset.row = rowIndex;
    el.dataset.col = colIndex;
    colIndex++;
  });
  if (colIndex > maxCol) {
    maxCol = colIndex - 1;
  }
  colIndex = 0;
  rowIndex++;
});

function moveTo(newRow, newCol) {
  const tgt = document.querySelector(
    `[data-row="${newRow}"][data-col="${newCol}"]`,
  );
  if (tgt?.getAttribute("role") !== "gridcell") {
    return false;
  }
  document.querySelectorAll("[role=gridcell]").forEach((el) => {
    el.setAttribute("tabindex", "-1");
  });
  tgt.setAttribute("tabindex", "0");
  tgt.focus();
  return true;
}

document.querySelector("table").addEventListener("keydown", (event) => {
  const col = parseInt(event.target.dataset.col, 10);
  const row = parseInt(event.target.dataset.row, 10);
  switch (event.key) {
    case "ArrowRight": {
      const newRow = col === 6 ? row + 1 : row;
      const newCol = col === 6 ? 0 : col + 1;
      moveTo(newRow, newCol);
      break;
    }
    case "ArrowLeft": {
      const newRow = col === 0 ? row - 1 : row;
      const newCol = col === 0 ? 6 : col - 1;
      moveTo(newRow, newCol);
      break;
    }
    case "ArrowDown":
      moveTo(row + 1, col);
      break;
    case "ArrowUp":
      moveTo(row - 1, col);
      break;
    case "Home": {
      if (event.ctrlKey) {
        let i = 0;
        let result;
        do {
          let j = 0;
          do {
            result = moveTo(i, j);
            j++;
          } while (!result);
          i++;
        } while (!result);
      } else {
        moveTo(row, 0);
      }
      break;
    }
    case "End": {
      if (event.ctrlKey) {
        let i = maxRow;
        let result;
        do {
          let j = maxCol;
          do {
            result = moveTo(i, j);
            j--;
          } while (!result);
          i--;
        } while (!result);
      } else {
        moveTo(
          row,
          document.querySelector(
            `[data-row="${event.target.dataset.row}"]:last-of-type`,
          ).dataset.col,
        );
      }
      break;
    }
    case "PageUp": {
      let i = 0;
      let result;
      do {
        result = moveTo(i, col);
        i++;
      } while (!result);
      break;
    }
    case "PageDown": {
      let i = maxRow;
      let result;
      do {
        result = moveTo(i, col);
        i--;
      } while (!result);
      break;
    }
    case "Enter": {
      console.log(event.target.textContent);
      break;
    }
  }
  event.preventDefault();
});
```

### Plus d'exemples

- [Exemples de grilles de données <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/example-index/grid/dataGrids.html)
- [Exemples de grilles de mise en page <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/example-index/grid/LayoutGrids.html)
- [Tutoriel W3C/WAI&nbsp;: Tableaux <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/tables/)

## Problèmes d'accessibilité

Même si l'utilisation du clavier est correctement implémentée, certain·e·s utilisateur·ice·s pourraient ne pas être conscients qu'ils doivent utiliser les touches fléchées. Assurez-vous que la fonctionnalité et l'interaction nécessaires peuvent être mieux réalisées en utilisant le rôle de grille.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `composite`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [ARIA&nbsp;: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [ARIA&nbsp;: rôle `treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [ARIA&nbsp;: rôle `row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA&nbsp;: rôle `rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [ARIA&nbsp;: rôle `gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [ARIA&nbsp;: rôle `rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [ARIA&nbsp;: rôle `columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- L'élément HTML {{HTMLElement('table')}}
- L'attribut ARIA [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- L'attribut ARIA [`aria-multiselectable`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- L'attribut ARIA [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
