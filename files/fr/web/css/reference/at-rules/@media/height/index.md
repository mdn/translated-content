---
title: height
slug: Web/CSS/Reference/At-rules/@media/height
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`height`** permet d'appliquer des styles en fonction de la hauteur de la {{Glossary("viewport", "zone d'affichage")}} (ou de la boîte de page, pour les [médias paginés](/fr/docs/Web/CSS/Guides/Paged_media)).

## Syntaxe

La caractéristique `height` est définie comme une longueur (type {{CSSxRef("&lt;length&gt;")}}) et représente la hauteur de la zone d'affichage. C'est une caractéristique d'intervalle et on peut donc utiliser les variantes préfixées **`min-height`** et **`max-height`** afin de cibler des règles selon un minimum ou un maximum.

## Exemples

### HTML

```html
<div>
  Surveillez cet élément lors du redimensionnement de la zone d'affichage.
</div>
```

### CSS

```css
/* Hauteur exacte */
@media (height: 360px) {
  div {
    color: red;
  }
}

/* Hauteur minimale */
@media (min-height: 25rem) {
  div {
    background: yellow;
  }
}

/* Hauteur maximale */
@media (max-height: 40rem) {
  div {
    border: 2px solid blue;
  }
}
```

### Résultat

{{EmbedLiveSample('Exemples','90%')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- La règle {{CSSxRef("@media")}}
