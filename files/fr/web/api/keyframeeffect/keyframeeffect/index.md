---
title: Delay
slug: Web/API/KeyframeEffect/KeyframeEffect
---

{{SeeCompatTable}}{{APIRef("Web Animations")}}

La propriété **`delay`** est un dictionnaire pour {{domxref("AnimationEffectTimingProperties")}} qui représente le nombre de millisecondes à attendre avant de démarrer une animation.

> **Note :** {{domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly", "KeyframeEffectReadOnly()")}} et {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} acceptent toutes un objet avec des propriétés de minutage, y compris `delay`. La valeur de `delay` correspond directement à {{domxref("AnimationEffectTimingReadOnly.delay")}} dans les objets {{domxref("AnimationEffectReadOnly.timing")}} renvoyés par {{domxref("AnimationEffectReadOnly")}}, {{domxref("KeyframeEffectReadOnly")}} et {{domxref("KeyframeEffect")}}.

## Syntaxe

```js
var timingProperties = {
  delay: delayInMilliseconds,
};

timingProperties.delay = delayInMilliseconds;
```

### Valeur

Un nombre qui indique la durée qui doit s'écouler entre le début du cycle de l'animation et le début de l'intervalle d'activité (c'est-à-dire le moment où l'animation commence réellement). La valeur par défaut est 0.

## Exemples

Dans l'exemple _[Pool of Tears](https://codepen.io/rachelnabors/pen/EPJdJx?editors=0010)_, chaque larme commence à un instant aléatoire grâce à l'objet de minutage :

```js
// Générateur de valeurs plus
// ou moins aléatoires
var getRandomMsRange = function (min, max) {
  return Math.random() * (max - min) + min;
};

// On parcourt l'ensemble des larmes
tears.forEach(function (el) {
  // On anime chacune des larmes
  el.animate(tearsFalling, {
    delay: getRandomMsRange(-1000, 1000), // aléatoire pour chaque larme
    duration: getRandomMsRange(2000, 6000), // aléatoire pour chaque larme
    iterations: Infinity,
    easing: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  });
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Web Animations](/fr/docs/Web/API/Web_Animations_API)
- {{domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly", "KeyframeEffectReadOnly()")}}, et {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} qui acceptent toutes un objet de minutage, y compris celui-ci (`delay`)
- La valeur de cette propriété correspond à celle de {{domxref("AnimationEffectTimingReadOnly")}} (qui est l'objet de minutage {{domxref("AnimationEffectReadOnly.timing", "timing")}} pour {{domxref("AnimationEffectReadOnly")}}, {{domxref("KeyframeEffectReadOnly")}} et {{domxref("KeyframeEffect")}}).
- Les propriétés CSS {{cssxref("transition-delay")}} et {{cssxref("animation-delay")}}
