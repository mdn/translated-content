---
title: AnimationEvent.pseudoElement
slug: Web/API/AnimationEvent/pseudoElement
tags:
  - API
  - AnimationEvent
  - Experimental
  - Propriété
  - Reference
translation_of: Web/API/AnimationEvent/pseudoElement
---
{{SeeCompatTable}}{{ apiref("AnimationEvent") }}

La propriété en lecture seule **`AnimationEvent.pseudoElement`** est une {{domxref("DOMString")}}, commençant par `'::'`, contenant le nom du [pseudo-élément](/fr/docs/CSS/Pseudo-éléments) sur lequel tourne l'animation. Si l'animation ne tourne pas sur un pseudo-élément, mais sur un élément, c'est une chaîne de caractère vide : ` ''``. `

## Syntaxe

    nom = AnimationEvent.pseudoElement

## Spécifications

| Spécification                                                                                                                        | État                                     | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{ SpecName('CSS3 Animations', '#AnimationEvent-pseudoElement', 'AnimationEvent.pseudoElement') }} | {{ Spec2('CSS3 Animations')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.AnimationEvent.pseudoElement")}}

## Voir également

- [Utiliser les animations CSS](/fr/docs/CSS/Animations_CSS)
- Propriétés et règles @ en relation avec les animations CSS : {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
- L'interface {{domxref("AnimationEvent")}} à laquelle elle est rattachée.
