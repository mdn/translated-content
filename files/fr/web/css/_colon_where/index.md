---
title: ':where()'
slug: Web/CSS/:where
tags:
  - CSS
  - Experimental
  - Pseudo-classe
  - Reference
  - Sélecteur
translation_of: Web/CSS/:where
---
{{CSSRef}}{{SeeCompatTable}}

La pseudo-classe fonctionnelle **`:where()`** prend comme argument une liste de sélecteurs et cible tout élément qui peut être sélectionné par l'un des sélecteurs de la liste.

La différence entre `:where()` et {{CSSxRef(":is", ":is()")}} est la suivante : `:where()` aura toujours [une spécificité](/fr/docs/Apprendre/CSS/Introduction_à_CSS/La_cascade_et_l_héritage#Spécificité) nulle tandis que `:is()` prend la spécificité du sélecteur passé en argument le plus spécifique.

## Syntaxe

{{CSSSyntax}}

## Spécifications

| Spécification                                                                    | État                                 | Commentaires         |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("CSS4 Selectors", "#zero-matches", ":where()")}} | {{Spec2("CSS4 Selectors")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.where")}}

## Voir aussi

- {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}}
- [Les composants web](/fr/docs/Web/Web_Components)
