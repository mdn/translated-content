---
title: ':-moz-ui-invalid'
slug: Web/CSS/:user-invalid
tags:
  - CSS
  - Non-standard
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:user-invalid
original_slug: Web/CSS/:-moz-ui-invalid
---
{{Non-standard_header}}{{CSSRef}}

La pseudo-classe **`:-moz-ui-invalid`** représente n'importe quel élément de formulaire dont la valeur est invalide selon [ses contraintes de validation](/fr/docs/Web/Guide/HTML/Forms_in_HTML#Constraint_Validation).

Cette pseudo-classe est appliquée d'après les règles suivantes :

- Si le contrôle n'a pas le focus et que cette valeur est invalide, la pseudo-classe est appliquée.
- Si le contrôle a le focus et que la valeur était valide (même si elle était vide) lorsque le focus a été obtenu, la pseudo-classe n'est pas appliquée.
- Si le contrôle a le focus et que la valeur était invalide lorsque le focus a été obtenu, on revalide le contenu à chaque frappe.
- Si l'élément est obligatoire, les règles précédentes ne s'appliquent que si l'utilisateur a modifié la valeur ou tenté de soumettre le formulaire.

Si le contrôle était valide au moment où l'utilisateur a commencé à l'utiliser, la mise en forme liée à la validité est uniquement modifiée lorsque l'utilisateur interagit avec un autre contrôle. Toutefois, si l'utilisateur tente de corriger une valeur invalide, le contrôle indique immédiatement lorsque celle-ci devient valide. Les éléments obligatoires sont considérés comme invalides uniquement si l'utilisateur les modifie ou essaie de soumettre une valeur invalide non-modifiée.

Par défaut, Gecko applique un style qui crée un halo rouge (grâce à {{cssxref("box-shadow")}}) autour des éléments avec cette pseudo-clésse. Pour un exemple illustrant comment surcharger le style par défaut, on pourra utiliser la pseudo-classe {{cssxref(":invalid")}}.

## Syntaxe

{{CSSSyntax}}

## Spécifications

Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("css.selectors.-moz-ui-invalid")}}

## Voir aussi

- {{cssxref(":valid")}}
- {{cssxref(":invalid")}}
- {{cssxref(":required")}}
- {{cssxref(":optional")}}
- {{cssxref(":-moz-ui-valid")}}
