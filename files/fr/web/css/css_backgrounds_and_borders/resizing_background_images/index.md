---
title: Mettre à l'échelle des images en arrière-plan
slug: Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images
tags:
  - CSS
  - Guide
  - Intermédiaire
  - Reference
translation_of: Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images
original_slug: Web/CSS/CSS_Backgrounds_and_Borders/Scaling_background_images
---
{{CSSRef}}

La propriété CSS {{cssxref("background-size")}} permet d'ajuster la taille des images utilisées en arrière-plan et de remplacer le comportement par défaut qui consiste à créer un carrelage de l'image à sa pleine grandeur. Il est ainsi possible d'agrandir ou de rapetisser l'image.

## Carreler une image de grande taille

Prenons une image de grande taille (par exemple l'ancien logo de Firefox en 2485x2340px). On souhaite la carreler en quatre copies de 300x300 px, comme dans l'image suivante.

![](logo-quantum.9c5e96634f92.png)

On peut utiliser la feuille de style CSS suivante pour obtenir l'effet voulu :

```css
.square {
  width: 300px;
  height: 300px;
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  border: solid 2px;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
  background-size: 150px;
}
```

On notera que, dans l'exemple précédent, une seule valeur avait été précisée pour {{cssxref("background-size")}} : 150 px. Dans ce cas, cette valeur est utilisée pour la largeur et la hauteur est alors fixée à `auto`.

## Étirer une image

Il est aussi possible de spécifier, respectivement, la largeur et la hauteur de l'image, comme dans l'exemple suivant, où la taille de l'image est imposée à 300x150 px.

```css
background-size: 300px 150px;
```

L'image suivante montre le résultat obtenu.

![Logo de Firefox étité](s.codepen.io_richienb_debug_lonxgp_pnkvygvggyxa.png)

## Agrandir une image

On peut agrandir une image en arrière-plan. À l'image suivante, une favicône de 32x32 px est agrandie à 300x300 px.

![Logo MDN à l'échelle](favicon57.de33179910ae.1.1.png)

```css
.square2 {
  width: 300px;
  height: 300px;
  background-image: url(favicon.png);
  background-size: 300px;
  border: solid 2px;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
```

On remarque que la feuille de style utilisée est identique à la précédente, sauf en ce qui concerne le nom de l'image.

## Valeurs spéciales : `contain` et `cover`

En plus de {{cssxref("&lt;length&gt;")}}, la propriété CSS {{cssxref("background-size")}} permet d'employer deux autres valeurs : `contain` et `cover`.

### `contain`

La valeur `contain` spécifie les dimensions de l'image d'arrière-plan de manière à ce que sa largeur et sa hauteur soient aussi grandes que possible, tout en conservant l'image à l'intérieur de son élément conteneur. Ainsi, l'image ne peut déborder de son élément conteneur.

Essayez de redimensionner la fenêtre de votre navigateur afin de voir la valeur `contain` en action (Votre navigateur doit supporter la mise à l'échelle d'images d'arrière-plan).

{{EmbedLiveSample("contain", "100%", "220")}}

```html
<div class="bgSizeContain">
  <p>Redimensionnez la fenêtre de votre navigateur.</p>
</div>
```

```css
.bgSizeContain {
  height: 200px;
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: contain;
  border: 2px solid darkgray;
  color: #000; text-shadow: 1px 1px 0 #fff;
}
```

### `cover`

La valeur `cover` assure que l'image d'arrière-plan soit aussi petite que possible, tout en maintenant ses dimensions plus grandes ou égales à la taille de l'élément conteneur. L'échelle entre la largeur et la hauteur est maintenue.

{{EmbedLiveSample("cover", "100%", "220")}}

Cet exemple utilise le document HTML et la feuille de style suivants :

```html
<div class="bgSizeCover">
  <p>Redimensionnez la fenêtre de votre navigateur.</p>
</div>
```

```css
.bgSizeCover {
  height: 200px;
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: cover;
  border: 2px solid darkgray;
  color: #000; text-shadow: 1px 1px 0 #fff;
```

## Voir aussi

- {{cssxref("background-size")}}
- {{cssxref("background")}}
