---
title: '-moz-image-rect'
slug: Web/CSS/-moz-image-rect
tags:
  - CSS
  - Fonction
  - Non-standard
  - Reference
translation_of: Web/CSS/-moz-image-rect
---
{{Non-standard_header}}{{CSSRef}}

La propriété **`-moz-image-rect`** permet d'utiliser une seule partie d'une image pour un arrière-plan (contrairement à {{cssxref("background-image")}}). On peut ainsi utiliser une image qui regroupe plusieurs _sprites_ à différentes fins, ce qui permet de diminuer le nombre de transfert réseau.

Cette propriété fonctionne de façon analogue à {{cssxref("-moz-image-region")}} qui peut être utilisée pour déterminer la partie d'une image utilisée pour {{cssxref("list-style-image")}} qui met en forme les puces d'une liste. Grâce à `-moz-image-rect`, on peut avoir le même fonctionnement pour n'importe quel arrière-plan CSS.

La syntaxe de cette propriété est similaire à la fonction [`rect()`](</fr/docs/Web/CSS/shape#La_fonction_rect()>) qui génère une valeur de type {{cssxref("&lt;shape&gt;")}}. Les quatre valeurs indiquées font chacune référence au coin supérieur gauche de l'image.

## Syntaxe

    -moz-image-rect({{cssxref("&lt;uri&gt;")}}, top, right, bottom, left);

### Valeurs

- {{cssxref("&lt;uri&gt;")}}
  - : L'URI de l'image dont on veut obtenir une portion.
- `top`
  - : La coordonnée du bord haut de l'image, définie comme un entier ({{cssxref("&lt;integer&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) à partir du coin supérieur gauche.
- `right`
  - : La coordonnée du bord droit de l'image, définie comme un entier ({{cssxref("&lt;integer&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) à partir du coin supérieur gauche.
- `bottom`
  - : La coordonnée du bord inférieur de l'image, définie comme un entier ({{cssxref("&lt;integer&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) à partir du coin supérieur gauche.
- `left`
  - : La coordonnée du bord gauche de l'image, définie comme un entier ({{cssxref("&lt;integer&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) à partir du coin supérieur gauche.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans cet exemple, on charge une image qu'on découpe en quatre zones pour dessiner le logo Firefox dans quatre éléments {{HTMLElement("div")}}. Lorsqu'on clique sur le conteneur, cela fait tourner les images entre les blocs.

### CSS

```css
#container {
  width:267px;
  height:272px;
  top:100px;
  left:100px;
  position:absolute;
  font-size:16px;
  text-shadow:white 0px 0px 6px;
  text-align:center;
}

#box1 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 0%, 50%, 50%, 0%);
  width:133px;
  height:136px;
  position:absolute;
}

#box2 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 0%, 100%, 50%, 50%);
  width:133px;
  height:136px;
  position:absolute;
}

#box3 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 50%, 50%, 100%, 0%);
  width:133px;
  height:136px;
  position:absolute;
}

#box4 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 50%, 100%, 100%, 50%);
  width:133px;
  height:136px;
  position:absolute;
}
```

### HTML

```html
<div id="container" onclick="rotate()">
  <div id="box1" style="left:0px;top:0px;">Top left</div>
  <div id="box2" style="left:133px;top:0px;">Top right</div>
  <div id="box3" style="left:0px;top:136px;">Bottom left</div>
  <div id="box4" style="left:133px;top:136px;">Bottom right</div>
</div>
```

### JavaScript

```js
function rotate() {
  var prevStyle = window.getComputedStyle(document.getElementById("box4"), null).getPropertyValue("background-image");

  // Now that we've saved the last one, start rotating

  for (var i=1; i<=4; i++) {
    var curId = "box" + i;

    // Shift the background images

    var curStyle = window.getComputedStyle(document.getElementById(curId), null).getPropertyValue("background-image");
    document.getElementById(curId).style.backgroundImage = prevStyle;
    prevStyle = curStyle;
  }
}
```

Dans ce script, on utilise la méthode {{domxref("window.getComputedStyle()")}} afin de récupérer le style de chaque élément et on le décale à l'élément suivant. On notera qu'avant de commencer ce « défilement », on sauvegarde une version du style de la dernière boîte. En copiant simplement les valeurs de {{cssxref("background-image")}} d'un élément à l'autre lors du clic, on obtient l'effet souhaité.

### Résultat

{{EmbedLiveSample("Exemples","400","400")}}

## Compatibilité des navigateurs

{{Compat("css.types.-moz-image-rect")}}
