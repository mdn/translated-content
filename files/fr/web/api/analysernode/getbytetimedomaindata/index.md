---
title: AnalyserNode.getByteTimeDomainData()
slug: Web/API/AnalyserNode/getByteTimeDomainData
translation_of: Web/API/AnalyserNode/getByteTimeDomainData
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

L'exemple suivant montre comment créer simplement un  `AnalyserNode` avec {{domxref("AudioContext")}}, puis utiliser  {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/)  (et en particulier [app.js lignes 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();

  ...

analyseur.fftSize = 2048;
var tailleMemoireTampon = analyseur.frequencyBinCount;
var tableauDonnees = new Uint8Array(tailleMemoireTampon);
analyseur.getByteTimeDomainData(tableauDonnees);

// dessine un oscilloscope de la source audio

function dessiner() {

      dessin = requestAnimationFrame(dessiner);

      analyseur.getByteTimeDomainData(tableauDonnees);

      contexteCanvas.fillStyle = 'rgb(200, 200, 200)';
      contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);

      contexteCanvas.lineWidth = 2;
      contexteCanvas.strokeStyle = 'rgb(0, 0, 0)';

      contexteCanvas.beginPath();

      var largeurBarre = WIDTH * 1.0 / tailleMemoireTampon;
      var x = 0;

      for(var i = 0; i < tailleMemoireTampon; i++) {

        var v = tableauDonnees[i] / 128.0;
        var y = v * HAUTEUR/2;

        if(i === 0) {
          contexteCanvas.moveTo(x, y);
        } else {
          contexteCanvas.lineTo(x, y);
        }

        x += largeurBarre;
      }

      contexteCanvas.lineTo(canvas.width, canvas.height/2);
      contexteCanvas.stroke();
    };

    dessiner();
```

## Paramètres

- array
  - : Le tableau {{domxref("Uint8Array")}} dans lequel les données temporelles seront copiées.

## Spécifications

| Spécification                                                                                                                                                        | Statut                               | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AnalyserNode-getByteTimeDomainData-void-Uint8Array-array', 'getByteTimeDomainData()')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AnalyserNode.getByteTimeDomainData")}}

## See also

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
