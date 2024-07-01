---
title: "Window : propriété devicePixelRatio"
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: 82ef8b5c50a0045add71f1a06f5be1db781aede4
---

{{APIRef}}

La propriété **`devicePixelRatio`**, rattachée à l'interface [`Window`](/fr/docs/Web/API/Window), renvoie le ratio de la résolution exprimée en _pixels physiques_ par rapport à la résolution exprimée en _pixels CSS_ pour l'appareil d'affichage courant.

Cette valeur peut également être interprétée comme le ratio des tailles de pixels&nbsp;: la taille d'un _pixel CSS_ par rapport à la taille d'un _pixel physique_. Autrement dit, cela indique au navigateur le nombre de pixels réels qui sont utilisés pour dessiner un seul pixel CSS.

Cela s'avère utile lorsqu'il faut gérer les différences de rendu entre un affichage standard et un affichage HiDPI ou Retina, ces derniers utilisant plus de pixels à l'écran pour dessiner les mêmes objets afin d'avoir une image plus nette.

La méthode [`window.matchMedia()`](/fr/docs/Web/API/Window/matchMedia) peut être utilisée pour vérifier si la valeur de `devicePixelRatio` évolue (ce qui peut arriver si la personne déplace la fenêtre vers un affichage utilisant une densité de pixel différente). Voir [l'exemple qui suit](#surveiller_les_changements_de_résolution_ou_de_niveau_de_zoom).

## Valeur

Une valeur décimale à double précision qui indique le ratio de entre la résolution de l'affichage en pixels physiques et celle en pixels CSS. Lorsque cette propriété vaut 1, cela indique un affichage classique avec 96 DPI (ou 76 DPI sur certaines plateformes), et si elle vaut 2, on s'attend à ce que l'affichage soit HiDPI/Retina. D'autres valeurs pourront être renvoyées, notamment dans le cas d'une résolution d'affichage inhabituellement basse ou, plus fréquemment, lorsqu'un écran possède une profondeur de pixel plus élevée que le double de la résolution standard de 96 ou 76 DPI.

## Exemples

### Corriger la résolution dans un élément `<canvas>`

Un élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) pourra apparaître flou sur un écran Retina. `window.devicePixelRatio` pourra être utilisé afin de déterminer la densité de pixel supplémentaire qui peut être ajoutée pour obtenir une image plus nette.

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

// On définit la taille réelle en mémoire
// mise à l'échelle pour tenir compte de la densité
// de pixel supplémentaire
const scale = window.devicePixelRatio; // Passez cette valeur à 1 sur les écrans Retina pour voir un canevas flou.
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);

// On normalise le système de coordonnées pour
// utiliser des pixels CSS.
ctx.scale(scale, scale);

ctx.fillStyle = "#bada55";
ctx.fillRect(10, 10, 300, 300);
ctx.fillStyle = "#ffffff";
ctx.font = "18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

const x = size / 2;
const y = size / 2;

const textString = "J'aime les licornes";
ctx.fillText(textString, x, y);
```

[![Une comparaison côte à côte de l'effet des différentes valeurs de devicePixelRatio sur un affichage Retina.](devicepixelration_diff.jpg)](devicepixelration_diff.jpg)

### Surveiller les changements de résolution ou de niveau de zoom

Dans cet exemple, nous allons utiliser une requête média pour observer lorsque la résolution de l'appareil change afin de vérifier la valeur de `devicePixelRatio` et de gérer les éventuelles mises à jour nécessaires.

#### JavaScript

Le code JavaScript crée la requête média qui surveille la résolution de l'appareil et vérifie la valeur de `devicePixelRatio` à chaque changement.

```js
let remove = null;

const updatePixelRatio = () => {
  if (remove != null) {
    remove();
  }
  let mqString = `(resolution: ${window.devicePixelRatio}dppx)`;
  let media = matchMedia(mqString);
  media.addEventListener("change", updatePixelRatio);
  remove = function () {
    media.removeEventListener("change", updatePixelRatio);
  };

  console.log("devicePixelRatio: " + window.devicePixelRatio);
};
updatePixelRatio();
```

La chaîne de caractères `mqString` correspond à la requête média elle-même. La requête média commence avec `(resolution: 1dppx)` (pour les affichages standard) ou avec `(resolution: 2dppx)` (pour les affichages Retina/HiDPI) et est utilisée pour vérifier si la résolution actuelle de l'affichage correspond à un nombre donné de points par pixel.

La fonction `updatePixelRatio()` récupère la valeur courante de `devicePixelRatio`, puis change le contenu de la propriété [`innerText`](/fr/docs/Web/API/HTMLElement/innerText) de l'élément `pixelRatioBox` en une chaîne de caractères décrivant le ratio comme un pourcentage et comme une valeur numérique brute avec deux chiffres décimaux.

Ensuite, la fonction `updatePixelRatio()` est appelée une fois pour afficher la valeur initiale. Après quoi, la requête média est créée à l'aide de [`matchMedia()`](/fr/docs/Web/API/Window/matchMedia) et [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) est appelée afin de placer `updatePixelRatio()` comme gestionnaire pour l'évènement `change`.

#### HTML

Le HTML crée les boîtes contenant les instructions et la boîte `pixel-ratio` qui affichera les informations sur le ratio de pixel courant.

```html
<div class="container">
  <div class="inner-container">
    <p>
      Cet exemple illustre les effets d'un zooom ou d'un dézoom de la page (mais
      aussi du déplacement de la fenêtre vers un écran avec un autre facteur
      d'échelle) sur la valeur de la propriété
      <code>Window.devicePixelRatio</code>. Essayez de zoomer et voyez le
      résultat !
    </p>
  </div>
  <div class="pixel-ratio"></div>
</div>
```

#### CSS

```css
body {
  font:
    22px arial,
    sans-serif;
}

.container {
  top: 2em;
  width: 22em;
  height: 14em;
  border: 2px solid #22d;
  margin: 0 auto;
  padding: 0;
  background-color: #a9f;
}

.inner-container {
  padding: 1em 2em;
  text-align: justify;
  text-justify: auto;
}

.pixel-ratio {
  position: relative;
  margin: auto;
  height: 1.2em;
  text-align: right;
  bottom: 0;
  right: 1em;
  font-weight: bold;
}
```

#### Résultat

{{EmbedLiveSample("", "100%", 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les requêtes média](/fr/docs/Web/CSS/Media_Queries)
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries)
- [La caractéristique média CSS `resolution`](/fr/docs/Web/CSS/@media/resolution)
- La propriété CSS [`image-resolution`](/fr/docs/Web/CSS/image-resolution)
