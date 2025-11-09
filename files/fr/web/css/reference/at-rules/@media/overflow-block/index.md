---
title: overflow-block
slug: Web/CSS/Reference/At-rules/@media/overflow-block
original_slug: Web/CSS/@media/overflow-block
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`overflow-block`** permet de tester la façon dont l'appareil de sortie gère le contenu qui déborde du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) initial selon l'axe du bloc.

> [!NOTE]
> La propriété `overflow-block` ne détermine pas si un dépassement a lieu&nbsp;; elle indique comment l'appareil gère ce dépassement. En général, sur les écrans dans la plupart des navigateurs, le comportement sera «&nbsp;scroll&nbsp;»&nbsp;: lorsque le contenu dépasse l'espace vertical disponible, l'appareil permet de faire défiler pour accéder au contenu débordant.

## Syntaxe

La caractéristique `overflow-block` est définie avec un mot-clé de la liste suivante&nbsp;:

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
@media (overflow-block: scroll) {
  p {
    color: red;
  }
}
```

### Résultat

{{EmbedLiveSample("exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
