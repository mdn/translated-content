---
title: AnalyserNode.getFloatFrequencyData()
slug: Web/API/AnalyserNode/getFloatFrequencyData
---

{{ APIRef("Web Audio API") }}

La méthode **`getFloatFrequencyData()`** de l'interface {{ domxref("AnalyserNode") }} copie les données de fréquence dans un tableau {{domxref("Float32Array")}} passé en paramètre.

Si le tableau a moins d'éléments que la propriété {{domxref("AnalyserNode.frequencyBinCount")}}, les données en excès sont supprimées. S'il a davantage d'éléments, les éléments non utilisés sont ignorés.

## Syntaxe

```js
var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();

// La taille du tableau Float32Array doit correspondre à la valeur de la propriété frequencyBinCount
var tableauDonnees = new Float32Array(analyseur.frequencyBinCount);

// remplit le tableau Uint8Array avec les données renvoyées par la méthode getByteTimeDomainData()
analyseur.getByteTimeDomainData(tableauDonnees);
```

### Paramètres

- `array`
  - : {{domxref("Float32Array")}} dans lequel seront copiées les données de fréquence. Pour tout échantillon silencieux, la valeur est `-Infinity`.

### Valeur de retour

`undefined`.

## Exemple

L'exemple suivant montre comment créer simplement un `AnalyserNode` avec {{domxref("AudioContext")}}, puis utiliser {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/) (et en particulier [app.js lignes 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();

  ...

analyseur.fftSize = 256;
var tailleMemoireTampon = analyseur.frequencyBinCount;
console.log(tailleMemoireTampon);
var tableauDonnees = new Float32Array(tailleMemoireTampon);

contexteCanvas.clearRect(0, 0, LARGEUR, HAUTEUR);

function dessiner() {
  dessin = requestAnimationFrame(dessiner);
  analyseur.getFloatFrequencyData(dataArray);
  contexteCanvas.fillStyle = 'rgb(0, 0, 0)';
  contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);

  var largeurBarre = (LARGEUR / tailleMemoireTampon) * 2.5;
  var hauteurBarre;
  var x = 0;

  for(var i = 0; i < tailleMemoireTampon; i++) {
    hauteurBarre = (tableauDonnees[i] + 140)*2;
    contexteCanvas.fillStyle = 'rgb(' + Math.floor(hauteurBarre+100) + ',50,50)';
    contexteCanvas.fillRect(x, HEIGHT-hauteurBarre/2, largeurBarre, hauteurBarre/2);
    x += largeurBarre + 1;
  }
};

dessiner();
```

## Paramètres

- array
  - : Le tableau {{domxref("Float32Array")}} dans lequel seront copiées les données du domaine fréquentiel.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
