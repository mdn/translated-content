---
title: mask-border-source
slug: Web/CSS/mask-border-source
---

{{CSSRef}}{{SeeCompatTable}}

La propriété CSS **`mask-border-source`** définit l'image à utiliser pour créer [le masque de bordure](/fr/docs/Web/CSS/mask-border) d'un élément.

C'est la propriété {{cssxref("mask-border-slice")}} qui est utilisée afin de découper l'image en tranches/régions ensuite appliquées dynamiquement pour créer le masque final.

## Syntaxe

```css
/* Valeur avec un mot-clé */
mask-border-source: none;

/* Valeurs de type <image> */
mask-border-source: url(image.jpg);
mask-border-source: linear-gradient(to top, red, yellow);

/* Valeurs globales */
mask-border-source: inherit;
mask-border-source: initial;
mask-border-source: unset;
```

### Valeurs

- `none`
  - : Aucun masque de bordure n'est utilisé.
- {{cssxref("&lt;image&gt;")}}
  - : Une référence vers une image qu'on utilise pour le masque de la bordure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Voir la page {{cssxref("mask-border")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
