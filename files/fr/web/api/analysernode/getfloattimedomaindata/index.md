---
title: AnalyserNode.getFloatTimeDomainData()
slug: Web/API/AnalyserNode/getFloatTimeDomainData
---

{{ APIRef("Web Audio API") }}

La méthode **`getFloatTimeDomainData()`** de l'interface {{ domxref("AnalyserNode") }} copie les données de forme d'onde ou du domaine temporel, dans un tableau {{domxref("Float32Array")}} passé en paramètre.

Si le tableau a moins d'éléments que la propriété {{domxref("AnalyserNode.fftSize")}}, les données en excès sont supprimées. S'il a davantage d'éléments, les éléments non utilisés sont ignorés.

## Syntaxe

```js
var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();

// La taille du tableau Float32Array doit correspondre à la valeur de la propriété fftSize
var tableauDonnees = new Float32Array(analyseur.fftSize);

// remplit le tableau Float32Array avec les données renvoyées par la méthode getFloatTimeDomainData()
analyseur.getFloatTimeDomainData(tableauDonnees);
```

### Renvoie

Un tableau {{domxref("Float32Array")}}.

## Exemple

L'exemple suivant montre comment créer simplement un `AnalyserNode` avec {{domxref("AudioContext")}}, puis utiliser {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/) (et en particulier [app.js lignes 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();

  ...

analyseur.fftSize = 1024;
var tailleMemoireTampon = analyseur.fftSize;
console.log(tailleMemoireTampon);
var tableauDonnees = new Float32Array(tailleMemoireTampon);

contexteCanvas.clearRect(0, 0, LARGEUR, HAUTEUR);

function dessiner() {
  dessin = requestAnimationFrame(dessiner);
  analyseur.getFloatTimeDomainData(tableauDonnees);

  contexteCanvas.fillStyle = 'rgb(200, 200, 200)';
  contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);
  contexteCanvas.lineWidth = 2;
  contexteCanvas.strokeStyle = 'rgb(0, 0, 0)';
  contexteCanvas.beginPath();

  var largeurTranche = LARGEUR * 1.0 / tailleMemoireTampon;
  var x = 0;

  for(var i = 0; i < tailleMemoireTampon; i++) {
    var v = tableauDonnees[i] * 200.0;
    var y = HAUTEUR/2 + v;

    if(i === 0) {
      contexteCanvas.moveTo(x, y);
    } else {
      contexteCanvas.lineTo(x, y);
    }
    x += largeurTranche;
  }

  contexteCanvas.lineTo(canvas.width, canvas.height/2);
  contexteCanvas.stroke();
};

dessiner();
```

## Paramètres

- array
  - : Un tableau {{domxref("Float32Array")}} dans lequel seront copiées les données du domaine temporel.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
