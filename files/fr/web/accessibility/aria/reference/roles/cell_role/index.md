---
title: "ARIA : rôle cell"
short-title: cell
slug: Web/Accessibility/ARIA/Reference/Roles/cell_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

La valeur `cell` de l'attribut ARIA `role` identifie un élément comme étant une cellule dans un conteneur tabulaire qui ne contient pas d'informations d'en-tête de colonne ou de ligne. Pour être prise en charge, la cellule doit être imbriquée dans un élément avec le rôle `row`.

```html
<div role="row">
  <span role="cell">France</span>
  <span role="cell">67 millions</span>
</div>
```

Une meilleure façon, plus sémantique, d'écrire les cellules ci-dessus serait d'utiliser l'élément sémantique {{HTMLElement("td")}}.

```html
<tr role="row">
  <td role="cell">France</td>
  <td role="cell">67 millions</td>
</tr>
```

## Description

L'élément avec `role="cell"` est une cellule au sein d'une ligne, éventuellement dans un [`rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), au sein d'un [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role). Si la cellule se trouve dans un [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) ou un [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role), optez pour [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role). L'utilisation des éléments HTML natifs {{HTMLElement('td')}} est fortement encouragée autant que possible.

Chaque élément avec `role="cell"` DOIT être imbriqué dans un conteneur avec [`role="row"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role). Cette ligne peut à son tour être imbriquée dans un élément avec [`role="rowgroup"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role), et doit être imbriquée dans un `grid`, `table` ou `treegrid`. Si la cellule contient des informations d'en-tête de colonne ou de ligne, utilisez respectivement les rôles `columnheader` ou `rowheader`. Si la cellule ne contient pas d'informations d'en-tête et est imbriquée dans un `grid` ou un `treegrid`, le rôle `gridcell` peut être plus approprié.

Une cellule peut contenir un certain nombre d'attributs de propriété précisant la position de la cellule dans la structure de données tabulaire, notamment [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-colspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan), [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) et [`aria-rowspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan).

> [!NOTE]
> L'utilisation de l'élément de tableau HTML natif ({{HTMLElement('table')}}), accompagné de l'élément de ligne de tableau ({{HTMLElement('tr')}}) et de la cellule de tableau ({{HTMLElement('td')}}), est fortement encouragée autant que possible.

### Rôles, états et propriétés WAI-ARIA associés

#### Rôles de contexte

- [role="row"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Un élément avec `role="row"` est une ligne de cellules au sein d'une structure tabulaire. Une ligne contient une ou plusieurs cellules, cellules de grille, en-têtes de colonne ou en-têtes de ligne au sein d'un [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), d'un [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) ou d'un `treegrid`, et éventuellement au sein d'un [`rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).
- [role="rowgroup"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : `row` est un parent requis pour `cell`. `rowgroup` est un parent contextuel optionnel de lignes. Il établit une relation entre les lignes descendantes. C'est l'équivalent structurel des éléments {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} et {{HTMLElement("tbody")}} d'un élément [HTML `table`](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics).
- [role="table"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : L'un des trois contextes possibles (avec `grid` et `treegrid`) dans lesquels on trouve une ligne contenant des cellules. `table` identifie la cellule comme faisant partie d'une structure de tableau non interactive contenant des données disposées en lignes et colonnes, similaire à l'élément HTML natif {{HTMLElement("table")}}.
- [role="grid"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : L'un des trois contextes possibles (avec `table` et `treegrid`) dans lesquels on trouve une ligne contenant des `cells` et des `gridcells`. `grid` identifie une cellule comme faisant partie d'une structure de tableau potentiellement interactive contenant des données disposées en lignes et colonnes, similaire à l'élément HTML natif {{HTMLElement("table")}}.
- [role="treegrid"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Similaire à une grille, mais avec des lignes qui peuvent être développées et réduites comme dans un arbre.

#### Rôles de sous-classe

- [role="gridcell"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Une cellule dans une ligne au sein d'un `grid` ou d'un `treegrid`.
- [role="columnheader"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Une cellule d'en-tête équivalente structurellement à l'élément HTML {{HTMLElement("th")}} avec une portée de colonne. Contrairement à une cellule ordinaire, le rôle `columnheader` établit une relation entre lui-même et toutes les cellules de la colonne correspondante.
- [role="rowheader"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Une cellule d'en-tête équivalente structurellement à l'élément HTML {{HTMLElement("th")}} avec une portée de ligne. Contrairement à une cellule ordinaire, le rôle `rowheader` établit une relation entre lui-même et toutes les cellules de la ligne correspondante.

#### États et propriétés

- [`aria-colspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
  - : Similaire aux attributs HTML de {{HTMLElement("th")}} et de [`<td>` `colspan`](/fr/docs/Web/HTML/Reference/Elements/td), il définit le nombre de colonnes sur lesquelles la cellule s'étend.
- [`aria-rowspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
  - : Similaire aux attributs HTML de {{HTMLElement("th")}} et de [`<td>` `rowspan`](/fr/docs/Web/HTML/Reference/Elements/td), il définit le nombre de lignes sur lesquelles la cellule s'étend.
- [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : L'attribut `aria-colindex` n'est nécessaire que si des colonnes sont absentes du DOM. Sa valeur est un entier compris entre 1 et le nombre total de colonnes du `table`, `grid` ou `treegrid`. `aria-colindex` définit l'index de colonne d'un élément ou sa position par rapport au nombre total de colonnes dans une ligne. Si toutes les colonnes sont présentes dans le DOM, cet attribut n'est pas nécessaire.
- [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : L'attribut `aria-rowindex` n'est nécessaire que si des lignes sont absentes du DOM, afin d'indiquer dans quelle ligne, parmi le total, se trouve la cellule courante. Sa valeur est un entier compris entre 1 et le nombre total de lignes du tableau, de la grille ou de la grille arborescente, indiquant la position de la cellule. Par exemple, une cellule de la première ligne de l'en-tête aurait probablement `aria-rowindex="1"`, et des cellules de la ligne 47 auraient `aria-rowindex="47"`, si `aria-rowindex` était nécessaire parce que toutes les lignes ne sont pas dans le DOM. Si les lignes visibles sont contiguës et qu'aucune cellule n'a de `colspan` ou `rowspan` supérieur à un, cette propriété peut être ajoutée aux lignes parentes plutôt qu'à toutes les cellules des lignes.

### Interactions clavier

Aucune.

### Fonctionnalités JavaScript requises

La première règle d'utilisation d'ARIA est la suivante&nbsp;: si vous pouvez utiliser une fonctionnalité native avec la sémantique et le comportement requis déjà intégrés, au lieu de détourner un élément et **d'ajouter** un rôle, un état ou une propriété ARIA pour le rendre accessible, faites-le. Employez l'élément HTML {{HTMLElement("td")}} plutôt que le rôle ARIA `cell` dès que possible.

## Exemples

```html
<div
  role="table"
  aria-label="Éléments sémantiques"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <div id="semantic_elements_table_desc">
    Éléments sémantiques à utiliser à la place des rôles ARIA
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="none" aria-rowindex="1"
        >Rôle ARIA</span
      >
      <span role="columnheader" aria-sort="none" aria-rowindex="1"
        >Élément sémantique</span
      >
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell" aria-rowindex="11">en-tête</span>
      <span role="cell" aria-rowindex="11">h1</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="16">en-tête</span>
      <span role="cell" aria-rowindex="16">h6</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="18">groupe de lignes</span>
      <span role="cell" aria-rowindex="18">thead</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="24">terme</span>
      <span role="cell" aria-rowindex="24">dt</span>
    </div>
  </div>
</div>
```

L'exemple ci-dessus est un tableau ARIA non sémantique avec cinq des 81 lignes présentes dans le DOM&nbsp;: une dans l'en-tête du tableau et quatre lignes dans le corps du tableau. Comme toutes les lignes ne sont pas dans le DOM, nous avons inclus la propriété `aria-rowindex` sur chaque cellule. Si aucune cellule ne s'étend sur plus d'une ligne ou colonne, `aria-rowindex` aurait pu être placé sur la ligne plutôt que sur les cellules individuelles de la ligne.

## Bonnes pratiques

N'utilisez que {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} etc., pour structurer les tableaux de données. Vous pouvez ajouter des rôles ARIA pour garantir l'accessibilité si la sémantique native du tableau est supprimée, par exemple via la propriété [`display`](/fr/docs/Web/CSS/Reference/Properties/display#accessibilité). Un cas d'usage pertinent pour le rôle ARIA `table` est lorsque la sémantique native d'un tableau est remplacée par la [propriété `display` de CSS, par exemple avec `display: grid`](/fr/docs/Web/CSS/Reference/Properties/display#accessibilité). Dans ce cas, vous pouvez utiliser les rôles de tableau ARIA pour réintroduire la sémantique.

```html
<table
  role="table"
  aria-label="Éléments sémantiques"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <caption id="semantic_elements_table_desc">
    Élément sémantique à utiliser à la place des rôles ARIA
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none" aria-rowindex="1">Rôle ARIA</th>
      <th role="columnheader" aria-sort="none" aria-rowindex="1">
        Élément sémantique
      </th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" aria-rowindex="11">en-tête</td>
      <td role="cell" aria-rowindex="11">h1</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="16">en-tête</td>
      <td role="cell" aria-rowindex="16">h6</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="18">groupe de lignes</td>
      <td role="cell" aria-rowindex="18">thead</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="24">terme</td>
      <td role="cell" aria-rowindex="24">dt</td>
    </tr>
  </tbody>
</table>
```

Ci-dessus se trouve la manière sémantique d'écrire un tableau. Les rôles ARIA ne sont pas nécessaires si la sémantique native du tableau, et donc des lignes, n'a pas été modifiée, par exemple via [la propriété `display`](/fr/docs/Web/CSS/Reference/Properties/display#accessibilité).

### Bénéfices supplémentaires

Lorsqu'il est appliqué à un {{HTMLElement('td')}}, cela redonne une sémantique de cellule à l'élément dans le cas où la sémantique aurait été supprimée, par exemple avec `display: grid;`.

## Spécifications

{{Specifications}}

## Voir aussi

- [`role="row"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`role="gridcell"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- Élément HTML {{HTMLElement('td')}}
- Élément HTML {{HTMLElement('th')}}
- [Apprendre&nbsp;: accessibilité des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Apprendre&nbsp;: bases des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
