---
title: overflow-inline
slug: Web/CSS/Reference/At-rules/@media/overflow-inline
original_slug: Web/CSS/@media/overflow-inline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`overflow-inline`** permet de tester la façon dont l'appareil de sortie gère le contenu qui déborde du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) initial selon l'axe en ligne.

> [!NOTE]
> La propriété `overflow-inline` ne détermine pas si un dépassement a lieu&nbsp;; elle indique comment l'appareil gère ce dépassement. En général, sur les écrans dans la plupart des navigateurs, le comportement sera «&nbsp;scroll&nbsp;»&nbsp;: lorsque le contenu dépasse l'espace horizontal disponible, l'appareil permet de faire défiler pour accéder au contenu débordant.

## Syntaxe

La caractéristique `overflow-inline` est définit avec un mot-clé parmi ceux de la liste suivante&nbsp;:

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
