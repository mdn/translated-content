---
title: BaseAudioContext.createBufferSource()
slug: Web/API/BaseAudioContext/createBufferSource
translation_of: Web/API/BaseAudioContext/createBufferSource
---
{{ APIRef("Web Audio API") }}

La méthode `createBufferSource()` de l’interface {{ domxref("BaseAudioContext") }} est utilisée pour créer un nouveau {{ domxref("AudioBufferSourceNode") }}, qui peut être employé pour jouer des données audio contenues dans un objet {{ domxref("AudioBuffer") }}.

Des {{ domxref("AudioBuffer") }} peuvent être créés en utilisant {{domxref("BaseAudioContext.createBuffer")}}, ou sont retournés par la méthode {{domxref("BaseAudioContext.decodeAudioData")}} quand elle a terminé de décoder une piste audio avec succès.

## Syntaxe

    var source = baseAudioContext.createBufferSource();

### Retourne

Un {{domxref("AudioBufferSourceNode")}}.

## Exemple

Dans cet exemple, on crée un tampon de deux secondes, on le remplit avec du bruit blanc, puis on le joue via un {{ domxref("AudioBufferSourceNode") }}. Les commentaires devraient expliquer clairement ce qui se passe.

> **Note :** Vous pouvez également [exécuter le code en direct](https://mdn.github.io/webaudio-examples/audio-buffer/), ou [voir la source](https://github.com/mdn/webaudio-examples/blob/master/audio-buffer/index.html).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var button = document.querySelector('button');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

// Stéréo
var channels = 2;
// Crée un tampon stéréo vide de deux secondes au
// taux d’échantillonage de l’AudioContext
var frameCount = audioCtx.sampleRate * 2.0;

var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);

button.onclick = function() {
  // Remplit le tampon avec du bruit blanc ;
  // simplement des valeurs aléatoires entre -1.0 et 1.0
  for (var channel = 0; channel < channels; channel++) {
   // Ceci nous donne l’ArrayBuffer qui contient les données
   var nowBuffering = myArrayBuffer.getChannelData(channel);
   for (var i = 0; i < frameCount; i++) {
     // Math.random() est parmi [0; 1.0]
     // audio doit être parmi [-1.0; 1.0]
     nowBuffering[i] = Math.random() * 2 - 1;
   }
  }

  // Obtient un AudioBufferSourceNode.
  // C’est l’AudioNode à utiliser quand nous voulons jouer un AudioBuffer
  var source = audioCtx.createBufferSource();
  // renseigne l’AudioBufferSourceNode avec notre tampon
  source.buffer = myArrayBuffer;
  // connecte l’AudioBufferSourceNode à la
  // destination afin qu’on puisse entendre le son
  source.connect(audioCtx.destination);
  // commence la lecture de la source
  source.start();
}
```

## Spécifications

| Spécification                                                                                                                    | Statut                               | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#dom-baseaudiocontext-createbuffersource', 'createBufferSource()')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité des navigateurs

{{Compat("api.BaseAudioContext.createBufferSource")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
