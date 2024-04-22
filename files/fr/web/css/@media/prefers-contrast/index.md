---
title: prefers-contrast
slug: Web/CSS/@media/prefers-contrast
---

{{CSSRef}}{{SeeCompatTable}}

La [caractéristique média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries#caractéristiques_média_media_features) [CSS](/fr/docs/Web/CSS) **`prefers-contrast`** permet de détecter si l'utilisatrice ou l'utilisateur a configuré son système pour utiliser un contraste élevé (ou faible).

## Syntaxe

- `no-preference`
  - : Cette valeur indique que qu'aucune préférence particulière n'a été exprimée. La valeur de ce mot-clé est évaluée à `false` dans un contexte booléen.
- `more`
  - : Cette valeur indique que le système a été configuré afin d'avoir un contraste plus élevé.
- `less`
  - : Cette valeur indique que le système a été configuré afin d'avoir un niveau de contraste plus faible.

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

- La caractéristique média spécifique à Microsoft [`-ms-high-contrast`](<https://docs.microsoft.com/fr-fr/previous-versions/hh771830(v=vs.85)>)
- La caractéristique média [`forced-colors`](/fr/docs/Web/CSS/@media/forced-colors)

{{QuickLinksWithSubpages("/fr/docs/Web/CSS/@media/")}}
