---
title: "Window : propriété devicePixelRatio"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef}}

La propriété **`devicePixelRatio`** de l'interface {{DOMxRef("Window")}} retourne le ratio de la résolution exprimée en _pixels physiques_ par rapport à la résolution exprimée en _pixels CSS_ pour l'appareil d'affichage courant.

Cette valeur peut également être interprétée comme le ratio des tailles de pixels&nbsp;: la taille d'un _pixel CSS_ par rapport à la taille d'un _pixel physique_.
Autrement dit, cela indique au navigateur le nombre de pixels réels qui sont utilisés pour dessiner un seul pixel CSS.

Cela s'avère utile lorsqu'il faut gérer les différences de rendu entre un affichage standard et un affichage HiDPI ou Retina, ces derniers utilisant plus de pixels à l'écran pour dessiner les mêmes objets afin d'avoir une image plus nette.

La méthode {{DOMxRef("Window.matchMedia", "window.matchMedia()")}} peut être utilisée pour vérifier si la valeur de `devicePixelRatio` évolue (ce qui peut arriver si la personne déplace la fenêtre vers un affichage utilisant une densité de pixel différente). Voir [l'exemple qui suit](#surveiller_les_changements_de_résolution_ou_de_niveau_de_zoom).

## Valeur

Une valeur décimale à double précision qui indique le ratio de entre la résolution de l'affichage en pixels physiques et celle en pixels CSS. Lorsque cette propriété vaut 1, cela indique un affichage classique avec 96 DPI.
Les écrans modernes des appareils mobiles — qui offrent des résolutions d'affichage élevées à de petites tailles physiques — donnent souvent une valeur de `devicePixelRatio` supérieure à 2.

## Exemples

### Corriger la résolution dans un élément `<canvas>`

Un élément HTML {{HTMLElement("canvas")}} pourra apparaître flou sur un écran Retina.
Utilisez `window.devicePixelRatio` afin de déterminer la densité de pixel supplémentaire qui peut être ajoutée pour obtenir une image plus nette.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// On définit la taille d'affichage (en pixels CSS).
const size = 200;
canvas.style.width = `${size}px`;
canvas.style.height = `${size}px`;

// On définit la taille réelle en mémoire mise à l'échelle pour tenir
// compte de la densité de pixel supplémentaire
const scale = window.devicePixelRatio; // Passez cette valeur à 1 sur les écrans Retina pour voir un canevas flou.
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);

// On normalise le système de coordonnées pour
// utiliser des pixels CSS.
ctx.scale(scale, scale);

ctx.fillStyle = "#bada55";
ctx.fillRect(10, 10, 300, 300);
ctx.fillStyle = "white";
ctx.font = "18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

const x = size / 2;
const y = size / 2;

const textString = "J'aime les licornes";
ctx.fillText(textString, x, y);
```

![Une comparaison côte à côte de l'effet des différentes valeurs de devicePixelRatio sur un affichage Retina.](devicepixelratio_diff.png)

### Surveiller les changements de résolution ou de niveau de zoom

Dans cet exemple, nous allons utiliser une requête média pour observer lorsque la résolution de l'appareil change afin de vérifier la valeur de `devicePixelRatio` et de gérer les éventuelles mises à jour nécessaires.

#### HTML

Le HTML crée les boîtes contenant les instructions et la boîte `pixel-ratio` qui affichera les informations sur le ratio de pixel courant.

```html
<div class="container">
  <p>
    Cet exemple illustre les effets d'un zooom ou d'un dézoom de la page (mais
    aussi du déplacement de la fenêtre vers un écran avec un autre facteur
    d'échelle) sur la valeur de la propriété
    <code>Window.devicePixelRatio</code>.
  </p>
  <p>Essayez de zoomer et voyez le résultat&nbsp;!</p>
</div>
<div id="sortie"></div>
```

#### CSS

```css
body {
  font:
    22px "Arial",
    sans-serif;
}

#container {
  border: 2px solid #2222dd;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #aa99ff;
}
```

#### JavaScript

La chaîne de caractères `mqString` est définie comme une requête média qui vérifie si la résolution d'affichage actuelle correspond à un nombre spécifique de points de l'appareil par `px`.

La variable `media` est un objet {{DOMxRef("MediaQueryList")}} initialisé avec la chaîne de caractères de la requête média. Lorsque le résultat de l'exécution de `mqString` sur le document change, l'événement `change` de l'objet `media` se déclenche et le code enregistre la nouvelle résolution.

Notez qu'à chaque changement de résolution, l'exemple doit créer une nouvelle requête média basée sur la nouvelle résolution, ainsi qu'une nouvelle instance de `MediaQueryList`.

```js
let supprime = null;
const sortie = document.querySelector("#sortie");

const mettreAJourLeRatioPixel = () => {
  supprime?.();
  const mqString = `(resolution: ${window.devicePixelRatio}dppx)`;
  const media = matchMedia(mqString);
  media.addEventListener("change", mettreAJourLeRatioPixel);
  supprime = () => {
    media.removeEventListener("change", mettreAJourLeRatioPixel);
  };

  sortie.textContent = `devicePixelRatio: ${window.devicePixelRatio}`;
};

mettreAJourLeRatioPixel();
```

#### Résultat

Pour tester l'exemple, essayez de zoomer et de dézoomer la page, et notez la différence dans la valeur enregistrée de `devicePixelRatio`.

{{EmbedLiveSample("Surveiller les changements de résolution ou de niveau de zoom", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries)
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- La caractéristique média CSS {{CSSxRef("@media/resolution")}}
- La propriété CSS {{CSSxRef("image-resolution")}}
