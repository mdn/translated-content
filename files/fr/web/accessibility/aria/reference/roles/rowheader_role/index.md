---
title: "ARIA : rôle rowheader"
short-title: rowheader
slug: Web/Accessibility/ARIA/Reference/Roles/rowheader_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `role="rowheader"` désigne une [cellule](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) contenant l'information d'en-tête d'une [ligne](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) au sein d'une structure tabulaire, comme une [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role), une [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) ou un [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

## Description

`Rowheader` est la [cellule](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) d'en-tête d'une ligne&nbsp;; il établit une relation entre cette cellule et les autres cellules de la même [ligne](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role).

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
      <span role="rowheader">Finlande</span>
      <span role="cell">5,5 millions</span>
    </div>
    <div role="row">
      <span role="rowheader">France</span>
      <span role="cell">67 millions</span>
    </div>
  </div>
</div>
```

C'est l'équivalent structurel de l'élément HTML {{HTMLElement('th')}} avec l'attribut `scope="row"` (soit `<th scope="row">`). Il est fortement recommandé d'utiliser l'élément HTML natif {{HTMLElement('th')}}.

Pour créer un en-tête de ligne ARIA, ajoutez `role="rowheader"` à l'élément. Cet en-tête doit être imbriqué dans une `row`, laquelle est, à son tour, imbriquée dans un `rowgroup`, ou peut être placée directement dans une `grid`, `table` ou `treegrid`.

> [!NOTE]
> Il est fortement conseillé d'utiliser les éléments de tableau natifs [HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) autant que possible.

### Propriétés, états et rôles WAI-ARIA associés

#### Rôles de contexte

- [role="row"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Le seul contexte dans lequel on trouve un `row`. Il englobe une cellule ou un groupe de cellules constitutives d'une ligne, dont une seule devrait avoir le type `rowheader`. Similaire à l'élément HTML natif {{HTMLElement('tr')}}.

### Interactions au clavier

Aucune.

### Fonctionnalités JavaScript requises

Aucune.

> [!NOTE]
> La première règle d'utilisation d'ARIA est la suivante&nbsp;: si vous pouvez utiliser une fonctionnalité native qui offre déjà la sémantique et le comportement requis, utilisez‑la plutôt que de détourner un élément et d'**ajouter** un rôle, un état ou une propriété ARIA pour le rendre accessible. Employez les éléments HTML `<table>`, `<tr>`, `<th>`, `<td>` et autres éléments de tableau [natifs](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) plutôt que les rôles ARIA de tableau lorsque cela est possible.

## Exemples

```html
<div
  role="table"
  aria-label="Semantic Elements"
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
      <span role="rowheader">header</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="rowheader">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="rowheader">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="rowheader">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

L'exemple ci‑dessus illustre une table ARIA non sémantique avec un en-tête et un corps de tableau, où cinq des 81 lignes sont présentes dans le DOM&nbsp;: une dans l'en-tête et quatre dans le corps. La ligne d'en-tête, isolée dans son groupe, possède deux en-têtes de colonne. Les colonnes sont triables, mais ne sont pas triées actuellement, comme l'indique la propriété [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort). Le corps du tableau constitue un autre `rowgroup`, avec quatre lignes présentes dans le DOM. Chaque ligne de données du tableau possède un en‑tête de ligne. Comme toutes les lignes ne figurent pas dans le DOM, la propriété [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) est incluse sur chaque ligne.

## Bonnes pratiques

Utilisez uniquement {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}} et ainsi de suite pour la structure des tableaux de données. Vous pouvez ajouter ces rôles ARIA afin d'assurer l'accessibilité si la sémantique native du tableau est supprimée, par exemple par des règles CSS. Un cas d'utilisation pertinent du rôle ARIA `table` est lorsque la propriété CSS `display` outrepasse la sémantique native d'un tableau (par exemple `display: grid`). Dans ce cas, vous pouvez rétablir la sémantique à l'aide des rôles ARIA.

```html
<table
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <caption id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none">ARIA Role</th>
      <th role="columnheader" aria-sort="none">Semantic Element</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row" aria-rowindex="11">
      <th role="rowheader">header</th>
      <td role="cell">h1</td>
    </tr>
    <tr role="row" aria-rowindex="16">
      <th role="rowheader">header</th>
      <td role="cell">h6</td>
    </tr>
  </tbody>
</table>
```

Ci‑dessus, la manière sémantique d'écrire un tableau. Les rôles ARIA ne sont nécessaires que si la sémantique native du tableau (et donc des en‑têtes de lignes) est supprimée, par exemple en appliquant la [propriété `display` à `flex` ou `grid`](/fr/docs/Web/CSS/Reference/Properties/display#accessibilité).

### Bénéfices supplémentaires

Aucun.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('table')}}
- L'élément HTML {{HTMLElement('th')}} d'en-tête de ligne
- [Tutoriel sur les tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA&nbsp;: rôle `cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [ARIA&nbsp;: rôle `row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA&nbsp;: rôle `gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
