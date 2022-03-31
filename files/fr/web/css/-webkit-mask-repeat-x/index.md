---
title: '-webkit-mask-repeat-x'
slug: Web/CSS/-webkit-mask-repeat-x
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-mask-repeat-x
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-mask-repeat-x`** définit la façon dont une image de masque est répétée horizontalement.

```css
/* Valeurs avec un mot-clé */
-webkit-mask-repeat-x: repeat;
-webkit-mask-repeat-x: no-repeat;
-webkit-mask-repeat-x: space;
-webkit-mask-repeat-x: round;

/* Valeurs multiples */
-webkit-mask-repeat-x: repeat, no-repeat, space;

/* Valeurs globales */
-webkit-mask-repeat-x: inherit;
-webkit-mask-repeat-x: initial;
-webkit-mask-repeat-x: unset;
```

## Syntaxe

### Valeurs

- `repeat`
  - : L'image de masque est répétée horizontalement.
- `no-repeat`
  - : L'image de masque n'est pas répétée horizontalement, seul un exemplaire est dessiné selon l'axe horizontal. Le contenu restant sur l'axe horizontal pour les éléments masqués n'est pas affiché.
- `space`
  - : L'image est répétée tant que possible sans être rognée. La première et la dernière images sont accolées aux bords droit et gauche de l'élément et l'espace restant est réparti entre les copies de l'image. La propriété {{cssxref("mask-position")}} est ignorée sauf si une seule image peut être affichée sans qu'il n'y ait de rognage. On aura uniquement du rognage s'il n'y a pas suffisamment d'espace pour afficher une seule image.
- `round`
  - : L'image est répétée et les différents exemplaires sont tous étirés de la même façon afin qu'il n'y ait pas d'espace entre chaque. Ainsi, une image qui mesure originellement 260px et qui est répétée trois fois pourra être étirée jusqu'à ce que chaque répétition soit large de 300px, ensuite une autre image sera ajoutée et toutes seront compressées à 225px.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
.exempleun {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-x: repeat;
}

.exempledeux {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-x: no-repeat;
}
```

### Gestion de plusieurs images

On peut définir un style de répétition (`<repeat-style>`) différent pour chacune des images de masque en séparant les valeurs par des virgules :

```css
.exempletrois {
  -webkit-mask-image: url('mask1.png'), url('mask2.png');
  -webkit-mask-repeat-x: repeat, space;
}
```

Chaque image aura la valeur associée, dans le même ordre.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-webkit-mask-repeat-x")}}

## Voir aussi

- {{cssxref("-webkit-mask-repeat")}},
- {{cssxref("-webkit-mask-repeat-y")}}
