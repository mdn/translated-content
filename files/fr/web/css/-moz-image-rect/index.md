---
title: '-moz-image-rect'
slug: Web/CSS/-moz-image-rect
translation_of: Web/CSS/-moz-image-rect
browser-compat: css.types.-moz-image-rect
---
{{Non-standard_header}}{{CSSRef}}

La propriété **`-moz-image-rect`** permet d'utiliser une seule partie d'une image pour un arrière-plan (contrairement à [`background-image`](/fr/docs/Web/CSS/background-image)). On peut ainsi utiliser une image qui regroupe plusieurs _sprites_ à différentes fins, ce qui permet de diminuer le nombre de transfert réseau.

## Syntaxe

```css
-moz-image-rect(url(), top, right, bottom, left);
```

### Valeurs

- [`url()`](/fr/docs/Web/CSS/url())
  - : L'URI de l'image dont on veut obtenir une portion.
- `top`
  - : La coordonnée du bord haut de l'image, définie comme un entier ([`<integer>`](/fr/docs/Web/CSS/integer)) ou un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)) à partir du coin supérieur gauche.
- `right`
  - : La coordonnée du bord droit de l'image, définie comme un entier ([`<integer>`](/fr/docs/Web/CSS/integer)) ou un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)) à partir du coin supérieur gauche.
- `bottom`
  - : La coordonnée du bord inférieur de l'image, définie comme un entier ([`<integer>`](/fr/docs/Web/CSS/integer)) ou un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)) à partir du coin supérieur gauche.
- `left`
  - : La coordonnée du bord gauche de l'image, définie comme un entier ([`<integer>`](/fr/docs/Web/CSS/integer)) ou un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)) à partir du coin supérieur gauche.

## Description

Cette propriété fonctionne de façon analogue à [`-moz-image-region`](/fr/docs/Web/CSS/-moz-image-region) qui peut être utilisée pour déterminer la partie d'une image utilisée pour [`list-style-image`](/fr/docs/Web/CSS/list-style-image) qui met en forme les puces d'une liste. Grâce à `-moz-image-rect`, on peut avoir le même fonctionnement pour n'importe quel arrière-plan CSS.

La syntaxe de cette propriété est similaire à la fonction [`rect()`](/fr/docs/Web/CSS/shape#syntaxe) qui génère une valeur de type [`<shape>`](/fr/docs/Web/CSS/shape). Les quatre valeurs indiquées font chacune référence au coin supérieur gauche de l'image.

## Exemples

Dans cet exemple, on charge une image qu'on découpe en quatre zones pour dessiner le logo Firefox dans quatre éléments [`<div>`](/fr/docs/Web/HTML/Element/div). Lorsqu'on clique sur le conteneur, cela fait tourner les images entre les blocs.

### HTML

```html
<div id="container" onclick="rotate()">
  <div id="box1" style="left:0px; top:0px;">En haut à gauche</div>
  <div id="box2" style="left:133px; top:0px;">En haut à droite</div>
  <div id="box3" style="left:0px; top:136px;">En bas à gauche</div>
  <div id="box4" style="left:133px; top:136px;">En bas à droite</div>
</div>
```

### CSS

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

#box1 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 50%, 50%, 0%);
  width: 133px;
  height: 136px;
  position: absolute;
}

#box2 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 100%, 50%, 50%);
  width: 133px;
  height: 136px;
  position: absolute;
}

#box3 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 50%, 100%, 0%);
  width: 133px;
  height: 136px;
  position: absolute;
}

#box4 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 100%, 100%, 50%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

### JavaScript

```js
function rotate() {
  var prevStyle = window.getComputedStyle(document.getElementById("box4"), null).getPropertyValue("background-image");

  // Récupérer le style du dernier élément, puis faire tourner les images

  for (var i=1; i<=4; i++) {
    var curId = "box" + i;

    // Décaler les images d'arrière-plan
    var curStyle = window.getComputedStyle(document.getElementById(curId), null).getPropertyValue("background-image");
    document.getElementById(curId).style.backgroundImage = prevStyle;
    prevStyle = curStyle;
  }
}
```

Dans ce script, on utilise la méthode [`window.getComputedStyle()`](/fr/docs/Web/API/Window/getComputedStyle) afin de récupérer le style de chaque élément et on le décale à l'élément suivant. On notera qu'avant de commencer ce «&nbsp;défilement&nbsp;», on sauvegarde une version du style de la dernière boîte. En copiant simplement les valeurs de [`background-image`](/fr/docs/Web/CSS/background-image) d'un élément à l'autre lors du clic, on obtient l'effet souhaité.

### Résultat

{{EmbedLiveSample("","400","400")}}

## Specifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les extensions spécifiques à Mozilla pour CSS extensions](/fr/docs/Web/CSS/Mozilla_Extensions)
- [Le module de spécification CSS sur les arrière-plans et bordures](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders)
