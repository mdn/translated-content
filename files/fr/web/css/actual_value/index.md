---
title: Valeur réelle
slug: Web/CSS/actual_value
---

{{CSSRef}}

La **valeur réelle** d'une propriété CSS est la valeur utilisée par le moteur une fois que toutes les approximations ont été appliquées. Ainsi, un agent utillisateur ne pourra afficher des bordures qu'avec un nombre de pixels entier et pourra ainsi être forcé d'approximer [la valeur calculée](/fr/docs/Web/CSS/Valeur_calculée) pour l'épaisseur de la bordure.

## Calculer la valeur réelle d'une propriété

La valeur réelle est la valeur finale obtenue lors de la détermination d'une propriété, qui passe par les étapes suivantes :

1. [La valeur initiale](/fr/docs/Web/CSS/Valeur_initiale) (indiquée par la spécification).
2. [La valeur définie](/fr/docs/Web/CSS/Valeur_spécifiée) qui résulte de [l'héritage et de la cascade](/fr/Apprendre/CSS/Introduction_à_CSS/La_cascade_et_l_héritage).
3. [La valeur calculée](/fr/docs/Web/CSS/Valeur_calculée) est calculée selon la spécification.
4. La disposition est calculée, fournissant ainsi [la valeur utilisée](/fr/docs/Web/CSS/Valeur_utilisée).
5. _La valeur réelle_

## Spécifications

{{Specifications}}

## Voir aussi

- [La valeur initiale](/fr/docs/Web/CSS/Valeur_initiale)
- [La valeur définie](/fr/docs/Web/CSS/Valeur_spécifiée)
- [La valeur calculée](/fr/docs/Web/CSS/Valeur_calculée)
- [La référence CSS](/fr/docs/Web/CSS/Reference)
