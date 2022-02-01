---
title: Intégration audio et vidéo
slug: Web/Guide/Audio_and_video_delivery
translation_of: Web/Guide/Audio_and_video_delivery
---
On peut distribuer de l'audio et de la vidéo sur le web de plusieurs manières, du fichier média statique au <i lang="en">live stream</i> (flux en direct) adaptatif. Cet article se veut être le point de départ pour explorer les différents mécanismes de diffusion de média sur le web et la compatiblité avec les navigateurs populaires.

## Les éléments audio et vidéo

Que l'on traite des fichiers audio pré-enregistrés ou des flux en directs, le mécanisme pour les rendre disponibles à travers un navigateur reste à peu près le même — via les éléments [`<audio>`](/fr/docs/Web/HTML/Element/audio) et [`<video>`](/fr/docs/Web/HTML/Element/video). Actuellement, pour prendre en charge tous les navigateurs, il est nécessaire de définir deux formats — bien qu'avec l'adoption des formats MP3 et MP4 dans Firefox et Opera, cela change rapidement. Vous pouvez trouver les informations de compatibilité des navigateurs aux endroits suivants :

- [Tableau de compatibilité des codecs audio](/fr/docs/Web/Apps/Build/Manipulating_media/Cross-browser_audio_basics#audio_codec_support)
- [Guide sur les codecs pour les vidéos](/fr/docs/Web/Media/Formats/Video_codecs)

Pour distribuer du contenu audio et vidéo, le processus général se déroule comme suit :

1.  Vérifier quels formats sont pris en charge par le navigateur via la détection de fonctionnalité ;
2.  Si le navigateur ne lit pas nativement les formats fournis, utiliser un contenu de secours dans un autre format ;
3.  Définir la façon dont vous voulez lire/instancier le média (par exemple un élément [`<video>`](/fr/docs/Web/HTML/Element/video), ou peut-être via JavaScript avec `document.createElement('video')`) ;
4.  Ajouter le fichier média au lecteur.

### Audio HTML

```html
<audio controls preload="auto">
  <source src="audiofile.mp3" type="audio/mpeg">

  <!-- fallback pour les navigateurs qui ne supportent pas mp3 -->
  <source src="audiofile.ogg" type="audio/ogg">

  <!-- fallback pour les navigateurs qui ne supportent pas la balise audio -->
  <a href="audiofile.mp3">Télécharger l'audio</a>
</audio>
```

Le code ci-dessus va créer un lecteur audio qui tente de précharger autant d'audio que possible pour une lecture fluide.

> **Note :** l'attribut `preload` peut être ignoré par certains navigateurs mobiles.

Pour plus d'informations voir [Les bases de l'audio multi-navigateur (Audio HTML5 en détails)](/fr/docs/Web/Apps/Build/Manipulating_media/Cross-browser_audio_basics#html5_audio_in_detail)

### Vidéo HTML

```html
<video controls width="640" height="480" poster="initialimage.png" autoplay muted>
  <source src="videofile.mp4" type="video/mp4">

  <!-- fallback pour les navigateurs qui ne supportent pas mp4 -->
  <source src="videofile.webm" type="video/webm">

  <!-- spécifie les fichiers de sous-titres -->
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="subtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">

  <!-- fallback pour les navigateurs qui ne supportent pas la balise video -->
  <a href="videofile.mp4">Télécharger la vidéo</a>
</video>
```

Le code ci-dessus crée un lecteur vidéo de dimensions 640x480 pixels, affichant une vignette jusqu'à ce que la vidéo soit lue. On demande à la vidéo de passer en `autoplay` (jouer automatiquement) mais d'être `muted` (en sourdine) par défaut.

> **Note :** l'attribut `autoplay` peut être ignoré par certains navigateurs mobiles et est sujet à controverse lorsqu'il est utilisé à mauvais escient. Il est recommandé de lire [le guide à ce sujet](/fr/docs/Web/Media/Autoplay_guide) pour savoir comment l'utiliser pertinemment.

Pour plus d'informations voir [l'article de référence sur l'élément `<video>`](/fr/docs/Web/HTML/Element/video) et [la page sur la création d'un lecteur vidéo multi-navigateur](/fr/docs/Web/Apps/Build/Manipulating_media/cross_browser_video_player).

### Audio JavaScript

```js
const myAudio = document.createElement('audio');

if (myAudio.canPlayType('audio/mpeg')) {
  myAudio.setAttribute('src','audiofile.mp3');
} else if (myAudio.canPlayType('audio/ogg')) {
  myAudio.setAttribute('src','audiofile.ogg');
}

myAudio.currentTime = 5;
myAudio.play();
```

On définit la source de l'audio en fonction du type de fichier audio pris en charge par le navigateur, puis nous plaçons la tête de lecture à 5 secondes et essayons de lire le fichier.

> **Note :** `play()` sera ignoré par certains navigateurs mobiles à moins que l'événement ne soit initié par une action de la personne visitant le site.

Il est également possible de donner un fichier WAV encodé en base64 à l'élément [`<audio>`](/fr/docs/Web/HTML/Element/audio), permettant ainsi de générer de l'audio à la volée :

```html
<audio id="player" src="data:audio/x-wav;base64,UklGRvC..."></audio>
```

[Speak.js](https://github.com/kripken/speak.js/) emploie cette technique. [Essayez la démo](https://speak-demo.herokuapp.com).

### Vidéo JavaScript

```js
const myVideo = document.createElement('video');

if (myVideo.canPlayType('video/mp4')) {
  myVideo.setAttribute('src','videofile.mp4');
} else if (myVideo.canPlayType('video/webm')) {
  myVideo.setAttribute('src','videofile.webm');
}

myVideo.width = 480;
myVideo.height = 320;
```

On définit la source de la vidéo en fonction du type de fichier vidéo pris en charge par le navigateur, puis on définit la largeur et la hauteur de la vidéo.

## API Web Audio

```js
let context;
let request;
let source;

try {
  context = new AudioContext();
  request = new XMLHttpRequest();
  request.open("GET","https://jplayer.org/audio/mp3/RioMez-01-Sleep_together.mp3",true);
  request.responseType = "arraybuffer";

  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      // auto play
      source.start(0); // start était précédemment intitulé noteOn
    });
  };

  request.send();

} catch(e) {
  console.error(`L'API Web Audio n'est pas prise en charge`);
}
```

Dans cet exemple, on récupère un fichier MP3 via XHR, on le charge et on le lit ([essayez par vous-même](https://jsbin.com/facutone/1/edit?js)). Pour en savoir plus sur l'API Web Audio voir [Utiliser l'API Web Audio](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

## getUserMedia / Stream API

Il est également possible de récupérer un <i lang="en">live stream</i> de la webcam et/ou du microphone de la personne consultant le site avec `getUserMedia` et l'API Stream. Cela fait partie d'une technologie plus largement connue sous le nom de WebRTC (Web Real-Time Communications) et est compatible avec les dernières versions de Chrome, Firefox et Opera.

Pour récupérer un flux de la webcam, commençons par créer un élément [`<video>`](/fr/docs/Web/HTML/Element/video) :

```html
<video id="webcam" width="480" height="360"></video>
```

Ensuite, si cette opération est prise en charge, nous connectons la webcam à l'élément video :

```js
if (navigator.mediaDevices) {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(function onSuccess(stream) {
    const video = document.getElementById('webcam');
    video.autoplay = true;
    video.srcObject = stream;
  })
  .catch(function onError() {
    console.error(`Problème de récupération des flux : utilisez-vous une page avec file:/// ou avez-vous décliné la permission ?`);
  });
} else {
  console.error(`getUserMedia n'est pas pris en charge par ce navigateur.`);
}
```

Pour en savoir plus, lisez la page [`MediaDevices.getUserMedia`](/fr/docs/Web/API/MediaDevices/getUserMedia).

## Enregistrement de flux média

De nouveaux standards sont en cours de déploiement pour permettre au navigateur de récupérer le flux du micro ou de la webcam — en utilisant `getUserMedia` — et l'enregistrer directement avec la nouvelle API MediaRecorder. Pour ce faire, on prend le stream retourné par `getUserMedia`, on le donne en paramètre à un objet `MediaRecorder`, puis on utilise le résultat obtenu comme source audio ou video.

Le principe de base est décrit ci-après :

```js
navigator.mediaDevices.getUserMedia({audio:true})
  .then(function onSuccess(stream) {
    const recorder = new MediaRecorder(stream);

    const data = [];
    recorder.ondataavailable = function(e) {
      data.push(e.data);
    };
    recorder.start();
    recorder.onerror = function(e) {
      throw e.error || new Error(e.name); // e.name est utilisé pour Firefox
    }
    recorder.onstop = function(e) {
      const audio = document.createElement('audio');
      audio.src = window.URL.createObjectURL(new Blob(data));
    }
    setTimeout(function() {
      rec.stop();
    }, 5000);
  })
  .catch(function onError(error) {
    console.log(error.message);
  });
```

Voir [l'API MediaRecorder](/fr/docs/Web/API/MediaRecorder_API) pour plus de détails.

## Media Source Extensions (MSE)

[Media Source Extensions](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/media-source.html) (MSE ou « extensions pour les sources de média ») est un brouillon de travail (<i lang="en">Working Draft</i> en anglais) du W3C qui prévoit d'étendre [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) pour permettre à JavaScript de générer des flux média pour la lecture. Permettre à JavaScript de générer des flux facilite différents cas d'usage comme la diffusion en direct adaptative et le décalage temporel des flux de diffusion en direct.

### Encrypted Media Extensions (EME)

[Encrypted Media Extensions](https://dvcs.w3.org/hg/html-media/raw-file/tip/encrypted-media/encrypted-media.html) (EME ou « extensions pour les médias chiffrés ») est une proposition du W3C d'étendre [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) en fournissant des API pour contrôler la lecture de contenu protégé.

L'API prend en charge divers cas d'utilisation, allant du simple déchiffrement par clé aux vidéos protégées par DRM (pourvu que le navigateur implémente ce système). L'échange de licence/clé est contrôlé par l'application, facilitant ainsi le développement d'applications de lecture robustes et qui prennent en charge différentes technologies de déchiffrement et de protection de contenu. Un des principaux usages d'EME est de permettre au navigateur d'implémenter la gestion des DRM ([<i lang="en">Digital Rights Management</i>](https://fr.wikipedia.org/wiki/Gestion_des_droits_num%C3%A9riques)).

### Diffusion adaptative

De nouveaux formats et protocoles ont été (et sont encore) deployés pour faciliter la diffusion adaptative. Une diffusion adaptative est un flux en direct qui s'adapte à la bande passante disponible de la personne utilisant le site. Typiquement, la qualité du stream peut changer en temps réel pour utiliser plus ou moins de bande passante. La diffusion adaptative est souvent utilisée en conjonction avec le <i lang="en">live streaming</i>, où une diffusion fluide de l'audio et vidéo est primordiale.

Les principaux encodages utilisés pour le streaming adaptatif sont [HLS](/fr/docs/Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls) et [MPEG-DASH](/fr/docs/Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video#mpeg-dash). MSE a été conçu avec DASH en tête, il définit les flux d'octets selon [ISOBMFF](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/isobmff-byte-stream-format.html) et [M2TS](https://en.wikipedia.org/wiki/M2ts) (deux formats pris en charge par DASH, le dernier étant également pris en charge par HLS). DASH est probablement la meilleure option en termes de compatibilité, standard et flexibilité.

> **Note :** actuellement, Safari ne prend pas en charge DASH, cependant dash.js marche sur les nouvelles versions de Safari prévues pour être publiées avec OSX Yosemite.

DASH fournit également un certain nombre de profils, y compris des profils _à la demande_ simples, sans pré-traitement ni séparation des fichiers multimédia. Il existe un certain nombre de services en ligne qui vous permettront de convertir vos média en HLS ou DASH.

Pour plus d'informations, voir [Live streaming web Audio et Vidéo](/fr/docs/Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video).

## Personnaliser votre lecteur média

Vous pouvez vouloir un lecteur audio ou vidéo qui ait le même aspect sur tous les navigateurs, ou simplement vouloir l'adapter à votre site. La technique générale pour y parvenir est d'omettre l'attribut `controls` afin que les contrôles par défaut du navigateur ne s'affichent pas, et de créer vos propres contrôles en HTML et CSS, avec du JavaScript pour lier vos contrôles à l'API audio/vidéo.

Si vous avez besoin d'aller plus loin, il est possible d'ajouter des fonctionnalités qui ne sont pas présentes par défaut dans les lecteurs, tels que la vitesse de lecture, le choix de la qualité ou mêmes les spectres audio. Vous pouvez également décider de rendre votre lecteur responsive — par exemple, vous pouvez enlever la barre de progression sous certaines conditions.

Vous pouvez détecter les événements de clic, de toucher et/ou de clavier pour déclencher des actions telles que lecture, pause et stop. Il est souvent souhaitable d'ajouter des raccourcis clavier pour plus de commodité et d'accessibilité pour la personne utilisant le lecteur média.

Un exemple rapide — d'abord, configurez votre audio et vos contrôles personnalisés en HTML:

```html
<audio id="my-audio" src="https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3"></audio>
<button id="my-control">play</button>
```

Ensuite, ajoutez un peu de JavaScript pour détecter les événements afin de lire et de mettre en pause l'audio:

```js
window.onload = function() {

  const myAudio = document.getElementById('my-audio');
  const myControl = document.getElementById('my-control');

  function switchState() {
    if (myAudio.paused == true) {
      myAudio.play();
      myControl.textContent = "pause";
    } else {
      myAudio.pause();
      myControl.textContent = "play";
    }
  }

  function checkKey(e) {
    if (e.keycode == 32 ) { //spacebar
      switchState();
    }
  }

  myControl.addEventListener('click', function() {
    switchState();
  }, false);

  window.addEventListener( "keypress", checkKey, false );
}
```

Vous pouvez [essayer cet exemple ici](https://jsbin.com/jujeladu/2/edit). Pour plus d'informations, voir [Créer votre propre lecteur audio](/fr/docs/Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics#creating_your_own_custom_audio_player).

## Autres conseils pour l'audio/video

### Interrompre le téléchargement d'un média

Bien qu'il suffit d'utiliser la méthode `pause()` pour interrompre la lecture d'un média, le navigateur continue de télécharger le média jusqu'à ce que l'élément correspondant soit nettoyé par le ramasse-miettes.

Voici une astuce qui permet d'arrêter le téléchargement :

```js
const mediaElement = document.querySelector("#monIDdeMedia");
mediaElement.removeAttribute("src");
mediaElement.load();
```

En supprimant l'attribut `src` de l'élément et en invoquant la méthode `load()`, on libère les ressources associées à la vidéo, ce qui entraîne l'arrêt du téléchargement. Il est nécessaire d'invoquer `load()` après le retrait de l'attribut, car sa simple suppression ne relance pas l'algorithme chargement. Si l'élément `<video>` dispose également d'éléments descendants `<source>`, ceux-ci devraient également être supprimés avant l'appel à `load()`.

Si on définit l'attribut `src` avec une chaîne vide, le navigateur considèrera la source comme un chemin relatif et cela déclenchera une tentative d'un autre téléchargement à partir d'une source qui n'est probablement pas une vidéo valide.

### Parcourir la piste du média

Les éléments média permettent de placer le curseur de lecture à des instants spécifiques du contenu. Pour cela, on ajustera la propriété `currentTime` de l'élément (voir [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) pour plus de détails)

La propriété `seekable` de l'élément peut être utilisée afin de déterminer les intervalles disponibles pour de tels déplacements. Cette propriété renvoie un objet [`TimeRanges`](/fr/docs/Web/API/TimeRanges) contenant les intervalles temporels accessibles.

```js
const mediaElement = document.querySelector('#mediaElementID');
mediaElement.seekable.start(0);  // Renvoie l'instant de départ (en secondes)
mediaElement.seekable.end(0);    // Renvoie l'instant de fin (en secondes)
mediaElement.currentTime = 122;  // Déplace la lecture à 122 secondes
mediaElement.played.end(0);      // Renvoie le nombre de secondes lues par le navigateur
```

### Définir des intervalles de lecture

Lors de la définition de l'URI du média d'un élément [`<audio>`](/fr/docs/Web/HTML/Element/audio) ou [`<video>`](/fr/docs/Web/HTML/Element/video), il est possible d'ajouter des informations supplémentaires pour indiquer la portion du média qu'on souhaite lire. Pour cela, on ajoutera un dièse/croisillon (« # ») suivi de la description du fragment de média.

Un intervalle temporel se définit avec la syntaxe suivante :

    #t=[tempsdebut][,tempsfin]

La valeur temporelle peut être définie en nombre de secondes (avec une valeur décimale) ou avec un horodatage en heures/minutes/secondes avec un deux-points comme séparateur (par exemple 2:05:01 pour indiquer 2 heures, 5 minutes et 1 seconde).

Voici quelques exemples :

- `https://example.com/video.ogv#t=10,20`
  - : Indique que la vidéo devrait jouer l'intervalle compris entre 10 et 20 secondes.
- `https://example.com/video.ogv#t=,10.5`
  - : Indique que la vidéo devrait jouer l'intervalle depuis le début et jusqu'à 10,5 secondes.
- `https://example.com/video.ogv#t=,02:00:00`
  - : Indique que la vidéo devrait jouer depuis le début et jusqu'à deux heures.
- `https://example.com/video.ogv#t=60`
  - : Indique que la vidéo devrait commencer sa lecture à 60 secondes puis continuer jusqu'à la fin.

## Déboguer les problèmes audio/vidéo

Vous rencontrez des problèmes de lecture audio ou vidéo ? Vérifiez les différents points qui suivent.

### Est-ce que le navigateur prend en charge les formats fournis ?

Utilisez les fichiers suivants pour vérifier le support de votre format:

- Audio MP3 (`type="audio/mpeg"`) : <https://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3> ([audio MP3 en direct](https://jsbin.com/gekatoge/1/edit))
- Audio MP4 (`type="audio/mp4"`) : <https://jPlayer.org/audio/m4a/Miaow-01-Tempered-song.m4a> ([audio MP4 en direct](https://jsbin.com/gekatoge/2/edit))
- Audio Ogg (`type="audio/ogg"`) : <https://jPlayer.org/audio/ogg/Miaow-01-Tempered-song.ogg> ([audio OGG en direct](https://jsbin.com/gekatoge/4/edit))
- Video MP4 (`type="video/mp4"`) : <https://jPlayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v> ([vidéo MP4 en direct](https://jsbin.com/gekatoge/5/edit))
- Video WebM (`type="video/webm"`) : <https://jPlayer.org/video/webm/Big_Buck_Bunny_Trailer.webm> ([vidéo WebM en direct](https://jsbin.com/gekatoge/6/edit))
- Video Ogg (`type="video/ogg"`) : <https://jPlayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv> ([vidéo OGG en direct](https://jsbin.com/gekatoge/7/edit))

Si un de ces fichiers n'est pas lu, c'est que le navigateur que vous testez ne prend pas en charge le format correspondant. Vous pouvez utiliser un format différent ou un contenu de secours.

Si ces fichiers fonctionnent mais que votre fichier ne fonctionne pas, il y a deux explications possibles, que nous verrons ci-après.

#### 1. Le serveur ne fournit pas le type MIME correct du fichier

Bien que les serveurs les prennent généralement en charge, vous allez peut-être avoir besoin d'ajouter ce qui suit à votre fichier `.htaccess` :

    # AddType TYPE/SUBTYPE EXTENSION

    AddType audio/mpeg mp3
    AddType audio/mp4 m4a
    AddType audio/ogg ogg
    AddType audio/ogg oga

    AddType video/mp4 mp4
    AddType video/mp4 m4v
    AddType video/ogg ogv
    AddType video/webm webm
    AddType video/webm webmv

#### 2. Votre fichier n'est pas encodé correctement

Votre fichier n'a peut-être pas été encodé correctement — essayez de l'encoder en utilisant un des outils suivants, qui sont plutôt fiables :

- [Audacity](https://audacity.sourceforge.net/) - Éditeur et enregistreur audio gratuit
- [Miro](https://www.getmiro.com/) - Lecteur audio et vidéo open-source et gratuit
- [Handbrake](https://handbrake.fr/) - Transcodeur vidéo open-source
- [Firefogg](https://firefogg.org/) - Encodage audio et vidéo pour Firefox
- [FFmpeg2](https://www.ffmpeg.org/) - Encodeur en ligne de commande complet
- [Libav](https://libav.org/) - Encodeur en ligne de commande complet
- [Vid.ly](https://m.vid.ly/) - Lecteur Video player, transcodeur et outil de diffusion
- [Internet Archive](https://archive.org/) - Transcodage et stockage gratuit

### Utiliser du contenu de substitution si la source n'a pu être décodée

Il existe une autre méthode pour présenter du contenu alternatif lorsqu'aucune des ressources n'a pu être décodée par le navigateur. Celle-ci consiste à ajouter un gestionnaire d'erreur sur le dernier élément source et d'utiliser celui-ci afin de remplacer l'élément par son contenu alternatif :

```html
<video controls>
  <source src="dynamicsearch.mp4" type="video/mp4"></source>
  <a href="dynamicsearch.mp4">
    <img src="dynamicsearch.jpg" alt="Recherche sur une application">
  </a>
  <p>Cliquez sur l'image pour voir une vidéo de démonstration</p>
</video>
```

```js
let v = document.querySelector('video'),
    sources = v.querySelectorAll('source'),
    lastsource = sources[sources.length-1];
lastsource.addEventListener('error', function(ev) {
  const d = document.createElement('div');
  d.innerHTML = v.innerHTML;
  v.parentNode.replaceChild(d, v);
}, false);
```

## Bibliothèques JavaScript audio/vidéo

Un certain nombre de bibliothèques JavaScript audio et vidéo existent. Les plus populaires permettent de choisir un design de lecteur cohérent sur tous les navigateurs et fournissent un contenu de secours pour les navigateurs qui ne prennent pas en charge l'audio et vidéo nativement. Le contenu de secours utilise souvent les plugins Adobe Flash ou Microsoft Silverlight. D'autres fonctionnalités telles que les éléments [`<track>`](/fr/docs/Web/HTML/Element/track) pour les sous-titres peuvent également être fournies par les bibliothèques média.

### Audio uniquement

- [SoundManager](https://www.schillmania.com/projects/soundmanager2/)
- [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs)
- [HowlerJS](https://howlerjs.com/)

### Vidéo uniquement

- [flowplayer](https://flowplayer.org/) : Gratuit, avec un filigrane du logo flowplayer. open source (licence GPL)
- [JWPlayer](https://www.jwplayer.com) : Nécessite de s'inscrire pour télécharger. open source (licence Creative Commons)
- [SublimeVideo](https://www.sublimevideo.net/) : Nécessite de s'inscrire. Configuration par formulaire avec lien vers des bibliothèques hébergées via CDN.
- [Video.js](https://www.videojs.com/) : Gratuit et open source (licence Apache 2)

### Audio et vidéo

- [jPlayer](https://jPlayer.org) : Gratuit et open source (Licence MIT)
- [mediaelement.js](https://mediaelementjs.com/) : Gratuit et open source (Licence MIT)

### Web Audio API

- [AudioContext monkeypatch](https://github.com/cwilso/AudioContext-MonkeyPatch) : Une prothèse open source (licence Apache 2) pour les anciennes versions de l'API Web Audio

## Tutoriels pour apprendre les bases

- [Créer un lecteur vidéo fonctionnant sur tous les navigateurs (en anglais)](/fr/docs/Web/Apps/Build/Manipulating_media/cross_browser_video_player)
  - : Guide pour créer un lecteur vidéo simple et fonctionnant sur tous les navigateurs en utilisant l'élément [`<video>`](/fr/docs/Web/HTML/Element/video)
- [Bases concernant la mise en forme des lecteurs vidéo (en anglais)](/fr/docs/Web/Apps/Build/Manipulating_media/Video_player_styling_basics)
  - : À l'aide du lecteur vidéo mis en place sur l'article précédent, cet article montre comment fournir une mise en forme basique et responsive (en anglais)
- [Les bases pour créer un lecteur audio fonctionnant sur tous les navigateurs (en anglais)](/fr/docs/Web/Apps/Build/Manipulating_media/Cross-browser_audio_basics)
  - : Cet article propose un guide de base pour créer un lecteur audio HTML5 qui fonctionne sur tous les navigateurs, avec une explication pour tous les attributs, propriétés et évènements associés, ainsi qu'un guide introduisant rapidement les contrôles personnalisés créés avec l'API Media (en anglais)
- [Mise en tampon des fichiers médias, recherche et gestion des intervales de temps](/fr/docs/Web/Apps/Build/Manipulating_media/buffering_seeking_time_ranges)
  - : Parfois, il est utile de savoir le temps de téléchargment et de lecture des éléments [`<audio>`](/fr/docs/Web/HTML/Element/audio) ou [`<video>`](/fr/docs/Web/HTML/Element/video) sans attendre — un bon exemple d'application est la barre de progression mise en mémoire tampon d'un fichier audio ou vidéo. Cet article présente la construction d'une barre de recherche et mise en mémoire tampon en utilisant l'API [TimeRanges](/fr/docs/Web/API/TimeRanges) ainsi que d'autres fonctionnalités de l'API `Media`.
- [Explications concernant la propriété `playbackRate` proposée par HTML5](/fr/docs/Web/Apps/Build/Manipulating_media/HTML5_playbackRate_explained)
  - : La propriété `playbackRate` permet de modifier la vitesse ou la fréquence à laquelle un morceau de fichier audio ou vidéo est joué. Cet article l'explique en détails.
- [Utilisation de l'API Web Audio](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
  - : Explique les bases de l'API Web Audio, afin de pouvoir atteindre, manipuler et jouer une ressource audio.

## Tutoriels concernant la diffusion en direct (streaming)

- [Diffusion en direct de fichiers audio et vidéo sur le web](/fr/docs/Web/Apps/Build/Manipulating_media/Live_streaming_web_audio_and_video)

  - : Les technologies de diffusion en direct sont souvent employées pour diffuser en direct des évènements sportifs, des concerts et plus généralement des programmes télévisuels ou radiophoniques qui se déroulent en direct. Le terme est souvent raccourci en parlant de « direct » ou en anglais de

    <i lang="en">streaming</i>

    ou de

    <i lang="en">live</i>

    . Il s'agit du processus de transmission en direct d'une source média. Cela est plutôt complexe et sujet à de nombreux paramètres. Cet article fait une présentation générale du sujet et indique comment débuter.

- [Mettre en place une ressource média diffusée en direct adaptative](/fr/docs/Web/Apps/Build/Manipulating_media/Setting_up_adaptive_streaming_media_sources)

  - : Si vous avez besoin de mettre en place une ressource média diffusée en direct et adaptative sur un serveur, et que cette ressource doit être consommée au sein d'un élément média HTML5, cet article explique comment faire. Il détaille les deux principaux formats, MPEG-DASH et HLS (

    <i lang="en">HTTP Live Streaming</i>

    )

- [Diffusion en direct et adaptative DASH pour les vidéos HTML5](/fr/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
  - : Informations concernant la mise en place d'une diffusion en direct adaptative avec les formats DASH et WebM.

## Tutoriels avancés

- [Ajout de légendes et de sous-titres aux vidéos HTML5](/fr/docs/Web/Apps/Build/Manipulating_media/Adding_captions_and_subtitles_to_HTML5_video)
  - : Cet article explique comment ajouter des légendes et des sous-titres à l'élément HTML5 [`<video>`](/fr/docs/Web/HTML/Element/video), en utilisant le format [VTT (<i lang="en">Video Text Tracks</i>)](/fr/docs/Web/API/WebVTT_API) et l'élément [`<track>`](/fr/docs/Web/HTML/Element/track).
- [Utiliser l'API Audio de façon compatible](/fr/docs/Web/Apps/Developing/Manipulating_media/Web_Audio_API_cross_browser)
  - : Un guide pour utiliser l'API Audio de façon compatible sur tous les navigateurs.
- [Capture audio simplifiée avec l'API MediaRecorder](https://hacks.mozilla.org/2014/06/easy-audio-capture-with-the-mediarecorder-api/)
  - : Cet article montre les bases de l'utilisation de l'API MediaRecorder, utilisée afin d'enregistrer un flux média.

## Références

- [L'élément `<video>`](/fr/docs/Web/HTML/Element/video)
- [L'API `HTMLVideoElement`](/fr/docs/Web/API/HTMLVideoElement)
- [L'API `MediaSource`](/fr/docs/Web/API/MediaSource)
- [L'API Web Audio](/fr/docs/Web/API/Web_Audio_API)
- [L'API `MediaRecorder`](/fr/docs/Web/API/MediaStream_Recording_API)
- [`getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia)
- [Référence des évènements relatifs aux médias](/fr/docs/Web/Events#media)
