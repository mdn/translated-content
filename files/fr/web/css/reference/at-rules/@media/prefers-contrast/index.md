---
title: prefers-contrast
slug: Web/CSS/Reference/At-rules/@media/prefers-contrast
original_slug: Web/CSS/@media/prefers-contrast
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`prefers-contrast`** permet de détecter si un·e utilisateur·ice a demandé à ce que le contenu web soit présenté avec un contraste plus faible ou plus élevé.

## Syntaxe

- `no-preference`
  - : Indique qu'aucune préférence n'a été exprimée par l'utilisateur·ice dans le système. Cette valeur-clé est évaluée à faux dans un contexte booléen.
- `more`
  - : Indique que l'utilisateur·ice a signalé au système qu'il·elle préfère une interface avec un contraste plus élevé.
- `less`
  - : Indique que l'utilisateur·ice a signalé au système qu'il·elle préfère une interface avec un contraste plus faible.
- `custom`
  - : Indique que l'utilisateur·ice a signalé au système l'utilisation d'un jeu de couleurs spécifique, et que le contraste impliqué par ces couleurs ne correspond ni à «&nbsp;more&nbsp;» ni à «&nbsp;less&nbsp;». Cette valeur correspond à la palette de couleurs définie par les utilisateur·ice·s de [`forced-colors: active`](/fr/docs/Web/CSS/Reference/At-rules/@media/forced-colors).

## Préférences utilisateur

Les différents systèmes d'exploitation prennent en charge des réglages de contrastes et les agents utilisateurs peuvent utiliser les valeurs de ces réglages pour déterminer la valeur de cette caractéristique.

## Exemples

Par défaut, cet exemple présente un contraste trop faible pour la lisibilité.

### HTML

```html
<div class="contrast">Une boîte avec un contraste faible.</div>
```

### CSS

```css
.contrast {
  width: 100px;
  height: 100px;
  outline: 2px dashed black;
}

@media (prefers-contrast: more) {
  .contrast {
    outline: 2px solid black;
  }
}
```

### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La caractéristique média [`forced-colors`](/fr/docs/Web/CSS/Reference/At-rules/@media/forced-colors)
