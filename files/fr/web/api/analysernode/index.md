---
title: AnalyserNode
slug: Web/API/AnalyserNode
tags:
  - API
  - AnalyserNode
  - Reference
translation_of: Web/API/AnalyserNode
---
{{APIRef("Web Audio API")}}

L' interface **`AnalyserNode`** représente un noeud capable de fournir en temps réel des informations d'analyse de la fréquence et du domaine temporel. C'est un {{domxref("AudioNode")}} qui transmet le flux audio inchangé depuis l'entrée vers la sortie, mais permet de capturer les données générées pour les traiter et/ou les visualiser.

Il a exactement une entrée et une sortie. Le noeud fonctionne même si la sortie n'est pas connectée.

![Sans modifier le flux audio, le nœud permet d'obtenir la fréquence et les données temporelles associées en utilisant une transformée de Fourier rapide.](fttaudiodata_en.svg)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><dfn>Nombre d'entrées</dfn></th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row"><dfn>Nombre de sorties</dfn></th>
      <td><code>1</code> (mais peut ne pas être connectée)</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Mode de comptage des canaux</dfn></th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row"><dfn>Nombre de canaux</dfn></th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row"><dfn>Interprétation du canal</dfn></th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Héritage

L'interface hérite des parents suivants:

{{InheritanceDiagram}}

## Constructeur

- {{domxref("AnalyserNode.AnalyserNode", "AnalyserNode()")}}
  - : Crée une nouvelle instance de l'objet `AnalyserNode`.

## Propriétés

_Hérite des propriétés de son parent._ _{{domxref("AudioNode")}}_.

- {{domxref("AnalyserNode.fftSize")}}
  - : Entier long non signé qui représente la taille de la [FFT](/en-US/docs/) (transformation de Fourier rapide) qui sera utilisé pour déterminer le domaine fréquentiel.
- {{domxref("AnalyserNode.frequencyBinCount")}} {{readonlyInline}}
  - : Entier long non signé égal à la moitié fftSize. C'est en général le nombre de valeurs qu'on manipule pour la visualisation.
- {{domxref("AnalyserNode.minDecibels")}}
  - : Nombre flottant à double précision qui représente la valeur minimale de puissance dans la plage de mise à l'échelle pour l'analyse des données FFT, pour la conversion en octets non signés - cela équivaut à la valeur minimum de la plage de résultats de `getByteFrequencyData()`.
- {{domxref("AnalyserNode.maxDecibels")}}
  - : Nombre flottant à double précision qui représente la valeur maximale de puissance dans la plage de mise à l'échelle pour l'analyse des données FFT, pour la conversion en octets non signés - cela équivaut à la valeur maximum de la plage de résultats de `getByteFrequencyData()`.
- {{domxref("AnalyserNode.smoothingTimeConstant")}}
  - : Nombre flottant à double précision qui représente la moyenne de la trame en cours avec la dernière trame analysée - elle permet de lisser la transition entre les valeurs.

## Méthodes

_Hérite des propriétés de son parent,_ _{{domxref("AudioNode")}}_.

- {{domxref("AnalyserNode.getFloatFrequencyData()")}}
  - : Copie les données de fréquence dans un tableau {{domxref("Float32Array")}} passé en paramètre.

<!---->

- {{domxref("AnalyserNode.getByteFrequencyData()")}}
  - : Copie les données de fréquence dans un tableau {{domxref("Uint8Array")}} passé en paramètre.
- {{domxref("AnalyserNode.getFloatTimeDomainData()")}}
  - : Copie les données de forme d'onde ou du domaine temporel dans un tableau {{domxref("Float32Array")}} passé en paramètre.

<!---->

- {{domxref("AnalyserNode.getByteTimeDomainData()")}}
  - : Copie les données de forme d'onde ou du domaine temporel dans un tableau {{domxref("Uint8Array")}} passé en paramètre.

## Exemples

> **Note :** Voir [Visualisations avec la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API) pour plus d'informations.

L'exemple suivant montre comment créer simplement un  `AnalyserNode` avec {{domxref("AudioContext")}}, puis utiliser  {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/)  (et en particulier [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();

  ...

analyseur.fftSize = 2048;
var tailleMemoireTampon = analyseur.frequencyBinCount;
var tableauDonnees = new Uint8Array(tailleMemoireTampon);
analyseur.getByteTimeDomainData(tableauDonnees);

// dessine un oscilloscope de la source audio
var canvas = document.getElementById("oscilloscope");
var contexteCanvas = canvas.getContext("2d");

function dessiner() {

      requestAnimationFrame(dessiner);

      analyseur.getByteTimeDomainData(tableauDonnees);

      contexteCanvas.fillStyle = 'rgb(200, 200, 200)';
      contexteCanvas.fillRect(0, 0, WIDTH, HEIGHT);

      contexteCanvas.lineWidth = 2;
      contexteCanvas.strokeStyle = 'rgb(0, 0, 0)';

      contexteCanvas.beginPath();

      var sliceWidth = WIDTH * 1.0 / tailleMemoireTampon;
      var x = 0;

      for(var i = 0; i < tailleMemoireTampon; i++) {

        var v = tableauDonnees[i] / 128.0;
        var y = v * HEIGHT/2;

        if(i === 0) {
          contexteCanvas.moveTo(x, y);
        } else {
          contexteCanvas.lineTo(x, y);
        }

        x += sliceWidth;
      }

      contexteCanvas.lineTo(canvas.width, canvas.height/2);
      contexteCanvas.stroke();
    };

    dessiner();
```

## Spécifications

| Spécification                                                                                        | État                                 | Commentaires |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| {{SpecName('Web Audio API', '#the-analysernode-interface', 'AnalyserNode')}} | {{Spec2('Web Audio API')}} |              |

## Compatibilité navigateurs

{{Compat("api.AnalyserNode")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
