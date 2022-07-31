---
title: '-webkit-mask-repeat-y'
slug: Web/CSS/-webkit-mask-repeat-y
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-mask-repeat-y
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-mask-repeat-y`** définit la façon dont une image de masque est répétée verticalement.

```css
/* Valeurs avec un mot-clé */
-webkit-mask-repeat-y: repeat;
-webkit-mask-repeat-y: no-repeat;
-webkit-mask-repeat-y: space;
-webkit-mask-repeat-y: round;

/* Valeurs multiples */
-webkit-mask-repeat-y: repeat, no-repeat, space;

/* Valeurs globales */
-webkit-mask-repeat-y: inherit;
-webkit-mask-repeat-y: initial;
-webkit-mask-repeat-y: unset;
```

## Syntaxe

### Valeurs

- `repeat`
  - : L'image de masque est répétée verticalement.
- `no-repeat`
  - : L'image de masque n'est pas répétée verticalement, seul un exemplaire est dessiné selon l'axe vertical. Le contenu restant sur l'axe vertical pour les éléments masqués n'est pas affiché.
- `space`
  - : L'image est répétée tant que possible sans être rognée. La première et la dernière images sont accolées aux bords bas et haut de l'élément et l'espace restant est réparti entre les copies de l'image. La propriété {{cssxref("mask-position")}} est ignorée sauf si une seule image peut être affichée sans qu'il n'y ait de rognage. On aura uniquement du rognage s'il n'y a pas suffisamment d'espace pour afficher une seule image.
- `round`
  - : L'image est repétée et les différents exemplaires sont tous étirés de la même façon afin qu'il n'y ait pas d'espace entre chaque. Ainsi, une image qui mesure originellement 260px et qui est répétée trois fois pourra être étirée jusqu'à ce que chaque répétition soit haute de 300px, ensuite une autre image sera ajoutée et toutes seront compressées à 225px.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
.exempleun {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-y: repeat;
}

.exempledeux {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-y: no-repeat;
}
```

### Gestion de plusieurs images

On peut définir un style de répétition (`<repeat-style>`) différent pour chacune des images de masque en séparant les valeurs par des virgules :

```css
.exempletrois {
  -webkit-mask-image: url('mask1.png'), url('mask2.png');
  -webkit-mask-repeat-y: repeat, space;
}
```

Chaque image aura la valeur associée, dans le même ordre.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-webkit-mask-repeat-y")}}

## Voir aussi

- {{cssxref("-webkit-mask-repeat")}},
- {{cssxref("-webkit-mask-repeat-x")}}
