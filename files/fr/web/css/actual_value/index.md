---
title: Valeur réelle
slug: Web/CSS/actual_value
---

{{CSSRef}}

La **valeur réelle** d'une propriété CSS est la valeur utilisée par le moteur une fois que toutes les approximations ont été appliquées. Ainsi, un agent utillisateur ne pourra afficher des bordures qu'avec un nombre de pixels entier et pourra ainsi être forcé d'approximer [la valeur calculée](/fr/docs/Web/CSS/computed_value) pour l'épaisseur de la bordure.

## Calculer la valeur réelle d'une propriété

La valeur réelle est la valeur finale obtenue lors de la détermination d'une propriété, qui passe par les étapes suivantes :

1. [La valeur initiale](/fr/docs/Web/CSS/initial_value) (indiquée par la spécification).
2. [La valeur définie](/fr/docs/Web/CSS/specified_value) qui résulte de [l'héritage et de la cascade](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).
3. [La valeur calculée](/fr/docs/Web/CSS/computed_value) est calculée selon la spécification.
4. La disposition est calculée, fournissant ainsi [la valeur utilisée](/fr/docs/Web/CSS/used_value).
5. _La valeur réelle_

## Spécifications

{{Specifications}}

## Voir aussi

- [La valeur initiale](/fr/docs/Web/CSS/initial_value)
- [La valeur définie](/fr/docs/Web/CSS/specified_value)
- [La valeur calculée](/fr/docs/Web/CSS/computed_value)
- [La référence CSS](/fr/docs/Web/CSS/Reference)
