---
title: AnimationEvent.elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
---

{{SeeCompatTable}}{{ apiref("AnimationEvent") }}

## Résumé

La propriété en lecture seule **`AnimationEvent.elapsedTime`** est un `float` indiquant la quantité de temps pendant laquelle l'animation a tourné, en secondes, quand l'évènement a été déclenché, excluant tout temps où l'animation était en pause. Pour un évènement [`animationstart`](/fr/docs/Web/API/HTMLElement/animationstart_event), `elapsedTime` est `0.0` sauf si [`animation-delay`](/fr/docs/Web/CSS/animation-delay) a une valeur négative, dans ce cas l'évènement est déclenché avec `elapsedTime` contenant `(-1 * délai)`.

## Syntaxe

```js
temps = AnimationEvent.elapsedTime;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les animations CSS](/fr/docs/CSS/Animations_CSS)
- Propriétés CSS et règles @ en relations avec les animations CSS: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
- L'interface {{domxref("AnimationEvent")}} à laquelle elle appartient.
