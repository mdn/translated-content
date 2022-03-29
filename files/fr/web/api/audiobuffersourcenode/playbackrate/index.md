---
title: AudioBufferSourceNode.playbackRate
slug: Web/API/AudioBufferSourceNode/playbackRate
translation_of: Web/API/AudioBufferSourceNode/playbackRate
---
{{ APIRef("Web Audio API") }}

La propriété `playbackRate` de l'interface {{ domxref("AudioBufferSourceNode") }} est un {{domxref("AudioParam")}} de type [k-rate](/en-US/docs/DOM/AudioParam#k-rate) qui définit la vitesse à laquelle le contenu audio sera lu.

Une valeur de 1.0 (c'est ) indique que le son doit être lu à la vitesse de son taux d'échantillonnage, une valeur inférieure qu'il doit être lu plus lentement, et une valeur supérieure plus rapidement. la valeur par défaut est `1.0`. Pour toute autre valeur l'`AudioBufferSourceNode` rééchantillone le son avant de l'envoyer vers la sortie.

## Syntaxe

```js
var source = contexteAudio.createBufferSource();
source.playbackRate.value = 1.25; // proportion : 25% plus rapide que la vitesse normale
```

> **Note :** Bien que le `AudioParam` renvoyé soit en lecture seule, la valeur qu'il représente ne l'est pas.

### Valeur

Un {{domxref("AudioParam")}} dont la {{domxref("AudioParam.value", "value")}} est un nombre flottant à double précision, qui représente la vitesse de lecture d'un son en proportion décimale du taux d'échantillonnage original.

Considérons un buffer audio échantillonné à 44.1 kHz (44,100 échantillons par seconde). Observons l'effet de quelques valeurs de la propriété `playbackRate` :

- un `playbackRate` de 1.0 entraîne une lecture à vitesse originale : 44,100 Hz.
- un `playbackRate` de 0.5 entraîne une lecture à la moitié de la vitesse originale : 22,050 Hz.
- un `playbackRate` de 2.0 entraîne une lecture au double de la vitesse originale : 88,200 Hz.

## Exemple

Dans cet exemple, la fonction {{domxref("AudioContext.decodeAudioData")}} est utilisée pour décoder une piste audio et la mettre dans un {{domxref("AudioBufferSourceNode")}}. L'interface fournit deux boutons pour démarrer et arrêter la lecture, et des sliders pour modifier les propriétés `playbackRate`, `loopStart` et `loopEnd` à la volée.

> **Note :** Voir l'exemple complet [en direct](https://mdn.github.io/webaudio-examples/decode-audio-data/) et [son code source](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data).

```html
<input class="playback-rate-control" type="range" min="0.25" max="3" step="0.05" value="1">
<span class="playback-rate-value">1.0</span>
```

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

      function(e){"Erreur lors du décodage des données " + e.err});

  }

  request.send();
}

// wire up buttons to stop and play audio, and range slider control

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
  playbackControl.removeAttribute('disabled');
}

stop.onclick = function() {
  source.stop(0);
  play.removeAttribute('disabled');
  playbackControl.setAttribute('disabled', 'disabled');
}

playbackControl.oninput = function() {
  source.playbackRate.value = playbackControl.value;
  playbackValue.innerHTML = playbackControl.value;
}
```

## Spécification

| Spécification                                                                                                            | Statut                               | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AudioBufferSourceNode-playbackRate', 'playbackRate')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AudioBufferSourceNode.playbackRate")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
