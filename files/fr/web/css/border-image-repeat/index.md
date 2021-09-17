---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-image-repeat
---
{{CSSRef}}

La propriété **`border-image-repeat`** définit la façon dont les zones de l'image de bordure sont utilisée pour s'étendre sur chacun des côtés de la bordure. Cette propriété est multi-valuée : une valeur indiquera le comportement pour tous les côtés et deux valeurs indiqueront respectivement le comportement pour les côtés horizontaux et verticaux.

{{EmbedInteractiveExample("pages/css/border-image-repeat.html")}}

## Syntaxe

```css
/* border-image-repeat                      */
/* Une valeur : s'applique à tous les côtés */
border-image-repeat: stretch;

/* border-image-repeat
/* Première valeur : côtés horizontaux */
/* Deuxième valeur : côtés verticaux   */
border-image-repeat: round stretch;

/* Valeurs globales */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: unset;
```

### Valeurs

- `stretch`
  - : Un mot-clé qui indique que la zone de l'image doit être étirée pour remplir l'espace entre les deux bordures.
- `repeat`
  - : Un mot-clé qui indique que la zone de l'image doit être répétée jusqu'à remplir l'espace entre les deux bordures.
- `round`
  - : Un mot-clé qui indique que la zone de l'image doit être répétée jusqu'à remplir l'espace entre les deux bordures. Si on ne peut pas remplir cet espace avec un nombre entier de motifs, ceux-ci seront étirés pour qu'il y ait une répétition entière et que l'espace soit parfaitement rempli.
- `space`
  - : Un mot-clé qui indique que la zone de l'image est répétée afin de remplir la zone entre les deux bordures. Si on ne peut pas remplir exactement la zone avec un nombre entier de motifs, l'espace restant sera répartis entre ces motifs.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
p {
 border-image-source: url("https://mdn.mozillademos.org/files/10470/border.png");
 border-image-slice: 30;
 border-image-width: 20px;
 border-image-repeat: round;
 padding: 40px;
}
```

### HTML

```html
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
  no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

### Résultat

{{EmbedLiveSample('Exemples', '480', '320')}}

## Spécifications

| Spécification                                                                                                    | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-image-repeat', 'border-image-repeat')}} | {{Spec2('CSS3 Backgrounds')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-image-repeat")}}

## Voir aussi

- [L'article de CSS Tricks sur `border-image` (en anglais)](https://css-tricks.com/almanac/properties/b/border-image/)
