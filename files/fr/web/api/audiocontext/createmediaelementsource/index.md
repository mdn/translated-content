---
title: AudioContext.createMediaElementSource()
slug: Web/API/AudioContext/createMediaElementSource
translation_of: Web/API/AudioContext/createMediaElementSource
---
{{ APIRef("Web Audio API") }}

La méthode `createMediaElementSource()` de l’interface {{ domxref("AudioContext") }} est utilisée pour créer un nouvel objet {{ domxref("MediaElementAudioSourceNode") }} d’après un élément HTML {{ htmlelement("audio") }} ou {{ htmlelement("video") }} existant, permettant ainsi de jouer et de manipuler l’audio de cet élément.

Pour plus de détails à propos des nœuds source audio des éléments média, constultez la page de référence de {{ domxref("MediaElementAudioSourceNode") }}.

## Syntaxe

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
```

### Paramètres

- `myMediaElement`
  - : Un objet {{domxref("HTMLMediaElement")}} que vous voulez injecter dans un graphe de traitement audio pour le manipuler.

### Valeur de retour

Un {{domxref("MediaElementAudioSourceNode")}}.

## Exemple

Cet exemple simple crée une source depuis un élément {{ htmlelement("audio") }} grâce à `createMediaElementSource()`, puis passe le signal audio à travers un {{ domxref("GainNode") }} avant de l’injecter dans le {{ domxref("AudioDestinationNode") }} pour la lecture. Quand le pointeur de la souris est déplacé, la fonction `updatePage()` est invoquée, et calcule le gain actuel comme rapport de la position Y de la souris divisée par la hauteur totale de la fenêtre. Vous pouvez ainsi augmenter ou diminuer le volume de la musique jouée, en déplaçant le pointeur de la souris vers le haut ou vers le bas.

> **Note :** Vous pouvez également [voir cet exemple en temps réel](http://mdn.github.io/webaudio-examples/media-source-buffer/), ou [examiner le code source](https://github.com/mdn/webaudio-examples/tree/master/media-source-buffer).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector('audio');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

// Crée un MediaElementAudioSourceNode
// et y injecte le HTMLMediaElement
var source = audioCtx.createMediaElementSource(myAudio);

// Crée un nœud gain
var gainNode = audioCtx.createGain();

// Crée les variables pour stocker la position Y du pointeur
// et la HAUTEUR de l’écran
var CurY;
var HEIGHT = window.innerHeight;

// Récupère les nouvelles coordonnées du pointeur quand la souris est déplacée
// et définit la nouvelle valeur de gain

document.onmousemove = updatePage;

function updatePage(e) {
    CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    gainNode.gain.value = CurY/HEIGHT;
}


// connecte le AudioBufferSourceNode au nœud gain
// et le nœud gain à la destination, de sorte qu’on puisse jouer la
// musique et ajuster le volume avec le curseur de la souris
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

> **Note :** Du fait de l’appel à `createMediaElementSource()`, la lecture de l’audio du {{ domxref("HTMLMediaElement") }} est redirigée dans le graphe de traitement de l’AudioContext. Ainsi, jouer / mettre en pause le média est toujours possible via l’API des éléments média ou via les contrôles du lecteur.

## Spécifications

| Spécification                                                                                                                                                                                                                | Statut                               | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AudioContext-createMediaElementSource-MediaElementAudioSourceNode-HTMLMediaElement-mediaElement', 'createMediaElementSource()')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité des navigateurs

{{Compat("api.AudioContext.createMediaElementSource")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
