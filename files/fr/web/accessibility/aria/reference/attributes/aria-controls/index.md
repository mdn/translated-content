---
title: "ARIA : attribut aria-controls"
short-title: aria-controls
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-controls
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut global `aria-controls` identifie l'élément (ou les éléments) dont le contenu ou la présence est contrôlé·e par l'élément sur lequel cet attribut est défini.

## Description

Lorsqu'un widget ou élément interactif, comme une liste déroulante (<i lang="en">combobox</i> en anglais), un onglet, un bouton, etc., sert à ajuster ou modifier un autre élément ou composant dans un document ou une application, l'attribut `aria-controls` permet d'associer de façon programmatique l'élément contrôlé à l'élément contrôleur. L'attribut `aria-controls` identifie l'élément (ou les éléments) dont le contenu ou la présence est contrôlé·e par l'élément sur lequel l'attribut est défini, quel que soit le type d'interaction qui déclenche ce comportement.

Un élément [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) possède un attribut `aria-controls` dont la valeur fait référence à l'élément qui sert de fenêtre contextuelle. `aria-controls` n'a besoin d'être défini que lorsque la fenêtre contextuelle est visible, mais il est valide et plus simple de référencer un élément même s'il n'est pas visible.

Autres exemples de contrôles&nbsp;:

- Les boutons d'un accordéon qui affichent ou masquent le contenu de leur panneau associé. Chaque bouton peut avoir un attribut `aria-controls` qui référence l'ID de l'élément contenant le contenu associé au contrôle déclencheur.
- Un élément avec le rôle [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)&nbsp;: la barre de défilement doit avoir un attribut `aria-controls` qui référence l'ID de l'élément qu'elle contrôle.
- Un groupe d'onglets affichant chacun un panneau différent&nbsp;: chaque élément avec [`role="tab"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) possède un attribut `aria-controls` qui référence son [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) associé.

## Exemple

Dans cet exemple d'onglets, chaque onglet contrôle un panneau&nbsp;:

```html
<div class="tab-interface">
  <div role="tablist" aria-label="Exemple d'onglets">
    <span
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      Premier onglet
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      Deuxième onglet
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Troisième onglet
    </span>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Contenu du premier panneau</p>
  </div>
  <div
    id="panel-2"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-2"
    class="display-none">
    <p>Contenu du deuxième panneau</p>
  </div>
  <div
    id="panel-3"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="tab-3"
    class="display-none">
    <p>Contenu du troisième panneau</p>
  </div>
</div>
```

> [!NOTE]
> ARIA ne modifie que l'arbre d'accessibilité d'un élément, c'est-à-dire la façon dont les technologies d'assistance présentent le contenu aux utilisateur·ice·s. ARIA ne change ni la fonctionnalité implicite ni le style.

## Valeurs

- Liste d'ID
  - : Liste d'un ou plusieurs identifiants (séparés par des espaces) des éléments contrôlés par l'élément courant.

## Interfaces associées

- {{domxref("Element.ariaControlsElements")}}
  - : La propriété `ariaControlsElements` fait partie de l'interface de chaque élément. Sa valeur est un tableau d'instances de sous-classes de {{domxref("Element")}} qui reflètent les références d'ID dans l'attribut `aria-controls` ([avec quelques particularités](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_reflétés)).
- {{domxref("ElementInternals.ariaControlsElements")}}
  - : La propriété `ariaControlsElements` fait partie de l'interface de chaque élément personnalisé. Sa valeur est un tableau d'instances de sous-classes de {{domxref("Element")}} qui reflètent les références d'ID dans l'attribut `aria-controls` ([avec quelques particularités](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_reflétés)).

## Rôles associés

Utilisé dans **TOUS** les rôles.

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
