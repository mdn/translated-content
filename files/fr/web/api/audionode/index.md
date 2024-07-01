---
title: AudioNode
slug: Web/API/AudioNode
---

{{ APIRef("Web Audio API") }}

L'interface **`AudioNode`** est une interface générique pour représenter un module de traitement audio tel qu'une source audio {{HTMLElement("audio")}}, un élément {{HTMLElement("video")}}, un {{domxref("OscillatorNode")}}, une sortie audio, ou un module de traitement intermédiaire (filtres {{domxref("BiquadFilterNode")}} ou {{domxref("ConvolverNode")}}), un contrôle de volume {{domxref("GainNode")}}.

{{InheritanceDiagram}}

![Des objets AudioNode participant à un objet AudioContext pour créer un graphe de routage audio.](webaudiobasics.png)

Un `AudioNode` a des entrées et sorties, chacune avec un certain nombre de _canaux_. Un `AudioNode` avec zero entrée et une ou plusieurs sorties est appelée un _noeud source_. Le traitement exact varie d'un `AudioNode` à l'autre; en général un noeud lit l'entrée, réalise un traitement, et génère de nouvelles valeurs pour la sortie, ou laisse simplement l'entrée traverser (par exemple dans le cas de l'{{domxref("AnalyserNode")}}, où le résultat du traitment du traitement est accessible à part).

Plusieurs noeuds peuvent être reliés dans un _graphe de traitement_. Un tel graphe est contenu dans un {{domxref("AudioContext")}}. Chaque `AudioNode` fait partie d'exactement un contexte. Les noeuds de traitement héritent des propriétés et méthodse d'`AudioNode`, mais définissent aussi leurs propres fonctionnalités par dessus. Pour plus de détails, voir les pages individuelles liées sur la page d'accueil [Web Audio API](/fr/docs/Web/API/Web_Audio_API).

> **Note :** Un `AudioNode` peut être la cible d'évènements, et implémente donc l'interface {{domxref("EventTarget")}}.

## Propriétés

- {{domxref("AudioNode.context")}} {{readonlyInline}}
  - : Renvoie le {{domxref("AudioContext")}} associé, c'est-à-dire l'objet représentant le graphe de traitement dont le noeud fait partie.

<!---->

- {{domxref("AudioNode.numberOfInputs")}} {{readonlyInline}}
  - : Renvoie le nombre d'entrées d'un noeud. Les noeuds source sont des noeuds dont la propriété `numberOfInputs` a la valeur `0`.

<!---->

- {{domxref("AudioNode.numberOfOutputs")}} {{readonlyInline}}
  - : Renvoie le nombre de sorties d'un noeud. Les noeuds de destination — comme {{ domxref("AudioDestinationNode") }} — sont des noeuds dont cette propriété a la valeur `0`.

<!---->

- {{domxref("AudioNode.channelCount")}}
  - : Représente un entier utilisé pour déterminer le nombre de canaux lors d'une [conversion ascendante ou descendante](/fr/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Conversion_ascendante_et_descendante). Son usage et sa définition précise dépendent de la valeur de {{domxref("AudioNode.channelCountMode")}}.

<!---->

- {{domxref("AudioNode.channelCountMode")}}
  - : Représente une liste énumérative qui décrit la façon dont les canaux doivent être connectés entre les entrées et les sorties.
- {{domxref("AudioNode.channelInterpretation")}}
  - : Représente une liste énumérative qui décrit la signification des canaux. Cette interprétation définit la façon dont la [conversion ascendante ou descendante](/fr/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Conversion_ascendante_et_descendante) est réalisée. Les valeurs possibles sont `"speakers"` ou `"discrete"`.

## Méthodes

_Implémente aussi les méthodes de l'interface_ {{domxref("EventTarget")}}.

- {{domxref("AudioNode.connect()")}}
  - : Permet de connecter une sortie du noeud à l'entrée d'un autre noeud, soit comme données audio, soir comme valeur d'un {{domxref("AudioParam")}}.
- {{domxref("AudioNode.disconnect()")}}
  - : Permet de déconnecter le noeud d'un autre noeud auquel il est déjà connecté.

## Exemple

Ce simple extrait de code illustre la creation de quelques noeuds audio, et la façon dont les propriétés et méthodes `AudioNode` peuvent être utilisées. Vous pouvez trouver d'autres exemples sur n'importe lequel des exemples liés sur la page [Web Audio API](/fr/docs/Web/API/Web_Audio_API) (par exemple [Violent Theremin](https://github.com/mdn/violent-theremin).)

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.context;
oscillator.numberOfInputs;
oscillator.numberOfOutputs;
oscillator.channelCount;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
