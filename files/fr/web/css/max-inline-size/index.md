---
title: max-inline-size
slug: Web/CSS/max-inline-size
---

{{CSSRef}}{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`max-inline-size`** définit la taille maximale horizontale ou verticale d'un élément en ligne (_inline_) selon le mode d'écriture utilisé. Elle correspond à la propriété {{cssxref("max-width")}} ou {{cssxref("max-height")}} selon la valeur utilisée pour {{cssxref("writing-mode")}}. Si le mode d'écriture est orienté verticalement, `max-inline-size` fait référence à la hauteur maximale de l'élément, sinon elle fait référence à la largeur maximale de l'élément. La propriété {{cssxref("max-block-size")}} peut être utilisée pour les blocs.

{{EmbedInteractiveExample("pages/css/max-inline-size.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
max-inline-size: 300px;
max-inline-size: 25em;

/* Valeurs proportionnelles */
/* Type <percentage> */
max-inline-size: 75%;

/* Valeurs avec un mot-clé */
max-inline-size: none;
max-inline-size: max-content;
max-inline-size: min-content;
max-inline-size: fit-content;
max-inline-size: fill-available;

/* Valeurs globales */
max-inline-size: inherit;
max-inline-size: initial;
max-inline-size: unset;
```

### Valeurs

La propriété `max-inline-size` peut prendre les mêmes valeurs que les propriétés {{cssxref("max-width")}} ou {{cssxref("max-height")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### CSS

```css
.exemple {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 100%;
  max-inline-size: 200px;
}
```

### HTML

```html
<p class="exemple">Texte d'exemple</p>
```

### Résultat

{{EmbedLiveSample("Exemple")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes : {{cssxref("max-width")}} et {{cssxref("max-height")}}
- {{cssxref("writing-mode")}}
