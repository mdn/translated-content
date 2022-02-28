---
title: AudioBufferSourceNode.loopStart
slug: Web/API/AudioBufferSourceNode/loopStart
translation_of: Web/API/AudioBufferSourceNode/loopStart
---
{{ APIRef("Web Audio API") }}
La propriété `loopStart` de l'interface {{ domxref("AudioBufferSourceNode") }} est un nombre flottant à double précision qui indique, en secondes, à quel moment de l'{{domxref("AudioBuffer")}} la lecture doit reprendre lors d'une boucle. Elle n'est prise en compte que lorque la propriété {{domxref("AudioBufferSourceNode.loop", "loop")}} est `true`.

## Syntaxe

```js
var source = contexteAudio.createBufferSource();
source.loopStart = 3;
```

### Valeur

Un nombre flottant à double précision. La valeur par défaut est `0`.

## Exemple

Dans cet exemple, la fonction {{domxref("AudioContext.decodeAudioData")}} est utilisée pour décoder une piste audio et la mettre dans un {{domxref("AudioBufferSourceNode")}}. L'interface fournit deux boutons pour démarrer et arrêter la lecture, et des sliders pour modifier les propriétés `playbackRate`, `loopStart` et `loopEnd` à la volée.

Lorsque la lecture de la source audio est terminée, elle boucle. Il est possible de contrôler la durée de la boucle en modifiant `loopStart` et `loopEnd`. Par exemple, si leurs valeurs sont fixées à 20 et 25, respectivement, le son bouclera entre la 20ème et la 25ème secondes du morceau.

> **Note :** Voir l'exemple complet [en direct](https://mdn.github.io/webaudio-examples/decode-audio-data/) et [son code source](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data).

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

## Spécification

| Spécification                                                                                                    | Statut                               | Commentaire |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AudioBufferSourceNode-loopStart', 'loopStart')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AudioBufferSourceNode.loopStart")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
