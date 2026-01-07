---
title: grid
slug: Web/CSS/Reference/At-rules/@media/grid
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`grid`** permet de tester si le périphérique de sortie utilise un écran basé sur une grille.

La plupart des ordinateurs et smartphones modernes disposent d'écrans matriciels. Les appareils à grille incluent par exemple les terminaux texte uniquement et les téléphones basiques avec une seule police fixe.

## Syntaxe

La caractéristique `grid` est une valeur booléenne (`0` ou `1`) (type {{CSSxRef("CSS_media_queries/Using_media_queries", "&lt;mq-boolean&gt;")}}) qui indique si l'appareil d'affichage fonctionne selon une grille.

## Exemples

### HTML

```html
<p class="unknown">
  Impossible de savoir si l'affichage fonctionne sur une grille. :-(
</p>
<p class="bitmap">L'appareil dispose d'un affichage matriciel.</p>
<p class="grid">L'appareil utilise une grille pour l'affichage !</p>
```

### CSS

```css
:not(.unknown) {
  color: lightgray;
}

@media (grid: 0) {
  .unknown {
    color: lightgray;
  }

  .bitmap {
    color: red;
    text-transform: uppercase;
  }
}

@media (grid: 1) {
  .unknown {
    color: lightgray;
  }

  .grid {
    color: black;
    text-transform: uppercase;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- La règle {{CSSxRef("@media")}}
