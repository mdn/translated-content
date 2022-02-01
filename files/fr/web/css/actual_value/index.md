---
title: Valeur réelle
slug: Web/CSS/actual_value
tags:
  - CSS
  - Guide
  - Reference
translation_of: Web/CSS/actual_value
original_slug: Web/CSS/valeur_reelle
---
{{CSSRef}}

La **valeur réelle** d'une propriété CSS est la valeur utilisée par le moteur une fois que toutes les approximations ont été appliquées. Ainsi, un agent utillisateur ne pourra afficher des bordures qu'avec un nombre de pixels entier et pourra ainsi être forcé d'approximer [la valeur calculée](/fr/docs/Web/CSS/Valeur_calcul%C3%A9e) pour l'épaisseur de la bordure.

## Calculer la valeur réelle d'une propriété

La valeur réelle est la valeur finale obtenue lors de la détermination d'une propriété, qui passe par les étapes suivantes :

1.  [La valeur initiale](/fr/docs/Web/CSS/Valeur_initiale) (indiquée par la spécification).
2.  [La valeur définie](/fr/docs/Web/CSS/Valeur_sp%C3%A9cifi%C3%A9e) qui résulte de [l'héritage et de la cascade](/fr/Apprendre/CSS/Introduction_à_CSS/La_cascade_et_l_héritage).
3.  [La valeur calculée](/fr/docs/Web/CSS/Valeur_calcul%C3%A9e) est calculée selon la spécification.
4.  La disposition est calculée, fournissant ainsi [la valeur utilisée](/fr/docs/Web/CSS/Valeur_utilis%C3%A9e).
5.  _La valeur réelle_

## Spécifications

| Spécification                                                                            | État                     | Commentaires         |
| ---------------------------------------------------------------------------------------- | ------------------------ | -------------------- |
| {{SpecName('CSS2.1', 'cascade.html#actual-value', 'actual value')}} | {{Spec2('CSS2.1')}} | Définition initiale. |

## Voir aussi

- [La valeur initiale](/fr/docs/Web/CSS/Valeur_initiale)
- [La valeur définie](/fr/docs/Web/CSS/Valeur_sp%C3%A9cifi%C3%A9e)
- [La valeur calculée](/fr/docs/Web/CSS/Valeur_calcul%C3%A9e)
- [La référence CSS](/fr/docs/Web/CSS/Reference)
