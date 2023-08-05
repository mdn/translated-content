---
title: Visualisations avec la Web Audio API
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
---

L'une des fonctionnalités les plus intéressantes de la Web Audio API est la possibilité d'extraire de la source audio la fréquence, la forme d'onde et d'autres données, qui permettent de créer des visualisations. Cet article explique comment, et fournit quelques exemples basiques.

> **Note :** Vous pouvez trouver des exemples de tous les extraits de the code dans notre démo [Voice-change-O-matic](https://mdn.github.io/voice-change-o-matic/).

## Concepts de base

Pour extraire les données d'une source audio, il faut un {{ domxref("AnalyserNode") }}, que l'on peut créer à l'aide de la méthode {{ domxref("AudioContext.createAnalyser()") }}, par exemple:

```js
var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();
```

Ce noeud est ensuite connecté à la source audio :

```js
source = contexteAudio.createMediaStreamSource(stream);
source.connect(analyseur);
analyseur.connect(distortion);
// etc.
```

> **Note :** il n'est pas nécessaire de connecter la sortie de l'analyseur à un noeud pour qu'il fonctionne, il suffit que l'entrée soit connectée à la source, directement ou via un autre noeud.

L'analyseur va alors capturer les données audio en usant une Transformation de Fourier Rapide (fft) à une certaine fréquence, en fonction de ce qui est spécifié dans la propriété {{ domxref("AnalyserNode.fftSize") }} (la valeur par défaut est 2048).

> **Note :** Vous pouvez aussi spécifier des valeurs de puissance minimum et maximum pour la plage de mise à l'échelle fft, en utilisant {{ domxref("AnalyserNode.minDecibels") }} et {{ domxref("AnalyserNode.maxDecibels") }}, et plusieurs valeurs de transition en utilisant {{ domxref("AnalyserNode.smoothingTimeConstant") }}.

Pour capturer des données, il faut utiliser les méthodes {{ domxref("AnalyserNode.getFloatFrequencyData()") }} et {{ domxref("AnalyserNode.getByteFrequencyData()") }} pour la fréquence, et {{ domxref("AnalyserNode.getByteTimeDomainData()") }} et {{ domxref("AnalyserNode.getFloatTimeDomainData()") }} pour la forme d'onde.

Ces méthodes copient les données dans le tableau passé en paramètre, il faut donc créer un tableau avant de les invoquer. La première produit des nombres flottants à simple précision de 32 bits, qui ne peuvent être stockées dans un simple tableau javascript. Vous devez créer un domxref("Float32Array") }} ou un {{ domxref("Uint8Array") }}, en fonction du type de données que vous traitez.

Par exemple, disons que nous manipulons une fft de fréquence 2048. Nous retournons la valeur {{ domxref("AnalyserNode.frequencyBinCount") }}, qui correspond à la moitié de la fréquence, puis nous appelons la méthode Uint8Array() en passant frequencyBinCount comme argument pour la taille — c'est le nombre de points de données qui seront collectées pour cette fréquence.

```js
analyseur.fftSize = 2048;
var tailleMemoireTampon = analyseur.frequencyBinCount;
var tableauDonnees = new Uint8Array(tailleMemoireTampon);
```

Pour récupérer les données et les copier dans notre tableau, nous appelons ensuite la méthode de notre choix, en passant le tableau comme argument. Par exemple :

```js
analyseur.getByteTimeDomainData(tableauDonnees);
```

Nous avons maintenant les données audio qui correspondent à ce laps de temps capturées dans notre tableau, et pouvons procéder à la visualisation, par exemple en les dessinant dans un élément HTML5 {{ htmlelement("canvas") }}.

Regardons quelques exemples précis.

## Création d'une forme d'onde / oscilloscope

Pour visualiser un oscilloscope (chapeau à [Soledad Penadés](http://soledadpenades.com/) pour le code original sur [Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L123-L167)), nous commençons par suivre la procédure standard décrite dans le paragraphe précédent pour mettre en place le tampon :

```js
analyseur.fftSize = 2048;
var tailleMemoireTampon = analyseur.frequencyBinCount;
var tableauDonnees = new Uint8Array(tailleMemoireTampon);
```

Ensuite nous effaçons ce qui est dessiné sur le canvas , avant le nouvel affichage :

```js
contexteCanvas.clearRect(0, 0, LARGEUR, HAUTEUR);
```

Puis nous définissons la fonction `dessiner()` :

```js
function dessiner() {
```

Dans cette fonction, nous utilisons `requestAnimationFrame()` pour faire boucler la fonction une fois qu'elle a été appelée :

```js
dessin = requestAnimationFrame(dessiner);
```

Ensuite, nous récupérons les données et les passons dans notre tableau :

```js
analyseur.getByteTimeDomainData(tableauDonnees);
```

Nous remplissons le canvas avec une couleur de fond :

```js
contexteCanvas.fillStyle = "rgb(200, 200, 200)";
contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);
```

Nous définissons l'épaisseur et la couleur du trait pour la forme d'onde que nous allons dessiner, et commençons le tracé :

```js
contexteCanvas.lineWidth = 2;
contexteCanvas.strokeStyle = "rgb(0, 0, 0)";

contexteCanvas.beginPath();
```

Pour déterminer la largeur de chacun des segments qui composent la ligne, nous divisons la largeur du canvas par la taille du tableau de données (laquelle est égale à FrequencyBinCount, comme nous l'avons dit plus haut), puis nous définissons une variable x pour stocker la position à laquelle il faut se déplacer pour chaque segment.

```js
var largeurSegment = (LARGEUR * 1.0) / tailleMemoireTampon;
var x = 0;
```

Nous parcourons une boucle, qui définit la position du segment de l'onde pour chaque valeur du tableau: la hauteur (y) est basée sur cette valeur, tandis que la position en x correspond à une largeur de segment supplémentaire à chaque itération :

```js
for (var i = 0; i < tailleMemoireTampon; i++) {
  var v = tableauDonnees[i] / 128.0;
  var y = (v * HAUTEUR) / 2;

  if (i === 0) {
    contexteCanvas.moveTo(x, y);
  } else {
    contexteCanvas.lineTo(x, y);
  }

  x += largeurSegment;
}
```

Finally, quand le tracé de la ligne a atteint le bord droit du canvas, nous l'affichons:

```js
      contexteCanvas.lineTo(canvas.width, canvas.height/2);
      contexteCanvas.stroke();
    };
```

Nous pouvons maintenant appeler la fonction `draw()` que nous venons de définir pour lancer le processus:

```js
dessiner();
```

Ce qui nous donne un affichage de forme d'onde, actualisé plusieurs fois par seconde :

![Une ligne d'oscilloscope noire, illustrant la forme d'onde d'un signal audio](wave.png)

## Création d'un graphique à barres représentant la fréquence

Un autre exemple de visualisation assez simple à créer est le graphique à barres dans le style de Winamp. Il y en a un dans la démo Voice-change-O-matic; regardons comment il est fait.

Tout d'abord, nous mettons de nouveau en place notre analyseur et notre tableau de données, et nous effaçons le contenu du canvas avec `clearRect()`. La seule différence est que la valeur de la propriété fftSize est beaucoup plus petite, de façon à ce que chaque barre soit assez grosse pour ressembler à une barre et non à un fil.

```js
analyseur.fftSize = 256;
var tailleMemoireTampon = analyseur.frequencyBinCount;
console.log(tailleMemoireTampon);
var tableauDonnees = new Uint8Array(tailleMemoireTampon);

canvasCtx.clearRect(0, 0, LARGEUR, HAUTEUR);
```

Ensuite, nous passons à la fonction `dessiner()`, là encore avec une boucle `requestAnimationFrame()` qui efface l'affichage et le met à jour.

```js
    function dessiner() {
      dessin = requestAnimationFrame(dessiner);

      analyseur.getByteFrequencyData(tableauDonnees);

      contexteCanvas.fillStyle = 'rgb(0, 0, 0)';
      contexteCanvas.fillRect(0, 0, LARGEUR, HAUTEUR);
```

A présent nous calculons la largeur d'une barre, à savoir la largeur du canvas divisée par le nombre de barres (par la taille du buffer). Et nous multiplions cette valeur par 2.5, en prévision du fait que la plupart des fréquences ne contiendront pas de son, car les sons que nous entendons se situent dans un intervalle de fréquence plutôt bas. Nous ne voulons pas afficher des barres vides, nous ne gardons donc que celles qui ont une hauteur suffisante.

Nous déclarons une variable `hauteurBarre`, ainsi qu'une variable `x` pour mémoriser la posiiton à laquelle il faudra dessiner la barre.

```js
var largeurBarre = (LARGEUR / tailleMemoireTampon) * 2.5;
var hauteurBarre;
var x = 0;
```

Nous créons maintenant une boucle et itérons sur chaque valeur de `tableauDonnees` : `hauteurBarre` correspond à la valeur du tableau, la couleur de fond est aussi basée sur cette valeur (plus elle est grande plus la barre est lumineuse), et la barre est placée à `x` pixels du bord gauche du canvas, sa largeur est `largeurBarre` et sa hauteur est `hauteurBarre/2` (nous avons finalement décidé de diviser cette valeur par deux pour que les barres rentrent mieux dans le canvas).

La position verticale de la barre est calculée comme tel : `HAUTEUR-hauteurBarre/2`, parce que nous voulons que les barres s'alignent en bas du canvas, et non pas en haut (auquel cas nous aurions positionné la barre à 0).

```js
      for(var i = 0; i < tailleMemoireTampon; i++) {
        hauteurBarre = tableauDonnees[i]/2;

        contexteCanvas.fillStyle = 'rgb(' + (hauteurBarre+100) + ',50,50)';
        contexteCanvas.fillRect(x,HAUTEUR-hauteurBarre/2,largeurBarre,hauteurBarre);

        x += largeurBarre + 1;
      }
    };
```

Là encore, nous invoquons la fonction `dessiner()` pour lancer le processus.

```js
dessiner();
```

Ce code donne le résultat suivant:

![Une série de barres rouges dans un barre-graphe qui illustre l'intensité des différentes fréquences d'un signal audio](bar-graph.png)

> **Note :** Les exemples de cet article montrent l'utilisation de [`AnalyserNode.getByteFrequencyData()`](/fr/docs/Web/API/AnalyserNode/getByteFrequencyData) et [`AnalyserNode.getByteTimeDomainData()`](/fr/docs/Web/API/AnalyserNode/getByteTimeDomainData). Pour des exemples montrant [`AnalyserNode.getFloatFrequencyData()`](/fr/docs/Web/API/AnalyserNode/getFloatFrequencyData) et [`AnalyserNode.getFloatTimeDomainData()`](/fr/docs/Web/API/AnalyserNode/getFloatTimeDomainData), voir notre démo [<i lang="en">Voice-change-O-matic-float-data</i>](https://mdn.github.io/voice-change-o-matic-float-data/) (et son [code source](https://github.com/mdn/voice-change-o-matic-float-data)) — elle est identique à la [<i lang="en">Voice-change-O-matic</i>](https://mdn.github.io/voice-change-o-matic/) originale, à ceci près qu'elle utilise des données à virgule flottante, au lieu de données non signées.
