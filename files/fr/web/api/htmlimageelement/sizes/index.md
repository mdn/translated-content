---
title: "HTMLImageElement : propriété sizes"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

{{APIRef("HTML DOM")}}

La propriété **`sizes`** de l'interface {{DOMxRef("HTMLImageElement")}} permet de définir la largeur de présentation de [l'image](/fr/docs/Web/HTML/Reference/Elements/img) pour chacune d'une liste de [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries), ou `auto` pour les images chargées paresseusement afin de permettre au navigateur de sélectionner automatiquement une image à afficher en fonction de la taille de présentation de l'élément.
Cela permet au navigateur de choisir entre différentes images définies dans l'élément {{DOMxRef("HTMLImageElement/srcset", "srcset")}} pour correspondre à différentes conditions média — même des images avec des orientations ou des rapports d'aspect différents.

La propriété `sizes` reflète l'attribut de contenu [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes) de l'élément `<img>`.
Elle ne peut être présente que lorsque `srcset` utilise des descripteurs de largeur.

## Valeur

Une chaîne de caractères qui peut être le mot-clé `auto` (éventuellement suivi de n'importe quel nombre de _tailles sources_), ou une ou plusieurs _tailles sources_.

Voir l'attribut [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes) dans la référence HTML de l'élément `<img>` pour plus d'informations.

## Exemples

### Sélection d'une image adaptée à la largeur de la fenêtre

Cet exemple montre comment le navigateur utilise l'attribut `sizes` pour sélectionner une image à partir de `srcset` en fonction de la largeur de rendu de l'image à la largeur actuelle de la fenêtre.
Il permet également de voir l'effet du redimensionnement de la fenêtre du navigateur sur l'image chargée.

#### HTML

Pour démontrer l'effet du chargement paresseux, les images doivent être initialement cachées du {{Glossary("visual viewport", "zone d'affichage visuelle")}}, puis défilées dans la vue.
Cela est réalisé en ayant un conteneur {{HTMLElement("div")}} externe `scroll-container` qui contient les conteneurs `spacer` et `demo-wrap`.
L'image est contenue à l'intérieur du conteneur `demo-wrap`, qui est repoussé hors de la zone d'affichage visuelle par la hauteur définie sur le conteneur `spacer`.

L'élément {{HTMLElement("img")}} a les attributs suivants&nbsp;:

- `srcset` définit quatre images et indique qu'elles ont des largeurs de `600px`, `900px`, `1200px` et `1500px`.
- `src` définit l'image qui est utilisée si `srcset` n'est pas pris en charge ou ne peut pas être analysé.
  Nous utilisons la plus grande image dans le `srcset`, car elle est presque toujours mieux réduite que la plus petite image n'est pas agrandie.
- `loading` est `lazy`.
- `sizes` définit la largeur de rendu attendue de l'image à un ensemble de points de rupture de largeur de fenêtre, permettant au navigateur de sélectionner l'image la plus appropriée à partir de `srcset`.

```html
<div id="scroll-container">
  Faites défiler vers le bas pour afficher les images
  <div id="spacer"></div>
  <div id="demo-wrap">
    <div class="img-container" id="resizable">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, (max-width: 1200px) 1200px, 1500px"
          src="1500.png"
          srcset="600.png 600w, 900.png 900w, 1200.png 1200w, 1500.png 1500w"
          alt="Example image" />
      </div>
      <div class="label">
        <strong
          >Largeur du conteneur&nbsp;: <span id="width-label"></span
        ></strong>
      </div>
    </div>
  </div>
</div>
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```css hidden
#scroll-container {
  height: 600px;
  overflow-y: scroll;
  border: 2px solid #cccccc;
}
#spacer {
  height: 620px;
}
#demo-wrap {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 16px;
}
.img-container {
  border: 2px solid #cccccc;
  overflow: hidden;
}
.img-square {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.img-square img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.label {
  font-size: 13px;
  padding: 6px 10px;
  background: whitesmoke;
}
#resizable {
  width: 100%;
}
```

```js hidden
// Logging
const images = document.querySelectorAll(".img-square img");
const widthLabel = document.getElementById("width-label");

function updateWidthLabel() {
  widthLabel.textContent = `${document.getElementById("resizable").offsetWidth}px`;
}

updateWidthLabel();
new ResizeObserver(updateWidthLabel).observe(
  document.getElementById("resizable"),
);

images.forEach((img) => {
  if (img.complete) {
    log(`Déjà en cache : ${img.currentSrc} (${img.offsetWidth}px)`);
  }
  img.addEventListener("load", () => {
    log(`Chargé : ${img.currentSrc} (${img.offsetWidth}px du conteneur)`);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        log(`Entré dans la fenêtre d'affichage : ${img.alt}`);
        observer.unobserve(img);
      }
    });
  },
  {
    root: document.getElementById("scroll-container"),
    rootMargin: "0px",
    threshold: 0.1,
  },
);

images.forEach((img) => observer.observe(img));
```

Le CSS et le JavaScript ne sont pas affichés (si vous souhaitez les examiner, sélectionnez «&nbsp;Exécuter&nbsp;» pour voir l'exemple complet dans le playground interactif).

#### Résultat

L'exemple est mieux {{LiveSampleLink("Sélection d'une image adaptée à la largeur de la fenêtre", "voir dans sa propre fenêtre")}}, afin que vous puissiez ajuster pleinement les tailles, et l'exemple n'est pas limité par son cadre contenant.

1. Faites défiler le cadre pour afficher l'image.
   L'étiquette en bas de l'image montre la largeur actuelle du conteneur.
2. Redimensionnez la fenêtre — vous devriez voir l'image changer aux points de rupture des media queries de l'attribut `sizes`.

   Notez que l'image sélectionnée peut être plus grande que la largeur du conteneur ne le suggère.
   De nombreux écrans, sinon la plupart, ont un [rapport de pixels de l'appareil (DPR)](/fr/docs/Web/API/Window/devicePixelRatio) supérieur à un.
   Pour afficher une image nette à la densité de pixels physique de l'écran, un navigateur multiplie l'indice `sizes` correspondant par le DPR avant de sélectionner à partir de `srcset`.
   Par exemple, sur un écran 2× avec une fenêtre d'affichage d'environ 500px, l'indice correspondant est `600px`, mais le navigateur recherche une image d'environ 1200px et sélectionne `1200.png` comme taille disponible la plus proche, puis la redimensionne pour s'adapter à l'espace disponible.

   > [!NOTE]
   > En conséquence, certaines des images dans le `srcset` peuvent ne pas être accessibles sur un affichage particulier à certains points de rupture, et cela peut dépendre du navigateur.

{{EmbedLiveSample("Sélection d'une image adaptée à la largeur de la fenêtre", "", 600)}}

Le journal fournit des informations lorsque l'évènement `load` se déclenche pour l'image et lorsqu'elle intersecte la fenêtre d'affichage visible.
Notez que l'image est chargée de manière paresseuse, donc l'évènement `load` devrait se déclencher juste avant que l'image n'entre dans la fenêtre d'affichage.

### Sélection automatique d'image pour les images chargées de manière paresseuse

Cet exemple montre comment la définition de la valeur `sizes` sur `auto` affecte la sélection de l'image à charger à partir de [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) lorsque les éléments {{HTMLElement("img")}} sont chargés de manière paresseuse.
Il permet également de voir l'effet du changement de taille d'un conteneur sur l'image chargée.

#### HTML

Le HTML est similaire à celui de l'exemple précédent, sauf qu'il définit trois éléments {{HTMLElement("img")}} presque identiques, chacun avec un `srcset` indiquant 3 images de `600px`, `400px` et `200px` de large, et avec une valeur `sizes` de `auto`.
Ces éléments sont contraints dans des conteneurs dimensionnés pour sélectionner les différentes images.

```html
<div id="scroll-container">
  Faites défiler vers le bas pour afficher les images
  <div id="spacer"></div>
  <div id="demo-wrap">
    <div class="img-container img-container--sm" id="resizable">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="auto"
          src="600.png"
          srcset="600.png 600w, 400.png 400w, 200.png 200w"
          alt="Image dans un petit conteneur" />
      </div>
      <div class="label">
        <strong>Largeur du conteneur&nbsp;: 100px</strong>
      </div>
    </div>

    <div class="img-container img-container--md">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="auto"
          src="600.png"
          srcset="600.png 600w, 400.png 400w, 200.png 200w"
          alt="Image dans un conteneur moyen" />
      </div>
      <div class="label">
        <strong>Largeur du conteneur&nbsp;: 200px</strong>
      </div>
    </div>

    <div class="img-container img-container--lg">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="auto"
          src="600.png"
          srcset="600.png 600w, 400.png 400w, 200.png 200w"
          alt="Image dans un grand conteneur" />
      </div>
      <div class="label">
        <strong>Largeur du conteneur&nbsp;: 400px</strong>
      </div>
    </div>
  </div>
</div>
```

```html hidden
<div id="controls">
  <label for="slider">Largeur de la première image&nbsp;:</label>
  <input type="range" id="slider" min="100" max="700" value="100" step="1" />
  <input type="number" id="number" min="100" max="700" value="100" step="1" />
  <span>px</span>
</div>
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### CSS

Voici les classes CSS qui définissent la taille des différents conteneurs d'images.

```css hidden
#scroll-container {
  height: 400px;
  overflow-y: scroll;
  border: 2px solid #cccccc;
}
#spacer {
  height: 600px;
}
#demo-wrap {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 16px;
}
.img-container {
  border: 2px solid #cccccc;
  overflow: hidden;
}
.img-square {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.img-square img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.label {
  font-size: 13px;
  padding: 6px 10px;
  background: whitesmoke;
}
```

```css hidden
#controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
#number {
  width: 60px;
}
```

```css
.img-container--sm {
  width: 100px;
}
.img-container--md {
  width: 200px;
}
.img-container--lg {
  width: 400px;
}
```

```js hidden
const slider = document.getElementById("slider");
const number = document.getElementById("number");
const resizable = document.getElementById("resizable");
const resizableImg = resizable.querySelector("img");
const resizableLabel = resizable.querySelector(".label strong");

function setSize(px) {
  px = Math.min(700, Math.max(100, px));
  resizable.style.width = `${px}px`;
  resizableImg.sizes = `${px}px`; // mettre à jour sizes afin que le navigateur puisse choisir un nouveau candidat srcset
  resizableLabel.textContent = `${px}px`;
  slider.value = px;
  number.value = px;
}

slider.addEventListener("input", () => setSize(slider.valueAsNumber));
number.addEventListener("input", () => setSize(number.valueAsNumber));

// Logging
const images = document.querySelectorAll(".img-square img");

images.forEach((img) => {
  if (img.complete) {
    log(`Déjà mis en cache : ${img.currentSrc} (${img.offsetWidth}px)`);
  }
  img.addEventListener("load", () => {
    log(`Chargé : ${img.currentSrc} (${img.offsetWidth}px du conteneur)`);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        log(`Entré dans la zone visible : ${img.alt}`);
        observer.unobserve(img);
      }
    });
  },
  {
    root: document.getElementById("scroll-container"),
    rootMargin: "0px",
    threshold: 0.1,
  },
);

images.forEach((img) => observer.observe(img));
```

Le reste du CSS et le JavaScript qui alimentent le curseur, la journalisation, etc., ne sont pas affichés (si vous souhaitez les examiner, sélectionnez «&nbsp;Exécuter&nbsp;» pour voir l'exemple complet dans le terrain de jeu interactif).

#### Résultat

Faites défiler le cadre pour afficher les trois images.
Le navigateur devrait avoir sélectionné une image différente pour chacune en fonction des différentes contraintes de largeur.
Vous pouvez utiliser le curseur pour modifier la taille du conteneur de la première image.
Notez que le navigateur peut ou non sélectionner une nouvelle image à afficher lorsque la taille du conteneur change, car les implémentations ne sont pas tenues de réagir aux changements dynamiques.

{{EmbedLiveSample("Sélection automatique d'image pour les images chargées de manière paresseuse", "", 600)}}

Le journal fournit des informations lorsque l'évènement `load` se déclenche pour chaque image, et lorsque une image intersecte la zone d'affichage visible.
Notez que les images sont chargées de manière paresseuse, donc l'évènement `load` devrait se déclencher juste avant que l'image n'entre dans la zone d'affichage.
Notez également que l'évènement `load` se déclenche également lorsque vous modifiez la taille du conteneur pour la première image, indiquant quand le navigateur a recalculé la mise en page (pas nécessairement qu'une nouvelle image a été chargée).

### Exemple de blog

Dans cet exemple, une mise en page de type blog est créée, affichant du texte et une image pour laquelle trois points de taille sont définis, selon la largeur de la fenêtre. Trois versions de l'image sont également disponibles, avec leurs largeurs indiquées. Le navigateur utilise toutes ces informations et sélectionne l'image et la largeur qui correspondent le mieux aux valeurs définies.

La façon dont les images sont utilisées peut dépendre du navigateur et de la densité de pixels de l'écran de l'utilisateur·ice.

Des boutons en bas de l'exemple permettent de modifier légèrement la propriété `sizes`, en alternant la plus grande des trois largeurs de l'image entre 40em et 50em.

#### HTML

```html
<article>
  <h1>Un titre incroyable</h1>
  <div class="test"></div>
  <p>
    Ceci est encore plus de contenu incroyable. C'est vraiment spectaculaire. Et
    fascinant. Oh, c'est aussi intelligent et spirituel. Des choses primées,
    j'en suis sûr.
  </p>
  <img
    src="new-york-skyline-wide.jpg"
    srcset="
      new-york-skyline-wide.jpg 3724w,
      new-york-skyline-4by3.jpg 1961w,
      new-york-skyline-tall.jpg 1060w
    "
    sizes="(50em <= width <= 60em) 50em,
              (40em <= width < 50em) 30em,
              (width < 40em) 20em"
    alt="La ligne d'horizon de New York par une belle journée, avec le One World Trade Center au centre." />
  <p>
    Ensuite, il y a encore plus de contenu incroyable à dire ici. Pouvez-vous y
    croire&nbsp;? Je n'en suis pas sûr.
  </p>

  <button id="break40">Dernière largeur&nbsp;: 40em</button>
  <button id="break50">Dernière largeur&nbsp;: 50em</button>
</article>
```

#### CSS

```css
article {
  margin: 1em;
  max-width: 60em;
  min-width: 20em;
  border: 4em solid #880e4f;
  border-radius: 7em;
  padding: 1.5em;
  font:
    16px "Open Sans",
    Verdana,
    Arial,
    Helvetica,
    sans-serif;
}

article img {
  display: block;
  max-width: 100%;
  border: 1px solid #888888;
  box-shadow: 0 0.5em 0.3em #888888;
  margin-bottom: 1.25em;
}
```

#### JavaScript

Le code JavaScript gère les deux boutons qui permettent d'alterner la troisième option de largeur entre 40em et 50em&nbsp;; cela se fait en gérant l'évènement {{DOMxRef("Element.click_event", "click")}} et en utilisant la méthode JavaScript {{JSxRef("String.replace", "replace()")}} pour remplacer la partie concernée de la chaîne `sizes`.

```js
const image = document.querySelector("article img");
const break40 = document.getElementById("break40");
const break50 = document.getElementById("break50");

break40.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/50em,/, "40em,")),
);

break50.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/40em,/, "50em,")),
);
```

#### Résultat

La page est mieux {{LiveSampleLink("Exemple de blog", "affichée dans sa propre fenêtre")}}, afin de pouvoir ajuster pleinement les tailles, et l'exemple n'est pas contraint par son cadre contenant.

1. Activez les outils de développement et changez la largeur de la page — vous devriez voir l'image changer (et sauter en taille) aux points de rupture des requêtes média de tailles&nbsp;: `640px` (`40em`), et `800px` (`50em`).
2. Réglez la largeur entre `50em` (`800px`) et `60em` (`960px`) afin que la dernière requête média soit sélectionnée.
   Ensuite, appuyez alternativement sur chacun des boutons et notez comment la taille de l'image change.

{{EmbedLiveSample("Exemple de blog", "", 1050)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Requêtes média](/fr/docs/Web/CSS/Guides/Media_queries)
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- [Images HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Images réactives](/fr/docs/Web/HTML/Guides/Responsive_images)
- [Utiliser les attributs `srcset` et `sizes`](/fr/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
- La propriété {{DOMxRef("HTMLImageElement.currentSrc")}}
- La propriété {{DOMxRef("HTMLImageElement.src")}}
- La propriété {{DOMxRef("HTMLImageElement.srcset")}}
