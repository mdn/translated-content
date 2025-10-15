---
title: "ARIA : rôle gridcell"
short-title: gridcell
slug: Web/Accessibility/ARIA/Reference/Roles/gridcell_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Le rôle `gridcell` est utilisé pour créer une cellule dans une [grille](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) ou un [arbre de grille](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role). Il est destiné à imiter la fonctionnalité de l'élément HTML {{HTMLElement('td')}} pour le regroupement d'informations de style tableau.

```html
<div role="gridcell">Patate</div>
<div role="gridcell">Chou</div>
<div role="gridcell">Oignon</div>
```

Elements that have `role="gridcell"` applied to them must be the child of an element with a role of [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role).

```html
<div role="row">
  <div role="gridcell">Toto</div>
  <div role="gridcell">Dupont</div>
  <div role="gridcell">496-619-5098</div>
  …
</div>
```

La première règle de l'ARIA est que si un élément ou un attribut HTML natif a la sémantique et le comportement dont vous avez besoin, utilisez-le au lieu de réutiliser un élément et d'ajouter ARIA. Utilisez plutôt l'élément HTML {{HTMLElement('td')}}&nbsp;:

```html
<td>Patate</td>
<td>Chou</td>
<td>Oignon</td>
```

## Description

### Cellules de grille avec des lignes et colonnes ajoutées, masquées ou supprimées dynamiquement

Aucun élément avec un `role="gridcell"` appliqué à lui ne doit utiliser ARIA pour décrire son ordre dans le regroupement de style tableau, à condition que le tableau, la grille ou l'arbre de grille ait la capacité d'ajouter, de masquer ou de supprimer dynamiquement des lignes et/ou des colonnes.

Utilisez [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) pour décrire l'ordre d'une cellule de grille dans la liste des colonnes, et [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) pour décrire l'ordre d'une cellule de grille dans la liste des lignes. Utilisez [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) et [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) sur l'élément parent avec [`role="grid"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) appliqué pour définir le nombre total de colonnes ou de lignes.

Ce code d'exemple démontre un regroupement d'informations de style tableau où les troisième et quatrième colonnes ont été supprimées. [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) est utilisé pour décrire la position des lignes et permet à une personne utilisant une technologie d'assistance de déduire que certaines lignes ont été supprimées&nbsp;:

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

### Décrire la position des cellules de grille lorsque la structure globale est inconnue

Dans les situations où le regroupement de contenu de style tableau ne fournit pas d'informations sur les colonnes et les lignes, les cellules de grille doivent avoir leurs positions décrites de manière programmatique en utilisant [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby). Les [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id)s fournis pour `aria-describedby` doivent correspondre aux éléments parents destinés à être les lignes et les colonnes.

En faisant référence aux éléments parents avec des rôles de [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) ou [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) appliqués à eux via `aria-describedby`, cela permet à la technologie d'assistance de comprendre la position et la relation de l'élément `gridcell` par rapport au reste du regroupement de contenu de style tableau.

### Grilles interactives et arbres

#### Cellules éditables

Les éléments `<td>` et les éléments auxquels un rôle de `gridcell` est appliqué peuvent être rendus éditables, imitant une fonctionnalité similaire à l'édition d'une feuille de calcul. Cela se fait en appliquant l'attribut HTML [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable).

```html
<td contenteditable="true">Notes</td>

<div role="gridcell" contenteditable="true">Coût de l'article</div>
```

`contenteditable` rendra l'élément sur lequel il est appliqué focalisable via la touche <kbd>Tab</kbd>. Si une cellule de grille est conditionnellement basculée dans un état où l'édition est interdite, basculez [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) sur l'élément de cellule de grille.

#### Cellules extensibles

Dans une [treegrid](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role), les cellules de grille peuvent être rendues extensibles en basculant l'attribut [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded). Notez que si cet attribut est fourni, il s'applique uniquement à la cellule de grille individuelle.

### Propriétés, états et rôles WAI-ARIA associés

- `grid`
  - : Communique qu'un élément parent est un regroupement d'informations de style tableau ou arbre.
- `row`
  - : Requis pour communiquer que la `gridcell` fait partie d'une ligne d'un regroupement d'informations de style tableau.
- `columnheader`
  - : Spécifie quel élément est l'en-tête de colonne associé.
- [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
  - : Identifie la position d'un élément par rapport aux autres colonnes du regroupement d'informations de style tableau.
- `rowheader`
  - : Spécifie quel élément est l'en-tête de ligne associé.
- [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
  - : Identifie la position d'un élément par rapport aux autres lignes du regroupement d'informations de style tableau.

### Exemples

L'exemple suivant crée un regroupement d'informations de style tableau&nbsp;:

```html
<h3 id="table-title">Planètes géantes gazeuses joviennes</h3>
<div role="grid" aria-describedby="table-title">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader">Nom</div>
      <div role="columnheader">Diamètre (km)</div>
      <div role="columnheader">Durée du jour (heures)</div>
      <div role="columnheader">Distance du Soleil (10<sup>6</sup>km)</div>
      <div role="columnheader">Nombre de lunes</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell">Jupiter</div>
      <div role="gridcell">142,984</div>
      <div role="gridcell">9.9</div>
      <div role="gridcell">778.6</div>
      <div role="gridcell">67</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell">Saturne</div>
      <div role="gridcell">120,536</div>
      <div role="gridcell">10.7</div>
      <div role="gridcell">1433.5</div>
      <div role="gridcell">62</div>
    </div>
  </div>
</div>
```

## Problèmes d'accessibilité

Le support de `gridcell` et de certains rôles et propriétés ARIA liés à `gridcell` est faible avec les technologies d'assistance. Si possible, utilisez à la place [le balisage de table HTML](/fr/docs/Web/HTML/Reference/Elements/table).

## Bonnes pratiques

La première règle de l'ARIA est la suivante&nbsp;: si un élément ou un attribut HTML natif possède la sémantique et le comportement dont vous avez besoin, utilisez-le au lieu de réutiliser un élément et d'ajouter un rôle, un état ou une propriété ARIA pour le rendre accessible. En tant que tel, il est recommandé d'utiliser [les balises de tableau HTML natif](/fr/docs/Web/HTML/Reference/Elements/table) au lieu de recréer la forme et la fonctionnalité d'une table avec ARIA et JavaScript.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [ARIA&nbsp;: rôle `row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA&nbsp;: rôle `rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- Les éléments HTML relatifs aux tableaux&nbsp;:
  - {{HTMLElement('table')}}
  - {{HTMLElement('tr')}}
  - {{HTMLElement('th')}}
  - {{HTMLElement('td')}}
