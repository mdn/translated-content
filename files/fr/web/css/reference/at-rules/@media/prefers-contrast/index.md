---
title: Caractéristique média CSS `prefers-contrast`
short-title: prefers-contrast
slug: Web/CSS/Reference/At-rules/@media/prefers-contrast
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
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
  - : Indique que l'utilisateur·ice a signalé au système l'utilisation d'un jeu de couleurs spécifique, et que le contraste impliqué par ces couleurs ne correspond ni à `more` ni à `less`. Cette valeur correspond à la palette de couleurs définie par les utilisateur·ice·s de [`forced-colors: active`](/fr/docs/Web/CSS/Reference/At-rules/@media/forced-colors).

## Préférences utilisateur

Les différents systèmes d'exploitation prennent en charge des réglages de contrastes et les agents utilisateurs peuvent utiliser les valeurs de ces réglages pour déterminer la valeur de cette caractéristique.

## Exemples

Cet exemple inclut une boîte avec une ligne externe ({{CSSxRef("outline")}}) en pointillés appliquée par défaut. Lorsque la requête média `prefers-contrast: more` correspond, le contour appliqué reçoit un style `solid` à contraste plus élevé à la place.

### HTML

```html
<div class="contrast">Une boîte avec un contraste faible.</div>
```

### CSS

```css
.contrast {
  margin: 5px;
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
