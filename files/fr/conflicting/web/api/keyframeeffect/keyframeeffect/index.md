---
title: Animation Effect Timing Properties
slug: conflicting/Web/API/KeyframeEffect/KeyframeEffect
tags:
  - API
  - Animation
  - AnimationEffectTimingProperties
  - Dictionnaire
  - Experimental
  - Interface
  - Reference
translation_of: Web/API/EffectTiming
original_slug: Web/API/EffectTiming
---
{{SeeCompatTable}}{{APIRef("Web Animations")}}

Le dictionnaire **`AnimationEffectTimingProperties`** est utilisé par les méthodes {{domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly", "KeyframeEffectReadOnly()")}} et {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} afin de décrire les propriétés temporelles pour les effets d'animation. L'ensemble de ces propriétés sont optionnelles mais si `duration` n'est pas paramétrée, l'animation ne sera pas lancée.

Ces propriétés décrivent la façon dont l'agent utilisateur applique l'animation entre chaque étape (_keyframe_) et comment elle se comporte au début et à la fin.

## Propriétés

- {{domxref("AnimationEffectTimingProperties.delay", "delay")}} {{optional_inline}}
  - : Le nombre de millisecondes à attendre avant de démarrer l'animation. La valeur par défaut est 0.
- {{domxref("AnimationEffectTimingProperties.direction", "direction")}} {{optional_inline}}
  - : Indique si l'animation se déroule dans le sens the animation runs forwards (`normal`), backwards (`reverse`), switches direction after each iteration (`alternate`), or runs backwards and switches direction after each iteration (`alternate-reverse`). Defaults to `"normal"`.
- {{domxref("AnimationEffectTimingProperties.duration", "duration")}} {{optional_inline}}
  - : La durée d'une itération, exprimée en millisecondes. La valeur par défaut est 0. Bien que cette propriété soit optionnelle, il faut garder à l'esprit que l'animation ne sera pas lancée si la valeur est 0.
- {{domxref("AnimationEffectTimingProperties.easing", "easing")}} {{optional_inline}}
  - : La courbe de progression de l'animation au cours du temps. Cette propriété accepte des valeurs pré-paramétrées comme `"linear"`, `"ease"`, `"ease-in"`, `"ease-out"` et `"ease-in-out"` ou une fonction `"cubic-bezier"` de la forme `"cubic-bezier(0.42, 0, 0.58, 1)"`. La valeur par défaut est `"linear"`.
- {{domxref("AnimationEffectTimingProperties.endDelay", "endDelay")}} {{optional_inline}}
  - : Le nombre de millisecondes à attendre après la fin de l'animation. Cette propriété est principalement utilisée lorsqu'on enchaîne une animation à la suite d'une autre. La valeur par défaut est 0.
- {{domxref("AnimationEffectTimingProperties.fill", "fill")}} {{optional_inline}}
  - : Indique si les effets de l'animation doivent s'appliqués sur l'élément avant d'être lancée (`"backwards"`), être conservés après la fin de l'animation (`"forwards"`) ou les deux `both`. La valeur par défaut est `"none"`.
- {{domxref("AnimationEffectTimingProperties.iterationStart", "iterationStart")}} {{optional_inline}}
  - : Décrit le point de départ de l'animation par rapport à une itération. Une valeur de 0.5 indique que l'animation démarre au milieu de la première animation (dans ce cas, après deux itérations, l'animation sera arrivée à la moitié de la troisième itération). La valeur par défaut est 0.0.
- {{domxref("AnimationEffectTimingProperties.iterations", "iterations")}} {{optional_inline}}
  - : Le nombre de fois que l'animation doit être répétée. La valeur par défaut est 1. Il est possible d'utiliser la valeur {{jsxref("Infinity")}} pour répéter l'animation aussi longtemps que l'élément existe.

## Spécifications

| Spécification                                                                                                                                                | État                                 | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Web Animations', '#the-animationeffecttimingproperties-dictionary', 'AnimationEffectTimingProperties' )}} | {{Spec2('Web Animations')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.EffectTiming")}}

## Voir aussi

- [L'API Web Animations](/fr/docs/Web/API/Web_Animations_API)
- [Utiliser l'API Web Animations](/fr/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- {{domxref("Element.animate()")}}
- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
- {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly", "KeyframeEffectReadOnly()")}}
