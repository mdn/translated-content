---
title: -moz-image-rect
slug: Web/CSS/Reference/Values/-moz-image-rect
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_Header}}{{Deprecated_Header}}

La valeur [CSS](/fr/docs/Web/CSS) **`-moz-image-rect`** pour {{CSSxRef("background-image")}} permet d'utiliser une portion d'une image plus grande comme arrière-plan.

## Syntaxe

```css
-moz-image-rect(url("my-url"), top, right, bottom, left);
```

### Valeurs

- {{CSSxRef("url_value", "&lt;url&gt;")}}
  - : L'URI de l'image à partir de laquelle extraire la sous-image.
- `top`
  - : Le bord supérieur, défini comme un entier ({{CSSxRef("&lt;integer&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), de la sous-image dans l'image définie.
- `right`
  - : Le bord droit, défini comme un entier ({{CSSxRef("&lt;integer&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), de la sous-image dans l'image définie.
- `bottom`
  - : Le bord inférieur, défini comme un entier ({{CSSxRef("&lt;integer&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), de la sous-image dans l'image définie.
- `left`
  - : Le bord gauche, défini comme un entier ({{CSSxRef("&lt;integer&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), de la sous-image dans l'image définie.

## Description

Cette propriété vous permet, par exemple, d'utiliser différentes parties d'une même image plus grande comme arrière-plans dans différentes parties de votre contenu.

La syntaxe du rectangle est similaire à la fonction [`rect()`](/fr/docs/Web/CSS/Reference/Values/shape#syntaxe) qui génère un type CSS {{CSSxRef("&lt;shape&gt;")}}. Les quatre valeurs sont relatives au coin supérieur gauche de l'image.

## Exemples

Cet exemple charge une image et l'utilise en quatre segments pour dessiner le logo Firefox dans quatre blocs {{HTMLElement("div")}}. Un clic sur leur conteneur fait tourner les quatre segments en permutant les valeurs de la propriété {{CSSxRef("background-image")}} entre les quatre blocs {{HTMLElement("div")}}.

### CSS

Le CSS définit un style de conteneur, puis les styles des quatre boîtes qui composent l'image complète.

Le conteneur ressemble à ceci&nbsp;:

```css
#container {
  width: 267px;
  height: 272px;
  top: 100px;
  left: 100px;
  position: absolute;
  font-size: 16px;
  text-shadow: white 0px 0px 6px;
  text-align: center;
}
```

Ensuite, les quatre boîtes définissant les segments de l'image sont définies. Regardons-les une par une.

```css
#box1 {
  background-image: -moz-image-rect(url("firefox.png"), 0%, 50%, 50%, 0%);
  width: 133px;
  height: 136px;
  left: 0px;
  top: 0px;
  position: absolute;
}
```

Il s'agit du coin supérieur gauche de l'image. Il définit un rectangle contenant le quart supérieur gauche de l'image dans le fichier `firefox.jpg`.

```css
#box2 {
  background-image: -moz-image-rect(url("firefox.png"), 0%, 100%, 50%, 50%);
  width: 133px;
  height: 136px;
  left: 133px;
  top: 0px;
  position: absolute;
}
```

Cela définit le coin supérieur droit de l'image.

Les autres coins suivent un schéma similaire&nbsp;:

```css
#box3 {
  background-image: -moz-image-rect(url("firefox.png"), 50%, 50%, 100%, 0%);
  width: 133px;
  height: 136px;
  left: 0px;
  top: 136px;
  position: absolute;
}
#box4 {
  background-image: -moz-image-rect(url("firefox.png"), 50%, 100%, 100%, 50%);
  width: 133px;
  height: 136px;
  left: 133px;
  top: 136px;
  position: absolute;
}
```

### HTML

On inclut un conteneur avec quatre boîtes&nbsp;:

```html
<div id="container">
  <div id="box1">Coin supérieur gauche</div>
  <div id="box2">Coin supérieur droit</div>
  <div id="box3">Coin inférieur gauche</div>
  <div id="box4">Coin inférieur droit</div>
</div>
```

Cela place les quatre segments de notre image dans une grille de deux par deux. Ces quatre segments sont tous contenus dans un bloc {{HTMLElement("div")}} plus grand dont le but principal est de recevoir les événements de clic et de les transmettre à notre code JavaScript.

### JavaScript

Ce code gère l'événement de clic lorsque le conteneur reçoit un clic de souris.

```js
function rotate() {
  let prevStyle = window
    .getComputedStyle(document.getElementById("box4"), null)
    .getPropertyValue("background-image");

  // Maintenant que nous avons sauvegardé la dernière, on commence la rotation
  for (let i = 1; i <= 4; i++) {
    const curId = `box${i}`;

    // Décaler les images d'arrière-plan
    const curStyle = window
      .getComputedStyle(document.getElementById(curId), null)
      .getPropertyValue("background-image");
    document.getElementById(curId).style.backgroundImage = prevStyle;
    prevStyle = curStyle;
  }
}

document.getElementById("container").addEventListener("click", rotate);
```

Cela utilise {{DOMxRef("window.getComputedStyle()")}} pour obtenir le style de chaque élément, en le décalant vers l'élément suivant. Remarquez qu'avant de commencer, il sauvegarde une copie du style de la dernière boîte puisqu'il sera écrasé par le style du troisième élément. En copiant les valeurs de la propriété {{CSSxRef("background-image")}} d'un élément à l'autre à chaque clic de souris, on obtient l'effet souhaité.

### Aperçu visuel

{{EmbedLiveSample("Exemples", 400, 400)}}

## Spécifications

Ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les extensions CSS Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
