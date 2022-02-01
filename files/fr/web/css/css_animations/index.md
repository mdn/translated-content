---
title: Les animations CSS
slug: Web/CSS/CSS_Animations
tags:
  - CSS
  - Reference
translation_of: Web/CSS/CSS_Animations
original_slug: Web/CSS/Animations_CSS
---
{{CSSRef}}

Les **animations CSS** sont un module CSS qui définit la façon dont les valeurs des propriétés CSS peuvent être animées au fur et à mesure d'une période via des étapes intermédiaires (_keyframes_ en anglais). Le comportement de ces animations séquencées peut être défini en termes de durée, de nombre de répétitions et de la façon dont elles sont répétées.

## Référence

### Propriétés CSS

- {{cssxref("animation")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timing-function")}}

### Règles @ CSS

- {{cssxref("@keyframes")}}

## Guides

- [Détecter la prise en charge des animations CSS](/fr/docs/Web/CSS/CSS_Animations/Detecting_CSS_animation_support)
  - : Cet article décrit une technique permettant de détecter si le navigateur prend en charge les animations CSS.
- [Manipuler les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Utiliser_les_animations_CSS)
  - : Un tutoriel pas-à-pas qui explique comment créer des animations CSS. Cet article décrit les différentes propriétés et règles @ relatives aux animations et comment elles interagissent.
- [Conseils pour les animations CSS](/fr/docs/Web/CSS/Animations_CSS/Conseils)
  - : Des conseils et astuces pour tirer le meilleur parti des animations CSS. Dans cet article, on décrit une technique qui permet de relancer une animation qui a déjà été exécutée, ce que l'API ne permet pas de faire nativement.

## Spécifications

| Spécification                            | État                                 | Commentaires         |
| ---------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS3 Animations')}} | {{Spec2('CSS3 Animations')}} | Définition initiale. |

## Compatibilité des navigateurs

### Propriété `animation`

{{Compat("css.properties.animation")}}

## Voir aussi

- [Les transitions CSS](/fr/docs/Web/CSS/CSS_Transitions) qui permettent de déclencher des animations suite à des actions utilisateur.
