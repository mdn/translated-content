---
title: AudioListener
slug: Web/API/AudioListener
---

{{APIRef("Web Audio API")}}

L'interface `AudioListener` représente la position et l'orientation de l'unique personne écoutant la scène audio&nbsp;; elle est utilisée dans le cadre d'une [spatialisation audio](/fr/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics). Tous les objets [`PannerNode`](/fr/docs/Web/API/PannerNode) sont spatialisés par rapport à l'objet `AudioListener` stocké dans la propriété [`BaseAudioContext.listener`](/fr/docs/Web/API/BaseAudioContext/listener).

Il est important de noter qu'il n'y a qu'un seul auditeur par contexte, et qu'il ne s'agit pas d'un [`AudioNode`](/fr/docs/Web/API/AudioNode).

![On voit ici la position, les vecteurs haut et face d'un AudioListener, avec les vecteurs haut et face à 90° l'un de l'autre.](webaudiolistenerreduced.svg)

## Propriétés

> **Note :** Les valeurs de position, d'orientation, et du haut de la tête peuvent être définies et lues à l'aide de différentes syntaxes. Par exemple, l'accès se fait à l'aide de la propriété, `AudioListener.positionX`, tandis que la même propriété est définie à l'aide de `AudioListener.positionX.value`. C'est pourquoi ces valeurs ne sont pas marquées en lecture seule, bien qu'elles apparaissent comme telle dans la spécification IDL.

- [`AudioListener.positionX`](/fr/docs/Web/API/AudioListener/positionX)
  - : La position horizontale de la personne qui écoute avec des coordonnées cartésiennes selon la règle de la main droite. La valeur par défaut est `0`.
- [`AudioListener.positionY`](/fr/docs/Web/API/AudioListener/positionY)
  - : La position verticale de la personne qui écoute avec des coordonnées cartésiennes selon la règle de la main droite. La valeur par défaut est `0`.
- [`AudioListener.positionZ`](/fr/docs/Web/API/AudioListener/positionZ)
  - : La position longitudinale (avant et arrière) de la personne qui écoute avec des coordonnées cartésiennes selon la règle de la main droite. La valeur par défaut est `0`.
- [`AudioListener.forwardX`](/fr/docs/Web/API/AudioListener/forwardX)
  - : La position horizontale de l'orientation vers l'avant de la personne qui écoute avec le même système de coordonnées cartésiennes que les valeurs de position (`positionX`, `positionY`, et `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes linéairement l'une de l'autre. La valeur par défaut est `0`.
- [`AudioListener.forwardY`](/fr/docs/Web/API/AudioListener/forwardY)
  - : La position verticale de l'orientation vers l'avant de la personne qui écoute avec le même système de coordonnées cartésiennes que les valeurs de position (`positionX`, `positionY`, et `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes linéairement l'une de l'autre. La valeur par défaut est `0`.
- [`AudioListener.forwardZ`](/fr/docs/Web/API/AudioListener/forwardZ)
  - : La position longitudinale (avant et arrière) de l'orientation vers l'avant de la personne qui écoute avec le même système de coordonnées cartésiennes que les valeurs de position (`positionX`, `positionY`, et `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes linéairement l'une de l'autre. La valeur par défaut est `-1`.
- [`AudioListener.upX`](/fr/docs/Web/API/AudioListener/upX)
  - : La position horizontale du haut de la tête de la personne qui écoute avec le même système de coordonnées cartésiennes que les valeurs de position (`positionX`, `positionY`, et `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes linéairement l'une de l'autre. La valeur par défaut est `0`.
- [`AudioListener.upY`](/fr/docs/Web/API/AudioListener/upY)
  - : La position verticale du haut de la tête de la personne qui écoute avec le même système de coordonnées cartésiennes que les valeurs de position (`positionX`, `positionY`, et `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes linéairement l'une de l'autre. La valeur par défaut est `1`.
- [`AudioListener.upZ`](/fr/docs/Web/API/AudioListener/upZ)
  - : La position longitudinale (avant et arrière) du haut de la tête de la personne qui écoute avec le même système de coordonnées cartésiennes que les valeurs de position (`positionX`, `positionY`, et `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes linéairement l'une de l'autre. La valeur par défaut est `0`.

## Méthodes

- [`AudioListener.setOrientation()`](/fr/docs/Web/API/AudioListener/setOrientation) {{deprecated_inline}}
  - : Définit l'orientation de la personne qui écoute.
- [`AudioListener.setPosition()`](/fr/docs/Web/API/AudioListener/setPosition) {{deprecated_inline}}
  - : Définit la position de la personne qui écoute.

> **Note :** Bien que ces méthodes soient dépréciées, il s'agit de l'unique façon de définir l'orientation et la position pour Firefox, Internet Explorer et Safari.

## Fonctionnalités dépréciées

- [`AudioListener.dopplerFactor`](/fr/docs/Web/API/AudioListener/dopplerFactor) {{deprecated_inline}}
  - : Nombre flottant à double précision représentant la quantité de décalage de fréquence (<i lang="en">pitch shift</i>) à utiliser pour le rendu d'un [effet doppler](https://fr.wikipedia.org/wiki/Effet_Doppler).
- [`AudioListener.speedOfSound`](/fr/docs/Web/API/AudioListener/speedOfSound) {{deprecated_inline}}
  - : Nombre flottant à précision double représentant la vitesse du son, en _mètres par seconde_.

Dans une version précédente de la spécification, les propriétés `dopplerFactor` et `speedOfSound` et la méthode `setPosition()` pouvaient être utilisés pour contrôler un effet Doppler appliqué à un [`AudioBufferSourceNode`](/fr/docs/Web/API/AudioBufferSourceNode) connecté en aval. Ils pouvaient être transposés en fonction de la vitesse relative du [`PannerNode`](/fr/docs/Web/API/PannerNode), et de l'`AudioListener`. Ces fonctionnalités soulevaient un certain nombre de problèmes&nbsp;:

- Seuls les [`AudioBufferSourceNode`](/fr/docs/Web/API/AudioBufferSourceNode) étaient transposés, pas les autres nœuds source.
- Le comportement à adopter lorsqu'un [`AudioBufferSourceNode`](/fr/docs/Web/API/AudioBufferSourceNode) était connecté à plusieurs [`PannerNode`](/fr/docs/Web/API/PannerNode) n'était pas clair.
- Comme la vélocité du panoramique et de la personne qui écoute n'étaient pas des [`AudioParam`](/fr/docs/Web/API/AudioParam), la modification du pitch ne pouvait pas être appliquée uniformément, ce qui provoquait des irrégularités dans le son.

C'est la raison pour laquelle elles ont été supprimées.

Les méthodes `setOrientation()` et `setPosition()` ont été remplacées par la capacité à modifier les valeurs des propriétés correspondantes. Ainsi, `setPosition(x, y, z)` pourra être réalisé en agissant sur les propriétés `positionX.value`, `positionY.value`, et `positionZ.value`.

## Exemples

Voir la page sur [`BaseAudioContext.createPanner()`](/fr/docs/Web/API/BaseAudioContext/createPanner#exemple) pour un exemple de code.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API <i lang="en">Web Audio</i>](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
