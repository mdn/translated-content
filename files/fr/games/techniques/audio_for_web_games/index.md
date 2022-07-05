---
title: L'audio dans les jeux Web
slug: Games/Techniques/Audio_for_Web_Games
tags:
  - API
  - Audio
  - Jeux
  - Web Audio API
  - audio sprites
translation_of: Games/Techniques/Audio_for_Web_Games
---
{{GamesSidebar}}

L'audio représente une chose essentielle dans n'importe quel jeu vidéo; il apporte de l'information et contribue à l'atmosphère du jeu. La prise en charge de l'audio a évolué de manière rapide mais il reste encore beaucoup de différences de prise en charge entre les navigateurs. Nous avons souvent besoin de décider quelles parties de notre contenu audio est intéressant et laquelle ne l'est pas, et mettre en place une stratégie en conséquence. Cet article fournit un guide détaillé sur l'implémentation de l'audio dans les jeux HTML5, détaillant quels choix technologiques fonctionneront sur le plus grand nombre de navigateurs.

## Avertissement sur l'audio sur mobile

Les plateformes mobiles sont de loin les plateformes où il est le plus difficile de mettre en place l'audio. Malheureusement c'est la plateforme la plus utilisée par les joueurs. Il y a certaines différences entre les plateformes de bureau (desktop) habituelles et les plateformes mobiles qui ont sûrement poussé les éditeurs de navigateur à faire des choix qui peuvent rendre difficle l'implémentation de l'audio par les utilisateurs. Regardons ensemble ces différences.

### Lecture automatique

Beaucoup de navigateurs mobiles vont simplement ignorer n'importe quelle requête de lancement automatique de musique faite par votre jeu; à la place, l'utilisateur va être obligé de lancer lui même la lecture via une action quelconque. Cela signifie que vous allez devoir prendre en compte cette diférence lors de l'implementation de votre lecture automatique. Ce problème est généralement atténué en chargeant l'audio à l'avance et en l'amorçant sur un événement initié par l'utilisateur.

Pour une lecture automatique audio plus passive, par exemple une musique de fond qui commence dès qu'un jeu se charge, une astuce consiste à détecter l'événement `any` initié par l'utilisateur et à démarrer la lecture. Pour d'autres sons plus actifs qui seront utilisés pendant le jeu, nous pouvons envisager de les amorcer dès que l'on appuie sur un bouton de démarrage.

Pour faire primer l'audio de cette façon, nous voulons en jouer une partie ; pour cette raison, il est utile d'inclure un moment de silence à la fin de votre échantillon audio. Ce silence signifiera que nous pouvons maintenant utiliser JavaScript pour lire ce fichier à des points arbitraires.

> **Note :** Jouer une partie de votre fichier au volume zéro pourrait également fonctionner si le navigateur vous permet de changer le volume (voir ci-dessous). Notez également que la lecture et la mise en pause immédiate de votre audio ne garantissent pas qu'un petit morceau d'audio ne sera pas lu.

> **Note :** L'ajout d'une application Web sur votre écran d'accueil mobile peut changer ses capacités. Dans le cas d'une lecture automatique sur iOS, cela semble être le cas actuellement. Si possible, vous devriez essayer votre code sur plusieurs appareils et platesformes pour voir comment cela fonctionne.

### Volume

Le contrôle du volume programmé peut être désactivé dans les navigateurs mobiles. La raison souvent donnée est que l'utilisateur doit maîtriser le volume au niveau du système d'exploitation et cela ne doit pas être ignoré.

### Mise en mémoire tampon et préchargement

Probablement comme une tentative d'atténuation de l'utilisation des données du réseau mobile, nous trouvons souvent que la mise en mémoire tampon est désactivée avant que la lecture n'ait été lancée. La mise en mémoire tampon est le processus par lequel le navigateur télécharge le média à l'avance, ce que nous devons souvent faire pour assurer une lecture fluide.

> **Note :** À bien des égards, le concept de mise en mémoire tampon est obsolète. Tant que les demandes de plage d'octets sont acceptées (ce qui est le comportement par défaut), nous devrions pouvoir sauter à un point spécifique de l'audio sans avoir à télécharger le contenu précédent. Cependant, le préchargement est toujours utile; sans cela, il faudrait toujours avoir une certaine communication client-serveur avant de commencer à jouer.

### Lecture audio simultanée

Une exigence de nombreux jeux est de jouer plus d'un morceau audio en même temps ; par exemple, il peut y avoir de la musique de fond et des effets sonores pour diverses actions se produisant dans le jeu. Bien que la situation évolue rapidement avec l'adoption de l' [API Web Audio](/fr/docs/Web/API/Web_Audio_API) , la méthode actuellement la plus largement supportée, utilisant l'élément vanilla {{htmlelement ("audio")}}, produit des résultats inégaux sur les appareils mobiles.

### Test et support

Voici un tableau qui montre quelles plateformes mobiles prennent en charge les fonctionnalités mentionnées ci-dessus.

<table class="standard-table">
  <caption>
    Mobile support for web audio features
  </caption>
  <thead>
    <tr>
      <th scope="row">Navigateur de mobile</th>
      <th scope="col">Version</th>
      <th scope="col">Lecture simultanée</th>
      <th scope="col">Lecture automatique</th>
      <th scope="col">Ajustement du volume</th>
      <th scope="col">Préchargement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chrome (Android)</th>
      <td>32+</td>
      <td>Oui</td>
      <td>Non</td>
      <td>Non</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Firefox (Android)</th>
      <td>26+</td>
      <td>Oui</td>
      <td>Oui</td>
      <td>Non</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Firefox OS</th>
      <td>1.2+</td>
      <td>Oui</td>
      <td>Oui</td>
      <td>Oui</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">IE Mobile</th>
      <td>11+</td>
      <td>Oui</td>
      <td>Oui</td>
      <td>Non</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Opera Mobile</th>
      <td>11+</td>
      <td>Non</td>
      <td>Non</td>
      <td>Non</td>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Safari (iOS)</th>
      <td>7+</td>
      <td>Oui/Non*</td>
      <td>Non</td>
      <td>Non</td>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Android Browser</th>
      <td>2.3+</td>
      <td>Non</td>
      <td>Non</td>
      <td>Non</td>
      <td>Non</td>
    </tr>
  </tbody>
</table>

> **Note :** Safari 7 a des problèmes à jouer si vous essayez de démarrer tous les morceaux audio simultanément. Si vous échelonnez la lecture, vous aurez peut-être un certain succès.

> **Note :** La lecture audio simultanée est testée à l'aide de notre [exemple de test audio simultané](http://jsfiddle.net/dmkyaq0r/), avec lequel nous essayons de lire trois morceaux en même temps en utilisant l'API audio standard.

> **Note :** La fonctionnalité de lecture automatique simple est testée avec notre [exemp;e test lecture automatique](http://jsfiddle.net/vpdspp2b/).

> **Note :** La variabilité du volume est testée avec notre [exemple test volume](http://jsfiddle.net/7ta12vw4/).

## Solutions de contournement pour mobile

Bien que les navigateurs mobiles puissent présenter les problèmes évoqués ci-dessus, il existe des moyens de les contourner.

### Les "sprites" audio

Les "sprites" audio empruntent leur nom aux ["sprites" CSS](/fr/docs/Web/CSS/CSS_Images/Sprites_CSS) ; c'est une technique visuelle permettant d'utiliser CSS avec une seule ressource graphique pour la découper en une série d'objets-images. Nous pouvons appliquer le même principe à l'audio, au lieu de disposer d'un petit nombre de petits fichiers audio qui prennent du temps à charger et à lire, nous avons un fichier audio plus grand contenant tous les fragments audio plus petits dont nous avons besoin. Pour lire un son spécifique à partir du fichier, nous utilisons simplement les périodes de début et de fin connues pour chaque "sprite" audio.

L'avantage est que nous pouvons amorcer un morceau d'audio et avoir nos "sprites" prêts à partir. Pour ce faire, nous pouvons juste jouer et mettre en pause instantanément la plus grande partie de l'audio. Nous réduisons également le nombre de demandes de serveur et économisons de la bande passante.

```js
var myAudio = document.createElement("audio");
myAudio.src = "mysprite.mp3";
myAudio.play();
myAudio.pause();
```

Vous aurez besoin d'échantillonner l'heure actuelle pour savoir quand l'arrêter. Si vous espacez vos sons individuels d'au moins 500 ms, l'utilisation de l'événement `timeUpdate` (qui se déclenche toutes les 250 ms) devrait suffire. Vos fichiers peuvent être légèrement plus longs que ce qu'ils devraient être, mais le silence se compresse bien.

Voici un exemple d'un lecteur de "sprite" audio - nous allons d'abord configurer l'interface utilisateur en HTML :

```html
lt;audio id="myAudio" src="http://jPlayer.org/tmp/countdown.mp3"></audio>
<button data-start="18" data-stop="19">0</button>
<button data-start="16" data-stop="17">1</button>
<button data-start="14" data-stop="15">2</button>
<button data-start="12" data-stop="13">3</button>
<button data-start="10" data-stop="11">4</button>
<button data-start="8"  data-stop="9">5</button>
<button data-start="6"  data-stop="7">6</button>
<button data-start="4"  data-stop="5">7</button>
<button data-start="2"  data-stop="3">8</button>
<button data-start="0"  data-stop="1">9</button>
```

Maintenant, nous avons des boutons avec des heures de début et de fin en quelques secondes. Le fichier MP3 "countdown.mp3" se compose d'un numéro qui est prononcé toutes les 2 secondes, l'idée étant de lire ce numéro lorsque le bouton correspondant est pressé.

Ajoutons du JavaScript pour que ça marche:

```js
var myAudio = document.getElementById('myAudio');
var buttons = document.getElementsByTagName('button');
var stopTime = 0;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    myAudio.currentTime = this.getAttribute("data-start");
    stopTime = this.getAttribute("data-stop");
    myAudio.play();
  }, false);
}

myAudio.addEventListener('timeupdate', function() {
  if (this.currentTime > stopTime) {
    this.pause();
  }
}, false);
```

> **Note :** Vous pouvez [essayer notre lecteur de sprite audio](http://jsfiddle.net/59vwaame/) sur JSFiddle.

> **Note :** Sur mobile nous pouvons avoir besoin de déclencher ce code à partir d'un événement initié par l'utilisateur, tel qu'un bouton de démarrage pressé, comme décrit ci-dessus.

> **Note :** Attention aux débits binaires. L'encodage de votre audio à des débits binaires inférieurs signifie des tailles de fichier plus petites, mais une précision de recherche plus faible.

## Musique de fond

La musique dans les jeux peut avoir un effet émotionnel puissant. Vous pouvez mélanger et assortir divers échantillons de musique et, en supposant que vous pouvez contrôler le volume de votre élément audio, vous pouvez fondre différentes pièces musicales. En utilisant la méthode [`playbackRate()`](/fr/Apps/Fundamentals/Audio_and_video_delivery/WebAudio_playbackRate_explained) , vous pouvez même ajuster la vitesse de votre musique sans affecter la hauteur, pour mieux la synchroniser avec l'action.

Tout ceci est possible en utilisant l'élément standard {{HTMLElement ("audio")}} associé à l'API {{domxref("HTMLMediaElement")}} , mais il devient beaucoup plus facile et flexible avec l'[API Web Audio](/fr/docs/Web/API/Web_Audio_API).

## API Web Audio pour les jeux

Maintenant qu'il est supporté dans tous les navigateurs modernes à l'exception d'Opera Mini et d'Internet Explorer ([bien que Microsoft travaille maintenant dessus](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/webaudioapi/)), une approche acceptable pour de nombreuses situations est d'utiliser l'[API Web Audio](/fr/docs/Web/API/Web_Audio_API) (voir la page [Puis-je utiliser l'API Web Audio ?](http://caniuse.com/#search=web%20audio%20api) pour plus d'informations sur la compatibilité du navigateur). L'API Web Audio est une API JavaScript audio avancée, idéale pour l'audio du jeu. Les développeurs peuvent générer de l'audio et manipuler des échantillons audio tout en positionnant le son dans l'espace de jeu 3D.

Une stratégie inter-navigateurs envisageable serait de fournir un son basique à l'aide de l'élément standard {{HTMLElement ("audio")}} et, là où cela est pris en charge, d'améliorer l'expérience en utilisant l'API Web Audio.

> **Note :** De manière significative, iOS Safari prend désormais en charge l'API Web Audio, ce qui signifie qu'il est désormais possible d'écrire des jeux Web avec de l'audio de qualité native pour iOS.

Comme l'API Web Audio permet un timing et un contrôle précis de la lecture audio, nous pouvons l'utiliser pour jouer des échantillons à des moments spécifiques, ce qui est un aspect immersif crucial du jeu. Vous voulez que ces explosions soient **accompagnées** par un boom tonitruant, pas **l'un après les autres**, après tout.

### Musique de fond avec l'API Web Audio

Bien que nous puissions utiliser l'élément {{HTMLElement ("audio")}} pour fournir une musique de fond linéaire, qui ne change pas en réaction à l'environnement du jeu, l'API Web Audio est idéale pour implémenter une expérience musicale plus dynamique. Vous pouvez vouloir que la musique change selon que vous essayez de créer du suspense ou d'encourager le joueur d'une manière ou d'une autre. La musique est une partie importante de l'expérience de jeu et, selon le type de jeu, vous voudrez peut-être investir des efforts considérables pour bien faire les choses.

Une façon de rendre votre musique plus dynamique est de la diviser en boucles ou en pistes de composant. C'est souvent la façon dont les musiciens composent la musique de toute façon, et l'API Web Audio est extrêmement efficace pour garder ces parties synchronisées. Une fois que vous avez les différentes pistes qui composent votre morceau, vous pouvez apporter des pistes ou en retirer de la façon appropriée.

Vous pouvez également appliquer des filtres ou des effets à la musique. Votre personnage est-il dans une grotte ? Augmentez l'écho. Peut-être que vous avez des scènes sous-marines, alors appliquez un filtre qui étouffe le son.

Regardons quelques techniques de l'API Web Audio pour ajuster dynamiquement la musique à partir de ses pistes de base.

### Chargement des pistes

Avec l'API Web Audio, vous pouvez charger individuellement des pistes et des boucles séparées en utilisant [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest), ce qui signifie que vous pouvez les charger de manière synchrone ou en parallèle. Le chargement synchrone peut signifier que certaines parties de votre musique sont prêtes plus tôt et vous pouvez commencer à les jouer pendant que d'autres se chargent.

De toute façon, vous pouvez vouloir synchroniser des pistes ou des boucles. L'API Web Audio contient la notion d'horloge interne qui commence à cocher le moment où vous créez un contexte audio. Vous devez prendre en compte le temps entre la création d'un contexte audio et le moment où la première piste audio commence à jouer. L'enregistrement de ce décalage et l'interrogation de l'heure actuelle de la piste de lecture vous donnent suffisamment d'informations pour synchroniser des morceaux audio distincts.

Pour voir cela en action, mettons en place des pistes distinctes :

```html
ul>
  <li><a class="track" href="http://jPlayer.org/audio/mp3/gbreggae-leadguitar.mp3">Lead Guitar</a></li>
  <li><a class="track" href="http://jPlayer.org/audio/mp3/gbreggae-drums.mp3">Drums</a></li>
  <li><a class="track" href="http://jPlayer.org/audio/mp3/gbreggae-bassguitar.mp3">Bass Guitar</a></li>
  <li><a class="track" href="http://jPlayer.org/audio/mp3/gbreggae-horns.mp3">Horns</a></li>
  <li><a class="track" href="http://jPlayer.org/audio/mp3/gbreggae-clav.mp3">Clavi</a></li>
</ul>
```

Toutes ces pistes ont le même tempo et sont conçues pour être synchronisées les unes avec les autres.

```js
window.AudioContext = window.AudioContext || window.webkitAudioContext;

var offset = 0;
var context = new AudioContext();

function playTrack(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  var audiobuffer;

  // Decode asynchronously
  request.onload = function() {

    if (request.status == 200) {

      context.decodeAudioData(request.response, function(buffer) {
        var source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        console.log('context.currentTime ' + context.currentTime);

        if (offset == 0) {
          source.start();
          offset = context.currentTime;
        } else {
          source.start(0,context.currentTime - offset);
        }

      }, function(e) {
        console.log('Error decoding audio data:' + e);
      });
    } else {
      console.log('Audio didn\'t load successfully; error code:' + request.statusText);
    }
  }
  request.send();
}

var tracks = document.getElementsByClassName('track');

for (var i = 0, len = tracks.length; i < len; i++) {
  tracks[i].addEventListener('click', function(e){

    playTrack(this.href);
    e.preventDefault();
  });
}
```

> **Note :** Vous pouvez essayer notre [démo multipiste API Web Audio](http://jsfiddle.net/c87z11jj/1/) sur JSFiddle.

Regardons maintenant le code. Nous créons d'abord un nouveau {{domxref ("AudioContext")}} et créons une fonction `(playTrack ())` qui charge et commence à jouer une piste.

`start()` (anciennement appelé `noteOn ())` commence à lire un élément audio. `start ()` demande trois paramètres (facultatifs) :

1.  when _(quand)_ : le temps absolu pour commencer la lecture .
2.  where (offset) _(où)_ : la partie de l'audio qui doit commencer à être jouée.
3.  how long _(combien de temps)_ : la durée pendant laquelle elle doit être jouée.

`stop()` prend un paramètre facultatif - when - qui est le délai avant l'arrêt.

Si le second paramètre de `start ()` — the offset (_le décalage_) — est nul, nous commençons à jouer dès le début l'audio donné ; ce que nous faisons en premier. Nous stockons ensuite le {{domxref ("AudioContext.currentTime")}} — le décalage de la première lecture de la pièce, soustrayons celle des temps actuels pour calculer l'heure réelle, et utilisons cela pour synchroniser nos pistes.

Dans le contexte de votre monde de jeu, vous pouvez avoir des boucles et des échantillons qui sont joués dans différentes circonstances, et il peut être utile de pouvoir les synchroniser avec d'autres pistes pour une expérience plus transparente.

> **Note :** Cet exemple n'attend pas la fin du battement avant d'introduire le morceau suivant; nous pourrions le faire si nous connaissions le BPM (battement par minute) des pistes.

Vous pouvez trouver que l'introduction d'une nouvelle piste sonne plus naturelle si elle entre dans le battement, la mesure ou la phrase, selon l'unité que vous voulez pour votre musique de fond.

Pour ce faire, avant de jouer la piste que vous voulez synchroniser, vous devez calculer combien de temps cela va durer jusqu'au début de la prochaine unité musicale.

Voici un peu de code qui donne un tempo (le temps en secondes de votre battement / mesure), calcule combien de temps attendre pour jouer la partie suivante  — vous alimentez la valeur initiale de la fonction `start ()` avec le premier paramètre qui prend le temps absolu de début de la lecture. Notez que le deuxième paramètre (où commencer à jouer à partir de la nouvelle piste) est relatif :

```js
if (offset == 0) {
  source.start();
  offset = context.currentTime;
} else {
  var relativeTime = context.currentTime - offset;
  var beats = relativeTime / tempo;
  var remainder = beats - Math.floor(beats);
  var delay = tempo - (remainder*tempo);
  source.start(context.currentTime+delay, relativeTime+delay);
}
```

> **Note :** Ici, vous pouvez [essayer notre code calculateur d'attente](http://jsfiddle.net/c87z11jj/2/) , sur JSFiddle (synchronisé à la mesure).

> **Note :** Si le premier paramètre est 0 ou inférieur au contexte `currentTime`, la musique commence immédiatement.

### Audio positionnel

L'audio positionnel peut être une technique importante pour faire de l'audio un élément clé d'une expérience de jeu immersive. L'API Web Audio permet non seulement de positionner un certain nombre de sources audio dans un espace tridimensionnel, mais également d'appliquer des filtres qui rendent cet audio plus réaliste.

En bref, en utilisant les capacités positionnelles de l'API Web Audio, nous pouvons relier d'autres informations sur le monde du jeu pour le joueur.

Nous pouvons relier :

- la position des objets
- la direction des objets (mouvement de position et génération de l'effet Doppler)
- l'environnement (caverneux, sous-marin, etc.)

Ceci est particulièrement utile dans un environnement tridimensionnel rendu en utilisant [WebGL](/fr/docs/Web/API/WebGL_API), avec lequel l'API Web Audio permet d'associer l'audio aux objets et aux points de vue .

> **Note :** Voir [Web Audio API Spatialization Basics](/fr/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) _(Bases de la spacialisation de l'API Web Audio)_ pour plus de détails.

## See Also

- [Web Audio API sur MDN](/fr/docs/Web/API/Web_Audio_API)
- [`<audio>` sur MDN](/fr/docs/Web/HTML/Element/audio)
- [Developing Game Audio with the Web Audio API (HTML5Rocks) (en)](http://www.html5rocks.com/en/tutorials/webaudio/games/)
- [Mixing Positional Audio and WebGL (HTML5Rocks) (en)](http://www.html5rocks.com/en/tutorials/webaudio/positional_audio/)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits (en)](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [Making HTML5 Audio Actually Work on Mobile (en)](http://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio Sprites (and fixes for iOS) (en)](http://remysharp.com/2010/12/23/audio-sprites/)
