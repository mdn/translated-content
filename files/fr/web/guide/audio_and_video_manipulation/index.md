---
title: Manipulation Audio et Vidéo
slug: Web/Guide/Audio_and_video_manipulation
tags:
  - Audio
  - Canvas
  - HTML5
  - Video
  - Web Audio API
  - WebGL
translation_of: Web/Guide/Audio_and_video_manipulation
---
La beauté du web est qu'on peut combiner différentes technologies pour en créer de nouvelles. Avoir de l'audio et vidéo nativement dans le navigateur nous donne la possibilité d'utiliser ces flux de données avec d'autres technologies comme {{htmlelement("canvas")}}, [WebGL](/fr/docs/Web/API/WebGL_API) ou [Web Audio API](/fr/docs/Web/API/Web_Audio_API) pour modifier le média — par exemple ajouter des effets de réverbération ou de compression à l'audio, ou encore des filtres noir & blanc/sépia aux vidéos. Cet article fournit une référence pour expliquer ce que vous pouvez faire.

## Manipulation Vidéo

La possibilité de lire les valeurs de pixels de chaque image d'une vidéo peut être très utile, cela nous permet de placer ces images dans d'autres contextes.

### Vidéo et Canvas

{{htmlelement("canvas")}} est un moyen de dessiner de manière scripté sur des pages web; c'est un outil très puissant et qui peut être couplé avec du contenu vidéo.

La technique générale est comme suit:

1.  Dessiner une image de l'élément {{htmlelement("video")}} sur un élément {{htmlelement("canvas")}} intermédiaire.
2.  Lire les données de l'élément `<canvas>` et les manipuler.
3.  Écrire les données manipulées dans le `<canvas>` que l'on veut afficher.
4.  Marquer une pause et répéter.

On peut configurer notre lecteur vidéo et l'élément `<canvas>` comme ceci:

```html
<video id="my-video" controls="true" width="480" height="270" crossorigin="anonymous">
  <source src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm">
  <source src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4">
</video>

<canvas id="my-canvas" width="480" height="270"></canvas>
```

Et les manipuler comme ceci: (en l'occurence, on affiche une version en noir et blanc de la vidéo)

```js
var processor = {
  timerCallback: function() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    var self = this;
    setTimeout(function () {
      self.timerCallback();
    }, 16); // roughly 60 frames per second
  },

  doLoad: function() {
    this.video = document.getElementById("my-video");
    this.c1 = document.getElementById("my-canvas");
    this.ctx1 = this.c1.getContext("2d");
    var self = this;

    this.video.addEventListener("play", function() {
      self.width = self.video.width;
      self.height = self.video.height;
      self.timerCallback();
    }, false);
  },

  computeFrame: function() {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    var frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    var l = frame.data.length / 4;

    for (var i = 0; i < l; i++) {
      var grey = (frame.data[i * 4 + 0] + frame.data[i * 4 + 1] + frame.data[i * 4 + 2]) / 3;

      frame.data[i * 4 + 0] = grey;
      frame.data[i * 4 + 1] = grey;
      frame.data[i * 4 + 2] = grey;
    }
    this.ctx1.putImageData(frame, 0, 0);

    return;
  }
};
```

Une fois que la page est chargée, on peut appeler

```js
processor.doLoad()
```

{{EmbedLiveSample("Vidéo_et_Canvas", '100%', 550)}}

> **Note :** En raison de problèmes de sécurité potentiels, si votre vidéo se trouve sur un domaine différent de votre page, vous devez activer [CORS (Cross Origin Resource Sharing)](/fr/docs/Web/HTTP/CORS) sur le serveur qui héberge la vidéo et utiliser l'attribut `crossorigin` sur la balise vidéo.

> **Note :** L'exemple présenté est un exemple minimal de manipulation vidéo avec canvas; pour plus d'efficacité, vous pouvez envisager d'utiliser requestAnimationFrame à la place de setTimeout pour les navigateurs qui le prennent en charge.

### Vidéo e WebGL

[WebGL](/en-US/docs/Web/WebGL) est une API puissante qui utilise canvas pour (typiquement) afficher des scènes en trois dimensions. On peut combiner WebGL et l'élément {{htmlelement("video")}} pour créer des textures vidéo, ce qui veut dire que vous pouvez placer une vidéo dans des scènes 3D.

Exemple:

{{EmbedGHLiveSample('webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> **Note :** Vous pouvez trouver le [code source de cette démo sur GitHub](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample8) ([la voir en direct](https://mdn.github.io/webgl-examples/tutorial/sample8/) aussi).

### Vitesse de lecture

On peut ajuster la vitesse de lecture de l'audio et vidéo en utilisant l'attribut `playbackRate` (voir {{domxref("HTMLMediaElement")}}). Il prend pour valeur un nombre qui est le coefficient à appliquer à la vitesse de lecture: par exemple, 0.5 représente la moitié de la vitesse tandis que 2 représente le double.

HTML:

```html
<video id="my-video" controls src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"></video>
```

JavaScript:

```js
var myVideo = document.getElementById('my-video');
myVideo.playbackRate = 2;
```

#### Code jouable

```html hidden
<video id="my-video" controls="true" width="480" height="270">
  <source src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm">
  <source src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4">
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
var myVideo = document.getElementById('my-video');
myVideo.playbackRate = 2;</textarea>
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;

function setPlaybackRate() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  setPlaybackRate();
});

edit.addEventListener('click', function() {
  textarea.focus();
})

textarea.addEventListener('input', setPlaybackRate);
window.addEventListener('load', setPlaybackRate);
```

{{ EmbedLiveSample('Code jouable', 700, 425) }}

> **Note :** Essayez l' [exemple playbackRate](http://jsbin.com/qomuvefu/2/edit) en direct.

> **Note :** `playbackRate` marche avec les éléments `<audio>` et `<video>`; cependant, dans les deux cas, la vitesse change mais pas la hauteur du son. Pour manipuler la hauteur du son, vous devez utliliser l'API Web Audio — voir la propriété {{domxref("AudioBufferSourceNode.playbackRate")}}.

## Manipulation Audio

Laissons `playbackRate` de côté. Pour manipuler l'audio, on utilise typiquement l'[API Web Audio](/en-US/docs/Web/API/Web_Audio_API).

### Sélectionner une source audio

On peut utiliser la piste audio d'un élément {{htmlelement("audio")}} ou {{htmlelement("video")}} comme source pour alimenter l'API Web Audio, ou un simple buffer audio, une onde sinusoïdale/oscillateur, un flux (comme [getUserMedia](/fr/docs/NavigatorUserMedia.getUserMedia) de [WebRTC](/fr/docs/Web/API/WebRTC_API))... Découvrez exactement comment les utiliser en lisant les pages suivantes:

- {{domxref("MediaElementAudioSourceNode")}}
- {{domxref("AudioBufferSourceNode")}}
- {{domxref("OscillatorNode")}}
- {{domxref("MediaStreamAudioSourceNode")}}

### Filtres Audio

L'API Web Audio a beaucoup de différents filtres/effets qui peuvent être appliqués à l'audio en utilisant {{domxref("BiquadFilterNode")}}, par exemple:

HTML:

```html
<video id="my-video" controls src="myvideo.mp4" type="video/mp4"></video>
```

JavaScript:

```js
var context     = new AudioContext(),
    audioSource = context.createMediaElementSource(document.getElementById("my-video")),
    filter      = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

// Configure filter
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;
```

#### Code jouable 2

```html hidden
<video id="my-video" controls="true" width="480" height="270" crossorigin="anonymous">
  <source src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm">
  <source src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4">
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;</textarea>
```

```js hidden
var context     = new AudioContext(),
    audioSource = context.createMediaElementSource(document.getElementById("my-video")),
    filter      = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;

function setFilter() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  setFilter();
});

edit.addEventListener('click', function() {
  textarea.focus();
})

textarea.addEventListener('input', setFilter);
window.addEventListener('load', setFilter);
```

{{ EmbedLiveSample('Code_jouable_2', 700, 425) }}

> **Note :** À moins que [CORS](/en-US/docs/Web/HTTP/Access_control_CORS) ne soit activé, vous devrez pour éviter les problèmes de sécurité placer la vidéo sur le même domaine que votre code.

Les filtres pouvant être appliqués sont:

- Low Pass: Les fréquences en dessous de la fréquence de coupure sont inchangées et celles au-dessus sont atténuées.
- High Pass: Les fréquences au-dessus de la fréquence de coupure sont inchangées et celles en dessous sont atténuées.
- Band Pass: Les fréquence comprises entre deux bornes sont inchangées et celles en dehors sont atténuées.
- Low Shelf: Les fréquences basses obtiennent un boost (ou une atténuation).
- High Shelf: Les fréquences hautes obtiennent un boost (ou une atténuation).
- Peaking: Les fréquences à l'intérieur d'une gamme donnée obtiennent un boost (ou une atténuation).
- Notch: Les fréquences à l'intérieur d'une gamme donnée sont atténuées.
- Allpass: Laisse touts les fréquences inchangées mais modifie le rapport de phrase entre les différentes fréquences.

> **Note :** Voir {{domxref("BiquadFilterNode")}} pour plus d'informations.

### Convolutions et Impulsions

Il est également possible d'appliquer des réponses impulsionnelles à l'audio en utilisant {{domxref("ConvolverNode")}}. Une _réponse impulsionnelle_ (_impulse response_ en anglais) est un son crée après une brève impulsion sonore (comme un applaudissement) et qui s'applique sur l'environnement qui l'a créée. Exemple: un écho crée en frappant des mains dans un tunnel.

Exemple:

```js
var convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

> **Note :** Voir ce [Codepen](https://codepen.io/DonKarlssonSan/pen/doVKRE) pour un exemple appliqué.

> **Note :** Voir {{domxref("ConvolverNode")}} pour plus d'informations.

### Audio dans l'espace

On peut également positionner l'audio dans l'espace en utilisant un noeud panoramique (un _panner_). Ce noeud permet de définir un cône source ainsi que des éléments positionnels et directionnels — le tout dans un espace 3D définit par des coordonnées cartésiennes 3D.

Exemple:

```js
var panner = context.createPanner();
panner.coneOuterGain = 0.2;
panner.coneOuterAngle = 120;
panner.coneInnerAngle = 0;

panner.connect(context.destination);
source.connect(panner);
source.start(0);

// Position the listener at the origin.
context.listener.setPosition(0, 0, 0);
```

> **Note :** Vous pouvez trouver un [exemple sur notre repo GitHub](https://github.com/mdn/webaudio-examples/tree/master/panner-node) (le [voir en direct](https://mdn.github.io/webaudio-examples/panner-node/) aussi).

> **Note :** Voir {{domxref("PannerNode")}} pour plus d'informations.

## Codecs JavaScript

Il est possible de manipuler l'audio au bas niveau en utilisant JavaScript. Cela peut être utile si vous voulez créer des codecs audio.

Des bibliothèques existent actuellement pour les formats suivants:

- AAC: [AAC.js](https://github.com/audiocogs/aac.js)
- ALAC: [alac.js](https://github.com/audiocogs/alac.js)
- FLAC: [flac.js](https://github.com/audiocogs/flac.js)
- MP3: [mp3.js](https://github.com/audiocogs/mp3.js)
- Opus: [Opus.js](https://github.com/audiocogs/opus.js)
- Vorbis: [vorbis.js](https://github.com/audiocogs/vorbis.js)

> **Note :** Sur AudioCogs, vous pouvez [essayer quelques démos](http://audiocogs.org/codecs/); Audiocogs fournit également un Framework, [Aurora.js](http://audiocogs.org/codecs/), qui est destiné à vous aider à créer vos propres codecs en JavaScript.

## Tutoriels

- [Manipulation vidéo avec la balise Canvas](/fr/docs/HTML/Manipulating_video_using_canvas)
- [HTML5 playbackRate expliqué](/fr/Apps/Build/Manipulating_media/HTML5_playbackRate_explained)
- [Utiliser l'API Web Audio](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Les bases de la spatialisation audio Web](/fr/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Utilisation des images vidéo comme texture WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Animation_de_textures_en_WebGL#Utilisation_des_images_vid%C3%A9o_comme_texture) (Vous pouvez également utiliser la bilbiothèque WebGL [THREE.js](http://threejs.org) (ou autres) pour [obtenir cet effet](http://stemkoski.github.io/Three.js/Video.html))
- [Animation de Textures en WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Animation_de_textures_en_WebGL)
- [Developing Game Audio with the Web Audio API (Room effects and filters)](http://www.html5rocks.com/en/tutorials/webaudio/games/#toc-room)

## Référence

- Les éléments {{htmlelement("audio")}} et {{htmlelement("video")}}
- L'API {{domxref("HTMLMediaElement")}}
- L'élément {{htmlelement("canvas")}}
- [Web Audio API](/fr/docs/Web/API/Web_Audio_API)
- [AudioContext](/fr/docs/Web/API/AudioContext)
- Plus d'infos sur [PannerNode](/fr/docs/Web/API/AudioContext.createPanner)
