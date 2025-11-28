---
title: resolution
slug: Web/CSS/Reference/At-rules/@media/resolution
original_slug: Web/CSS/@media/resolution
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`resolution`** peut être utilisée pour tester la densité de pixels de l'appareil de sortie.

## Syntaxe

La caractéristique `resolution` est une valeur de type {{cssxref("&lt;resolution&gt;")}} qui représente la densité de pixels de l'appareil d'affichage. C'est une caractéristique d'intervalle, cela signifie qu'on peut utiliser les variantes préfixées **`min-resolution`** et **`max-resolution`** afin d'établir des règles selon un minimum ou un maximum.

## Exemples

### HTML

```html
<p>Un test pour la densité de pixels de votre appareil.</p>
```

### CSS

```css
/* Résolution exacte  */
@media (resolution: 150dpi) {
  p {
    color: red;
  }
}

/* Résolution minimale */
@media (min-resolution: 72dpi) {
  p {
    text-decoration: underline;
  }
}

/* Résolution maximale */
@media (max-resolution: 300dpi) {
  p {
    background: yellow;
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

- {{domxref("window.devicePixelRatio")}}
- La propriété {{cssxref("image-resolution")}}
