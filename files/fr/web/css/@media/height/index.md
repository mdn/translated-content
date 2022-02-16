---
title: height
slug: Web/CSS/@media/height
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/height
---
{{CSSRef}}

**`height`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) dont la valeur représente la hauteur de la zone d'affichage (_viewport_) (ou de la boîte de page pour les média paginés).

## Syntaxe

La caractéristique `height` est définie comme une longueur (type {{cssxref("&lt;length&gt;")}}) et représente la hauteur de la zone d'affichage. C'est une caractéristique d'intervalle et on peut donc utiliser les variantes préfixées **`min-height`** et **`max-height`** afin de cibler des règles selon un minimum ou un maximum.

## Exemples

### HTML

```html
<div>
  Surveillez cet élément lors du
  redimensionnement de la zone d'affichage.
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

| Spécification                                                            | État                                     | Commentaires                                                                  |
| ------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------- |
| {{SpecName('CSS4 Media Queries', '#height', 'height')}} | {{Spec2('CSS4 Media Queries')}} | La valeur peut désormais être négative (ce qui correspond à un booléen faux). |
| {{SpecName('CSS3 Media Queries', '#height', 'height')}} | {{Spec2('CSS3 Media Queries')}} | Définition initiale. La valeur ne doit pas être négative.                     |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.height")}}
