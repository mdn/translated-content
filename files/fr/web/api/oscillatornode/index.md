---
title: OscillatorNode
slug: Web/API/OscillatorNode
translation_of: Web/API/OscillatorNode
---
{{APIRef("Web Audio API")}}

L'interface `OscillatorNode` représente un signal périodique, une sinusoïde par exemple. C'est un module de traitement audio {{domxref("AudioNode")}} qui crée un signal sinusoïdal à une fréquence donnée — c'est-à-dire génère une tonalité constante.

On crée un `OscillatorNode` en utilisant la méthode {{domxref("AudioContext.createOscillator")}}. Il a toujours exactement une sortie, et aucune entrée. Ses propriétés par défaut (voir {{domxref("AudioNode")}} pour la définition) sont :

- Nombre d'entrées : `0`
- Nombre de sorties : `1`
- Mode de calcul des canaux : `max`
- Nombre de canaux : `2` (propriété ignorée dans le mode de calcul par défaut)
- Interprétation des canaux : `speakers`

## Propriétés

*Hérite des propriétés de ses parents,* *{{domxref("AudioNode")}}*.

- {{domxref("OscillatorNode.frequency")}}
  - : {{domxref("AudioParam")}} de type [a-rate](/fr/docs/Web/API/AudioParam#a-rate) représentant la fréquence d'oscillation en Hertz (la propriété frequency est en lecture seule, mais sa sous-propriété value ne l'est pas).
- {{domxref("OscillatorNode.detune")}}
  - : {{domxref("AudioParam")}} de type [a-rate](/fr/docs/Web/API/AudioParam#a-rate) représentant le désaccordage de l' oscillation exprimé en cents  (la propriété detune est en lecture seule, mais sa sous-propriété value ne l'est pas).
- {{domxref("OscillatorNode.type")}}
  - : Chaîne de caractères indiquant la forme de l'onde générée. Différentes ondes produisent différentes tonalités.  Les valeurs standard sont `"sine"`, `"square"`, `"sawtooth"`, `"triangle"` et `"custom"`. La valeur par défault is `"sine"`. `custom` permet d'utiliser une {{domxref("PeriodicWave")}} pour décrire une forme d'onde personnalisée.

## Méthodes

_Hérite des méthodes de ses parents, {{domxref("AudioNode")}}_.

- {{domxref("OscillatorNode.start()")}}
  - : Cette méthode déclenche la lecture du son.
- {{domxref("OscillatorNode.stop()")}}
  - : Cette méthode interrompt la lecture du son.
- {{domxref("OscillatorNode.setPeriodicWave()")}}
  - : Cette méthode définit une {{domxref("PeriodicWave")}} qui peut être utilisée pour donner sa forme à la sortie de l'oscillateur, quand on utilise l'attribut `type = "custom"`. Elle remplace la méthode devenue obsolète {{domxref("OscillatorNode.setWaveTable")}}.

## Event handlers

- {{domxref("OscillatorNode.onended")}}
  - : Propriété utilisée pour assigner un gestionnaire d'évènement à l'évènement `ended`, qui est émis une fois que la lecture du son est terminée.

## Exemples

L'exemple suivant montre une utilisation basique d'un [`AudioContext`](/fr/docs/Web/API/AudioContext) pour créer un `OscillatorNode`. Pour un exemple appliqué, jetez un œil à notre [démo «&nbsp;<i lang="en">Violent Theremin</i>&nbsp;»](https://mdn.github.io/violent-theremin/) (voir [`app.js`](https://github.com/mdn/violent-theremin/blob/gh-pages/scripts/app.js) pour l'intégralité du code).

```js
// crée un contexteaudio
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = contexteAudio.createOscillator();
oscillator.connect(contexteAudio.destination);
oscillator.type = 'square';
oscillator.frequency.value = 440; // valeur en hertz

oscillator.start();
```

## Spécifications

| Spécification                                                                                                | Statut                               | Commentaire |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#the-oscillatornode-interface', 'OscillatorNode')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité des navigateurs

{{Compat("api.OscillatorNode")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
