---
title: Redimensionner les images d'arrière-plan avec background-size
slug: Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images
l10n:
  sourceCommit: 70b1b8ac18d3e3346645d4ee5155f654c83d96e0
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) [`background-size`](/fr/docs/Web/CSS/background-size) permet d'ajuster la taille des images utilisées en arrière-plan et de remplacer le comportement par défaut qui consiste à créer une mosaïque répétant l'image à sa taille normale en indiquant une hauteur et/ou une largeur pour l'image. Il est ainsi possible d'agrandir ou de rapetisser l'image.

## Répéter une grande image

Prenons une grande image, ici le logo de Firefox aux dimensions 2982x2808 pixels. Imaginons qu'on veuille (pour de mauvaises raisons), obtenir une mosaïque avec quatre exemplaires de cette image dans un élément de 300x300 pixels. Pour cela, on pourra fixer la propriété `background-size` à 150 pixels.

### HTML

```html
<div class="tiledBackground"></div>
```

### CSS

```css
.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

### Résultat

{{EmbedLiveSample("", 340, 340)}}

## Étirer une image

On peut aussi indiquer les dimensions horizontale et verticale de l'image, comme ceci&nbsp;:

### CSS

```css
background-size: 300px 150px;
```

### Résultat

![Le logo étiré](stretched_firefox_logo.png)

## Agrandir une image

À l'inverse, on peut vouloir agrandir une image en arrière-plan. Ici, on passe d'une icône de 32x32 pixels à 300x300 pixels&nbsp;:

### CSS

```css
.square2 {
  background-image: url(favicon.png);
  background-size: 300px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
```

### Résultat

![Logo de MDN agrandi](scaled_mdn_logo.png)

Comme vous pouvez le voir, le CSS est quasi-identique, seul le nom du fichier a été modifié.

## Les valeurs spéciales `contain` et `cover`

En plus des valeurs de longueur (type [`<length>`](/fr/docs/Web/CSS/length)), la propriété [`background-size`](/fr/docs/Web/CSS/background-size) permet d'utiliser valeurs spéciales `contain` et `cover`. Voyons ce qu'ils offrent.

### `contain`

La valeur `contain` indique que, quelle que soit la taille de la boîte englobante, l'image d'arrière-plan devrait être redimensionnée afin que chaque côté soit aussi grand que possible, sans dépasser la taille du conteneur. Redimensionnez l'exemple qui suit pour observer l'effet obtenu.

#### HTML

```html
<div class="bgSizeContain">
  <p>Essayez de redimensionner cet élément !</p>
</div>
```

#### CSS

```css
.bgSizeContain {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: contain;
  width: 160px;
  height: 160px;
  border: 2px solid;
  resize: both;
  overflow: scroll;
}
```

#### Résultat

{{EmbedLiveSample('', 250, 250)}}

### `cover`

La valeur `cover` indique que l'image d'arrière-plan devrait être aussi petite que possible tout en ayant ses deux dimensions supérieures ou égales à celles du conteneur. Vous pouvez redimensionner l'exemple qui suit pour observer l'effet obtenu.

#### HTML

```html
<div class="bgSizeCover">
  <p>Essayez de redimensionner cet élément !</p>
</div>
```

#### CSS

```css
.bgSizeCover {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: cover;
  width: 160px;
  height: 160px;
  border: 2px solid;
  resize: both;
  overflow: scroll;
}
```

#### Résultat

{{EmbedLiveSample('', 250, 250)}}

## Voir aussi

- [`background-size`](/fr/docs/Web/CSS/background-size)
- [`background`](/fr/docs/Web/CSS/background)
- [Redimensionnement des arrières-plans SVG](/fr/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds)
