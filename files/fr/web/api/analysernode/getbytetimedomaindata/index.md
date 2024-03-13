---
title: AnalyserNode.getByteTimeDomainData()
slug: Web/API/AnalyserNode/getByteTimeDomainData
---

{{ APIRef("Mountain View APIRef Project") }}

La méthode **`getByteTimeDomainData()`** de l'interface {{ domxref("AnalyserNode") }} copie les données de forme d'onde, ou du domaine temporel, dans un tableau {{domxref("Uint8Array")}} passé en paramètre.

Si le tableau a moins d'éléments que la propriété {{domxref("AnalyserNode.fftSize")}}, les données en excès sont supprimées. S'il a davantage d'éléments, les éléments non utilisés sont ignorés.

## Syntaxe

```js
var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();

// La taille du tableau Uint8Array doit correspondre à la valeur de la propriété fftSize
var tableauDonnees = new Uint8Array(analyseur.fftSize);

// remplit le tableau Uint8Array avec les données renvoyées par la méthode getByteTimeDomainData()
analyseur.getByteTimeDomainData(tableauDonnees);
```

### Renvoie

Un tableau {{domxref("Uint8Array")}}.

## Exemple

L'exemple suivant montre comment créer simplement un `AnalyserNode` avec {{domxref("AudioContext")}}, puis utiliser {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/) (et en particulier [app.js lignes 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();

  ...

analyser.fftSize = 2048;
const bufferLength = analyser.fftSize;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// dessine un oscilloscope pour la source audio courante
function draw() {
  drawVisual = requestAnimationFrame(draw);
  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = 'rgb(200, 200, 200)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

  const sliceWidth = WIDTH * 1.0 / bufferLength;
  let x = 0;

  canvasCtx.beginPath();
  for(var i = 0; i < bufferLength; i++) {
    const v = dataArray[i]/128.0;
    const y = v * HEIGHT/2;

    if(i === 0)
      canvasCtx.moveTo(x, y);
    else
      canvasCtx.lineTo(x, y);

    x += sliceWidth;
  }

  canvasCtx.lineTo(WIDTH, HEIGHT/2);
  canvasCtx.stroke();
};

draw();
```

## Paramètres

- array
  - : Le tableau {{domxref("Uint8Array")}} dans lequel les données temporelles seront copiées.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
