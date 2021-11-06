---
title: <filter-function>
slug: Web/CSS/filter-function
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/filter-function
---
{{CSSRef}}

Le type de donnée **`<filter-function>`** représente un effet graphique qui peut modifier l'apparence d'une image. Il est notamment utilisé avec les propriétés {{cssxref("filter")}} et {{cssxref("backdrop-filter")}}.

## Syntaxe

Une valeur de type `<filter-function>` se construit avec l'une des fonctions listées ci-après. Chaque fonction utilise un argument et si celui-ci est invalide, aucun filtre n'est appliqué.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Ajoute un flou sur l'image.
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Rend l'image plus claire ou plus sombre.
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Augmente ou diminue le contraste de l'image.
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Applique une ombre portée derrière l'image.
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Convertit l'image en niveaux de gris.
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}​​​​​​​​​​​​​​
  - : Modifie la teinte globale de l'image.
- {{cssxref("filter-function/invert", "invert()")}}
  - : Inverse les couleurs de l'image.
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : Rend l'image transparente.
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : Sursature ou désature l'image.
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : Convertit l'image en sépia.

## Spécifications

| Spécification                                                                                                | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('Filters 1.0', '#typedef-filter-function', '&lt;filter-function&gt;')}} | {{Spec2('Filters 1.0')}} | Définition initiale. |

## Voir aussi

- Les propriétés qui utilisent ce type de donnée :

  - {{cssxref("filter")}}
  - {{cssxref("backdrop-filter")}}
