---
title: inverted-colors
slug: Web/CSS/@media/inverted-colors
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/inverted-colors
---
{{CSSRef}}

**`inverted-colors`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui indique si l'agent utilisateur ou si le système d'exploitation sous-jacent inverse les couleurs.

## Syntaxe

Cette caractéristique est définie avec un des mots-clés parmi ceux qui suivent :

- `none`
  - : Les couleurs sont affichées normalement.
- `inverted`
  - : Les couleurs des pixels de la zone affichée ont été inversées.

## Exemples

### HTML

```html
<p>
  Si vous utilisez les couleurs inversées, ce texte devrait
  être bleu sur blanc (l'inverse de jaune sur noir). Sinon,
  il devrait être rouge sur gris clair.
</p>
<p>
  Si le texte est gris, cela indique que votre navigateur
  ne prend pas en charge la caractéristique média
  `inverted-colors`.
</p>
```

### CSS

```css
p {
  color: gray;
}

@media (inverted-colors: inverted) {
  p {
    background: black;
    color: yellow;
  }
}

@media (inverted-colors: none) {
  p {
    background: #eee;
    color: red;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                            | État                                     | Commentaires                                                      |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------- |
| {{SpecName('CSS5 Media Queries', '#inverted', 'inverted-colors')}} | {{Spec2('CSS5 Media Queries')}} |                                                                   |
| {{SpecName('CSS4 Media Queries', '#inverted', 'inverted-colors')}} | {{Spec2('CSS4 Media Queries')}} | Repoussée à la spécification de niveau 5 pour les requêtes média. |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.inverted-colors")}}
