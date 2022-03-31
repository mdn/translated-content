---
title: overflow-block
slug: Web/CSS/@media/overflow-block
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/overflow-block
---
{{CSSRef}}

**`overflow-block`** est une caractéristique média CSS qui indique la façon dont l'appareil d'affichage gère le contenu qui dépasse de la zone d'affichage (_viewport_) dans l'axe logique de bloc (c'est-à-dire le sens perpendiculaire au sens de lecture).

## Syntaxe

La caractéristique `overflow-block` est définie avec un mot-clé de la liste suivante :

- `none`
  - : Le contenu qui dépasse n'est pas affiché.
- `scroll`
  - : Une barre de défilement est ajoutée afin de pouvoir visualiser le contenu qui dépasse de la zone d'affichage.
- `optional-paged`
  - : Une barre de défilement est ajoutée pour que l'utilisateur puisse voir le contenu ou l'auteur peut utiliser des sauts de page afin que le contenu soit lisible sur une autre page (ex. diaporamas).
- `paged`
  - : Le contenu qui dépasse est entraîné sur la page suivante (ex. livres électroniques, impression).

## Exemples

### HTML

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis eleifend, fringilla velit ac, aliquam tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc velit erat, tempus id rutrum sed, dapibus ut urna. Integer vehicula nibh a justo imperdiet rutrum. Nam faucibus pretium orci imperdiet sollicitudin. Nunc id facilisis dui. Proin elementum et massa et feugiat. Integer rutrum ullamcorper eleifend. Proin sit amet tincidunt risus. Sed nec augue congue eros accumsan tincidunt sed eget ex.</p>
```

### CSS

```css
@media (overflow-block: scroll) {
  p {
    color: red;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                                        | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS4 Media Queries', '#mf-overflow-block', 'overflow-block')}} | {{Spec2('CSS4 Media Queries')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.overflow-block")}}
