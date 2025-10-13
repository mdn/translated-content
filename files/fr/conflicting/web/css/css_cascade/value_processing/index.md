---
title: Valeur réelle
slug: conflicting/Web/CSS/CSS_cascade/Value_processing
original_slug: Web/CSS/actual_value
---

{{CSSRef}}

La **valeur réelle** d'une propriété CSS est la valeur utilisée par le moteur une fois que toutes les approximations ont été appliquées. Ainsi, un agent utillisateur ne pourra afficher des bordures qu'avec un nombre de pixels entier et pourra ainsi être forcé d'approximer [la valeur calculée](/fr/docs/Web/CSS/CSS_cascade/Value_processing) pour l'épaisseur de la bordure.

## Calculer la valeur réelle d'une propriété

La valeur réelle est la valeur finale obtenue lors de la détermination d'une propriété, qui passe par les étapes suivantes :

1. [La valeur initiale](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_f91302baa0061849ce1a7eea54ba57f650b9256fcf644b7a35a0645d353b08fc) (indiquée par la spécification).
2. [La valeur définie](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4e3ad4bb8e93bd9e2a381021d1b939f81717e13df739659207d88907070d77aa) qui résulte de [l'héritage et de la cascade](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts).
3. [La valeur calculée](/fr/docs/Web/CSS/CSS_cascade/Value_processing) est calculée selon la spécification.
4. La disposition est calculée, fournissant ainsi [la valeur utilisée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2).
5. _La valeur réelle_

## Spécifications

{{Specifications}}

## Voir aussi

- [La valeur initiale](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_f91302baa0061849ce1a7eea54ba57f650b9256fcf644b7a35a0645d353b08fc)
- [La valeur définie](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4e3ad4bb8e93bd9e2a381021d1b939f81717e13df739659207d88907070d77aa)
- [La valeur calculée](/fr/docs/Web/CSS/CSS_cascade/Value_processing)
- [La référence CSS](/fr/docs/Web/CSS/Reference)
