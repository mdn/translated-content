---
title: "HTMLMediaElement : propriété currentTime"
short-title: currentTime
slug: Web/API/HTMLMediaElement/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("HTML DOM")}}

La propriété **`currentTime`** de l'interface {{DOMxRef("HTMLMediaElement")}} définit le temps de lecture actuel en secondes.

Changer la valeur de `currentTime` permet de déplacer la lecture vers le nouveau temps.

## Valeur

Une valeur en virgule flottante double précision indiquant le temps de lecture actuel en
secondes.

Si le média n'est pas encore en cours de lecture, la valeur de `currentTime` indique la position temporelle dans le média à laquelle la lecture commencera une fois que la méthode {{DOMxRef("HTMLMediaElement.play", "play()")}} sera appelée.

Définir `currentTime` sur une nouvelle valeur permet de déplacer la lecture vers le temps donné, si le média est disponible.

Pour les médias dont la durée n'est pas connue, comme les médias diffusés en direct, il est possible que le navigateur ne puisse pas obtenir certaines parties du média qui ont expiré de la mémoire tampon du média. De plus, les médias dont la chronologie ne commence pas à 0 seconde ne peuvent pas être recherchés à un moment antérieur au moment le plus tôt de leur chronologie.

La durée du média en secondes peut être déterminée en utilisant la propriété {{DOMxRef("HTMLMediaElement.duration", "duration")}}.

## Exemples

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## Notes d'utilisation

### Précision temporelle réduite

Pour offrir une protection contre les attaques par chronométrage et le {{Glossary("Fingerprinting", "pistage")}}, la précision de `video.currentTime` peut être arrondie en fonction des paramètres du navigateur. Dans Firefox, la préférence `privacy.reduceTimerPrecision` est activée par défaut et est réglée sur 2 ms. Vous pouvez également activer `privacy.resistFingerprinting`, auquel cas la précision sera de 100 ms ou de la valeur de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, selon la valeur la plus élevée.

Par exemple, avec une précision temporelle réduite, le résultat de `video.currentTime` sera toujours un multiple de `0.002`, ou un multiple de `0.1` (ou `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) avec `privacy.resistFingerprinting` activé.

```js
// précision temporelle réduite (2ms) dans Firefox 60
video.currentTime;
// Peut être :
// 23.404
// 24.192
// 25.514
// …

// précision temporelle réduite avec `privacy.resistFingerprinting` activé
video.currentTime;
// Peut être :
// 49.8
// 50.6
// 51.7
// …
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.currentTime`
- La méthode {{DOMxRef("HTMLMediaElement.fastSeek()")}}&nbsp;: une autre façon de définir le temps
- La propriété {{DOMxRef("HTMLMediaElement.duration")}}&nbsp;: la durée du média en secondes
