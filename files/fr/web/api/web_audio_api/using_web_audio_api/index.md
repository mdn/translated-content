---
title: Utiliser la Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
---

La [Web Audio API](/fr/docs/Web_Audio_API) offre un méchanisme à la fois simple et puissant pour implémenter et manipuler le contenu audio dans une application web. Elle permet de manipuler mixages audio, effets, balance, etc. Cet article donne les bases pour l'utiliser, à travers quelques exemples simples.

La Web Audio API ne vient pas remplacer l'élément [\<audio>](/fr/docs/Web/HTML/Element/audio), mais plutôt le compléter, de même que l'API Canvas 2D coexiste avec l'élément [\<video>](/fr/docs/Web/HTML/Element/Img). Si vous avez seulement besoin de contrôler la lecture d'un fichier audio, \<audio> est probablement une meilleure solution, plus rapide. Si vous voulez procéder à un traitement audio plus complexe et à la lecture d'une source, la Web Audio API offre davantage de possibilités en termes de puissance et de contrôle.

L'une des particularités de la Web Audio API est qu'elle n'a pas de limites au niveau de la programmation du son. Par exemple, le nombre de sons que l'on peut appeler en même temps n'est pas plafonnée. Certains processeurs sont potentiellement capables de jouer plus d'un millier de sons simultanément sans saccades.

## Exemples

Afin d'expliquer l'utilisation de la Web Audio API, nous avons créé un certain nombre d'exemples qui seront étoffés au fur et à mesure. N'hésitez pas à en ajouter d'autres et à suggérer des améliorations !

Notre premier exemple est [Voice-change-O-matic](http://github.com/mdn/voice-change-o-matic), une application web de déformation de la voix, qui permet de choisir différents effets et modes de visualisation. Cette application est rudimentaire, mais elle permet de montrer l'utilisation de plusieurs fonctionnalités de la Web Audio API combinées ensemble ([run the Voice-change-O-matic live](http://mdn.github.io/voice-change-o-matic/)).

![Une boîte à rythme avec des contrôles pour la lecture, le volume et le pan](boombox.png)

## Concepts de base

> **Note :** la plupart des extraits de code dans cette section viennent de l'exemple [Violent Theremin](https://github.com/mdn/violent-theremin).

La Web Audio API impliqe de réaliser les opérations de traitement audio dans un **contexte audio**, et elle a été conçue pour permettre le **routage modulaire**. Les opérations de traitement de base sont réalisées par des **noeuds audio**, qui sont reliés entre eux pour former un **graphe de routage audio**. Plusieurs sources — avec différentes configuration de canaux — peuvent cohabiter dans un seul contexte. Ce design modulaire offre la flexibilité nécessaire pour créer des fonctions complexes avec des effets dynamiques.

Les noeuds audio sont reliés au niveau de leurs entrées et sorties. Ils forment une chaîne qui commence avec une ou plusieurs sources, traverse un ou plusieurs noeuds de traitement, et se termine par une destination (bien qu'il ne soit pas néessaire d'avoir une destination si l'on souhaite simplement visualiser des données audio). Un scénario simple, représentatif de la Web Audio API, pourrait ressembler à ceci&nbsp;:

1. Création d'un contexte audio
2. Dans ce contexte, création des sources — telles que `<audio>`, oscillateur, flux
3. Création des noeuds d'effets, tels que réverb, filtres biquad, balance, compresseur
4. Choix final de la sortie audio, par exemple les enceintes du système
5. Connection des sources aux effets, et des effets à la sortie.

### Création d'un contexte audio

Commencez par créer une instance de [`AudioContext`](/fr/docs/Web/API/AudioContext) sur laquelle vous allez créer un graphe audio. L'exemple le plus simple ressemblerait à ceci:

```js
var contexteAudio = new AudioContext();
```

> **Note :** On peut créer plusieurs contextes audio dans le même document, bien que ce soit probablement superflu dans la plupart des cas.

Il faut rajouter une version préfixée pour les navigateurs Webkit/Blink browsers, tout en conservant la version non préfixée pour Firefox (desktop/mobile/OS). Ce qui donne :

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
```

> **Note :** Safari risque de planter si l'objet `window` n'est pas explicitement mentionné lors de la création d'un contexte audio

### Création d'une source audio

Maintenant que nous avons créé un contexte, nous allons utiliser les méthodes de ce contexte pour quasiment tout ce qui nous reste à faire. La première étape consiste à créer une source audio. Les sources peuvent être de provenance diverse :

- générées en JavaScript par un noeud audio tel qu'un oscillateur. Pour créer un {{domxref("OscillatorNode")}} on utilise la méthode {{domxref("AudioContext.createOscillator")}}.
- créées à partir de données PCM brutes: le contexte audio a des méthodes pour décoder lesformats supportés; voir {{ domxref("AudioContext.createBuffer()") }}, {{domxref("AudioContext.createBufferSource()")}}, et {{domxref("AudioContext.decodeAudioData()")}}.
- récupérées dans des élements HTML tels que {{HTMLElement("video")}} ou {{HTMLElement("audio")}}: voir {{domxref("AudioContext.createMediaElementSource()")}}.
- prises dans un [WebRTC](/fr/docs/WebRTC) {{domxref("MediaStream")}} comme une webcam ou un microphone. Voir {{ domxref("AudioContext.createMediaStreamSource()") }}.

Pour notre exemple nous nous contenterons de créer un oscillateur pour générer un son simple comme source, et un noeud de gain pour contrôler le volume:

```js
var oscillateur = contexteAudio.createOscillator();
var noeudGain = contexteAudio.createGain();
```

> **Note :** Pour jouer un fichier audio directement, il faut charger le fichier en XHR, le décoder en mémoire tampon, puis associer le tampon à une source. Voir l'exemple [Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L48-L68).

> **Note :** Scott Michaud a écrit la librairie [AudioSampleLoader](https://github.com/ScottMichaud/AudioSampleLoader), très pratique pour charger et décoder un ou plusieurs extraits audio. Elle peut aider à simplifier le processus de chargement XHR / mémoire tampon décrit dans la note précédente.

### Lien entre les noeuds source et destination

Pour faire sortir le son dans vos enceintes, il faut relier la source et la destination. Pour cela on appelle la méthode `connect` sur le noeud source, le noeud de destination étant passé en argument. La méthode `connect` est disponible sur la plupart des types de noeuds.``

La sortie par défaut du matériel (en général les enceintes) est accessible via {{ domxref("AudioContext.destination") }}. Pour connecter l'oscillateur, le noeud de gain et la destination, on écrirait les lignes suivantes:

```js
oscillateur.connect(noeudGain);
noeudGain.connect(contexteAudio.destination);
```

On peut connecter autant de noeuds qu'on le souhaite (cf. [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/)). Par exemple:

```js
source = contexteAudio.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(noeudGain);
noeudGain.connect(contexteAudio.destination);
```

Ce code créerait le graphe audio suivant :

![Un graphe audio avec un élément audio source connecté à la destination par défaut](graph1.jpg)

Il est possible de connecter plusieurs noeuds à un seul noeud, par exemple pour mixer plusieurs sources ensemble, et les passer dans un seul noeud d'effet, tel qu'un noeud de gain.

> **Note :** Depuis Firefox 32, les outils de développement intégrés incluent un [éditeur audio](/fr/docs/Tools/Web_Audio_Editor), très utile pour débugger les graphes audio.

### Lecture du son et définition du pitch

Maintenant que le graphe audio est en place, nous pouvons ajuster certains aspects du son en définissant la valeur de certaines propriétés ou en utilsant ses méthodes. L'exemple suivant spécifie un pitch en hertz pour un oscillateur, lui assigne un type, et demande à l'oscillateur de jouer le son.

```js
oscillateur.type = "sine"; // onde sinusoïdale — les autres valeurs possible sont : 'square', 'sawtooth', 'triangle' et 'custom'
oscillateur.frequency.value = 2500; // valeur en hertz
oscillateur.start();
```

Le code suivant, qui vient de l'exemple [Violent Theremin](http://mdn.github.io/violent-theremin/), spécifie une valeur maximum pour le gain, et une valeur pour la fréquence:

```js
var largeur = window.innerWidth;
var hauteur = window.innerHeight;

var frequenceMax = 6000;
var volumeMax = 1;

var frequenceInitiale = 3000;
var volumeInitial = 0.5;

// paramètres de l'oscillateur

oscillateur.type = "sine"; // onde sinusoïdale — les autres valeurs possible sont : 'square', 'sawtooth', 'triangle' et 'custom'
oscillateur.frequency.value = frequenceInitiale; // valeur en hertz
oscillateur.start();

noeudGain.gain.value = volumeInitial;
```

On peut aussi réassigner les valeurs de fréquence et de pitch à chaque mouvement de la souris, en utilisant la position pour calculer un pourcentage des valeurs maximum de fréquence et de gain :

```js
// coordonnées de la souris

var positionX;
var positionY;

// récupère les nouvelles coordonnées de la souris quand elle bouge
// puis assigne les nouvelles valeurs de gain et de pitch

document.onmousemove = updatePage;

function updatePage(e) {
  positionX = window.Event
    ? e.pageX
    : e.clientX +
      (document.documentElement.scrollLeft
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft);
  positionY = window.Event
    ? e.pageY
    : e.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);

  oscillateur.frequency.value = (positionX / largeur) * frequenceMax;
  noeudGain.gain.value = (positionY / hauteur) * volumeMax;

  canvasDraw();
}
```

### Simple visualisation avec canvas

On appelle une fonction `canvasDraw()` à chaque mouvement de la souris. Elle dessine une grappe de cercles à l'endroit où se trouve la souris, leur taille et couleur étant basées sur les valeurs de fréquence et de gain.

```js
function aleatoire(number1, number2) {
  return number1 + (Math.floor(Math.random() * (number2 - number1)) + 1);
}

var canvas = document.querySelector(".canvas");
canvas.width = largeur;
canvas.height = hauteur;

var contexteCanvas = canvas.getContext("2d");

function canvasDraw() {
  rX = positionX;
  rY = positionY;
  rC = Math.floor((noeudGain.gain.value / volumeMax) * 30);

  canvasCtx.globalAlpha = 0.2;

  for (i = 1; i <= 15; i = i + 2) {
    contexteCanvas.beginPath();
    var chaineStyle =
      "rgb(" +
      100 +
      i * 10 +
      "," +
      Math.floor((noeudGain.gain.value / volumeMax) * 255);
    chaineStyle +=
      "," +
      Math.floor((oscillateur.frequency.value / frequenceMax) * 255) +
      ")";
    contexteCanvas.fillStyle = chaineStyle;
    contexteCanvas.arc(
      rX + aleatoire(0, 50),
      rY + aleatoire(0, 50),
      rC / 2 + i,
      (Math.PI / 180) * 0,
      (Math.PI / 180) * 360,
      false,
    );
    contexteCanvas.fill();
    contexteCanvas.closePath();
  }
}
```

### Couper le son du theremin

Quand on appuie sur le bouton pour couper le son, la fonction ci-dessous est appelée, qui déconnecte le noeud de gain du noeud de destination, cassant ainsi le graphe de façon à ce qu'aucun son ne soit produit. Appuyer de nouveau sur le bouton a l'effet inverse.

```js
var coupeSon = document.querySelector(".mute");

coupeSon.onclick = function () {
  if (coupeSon.id == "") {
    noeudGain.disconnect(contexteAudio.destination);
    coupeSon.id = "activated";
    coupeSon.innerHTML = "Unmute";
  } else {
    noeudGain.connect(contexteAudio.destination);
    coupeSon.id = "";
    coupeSon.innerHTML = "Mute";
  }
};
```

## Autres options des noeuds

On peut créer un grand nombre d'autres noeuds avec la Web Audio API. De façon générale, ils fonctionnent de façon très similaire à ceux que nous venons de voir: on crée un noeud, le connecte avec d'autres noeuds, et on manipule ensuite ses propriétés et méthodes pour agir sur la source.

Ce document passe en revue quelques-uns des outils et effets disponibles; vous trouverez davantage de détails sur les pages de référence de la {{ domxref("Web_Audio_API") }}.

### Noeuds modulateurs d'onde

On peut créer un noeud modulatur d'onde avec la méthode {{ domxref("AudioContext.createWaveShaper") }} :

```js
var distortion = contexteAudio.createWaveShaper();
```

On associe ensuite à cet objet une forme d'onde définie mathématiquement, qui est appliquée à l'onde de base pour créer un effet de distortion. Ecrire son propre algorithme n'est pas si simple, et pour commencer le mieux est encore d'en chercher un sur le Web. Par exemple, nous avons trouvé celui-ci sur [Stack Overflow](http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion):

```js
function genererCourbeDistortion(amount) {
  var k = typeof amount === "number" ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for (; i < n_samples; ++i) {
    x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}
```

L'exemple suivant, qui vient de [Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic), connecte un noeud de `distortion` à un graphe audio, puis applique l'algorithme de forme d'onde précédent au noeud de distortion :

```js
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);

...

distortion.curve = genererCourbeDistortion(400);
```

### Filtre biquad

Les filtres biquad ont de nombreuses options. Nous montrons ici comment créer un filtre biquad avec la méthode {{domxref("AudioContext.createBiquadFilter")}}.

```js
var filtreBiquad = contexteAudio.createBiquadFilter();
```

Le filtre utilisé dans la démo Voice-change-o-matic est un filtre lowshelf, qui amplifie le son au niveau des basses. Ici on augmente de 25 décibels toutes les fréquences en dessous de 1000.

```js
filtreBiquad.type = "lowshelf";
filtreBiquad.frequency.value = 1000;
filtreBiquad.gain.value = 25;
```

## Autres usages de la Web Audio API

La Web Audio API peut avoir bien d'autres applications que la visualisation ou la spatialisation audio (comme gérer la balance d'un son). Nous détaillerons d'autres options dans des articles séparés.
