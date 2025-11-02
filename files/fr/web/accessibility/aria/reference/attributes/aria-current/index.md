---
title: "ARIA : attribut aria-current"
short-title: aria-current
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-current
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut d'état `aria-current` non nul sur un élément indique que cet élément représente l'élément courant au sein d'un conteneur ou d'un ensemble d'éléments liés.

## Description

Lorsque vous avez un groupe d'éléments liés, comme plusieurs liens dans un fil d'Ariane ou des étapes dans un processus en plusieurs étapes, et qu'un élément du groupe est présenté différemment pour indiquer à l'utilisateur·ice voyant·e qu'il s'agit de l'élément courant, il convient d'utiliser `aria-current` pour informer l'utilisateur·ice de technologie d'assistance de ce qui a été signalé par la présentation visuelle.

Dans une liste de fil d'Ariane, lorsqu'un lien parmi un ensemble de liens de pagination est présenté pour indiquer que l'utilisateur·ice se trouve actuellement sur cette page, il faut ajouter `aria-current="page"` sur ce lien. Dans un processus en plusieurs étapes avec un indicateur d'étape (par exemple, un sondage multi-pages ou un processus d'inscription ou de paiement en plusieurs étapes), lorsque l'icône de l'étape courante est visuellement différente pour indiquer qu'il s'agit de l'étape en cours, le conteneur de cette icône doit avoir `aria-current="step"` pour les utilisateur·ice·s de technologies d'assistance qui ne peuvent pas percevoir la différence visuelle.

L'attribut `aria-current` indique que l'élément sur lequel il est défini, avec une valeur différente de `false`, représente l'élément courant au sein d'un conteneur ou d'un ensemble d'éléments liés. Il ne faut marquer qu'un seul élément comme courant avec `aria-current` dans un même ensemble.

L'attribut `aria-current` accepte une liste limitée de [valeurs](#valeurs) : `page`, `step`, `location`, `date`, `time`, `true` et `false`. Toute valeur de chaîne non nulle qui ne figure pas dans cette liste est traitée comme si `aria-current="true"` était défini, et non comme la valeur par défaut `false`. Si l'attribut n'est pas présent, est une chaîne vide, est présent sans valeur ou est défini sur `aria-current="false"`, il n'est pas exposé à l'utilisateur·ice.

Lorsque quelque chose est sélectionné plutôt que courant, comme un [`onglet`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) dans une [`liste d'onglets`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), utilisez [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) pour indiquer le panneau d'onglet actuellement affiché.

> [!NOTE]
> N'utilisez pas `aria-current` à la place de [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) dans [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) ou [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).

## Exemple

Le fil d'Ariane pour la «&nbsp;page courante&nbsp;» doit avoir `aria-current="page"` défini dessus.

```html
<nav aria-label="Fil d'Ariane" class="breadcrumb">
  <ol>
    <li>
      <a href="../../../../../">Technologies web pour les développeur·euse·s</a>
    </li>
    <li>
      <a href="../../../../">Accessibilité</a>
    </li>
    <li>
      <a href="../../../">ARIA</a>
    </li>
    <li>
      <a href="../../">États et propriétés ARIA</a>
    </li>
    <li>
      <a href="./" aria-current="page">ARIA&nbsp;: attribut `aria-current`</a>
    </li>
  </ol>
</nav>
```

Si l'élément représentant la page courante dans le fil d'Ariane n'est pas un lien, l'attribut `aria-current` est optionnel.

## Valeurs

- `page`
  - : Représente la page courante dans un ensemble de pages, comme le lien vers le document courant dans un fil d'Ariane.
- `step`
  - : Représente l'étape courante dans un processus, comme l'étape en cours dans un flux d'achat ou d'inscription en plusieurs étapes.
- `location`
  - : Représente l'emplacement courant dans un environnement ou un contexte, comme l'image actuellement mise en avant dans un organigramme.
- `date`
  - : Représente la date courante dans un ensemble de dates, comme la date du jour dans un calendrier.
- `time`
  - : Représente l'heure courante dans un ensemble d'heures, comme l'heure actuelle dans un emploi du temps.
- `true`
  - : Représente l'élément courant dans un ensemble.
- `false` (valeur par défaut)
  - : Ne représente pas l'élément courant dans un ensemble.

## Interfaces associées

- {{domxref("Element.ariaCurrent")}}
  - : La propriété [`ariaCurrent`](/fr/docs/Web/API/Element/ariaCurrent), qui fait partie de l'interface {{domxref("Element")}}, reflète la valeur de l'attribut `aria-current`.
- {{domxref("ElementInternals.ariaCurrent")}}
  - : La propriété [`ariaCurrent`](/fr/docs/Web/API/ElementInternals/ariaCurrent), qui fait partie de l'interface {{domxref("ElementInternals")}}, reflète la valeur de l'attribut `aria-current`.

## Rôles associés

Utilisable dans tous les rôles, sauf pour les éléments ayant le rôle [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role), [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) ou [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), où il faut utiliser [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected).

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- {{cssxref(':local-link')}}
- [Navigation en fil d'Ariane avec `aria-current`](/fr/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation)
