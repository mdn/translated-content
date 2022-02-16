---
title: AudioContext
slug: Web/API/AudioContext
tags:
  - API
  - Audio
  - Buffer
  - Experimental
  - Reference
  - Web Audio API
translation_of: Web/API/AudioContext
---
{{APIRef("Web Audio API")}}

L'interface AudioContext représente un graphe de traitement audio fait de modules audio reliés entre eux, chaque module correspondant à un {{domxref ("AudioNode")}}. Un contexte audio contrôle à la fois la création des nœuds qu'il contient et l'exécution du traitement audio, ou du décodage. On commence toujours par créer un contexte audio, et tout ce qui va se passer ensuite se situera dans ce contexte.

Un contexte audio peut être la cible d'événements, par conséquent il implémente l'interface {{domxref ("EventTarget")}}.

{{InheritanceDiagram}}

## Constructeur

- {{domxref("AudioContext.AudioContext", "AudioContext()")}}
  - : Crée et retourne un nouvel objet `AudioContext`.

## Propriétés

- {{domxref("AudioContext.currentTime")}} {{readonlyInline}}
  - : Renvoie un double flottant, qui représente un temps en secondes en augmentation continue, utilisé pour situer dans le temps. Il commence à `0`.
- {{domxref("AudioContext.destination")}} {{readonlyInline}}
  - : Retourne un {{domxref ("AudioDestinationNode")}} représentant la destination finale de tous les fichiers audio dans un contexte. On peut le considérer comme un dispositif de rendu audio.

<!---->

- {{domxref("AudioContext.listener")}} {{readonlyInline}}
  - : Renvoie l'objet {{domxref("AudioListener")}}, utilisé pour la spatialisation 3D.

<!---->

- {{domxref("AudioContext.sampleRate")}} {{readonlyInline}}
  - : Renvoie un nombre flottant représentant la fréquence d'échantillonnage (échantillons par seconde) utilisée par tous les nœuds dans ce contexte.La fréquence d'échantillonnage d'un contexte audio ne peut pas être modifiée.
- {{domxref("AudioContext.state")}} {{readonlyInline}}
  - : Renvoie l'état actuel du contexte audio.
- {{domxref("AudioContext.mozAudioChannelType")}} {{ non-standard_inline() }} {{readonlyInline}}
  - : Sur Firefox OS, utilisé pour renvoyer la piste audio dans laquelle sera jouée le son qui sera lancé dans le contexte audio.

### Event handlers

- {{domxref("AudioContext.onstatechange")}}
  - : Un gestionnaire d'évènement déclenché par un évènement du type {{event("statechange")}}. Cela a lieu quand l'état du contexte audio change, en raison de l'appel des méthodes de changement d'état ({{domxref("AudioContext.suspend")}}, {{domxref("AudioContext.resume")}}, ou {{domxref("AudioContext.close")}}.)

## Méthodes

_Met également en œuvre des méthodes de l'interface {{domxref("EventTarget")}}._

- {{domxref("AudioContext.close()")}}
  - : Supprime le contexte audio, et libère toutes les ressources audio système qu'il utilisait.
- {{domxref("AudioContext.createBuffer()")}}
  - : Crée un nouvel objet {{domxref ("AudioBuffer")}} vide, auquel on pourra assigner des données et que l'on pourra jouer via un {{ domxref("AudioBufferSourceNode") }}
- {{domxref("AudioContext.createBufferSource()")}}
  - : Crée un objet {{domxref ("AudioBufferSourceNode")}}, qui peut être utilisé pour jouer et manipuler des données audio contenues dans un objet {{domxref("AudioBuffer")}}. Les {{domxref("AudioBuffer")}}s sont créés avec la fonction {{domxref("AudioContext.createBuffer")}} ou retournés par la fonction {{domxref("AudioContext.decodeAudioData")}} quand elle décode une piste audio avec succès.
- {{domxref("AudioContext.createMediaElementSource()")}}
  - : Crée un objet {{domxref ("MediaElementAudioSourceNode")}} associé à {{domxref ("HTMLMediaElement")}}. Il peut être utilisé pour manipuler le son d'éléments {{HTMLElement("video")}} ou {{HTMLElement("audio")}}.
- {{domxref("AudioContext.createMediaStreamSource()")}}
  - : Crée un objet {{domxref ("MediaStreamAudioSourceNode")}} associé à un {{domxref ("MediaStream")}} correspondant à un flux audio, qui peut provenir du microphone de l'ordinateur local ou d'autres sources.
- {{domxref("AudioContext.createMediaStreamDestination()")}}
  - : Crée un objet {{domxref ("MediaStreamAudioDestinationNode")}} associé à un {{domxref ("MediaStream")}} correspondant à un flux audio, qui peut être stocké dans un fichier local ou envoyé à un autre ordinateur.
- {{domxref("AudioContext.createScriptProcessor()")}}
  - : Crée un objet {{domxref ("ScriptProcessorNode")}} qui sert à faire du traitement audio directement avec JavaScript.
- {{domxref("AudioContext.createStereoPanner()")}}
  - : Crée un objet {{domxref ("StereoPannerNode")}} qui permet d'appliquer une panoramique sonore à une source audio.
- {{domxref("AudioContext.createAnalyser()")}}
  - : Crée un objet {{domxref ("AnalyserNode")}} qui expose les données de temps et de fréquence, et peut être utilisé pour créer des visualisations de données.

<!---->

- {{domxref("AudioContext.createBiquadFilter()")}}
  - : Crée un objet {{domxref ("BiquadFilterNode")}}, qui représente un filtre de deuxième niveau, qui combine différents types de filtres de base : fréquences hautes, fréquences basses, passe-bande, etc.

<!---->

- {{domxref("AudioContext.createChannelMerger()")}}
  - : Crée un objet {{domxref ("ChannelMergerNode")}} qui permet de rassembler les canaux de différents flux audio en un seul flux.
- {{domxref("AudioContext.createChannelSplitter()")}}
  - : Crée un objet {{domxref ("ChannelSplitterNode")}} utilisé pour accéder aux différents canaux d'un même flux audio et les traiter séparément.
- {{domxref("AudioContext.createConvolver()")}}
  - : Crée un objet {{domxref ("ConvolverNode")}}, qui permet d'appliquer des effets de convolution à un graphe audio, par exemple un effet de réverb.
- {{domxref("AudioContext.createDelay()")}}
  - : Crée un objet {{domxref ("DelayNode")}}, utilisé pour retarder le signal audio entrant d'un certain temps. Il est également
- {{domxref("AudioContext.createDynamicsCompressor()")}}
  - : Crée un objet {{domxref("DynamicsCompressorNode")}} qui permet d'appliquer une compression sur un signal audio.
- {{domxref("AudioContext.createGain()")}}
  - : Crée un objet {{domxref ("GainNode")}} qui permet de controller le niveau sonore global d'un graphe audio.
- {{domxref("AudioContext.createIIRFilter()")}}
  - : Crée un objet {{domxref("IIRFilterNode")}}, qui représente un filtre de second ordre configurable comme différents types de filtres communs.
- {{domxref("AudioContext.createOscillator()")}}
  - : Crée un objet {{domxref("OscillatorNode")}} qui représente une onde périodique. Il génère simplement un son.
- {{domxref("AudioContext.createPanner()")}}
  - : Crée un objet {{domxref("PannerNode")}} utilisé pour spatialiser une source audio entrante dans un espace 3D.
- {{domxref("AudioContext.createPeriodicWave()")}}
  - : Crée un objet {{domxref("PeriodicWave")}}, utilisé pour définir une onde périodique qui peut être utilisée pour contrôler la sortie d'un {{ domxref("OscillatorNode") }}.
- {{domxref("AudioContext.createWaveShaper()")}}
  - : Crée un objet {{domxref ("WaveShaperNode")}}, qui permet d'implémenter des effets de distorsion non linéaires.
- {{domxref("AudioContext.createAudioWorker()")}}
  - : Crée un objet {{domxref("AudioWorkerNode")}}, qui permet d'interagir avec un thread web worker afin de générer, traiter, ou analyser le son directement. Ajouté à la spec le 29 août 2014, mais encore implémenté par aucun des navigateurs à ce jour.
- {{domxref("AudioContext.decodeAudioData()")}}
  - : Décode de façon asynchrone les données d'un fichier audio contenues dans un objet {{domxref("ArrayBuffer")}}. Dans ce cas, le ArrayBuffer est en général chargé depuis un attribut de réponse {{domxref("XMLHttpRequest")}} quand l'attribut `responseType` est `arraybuffer`. Cette méthode ne fonctionne que sur des fichiers complets, pas sur des fragments de fichiers.
- {{domxref("AudioContext.resume()")}}
  - : Reprend le défilement du temps dans un contexte audio où il a précédemment été suspendu.
- {{domxref("AudioContext.suspend()")}}
  - : Suspend le défilement du temps dans un contexte audio, empêchant de façon temporaire l'accès au hardware audio, et réduisant par là l'utilisation du CPU et de la batterie.

## Méthodes obsolètes

- {{domxref("AudioContext.createJavaScriptNode()")}}
  - : Crée un objet {{domxref("JavaScriptNode")}}, utilisé pour un traitement audio directement en JavaScript. Cette méthode est obsolète, et a été remplacée par {{domxref("AudioContext.createScriptProcessor()")}}.
- {{domxref("AudioContext.createWaveTable()")}}
  - : Crée un objet {{domxref("WaveTableNode")}}, utilisé pour définir une onde audio périodique. Cette méthode est obsolète, et a été remplacée par {{domxref("AudioContext.createPeriodicWave()")}}.

## Exemples

Déclaration basique d'un audio context :

    var contexteAudio = new AudioContext;

Variante avec gestion de la compatibilité navigateur:

    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var contexteAudio = new AudioContext();

    var oscillatorNode = contexteAudio.createOscillator();
    var gainNode = contexteAudio.createGain();
    var finish = contexteAudio.destination;
    // etc.

## Spécifications

| Spécification                                                                            | Statut                               | Commentaire |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#AudioContext-section', 'AudioNode')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité des navigateurs

{{Compat("api.AudioContext")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("OfflineAudioContext")}}
