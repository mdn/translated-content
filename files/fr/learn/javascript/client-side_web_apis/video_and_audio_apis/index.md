---
title: APIs vidéo et audio
slug: Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
tags:
  - API
  - Apprendre
  - Article
  - Audio
  - Codage
  - Débutant
  - Guide
  - JavaScript
  - Video
translation_of: Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
original_slug: Apprendre/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Learn/JavaScript/Client-side_web_APIs")}}

HTML5 fournit des éléments pour intégrer du multimédia dans les documents — {{htmlelement("video")}} et {{htmlelement("audio")}} — et qui viennent avec leurs propres APIs pour contrôler la lecture, se déplacer dans le flux, etc*.* Cet article montre comment réaliser les tâches les plus communes, comme créer des contrôles de lectures personnalisés.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Les bases du JavaScript (voir <a
          href="/fr/docs/Learn/JavaScript/First_steps"
          >premiers pas en JavaScript</a
        >,
        <a href="/fr/Apprendre/JavaScript/Building_blocks"
          >les briques Javascript</a
        >,
        <a href="/fr/docs/Learn/JavaScript/Objects">Introduction aux objets</a
        >), <a href="/fr/Apprendre/JavaScript/Client-side_web_APIs/Introduction"
          >Introduction aux APIs web</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Apprendre à utiliser les APIs du navigateur pour contrôler la lecture de
        audio et vidéo.
      </td>
    </tr>
  </tbody>
</table>

## Les balises HTML5 video et audio

Les balises {{htmlelement("video")}} et {{htmlelement("audio")}} permettent d'intégrer des vidéos et de l'audio dans des pages web. Comme nous l'avons montré dans [Contenu audio et vidéo](/fr/Apprendre/HTML/Multimedia_and_embedding/Contenu_audio_et_video), une implémentation habituelle ressemble à ça :

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Votre navigateur ne supporte pas la vidéo HTML5. Voici à la place <a href="rabbit320.mp4">un lien vers la vidéo</a>.</p>
</video>
```

Cela crée un lecteur vidéo à l'intérieur du navigateur:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html", '100%', 380)}}

Vous pouvez consulter toutes fonctionnalités HTML audio et vidéo dans l'article mentionné précédemment. Pour notre utilisation ici, l'attribut le plus intéressant est {{htmlattrxref("controls", "video")}}. Il permet d'activer l'ensemble des contrôles de lecture par défaut; si vous ne le spécifiez pas, vous aucun contrôle ne sera affiché:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats-no-controls.html", '100%', 380)}}

Ce n'est pas immédiatement utile pour la lecture de vidéos, mais ça a des avantages. Les contrôles natifs des navigateurs différent complètement d'un navigateur à l'autre — ce qui est embêtant pour un support global des différents navigateurs. Un autre problème est que le contrôles natifs sont généralement assez peu accessibles au clavier.

Vous pouvez régler ces deux problèmes en cachant les contrôles natifs (en supprimant l'attribut `controls`) et en les remplaçant par les votres en HTML, CSS et JavaScript. Dans la prochaine section, nous verrons les outils de base à notre disposition pour faire ça.

## L'API HTMLMediaElement

L'API {{domxref("HTMLMediaElement")}}, spécifiée dans HTML5, fournit des fonctionnalités qui permettent de controller des lecteurs audio et vidéo avec JavaScript — avec par exemple {{domxref("HTMLMediaElement.play()")}} ou encore {{domxref("HTMLMediaElement.pause()")}}. Cette interface est disponible à la fois pour les balises {{htmlelement("audio")}} et {{htmlelement("video")}}, les fonctionnalités utiles pour les deux étant quasiment identiques. Voyons un exemple pour découvrir ces fonctionnalités.

Notre exemple final ressemblera (et fonctionnera) comme ceci:

{{EmbedGHLiveSample("learning-area/javascript/apis/video-audio/finished/", '100%', 360)}}

### Débuter

Pour commencer avec cet exemple, [télechargez notre media-player-start.zip](https://github.com/mdn/learning-area/raw/master/javascript/apis/video-audio/start/media-player-start.zip) et décompressez-le dans un nouveau dossier sur votre disque dur. Si vous avez téléchargé notre dépôt d'exemples, vous le trouverez dans `javascript/apis/video-audio/start/`.

Si vous ouvrez la page HTML, vous devriez voir un lecteur HTML5 utilisant les contrôles natifs.

#### Exploration du HTML

Ouvrez le fichier HTML d'index. Vous allez voir que le HTML contient majoritairement du code pour le lecteur et ses contrôles:

```html
<div class="player">
  <video controls>
    <source src="video/sintel-short.mp4" type="video/mp4">
    <source src="video/sintel-short.mp4" type="video/webm">
    <!-- fallback contenu ici -->
  </video>
  <div class="controls">
    <button class="play" data-icon="P" aria-label="bascule lecture pause"></button>
    <button class="stop" data-icon="S" aria-label="stop"></button>
    <div class="timer">
      <div></div>
      <span aria-label="timer">00:00</span>
    </div>
    <button class="rwd" data-icon="B" aria-label="retour arrière"></button>
    <button class="fwd" data-icon="F" aria-label="avance rapide"></button>
  </div>
</div>
```

- Le lecteur complet est englobé dans une balise {{htmlelement("div")}} pour pouvoir appliquer du style sur le bloc complet si nécessaire.
- La balise {{htmlelement("video")}} contient deux éléments {{htmlelement("source")}} pour permettre la lecture du média selon les capacités de chaque navigateur.
- La partie _controls_ du HTML est la plus intéressante:

  - Il contient 4 {{htmlelement("button")}} : lecture/mise en pause, stop, retour arrière et avance rapide.
  - Chaque `<button>` a un nom de classe, un attribut `data-icon` (pour définir l'icône affichée), et un attribut `aria-label` (qui fournit une description de chaque bouton pour le rendre accessible). Le contenu d'un attribut `aria-label` est lu par les lecteurs d'écran quand l'élément sur lequel il se situe prend le focus.
  - Il y a également un élément {{htmlelement("div")}}, qui affiche le temps écoulé quand la vidéo est en cours de lecture. Pour s'amuser, nous avons mis deux mécanismes en place — un {{htmlelement("span")}} qui affiche le temps écoulé en minutes/secondes, et un autre `<div>` pour afficher une barre de progrès. Pour vous faire une idée du produit final, vous pouvez jeter un d'oeil à [la version finie](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/).

#### Exploration du CSS

Maintenant, ouvrez le fichier CSS et jetez-y un coup d'oeil. Le CSS pour cet exemple n'est pas très compliqué, mais nous allons voir les éléments les plus intéressants ici. Tout d'abord, le style de `.controls`:

```css
.controls {
  visibility: hidden;
  opacity: 0.5;
  width: 400px;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -200px;
  background-color: black;
  box-shadow: 3px 3px 5px black;
  transition: 1s all;
  display: flex;
}

.player:hover .controls, player:focus .controls {
  opacity: 1;
}
```

- Nous commençons par définir la propriété {{cssxref("visibility")}} à `hidden`. Plus tard dans notre JavaScript, nous le rendrons `visible`, et supprimerons l'attribut `controls` de l'élément `<video>`. Ainsi, si pour une raison quelconque le JavaScript ne se charge pas, les utilisateurs peuvent toujours utiliser la vidéo avec les contrôles natifs.
- Nous donnons aux propriétés une {{cssxref("opacity")}} de 0.5 par défaut, pour qu'ils ne soient pas génants lorsqu'on veut regarder la vidéo. Ce n'est qu'en passant la souris sur le lecteur que les contrôles sont affichés en pleine opacité.
- Ne plaçons les boutons à l'intérieur du div en utilisant Flexbox ({{cssxref("display")}}: flex), c'est plus simple comme ça.

Ensuite, voyons les icônes des boutons:

```css
@font-face {
   font-family: 'HeydingsControlsRegular';
   src: url('fonts/heydings_controls-webfont.eot');
   src: url('fonts/heydings_controls-webfont.eot?#iefix') format('embedded-opentype'),
        url('fonts/heydings_controls-webfont.woff') format('woff'),
        url('fonts/heydings_controls-webfont.ttf') format('truetype');
   font-weight: normal;
   font-style: normal;
}

button:before {
  font-family: HeydingsControlsRegular;
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaa;
  text-shadow: 1px 1px 0px black;
}
```

Tout d'abord, en haut du CSS, nous utilisons un bloc {{cssxref("@font-face")}} pour importer une police web personnalisée. Il s'agit d'une police d'icônes — tous les caractères de l'alphabet correspondent à des icônes que vous pouvez utiliser dans votre application.

Ensuite, nous générons du contenu pour afficher une icône sur chaque bouton:

- Nous utilisons le sélecteur {{cssxref("::before")}} pour afficher le contenu au début de chaque élément {{htmlelement("button")}}.
- Nous utilisons la propriété {{cssxref("content")}} pour que le contenu à afficher soit égal au contenu de l'attribut [`data-icon`](/fr/Apprendre/HTML/Comment/Utiliser_attributs_donnes). Dans le cas du bouton play par exemple, `data-icon` contient un "P" majuscule.
- Nous apliquons la police web personnalisée au bouton en utilisant {{cssxref("font-family")}}. Dans cette police, "P" est une icône "play", donc le bouton play a une icône "play" affichée dedans.

Les polices d'icônes sont très cool pour de nombreuses raisons: réduire les requêtes HTTP (puisque vous n'avez pas besoin de télécharger des icônes sous forme de fichiers image), bonne scalabilité, et le fait que vous pouvez utiliser les propriétés de texte pour les formatter — comme {{cssxref("color")}} et {{cssxref("text-shadow")}}.

Dernier point mais non des moindres, le CSS du décompte:

```css
.timer {
  line-height: 38px;
  font-size: 10px;
  font-family: monospace;
  text-shadow: 1px 1px 0px black;
  color: white;
  flex: 5;
  position: relative;
}

.timer div {
  position: absolute;
  background-color: rgba(255,255,255,0.2);
  left: 0;
  top: 0;
  width: 0;
  height: 38px;
  z-index: 2;
}

.timer span {
  position: absolute;
  z-index: 3;
  left: 19px;
}
```

- Nous donnons au `<div>` `.timer` la propriété `flex: 5`, pour qu'il occupe la plus grande partie de la barre de contrôle en largeur. Nous ajoutons également {{cssxref("position")}}`: relative`, pour que les éléments à l'intérieur puissent être positionnés relativement à ses dimensions et non à celles de l'élément {{htmlelement("body")}}.
- Le `<div>` interne est positionné en absolu pour être situé au-dessus du `<div>` externe. On lui donne également une largeur initiale de 0, de sorte qu'on ne le voie pas du tout. Au fur et à mesure de la lecture de la vidéo, la largeur sera augmentée via JavaScript.
- Le `<span>` est également positionné en absolu pour être situé sur le côté gauche de la barre de progrès.
- Nous donnons au `<div>` et au `<span>` le {{cssxref("z-index")}} approprié pour que les données soient visibles — qu'un élément n'en cache pas un autre.

### Implémenter le JavaScript

Nous avons déjà une interface HTML et CSS assez complète; nous avons maintenant besoin de gérer les boutons pour que les contrôles fonctionnent.

1.  Créez un nouveau fichier JavaScript dans le même répertoire que votre fichier index.html. Nous l'appelerons `custom-player.js`.
2.  En haut de ce fichier, insérez le code suivant:

    ```js
    var media = document.querySelector('video');
    var controls = document.querySelector('.controls');

    var play = document.querySelector('.play');
    var stop = document.querySelector('.stop');
    var rwd = document.querySelector('.rwd');
    var fwd = document.querySelector('.fwd');

    var timerWrapper = document.querySelector('.timer');
    var timer = document.querySelector('.timer span');
    var timerBar = document.querySelector('.timer div');
    ```

    Ici, nous créons des variables pour stocker les références de tous les objets que nous voulons manipuler. Nous avons trois groupes:

    - L'élément `<video>`, et la barre de contrôle.
    - Les boutons play/pause, stop, retour arrière, et avance rapide.
    - Le `<div>` externe, le `<span>` qui décompte le temps écoulé, et le `<div>` interne qui affiche le progrès de la vidéo.

3.  Ensuite, insérez ce qui suit en bas de votre code:

    ```js
    media.removeAttribute('controls');
    controls.style.visibility = 'visible';
    ```

    Ces deux lignes suppriment les contrôles par défaut du navigateur sur la vidéo, et rendent nos contrôles personnalisés visibles.

#### Lecture et pause de la vidéo

Imlémentons le contrôle le plus important — le bouton play/pause.

1.  Tout d'abord, ajoutez ce qui suit au bas de votre code, pour que la fonction `playPauseMedia()` soit invoquée quand le bouton play est cliqué:

    ```js
    play.addEventListener('click', playPauseMedia);
    ```

2.  Maintenant, définissons `playPauseMedia()` — ajoutez ce qui suit, toujours au bas de votre code:

    ```js
    function playPauseMedia() {
      if(media.paused) {
        play.setAttribute('data-icon','u');
        media.play();
      } else {
        play.setAttribute('data-icon','P');
        media.pause();
      }
    }
    ```

    Ici, nous utilisons une instruction [`if`](/fr/docs/Web/JavaScript/Reference/Instructions/if...else) pour vérifier si la vidéo est en pause. La propriété {{domxref("HTMLMediaElement.paused")}} retourne vrai si le média est en pause — c'est le cas quand la vidéo n'est pas en cours de lecture, y compris quand la vidéo est au début après son chargement. Si elle est en pause, nous définissons la valeur de l'attribut `data-icon` à "u", qui est une icône "en pause", et invoquons la  méthode {{domxref("HTMLMediaElement.play()")}} pour jouer le média.

    Au second clic, le bouton sera de nouveau alterné — l'icône "play" sera affiché, et la vidéo sera mise en pause avec {{domxref("HTMLMediaElement.paused()")}}.

#### Stopper la vidéo

1.  Ajoutons la possibilité d'arrêter la vidéo. Ajoutez les lignes [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) suivantes au-dessous de vos ajouts précédents:

    ```js
    stop.addEventListener('click', stopMedia);
    media.addEventListener('ended', stopMedia);
    ```

    L'événement {{event("click")}} est explicite — nous voulons stopper la vidéo en appelant la fonction `stopMedia()` quand le bouton stop est cliqué. Cependant, nous voulons également stopper la vidéo quand elle a fini de jouer — signalé par l'événement {{event("ended")}}, nous pouvons donc mettre en place un gestionnaire d'événement pour exécuter la fonction quand cet événément se produit.

2.  Ensuite, définissons `stopMedia()` — ajoutez ce qui suit après la fonction `playPauseMedia()`:

    ```js
    function stopMedia() {
      media.pause();
      media.currentTime = 0;
      play.setAttribute('data-icon','P');
    }
    ```

    Il n'y a pas de méthode `stop()` dans l'API  HTMLMediaElement — l'équivalent du stop est de mettre `pause()` sur la vidéo, et de définir la propriété {{domxref("HTMLMediaElement.currentTime","currentTime")}} à 0. Définir une valeur à `currentTime` (en secondes) change immédiatement la position du temps du média.

    Tout ce qui nous reste à faire après ça est d'afficher l'icône "play". Que la vidéo ait été en train de jouer ou en pause, quand le bouton stop est pressé, vous voulez qu'elle doit prête à être lue.

#### Retour arrière et avance rapide

Il y a différentes manières d'implémenter le retour arrière et l'avance rapide; ici, nous vous montrons une manière relativement complexe de le faire, qui n'a pas de comportement inattendu quand différents boutons sont pressés dans un ordre aléatoire.

1.  Tout d'abord, ajoutez les lignes [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) suivantes à la suite des précédentes:

    ```js
    rwd.addEventListener('click', mediaBackward);
    fwd.addEventListener('click', mediaForward);
    ```

2.  Maintenant, occupons-nous des fonctions des gestionnaires d'événément — ajoutez le code suivant à la suite des fonctions précédentes pour définir `mediaBackward()` et `mediaForward()`:

    ```js
    var intervalFwd;
    var intervalRwd;

    function mediaBackward() {
      clearInterval(intervalFwd);
      fwd.classList.remove('active');

      if(rwd.classList.contains('active')) {
        rwd.classList.remove('active');
        clearInterval(intervalRwd);
        media.play();
      } else {
        rwd.classList.add('active');
        media.pause();
        intervalRwd = setInterval(windBackward, 200);
      }
    }

    function mediaForward() {
      clearInterval(intervalRwd);
      rwd.classList.remove('active');

      if(fwd.classList.contains('active')) {
        fwd.classList.remove('active');
        clearInterval(intervalFwd);
        media.play();
      } else {
        fwd.classList.add('active');
        media.pause();
        intervalFwd = setInterval(windForward, 200);
      }
    }
    ```

    Vous remarquerez que nous commençons par initialiser deux variables — `intervalFwd` et `intervalRwd` — vous verrez à quoi elles servent plus tard.

    Voyons pas à pas `mediaBackward()` (`mediaForward()` fait la même chose, mais dans l'autre sens):

    1.  Nous effaçons les classes et intervales qui sont définits sur la fonctionnalité d'avance rapide — de cette manière, si on presse le bouton `rwd` après avoir pressé le bouton `fwd`, on annule l'avance rapide et la remplaçons avec le retour arrière. Si on essayait de faire les deux à la fois, le lecteur échouerait.
    2.  Nous utilisons une instruction `if` pour vérifier si la classe `active` a été définie sur le bouton `rwd`, ce qui indique qu'il a déjà été pressé. La propriété {{domxref("classList")}} est une propriété plutôt pratique qui existe sur chaque élément — elle contient une liste de toutes les classes définies sur l'élément, ainsi que des méthodes pour en ajouter/supprimer, etc. Nous utilisons la méthode `classList.contains()` pour vérifier si la liste contient la classe `active`. Cela retourne un booléen `true`/`false` en résultat.
    3.  Si la classe `active` a été définie sur le bouton `rwd`, nous la supprimons avec `classList.remove()`, effaçons l'intervale qui a été définit sur le bouton quand il a été pressé (voir ci-dessous pour plus d'explication), et utilisons {{domxref("HTMLMediaElement.play()")}} pour annuler le retour arrière et démarrer la vidéo normalement.
    4.  Sinon, nous ajoutons la classe `active` sur le bouton `rwd` avec `classList.add()`, mettons la vidéo en pause en utilisant {{domxref("HTMLMediaElement.pause()")}}, puis définissons la variable `intervalRwd` en appelant {{domxref("WindowOrWorkerGlobalScope.setInterval", "setInterval()")}}. Quand elle invoquée, la fonction `setInterval()` créé un intervale actif, ce qui signifie qu'une fonction donnée en paramètre est exécutée toutes les x millisecondes — x est la valeur du 2ème paramètre. Ainsi, nous exécutons ici la fonction `windBackward()` toutes les 200 millisecondes — nous utiliserons cette fonction pour retourner la fonction en arrière de manière constante. Pour stopper un intervale actif, vous devez appeler {{domxref("WindowOrWorkerGlobalScope.clearInterval", "clearInterval()")}} en lui donnant l'intervale à arrêter en paramètre, dans notre cas il est stocké dans la variable `intervalRwd` (voir l'appel à `clearInterval()` effectué plus tôt dans la fonction).

3.  Pour en finir avec cette section, nous devons définir les fonctions `windBackward()` et `windForward()` invoquées dans les appels `setInterval()`. Ajoutez ce qui suit après les deux fonctions précédentes:

    ```js
    function windBackward() {
      if(media.currentTime <= 3) {
        rwd.classList.remove('active');
        clearInterval(intervalRwd);
        stopMedia();
      } else {
        media.currentTime -= 3;
      }
    }

    function windForward() {
      if(media.currentTime >= media.duration - 3) {
        fwd.classList.remove('active');
        clearInterval(intervalFwd);
        stopMedia();
      } else {
        media.currentTime += 3;
      }
    }
    ```

    Encore une fois, nous allons voir pas à pas la première fonction, puisque les deux fonctions font la même chose mais dans le sens inverse. Dans `windBackward()`, nous faisons comme suit — gardez à l'esprit que la fonction est exécutée toutes les 200 millisecondes.

    1.  Nous commençons avec une instruction `if` qui vérifie si le temps en cours est inférieur à 3 secondes, c'est à dire si le retour arrière nous ramènerait avant le début de la vidéo. Cela provoquerait un comportement étrange. Ainsi, si c'est le cas, nous arrêtons la vidéo en appelant `stopMedia()`, supprimons la classe `active` du bouton, et stoppons l'intervale `intervalRwd` pour stopper le retour arrière. Si nous n'avions pas ajouté cette dernière étape, la vidéo continuerait de se remboniner éternellement.
    2.  Si le temps en cours n'est pas inférieur à 3 secondes, nous retournons en arrière de 3 secondes en exécutant `media.currentTime -= 3`. Dans les faits, on rembobine donc la vidéo de 3 secondes toutes les 200 millisecondes.

#### Mettre à jour le temps écoulé

La dernière chose à implémenter pour notre lecteur multimédia est l'affichage du temps écoulé. Pour ce faire, nous allons exécuter une fonction pour mettre à jour le temps affiché à chaque fois que l'événement {{event("timeupdate")}} est déclenché sur l'élément `<video>`. La fréquence à laquelle cet événement se déclenche dépend de votre navigateur, de la puissance de votre CPU, etc ([voir post stackoverflow](http://stackoverflow.com/questions/9678177/how-often-does-the-timeupdate-event-fire-for-an-html5-video)).

Ajoutez la ligne `addEventListener()` suivante à la suite des autres:

```js
media.addEventListener('timeupdate', setTime);
```

Maintenant, ajoutez la fonction `setTime()`:

```js
function setTime() {
  var minutes = Math.floor(media.currentTime / 60);
  var seconds = Math.floor(media.currentTime - minutes * 60);
  var minuteValue;
  var secondValue;

  if (minutes < 10) {
    minuteValue = '0' + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = '0' + seconds;
  } else {
    secondValue = seconds;
  }

  var mediaTime = minuteValue + ':' + secondValue;
  timer.textContent = mediaTime;

  var barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);
  timerBar.style.width = barLength + 'px';
}
```

C'est une fonction assez longue, alors allons-y étape par étape:

1.  Tout d'abord, nous récupérons le nombre de minutes et de secondes à partir de {{domxref("HTMLMediaElement.currentTime")}}.
2.  Ensuite, on initialise deux variables supplémentaires — `minuteValue` et `secondValue`.
3.  Les deux instructions `if` qui suivent déterminent si le nombre de minutes et secondes est inférieur à 10. Si c'est le cas, on ajoute un zéro à gauche pour afficher le numéro sur deux chiffres — comme sur une horloge digitale.
4.  Le temps est au final la concaténation de `minuteValue`, un caractère deux-points, et `secondValue`.
5.  Le temps qu'on vient de définir devient la valeur {{domxref("Node.textContent")}} du décompte, pour qu'il s'affiche dans l'interface utilisateur.
6.  La largeur que nous devons donner `<div>` intérieur est calculée en récupérant la largeur du `<div>` externe (la propriété {{domxref("HTMLElement.clientWidth", "clientWidth")}} retourne la largeur de l'élément), et en la multipliant par {{domxref("HTMLMediaElement.currentTime")}} divisé par le total {{domxref("HTMLMediaElement.duration")}} du média.
7.  Nous assignons la largeur du `<div>` intérieur à la valeur calculée, plus "px", il sera donc fixé à ce nombre de pixels.

#### Corriger play et pause

Il nous reste un problème à régler. Si on presse les boutons play/pause ou stop pendant que le retour arrière ou l'avance rapide sont actifs, alors ça ne marchera pas. Comment corriger le code pour qu'ils annulent l'action `rwd`/`fwd` et joue/stoppe la vidéo comme on s'y attendrait? C'est relativement simple.

Tout d'abord, ajoutez les lignes qui suivent à l'intérieur de la fonction `stopMedia()` — n'importe où:

```js
rwd.classList.remove('active');
fwd.classList.remove('active');
clearInterval(intervalRwd);
clearInterval(intervalFwd);
```

Maintenant, ajoutez ces mêmes lignes une fois de plus, au début de la fonction `playPauseMedia()` (juste avant le début de l'instruction `if`).

À ce stade, vous pouvez supprimer les lignes équivalentes des fonctions `windBackward()` et `windForward()`, puisqu'elles ont été ajoutées à la fonction `stopMedia()` à la place.

> **Note :** Vous pouvez améliorer votre code en créant une fonction séparée qui exécute ces lignes, et l'appeler aux endroits où vous en avez besoin plutôt que de répéter ces lignes à de multiples endroits du code. Mais nous vous laissons vous en occuper.

> **Note :** Le [code terminé](https://github.com/mdn/learning-area/tree/master/javascript/apis/video-audio/finished) est disponible sur Github (le [voir en direct](https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/)).

## Sommaire

Je pense que nous vous en avons suffisamment appris dans cet article. L'API {{domxref("HTMLMediaElement")}} offre une multitude de fonctionnalités pour la création de lecteurs audio et vidéo simples, et ce n'est que le sommet de l'iceberg. La section "Voir aussi" ci-dessous vous fournirea des liens vers des fonctionnalités plus complexes et plus intéressantes.

Voici quelques suggestions de modifications à apporter à l'exemple que nous avons construit:

1.  Si la vidéo dure plus d'une heure, le temps écoulé va bien afficher les minutes et les secondes mais pas les heures. Changez l'exemple pour lui faire afficher les heures.
2.  Parce que les éléments `<audio>` ont la même fonctionnalité {{domxref("HTMLMediaElement")}} de disponible, vous pouvez faire fonctionner ce lecteur avec un élément `<audio>`. Essayez  de le faire.
3.  Trouvez un moyen de transformer le `<div>` interne en une véritable barre de progrès — quand vous cliquez quelque part sur la barre, vous vous déplacez à la position relative dans la vidéo. Un indice: vous pouvez trouver les valeurs X et Y des côtés gauche/droite et haut/bas d'un l'élément via la méthode [`getBoundingClientRect()`](/fr/docs/Web/API/Element/getBoundingClientRect), et vous pouvez trouver les coordonnées de la souris au moment du clic à l'intérieur de l'objet `event` du clic, appelé sur l'objet {{domxref("Document")}}. Par exemple:

    ```js
    document.onclick = function(e) {
      console.log(e.x) + ',' + console.log(e.y)
    }
    ```

## Voir aussi

- {{domxref("HTMLMediaElement")}}
- [Contenu audio et vidéo](/fr/Apprendre/HTML/Multimedia_and_embedding/Contenu_audio_et_video) — simple guide aux `<video>` et `<audio>` HTML.
- [Intégration audio et vidéo](/fr/Apps/Build/Audio_and_video_delivery) — guide détaillé sur l'intégration de média dans le navigateur, avec de nombreux conseils, astuces et liens vers des tutoriels plus avancés.
- [Manipulation audio et vidéo](/fr/Apps/Fundamentals/Audio_and_video_manipulation) — guide détaillé pour manipuler l'audio et vidéo avec [Canvas API](/fr/docs/Web/HTML/Canvas), [Web Audio API](/fr/docs/Web/API/Web_Audio_API), et plus encore.
- Les pages référence {{htmlelement("video")}} et {{htmlelement("audio")}}.
- [Formats pris en charge par les éléments HTML audio et vidéo](/fr/docs/Web/HTML/Formats_pour_audio_video).

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}



## Dans ce module

- [Introduction aux API du Web](/fr/Apprendre/JavaScript/Client-side_web_APIs/Introduction)
- [Manipuler des documents](/fr/Apprendre/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Récupérer des données du serveur](/fr/Apprendre/JavaScript/Client-side_web_APIs/Fetching_data)
- [APIs tierces](/fr/Apprendre/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [Dessiner des éléments graphiques](/fr/Apprendre/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [APIs vidéo et audio](/fr/Apprendre/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [Stockage côté client](/fr/Apprendre/JavaScript/Client-side_web_APIs/Client-side_storage)
