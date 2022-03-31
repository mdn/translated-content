---
title: AudioContext.createGain()
slug: Web/API/BaseAudioContext/createGain
tags:
  - API
  - Audio
  - AudioContext
  - Contrôle du volume
  - Méthode
  - Son
  - Volume
  - Web Audio
  - createGain
translation_of: Web/API/BaseAudioContext/createGain
original_slug: Web/API/AudioContext/createGain
---
{{ APIRef("Web Audio API") }}

La méthode createGain de l'interface {{ domxref("AudioContext") }} crée un {{ domxref("GainNode") }} qui peut être utilisé pour contrôler le volume global du graphe audio.

## Syntaxe

```js
var contexteAudio = new AudioContext();
var gainNode = contexteAudio.createGain();
```

### Retourne

Un {{domxref("GainNode")}} qui prend en entrée une ou plusieurs sources audio et en sortie un son dont le volume a été ajusté à un niveau indiqué par le paramètre de type [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("GainNode.gain")}}.

## Exemple

L'exemple suivant montre l'utilisation d'un {{domxref("AudioContext")}} pour créer un {{ domxref("GainNode") }}, qui sert à activer et désactiver le son au clic d'un bouton, en changeant la valeur de la propriété gain.

L'extrait de code ci-dessous ne fonctionne pas tel quel - pour un exemple complet qui fonctionne, consulter la démo [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/) ([et son code source](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js).)

```html
<div>
  <button class="boutonson">Mute button</button>
</div>
```

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var gainNode = contexteAudio.createGain();
var boutonSon = document.querySelector('.boutonson'),
    source;

if (navigator.getUserMedia) {
  navigator.getUserMedia (
    // contraintes - cette app nécessite seulement l'audio
    {
       audio: true
    },
    // fonction de rappel en cas de succès
    function (flux) {
        source = contexteAudio.createMediaStreamSource(flux);
    },
    // fonction de rappel en cas d'erreur
    function (erreur) {
        console.log("L'erreur à la noix suivante vient de se produire : " + erreur);
    });
}
else {
    console.log("getUserMedia n'est pas supporté par votre navigateur !");
}

source.connect(gainNode);
gainNode.connect(contexteAudio.destination);

  ...

boutonSon.onclick = couperSon;

function couperSon () {
    if (boutonSon.id == "") {
        gainNode.gain.value = 0;
        boutonSon.id = "activated";
        boutonSon.innerHTML = "Activer le son";
    }
    else {
        gainNode.gain.value = 1;
        boutonSon.id = "";
        boutonSon.innerHTML = "Couper le son";
    }
}
```

## Spécification

| Spécification                                                                                                        | Status                               | Commentaire |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AudioContext-createGain-GainNode', 'createGain()')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateur

{{Compat("api.BaseAudioContext.createGain")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
