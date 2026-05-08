---
title: Caractéristique média CSS `device-aspect-ratio`
short-title: device-aspect-ratio
slug: Web/CSS/Reference/At-rules/@media/device-aspect-ratio
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{Deprecated_Header}}

> [!NOTE]
> Pour interroger le {{Glossary("aspect ratio", "rapport d'aspect")}} de la zone d'affichage, il faut utiliser la caractéristique média {{CSSxRef("@media/aspect-ratio", "aspect-ratio")}}.

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`device-aspect-ratio`** peut être utilisée pour tester le {{Glossary("aspect ratio", "rapport d'aspect")}} largeur/hauteur d'un périphérique de sortie.

## Syntaxe

La caractéristique `device-aspect-ratio` est définie sous la forme d'un ratio (type CSS {{CSSxRef("&lt;ratio&gt;")}}). C'est une caractéristique d'intervalle ce qui signifie qu'on peut utiliser les variantes préfixées **`min-device-aspect-ratio`** et **`max-device-aspect-ratio`** afin de cibler des règles en fonction de minimum ou maximum.

## Exemples

```css
article {
  padding: 1rem;
}

@media screen and (min-device-aspect-ratio: 16/9) {
  article {
    padding: 1rem 5vw;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
