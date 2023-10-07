---
title: AnalyserNode.minDecibels
slug: Web/API/AnalyserNode/minDecibels
---

{{ APIRef("Web Audio API") }}

La propriété **`minDecibels`** de l'objet {{ domxref("AnalyserNode") }} est un nombre flottant à double précision représentant la puissance minimum de l'intervalle pour l'analyse des données FFT, pour une conversion vers des valeurs non signées ou des nombres flottants — en d'autres termes, elle spécifie la valeur minimum pour l'intervalle de résultats des méthodes `getFloatFrequencyData()` et `getByteFrequencyData()`.

Sa valeur par défaut est `-100`.

> **Note :** Si une valeur inférieure à `AnalyserNode.minDecibels` est indiquée, une erreur `INDEX_SIZE_ERR` est levée.

## Syntaxe

```js
var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();
analyseur.maxDecibels = -90;
```

### Valeur

Un nombre flottant à double précision.

## Exemple

L'exemple suivant montre comment créer simplement un `AnalyserNode` avec {{domxref("AudioContext")}}, puis utiliser {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/) (et en particulier [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();
analyseur.minDecibels = -90;
analyseur.maxDecibels = -10;

  ...

analyseur.fftSize = 256;
var tailleMemoireTampon = analyseur.frequencyBinCount;
console.log(bufferLength);
var tableauDonnees = new Uint8Array(tailleMemoireTampon);

contexteCanvas.clearRect(0, 0, LARGEUR, HAUTEUR);

function dessiner() {
  dessin = requestAnimationFrame(dessiner);

  analyseur.getByteFrequencyData(tableauDonnees);

  contexteCanvas.fillStyle = 'rgb(0, 0, 0)';
  contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);

  var largeurBarre = (LARGEUR / tailleMemoireTampon) * 2.5;
  var hauteurBarre;
  var x = 0;

  for(var i = 0; i < tailleMemoireTampon; i++) {
    hauteurBarre = tableauDonnees[i];

    canvasCtx.fillStyle = 'rgb(' + (hauteurBarre+100) + ',50,50)';
       canvasCtx.fillRect(x,HEIGHT-hauteurBarre/2,largeurBarre,hauteurBarre/2);

    x += largeurBarre + 1;
  }
};

dessiner();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
