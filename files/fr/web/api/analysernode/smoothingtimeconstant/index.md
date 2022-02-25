---
title: AnalyserNode.smoothingTimeConstant
slug: Web/API/AnalyserNode/smoothingTimeConstant
translation_of: Web/API/AnalyserNode/smoothingTimeConstant
---
{{ APIRef("Web Audio API") }}

La propriété **`smoothingTimeConstant`** de l'interface {{ domxref("AnalyserNode") }} est un nombre flottant à double précision qui représente une moyenne entre le buffer courant et le buffer précédent - elle sert à lisser la transition entre les valeurs.

La valeur est `0.8` par défaut; elle doit être comprise entre `0` et `1`. Lorsqu'elle vaut 0, aucune moyenne n'est effectuée, tandis que la valeur 1 signifie que le chevauchement entre le buffer en cours et le buffer précédent est conséquent lors du calcul des valeurs, ce qui a pour effet d'adoucir le changement lors des appels {{domxref("AnalyserNode.getFloatFrequencyData")}}/{{domxref("AnalyserNode.getByteFrequencyData")}}.

En termes techniques, on applique une [fenêtre de Blackman](http://webaudio.github.io/web-audio-api/#blackman-window) pour lisser les valeurs dans le temps. La valeur par défaut convient à la plupart des cas.

> **Note :** Si la valeur n'est pas comprise entre 0 et 1, une exception `INDEX_SIZE_ERR` est levée.

## Syntaxe

```js
var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();
analyseur.smoothingTimeConstant = 1;
```

### Valeur

Un nombre flottant à double précision.

## Exemple

L'exemple suivant montre comment créer simplement un  `AnalyserNode` avec {{domxref("AudioContext")}}, puis utiliser  {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/)  (et en particulier [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

`Si vou sêtes curieux du fonctionnement de smoothingTimeConstant()`, essayez de cloner l'exemple ci-dessous et d'affecter : `analyser.smoothingTimeConstant = 0;`. Vous verrez que les changements de valeur sont bien plus discordants.

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();
analyseur.minDecibels = -90;
analyseur.maxDecibels = -10;
analyseur.smoothingTimeConstant = 0.85;

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
       contexteCanvas.fillRect(x, HAUTEUR-hauteurBarre/2, largeurBarre, hauteurBarre/2);
       
    x += largeurBarre + 1;
  }
};

dessiner();
```

## Spécifications

| Spécification                                                                                                                        | Statut                               | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AnalyserNode-smoothingTimeConstant', 'smoothingTimeConstant')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AnalyserNode.smoothingTimeConstant")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
