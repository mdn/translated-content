---
title: AudioBufferSourceNode
slug: Web/API/AudioBufferSourceNode
tags:
  - API
  - Buffer
  - Experimental
  - Reference
  - Web Audio API
translation_of: Web/API/AudioBufferSourceNode
---
{{APIRef("Web Audio API")}}

L'interface **AudioBufferSourceNode** est un {{domxref("AudioScheduledSourceNode")}} qui représente une source audio constituée de données audio en mémoire, stockées dans un {{domxref ("AudioBuffer")}}. Elle est particulièrement utile pour lire des sons qui requierrent des conditions de lecture particulières, comme la synchronisation sur un certain rythme, et peuvent être stockés en mémoire. Si ce type de son doit être lu depuis le disque ou le réseau, il conviendra d'utiliser un {{domxref("AudioWorkletNode")}}.

{{InheritanceDiagram}}

Un AudioBufferSourceNode n'a pas d'entrée et il comporte une unique sortie, dont le nombre de canaux est spécifié par la propriété {{domxref("AudioBufferSourceNode.buffer", "buffer")}}. Si aucun buffer n'est paramétré, c'est-à-dire si la valeur de l'attribut est NULL, la sortie contient un seul canal silencieux (chaque échantillon vaut 0).

Un {{domxref("AudioBufferSourceNode")}} ne peut être joué qu'une seule fois; autrement dit un seul appel à la fonction `AudioBufferSourceNode.start()` est autorisé. Pour rejouer le son, il faut créer un nouvel `AudioBufferSourceNode`. Heureusement ces noeuds ne demandent pas beaucoup de ressource, et les véritables `AudioBuffer`s peuvent être réutilisés. On dit que les `AudioBufferSourceNode`s doivent être utilisés en mode "one shot": une fois que la lecture est lancée, toutes les références peuvent être supprimées, et elles seront collectées par le ramasse-miette automatiquement quand la lecture des sons sera terminée.

Plusieurs appels à la fonction `AudioBufferSourceNode.stop()` sont autorisés. Le dernier appel remplace le précédent, à condition que le `AudioBufferSourceNode` n'ait pas déjà atteint la fin du buffer.

![L'objet AudioBufferSourceNode prend le contenu d'un AudioBuffer et le convertit en audio](webaudioaudiobuffersourcenode.png)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><dfn>Nombre d'entrées</dfn></th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row"><dfn>Nombre de sorties</dfn></th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row"><dfn>Nombre de canaux</dfn></th>
      <td>défini par l'objet {{domxref("AudioBuffer")}} associé</td>
    </tr>
  </tbody>
</table>

## Constructeur

- {{domxref("AudioBufferSourceNode.AudioBufferSourceNode", "AudioBufferSourceNode()")}}
  - : Crée et retourne un nouvel objet `AudioBufferSourceNode`. Un {{domxref("AudioBufferSourceNode")}} peut être instancié à l'aide la méthode {{domxref("AudioContext.createBufferSource()")}}.

## Propriétés

_Hérite des propriétés de son parent, {{domxref("AudioNode")}}._

- {{domxref("AudioBufferSourceNode.buffer")}}
  - : {{domxref ("AudioBuffer")}} qui définit la ressource à jouer; lorsqu'il a la valeur NULL, définit un canal unique silencieux (dans lequel chaque échantillon vaut 0.0).
- {{domxref("AudioBufferSourceNode.detune")}}
  - : {{domxref("AudioParam")}} de type [k-rate](/fr/docs/DOM/AudioParam#k-rate) représentant le désaccordage de la fréquence exprimé en [cents](http://en.wikipedia.org/wiki/Cent_%28music%29). Cette valeur est composée à partir du `playbackRate` pour déterminer la vitesse à laquelle le son sera jouée. Sa valeur par défaut est `0` (qui correspond à aucun désaccordage), et son rang nominal va de -∞ à ∞.
- {{domxref("AudioBufferSourceNode.loop")}}
  - : Attribut booléen indiquant si la ressource doit être lue de nouveau lorsque la fin de l'{{domxref ("AudioBuffer")}} est atteinte. Sa valeur par défaut est `false`.
- {{domxref("AudioBufferSourceNode.loopStart")}} {{optional_inline}}
  - : Nombre flottant à double précision indiquant, en secondes, à quel moment de l'{{domxref ("AudioBuffer")}} la lecture doit reprendre. Sa valeur par défaut est 0.
- {{domxref("AudioBufferSourceNode.loopEnd")}} {{optional_inline}}
  - : Nombre flottant à double précision indiquant, en secondes, à quel moment de l'{{domxref ("AudioBuffer")}} la relecture doit s'arrêter (et éventuellement boucler à nouveau). Sa valeur par défaut est 0.
- {{domxref("AudioBufferSourceNode.playbackRate")}}
  - : {{domxref ("AudioParam")}} de type [a-rate](/fr/docs/Web/API/AudioParam#a-rate) qui définit le facteur de vitesse à laquelle la ressource audio sera jouée. Comme aucune correction de pitch n'est appliquée sur la sortie, il peut être utilisé pour modifier le pitch de l'échantillon.

### Gestionnaires d'évènement

_Hérite des gestionnaires d'évènement de son parent, {{domxref("AudioScheduledSourceNode")}}_.

## Méthodes

_Hérite des méthodes de son parent, {{domxref("AudioNode")}}._

## Exemple

Cet exemple crée un tampon de deux secondes, le remplit avec du bruit blanc et le joue par l'intermédiaire d'un `AudioBufferSourceNode`.

> **Note :** Vous pouvez aussi [exécuter the code](http://mdn.github.io/audio-buffer/), ou [regarder le code source](https://github.com/mdn/audio-buffer).

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var bouton = document.querySelector('button');
var pre = document.querySelector('pre');
var monScript = document.querySelector('script');

pre.innerHTML = monScript.innerHTML;

// Stéréo
var canaux = 2;

// Crée un tampon vide de deux secondes
// au taux d'échantillonnage du AudioContext
var compteurTrames = contexteAudio.sampleRate * 2.0;

var myArrayBuffer = contexteAudio.createBuffer(2, compteurTrames, contexteAudio.sampleRate);

bouton.onclick = function() {
  // remplit le tampon avec du bruit blanc;
  // valeurs aléatoires entre -1.0 et 1.0
  for (var canal = 0; canal < canaux; canal++) {
   // crée le ArrayBuffer qui contient les données
   var nowBuffering = myArrayBuffer.getChannelData(canal);
   for (var i = 0; i < compteurTrames; i++) {
     // Math.random() est compris entre [0; 1.0]
     // audio doit être compris entre [-1.0; 1.0]
     nowBuffering[i] = Math.random() * 2 - 1;
   }
  }

  // crée AudioBufferSourceNode.
  // c'est AudioNode utilisé pour lire un AudioBuffer
  var source = contexteAudio.createBufferSource();
  // initialise le tampon du AudioBufferSourceNode
  source.buffer = myArrayBuffer;
  // connecte l'AudioBufferSourceNode avec la destination
  // de façon à ce qu'on puisse entendre le son
  source.connect(contexteAudio.destination);
  // lance la lecture de la source
  source.start();
}
```

> **Note :** Pour un exemple de `decodeAudioData`(), voir la page {{domxref("AudioContext.decodeAudioData")}}.

## Spécifications

| Spécification                                                                                                        | Statut                               | Commentaire |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#AudioBufferSourceNode-section', 'AudioBufferSourceNode')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AudioBufferSourceNode")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
