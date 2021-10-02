---
title: AnalyserNode.frequencyBinCount
slug: Web/API/AnalyserNode/frequencyBinCount
translation_of: Web/API/AnalyserNode/frequencyBinCount
---
{{ APIRef("Web Audio API") }}

La propriété **`frequencyBinCount`** de l'objet [`AnalyserNode`](/fr/docs/Web/API/AnalyserNode) est un nombre entier non signé équivalent à la moitié la taille de la FFT. Il correspond en général au nombre de valeurs que vous aurez à manipuler pour la visualisation.

## Syntaxe

```js
var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();
var tailleMemoireTampon = analyseur.frequencyBinCount;
```

### Valeur

Un nombre entier non signé.

## Example

L'exemple suivant montre comment créer simplement un  `AnalyserNode` avec [`AudioContext`](/fr/docs/Web/API/AudioContext), puis utiliser  [`requestAnimationFrame`](/fr/docs/Web/API/Window/requestAnimationFrame) et [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) pour collecter les données temporelles et dessiner un oscilloscopeen sortie. Pour des exemples plus complets, voir notre démo [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/)  (et en particulier [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();
analyseur.minDecibels = -90;
analyseur.maxDecibels = -10;

  ...

analyseur.fftSize = 256;
var tailleMemoireTampon = analyseur.frequencyBinCount;
console.log(tailleMemoireTampon);
var tableauDonnees = new Uint8Array(tailleMemoireTampon);

contexteCanvas.clearRect(0, 0, LARGEUR, HAUTEUR);

function dessiner() {
  dessin = requestAnimationFrame(dessiner);

  analyseur.getByteFrequencyData(tableauDonnees);

  contexteCanvas.fillStyle = 'rgb(0, 0, 0)';
  contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);

  var largeurBarre = (LARGEUR / tailleMemoireTampon) * 2.5 - 1;
  var hauteurBarre;
  var x = 0;

  for(var i = 0; i < tailleMemoireTampon; i++) {
    hauteurBarre = tableauDonnees[i];

    contexteCanvas.fillStyle = 'rgb(' + (hauteurBarre+100) + ',50,50)';
    contexteCanvas.fillRect(x,HAUTEUR-hauteurBarre/2,largeurBarre,hauteurBarre/2);

    x += largeurBarre;
  }
};

dessiner();
```

## Spécification

| Spécification                                                                                                            | Statut                               | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AnalyserNode-frequencyBinCount', 'frequencyBinCount')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AnalyserNode.frequencyBinCount")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
