---
title: AudioBufferSourceNode.loop
slug: Web/API/AudioBufferSourceNode/loop
tags:
  - API
  - AudioBufferSourceNode
  - Loop
  - Reference
  - Web Audio API
translation_of: Web/API/AudioBufferSourceNode/loop
---
{{ APIRef("Web Audio API") }}

La propriété `loop` de l'interface {{domxref("AudioBufferSourceNode") }} est un booléen indiquant si la ressource audio doit être rejouée quand à la fin de l'{{domxref("AudioBuffer")}}.

La valeur par défaut de la propriété `loop` est `false`.

## Syntaxe

```js
var source = audioCtx.createBufferSource();
source.loop = true;
```

### Value

Un booléen.

Lorsque la lecture en boucle est activée, le son commence à jouer au point spécifié lorsque {{domxref("AudioBufferSourceNode.start", "start()")}} est appelée. Quand il atteint le point spécifié par la propriété {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}}, il recommence au point spécifié par la propriété {{domxref("AudioBufferSourceNode.loopStart", "loopStart")}}

## Exemple

Dans cet exemple, la fonction {{domxref("AudioContext.decodeAudioData")}} est utilisée pour décoder une piste audio et la placer dans un {{domxref("AudioBufferSourceNode")}}. Les boutons mis à disposition permettent de lire et d'arrêter la lecture audio, et un slider est utilisé pour changer la valeur de `playbackRate` en temps réel. Quand la lecture est terminée, elle boucle.

> **Note :** Vous pouvez [essayer un exemple live](http://mdn.github.io/decode-audio-data/) (or [voir la source](https://github.com/mdn/decode-audio-data).)

```js
function getData() {
  source = audioCtx.createBufferSource();
  request = new XMLHttpRequest();

  request.open('GET', 'viper.ogg', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        myBuffer = buffer;
        source.buffer = myBuffer;
        source.playbackRate.value = playbackControl.value;
        source.connect(audioCtx.destination);
        source.loop = true;
      },

      function(e){"Error with decoding audio data" + e.err});

  }

  request.send();
}

// lie les boutons pour lire et arrêter l'audio, et le slider

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
  playbackControl.removeAttribute('disabled');
}
```

## Spécification

| Spécification                                                                                    | Statut                               | Commentaire |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AudioBufferSourceNode-loop', 'loop')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AudioBufferSourceNode.loop")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
