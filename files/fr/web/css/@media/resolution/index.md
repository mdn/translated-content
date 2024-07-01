---
title: resolution
slug: Web/CSS/@media/resolution
---

{{CSSRef}}

**`resolution`** est une caractéristique média CSS dont la valeur représente la densité de pixels de l'appareil d'affichage.

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
