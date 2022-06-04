---
title: BaseAudioContext
slug: Web/API/BaseAudioContext
tags:
  - API
  - Audio
  - BaseAudioContext
  - Interface
  - Reference
  - TopicStub
  - Web Audio API
translation_of: Web/API/BaseAudioContext
---
{{APIRef("Web Audio API")}}

L'interface `BaseAudioContext` agit comme une définition de base pour les graphiques de traitement audio en ligne et hors ligne, comme représenté par {{domxref("AudioContext")}} et {{domxref("OfflineAudioContext")}} respectivement. Vous n'utiliseriez pas `BaseAudioContext` directement — vous utiliseriez ses fonctionnalités via l'une de ces deux interfaces héréditaires.

Un `BaseAudioContext` peut être une cible d'événements, il implémente donc l'interface {{domxref("EventTarget")}}.

{{InheritanceDiagram}}

## Propriétés

- {{domxref("BaseAudioContext.audioWorklet")}} {{experimental_inline}} {{readonlyInline}}
  - : Renvoie l'objet {{domxref("AudioWorklet")}}, utilisé pour créer des AudioNodes personnalisés avec traitement JavaScript.
- {{domxref("BaseAudioContext.currentTime")}} {{readonlyInline}}
  - : Renvoie un double représentant une durée matérielle toujours croissante en secondes utilisée pour la planification. Il commence à `0`.
- {{domxref("BaseAudioContext.destination")}} {{readonlyInline}}
  - : Renvoie un {{domxref("AudioDestinationNode")}} représentant la destination finale de tout l'audio dans le contexte. Il peut être considéré comme le périphérique de rendu audio.
- {{domxref("BaseAudioContext.listener")}} {{readonlyInline}}
  - : Renvoie l'objet {{domxref("AudioListener")}}, utilisé pour la spatialisation 3D.
- {{domxref("BaseAudioContext.sampleRate")}} {{readonlyInline}}
  - : Renvoie un float représentant la fréquence d'échantillonnage (en échantillons par seconde) utilisée par tous les nœuds dans ce contexte. La fréquence d'échantillonnage d'un {{domxref("AudioContext")}} ne peut pas être modifiée.
- {{domxref("BaseAudioContext.state")}} {{readonlyInline}}
  - : Renvoie l'état actuel de l'`AudioContext`.

### Gestionnaires d'événements

- {{domxref("BaseAudioContext.onstatechange")}}
  - : Un gestionnaire d'événements qui s'exécute lorsqu'un événement de type {{event("statechange")}} s'est déclenché. Cela se produit lorsque l'état de l'`AudioContext` change, en raison de l'appel de l'une des méthodes de changement d'état ({{domxref("AudioContext.suspend")}}, {{domxref("AudioContext.resume")}}, ou {{domxref("AudioContext.close")}}).

## Méthodes

_Implémente également les méthodes de l'interface_ {{domxref("EventTarget")}}.

- {{domxref("BaseAudioContext.createBuffer()")}}
  - : Crée un nouvel objet {{ domxref("AudioBuffer") }} vide, qui peut ensuite être rempli de données et lu via un {{ domxref("AudioBufferSourceNode") }}.
- {{domxref("BaseAudioContext.createConstantSource()")}}
  - : Crée un objet {{domxref("ConstantSourceNode")}}, qui est une source audio qui émet en continu un signal sonore monophonique (un canal) dont les échantillons ont tous la même valeur.
- {{domxref("BaseAudioContext.createBufferSource()")}}
  - : Crée un {{domxref("AudioBufferSourceNode")}}, qui peut être utilisé pour lire et manipuler des données audio contenues dans un objet {{ domxref("AudioBuffer") }}. Les {{ domxref("AudioBuffer") }} sont créés à l'aide de {{domxref("AudioContext.createBuffer")}} ou renvoyés par {{domxref("AudioContext.decodeAudioData")}} lorsqu'il décode avec succès une piste audio.
- {{domxref("BaseAudioContext.createScriptProcessor()")}}
  - : Crée un {{domxref("ScriptProcessorNode")}}, qui peut être utilisé pour le traitement audio direct via JavaScript.
- {{domxref("BaseAudioContext.createStereoPanner()")}}
  - : Crée un {{domxref("StereoPannerNode")}}, qui peut être utilisé pour appliquer un panoramique stéréo à une source audio.
- {{domxref("BaseAudioContext.createAnalyser()")}}
  - : Crée un {{domxref("AnalyserNode")}}, qui peut être utilisé pour exposer les données de temps et de fréquence audio et par exemple pour créer des visualisations de données.
- {{domxref("BaseAudioContext.createBiquadFilter()")}}
  - : Crée un {{domxref("BiquadFilterNode")}}, qui représente un filtre du second ordre configurable en plusieurs types de filtres courants: passe-haut, passe-bas, passe-bande, etc.
- {{domxref("BaseAudioContext.createChannelMerger()")}}
  - : Crée un {{domxref("ChannelMergerNode")}}, qui est utilisé pour combiner les canaux de plusieurs flux audio en un seul flux audio.
- {{domxref("BaseAudioContext.createChannelSplitter()")}}
  - : Crée un {{domxref("ChannelSplitterNode")}}, qui est utilisé pour accéder aux canaux individuels d'un flux audio et les traiter séparément.
- {{domxref("BaseAudioContext.createConvolver()")}}
  - : Crée un {{domxref("ConvolverNode")}}, qui peut être utilisé pour appliquer des effets de convolution à votre graphique audio, par exemple un effet de réverbération.
- {{domxref("BaseAudioContext.createDelay()")}}
  - : Crée un {{domxref("DelayNode")}}, qui est utilisé pour retarder le signal audio entrant d'une certaine quantité. Ce nœud est également utile pour créer des boucles de rétroaction dans un graphique d'API Web Audio.
- {{domxref("BaseAudioContext.createDynamicsCompressor()")}}
  - : Crée un {{domxref("DynamicsCompressorNode")}}, qui peut être utilisé pour appliquer une compression acoustique à un signal audio.
- {{domxref("BaseAudioContext.createGain()")}}
  - : Crée un {{domxref("GainNode")}}, qui peut être utilisé pour contrôler le volume global du graphique audio.
- {{domxref("BaseAudioContext.createIIRFilter()")}}
  - : Crée un {{domxref("IIRFilterNode")}}, qui représente un filtre du second ordre configurable en plusieurs types de filtres communs différents.
- {{domxref("BaseAudioContext.createOscillator()")}}
  - : Crée un {{domxref("OscillatorNode")}}, une source représentant une forme d'one périodique. Cela génère essentiellement un ton.
- {{domxref("BaseAudioContext.createPanner()")}}
  - : Crée un {{domxref("PannerNode")}}, qui est utilisé pour spatialiser un flux audio entrant dans l'espace 3D.
- {{domxref("BaseAudioContext.createPeriodicWave()")}}
  - : Crée un {{domxref("PeriodicWave")}}, utilisé pour définir une forme d'one périodique qui peut être utilisée pour déterminer la sortie d'un {{ domxref("OscillatorNode") }}.
- {{domxref("BaseAudioContext.createWaveShaper()")}}
  - : Crée un {{domxref("WaveShaperNode")}}, qui est utilisé pour implémenter des effets de distorsion non linéaires.
- {{domxref("BaseAudioContext.decodeAudioData()")}}
  - : Décode de manière asynchrone les données de fichiers audio contenues dans un {{domxref("ArrayBuffer")}}. Dans ce cas, le ArrayBuffer est généralement chargé à partir de l'attribut `response` d'un {{domxref("XMLHttpRequest")}} après avoir défini le `responseType` sur `arraybuffer`. Cette méthode ne foncionne que sur des fichiers complets et non sur des fragments de fichiers audio.
- {{domxref("BaseAudioContext.resume()")}}
  - : Reprend la progression du temps dans un contexte audio précédemment suspendu / mis en pause.

## Exemples

Déclaration de context audio de base:

```js
var audioCtx = new AudioContext();
```

Variante de nagivateur croisé:

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var oscillatorNode = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
var finish = audioCtx.destination;
// etc.
```

## Spécifications

| Spécification                                                                                | Statut                               | Commentaire |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#BaseAudioContext', 'BaseAudioContext')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité des navigateurs

{{Compat("api.BaseAudioContext")}}

## Voir aussi

- [Utilisation de l'API Web Audio](/en-US/docs/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioContext")}}
- {{domxref("OfflineAudioContext")}}
