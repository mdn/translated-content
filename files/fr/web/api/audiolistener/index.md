---
title: AudioListener
slug: Web/API/AudioListener
tags:
  - API
  - Experimental
  - Reference
  - Web Audio API
translation_of: Web/API/AudioListener
---
{{APIRef("Web Audio API")}}

L'interface _AudioListener_ représente la position et l'orientation de l'unique personne écoutant la scène audio; elle est utilisée dans le cadre d'une [spatialisation audio](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics). Tous les {{domxref ("PannerNode")}} sont spatialisés par rapport à l'objet _AudioListener_ stocké dans la propriété {{domxref ("AudioContext.listener")}}.

Il est important de noter qu'il n'y a qu'un seul auditeur par contexte, et qu'il ne s'agit pas d'un {{domxref("AudioNode")}}.

![On voit ici la position, les vecteurs haut et face d'un AudioListener, avec les vecteurs haut et face à 90° l'un de l'autre.](webaudiolistenerreduced.png)

## Propriétés

_Hérite des propriétés de son parent,_ `AudioNode`.

> **Note :** Les valeurs de position, d'orientation, et du haut de la tête peuvent être définies et lues à l'aide de différentes syntaxes. Par exemple, l'accès se fait à l'aide de la propriété, `AudioListener.positionX`, tandis que la même propriété est définir à l'aide de `AudioListener.positionX.value`. C'est pourquoi ces valeurs ne sont pas marquées  en lecture seule, bien qu'elles apparaissent comme tel dans la spécification IDL.

- {{domxref("AudioListener.positionX")}}
  - : Position de l'auditeur avec des coordonnées cartésiennes selon la règle de la main droite. La valeur par défaut est 0.
- {{domxref("AudioListener.positionY")}}
  - : Position verticale de l'auditeur avec des coordonnées cartésiennes selon la règle de la main droite. La valeur par défaut est 0.
- {{domxref("AudioListener.positionZ")}}
  - : Position longitudinale (avant et arrière) de l'auditeur avec des coordonnées cartésiennes selon la règle de la main droite. La valeur par défaut est 0.
- {{domxref("AudioListener.forwardX")}}
  - : Position horizontale de l'orientation vers l'avant de l'auditeur avec le même système de coordonnées cartésiennnes que les valeurs de position (`positionX`, `positionY`, and `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes  linéairement l'une de l'autre. La valeur par défaut est 0.
- {{domxref("AudioListener.forwardY")}}
  - : Position verticale de l'orientation vers l'avant de l'auditeur avec le même système de coordonnées cartésiennnes que les valeurs de position (`positionX`, `positionY`, and `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes  linéairement l'une de l'autre. La valeur par défaut est 0.
- {{domxref("AudioListener.forwardZ")}}
  - : Position longitudinale (avant et arrière) de l'orientation vers l'avant de l'auditeur avec le même système de coordonnées cartésiennnes que les valeurs de position (`positionX`, `positionY`, and `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes linéairement l'une de l'autre. La valeur par défaut est 0.
- {{domxref("AudioListener.upX")}}
  - : Position horizontale du haut de la tête de l'auditeur avec le même système de coordonnées cartésiennnes que les valeurs de position (`positionX`, `positionY`, and `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes linéairement l'une de l'autre. La valeur par défaut est 0.
- {{domxref("AudioListener.upY")}}
  - : Position verticale du haut de la tête de l'auditeur avec le même système de coordonnées cartésiennnes que les valeurs de position (`positionX`, `positionY`, and `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes linéairement l'une de l'autre. La valeur par défaut est 0.
- {{domxref("AudioListener.upZ")}}
  - : Position longitudinale (avant et arrière) du haut de la tête de l'auditeur avec le même système de coordonnées cartésiennnes que les valeurs de position (`positionX`, `positionY`, and `positionZ`). Les valeurs de direction vers l'avant et vers le haut sont indépendantes linéairement l'une de l'autre. La valeur par défaut est 0.

## Méthodes

_Hérite des propriétés de son parent,_ `AudioNode`.

- {{domxref("AudioListener.setOrientation()")}}
  - : Définit l'orientation de l'auditeur.
- {{domxref("AudioListener.setPosition()")}}
  - : Définit la position de l'auditeur. Consulter {{anch("Deprecated features")}}  pour savoir pourquoi cette méthode est désormais obsolète.

## Fonctionnalités obsolètes

- {{domxref("AudioListener.dopplerFactor")}} {{obsolete_inline}}
  - : Nombre flottant à double précision représentant la quantité de "pitch shift" à utiliser pour le rendu d'un [effet doppler](http://en.wikipedia.org/wiki/Doppler_effect).
- {{domxref("AudioListener.speedOfSound")}} {{obsolete_inline}}
  - : Nombre flottant à double précision représentant la vitesse du son, en _mètres par seconde_.

Dans une version précédente de la spécification, les propriétés `dopplerFactor` et `speedOfSound` et la méthode `setPosition()` lpouvaient être utilisés pour contrôler un effet doppler appliqué à un {{domxref("AudioBufferSourceNode")}} connecté en aval - ils pouvaient être transposés en fonction de la vitesse relative du {{domxref("PannerNode")}}, et de l'{{domxref("AudioListener")}}. Ces fonctionnalités soulevaient un certain nombre de problèmes :

- Seuls les {{domxref("AudioBufferSourceNode")}} étaient transposés, pas les autres noeuds source.
- Le comportement à adopter lorsqu'un {{domxref("AudioBufferSourceNode")}} était connecté à plusieurs {{domxref("PannerNode")}} n'était pas clair.
- Comme la vélocité du panoramique et de l'auditeur n'étaient pas des {{domxref("AudioParam")}}, la modification du pitch ne pouvait pas être appliquée uniformément, ce qui provoquait des irrégularités dans le son.

C'est la raison pour laquelle elles ont été supprimées.

## Exemples

{{page("/en-US/docs/Web/API/AudioContext.createPanner","Example")}}

## Spécifications

| Spécification                                                                                    | Statut                               | Commentaire |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#AudioListener-section', 'AudioListener')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AudioListener")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
