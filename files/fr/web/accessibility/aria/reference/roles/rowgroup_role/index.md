---
title: "ARIA : rôle rowgroup"
short-title: rowgroup
slug: Web/Accessibility/ARIA/Reference/Roles/rowgroup_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `rowgroup` («&nbsp;groupe de lignes&nbsp;») regroupe des [lignes](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) au sein d'une structure tabulaire. Un `rowgroup` contient une ou plusieurs lignes composées de [cellules](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), de [cellules de grille](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), d'[en-têtes de colonne](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) ou d'[en-têtes de ligne](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) à l'intérieur d'une [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), d'une [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) ou d'un [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

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

Le rôle `rowgroup` établit une relation entre les éléments de type ligne qu'il contient et constitue un équivalent structurel des éléments HTML {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} et {{HTMLElement('tbody')}}. Il n'existe toutefois aucune différenciation entre différents types de groupes de lignes. Les éléments d'un `rowgroup` doivent être contenus dans, ou être la propriété d'éléments ayant le rôle [table](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) ou [grid](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role). Il est fortement recommandé d'utiliser les éléments HTML natifs {{HTMLElement('thead')}}, {{HTMLElement('tfoot')}} et {{HTMLElement('tbody')}} autant que possible.

Pour créer un en-tête, un pied ou un corps de tableau ARIA, ajoutez `role="rowgroup"` à l'élément concerné. Ce groupe de lignes doit être imbriqué dans une grille, un tableau ou un arbre-grille et englober un ou plusieurs éléments de type ligne. Chaque ligne contient, à son tour, des cellules enfants. Ces cellules peuvent être de types différents, selon qu'il s'agisse d'en-têtes de colonne, d'en-têtes de ligne, de simples cellules ou de cellules de grille.

> [!NOTE]
> Il est fortement conseillé d'utiliser l'élément HTML natif `<table>` ainsi que `<thead>`, `<tfoot>` et `<tbody>` lorsque cela est possible.

### Propriétés, états et rôles WAI-ARIA associés

#### Rôles de contexte

- [role="table"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : L'un des trois contextes possibles (avec grid et treegrid) dans lesquels on trouve des lignes. Il identifie une structure de tableau non interactive contenant des données organisées en lignes et colonnes, similaire à l'élément HTML natif {{HTMLElement('table')}}.
- [role="grid"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : L'un des trois contextes possibles (avec table et treegrid) dans lesquels on trouve des lignes. Il identifie une structure de tableau non interactive contenant des données organisées en lignes et colonnes, similaire à l'élément HTML natif {{HTMLElement('table')}}.
- [role="treegrid"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : Similaire à une grille, mais avec des lignes pouvant être développées ou réduites comme dans un arbre.

#### Rôles descendants

- [role="row"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Une ligne de cellules dans une structure tabulaire. Une ligne contient une ou plusieurs [cellules](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role), des [cellules de grille](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) ou des [en-têtes de colonne](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), et parfois un [en-tête de ligne](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role).

### Interactions au clavier

Aucune.

### Fonctionnalités JavaScript requises

Aucune.

> [!NOTE]
> La première règle d'utilisation d'ARIA est la suivante&nbsp;: si vous pouvez utiliser une fonctionnalité native qui offre déjà la sémantique et le comportement dont vous avez besoin, utilisez-la plutôt que de détourner un élément et d'**ajouter** un rôle, un état ou une propriété ARIA pour le rendre accessible. Préférez l'élément HTML `<table>` au rôle ARIA `table` chaque fois que cela est possible.

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

L'exemple ci-dessus illustre une table ARIA non sémantique avec un en-tête et un corps de tableau, où cinq des 81 lignes sont présentes dans le DOM&nbsp;: une dans l'en-tête et quatre dans le corps. La ligne d'en-tête, isolée dans son groupe, possède deux en-têtes de colonne. Les colonnes sont triables, mais ne sont pas triées actuellement, comme l'indique la propriété [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort). Le corps du tableau constitue un autre `rowgroup`, avec quatre lignes présentes dans le DOM. Parce que toutes les lignes ne figurent pas dans le DOM, la propriété [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) est incluse sur chaque ligne.

## Bonnes pratiques

Utilisez uniquement {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} et ainsi de suite pour la structure des tableaux de données. Vous pouvez ajouter ces rôles ARIA afin d'assurer l'accessibilité si la sémantique native du tableau est supprimée, par exemple par des règles CSS. Un cas d'utilisation pertinent du rôle ARIA `table` est lorsque la propriété CSS `display` outrepasse la sémantique native d'un tableau (par exemple `display: grid`). Dans ce cas, vous pouvez rétablir la sémantique à l'aide des rôles ARIA.

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
      <td role="cell">header</td>
      <td role="cell">h1</td>
    </tr>
    <tr role="row" aria-rowindex="16">
      <td role="cell">header</td>
      <td role="cell">h6</td>
    </tr>
  </tbody>
</table>
```

Ci‑dessus, la manière sémantique d'écrire un tableau. Les rôles ARIA ne sont nécessaires que si la sémantique native du tableau (et donc des lignes) est supprimée, par exemple en appliquant la [propriété `display` à `flex` ou `grid`](/fr/docs/Web/CSS/Reference/Properties/display#accessibilité).

### Bénéfices supplémentaires

Aucun.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('table')}}
- L'élément HTML {{HTMLElement('tbody')}}
- L'élément HTML {{HTMLElement('tfoot')}}
- L'élément HTML {{HTMLElement('thead')}}
