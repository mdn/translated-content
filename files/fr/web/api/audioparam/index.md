---
title: AudioParam
slug: Web/API/AudioParam
tags:
  - API
  - Experimental
  - Reference
  - Web Audio API
translation_of: Web/API/AudioParam
---
{{APIRef("Web Audio API")}}

L'interface **`AudioParam`** représente un paramètre audio, en général un paramètre d'un {{domxref ("AudioNode")}} tel qu'un {{ domxref("GainNode.gain") }}. On peut lui donner une valeur spécifique ou définir une variation de valeur qui intervient à un certain moment et selon un certain fonctionnement.

Il y a deux sortes de `AudioParam`, _a-rate_ et _k-rate_ :

- Un `AudioParam` _a-rate_ réévalue la valeur du paramètre audio pour chaque trame d'échantillons du signal audio.
- Un `AudioParam` _k-rate_ utilise la même valeur de paramètre audio initial pour l'ensemble du bloc traité, c'est-à-dire 128 échantillons.

Chaque {{domxref ("AudioNode")}} définit lequel de ses paramètres sont _a-rate_ ou _k-rate_.

Chaque `AudioParam` a une liste d'événements, initialement vide, qui définit quand et comment les valeurs changent. Si cette liste n'est pas vide, les modifications faites directement avec `AudioParam.value` sont ignorées. Cette liste d'événements permet de planifier les changements qui doivent se produire à des moments très précis à l'aide de courbes d'automatisation chronologiques arbitraires. Les informations de temps utilisées sont celles définies par {{domxref ("AudioContext.currentTime")}}.

## Propriétés

_Hérite des propriétés de son parent, `AudioNode`._

- {{domxref("AudioParam.defaultValue")}} {{readonlyInline}}
  - : Volume initial tel que défini par l'{{domxref ("AudioNode")}} qui crée l'`AudioParam`.
- {{domxref("AudioParam.maxValue")}} {{readonlyInline}}
  - : Valeur maximum de la plage nominale (effective).
- {{domxref("AudioParam.minValue")}} {{readonlyinline}}
  - : Valeur minimum de la plage nominale (effective).

<!---->

- {{domxref("AudioParam.value")}}
  - : Volume, exprimé sous forme de nombre flottant, initialement défini par la valeur de `AudioParam.defaultValue`. Même s'il peut être modifié, toute modification qui a lieu alors que des événements d'automatisation sont prévus - événements programmés en utilisant les méthodes de la `AudioParam` - est ignorée, sans lever aucune exception

## Méthodes

_Hérite des propriétés de son parent, AudioNode._

- {{domxref("AudioParam.setValueAtTime()")}}
  - : Planifie un changement de la valeur d' `AudioParam` à un moment précis, `startTime`, tel que mesuré par rapport à {{domxref ("AudioContext.currentTime")}}. La nouvelle valeur est passée en argument.
- {{domxref("AudioParam.linearRampToValueAtTime()")}}
  - : Planifie un changement de la valeur d'`AudioParam`. Le changement commence à l'heure prévue pour l'événement précédent, évolue selon une rampe linéaire jusqu'à la nouvelle valeur passée dans l'argument `value`, et atteint la nouvelle valeur à l'heure indiquée par le paramètre `endTime`.
- {{domxref("AudioParam.exponentialRampToValueAtTime()")}}
  - : Planifie un changement de la valeur d'`AudioParam`. Le changement commence à l'heure prévue pour l'événement précédent, suit une rampe exponentielle jusqu'à la nouvelle valeur passée dans l'argument `value`, et atteint la nouvelle valeur à l'heure indiquée par le paramètre `endTime`.
    Les rampes exponentielles sont utiles lors du changement de fréquence ou de taux de lecture en raison de la façon dont l'oreille humaine fonctionne.
- {{domxref("AudioParam.setTargetAtTime()")}}
  - : Planifie le début d'un changement de la valeur d'`AudioParam`. Le changement commence à l'heure spécifiée par l'argument `startTime` et de façon exponentielle tend vers la valeur donnée par le paramètre `target`. Le taux de décroissance exponentielle est définie par le paramètre `timeConstant`. C'est le temps nécessaire à un système continu linéaire du premier ordre invariant dans le temps pour atteindre la valeur de 1 - 1 / e (environ 63,2%) donné une réponse d'entrée de l'étape (passage de 0 à 1 en valeur), Plus il est grand, plus la transition sera facile. Ceci est utile pour la décroissance ou la libération de portions d'enveloppes.
- {{domxref("AudioParam.setValueCurveAtTime()")}}
  - : Planifie des valeurs de `AudioParam` selon un jeu de valeurs, défini par le paramètre `values` ([`Float32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)), mis à l'échelle pour s'adapter à l'intervalle de temps donné, en commençant à `startTime`.
- {{domxref("AudioParam.cancelScheduledValues()")}}
  - : Annule toutes les modifications futures prévues du `AudioParam`.
- {{domxref("AudioParam.cancelAndHoldAtTime()")}}
  - : Annule toutes les modifications futures prévues du `AudioParam` mais maintient sa valeur à un certain moment, en attendant que d'autres changements soient effectués. La nouvelle valeur est passée en argument.

## Exemples

Ce premier exemple simple montre la définition de la valeur de `gain` d'un [`GainNode`](/fr/docs/Web/API/GainNode). `gain` est un exemple de paramètre audio de type `a-rate`, car sa valeur peut potentiellement être différente pour chaque trame d'échantillon.

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var gainNode = audioCtx.createGain();
gainNode.gain.value = 0;
```

Ce deuxième exemple montre la définition de plusieurs paramètres d'un {{ domxref("BiquadFilterNode") }}. Ce sont des exemples de paramètre audio de type k-rate AudioParam's, comme les valeurs sont définies une fois pour l'ensemble des échantillons.

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var biquadFilter = audioCtx.createBiquadFilter();

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
```

## Spécifications

| Spécification                                                                            | Statut                               | Commentaire |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#AudioParam-section', 'AudioParam')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AudioParam")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
