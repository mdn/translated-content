---
title: "ARIA : attribut aria-autocomplete"
short-title: aria-autocomplete
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

L'attribut `aria-autocomplete` indique si la saisie de texte peut déclencher l'affichage d'une ou plusieurs suggestions de la valeur souhaitée par l'utilisateur·ice pour une boîte combinée [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), une zone de recherche [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) ou une zone de saisie [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), et précise comment ces suggestions seront présentées si elles existent.

## Description

La saisie semi-automatique (ou «&nbsp;auto-complétion&nbsp;») est une fonctionnalité d'interface où des suggestions apparaissent au fur et à mesure que l'utilisateur·ice saisit du texte. Le texte suggéré pour compléter la valeur du champ apparaît dynamiquement après le curseur, et la suggestion devient la valeur si l'utilisateur·ice effectue une action (comme <kbd>Tab</kbd>) qui fait quitter la sélection du champ.

La propriété `aria-autocomplete` décrit le type de modèle d'interaction d'auto-complétion qu'une zone de saisie, une zone de recherche ou une boîte combinée utilisera pour aider dynamiquement à compléter la saisie. Elle distingue deux modèles principaux&nbsp;: le modèle **en ligne** (`aria-autocomplete="inline"`), qui présente une seule valeur prédite, et le modèle **liste** (`aria-autocomplete="list"`), qui présente une collection de valeurs possibles dans un élément séparé qui s'affiche à côté ou sous le champ, à la manière d'un {{HTMLElement('datalist')}}. Une troisième valeur, `aria-autocomplete="both"`, est utilisée lorsque l'interface présente à la fois une liste et une valeur prédite. La valeur par défaut est `none`, ce qui signifie qu'aucune suggestion n'est proposée.

La propriété `aria-autocomplete` décrit uniquement le type de comportement prédictif pour les technologies d'assistance&nbsp;: elle ne fournit pas la fonctionnalité elle-même. L'auto-complétion réelle doit être implémentée avec des attributs HTML ou en JavaScript.

Si les suggestions proposées ne dépendent pas de la saisie de l'utilisateur·ice, il est préférable de ne pas activer l'auto-complétion. Par exemple, une zone de recherche affichant des recherches récentes non filtrées peut être utile à une équipe marketing, mais n'apporte rien à un·e utilisateur·ice de lecteur d'écran. Si l'expérience n'est pas utile pour les technologies d'assistance, il est probable qu'elle ne l'est pas non plus pour les autres utilisateur·ice·s.

Lors de l'implémentation de l'auto-complétion, assurez-vous que la partie suggérée de la valeur est présentée comme texte sélectionné, afin de distinguer la saisie de l'utilisateur·ice de la suggestion. Veillez à ce que, si la suggestion ne correspond pas à la valeur souhaitée, l'utilisateur·ice puisse facilement la supprimer ou la remplacer en continuant à saisir.

Si une liste de suggestions est affichée, la sélection DOM doit rester sur le champ de saisie pendant l'affichage de la liste.

- incluez [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) avec la valeur de l'identifiant de la liste de suggestions.
- ajoutez [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) correspondant au rôle de l'élément contenant la collection de suggestions.
- gérez la sélection si nécessaire, notamment avec [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) si le conteneur de la collection le permet.
- utilisez l'état [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) sur l'élément ayant le rôle [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) pour indiquer que la liste est affichée.

Si une suggestion de la liste est automatiquement acceptée lorsque le champ perd la sélection, la liste doit être contenue dans un rôle prenant en charge `aria-activedescendant`, et la valeur de `aria-activedescendant` sur le champ doit être ajustée dynamiquement pour référencer l'élément contenant la suggestion sélectionnée.

## Valeurs

- `none` (valeur par défaut)
  - : Lors de la saisie, aucune suggestion automatique n'est affichée.
- `inline`
  - : `aria-autocomplete="inline"`&nbsp;: un texte suggérant une façon de compléter la saisie peut être inséré dynamiquement après le curseur.
- `list`
  - : `aria-autocomplete="list"`&nbsp;: lors de la saisie, un élément contenant une collection de valeurs pouvant compléter la saisie peut être affiché.
- `both`
  - : `aria-autocomplete="both"`&nbsp;: permet de proposer les deux modèles en même temps. Lors de la saisie, une liste de valeurs peut être affichée et, si c'est le cas, une valeur de la collection est automatiquement sélectionnée et le texte nécessaire pour compléter cette valeur apparaît après le curseur dans le champ.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- le rôle [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- le rôle [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- hérite du rôle [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA&nbsp;: rôle `textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [ARIA&nbsp;: rôle `searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- L'élément HTML {{HTMLElement('datalist')}} et l'attribut [`<input> list`](/fr/docs/Web/HTML/Reference/Elements/input#list)
- L'attribut ARIA [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- L'attribut ARIA [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- L'attribut ARIA [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- L'attribut ARIA [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [Exemple de boîte combinée éditable avec autocomplétion liste et en ligne <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-both/)
- [Event.ariaAutoComplete](/fr/docs/Web/API/Element/ariaAutoComplete)
