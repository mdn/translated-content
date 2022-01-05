---
title: prefers-contrast
slug: Web/CSS/@media/prefers-contrast
translation_of: Web/CSS/@media/prefers-contrast
---
{{CSSRef}}{{SeeCompatTable}}{{draft}}

La [caractéristique média](</fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries#Caractéristiques_média_(media_features)>) **`prefers-contrast`** permet de détecter si l'utilisateur a configuré son système pour utiliser un contraste élevé.

## Syntaxe

- `no-preference`
  - : Cette valeur indique que l'utilisateur n'a exprimé aucune préférence particulière. La valeur de ce mot-clé est évaluée à `false` dans un contexte booléen.
- `high`
  - : Cette valeur indique que l'utilisateur a configuré son système pour avoir un contraste plus élevé.
- `low`
  - : Cette valeur indique que l'utilisateur a configuré son système afin d'avoir un niveau de contraste plus faible.

## Préférences utilisateur

À l'heure actuelle, aucun agent utilisateur n'implémente cette fonctionnalité bien que différents systèmes d'exploitation prennent en charge ce type de paramètre.

## Exemples

Par défaut, cet exemple présente un contraste trop faible pour la lisibilité.

### HTML

```html
<div class="contrast">Une boîte avec un contraste faible.</div>
```

### CSS

```css
.contrast {
  color: grey;
}

@media (prefers-contrast: high) {
  .contrast {
    color: black;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Specification                                                                                                            | État                                     | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName('CSS5 Media Queries', '#descdef-media-prefers-contrast', 'prefers-contrast')}} | {{Spec2('CSS5 Media Queries')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.prefers-contrast")}}

## Voir aussi

- La caractéristique média spécifique à Microsoft [`-ms-high-contrast`](https://msdn.microsoft.com/library/Hh771830)

{{QuickLinksWithSubpages("/fr/docs/Web/CSS/@media/")}}
