---
title: Web Audio API
slug: Web/API/Web_Audio_API
translation_of: Web/API/Web_Audio_API
---
La Web Audio API propose un système puissant et flexible pour contrôler les données audio sur internet. Elle permet notamment de sélectionner des sources audio (microphone, flux media), d'y ajouter des effets, de créer des visualisations, d'appliquer des effets de spatialisation (comme la balance), etc.

## Concepts et usages

La Web Audio API effectue des opérations dans un **contexte audio**; elle a été conçue pour supporter le **routing modulaire**. Les opérations audio basiques sont réalisées via des **noeuds audio** reliés entre eux pour former un **graphe de routage audio**. Plusieurs sources - avec différents types d'agencements de canaux - peuvent être supportées, même dans un seul contexte. Ce design modulaire et flexible permet de créer des fonctions audio complexes avec des effets dynamiques.

Les noeuds audio sont reliés au niveau de leurs entrées et sorties, formant des chaînes ou des réseaux simples. Il peut y avoir une ou plusieurs sources. Les sources fournissent des tableaux d'intensités sonores (échantillons), souvent plusieurs dizaines de milliers par seconde. Ceux-ci peuvent être calculées mathématiquement (avec un {{domxref("OscillatorNode")}}), ou peuvent provenir de fichiers sons ou vidéos (comme {{domxref("AudioBufferSourceNode")}} ou {{domxref("MediaElementAudioSourceNode")}}) ou de flux audio ({{domxref("MediaStreamAudioSourceNode")}}). En réalité, les fichiers sons sont eux-même des enregistrements d'intensités sonores, qui viennent de microphones ou d'instruments électriques, et sont mixés dans une seule onde complexe.

Les sorties de ces noeuds peuvent être liées aux entrées d'autres noeuds, qui mixent ces flux d'échantillons sonores ou les séparent en différents flux. Une modification courante est la multiplications des échantillons par une valeur afin d'en augmenter ou diminuer le volume sonore (comme c'est le cas pour le {{domxref("GainNode")}}). Le son est ensuite lié à une destination ({{domxref("AudioContext.destination")}}), qui l'envoie aux enceintes ou au casque audio. Cette dernière connexion n'est utile que si le son doit être entendu.

Un processus de développement typique avec web audio ressemble à ceci :

- Création d'un contexte audio
- Dans ce contexte, création des sources — comme `<audio>`, oscillator, stream
- Création de noeuds d'effets, comme la réverbération, les filtres biquad, la balance, le compresseur
- Choix de la sortie audio (appelée destination), par exemple les enceintes du système
- Connection des sources aux effets, et des effets à la destination

![Un diagramme de boîte avec une boîte extérieure intitulée contexte audio et trois boîtes à l'intérieur intitulées source, effets et destination. Les trois boîtes intérieures ont des flèches qui pointent de la gauche vers la droite, indiquant le sens du flux de l'information audio.](audio-context_.png)

Le timing est contrôlé avec une grande précision et une latence faible, ce qui permet aux développeurs d'écrire un code qui réagit précisément aux événements et qui est capable de traiter des échantillons précis, même avec un taux d'échantillonnage élevé. Cela permet d'envisager des applications telles que des boîtes à rythme ou des séquenceurs.

La Web Audio API permet également de contrôler la _spatialisation_ du son. En utilisant un système basé sur le modèle _émetteur - récepteur,_ elle permet le contrôle de la balance ainsi que la gestion de l'atténuation du son en fonction de la distance, ou effet doppler, induite par un déplacement de la source sonore (ou de l'auditeur).

> **Note :** Vous pouvez lire davantage de détails sur l'API <i lang="en">Web Audio</i> en vous rendant sur notre article [Les concepts de base de l'API <i lang="en">Web Audio</i>](/fr/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API).

## Interface de la Web Audio API

La Web Audio API expose 28 interfaces avec des événements associés, classés selon leur fonction en 9 catégories.

### Définition du graphe audio

Conteneurs et définitions qui donnent sa forme au graphe audio

- {{domxref("AudioContext")}}
  - : Un objet **`AudioContext`** désigne un graphe de traitement audio construit à partir de modules reliés entre eux, chacun représenté par un noeud audio ({{domxref("AudioNode")}}). Le contexte audio contrôle la création des noeuds qu'il contient, ainsi que l'exécution du traitement audio, et du décodage. Il est nécessaire de créer un `AudioContext` avant de faire quoi que ce soit d'autre, puisque tout se passe dans un contexte.
- {{domxref("AudioNode")}}
  - : Un objet **`AudioNode`** est un module de traitement audio, tel qu'une *source audio* (c'est-à-dire un élément HTML {{HTMLElement("audio")}} ou {{HTMLElement("video")}}), une *destination audio*, un module de traitement intermédiaire (par exemple un filtre {{domxref("BiquadFilterNode")}}), ou un contrôle du volume {{domxref("GainNode")}}).
- {{domxref("AudioParam")}}
  - : Un objet **`AudioParam`** est un paramètre audio, qui est lié à un {{domxref("AudioNode")}}. On peut lui assigner une valeur ou un changement de valeur, que l'on peut programmer à un moment spécifique et/ou selon un motif particulier.
- {{event("ended_(Web_Audio)", "ended")}} (event)
  - : L'évènement `ended` est diffusé lorsque la lecture s'arrête en arrivant à la fin d'un media.

### Définition des sources audio

- {{domxref("OscillatorNode")}}
  - : Un objet **`OscillatorNode`** est un module de traitement audio qui génère la création d'une onde sinusoïdale d'une certaine fréquence.
- {{domxref("AudioBuffer")}}
  - : Un objet **`AudioBuffer`** est un petit morceau de contenu audio monté en mémoire. Il peut être créé à partir d'un fichier audio avec la méthode {{ domxref("AudioContext.decodeAudioData()") }}, ou à partir de données brutes en utilisant {{ domxref("AudioContext.createBuffer()") }}. Une fois décodé sous cette forme, la source audio peut être placée dans un {{ domxref("AudioBufferSourceNode") }}.
- {{domxref("AudioBufferSourceNode")}}
  - : Un objet **`AudioBufferSourceNode`** est une source audio composée de données audio montées en mémoire dans un {{domxref("AudioBuffer")}}. C'est un {{domxref("AudioNode")}} qui se comporte comme une source audio.
- {{domxref("MediaElementAudioSourceNode")}}
  - : Un objet **`MediaElementAudio.SourceNode`** est une source audio composée d'un élément  HTML5 {{ htmlelement("audio") }} ou {{ htmlelement("video") }}. C'est un {{domxref("AudioNode")}} qui se comporte comme une source audio.
- {{domxref("MediaStreamAudioSourceNode")}}
  - : Un objet **`MediaStreamAudio.SourceNode`** est une source audio composée d'un [WebRTC](/en-US/docs/WebRTC) {{domxref("MediaStream")}} (tel qu'une webcam ou un microphone). C'est un {{domxref("AudioNode")}} qui se comporte comme une source audio.

### Définition des filtres d'effets audio

- {{domxref("BiquadFilterNode")}}
  - : Un objet **`BiquadFilterNode`** est un simple filtre de bas niveau. Il peut s'agir de différents types de filtres, contrôle du volume ou égaliseurs graphiques. Un `BiquadFilterNode` a toujours exactement une entrée et une sortie.
- {{domxref("ConvolverNode")}}
  - : Un objet **`Convolver.Node`** est un {{domxref("AudioNode")}} qui exécute une circonvolution linéaire sur un AudioBuffer donné, souvent utilisé pour créer un effet de réverbération.
- {{domxref("DelayNode")}}
  - : Un objet **`DelayNode`** est une ligne à retard numérique, c'est-à-dire un module de traitement automatique qui provoque un délai entre l'arrivée du son en entrée et sa propagation en sortie.
- {{domxref("DynamicsCompressorNode")}}
  - : Un objet **`DynamicsCompressorNode`** permet un effet de compression, qui réduit le volume des parties les plus fortes du signal de façon à éviter les effets de clipping et la distortion qui peuvent se produire lorsque des sons multiples sont diffusés simultanément.
- {{domxref("GainNode")}}
  - : Un objet **`GainNode`** représente une modification du volume sonore. C'est un module de traitement audio qui provoque l'application d'un *gain* aux données récupérées en entrée avant leur propagation vers la sortie.
- {{domxref("WaveShaperNode")}}
  - : Un objet **`WaveShaperNode`** représente une distortion non linéaire. C'est un {{domxref("AudioNode")}} qui utilise une courbe pour appliquer au signal une distortion de mise en forme des ondes. En dehors de l'effet de distortion évident, il est souvent utilisé pour donner un caractère plus chaleureux au son.
- {{domxref("PeriodicWave")}}
  - : Un objet {{domxref("PeriodicWave")}} est utilisé pour définir une forme d'onde périodique qui peut être utilisée pour façonner la sortie d'un {{ domxref("OscillatorNode") }}.

### Définition des destinations audio

Une fois que le signal audio a été traité, ces interfaces définissent sa destination.

- {{domxref("AudioDestinationNode")}}
  - : Un noeud **`AudioDestinationNode`** représente la destination finale d'une source audio source dans un contexte donné — en général les enceintes du matériel.
- {{domxref("MediaStreamAudioDestinationNode")}}
  - : Un noeud **`MediaStreamAudio.DestinationNode`** représente une destination audio constituée d'un {{domxref("MediaStream")}} [WebRTC](/en-US/docs/WebRTC) à une seule piste `AudioMediaStreamTrack`; il peut être utilisé de façon similaire à un {{domxref("MediaStream")}} obtenu avec {{ domxref("Navigator.getUserMedia") }}. C'est un {{domxref("AudioNode")}} qui se comporte comme une destination audio.

### Analyse des données et visualisation

- {{domxref("AnalyserNode")}}
  - : Un objet **`AnalyserNode`** fournit en temps réel des informations concernant la fréquence et le temps, afin de les analyser et les visualiser.

### Division et fusion des pistes audio

- {{domxref("ChannelSplitterNode")}}
  - : Un noeud **`ChannelSplitterNode`** prend en entrée une source audio et sépare ses différentes pistes en une série de sorties *mono*.
- {{domxref("ChannelMergerNode")}}
  - : Un noeud **`ChannelMergerNode`** réunit différentes entrées mono en une seule sortie. Chaque entrée devient une des pistes de la sortie unique.

### Spatialisation audio

- {{domxref("AudioListener")}}
  - : Un objet **`AudioListener`** représente la position et l'orientation de l'unique personne écoutant la scene audio utilisée dans la spatialisation audio.
- {{domxref("PannerNode")}}
  - : Un noeud **`PannerNode`** représente le comportement d'un signal dans l'espace. C'est un module de traitement audio qui décrit sa position avec des coordonnées cartésiennes fondées sur la règle de la main droite; ses mouvements utilisent un vecteur de vélocité et sa directionnalité un cône de direction.

### Traitement audio avec JavaScript

> **Note :** Au jour de la publication de la spécification Web Audio API le 29 août 2014, ces fonctionnalités sont dépréciées, et seront bientôt remplacées par {{ anch("Audio_Workers") }}.

- {{domxref("ScriptProcessorNode")}}
  - : Un noeud **`ScriptProcessorNode`** permet de générer, traiter ou analyser du son avec JavaScript. C'est un module de traitement audio qui est lié à deux buffers, l'un en entrée, et l'autre en sortie. Un évènement implémentant {{domxref("AudioProcessingEvent")}} est envoyé à l'objet à chaque fois que le buffer d'entrée reçoit de nouvelles données, et le gestionnaire d'évènement prend fin lorsque les nouvelles données ont été communiquées au buffer de sortie.
- {{event("audioprocess")}} (event)
  - : L'évènement `audioprocess` est émis lorsque le buffer d'entrée d'un {{domxref("ScriptProcessorNode")}} de la Web Audio API est prêt à être traité.
- {{domxref("AudioProcessingEvent")}}
  - : L'objet `AudioProcessingEvent` est envoyé aux fonctions de rappel (<i lang="en">callback</i>) qui écoutent l'évènement `audioprocess`.

### Traitement audio hors ligne ou en tâche de fond

Il est possible de traiter et exporter un graphe audio très rapidement en tâche de fond — en l'exportant dans un {{domxref("AudioBuffer")}} plutôt que sur les enceintes du matériel — grâce aux objets suivants.

- {{domxref("OfflineAudioContext")}}
  - : Un objet **`OfflineAudioContext`** est une interface [`AudioContext`](/fr/docs/Web/API/AudioContext) qui représente un graphe de traitement audio construit à partir de nœuds audio. À la différence d'une interface `AudioContext` standard, une interface `OfflineAudioContext` n'exporte pas vraiment le son, mais le génère *aussi vite que possible* dans un buffer.
- {{event("complete")}} (event)
  - : Un évènement `complete` est émis lorsque le rendu d'un {{domxref("OfflineAudioContext")}} est terminé.
- {{domxref("OfflineAudioCompletionEvent")}}
  - : The `OfflineAudioCompletionEvent` est envoyé aux fonctions de callback qui écoutent l'évènement {{event("complete")}} event implements this interface.

### Audio Workers

Les Audio workers offrent la possibilité de traiter le son directement dans le contexte d'un [web worker](/en-US/docs/Web/Guide/Performance/Using_web_workers). En date du 29 August 2014, ils ne sont encore implémentés par aucun navigateur. Lorsqu'ils seront implémentés, ils remplaceront {{domxref("ScriptProcessorNode")}}, et les autres fonctionnalités mentionnées dans la section [Traitement audio avec JavaScript](#Audio_processing_via_JavaScript) ci-avant.

- {{domxref("AudioWorkerNode")}}
  - : Un objet AudioWorkerNode représente un {{domxref("AudioNode")}} qui interagit avec le thread d'un worker pour générer, traiter, ou analyse le son directement.
- {{domxref("AudioWorkerGlobalScope")}}
  - : Un objet `AudioWorkerGlobalScope` est un objet dérivé d'un objet `DedicatedWorkerGlobalScope`. Il représente le contexte d'un worker dans lequel un script de traitement audio est lancé; il est conçu pour permettre la génération, le traitement, et l'analyse de données audio directement avec JavaScript dans le thread d'un worker.
- {{domxref("AudioProcessEvent")}}
  - : UN objet `Event` est transmis aux objets {{domxref("AudioWorkerGlobalScope")}} pour effectuer un traitement audio.

## Objets obsolètes

Les objets suivants étaient définis dans les versions précédentes de la spécification, mais sont maintenant obsolètes et ont été remplacés.

- {{domxref("JavaScriptNode")}}
  - : Utilisé pour le traitement du son directement en Javascript. Cet objet est obsolète, et a été remplacé par {{domxref("ScriptProcessorNode")}}.
- {{domxref("WaveTableNode")}}
  - : Utilisé pour définir une forme d'onde périodique. Cet objet est obsolète, et a été remplacé par {{domxref("PeriodicWave")}}.

## Exemple

Cet exemple montre l'utilisation d'un grand nombre de fonctions Web Audio. La démo est disponible en ligne sur [Voice-change-o-matic](http://mdn.github.io/voice-change-o-matic/) (voir aussi le [code source complet sur Github](https://github.com/mdn/voice-change-o-matic)) —c'est une démo expérimentale d'application pour modifier la voix; baissez le son de vos enceintes pour l'utiliser, au moins au début !

Les lignes qui concernent la Web Audio API sont surlignées; si vous voulez en savoir davantage sur les différentes méthodes, consultez la documentation.

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)(); // définition du contexte audio
// les navigateurs avec un moteur Webkit/blink demandent un préfixe

var voixSelectionnee = document.getElementById("voice"); // case à cocher pour la sélection d'effets de voix
var visualisationSelectionnee = document.getElementById("visual"); // case à cocher pour la sélection d'options de visualisation audio
var silence = document.querySelector('.mute'); // bouton pour couper le son
var renduVisuel; // requestAnimationFrame

var analyseur = contexteAudio.createAnalyser();
var distorsion = contexteAudio.createWaveShaper();
var gainVolume = contexteAudio.createGain();
var filtreAccordable = contexteAudio.createBiquadFilter();

function creerCourbeDistorsion(taille) { // fonction qui crée une forme de courbe qui sera utilisée par le générateur de l'onde de distorsion
  var k = typeof taille === 'number' ? taille : 50,
    nombre_echantillons = 44100,
    courbe = new Float32Array(nombre_echantillons),
    angle = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < nombre_echantillons; ++i ) {
    x = i * 2 / nombre_echantillons - 1;
    courbe[i] = ( 3 + k ) * x * 20 * angle / ( Math.PI + k * Math.abs(x) );
  }
  return courbe;
};

navigator.getUserMedia (
  // contraintes - uniquement audio dans cet exemple
  {
    audio: true
  },

  // callback de succès
  function(flux) {
    source = contexteAudio.createMediaStreamSource(flux);
    source.connect(analyseur);
    analyseur.connect(distorsion);
    distorsion.connect(filtreAccordable);
    filtreAccordable.connect(gainVolume);
    gainVolume.connect(contexteAudio.destination); // connecte les différents noeuds de graphes audio entre eux

    genererVisualisation(flux);
    voiceChange();

  },

  // callback d'erreur
  function(err) {
    console.log("L'erreur GUM suivante a eu lieu : " + err);
  }
);

function genererVisualisation(flux) {
  const LARGEUR = canvas.width;
  const HAUTEUR = canvas.height;

  var parametreVisualisation = visualisationSelectionnee.value;
  console.log(parametreVisualisation);

  if(parametreVisualisation == "sinewave") {
    analyseur.fftSize = 2048;
    var tailleBuffer = analyseur.frequencyBinCount; // la moitié de la valeur FFT (Transformation de Fourier rapide)
    var tableauDonnees = new Uint8Array(tailleBuffer); // crée un tableau pour stocker les données

    canvasCtx.clearRect(0, 0, LARGEUR, HAUTEUR);

    function draw() {

      renduVisuel = requestAnimationFrame(draw);

      analyseur.getByteTimeDomainData(tableauDonnees); // récupère les données de l'onde de forme et les met dans le tableau créé

      canvasCtx.fillStyle = 'rgb(200, 200, 200)'; // dessine une onde dans le canvas
      canvasCtx.fillRect(0, 0, LARGEUR, HAUTEUR);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

      canvasCtx.beginPath();

      var sliceWidth = LARGEUR * 1.0 / tailleBuffer;
      var x = 0;

      for(var i = 0; i < tailleBuffer; i++) {

        var v = tableauDonnees[i] / 128.0;
        var y = v * HAUTEUR/2;

        if(i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };

    draw();

  } else if(parametreVisualisation == "off") {
    canvasCtx.clearRect(0, 0, LARGEUR, HAUTEUR);
    canvasCtx.fillStyle = "red";
    canvasCtx.fillRect(0, 0, LARGEUR, HAUTEUR);
  }

}

function modifierVoix() {
  distorsion.curve = new Float32Array;
  filtreAccordable.gain.value = 0; // reset les effets à chaque fois que la fonction modifierVoix est appelée

  var choixVoix = voixSelectionnee.value;
  console.log(choixVoix);

  if(choixVoix == "distortion") {
    distorsion.curve = creerCourbeDistorsion(400); // applique la distorsion au son en utilisant le noeud d'onde de forme
  } else if(choixVoix == "biquad") {
    filtreAccordable.type = "lowshelf";
    filtreAccordable.frequency.value = 1000;
    filtreAccordable.gain.value = 25; // applique le filtre lowshelf aux sons qui utilisent le filtre accordable
  } else if(choixVoix == "off") {
    console.log("Choix de la voix désactivé"); // ne fait rien, quand l'option off est sélectionnée
  }

}

// écouteurs d'évènements pour les changements de visualisation et de voix

visualisationSelectionnee.onchange = function() {
  window.cancelAnimationFrame(renduVisuel);
  genererVisualisation(flux);
}

voixSelectionnee.onchange = function() {
  modifierVoix();
}

silence.onclick = muterVoix;

function muterVoix() { // allumer / éteindre le son
  if(silence.id == "") {
    gainVolume.gain.value = 0; // gain à 0 pour éteindre le son
    silence.id = "activated";
    silence.innerHTML = "Unmute";
  } else {
    gainVolume.gain.value = 1; // gain à 1 pour allumer le son
    silence.id = "";
    silence.innerHTML = "Mute";
  }
}
```

## Spécifications

| Spécification                            | Statut                               | Commentaire |
| ---------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité des navigateurs

{{Compat("api.AudioContext", 0)}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Visualizations with Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Voice-change-O-matic example](http://mdn.github.io/voice-change-o-matic/)
- [Violent Theremin example](http://mdn.github.io/violent-theremin/)
- [Web audio spatialisation basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialisation_basics)
- [Mixing Positional Audio and WebGL](http://www.html5rocks.com/tutorials/webaudio/positional_audio/)
- [Developing Game Audio with the Web Audio API](http://www.html5rocks.com/tutorials/webaudio/games/)
- [Porting webkitAudioContext code to standards based AudioContext](/en-US/docs/Web/API/Web_Audio_API/Porting_webkitAudioContext_code_to_standards_based_AudioContext)
- [Tones](https://github.com/bit101/tones): a simple library for playing specific tones/notes using the Web Audio API.
- [howler.js](https://github.com/goldfire/howler.js/): a JS audio library that defaults to [Web Audio API](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html) and falls back to [HTML5 Audio](http://www.whatwg.org/specs/web-apps/current-work/#the-audio-element), as well as providing other useful features.
- [Mooog](https://github.com/mattlima/mooog): jQuery-style chaining of AudioNodes, mixer-style sends/returns, and more.

### Guides

- [Les concepts de base de la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Visualizations with Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Web audio spatialisation basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialisation_basics)
- [Porting webkitAudioContext code to standards based AudioContext](/en-US/docs/Web/API/Web_Audio_API/Porting_webkitAudioContext_code_to_standards_based_AudioContext)

### Démos

- [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/)
- [Violent Theremin](http://mdn.github.io/violent-theremin/)

### API

- {{domxref("AnalyserNode")}}
- {{domxref("AudioBuffer")}}
- {{domxref("AudioBufferSourceNode")}}
- {{domxref("AudioContext")}}
- {{domxref("AudioDestinationNode")}}
- {{domxref("AudioListener")}}
- {{domxref("AudioNode")}}
- {{domxref("AudioParam")}}
- {{event("audioprocess")}} (event)
- {{domxref("AudioProcessingEvent")}}
- {{domxref("BiquadFilterNode")}}
- {{domxref("ChannelMergerNode")}}
- {{domxref("ChannelSplitterNode")}}
- {{event("complete")}} (event)
- {{domxref("ConvolverNode")}}
- {{domxref("DelayNode")}}
- {{domxref("DynamicsCompressorNode")}}
- {{event("ended_(Web_Audio)", "ended")}} (event)
- {{domxref("GainNode")}}
- {{domxref("MediaElementAudioSourceNode")}}
- {{domxref("MediaStreamAudioDestinationNode")}}
- {{domxref("MediaStreamAudioSourceNode")}}
- {{domxref("OfflineAudioCompletionEvent")}}
- {{domxref("OfflineAudioContext")}}
- {{domxref("OscillatorNode")}}
- {{domxref("PannerNode")}}
- {{domxref("PeriodicWave")}}
- {{domxref("ScriptProcessorNode")}}
- {{domxref("WaveShaperNode")}}
