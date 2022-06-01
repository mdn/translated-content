---
title: AnalyserNode.getByteFrequencyData()
slug: Web/API/AnalyserNode/getByteFrequencyData
translation_of: Web/API/AnalyserNode/getByteFrequencyData
---
{{ APIRef("Web Audio API") }}

La méthode **`getByteFrequencyData()`** de l'objet [`AnalyserNode`](/fr/docs/Web/API/AnalyserNode) copie les données de fréquence dans le {{domxref("Uint8Array")}} passé en argument.

Si le tableau a moins d'éléments que {{domxref("AnalyserNode.frequencyBinCount")}}, les excédants sont supprimés; s'il en a davantage, les excédants sont ignorés.

## Syntaxe

```js
var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();

// Uint8Array devrait avoir la même taille que frequencyBinCount
var tableauDonnees = new Uint8Array(analyseur.frequencyBinCount);

// remplit le Uint8Array avec les données retournées par la méthode getByteFrequencyData()
analyseur.getByteFrequencyData(tableauDonnees);
```

### Retourne

Un {{domxref("Uint8Array")}}.

## Exemple

L'exemple suivant montre comment créer simplement un  `AnalyserNode` avec [`AudioContext`](/fr/docs/Web/API/AudioContext), puis utiliser  [`requestAnimationFrame`](/fr/docs/Web/API/Window/requestAnimationFrame) et [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/)  (et en particulier [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();

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

  var largeurBarre = (LARGEUR / tailleMemoireTampon) * 2.5;
  var hauteurBarre;
  var x = 0;

  for(var i = 0; i < tailleMemoireTampon; i++) {
    hauteurBarre = tableauDonnees[i];
    
    contexteCanvas.fillStyle = 'rgb(' + (hauteurBarre+100) + ',50,50)';
       contexteCanvas.fillRect(x,HAUTEUR-hauteurBarre/2,largeurBarre,hauteurBarre/2);
       
    x += largeurBarre + 1;
  }
};

dessiner();
```

## Paramètres

- array
  - : Le {{domxref("Uint8Array")}} dans lequel seront copiées les données relatives à la fréquence.

## Spécifications

| Spécification                                                                                                                                                    | Statut                               | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AnalyserNode-getByteFrequencyData-void-Uint8Array-array', 'getByteFrequencyData()')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AnalyserNode.getByteFrequencyData")}}

## Voir aussi

[Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
