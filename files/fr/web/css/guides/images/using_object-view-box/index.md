---
title: Utiliser la propriété CSS `object-view-box`
short-title: Utiliser object-view-box
slug: Web/CSS/Guides/Images/Using_object-view-box
l10n:
  sourceCommit: ef62db148244eb03c862aa7f1b3865a3f727deaf
---

La propriété {{CSSxRef("object-view-box")}} peut être utilisée pour définir une vue dans les {{Glossary("replaced elements", "éléments remplacés")}}, permettant ainsi d'afficher uniquement une section du contenu remplacé. La sous-section de l'élément affichée peut être présentée en zoom avant, en zoom arrière ou à taille réelle, tout en conservant le {{Glossary("aspect ratio", "rapport d'aspect")}} intrinsèque du contenu. Dans ce guide, nous examinons cette propriété, en la comparant à la propriété similaire {{CSSxRef("object-fit")}}, et explorons son fonctionnement à travers le zoom avant et arrière, ainsi que le panoramique sur un élément.

## Taille intrinsèque, taille extrinsèque et `object-fit`

Chaque élément remplacé a deux tailles&nbsp;; une {{Glossary("extrinsic size", "taille extrinsèque")}} et une {{Glossary("intrinsic size", "taille intrinsèque")}}.

La taille extrinsèque est la dimension de l'élément HTML dans lequel le contenu est rendu en fonction des modèles de boîte et de mise en forme visuelle. Le [modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model/Introduction) et le [modèle de mise en forme visuelle](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model) déterminent la taille des éléments rendus en fonction du contenu, des attributs HTML, des styles appliqués aux éléments et à leurs ancêtres, et de la taille de la fenêtre d'affichage.

La taille intrinsèque est la taille réelle du contenu lui-même&nbsp;; la taille de l'élément lorsqu'aucun style n'est appliqué et sans aucune contrainte de mise en page. Bien que la taille intrinsèque et la taille extrinsèque ne soient pas forcément les mêmes, il est généralement important de maintenir le {{Glossary("aspect ratio", "rapport d'aspect")}} intrinsèque d'un élément remplacé.

## `object-view-box` et `object-fit`

CSS a de nombreuses propriétés de dimensionnement. En ce qui concerne le dimensionnement des éléments remplacés, la propriété {{CSSxRef("object-fit")}} nous permet de contrôler, dans une certaine mesure, la manière dont les éléments remplacés sont rendus dans une boîte définie. Par exemple, dans la capture d'écran suivante, une image de 1200 x 400 est affichée à l'aide d'un élément HTML {{HTMLElement("img")}}. L'élément `<img>` est dimensionné à 400 x 200. Le contenu de l'image est positionné à l'aide de la déclaration `object-fit: none;`.

![Une image illustrant les tailles d'image extrinsèque et intrinsèque&nbsp;; la section centrale de 400 par 200 d'une image beaucoup plus grande de 1200 par 400 est visible dans la zone de boîte de 400 par 200 qui correspond à la taille de l'élément affichant l'image.](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/extrinsic-intrinsic_sizes.jpg)
La propriété `object-view-box` est plus flexible que la propriété `object-fit` et permet de faire davantage de choses. Par exemple, elle peut être utilisée pour recadrer, zoomer et effectuer un panoramique sur les images. La propriété définit la zone visible (zone de boîte), qui détermine quelle partie du contenu afficher et comment l'adapter à la taille extrinsèque. La valeur de la zone de boîte contient un rectangle et sa position par rapport à la zone intrinsèque du contenu, mais _la taille physique de la zone de boîte reste égale à la taille extrinsèque_. La zone de boîte marque la zone du contenu à afficher, puis la zone de contenu est transformée pour correspondre aux dimensions extrinsèques s'adaptant à l'élément HTML.

Dans l'image suivante, nous avons la même image de léopard dans un élément image de 400 x 150. Cependant, cette fois, nous avons utilisé la propriété `object-view-box` pour recadrer la partie de l'image montrant les yeux du léopard.

![L'image du léopard recadrée à l'aide de la propriété object-view-box, avec une zone de boîte de 400px par 150px affichant une section non mise à l'échelle de l'image](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

Dans ce cas, comme les dimensions de l'élément `<img>` et de la zone de boîte définie par la propriété `object-view-box` sont les mêmes, c'est-à-dire 400 x 150 pixels, les rapports d'aspect des deux sont identiques, et l'élément remplacé n'est ni mis à l'échelle ni déformé.

Maintenir le même {{Glossary("aspect ratio", "rapport d'aspect")}} empêche la distorsion de l'image. Avec `object-view-box`, nous pouvons effectuer diverses opérations sur l'image tout en ayant des tailles extrinsèques et de zone de boîte différentes, sans déformer l'élément remplacé lorsqu'il est mis à l'échelle.

## Zoomer en avant et en arrière

En réduisant la taille de la zone de boîte, la zone de l'élément remplacé qui est affichée, l'effet de zoom avant est augmenté, car un contenu plus petit est étiré pour s'adapter aux dimensions de l'élément HTML. La diminution de la taille de la zone de boîte donne un effet de zoom arrière.

Cet exemple montre comment utiliser la propriété `object-view-box` pour zoomer sur une section d'un élément remplacé, à l'intérieur d'un élément HTML de taille statique. Dans ce cas, l'œil du léopard, dans une image très grande, sert de point focal pour l'effet de zoom.

### HTML

Nous incluons un élément HTML {{HTMLElement("img")}} et un élément {{HTMLElement("input")}} de type [`range`](/fr/docs/Web/HTML/Reference/Elements/input/range), avec un {{HTMLElement("label")}} associé. Les dimensions naturelles, ou taille intrinsèque, de l'image originale du léopard sont de `1244px` de large sur `416px` de haut, avec un {{Glossary("aspect ratio", "rapport d'aspect")}} de `3:1`.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="léopard" />
<p>
  <label for="taille-boite">Zoomer&nbsp;: </label>
  <input type="range" id="taille-boite" min="115" max="380" value="150" />
</p>
<output></output>
```

### CSS

Nous définissons une propriété personnalisée `--taille-boite`, qui est utilisée comme hauteur et largeur dans la fonction {{CSSxRef("basic-shape/xywh", "xywh()")}}, créant une zone de boîte carrée avec un rapport d'aspect de `1:1`. Le point de décalage de la zone de boîte, le point focal de notre effet de zoom, est défini à `500px` pour la coordonnée `x` et `30px` pour la coordonnée `y`, ce qui correspond au coin supérieur gauche de l'œil droit du léopard.

```css hidden
input {
  width: 350px;
}

output {
  text-align: center;
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
  display: block;
}

@supports not (object-view-box: none) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'object-view-box'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

```css
img {
  width: 350px;
  height: 350px;
  border: 2px solid red;

  --taille-boite: 150px;
  object-view-box: xywh(500px 30px var(--taille-boite) var(--taille-boite));
}
```

### JavaScript

Nous ajoutons un écouteur d'évènements à la barre de défilement qui met à jour la valeur de la propriété personnalisée `--taille-boite` lorsque l'utilisateur·ice interagit avec elle. Pour augmenter l'effet de zoom avant lorsque la barre de défilement est déplacée vers la droite, la valeur de la barre de défilement est inversée en la soustrayant de `500px`, car la diminution de la taille de la zone de boîte augmente l'effet de zoom avant.

```js
const img = document.querySelector("img");
const zoom = document.getElementById("taille-boite");
const sortie = document.querySelector("output");

function mettreAJour() {
  const size = 500 - zoom.value;
  img.style.setProperty("--taille-boite", `${size}px`);
  sortie.innerText = `object-view-box: xywh(500px 30px ${size}px ${size}px);`;
}

zoom.addEventListener("input", mettreAJour);
mettreAJour();
```

### Résultat

{{EmbedLiveSample("Zoomer en avant et en arrière", "", 480)}}

Déplacez la barre de défilement vers la droite pour augmenter l'effet de zoom avant et vers la gauche pour le réduire. La barre de défilement n'affecte que les dimensions de la zone de boîte, tandis que les valeurs x et y, le point d'origine de la zone de boîte, restent constantes. La taille de l'élément HTML `<img>` reste également constante.

## Faire un panoramique sur une image

Nous pouvons créer un effet de panoramique en changeant les coordonnées de la fenêtre de la zone de boîte, les composants `x` et `y` de la fonction `xywh()`, tout en maintenant la taille de la section visible constante. Par exemple, en maintenant les dimensions de la zone de boîte constantes et en changeant uniquement la position horizontale — le paramètre `x` — nous pouvons créer un effet de panoramique horizontal.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="léopard" />
<p>
  <label for="position">Décalage à gauche&nbsp;: </label>
  <input type="range" id="position" min="0" max="900" value="450" />
</p>
<output></output>
```

```css hidden
input {
  width: 350px;
}

@supports not (object-view-box: none) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'object-view-box'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
output {
  text-align: center;
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
  display: block;
}

img {
  width: 350px;
  height: 350px;

  --position-x: 0;
  object-view-box: xywh(var(--position-x) 30px 350px 350px);
}
```

```js hidden
const img = document.querySelector("img");
const position = document.getElementById("position");
const sortie = document.querySelector("output");

function mettreAJour() {
  img.style.setProperty("--position-x", `${position.value}px`);
  sortie.innerText = `xywh(${position.value}px 30px 350px 350px);`;
}

position.addEventListener("input", mettreAJour);
mettreAJour();
```

{{EmbedLiveSample("Faire un panoramique sur une image", "", 450)}}

Déplacez le curseur. Remarquez comment l'augmentation et la diminution de la valeur `x` de la fonction `xywh()` crée un effet de panoramique.

## Voir aussi

- La propriété {{CSSxRef("object-view-box")}}
- La propriété {{CSSxRef("object-fit")}}
- La propriété {{CSSxRef("object-position")}}
- La propriété {{CSSxRef("background-size")}}
- [Comprendre le rapport d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
