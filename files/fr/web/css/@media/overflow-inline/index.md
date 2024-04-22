---
title: overflow-inline
slug: Web/CSS/@media/overflow-inline
---

{{CSSRef}}

**`overflow-inline`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui indique la façon dont l'appareil d'affichage gère le contenu qui dépasse de la zone d'affichage (_viewport_) dans l'axe logique en ligne (c'est-à-dire le sens correspondant au sens de lecture).

## Syntaxe

La caractéristique `overflow-inline` est définit avec un mot-clé parmi ceux de la liste suivante :

- `none`
  - : Le contenu qui dépasse n'est pas affiché.
- `scroll`
  - : Le contenu qui dépasse peut être visualisé en utilisant une barre de défilement.

## Exemples

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis
  eleifend, fringilla velit ac, aliquam tellus. Vestibulum ante ipsum primis in
  faucibus orci luctus et ultrices posuere cubilia Curae; Nunc velit erat,
  tempus id rutrum sed, dapibus ut urna. Integer vehicula nibh a justo imperdiet
  rutrum. Nam faucibus pretium orci imperdiet sollicitudin. Nunc id facilisis
  dui. Proin elementum et massa et feugiat. Integer rutrum ullamcorper eleifend.
  Proin sit amet tincidunt risus. Sed nec augue congue eros accumsan tincidunt
  sed eget ex.
</p>
```

### CSS

```css
@media (overflow-inline: scroll) {
  p {
    color: red;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
