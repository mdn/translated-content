---
title: Introduction aux API Web
slug: Learn/JavaScript/Client-side_web_APIs/Introduction
tags:
  - 3rd party
  - API
  - Article
  - Beginner
  - Browser
  - CodingScripting
  - Learn
  - Object
  - WebAPI
  - client-side
translation_of: Learn/JavaScript/Client-side_web_APIs/Introduction
original_slug: Apprendre/JavaScript/Client-side_web_APIs/Introduction
---
{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}

Tout d'abord, nous verrons dans les grandes lignes ce qu'est une API — leur fonctionnement, comment les utiliser dans votre code, leur structure. Nous verrons également quelles sont les principales API et leur utilisation.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Des connaissances de base en informatique, une compréhension de base du
        <a href="/fr/docs/Learn/HTML">HTML</a> et
        <a href="/fr/docs/Learn/CSS">CSS</a>, des notions de JavaScript (voir
        <a href="/fr/docs/Learn/JavaScript/First_steps">premiers pas</a>,
        <a href="/fr/docs/Learn/JavaScript/Building_blocks"
          >briques JavaScript</a
        >, <a href="/fr/docs/Learn/JavaScript/Objects">objets JavaScript</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Vous familiariser avec les API, ce qu'elles permettent de faire, et
        comment les utiliser dans votre code.
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce qu'une API ?

Les API (_Application Programming Interfaces_ soit « interface de programmation d'application ») sont des constructions disponibles dans les langages de programmation pour permettre aux développeurs de créer plus facilement des fonctionnalités complexes. Elles s'occupent des parties de code plus complexes, fournissant au développeur une syntaxe plus facile à utiliser à la place.

En guise d'exemple concret, pensez à des branchements électriques dans une maison, appartement ou autre logement. Si vous souhaitez utiliser un appareil dans votre maison, il vous suffit de le brancher dans une prise et cela fonctionne. Vous n'essayez pas de le brancher directement à l'alimentation électrique — le faire serait réellement inefficace, et, si vous n'êtes pas électricien, difficile et dangereux à réaliser.

![](plug-socket.png)

_Source de l'image : [Overloaded plug socket](https://www.flickr.com/photos/easy-pics/9518184890/in/photostream/lightbox/) par [The Clear Communication People](https://www.flickr.com/photos/easy-pics/), sur Flickr._

De la même façon, par exemple, pour programmer des graphismes en 3D, il est beaucoup plus facile de le faire en utilisant une API écrite dans un langage de haut niveau comme JavaScript ou Python, plutôt que d'essayer d'écrire du code bas niveau (comme C ou C ++) qui contrôle directement le GPU de l'ordinateur ou d'autres fonctions graphiques.

> **Note :** Voir aussi l'[entrée du glossaire du terme API](/fr/docs/Glossary/API) pour plus de descriptions.

### API JavaScript côté client

Le JavaScript côté client en particulier a de nombreuses API à sa disposition — elles ne font pas partie du langage JavaScript lui-même, elles sont construites par-dessus JavaScript, offrant des super-pouvoirs supplémentaires à utiliser dans votre code. Elles appartiennent généralement à une des deux catégories :

- **Les API du navigateur** sont intégrées au navigateur web et permettent de rendre disponibles les données du navigateur et de son environnement afin de réaliser des choses complexes avec. Ainsi, [l'API Web Audio](/fr/docs/Web/API/Web_Audio_API) fournit des constructions JavaScript pour manipuler des données audio dans le navigateur. On pourra utiliser cette API afin de récupérer une piste audio puis d'abaisser son volume, d'y appliquer des effets, etc. Sous le capot, c'est le navigateur qui s'occupe des couches plus complexes en code « bas niveau » (C++ ou Rust par exemple) afin de réaliser le traitement du signal. Là encore, cette complexité est masquée par l'abstraction offerte par l'API.
- **Les API tierces** ne sont pas intégrées au navigateur par défaut, et vous devez généralement récupérer le code de l'API et des informations depuis un site Web.
  Par exemple: l'[API Twitter](https://dev.twitter.com/overview/documentation) vous permet d'afficher vos derniers tweets sur votre site Web. Elle fournit un ensemble de constructions que vous pouvez utiliser pour interroger le service Twitter et qui renvoie alors les informations demandées.

![](browser.png)

### Relations entre JavaScript, les API et autres outils JavaScript

Ci-dessus, nous avons indiqué ce qu'est une API JavaScript côté client et sa relation avec le langage JavaScript. Pour récapituler, clarifier, et apporter plus de précisions sur d'autres outils JavaScript qui existent:

- JavaScript — Un langage de programmation de haut niveau intégré aux navigateurs, qui permet de mettre en œuvre des fonctionnalités sur les pages et applications Web. Notez que JavaScript est également disponible dans d'autres environnements de programmation, tels que [Node](/fr/docs/Learn/Server-side/Express_Nodejs/Introduction). Mais ne vous en préoccupez pas pour l'instant.
- Les API du navigateur — Constructions intégrées dans le navigateur, situées au‑dessus du langage JavaScript, permettant une mise en œuvre plus facile de fonctionnalités.
- Les API tierces — Constructions intégrées à des plateformes tierces (par exemple Twitter, Facebook) qui permettent d'utiliser certaines fonctionnalités de ces plateformes dans vos propres pages Web (par exemple: afficher vos derniers Tweets sur votre page Web).
- Les bibliothèques JavaScript — Habituellement, un ou plusieurs fichiers JavaScript contenant des [fonctions personnalisées](/fr/docs/Learn/JavaScript/Building_blocks/Functions#custom_functions) que vous pouvez attacher à votre page Web pour accélérer ou activer l'écriture de fonctionnalités courantes. Des exemples incluent jQuery, Mootools et React.
- Les _frameworks_ JavaScript — Au‑dessus des bibliothèques, les _frameworks_ JavaScript (par exemple Angular et Ember) sont plutôt des packages de HTML, CSS, JavaScript et autres technologies, que vous installez puis utilisez pour écrire une application web entière.
  La différence essentielle entre une bibliothèque et un _framework_ est « l'Inversion du Contrôle ». Avec une bibliothèque, c'est le développeur qui appelle les méthodes de la bibliothèque — il exerce le contrôle. Avec un _framework_, le contrôle est inversé : c'est le _framework_ qui appelle le code du développeur.

## Que peuvent faire les API ?

Il y a un beaucoup d'API disponibles dans les navigateurs modernes. Elles permettent de faire un large éventail de choses. Vous pouvez vous en faire une petite idée en jetant un coup d'œil à la [page de l'index des API MDN](/fr/docs/Web/API).

### API de navigateur courantes

En particulier, voici les catégories d'API de navigateur les plus courantes que vous utiliserez (et que nous allons voir dans ce module plus en détail) :

- **Les API pour manipuler des documents** chargés dans le navigateur. L'exemple le plus évident est l'[API DOM (_Document Object Model_)](/fr/docs/Web/API/Document_Object_Model). Elle permet de manipuler le HTML et CSS — créer, supprimer et modifier du code HTML, appliquer de nouveaux styles à votre page dynamiquement, etc. Par exemple, chaque fois que vous voyez une fenêtre pop-up apparaître sur une page, ou qu'un nouveau contenu affiché, c'est que le DOM est en action. Découvrez-en plus sur ces types d'API dans la rubrique [Manipuler des documents](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).
- **Les API pour récupérer des données du serveur**, afin de mettre à jour des sections d'une page Web, sont couramment utilisées. Ce détail apparemment anodin a eu un impact énorme sur les performances et le comportement des sites — si vous avez juste besoin de mettre à jour une liste de produits ou afficher de nouveaux articles disponibles, le faire instantanément sans avoir à recharger toute la page du serveur peut rendre le site ou l'application beaucoup plus réactif et « accrocheur ». [XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest) et l'[API Fetch](/fr/docs/Web/API/Fetch_API) sont les API qui rendent ça possible. Vous verrez aussi peut-être le terme **Ajax** pour qualifier cette technique. Pour en savoir plus sur ces API, voir [Récupérer des données du serveur.](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- **Les API pour dessiner et manipuler des graphiques** sont maintenant couramment prises en charge dans les navigateurs — les plus populaires sont [Canvas](/fr/docs/Web/API/Canvas_API) et [WebGL](/fr/docs/Web/API/WebGL_API). Elles permettent la mise à jour, par programmation, des pixels contenus dans un élément HTML [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) pour créer des scènes 2D et 3D. Par exemple, vous pouvez dessiner des formes comme des rectangles ou des cercles, importer une image sur le canevas, et lui appliquer un filtre sépia ou niveau de gris à l'aide de l'API Canvas ou encore créer une scène 3D complexe avec éclairage et textures en utilisant WebGL. De telles API sont souvent combinées avec d'autres API, par exemple [`window.requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame), pour créer des boucles d'animation (faire des mises à jour continues de scènes) et ainsi créer des dessins animés et des jeux. Pour en savoir plus sur ces API, voir [Dessiner des éléments graphiques](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics).
- **Les API audio et vidéo** comme [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement), [Web Audio API](/fr/docs/Web/API/Web_Audio_API) ou [WebRTC](/fr/docs/Web/API/WebRTC_API), permettent de faire des choses vraiment intéressantes avec du multimédia, telles que la création de contrôles UI personnalisées pour jouer de l'audio et vidéo, l'affichage de textes comme des légendes et des sous-titres, la récupération de vidéos depuis votre webcam pour l'afficher sur l'ordinateur d'une autre personne dans une visio‑conférence ou encore l'ajout d'effets sur des pistes audio (tels que le gain, la distorsion, la balance, etc.). Pour en savoir plus sur ces API, voir [API audio et vidéo](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs).
- **Les API de périphérique** permettent essentiellement de manier et récupérer des données à partir de périphériques modernes, de manière utile pour les applications Web. Nous avons déjà parlé de l'API de géolocalisation accédant aux données d'emplacement de l'appareil afin que vous puissiez repérer votre position sur une carte. Autres exemples : indiquer à l'utilisateur qu'une mise à jour est disponible pour une application Web via des notifications système (voir l'[API Notifications](/fr/docs/Web/API/Notifications_API)) ou des vibrations (voir l'[API Vibration](/fr/docs/Web/API/Vibration_API)).
- **Les API de stockage côté client** deviennent de plus en plus répandues dans les navigateurs Web — la possibilité de stocker des données côté client est très utile si vous souhaitez créer une application qui enregistre son état entre les chargements de page, et peut-être même fonctionner lorsque le périphérique est hors ligne. Il existe un certain nombre d'options disponibles, par exemple le simple stockage nom/valeur avec l'[API Web Storage](/fr/docs/Web/API/Web_Storage_API), et le stockage plus complexe de données tabulaires avec l'[API IndexedDB](/fr/docs/Web/API/IndexedDB_API). Pour en savoir plus sur ces API, voir [Stockage côté client](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage).

### API tierces courantes

Il y a une grande variété d'API tierces ; en voici quelques-unes des plus populaires que vous allez probablement utiliser tôt ou tard :

- [L'API Twitter](https://dev.twitter.com/overview/documentation) vous permet d'afficher vos derniers tweets sur un site web.
- Les API de cartographie comme [Mapquest](https://developer.mapquest.com/) et [Google Maps API](https://developers.google.com/maps/) vous permettent de réaliser toute sorte de cartes dans des pages web.
- [L'ensemble d'API de Facebook](https://developers.facebook.com/docs/) permet d'utiliser différentes parties de l'écosystème de Facebook dans votre application (par exemple pour la connexion avec un compte Facebook, la gestion des paiements ou de publicité, etc.).
- [Les API Telegram](https://core.telegram.org/api) permettent d'intégrer le contenu de canaux Telegram sur un site web et de prendre en charge les bots.
- [L'API YouTube](https://developers.google.com/youtube/) vous permet d'intégrer des vidéos YouTube sur votre site, de faire des recherches sur YouTube, de construire des listes de lecture, etc.
- [L'API Pinterest](https://developers.pinterest.com/) fournit des outils pour gérer des tableaux et épingles Pinterest et de les inclures à votre site web.
- [L'API Twilio](https://www.twilio.com/) fournit un ensemble d'outil pour intégrer des fonctionnalités d'appels audio et vidéo à une application et/ou d'envoyer des SMS/MMS.
- [L'API Mastodon](https://docs.joinmastodon.org/api/) permet de manipuler les fonctionnalités du réseau social Mastodon grâce à des programmes.

> **Note :** Vous pouvez trouver des informations sur beaucoup plus d'API tierces dans le [répertoire Programmable Web API.](http://www.programmableweb.com/category/all/apis)

## Comment les API fonctionnent-elles ?

Chaque API JavaScript fonctionne de manière légèrement différente d'une autre, mais de manière générale, elles ont des fonctionnalités communes et des thèmes similaires.

### Elles sont fondées sur des objets

Les API interagissent avec le code en utilisant un ou plusieurs [objets JavaScript](/fr/docs/Learn/JavaScript/Objects), qui servent de conteneurs pour les données utilisées par l'API (contenues dans les propriétés d'objet), et la fonctionnalité rendue disponible par l'API (contenue dans des méthodes d'objet).

> **Note :** Si vous n'êtes pas déjà familier avec le fonctionnement des objets, vous devriez revenir en arrière et parcourir le module [objets JavaScript](/fr/docs/Learn/JavaScript/Objects) avant de continuer.

Prenons comme exemple l'API Web Audio. Il s'agit d'une API assez complexe avec plusieurs objets. Voici les objets principaux :

- [`AudioContext`](/fr/docs/Web/API/AudioContext), qui représente un [graphe audio](/fr/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) qui peut être utilisé afin de manipuler la lecture audio dans le navigateur et qui possède différentes méthodes et propriétés qui sont disponibles pour manipuler ce signal audio.
-
- [`MediaElementAudioSourceNode`](/fr/docs/Web/API/MediaElementAudioSourceNode), qui représente un élément [`<audio>`](/fr/docs/Web/HTML/Element/audio) contenant du son qu'on veut jouer et manipuler dans le contexte.
- [`AudioDestinationNode`](/fr/docs/Web/API/AudioDestinationNode), qui représente la destination de l'audio, c'est-à-dire le composant physique qui sera utilisé pour produire le son (il s'agit généralement des hauts-parleurs ou des écouteurs).

Alors comment ces objets interagissent-ils ? Si vous regardez notre exemple [d'élément audio](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/web-audio/index.html) (regardez‑le [aussi en direct](https://mdn.github.io/learning-area/javascript/apis/introduction/web-audio/)), vous verrez le code suivant :

```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br>
<input type="range" min="0" max="1" step="0.01" value="1" class="volume">
```

Nous incluons, tout d'abord, un élément `<audio>` avec lequel nous intégrons un MP3 dans la page. Nous n'incluons pas de contrôles par défaut du navigateur. Ensuite, nous incluons un [`<button>`](/fr/docs/Web/HTML/Element/Button) que nous utiliserons pour lire et arrêter la musique, et un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) de type range, que nous utiliserons pour ajuster le volume de la piste en cours de lecture.

Ensuite, examinons le JavaScript de cet exemple.

Nous commençons par créer une instance `AudioContext` à l'intérieur de laquelle nous allons manipuler notre piste :

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

Ensuite, nous créons des constantes qui stockent les références à nos éléments `<audio>`, `<button>` et `<input>`, et nous utilisons la méthode [`AudioContext.createMediaElementSource()`](/fr/docs/Web/API/AudioContext/createMediaElementSource) pour créer un `MediaElementAudioSourceNode` représentant la source de notre audio — l'élément `<audio>` sera joué à partir de :

```js
const audioElement = document.querySelector('audio');
const playBtn = document.querySelector('button');
const volumeSlider = document.querySelector('.volume');

const audioSource = audioCtx.createMediaElementSource(audioElement);
```

Ensuite, nous incluons deux gestionnaires d'événements qui servent à basculer entre la lecture et la pause lorsque le bouton est pressé et à réinitialiser l'affichage au début lorsque la chanson est terminée :

```js
// lecture/pause de l'audio
playBtn.addEventListener('click', function() {
    // vérifier si le contexte est en état de suspension (politique de lecture automatique)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

  // si la piste est arrêtée, la lire
    if (this.getAttribute('class') === 'paused') {
        audioElement.play();
        this.setAttribute('class', 'playing');
        this.textContent = 'Pause'
    // si une piste est en cours de lecture, l'arrêter
} else if (this.getAttribute('class') === 'playing') {
        audioElement.pause();
        this.setAttribute('class', 'paused');
        this.textContent = 'Lire';
    }
});

// si la piste se termine
audioElement.addEventListener('ended', function() {
    playBtn.setAttribute('class', 'paused');
    playBtn.textContent = 'Lire';
});
```

> **Note :** Certains d'entre vous ont peut-être remarqué que les méthodes `play()` et `pause()` utilisées pour lire et mettre en pause la piste ne font pas partie de l'API audio Web ; elles font partie de l'API [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement). qui est différente mais étroitement liée.

Ensuite, nous créons un objet [`GainNode`](/fr/docs/Web/API/GainNode) à l'aide de la méthode [`AudioContext.createGain()`](/fr/docs/Web/API/BaseAudioContext/createGain), qui peut être utilisé pour ajuster le volume de l'audio qui le traverse, et nous créons un autre gestionnaire d'événements qui modifie la valeur du gain (volume) du graphique audio lorsque la valeur du curseur est modifiée :

```js
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener('input', function() {
    gainNode.gain.value = this.value;
});
```

La dernière chose à faire pour que cela fonctionne est de connecter les différents nœuds du graphe audio, ce qui est fait en utilisant la méthode [`AudioNode.connect()`](/fr/docs/Web/API/AudioNode/connect) disponible sur chaque type de nœud :

```js
audioSource.connect(gainNode).connect(audioCtx.destination);
```

L'audio commence dans la source, qui est ensuite connectée au nœud de gain afin que le volume de l'audio puisse être ajusté. Le nœud de gain est ensuite connecté au nœud de destination afin que le son puisse être lu sur votre ordinateur (la propriété [`AudioContext.destination`](/fr/docs/Web/API/BaseAudioContext/destination) représente ce qui est le [`AudioDestinationNode`](/fr/docs/Web/API/AudioDestinationNode) par défaut disponible sur le matériel de votre ordinateur, par exemple vos haut-parleurs).

### Elles ont des points d'entrée reconnaissables

Lorsque vous utilisez une API, vous devez vous assurer que vous savez où se trouve le point d'entrée de l'API. Dans l'API Web Audio, c'est assez simple — il s'agit de l'objet [`AudioContext`](/fr/docs/Web/API/AudioContext), qui doit être utilisé pour effectuer toute manipulation audio quelle qu'elle soit.

L'API DOM (_Document Object Model_) a également un point d'entrée simple — ses fonctionnalités ont tendance à être trouvées accrochées à l'objet [`Document`](/fr/docs/Web/API/Document), ou à une instance d'un élément HTML que vous voulez affecter d'une manière ou d'une autre, par exemple :

```js
const em = document.createElement('em'); // crée un nouvel élément em
const para = document.querySelector('p'); // référence à un élément p existant
em.textContent = 'Hello there!'; // donne à em du contenu textuel
para.appendChild(em); // intégre em dans le paragraphe
```

L'API [Canvas](/fr/docs/Web/API/Canvas_API) repose également sur l'obtention d'un objet de contexte à utiliser pour manipuler les choses, bien que dans ce cas, il s'agisse d'un contexte graphique plutôt que d'un contexte audio. Son objet de contexte est créé en obtenant une référence à l'élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) sur lequel vous voulez dessiner, puis en appelant sa méthode [`HTMLCanvasElement.getContext()`](/fr/docs/Web/API/HTMLCanvasElement/getContext) :

```js
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
```

Tout ce que nous voulons faire au canevas est ensuite réalisé en appelant les propriétés et les méthodes de l'objet contexte (qui est une instance de [`CanvasRenderingContext2D`](/fr/docs/Web/API/CanvasRenderingContext2D)), par exemple :

```js
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

> **Note :** Vous pouvez voir ce code en action dans notre [démo de balles rebondissantes](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/bouncing-balls.html) (voyez-le fonctionner [en direct](https://mdn.github.io/learning-area/javascript/apis/introduction/bouncing-balls.html) également).

### Elles utilisent des événements pour gérer les changements d'état

Nous avons déjà abordé les événements plus tôt dans le cours dans notre article [Introduction aux événements](/fr/docs/Learn/JavaScript/Building_blocks/Events), qui examine en détail ce que sont les événements web côté client et comment ils sont utilisés dans votre code. Si vous n'êtes pas déjà familiarisé avec le fonctionnement des événements de l'API Web côté client, nous vous conseillons de lire cet article avant de poursuivre.

Certaines API Web ne contiennent aucun événement, mais la plupart en contiennent au moins quelques-uns. Les propriétés des gestionnaires qui nous permettent d'exécuter des fonctions lorsque des événements se produisent sont généralement répertoriées dans notre matériel de référence dans des sections distinctes intitulées « Gestionnaires d'événements ».

Nous avons déjà vu un certain nombre de gestionnaires d'événements utilisés dans notre exemple d'API audio Web ci-dessus.

Pour fournir un autre exemple, les instances de l'objet [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) (chacune représente une requête HTTP au serveur pour récupérer une nouvelle ressource d'un certain type) a un certain nombre d'événements disponibles sur eux, par exemple, l'événement `load` est déclenché lorsqu'une réponse a été renvoyée avec succès contenant la ressource demandée, et qu'elle est désormais disponible.

Le code suivant fournit un exemple simple de la façon dont cela peut être utilisé :

```js
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
```

> **Note :** Vous pouvez voir ce code en action dans notre exemple [ajax.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/introduction/ajax.html) ([voyez-le en direct](https://mdn.github.io/learning-area/javascript/apis/introduction/ajax.html) également).

Les cinq premières lignes spécifient l'emplacement de la ressource que nous voulons récupérer, créent une nouvelle instance d'un objet de requête en utilisant le constructeur `XMLHttpRequest()`, ouvrent une requête HTTP `GET` pour récupérer la ressource spécifiée, spécifient que la réponse doit être envoyée au format JSON, puis envoient la requête.

La fonction du gestionnaire `onload` précise ensuite ce que nous faisons de la réponse. Nous savons que la réponse sera renvoyée avec succès et disponible après le déclenchement de l'événement load (sauf si une erreur s'est produite), nous sauvegardons donc la réponse contenant le JSON renvoyé dans la variable `superHeroes`, puis nous la passons à deux fonctions différentes pour un traitement ultérieur.

### Elles disposent de mécanismes de sécurité supplémentaires adéquats

Les fonctionnalités des API Web sont soumises aux mêmes considérations de sécurité que JavaScript et les autres technologies web (par exemple [same-origin policy](/fr/docs/Web/Security/Same-origin_policy)), mais elles disposent parfois de mécanismes de sécurité supplémentaires. Par exemple, certaines des API Web les plus modernes ne fonctionneront que sur des pages servies par HTTPS, car elles transmettent des données potentiellement sensibles (par exemple [Service Workers](/fr/docs/Web/API/Service_Worker_API) et [Push](/fr/docs/Web/API/Push_API)).

En outre, certaines API Web demandent la permission d'être activées à l'utilisateur une fois que les appels à ces interfaces sont effectués dans votre code. À titre d'exemple, l'API [Notifications API](/fr/docs/Web/API/Notifications_API) demande la permission à l'aide d'une boîte de dialogue contextuelle :

![](notification-permission.png)

Les API Web Audio et [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) sont soumises à un mécanisme de sécurité appelé [autoplay policy](/fr/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy) - cela signifie essentiellement que vous ne pouvez pas lire automatiquement l'audio lorsqu'une page se charge — vous devez permettre à vos utilisateurs de déclencher la lecture audio par le biais d'un contrôle comme un bouton. Cette mesure est prise parce que la lecture automatique de l'audio est généralement très ennuyeuse et que nous ne devrions pas y soumettre nos utilisateurs.

> **Note :** Selon la rigueur du navigateur, ces mécanismes de sécurité peuvent même empêcher l'exemple de fonctionner localement, c'est-à-dire si vous chargez le fichier d'exemple local dans votre navigateur au lieu de l'exécuter à partir d'un serveur web. Au moment de la rédaction de ce document, notre exemple d'API Web Audio ne fonctionnait pas localement sur Google Chrome — nous avons dû le télécharger sur GitHub avant qu'il ne fonctionne.

## Résumé

À ce stade, vous devriez avoir une bonne idée de ce que sont les API, de leur fonctionnement et de ce que vous pouvez faire avec dans votre code JavaScript. Vous avec probablement hâte de commencer à faire des choses amusantes avec des API spécifiques, alors allons-y ! Par la suite, nous verrons comment manipuler des documents avec le _Document Object Model_ (DOM).

{{NextMenu("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs")}}

## Dans ce module

- [Introduction aux API du Web](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [Manipuler des documents](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Récupérer des données du serveur](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [API tierces](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [Dessiner des éléments graphiques](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [API vidéo et audio](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [Stockage côté client](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
