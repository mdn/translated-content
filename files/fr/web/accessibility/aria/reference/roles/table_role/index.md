---
title: "ARIA : rôle table"
short-title: table
slug: Web/Accessibility/ARIA/Reference/Roles/table_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `table` identifie l'élément comme une structure de tableau non interactive contenant des données organisées en lignes et colonnes, similaire à l'élément HTML natif {{HTMLElement('table')}}.

```html
<div
  role="table"
  aria-label="Semantic Elements"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <div id="semantic_elements_table_desc">
    Les éléments sémantiques à utiliser à la place des rôles ARIA
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="none">Rôle ARIA</span>
      <span role="columnheader" aria-sort="none">Élément sémantique</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="11">
      <span role="cell">en-tête</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="cell">en-tête</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="cell">groupe de lignes</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="cell">terme</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

## Description

Un élément avec `role="table"` est une structure tabulaire statique avec des lignes contenant des cellules. Les cellules ne sont ni sélectionnables ni focalisables, bien que des widgets à l'intérieur de chaque cellule puissent être interactifs. Il est fortement recommandé d'utiliser l'élément HTML natif {{HTMLElement('table')}} chaque fois que possible.

> [!WARNING]
> Si un tableau gère un état de sélection, propose une navigation bidimensionnelle ou permet à l'utilisateur·ice de réorganiser l'ordre des cellules, utilisez plutôt [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) ou [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

Pour créer un tableau ARIA, ajoutez `role="table"` à l'élément conteneur. À l'intérieur de ce conteneur, chaque ligne possède le rôle `row` et contient des cellules enfants. Chaque cellule a le rôle `columnheader`, `rowheader` ou `cell`. Les lignes peuvent être enfants du tableau ou d'un `rowgroup`.

La légende du tableau peut être définie via [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Tous les autres éléments sémantiques de tableau, comme {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}} et {{HTMLElement('td')}}, doivent être ajoutés via les rôles associés&nbsp;: `rowgroup`, `row`, `columnheader` et `cell`.

Si le tableau contient des colonnes ou des lignes triables, l'attribut [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) doit être ajouté sur la cellule d'en-tête (et non sur le tableau lui-même). Si des lignes ou colonnes sont masquées, il faut inclure [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) ou [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) pour indiquer le nombre total de colonnes ou de lignes, ainsi que [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) ou [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) sur chaque cellule. [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) ou [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) est défini sur la position de la cellule dans la ligne ou la colonne. Si le tableau inclut des cellules qui s'étendent sur plusieurs lignes ou colonnes, il faut aussi inclure [`aria-rowspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) ou [`aria-colspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan). Il est bien plus simple d'utiliser l'élément {{HTMLElement('table')}} avec tous les éléments et attributs sémantiques associés, qui sont pris en charge par toutes les technologies d'assistance.

Pour créer un widget interactif à structure tabulaire, utilisez plutôt le modèle `grid`. Si l'interaction permet la sélection individuelle des cellules, la navigation de gauche à droite et de haut en bas, ou si l'interface permet de réorganiser l'ordre des cellules (par glisser-déposer, etc.), utilisez [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) ou [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role).

> [!NOTE]
> Il est fortement recommandé d'utiliser l'élément HTML natif table chaque fois que possible.

### Propriétés, états et rôles WAI-ARIA associés

- `role="rowgroup"`
  - : Enfant optionnel du tableau, le groupe de lignes encapsule un groupe de lignes, similaire à {{HTMLElement('thead')}}, {{HTMLElement('tbody')}} et {{HTMLElement('tfoot')}}.
- [`role="row"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : Une ligne dans le tableau, et éventuellement dans un rowgroup, qui contient une ou plusieurs cellules, en-têtes de colonne ou en-têtes de ligne.
- l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Prend comme valeur l'id de l'élément qui sert de description au tableau.
- l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Fournit un nom accessible au tableau.
- l'attribut [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
  - : Cet attribut n'est requis que si les colonnes ne sont pas toujours présentes dans le DOM. Il indique explicitement le nombre de colonnes du tableau complet. Définissez la valeur sur le nombre total de colonnes du tableau. Si inconnu, utilisez `aria-colcount="-1"`.
- l'attribut [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
  - : Cet attribut n'est requis que si les lignes ne sont pas toujours présentes dans le DOM, comme dans les tableaux défilants qui réutilisent les lignes pour minimiser le nombre de nœuds DOM. Il indique explicitement le nombre de lignes du tableau complet. Définissez la valeur sur le nombre total de lignes du tableau. Si inconnu, utilisez `aria-rowcount="-1"`.

### Interactions au clavier

Aucune.

### Fonctionnalités JavaScript requises

Aucune. Pour les colonnes triables, voir le rôle ARIA [columnheader](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role).

> [!NOTE]
> La première règle d'utilisation d'ARIA est&nbsp;: si vous pouvez utiliser une fonctionnalité native avec la sémantique et le comportement requis déjà intégrés, au lieu de détourner un élément et **d'ajouter** un rôle, un état ou une propriété ARIA pour le rendre accessible, faites-le. Utilisez l'élément HTML {{HTMLElement('table')}} plutôt que le rôle ARIA table chaque fois que possible.

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
      <span role="cell">en-tête</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="cell">en-tête</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="cell">groupe de lignes</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
      <span role="cell">terme</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>
```

Ce qui précède est un extrait d'un tableau. Bien que le tableau complet comporte 81 entrées, comme indiqué par la propriété [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), seules quatre sont actuellement visibles. Les colonnes sont triables, mais ne sont pas triées actuellement, comme indiqué par la propriété [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) sur les en-têtes de colonne.

## Bonnes pratiques

Utilisez uniquement {{HTMLElement('table')}}, {{HTMLElement('tbody')}}, {{HTMLElement('thead')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., pour la structure des tableaux de données. Vous pouvez ajouter ces rôles ARIA pour garantir l'accessibilité si la sémantique native du tableau est supprimée, par exemple avec du CSS. Un cas d'usage pertinent du rôle ARIA table est lorsque la propriété CSS display remplace la sémantique native d'un tableau, comme avec `display: grid`. Dans ce cas, vous pouvez utiliser les rôles ARIA table pour rétablir la sémantique.

## Spécifications

{{Specifications}}

## Voir aussi

- [Apprendre&nbsp;: Accessibilité des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [Apprendre&nbsp;: Bases des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- [ARIA&nbsp;: rôle `grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
