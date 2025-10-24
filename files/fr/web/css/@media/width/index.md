---
title: width
slug: Web/CSS/@media/width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`width`** peut être utilisée pour tester la largeur de la {{glossary("viewport", "zone d'affichage")}} (ou de la boîte de page, pour [les médias paginés](/fr/docs/Web/CSS/CSS_paged_media)).

## Syntaxe

**`width`** est une valeur décrivant la largeur d'affichage, les versions préfixées **`min-width`** et **`max-width`** peuvent également être utilisées afin de décrire la largeur minimale (resp. la largeur maximale).

## Exemples

### HTML

```html
<div>
  Observez cet élément lorsque vous redimensionnez la largeur du viewport.
</div>
```

### CSS

```css
/* Largeur exacte */
@media (width: 360px) {
  div {
    color: red;
  }
}

/* Largeur minimale */
@media (min-width: 35rem) {
  div {
    background: yellow;
  }
}

/* Largeur maximale */
@media (max-width: 50rem) {
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

- [Utiliser les requêtes média](/fr/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@media")}}
