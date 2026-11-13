---
title: "ARIA : attribut aria-colcount"
short-title: aria-colcount
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colcount
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-colcount` définit le nombre total de colonnes dans un tableau ([`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)), une grille ([`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)) ou une grille arborescente ([`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)) lorsque toutes les colonnes ne sont pas présentes dans le [DOM](/fr/docs/Glossary/DOM).

## Description

Certains tableaux sont très larges et il n'est pas possible d'afficher toutes les colonnes à l'utilisateur·ice. Ou alors, cela est possible, mais avoir un tableau aussi large nuirait à l'expérience utilisateur·ice. Utilisez l'attribut `aria-colcount` pour indiquer aux technologies d'assistance combien de colonnes le tableau comporterait si toutes étaient présentes. La valeur est un entier représentant le nombre de colonnes du tableau complet. Si vous ne connaissez pas le nombre total de colonnes, mais savez qu'elles ne seront pas toutes dans le DOM, utilisez la valeur -1, soit `aria-colcount="-1"`. Cette valeur indique à l'agent utilisateur que le nombre de colonnes actuellement présent dans le DOM n'est peut-être pas le nombre réel de colonnes du tableau.

Si toutes les colonnes d'un tableau sont présentes dans le DOM, l'attribut `aria-colcount` n'est pas nécessaire, car les navigateurs calculent automatiquement le nombre total de colonnes. Cependant, si seulement une partie des colonnes est présente dans le DOM à un instant donné, cet attribut devient utile et nécessaire.

Lorsque vous utilisez `aria-colcount` avec un nombre de colonnes connu, pensez également à utiliser [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) pour étiqueter chaque colonne, ou, si les colonnes sont contiguës (c'est-à-dire un groupe de colonnes dans l'ordre d'origine sans interruption), étiquetez chaque ligne.

L'exemple suivant montre une grille comportant 6 colonnes, dont seules les colonnes 1, 2, 5 et 6 sont affichées à l'utilisateur·ice. Le nombre total de colonnes du tableau est défini avec `aria-colcount="6"` sur le tableau lui-même. Comme les colonnes ne sont pas contiguës, chaque [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) — dans ce cas [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) et [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) — possède l'attribut `aria-colindex`.

```html
<div role="grid" aria-colcount="6">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader" aria-colindex="1">Prénom</div>
      <div role="columnheader" aria-colindex="2">Nom</div>
      <div role="columnheader" aria-colindex="5">Ville</div>
      <div role="columnheader" aria-colindex="6">Code postal</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell" aria-colindex="1">Debra</div>
      <div role="gridcell" aria-colindex="2">Burks</div>
      <div role="gridcell" aria-colindex="5">New York</div>
      <div role="gridcell" aria-colindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

La première règle d'utilisation d'ARIA est&nbsp;: «&nbsp;Si vous pouvez utiliser une fonctionnalité native avec la sémantique et le comportement requis déjà intégrés, au lieu de détourner un élément et **d'ajouter** un rôle, un état ou une propriété ARIA pour le rendre accessible, faites-le.&nbsp;» Si vous utilisez la sémantique HTML native avec {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., l'attribut `aria-colcount` reste nécessaire, mais le balisage est moins verbeux. Lorsque vous utilisez des éléments d'en-tête de tableau sémantiques et que toutes les colonnes ne sont pas dans le DOM, `aria-colcount` doit toujours être utilisé, mais l'attribut `aria-colindex` n'a besoin d'être défini qu'une seule fois par colonne dans l'en-tête {{HTMLElement('th')}}.

```html
<table aria-colcount="6">
  <thead>
    <tr>
      <th aria-colindex="1" scope="col">Prénom</th>
      <th aria-colindex="2" scope="col">Nom</th>
      <th aria-colindex="5" scope="col">Ville</th>
      <th aria-colindex="6" scope="col">Code postal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Debra</td>
      <td>Burks</td>
      <td>New York</td>
      <td>14127</td>
    </tr>
    …
  </tbody>
</table>
```

## Valeurs

- `<integer>`
  - : Le nombre de colonnes dans le tableau complet

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)

Hérité par les rôles&nbsp;:

- [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
