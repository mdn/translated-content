---
title: AnalyserNode.fftSize
slug: Web/API/AnalyserNode/fftSize
translation_of: Web/API/AnalyserNode/fftSize
---
{{ APIRef("Web Audio API") }}

La propriété `fftSize` de l'objet {{ domxref("AnalyserNode") }} est un nombre entier non signé qui représente la taille de la FFT ([transfomation de Fourier rapide](/en-US/docs/)) à utiliser pour déterminer le domaine fréquentiel.

La valeur de la propriété `fftSize` property's doit être une puissance de 2 non nulle située dans l'intervalle compris entre `32` et 32768 ; sa valeur par défaut est `2048`.

> **Note :** Si la valeur n'est pas une puissance de 2, ou si elle ne se trouve pas dans l'intervalle spécifiée, l'exception `INDEX_SIZE_ERR` est levée.

## Syntaxe

```js
var contexteAudio = new AudioContext();
var analyseur = contexteAudio.createAnalyser();
analyseur.fftSize = 2048;
```

### Valeur

Un nombre entier non signé.

## Exemple

L'exemple suivant montre comment créer simplement un  `AnalyserNode` avec {{domxref("AudioContext")}}, puis utiliser  {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} et {{htmlelement("canvas")}} pour collecter les données temporelles et dessiner un oscilloscope en sortie. Pour des exemples plus complets, voir notre démo [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/)  (et en particulier [app.js lines 128–205](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L128-L205)).

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();

  ...

analyseur.fftSize = 2048;
var tailleMemoireTampon = analyseur.fftSize;
var tableauDonnees = new Uint8Array(tailleMemoireTampon);
analyseur.getByteTimeDomainData(tableauDonnees);

// dessine un oscilloscope de la source audio

function dessiner() {

      dessin = requestAnimationFrame(dessiner);
      
      analyseur.getBy
      
      contexteCanvas.
      contexte
      
      contexteCanvas.
      cont
      
      contexteCanvas.beginPa
      
      var largeurTran
      v
      
              for(var i = 0; i < tailleMemo
              
                var v =
             
           
           
                              
                                                                              
          contexteCanvas.lin
    
                             
                                  
                                                         
                                   
                                  c
      contexteCanvas.stroke();
    };
                                                            
    dessiner();
```

## Spécifications

| Spécification                                                                                | Statut                               | Commentaire |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#widl-AnalyserNode-fftSize', 'fftSize')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.AnalyserNode.fftSize")}}

## Voir aussi

- [Utiliser la Web Audio API](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
