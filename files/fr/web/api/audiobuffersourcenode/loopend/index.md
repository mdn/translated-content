---
title: AudioBufferSourceNode.loopEnd
slug: Web/API/AudioBufferSourceNode/loopEnd
tags:
  - API
  - Audio
  - AudioBufferSourceNode
  - Propriété
  - Reference
  - Web Audio API
translation_of: Web/API/AudioBufferSourceNode/loopEnd
---
{{ APIRef("Web Audio API") }}

La propriété **`loopEnd`** de l'interface {{ domxref("AudioBufferSourceNode") }} est un nombre flottant à double précision qui indique, en secondes, à quel moment de l'{{domxref("AudioBuffer")}} la relecture doit s'arrêter, et éventuellement boucler de nouveau en reprenant à la position indiquée par la propriété {{domxref("AudioBufferSourceNode.loopStart", "loopStart")}}. Elle n'est prise en compte que si la propriété {{domxref("AudioBufferSourceNode.loop", "loop")}} vaut `true.`

## Syntaxe

```js
var source = contexteAudio.createBufferSource();
source.loopEnd = 3;
```

### Valeur

Un nombre flottant à double précision. La valeur par défaut est `0`.

## Exemples

Dans cet exemple, la fonction {{domxref("AudioContext.decodeAudioData")}} est utilisée pour décoder une piste audio et la mettre dans un {{domxref("AudioBufferSourceNode")}}. L'interface fournit deux boutons pour démarrer et arrêter la lecture, et des sliders pour modifier les propriétés `playbackRate`, `loopStart` et `loopEnd` à la volée.

Lorsque la lecture de la source audio est terminée, elle boucle. Il est possible de contrôler la durée de la boucle en modifiant `loopStart` et `loopEnd`. Par exemple, si leurs valeurs sont fixées à 20 et 25, respectivement, le son bouclera entre la 20ème et la 25ème secondes du morceau.

> **Note :** Voir [l'exemple complet](http://mdn.github.io/decode-audio-data/) et [son code source](https://github.com/mdn/decode-audio-data).

```js
function getData() {
  source = contexteAudio.createBufferSource();
  requete = new XMLHttpRequest();

  requete.open('GET', 'viper.ogg', true);

  requete.responseType = 'arraybuffer';


  requete.onload = function() {
    var donneesAudio = requete.response;

    contexteAudio.decodeAudioData(donneesAudio, function(buffer) {
        maMemoireTampon = buffer;
        dureeMorceau = buffer.duration;
        source.buffer = maMemoireTampon;
        source.playbackRate.value = playbackControl.value;
        source.connect(contexteAudio.destination);
        source.loop = true;

        loopstartControl.setAttribute('max', Math.floor(dureeMorceau));
        loopendControl.setAttribute('max', Math.floor(dureeMorceau));
      },

      function(e){"Erreur lors du décodage des données audio " + e.err});

  }

  requete.send();
}

  ...

loopstartControl.oninput = function() {
  source.loopStart = loopstartControl.value;
  loopstartValue.innerHTML = loopstartControl.value;
}

loopendControl.oninput = function() {
  source.loopEnd = loopendControl.value;
  loopendValue.innerHTML = loopendControl.value;
}
```

## Spécifications

| Spécification                                                                                            | Statut                               | Commentaires |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| {{SpecName('Web Audio API', '#widl-AudioBufferSourceNode-loopEnd', 'loopEnd')}} | {{Spec2('Web Audio API')}} |              |

## Compatibilité des navigateurs

{{Compat("api.AudioBufferSourceNode.loopEnd")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
