---
title: "ARIA : rôle row"
short-title: row
slug: Web/Accessibility/ARIA/Reference/Roles/row_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Un élément avec `role="row"` représente une ligne de cellules dans une structure tabulaire. Une ligne contient une ou plusieurs cellules, cellules de grille ou en-têtes de colonne, et éventuellement un en-tête de ligne, au sein d'un [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) ou [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) et éventuellement dans un [`rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role).

```html
<div
  role="table"
  aria-label="Populations"
  aria-describedby="country_population_desc">
  <div id="country_population_desc">Populations mondiales par pays</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="descending">Pays</span>
      <span role="columnheader" aria-sort="none">Population</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell">Finlande</span>
      <span role="cell">5,5 millions</span>
    </div>
    <div role="row">
      <span role="cell">France</span>
      <span role="cell">67 millions</span>
    </div>
  </div>
</div>
```

## Description

L'élément avec `role="row"` est une ligne dans un [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) ou [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role), et éventuellement dans un [`rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) qui contient une ou plusieurs [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) ou [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) dans une structure tabulaire statique. Il est fortement recommandé d'utiliser les éléments natifs [HTML `<tr>`](/fr/docs/Web/HTML/Reference/Elements/tr) autant que possible.

Pour créer une ligne ARIA, ajoutez `role="row"` à l'élément conteneur. Cette ligne doit être imbriquée dans une grille, un tableau ou un treegrid. Un groupe de lignes peut être imbriqué directement dans une grille, un tableau ou un treegrid, ou dans un rowgroup de ces conteneurs. Chaque ligne contient des cellules enfants, qui peuvent être de différents types selon qu'il s'agit d'en-têtes de colonne, d'en-têtes de ligne, de cellules de grille ou de cellules classiques.

Une ligne peut contenir plusieurs attributs précisant son rôle, notamment [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) et [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).

Si la ligne se trouve dans un treegrid, elle peut inclure l'attribut [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) pour indiquer son état. Ce n'est pas le cas pour un tableau ou une grille classique, où l'attribut `aria-expanded` n'est pas utilisé.

Pour créer un widget interactif avec une structure tabulaire, utilisez le modèle grid. Si l'interaction permet la sélection individuelle des cellules, la navigation de gauche à droite et de haut en bas, ou si l'interface permet de réorganiser l'ordre des cellules (par glisser-déposer, etc.), utilisez [grid](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) ou [treegrid](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Il est fortement recommandé d'utiliser l'élément natif HTML {{HTMLElement('table')}} avec l'élément de ligne {{HTMLElement('tr')}} autant que possible.

## Propriétés, états et rôles WAI-ARIA associés

### Rôles de contexte

- [role="rowgroup"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : Parent contextuel optionnel, il établit une relation entre les lignes descendantes. Il est l'équivalent structurel des éléments thead, tfoot et tbody dans un tableau HTML.
- [role="table"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : Un des trois contextes possibles (avec grid et treegrid) dans lesquels on trouve une ligne, il identifie la ligne comme faisant partie d'une structure tabulaire non interactive contenant des données organisées en lignes et colonnes, similaire à l'élément HTML natif {{HTMLElement('table')}}.
- [role="grid"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : Un des trois contextes possibles (avec table et treegrid) dans lesquels on trouve une ligne, il identifie la ligne comme faisant partie d'une structure tabulaire non interactive contenant des données organisées en lignes et colonnes, similaire à l'élément HTML natif {{HTMLElement('table')}}.
- [role="treegrid"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Similaire à une grille, mais avec des lignes pouvant être développées ou réduites comme dans un arbre.

### Rôles descendants

- [role="cell"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
  - : Une cellule dans une ligne d'un conteneur tabulaire.
- [role="gridcell"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : Une cellule dans une ligne d'une grille ou d'un treegrid.
- [role="columnheader"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : Une cellule d'en-tête de colonne, équivalente à l'élément HTML {{HTMLElement('th')}} avec portée colonne ({{HTMLElement('tr', '<code>&lt;tr scope="col"&gt;</code>')}}). Contrairement à une cellule classique, le rôle columnheader établit une relation avec toutes les cellules de la colonne correspondante.
- [role="rowheader"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : Une cellule d'en-tête de ligne, équivalente à l'élément HTML {{HTMLElement('th')}} avec portée ligne ({{HTMLElement('tr', '<code>&lt;tr scope="row"&gt;</code>')}}). Contrairement à une cellule classique, le rôle rowheader établit une relation avec toutes les cellules de la ligne correspondante.

### États et propriétés

- l'état [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : L'attribut `aria-expanded`, qui définit l'état de la ligne, peut prendre trois valeurs ou être omis&nbsp;:
    - `aria-expanded="true"`&nbsp;: La ligne est développée.
    - `aria-expanded="false"`&nbsp;: La ligne est réduite.
    - `aria-expanded="undefined"` ou l'attribut est absent&nbsp;: La ligne n'est ni développable ni réductible.

    Si l'élément avec l'attribut `aria-expanded` contrôle le développement d'un autre conteneur de groupe qui n'est pas «&nbsp;possédé&nbsp;» par l'élément, l'auteur·ice doit référencer le conteneur via l'attribut `aria-controls`.

- l'état [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Pertinent uniquement si la ligne est dans un conteneur interactif, comme une grille ou un treegrid, mais pas dans un tableau. L'attribut `aria-selected` peut prendre trois valeurs ou être omis&nbsp;:
    - `aria-selected="true"`&nbsp;: La ligne est sélectionnée.
    - `aria-selected="false"`&nbsp;: La ligne n'est pas sélectionnée.
    - `aria-selected="undefined"` ou l'attribut est absent&nbsp;: La ligne n'est pas sélectionnable.

- l'attribut [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : L'attribut `aria-colindex` n'est nécessaire que si des colonnes sont masquées dans le DOM. Il est généralement placé sur les enfants de la ligne, plutôt que sur la ligne elle-même. Si les colonnes affichées sont contiguës, il peut être placé sur la ligne.

    La valeur est un entier entre 1 et le nombre total de colonnes du tableau, de la grille ou du treegrid. Placé sur la ligne, `aria-colindex` définit l'index ou la position de la colonne par rapport au nombre total de colonnes. Par exemple, dans un tableau de 15 colonnes, si les colonnes 4, 5 et 6 sont dans le DOM, `aria-colindex="4"` peut être défini sur chaque ligne.

    Si l'ensemble des colonnes présentes dans le DOM n'est pas contigu, ou si des cellules s'étendent sur plusieurs lignes ou colonnes, placez `aria-colindex` sur tous les enfants de chaque ligne plutôt que sur la ligne elle-même.

    Si toutes les colonnes sont dans le DOM, cet attribut n'est pas nécessaire.

- l'attribut [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : L'attribut `aria-rowindex` n'est nécessaire que si des lignes sont masquées dans le DOM, pour indiquer quelle ligne, dans la liste totale, est lue. L'attribut, avec une valeur unique sur chaque ligne, est un entier entre 1 et le nombre total de lignes du tableau, de la grille ou du treegrid, indiquant la position ou l'index de chaque ligne. Par exemple, si un tableau a 1&nbsp;500 lignes, mais que seules l'en-tête et les lignes 47 et 52 sont dans le DOM, `aria-rowindex="1"` sera défini sur la ligne d'en-tête, et `aria-rowindex="47"` et `aria-rowindex="52"` sur les lignes 47 et 52 respectivement.

    Si toutes les lignes sont présentes dans le DOM, cet attribut n'est pas nécessaire.

## Interactions au clavier

Aucune.

## Fonctionnalités JavaScript requises

Aucune. Pour les colonnes triables, voir le rôle aria [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role).

> [!NOTE]
> La première règle d'utilisation d'ARIA est&nbsp;: si une fonctionnalité native possède déjà la sémantique et le comportement requis, utilisez-la au lieu de réutiliser un élément et d'ajouter un rôle, un état ou une propriété ARIA pour le rendre accessible. Utilisez l'élément HTML {{HTMLElement('table')}} plutôt que le rôle ARIA table autant que possible.

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
      <span role="columnheader" aria-sort="none">Rôle ARIA</span>
      <span role="columnheader" aria-sort="none">Élément sémantique</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="11">
      <span role="cell">header</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="cell">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="cell">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="cell">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

L'exemple ci-dessus est une table ARIA non sémantique avec cinq lignes sur 81 présentes dans le DOM&nbsp;: une dans l'en-tête et quatre dans le corps du tableau. La ligne d'en-tête, seule dans un rowgroup d'en-tête, possède deux en-têtes de colonne. Les colonnes sont triables, mais ne sont pas triées actuellement, comme l'indique la propriété `aria-sort`. Le corps du tableau est dans un rowgroup séparé, avec quatre lignes actuellement dans le DOM. Comme toutes les lignes ne sont pas dans le DOM, la propriété `aria-rowindex` est incluse sur chaque ligne.

## Bonnes pratiques

Utilisez uniquement {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc. pour la structure des tableaux de données. Vous pouvez ajouter ces rôles ARIA pour garantir l'accessibilité si la sémantique native du tableau est supprimée, par exemple avec CSS. Un cas d'utilisation pertinent du rôle ARIA table est lorsque la sémantique native d'un tableau est supprimée par la propriété CSS display, comme display: grid. Dans ce cas, vous pouvez utiliser les rôles ARIA pour rétablir la sémantique.

```html
<table
  role="table"
  aria-label="Éléments sémantiques"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <caption id="semantic_elements_table_desc">
    Éléments sémantiques à utiliser à la place des rôles ARIA
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none">Rôle ARIA</th>
      <th role="columnheader" aria-sort="none">Élément sémantique</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row" aria-rowindex="11">
      <td role="cell">entête</td>
      <td role="cell">h1</td>
    </tr>
    <tr role="row" aria-rowindex="16">
      <td role="cell">entête</td>
      <td role="cell">h6</td>
    </tr>
    <tr role="row" aria-rowindex="18">
      <td role="cell">groupe de lignes</td>
      <td role="cell">thead</td>
    </tr>
    <tr role="row" aria-rowindex="24">
      <td role="cell">terme</td>
      <td role="cell">dt</td>
    </tr>
  </tbody>
</table>
```

Ci-dessus, la façon sémantique d'écrire un tableau. Les rôles ARIA ne sont nécessaires que si la sémantique native du tableau, et donc des lignes, est supprimée, par exemple via la propriété [display: flex ou grid](/fr/docs/Web/CSS/Reference/Properties/display#accessibilité).

### Bénéfices supplémentaires

Aucun.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('table')}}
- L'élément HTML {{HTMLElement('tr')}} de ligne de tableau
- [ARIA&nbsp;: rôle `rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [ARIA&nbsp;: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [ARIA&nbsp;: rôle `grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [ARIA&nbsp;: rôle `treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [ARIA&nbsp;: rôle `cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [ARIA&nbsp;: rôle `gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [ARIA&nbsp;: rôle `columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [ARIA&nbsp;: rôle `rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
